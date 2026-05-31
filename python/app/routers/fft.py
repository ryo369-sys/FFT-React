from fastapi import APIRouter

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