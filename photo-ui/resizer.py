from PIL import Image
import sys
import glob
import os
import errno

def make_dirs(filename):
    directory = os.path.dirname(filename)
    if not os.path.exists(directory):
        try:
            os.makedirs(directory)
        except OSError as exc:
            if exc.errno != errno.EEXIST:
                raise

def get_path(filename, prefix):
    return os.path.join('static', prefix, filename)

def should_skip(reprocess, filename, prefixes):
    for prefix in prefixes:
        new_path = get_path(filename, prefix)
        if reprocess or not os.path.exists(new_path):
            return False # don't skip, need to process
    return True

def resize_and_save(reprocess, image, filename, prefix, width, height, quality):
    new_path = get_path(filename, prefix)
    image = image.resize((width, height), resample=Image.BICUBIC)
    make_dirs(new_path)
    image.save(new_path, 'JPEG', quality=quality)
    print('Saved {}'.format(new_path))

def main(reprocess):
    for filename in glob.iglob('photos/**/*.jp*g', recursive=True):
        if should_skip(reprocess, filename, ['small', 'large']):
            continue

        try:
            image = Image.open(filename)
        except IOError:
            print('File {} could not be opened.'.format(filename))
            return

        image = image.convert("RGB")
        width, height = image.size

        if width > height:
            small_width = 472 * 2 # Magic number from ImageCard.vue
            small_height = round(small_width * (height / width))
            large_width = 2560 # That's large enough
            large_height = round(large_width * (height / width))
        else:
            small_height = 400 * 2 # Another magic number from ImageCard.vue
            small_width = round(small_height * (width / height))
            large_height = 2560
            large_width = round(large_height * (width / height))

        resize_and_save(reprocess, image, filename, 'small', small_width, small_height, 85)
        resize_and_save(reprocess, image, filename, 'large', large_width, large_height, 90)

if __name__ == '__main__':
    reprocess = False
    if len(sys.argv) > 1:
        if sys.argv[1] == '-a':
            reprocess = True
    main(reprocess)