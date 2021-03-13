import json
import wget
import os

BASE_URL = 'https://georgedarling.photos' # /static/small/photos/bestof/01.jpg
# https://georgedarling.photos/static/large/photos/bestof/02.jpg

def download_photo(path):
    small_address = f'{BASE_URL}/static/small/photos/{path}'
    large_address = f'{BASE_URL}/static/large/photos/{path}'
    save_to_small = f'static/small/photos/{path}'
    save_to_large = f'static/large/photos/{path}'

    subdirectory_name = path.split('/')[0]
    subdirectory_path_small = f'static/small/photos/{subdirectory_name}'
    subdirectory_path_large = f'static/large/photos/{subdirectory_name}'
    if not os.path.exists(subdirectory_path_small):
        os.makedirs(subdirectory_path_small)
    if not os.path.exists(subdirectory_path_large):
        os.makedirs(subdirectory_path_large)

    print(f'download {small_address} to {save_to_small}')
    wget.download(small_address, save_to_small)
    print(f'download {large_address} to {save_to_large}')
    wget.download(large_address, save_to_large)

with open('data.json', 'r') as f:
    categories = json.load(f)

for key in categories:
    for card in categories[key]:
        if card.get('path') is not None:
            download_photo(card['path'])

