from pyscript import display
from PIL import Image, ImageOps
import matplotlib.pyplot as plt
import numpy as np
# ライブラリのインポート宣言 --- (*3)
min = 140

# トーンカーブ補正
im = Image.open("../imgs/diamond_gs1.jpg")
im_toned = ImageOps.autocontrast(im, 1.0)

fig, ax = plt.subplots()
ax.imshow(im_toned, cmap="gray")

# グラフのレンダリング --- (*7)
display(plt, target="mlp")