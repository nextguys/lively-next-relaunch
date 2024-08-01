import os
import re
from pathlib import Path

project_directory = Path(__file__).parent

def ensure_files(file_paths):
    flattened_files = []
    for file_path in file_paths:
        if os.path.isdir(file_path):
            for root, dirs, files in os.walk(file_path):
                for file in files:
                    sub_path = os.path.join(root, file)
                    if not os.path.isdir(sub_path):
                        flattened_files.append(sub_path)
        else:
      	    flattened_files.append(file_path)
    return flattened_files

def read_files(file_paths):
    contents = []
    for file_path in file_paths:
        with open(file_path, 'r') as file:
            contents.append(file.read())
    return contents

def manipulate_content(contents):
    processed_contents = []
    for content in contents:
        # FIXME: Usually, the freezer requires us to rewrite the asset name, so that it's prefixed with the projects name and owner.
        # As we will not use the website as a dependency, we do not this.
        # However, this is more lazy than clean... 
        processed_content = re.sub(r'/local_projects/nextguys--lively-next-relaunch/assets', './assets', content)
        processed_contents.append(processed_content)
    return processed_contents

def write_files(file_paths, contents):
    for file_path, content in zip(file_paths, contents):
        with open(file_path, 'w') as file:
            file.write(content)

def process_files(file_paths):
    contents = read_files(file_paths)
    manipulated_contents = manipulate_content(contents)
    write_files(file_paths, manipulated_contents)

file_paths = [
    '../ui/pages/compiled_desktop.js',
    '../ui/pages/compiled_mobile.js',
    '../explanation/modules.cp.js',
    '../explanation/morphic.cp.js',
    '../explanation/projects.cp.js',
    '../explanation/studio.cp.js',
    '../assets/articles/entries.js',
    '../assets/prerendered/'
    ] 
resolved_file_paths = ensure_files([(project_directory / file_path).resolve() for file_path in file_paths])
process_files(resolved_file_paths)
