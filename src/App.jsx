
import './App.css';
import Allrest from './components/Allrest';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom'
import ViewRest from './components/ViewRest';
function App() {
  return (
    <div className="App">
        <header>
          <Header/>
          </header>

        

<section>

  <Routes>
<Route path='/' element={<Allrest/>}/>
<Route path='/view/:id' element={<ViewRest/>}/>
  </Routes>

</section>

<footer>
  <Footer/>
</footer>

    </div>
  );
}

export default App;
