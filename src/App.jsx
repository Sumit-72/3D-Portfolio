import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About , Projects } from './pages'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/projects' element={<Projects />}/>

            </Routes>
            <Analytics/>
        </Router>
    </main>
  );
};

export default App;
