#! /bin/env python3
import string
import json
import yaml
import re
from argparse import ArgumentParser
import pandas


def parse_cmd_args():
    """
    Parse the cmd arguments
    """
    parser = ArgumentParser()
    parser.add_argument(
        dest="json", help="A json file containing all the recipes")
    parser.add_argument(
        dest="ignore", help="A yaml file containing all the ignored words/patterns")
    parser.add_argument("-o", dest="output",
                        default="output.xlsx", help="The output excel file")
    return parser.parse_args()


def parse_config(filepath):
    """
    Reads a yaml file and returns its content
    """
    with open(filepath, 'r') as f:
        content = yaml.load(f, yaml.FullLoader)
    return content


def is_ignored(word, ignore_list):
    """
    Checks whether a string is contained in a list of strings
    """
    for ignore in ignore_list:
        if word in ignore:
            return True
    return False


def split_ingredients(ingredient_list):
    """
    Seperate a single ingredient entry by commas.
    Example: "salt, if desired"
    This string would be split into 2 ingredients - "salt" and "if desired"
    and "if desired" can be ignored later
    """
    result = []
    for ingr in ingredient_list:
        result.extend(ingr.split(","))
    return result


def create_ignore_list(ignore_file):
    """
    Loads the ignored words/patterns from a file
    """
    ignore_dict = parse_config(ignore_file)
    ignore_list = [
        [f"{x}s" for x in ignore_dict["KitchenMetricsRegularPlural"]]]
    for category in ignore_dict:
        ignore_list.append(ignore_dict[category])
    return ignore_list, ignore_dict


def create_recipe_map(recipes, ingredient_map):
    """
    Map recipe names to lists of ingredients(by index)
    """
    recipe_dict = {}
    for recipe in recipes:
        indices = set()
        for ingr, val in ingredient_map.items():
            if recipe["title"] in val[1]:
                indices.add(str(val[0]))
        recipe_dict[recipe["title"]] = ", ".join(indices)
    return recipe_dict


def save_excel(output):
    """
    Save the data to an excel file
    """
    df = pandas.DataFrame(columns=["Ingredients"])
    df2 = pandas.DataFrame(columns=["Recipes", "Indices"])
    for ingr in ingredient_map.keys():
        df = df.append({"Ingredients": ingr}, ignore_index=True)

    for rec, indices in recipe_dict.items():
        df2 = df2.append(
            {"Recipes": rec, "Indices": indices}, ignore_index=True)

    writer = pandas.ExcelWriter(output)
    df.to_excel(writer, sheet_name="Sheet1")
    df2.to_excel(writer, sheet_name="Sheet2", index=None)
    writer.save()


if __name__ == "__main__":
    args = parse_cmd_args()
    with open(args.json, "r") as f:
        recipes = json.load(f)

    ignore_list, ignore_dict = create_ignore_list(args.ignore)

    ingredient_map = {}
    i = 0
    for recipe in recipes:
        for ingredient in split_ingredients(recipe["ingredients"]):
            stripped = None if any(
                x in ingredient for x in ignore_dict["Trademarks"]) else ingredient
            if stripped:  # If the strings doesn't contain trademark symbols
                #Ignore all patterns
                for pattern in ignore_dict["Patterns"]:
                    stripped = stripped.replace(pattern, "")
                #Remove everything inside parentheses
                stripped = re.sub(r'\([^)]*\)', '', stripped).strip()
                if "(" in stripped:
                    stripped = stripped[:stripped.index("(")]

                #Ignore numbers and words in the ignore list
                words = [word for word in stripped.replace(",", "").split(
                ) if not is_ignored(word, ignore_list) and not word.isnumeric()]

                #Join the list of words back to a string
                joined = " ".join(words).strip("-").strip(")")

                if joined != "":
                    #Add to the ingredient map[ingredient][(ingredient_index, recipe name)]
                    if joined not in ingredient_map.keys():
                        ingredient_map[joined] = (i, [recipe["title"]])
                        i += 1
                    else:
                        ingredient_map[joined][1].append(recipe["title"])

    print(f"Total: {len(ingredient_map.values())} products")
    recipe_dict = create_recipe_map(recipes, ingredient_map)
    save_excel(args.output)
