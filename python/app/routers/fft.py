from fastapi import APIRouter
from fastapi import UploadFile, File
from app.fft.analyze import analyze

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
    sample = analyze()
    print(audio_file.filename)
    contents = await audio_file.read()
    print(len(contents))

    return {
        "filename": audio_file.filename
    }
