#! /bin/env python3
"""
Download the images for all recipes from their json representation
"""

import json
import requests
from argparse import ArgumentParser
from pathlib import Path


def download_image(url, base_path, filename):
    response = requests.get(url)
    extension = url[url.rindex("."):]
    save_path = Path(base_path).joinpath(str(filename)+extension)
    save_path.parent.mkdir(parents=True, exist_ok=True)
    with open(save_path, "wb") as f:
        f.write(response.content)


def parse_cmd_args():
    parser = ArgumentParser()
    parser.add_argument(dest="site", help="From which site are the images?")
    parser.add_argument(
        dest="json", help="A json file containing the recipes")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_cmd_args()
    input_file = Path(args.json)
    with open(input_file, "r") as f:
        content = json.load(f)

    for recipe_index, recipe in enumerate(content):
        for img_index, url in enumerate(recipe["images"]):
            download_image(
                url, f"{args.site}/{input_file.name.replace(input_file.suffix, '')}/{recipe_index}", img_index)