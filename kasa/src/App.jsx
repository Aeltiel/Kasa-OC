import Home from './pages/Home'
import Logement from './pages/Logement'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/Kasa-OC/kasa' element = {<Home />}/>
        <Route path='/APropos' element = {<Apropos />}/>
        <Route path='/Logements/:id' element = {<Logement />}/>
        <Route path='*' element = {<Error />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
