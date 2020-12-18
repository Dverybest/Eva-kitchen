import Navbar from './components/Navbar'
import  {BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">

     <Navbar />
     <Route path='/' Component={LandingPage} />

     <LandingPage />

    </div>
    </BrowserRouter>
  );
}

export default App;
