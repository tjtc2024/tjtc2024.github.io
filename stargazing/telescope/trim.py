import sys
from PIL import Image

#
# サイズ確認後トリミングするツール
# 

def main(img_filename):
    img = Image.open(img_filename)

    (w,h) = img.size

    (left, upper, right, lower) = (0,h/5,w,4*h/5)
    img_trim = img.crop((left, upper, right, lower))
    img_trim.save('result.jpg')

if __name__ == '__main__':
    main(sys.argv[1])