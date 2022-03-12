#! /bin/env python3
from multiprocessing import Queue

import dryscrape as d
from bs4 import BeautifulSoup

from recipe import Recipe

def start_interruptable(q: Queue, url: str):
    try:
        start(q,url)
    except KeyboardInterrupt:
        pass

def start(q: Queue, url: str):
    d.start_xvfb()
    br = d.Session()
    br.visit(url)
    response = br.body()
    soup = BeautifulSoup(response, "html.parser")

    try:
        title = soup.find(
            "h1", class_=["headline", "heading-content"]).text.strip()
    except Exception:
        title = None
    try:
        servings = soup.select(
            "body > div.docked-sharebar-content-container > div > main > div.recipe-container.two-col-container > div.content.two-col-main-content.karma-content-container > div.recipe-content.two-col-content.karma-main-column > div.two-col-content-wrapper > div.recipe-content-container > div.lead-content-wrapper.two-col-style > div.lead-content-aside-wrapper > div > section > div:nth-child(2) > div:nth-child(1) > div.recipe-meta-item-body")[
            0].text.strip()
    except Exception:
        servings = None
    try:
        steps = [x.text.strip() for x in soup.find(
            "ul", class_="instructions-section").findAll("li")]
    except Exception:
        steps = None
    try:
        desc = soup.find("div", class_="recipe-summary").find("p").text
    except Exception:
        desc = None
    try:
        time = soup.findAll("div", class_=[
            "recipe-meta-item"])[2].find("div", class_="recipe-meta-item-body").text.strip()
    except Exception:
        time = None
    try:
        ingredients = [x.text.strip() for x in soup.findAll(
            "span", class_="ingredients-item-name")]
    except Exception:
        ingredients = None
    imgs = []
    try:
        img_tag = soup.select(
            "body > div.docked-sharebar-content-container > div > main > div.recipe-container.two-col-container > div.content.two-col-main-content.karma-content-container > div.recipe-content.two-col-content.karma-main-column > div.two-col-content-wrapper > div.recipe-content-container > div.lead-content-wrapper.two-col-style > div.primary-media-section.primary-media-with-filmstrip > div.component.image-filmstrip > div")[
            0]
        for tag in img_tag.findAll("noscript"):
            img_src = str(tag)[str(tag).index("img src=") + len("img src=\""):]
            img_src = img_src[:img_src.index('"')]
            imgs.append(img_src)
    except Exception:
        imgs = None

    # Only create a recipe if those properties are present
    if title and ingredients and imgs and steps:
        q.put(Recipe(title, desc, time, servings,ingredients, imgs, steps))