type Props = {
  file: File | null
}

export const AnalyzeButton = ({
  file
}: Props) => {

  const handleAnalyze = async () => {

    if (!file) {
      alert("ファイルを選択してください")
      return
    }

    const formData = new FormData()

    formData.append(
      "audio_file",
      file
    )

    await fetch(
      "http://localhost:8000/fft/upload",
      {
        method: "POST",
        body: formData
      }
    )
  }

  return (
    <button onClick={handleAnalyze}>
      FFT解析開始
    </button>
  )
}