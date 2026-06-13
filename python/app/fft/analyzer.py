import numpy as np

def analyze(signal):
    fft = np.fft.fft(signal)
    freq = np.fft.fftfreq(len(signal))

    return freq, np.abs(fft)

def spectrum(signal,sample_rate):
    fft = np.fft.fft(signal)

    freqs = np.fft.fftfreq(
        len(signal),
        d=1/sample_rate
    )

    shifted_fft = np.fft.fftshift(fft)
    shifted_freqs = np.fft.fftshift(freqs)

    return shifted_freqs, np.abs(shifted_fft)