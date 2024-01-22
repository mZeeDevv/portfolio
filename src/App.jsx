import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Events from './Pages/Events'
import Learning from './Pages/Learing'

import './App.css'

function App() {
  
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/learning' element={<Learning/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
