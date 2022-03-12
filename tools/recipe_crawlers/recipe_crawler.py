#! /bin/env python3
import json
import os
import timeit
from argparse import ArgumentParser
from multiprocessing import Process, Queue
from pathlib import Path

from bs4 import BeautifulSoup

from recipe import Recipe
from single_page_crawlers import all_recipes


def parse_cmd_args():
    parser = ArgumentParser()
    parser.add_argument(dest="html_file")
    parser.add_argument(dest="output_file")
    return parser.parse_args()


def run(links, output_file):
    # Crawlers are started in separate processes,
    # because dryscrape seem to leak memory and eventually you run out of RAM
    output = Path(output_file)
    q = Queue()
    recipes = []
    cls = lambda: os.system('cls' if os.name == 'nt' else 'clear')
    try:
        for i, url in enumerate(links):
            cls()
            print("Progress: %.2f%%" % (i / len(links) * 100))
            p = Process(target=all_recipes.start_interruptable, args=(q, url))
            p.start()
            recipes.append(q.get())
            p.join()
        cls()
    except KeyboardInterrupt:
        print("Interrupted by the user. Progress: %.2f%%" % (i / len(links) * 100))

    if not output.parent.exists():
        os.makedirs(output.parent)
    with open(output, "w") as f:
        f.write(json.dumps(recipes, cls=Recipe.EncodeRecipe, indent=4))
    


def save_recipe_links(save_file, links):
    global f
    with open(str(save_file).replace(save_file.suffix, ".txt"), "w") as f:
        f.write("\n".join(links))


if __name__ == "__main__":
    args = parse_cmd_args()
    html_file = Path(args.html_file)
    if not html_file.exists():
        raise FileNotFoundError(args.html_file)
    with open(html_file, "r") as f:
        soup = BeautifulSoup(f, "html.parser")
    all_recipe_links = [x["href"] for x in soup.findAll("a", class_="recipeCard__imageLink")]
    save_recipe_links(html_file, all_recipe_links)
    t = timeit.Timer(lambda: run(all_recipe_links, args.output_file))
    print("Finished! Total time: %.2f secs" % t.timeit(1))