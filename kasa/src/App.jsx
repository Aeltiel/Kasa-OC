import Home from './pages/Home'
import Logement from './pages/Logement'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/kasa' element = {<Home />}/>
        <Route path='/APropos' element = {<Apropos />}/>
        <Route path='/Logements/:id' element = {<Logement />}/>
        <Route path='*' element = {<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
