import json


class Recipe:
    def __init__(self, title, desc, time, servings, ingredients, images, steps):
        self.title = title
        self.desc = desc
        self.time = time
        self.servings = servings
        self.ingredients = ingredients
        self.images = images
        self.steps = steps

    class EncodeRecipe(json.JSONEncoder):
        def default(self, o):
            return o.__dict__