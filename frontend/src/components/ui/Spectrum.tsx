type SpectrumPoint = {
  frequency: number
  amplitude: number
}

type Props = {
  file: File | null
  onResult: (data: SpectrumPoint[]) => void
}

export const Spectrum = ({
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

    const response = await fetch(
      "http://localhost:8000/fft/fft/spectrum",
      {
        method: "POST",
        body: formData
      }
    )
    const data = await response.json()
    console.log(data)

  const chartData = data.frequency.map(
  (frequency: number, index: number) => ({
    frequency,
    amplitude: data.amplitude[index]
  })
)
  onResult(chartData)

  }

  return (
    <div>
        <button onClick={handleAnalyze} >
              FFT_spectrum解析開始
        </button>
    </div>
  )
}