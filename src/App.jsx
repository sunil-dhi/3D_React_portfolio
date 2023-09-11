import { BrowserRouter,Route,Routes} from 'react-router-dom'
import {Navbar, About, Contact, Experience, Hero, Works, StarsCanvas, Tech} from './components'

const App=()=> {

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-no-repeat bg-cover bg-center'>
    <Navbar />
    <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
     <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
     </div>
    </div>

    </BrowserRouter>
  )
}

export default App
