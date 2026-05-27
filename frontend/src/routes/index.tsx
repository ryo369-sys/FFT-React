import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from '../pages/home'
import Analyzer from '../pages/analyzer'
import Open_file from '../components/ui/read_file'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/pages" element={<Analyzer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes