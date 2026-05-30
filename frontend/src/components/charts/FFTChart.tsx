import {
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts'
import type { WavePoint } from '../../components/charts/WaveChart'

type Props = {
  data: WavePoint[]
}

export const FFTChart = ({ data }: Props) => {
  return (
  <LineChart width={600} height={300} data={data}>
    <Line
      type="monotone"
      dataKey="amplitude"
    />
    <XAxis dataKey="time" />
    <YAxis />
  </LineChart>
  )
}