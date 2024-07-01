import {Routes,Route} from 'react-router-dom'
import Home from './containers/home/Home';
import About from './containers/about/About';
import Skills from './containers/skills/Skills';
import Contact from './containers/contact/Contact';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path ='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
