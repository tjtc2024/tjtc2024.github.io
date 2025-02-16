from pyscript import display
import matplotlib.pyplot as plt
import numpy as np
# ライブラリのインポート宣言 --- (*3)

# x軸を設定 --- (*4)
x = np.linspace(-3,3,100)
    
fig = plt.figure()
# 3次関数をプロット --- (*5)
y1 = x**3 - 3*x + 1
plt.plot(x,y1,c="r",label="x**3 - 3x + 1")
for k in range(0,15,5):
    # 直線(1次関数)をプロット --- (*6)
    y2 = 2*x - 4 + k
    lstr = '2x - ' + str(abs(-4+k)) if -4+k < 0 else '2x + ' + str(-4+k) 
    plt.plot(x,y2,c="g",label=lstr)

plt.grid()
plt.legend()
# グラフのレンダリング --- (*7)
display(plt, target="mlp")