import { SoundButton } from '../components/ui/read_file';
import { FileUpload } from '../components/ui/read-sound';
import { FFTChart }  from '../components/charts/FFTChart';
import { useEffect } from 'react'
import { AnalyzeButton } from '../components/ui/AnalyzeButtom';
import { Spectrum } from '../components/ui/Spectrum';
import React,{useState } from 'react';
import { SpectrumChart } from '../components/charts/SpectrumChart';

type WavePoint = {
  time: number
  amplitude: number
}

type SpectrumPoint = {
  frequency: number
  amplitude: number
}

export const Analyzer = () =>  {

  const [file, setSelectedFile] =
  useState<File | null>(null)

  const [waveData, setWaveData] =
  useState<WavePoint[]>([])

  const [spectrumData, setSpectrumData] =
  useState<SpectrumPoint[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/fft/send-wave')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

    useEffect(() => {
    fetch('http://localhost:8000/fft/spectrum')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div>
      <h1>analyzer</h1>
      <FileUpload onFileSelect = {setSelectedFile}/>
      <AnalyzeButton file = {file}  onResult={setWaveData}/>
      <Spectrum file = {file}  onResult={setSpectrumData}/>
      <FFTChart data = {waveData}/>
      <SpectrumChart data = {spectrumData}/>
      <div>
        <SoundButton/>
      </div>
    </div>
  );
};

export default Analyzer