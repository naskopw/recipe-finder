#! /usr/bin/env python3

import pandas as pd
import ezodf
import json

doc = ezodf.opendoc("document.ods")

product_map = {}
recipe_map = {}

for i,row in enumerate([row for row in doc.sheets[0].rows()]):
    if i>0 and row[0].value is not None:
        print(row[0].value, row[1].value)
        index = int(row[0].value)
        product = row[1].value
        product_map[index] = product


for row in [row for row in doc.sheets[1].rows() if row[0].value][1:]:
    recipe_name = row[0].value
    recipe_indices = [int(v.strip()) for v in row[1].value.split(",")]
    recipe_map[recipe_name] = [product_map[i] for i in recipe_indices]

with open("merged.json","r") as f:
    recipe_data = json.load(f)

for i,r in enumerate(recipe_data):
    r.pop("images")
    r["servings"] = int(r["servings"])
    r["products"] = recipe_map[r["title"]] 
    
with open("final.json","w") as f:
    json.dump(recipe_data,f)
