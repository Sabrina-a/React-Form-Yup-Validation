import './App.css';
import {Routes , Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Home from './components/Home/Home';
import RememberPassword from './components/RememberPassword/RememberPassword';
function App() {
  return (
    <>
    
    
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='register' element={<Register/>} />
    <Route path='home' element={<Home/>} />
    <Route path='remember-password' element={<RememberPassword/>}/>
    </Routes>
    </>
  );
}

export default App;
