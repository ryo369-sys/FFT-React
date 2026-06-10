from fastapi import APIRouter
from fastapi import UploadFile, File
from scipy.io import wavfile
from io import BytesIO
from app.fft.analyzer import analyze

router = APIRouter(
    prefix="/fft",
    tags=["fft"]
)

@router.get("/health")
def health_check():
    return {
        "status": "ok"
    }

@router.get("/fft")
def fft_check():
    return {
        "frequency": [1,2],
        "amplitude": [2,3]
    }

@router.post("/fft/upload")
async def upload_audio(
    audio_file: UploadFile = File(...)
):
    wav = await audio_file.read()
    sample_rate, signal = wavfile.read(
        BytesIO(wav)
    )
    if signal.ndim > 1:
        signal = signal[:, 0]

    freq, amp = analyze(signal)

    return {
    "message": "FFT success",
    "frequency_count": len(freq),
    "amplitude_count": len(amp)
    }

@router.post("/fft/send-wave")
async def upload_audio(
    audio_file: UploadFile = File(...)
):
    wav = await audio_file.read()
    sample_rate, signal = wavfile.read(
        BytesIO(wav)
    )
    if signal.ndim > 1:
        signal = signal[:, 0]

    times = [
        i / sample_rate
        for i in range(len(signal))
    ]

    return {
    "message": "FFT-send success",
    "time": times[:5000],
    "amplitude": signal[:5000].tolist()
    }
