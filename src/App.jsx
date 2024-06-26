import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Events from './Pages/Events'
import Learning from './Pages/Learing'
import Projects from './Pages/Projects';
import Dom from './Blogs/Dom'
import FirebaseRiles from './Blogs/FirebaseRules'
import BFxJ from './Blogs/FirebasexJava'
import BFun from './Blogs/FirebaseFun'
import Gamer from './Blogs/Gamer'
import Profile from './Pages/Profile'


import './App.css'
function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/events' element={<Events/>} />
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/learning' element={<Learning/>}/>
      <Route path='/learning' element={<Learning/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/firebase-realtime-database-rules' element={<FirebaseRiles/>}/>
      <Route path='/blog/firebase-functions' element={<BFun/>}/>
      <Route path='/blog/FirebaseInJavaScript-full' element={<BFxJ/>}/>
      <Route path='/blog/from-a-gamer-to-full-stack-developer' element={<Gamer/>}/>
      <Route path='/blog/javascript-dom-manipulation' element={<Dom/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
   </Router>
   </>
  )
}

export default App
