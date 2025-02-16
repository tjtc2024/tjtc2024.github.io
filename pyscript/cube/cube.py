
from pyscript import display
import matplotlib.pyplot as plt
import numpy as np

# ライブラリのインポート宣言 --- (*3)


# x軸を設定 --- (*4)
x = np.linspace(-3,3,100)
    
fig = plt.figure()
# 3次関数をプロット --- (*5)
y1 = x**3 - 3*x + 1
plt.plot(x,y1,c="r")
    
for k in range(21,41,2):
    xp = x[k]
    # 接線をプロット --- (*6)
    dyp = 3 * xp**2 - 3
    yp = xp**3 - 3*xp + 1

    y2 = dyp * (x - xp) + yp
        
    color = 'g' if abs(dyp) < 0.1 else 'b'
    plt.plot(x,y2,c=color)
            

plt.grid()
# グラフのレンダリング --- (*7)
display(plt, target="mlp")