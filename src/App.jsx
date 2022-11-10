import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/ui/Navigation';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import CarrerasTecnicas from './components/pages/CarrerasTecnicas';
import Home from './components/pages/Home';

export default function App() {


  return (
    <Router>
      <div>
        <Navigation></Navigation>
      </div>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>        
        <Route exact path='/carrerasTecnicas' element={<CarrerasTecnicas/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )

}
