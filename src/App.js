import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import Find from './pages/Find'
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/find' element={<Find/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
