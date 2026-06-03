import { SoundButton } from '../components/ui/read_file';
import { FileUpload } from '../components/ui/read-sound';
import { FFTChart }  from '../components/charts/FFTChart';
import { useEffect } from 'react'
import { AnalyzeButton } from '../components/ui/AnalyzeButtom';
import React,{useState } from 'react';
//import { GetFile } from '../components/ui/AnalyzeButtom';

const Analyzer = () => {
  const sampleData = [
  { time: 0, amplitude: 0 },
  { time: 1, amplitude: 0.5 },
  { time: 2, amplitude: 1.0 },
  { time: 3, amplitude: 0.5 },
  { time: 4, amplitude: 0 }
]
    const [file, setSelectedFile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/fft/fft')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])


  return (
    <div>
      <h1>analyzer</h1>
      <FFTChart data = {sampleData}/>
      <FileUpload onFileSelect = {setSelectedFile}/>
      <AnalyzeButton file = {file}/>
      <SoundButton/>
    </div>
  );
};

export default Analyzer