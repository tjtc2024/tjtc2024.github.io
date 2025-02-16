from pyscript import display
from PIL import Image
import matplotlib.pyplot as plt
import numpy as np
# ライブラリのインポート宣言 --- (*3)
#min = 140
#tone_curve = [int(255 * (n - min) / (255 - min)) if n > min else 0 for n in range(0,256)]

# トーンカーブ補正
im = Image.open("diamond_gs1.jpg")
#diamond_toned = ImageOps.autocontrast(diamond, curve=tone_curve)
im_toned = np.asarray(im)

#w,h = im.size

#for y in range(0,h):
#    for x in range(0,w):
#        c_pre = im[y][x]
#        im_toned[y][x] = 255 * (c_pre - 130) / (255 - 130) if c_pre > 130 else 0


fig, ax = plt.subplots()
ax.imshow(im_toned, cmap="gray")

# グラフのレンダリング --- (*7)
display(plt, target="mlp")