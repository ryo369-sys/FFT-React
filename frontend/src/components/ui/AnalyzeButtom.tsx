type WavePoint = {
  time: number
  amplitude: number
}

type Props = {
  file: File | null
  onResult: (data: WavePoint[]) => void
}

export const AnalyzeButton = ({
  file,
  onResult
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
      "http://localhost:8000/fft/fft/upload",
      {
        method: "POST",
        body: formData
      }
      )

    const response = await fetch(
      "http://localhost:8000/fft/fft/send-wave",
      {
        method: "POST",
        body: formData
      }
    )
    const data = await response.json()
    console.log(data)

  const chartData = data.time.map(
  (time: number, index: number) => ({
    time,
    amplitude: data.amplitude[index]
  })
)
  onResult(chartData)

  }

  return (
    <button onClick={handleAnalyze} >
      FFT解析開始
    </button>
  )
}