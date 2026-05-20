import numpy as np

def analyze(signal):
    fft = np.fft.fft(signal)
    freq = np.fft.fftfreq(len(signal))

    return freq, np.abs(fft)