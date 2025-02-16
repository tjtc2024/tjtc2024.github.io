from pyscript import display
from PIL import Image, ImageEnhance
import matplotlib.pyplot as plt
import numpy as np
# ライブラリのインポート宣言 --- (*3)
min = 140

# トーンカーブ補正
img = Image.open("diamond_gs1.jpg")
br = ImageEnhance.Brightness(img)
img_br = br.enhance(0.75)
con = ImageEnhance.Contrast(img_br)
img_con = con.enhance(1.5)

fig, ax = plt.subplots()
ax.imshow(img_con, cmap="gray")

# グラフのレンダリング --- (*7)
display(plt, target="mlp")