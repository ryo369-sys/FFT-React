import {
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts'
import type { WavePoint } from '../../components/charts/WaveChart'

type Props = {
  data: SpectrumPoint[]
}

export type SpectrumPoint = {
  frequency: number
  amplitude: number
}


export const SpectrumChart = ({ data }: Props) => {

  return (
  <LineChart width={800} height={300} data={data}>
    <Line
      type="monotone"
      dataKey="amplitude"
    />
    <XAxis dataKey="frequency" />
    <YAxis />
  </LineChart>
  )
}