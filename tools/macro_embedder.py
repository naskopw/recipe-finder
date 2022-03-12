#! /bin/env python3

"""
Embed a macro inside libre office file
"""

import zipfile
import shutil
import os
import sys
from pathlib import Path
from argparse import ArgumentParser

def parse_cmd_args():
    """
    Parse the cmd arguments
    """
    parser = ArgumentParser()
    parser.add_argument(
        dest="libre_file", help="The libre office file")
    parser.add_argument(
        dest="macro_file", help="A python file containg the macros")
    return parser.parse_args()

if __name__ == "__main__":
    args = parse_cmd_args()
    original_file = Path(args.libre_file)
    result_file = original_file.parent.joinpath("result_"+original_file.name)
    macro_file = Path(args.macro_file)

    print("Open file " + original_file.name)

    shutil.copyfile(sys.argv[1],result_file)

    doc = zipfile.ZipFile(result_file,'a')
    doc.write(str(macro_file), f"Scripts/python/{macro_file.name}")
    manifest = []
    for line in doc.open('META-INF/manifest.xml'):
        if '</manifest:manifest>' in line.decode('utf-8'):
            for path in ['Scripts/','Scripts/python/',f'Scripts/python/{macro_file.name}']:
                manifest.append(' <manifest:file-entry manifest:media-type="application/binary" manifest:full-path="%s"/>' % path)
        manifest.append(line.decode('utf-8'))

    doc.writestr('META-INF/manifest.xml', ''.join(manifest))
    doc.close()
    print("File created: "+result_file.name)