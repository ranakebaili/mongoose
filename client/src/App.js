import './App.css';
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Add from "./pages/Add";
import Contact from "./pages/Contact";
import Edit from "./pages/Edit";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/show' element={<Contact/>} />
        <Route path='/update/:_id' element={<Edit/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
