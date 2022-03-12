#! /bin/env/python3
"""
Download category images from different providers
"""

import sys
from os import stat, path
from selenium import webdriver
import selenium
import urllib.request
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import requests
from pathlib import Path

SAVE_PARENT_PATH = Path("products/images")
if not path.exists(SAVE_PARENT_PATH):
    SAVE_PARENT_PATH.mkdir(parents=True)


class Webdriver:
    Chrome = (webdriver.Chrome, "webdrivers/chromedriver.exe")
    Edge = (webdriver.Edge, "webdrivers/msedgedriver.exe")

    @staticmethod
    def instantiate(driver):
        return driver[0](driver[1])


class DataSource:
    def GOOGLE_IMAGE_URL(
        product): return f"https://www.google.com/search?q={product}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiy0fvJn9vwAhWE2aQKHebvDpgQ_AUoAXoECAEQAw&biw=1282&bih=577"

    def BING_IMG_URL(
        product): return f"https://www.bing.com/images/search?q={product}&form=HDRSC2&first=1&tsc=ImageBasicHover"

    def DUCK_DUCK_GO_URL(
        product): return f"https://duckduckgo.com/?q={product}&t=h_&iax=images&ia=images"
    def PEXELS_URL(
        product): return f'https://www.pexels.com/search/{product}/?size=small'

    def OPENVERSE_URL(
        product): return f"https://wordpress.org/openverse/search/image?q={product}"

class ImageEngine:
    @staticmethod
    def download_image_google(product: str):
        try:
            driver.get(DataSource.GOOGLE_IMAGE_URL(product))
            driver.find_element_by_xpath(
                '//*[@id="islrg"]/div[1]/div[1]/a[1]/div[1]/img').screenshot(
                    str(SAVE_PARENT_PATH.joinpath(f"{product}.png")))
        except Exception as e:
            print(e)
            raise NoSuchElementException(e)

    @staticmethod
    def download_image_duck_duck_go(product: str):
        driver.get(DataSource.DUCK_DUCK_GO_URL(product))
        try:
            container = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(
                    (By.CLASS_NAME, "tile--img__img"))
            )
            container.click()
            driver.implicitly_wait(1)
            img_div = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(
                    (By.CLASS_NAME, "detail__media__img-thumbnail"))
            )
            driver.implicitly_wait(1)
            src = img_div.get_attribute("src")
            r = requests.get(src)
            with open(SAVE_PARENT_PATH.joinpath(f"{product}.png"), "wb") as f:
                f.write(r.content)
        except Exception as e:
            msg = f"{e} {product}"
            raise Exception(msg)

    @staticmethod
    def download_image_pexels(product: str):
        driver.get(DataSource.PEXELS_URL(product))
        try:
            img_div = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(
                    (By.CLASS_NAME, "photo-item__img"))
            )
            src = img_div.get_attribute("src")
            r = requests.get(src)
            with open(SAVE_PARENT_PATH.joinpath(f"{product}.jpeg"), "wb") as f:
                f.write(r.content)
        except Exception as e:
            print(e)

import json

if __name__ == "__main__":
    with open("final.json", "r") as f:
        data = json.load(f)
    products = [x['products'] for x in data]
    flatlist={element for sublist in products for element in sublist}
    print(f"Total: {len(flatlist)}")
    already_downloaded = {x.stem for x in SAVE_PARENT_PATH.glob("*.*")}
    driver = Webdriver.instantiate(Webdriver.Chrome)
    # products = flatlist.difference(already_downloaded)
    products = flatlist
    while True:
        try:
            for index, product in enumerate(products):
                if product in already_downloaded:
                    print(f"Skipping product {product}. Reason: already downloaded.")
                else:
                    ImageEngine.download_image_duck_duck_go(product)
                print(f"Progress {index+1}/{len(products)}")
        except Exception as e:
            print(e)
        if index >= len(products)-1:
                driver.quit()
                sys.exit(0)
            