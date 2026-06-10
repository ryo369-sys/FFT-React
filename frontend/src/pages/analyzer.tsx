import { SoundButton } from '../components/ui/read_file';
import { FileUpload } from '../components/ui/read-sound';
import { FFTChart }  from '../components/charts/FFTChart';
import { useEffect } from 'react'
import { AnalyzeButton } from '../components/ui/AnalyzeButtom';
import React,{useState } from 'react';

type WavePoint = {
  time: number
  amplitude: number
}


export const Analyzer = () =>  {

  const [file, setSelectedFile] =
  useState<File | null>(null)

  const [waveData, setWaveData] =
  useState<WavePoint[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/fft/send-wave')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])



//const waveChartData = data.time.map(
//  (time: number, index: number) => ({
//    time,
//    amplitude: data.amplitude[index]
//  })
//)

  return (
    <div>
      <h1>analyzer</h1>
      <FileUpload onFileSelect = {setSelectedFile}/>
      <AnalyzeButton file = {file}  onResult={setWaveData}/>
      <FFTChart data = {waveData}/>
      <div>
        <SoundButton/>
      </div>
    </div>
  );
};

export default Analyzer