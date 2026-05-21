import numpy as np


"""
設定した引数から信号を生成する

引数
t : 時間ベクトル ※1秒間にわたる時間の配列を生成
f1 f2 : 合成したい周波数の信号 
"""
def signal_generator(t,f1,f2):
    signal = np.sin(2 * np.pi * f1 * t) + 0.5 * np.sin(2 * np.pi * f2 * t)
    return signal