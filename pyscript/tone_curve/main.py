from pyscript import display
from PIL import Image, ImageOps
import matplotlib.pyplot as plt
import numpy as np
# ライブラリのインポート宣言
s0 = float(150)
tone_curve = lambda s : int(min(1024.0 * (float(s) - s0) / (255.0 - s0),255.0)) if s > s0 else 0

# トーンカーブ補正
im = Image.open("../imgs/diamond_gs1.jpg")
im_ref = np.asarray(im)

w,h = im.size

im_toned = np.array([[tone_curve(im_ref[y][x]) for x in range(0,w)] for y in range(0,h)])

fig, ax = plt.subplots()
ax.imshow(im_toned, cmap="gray")

# グラフのレンダリング
display(plt, target="mlp")