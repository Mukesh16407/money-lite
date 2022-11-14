
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import {Spinner} from './components/Spinner'
import { useSelector } from "react-redux";

function App() {

  const { loading } = useSelector((state) => state.alerts);
  return (
    <div >
       {loading && (
        <div className="loader-parent">
          <Spinner />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
