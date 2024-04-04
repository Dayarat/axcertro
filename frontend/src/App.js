
import './App.css';
import AddStudent from './component/AddStudent';
import AllStudents from './component/AllStudent';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/add" element={<AddStudent />} />
        <Route path = "/home" element={<AllStudents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;