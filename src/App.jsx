import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portofolio' element={<Portofolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
