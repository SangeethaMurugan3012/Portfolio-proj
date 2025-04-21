import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'


import Head from './Component/Head/Head';

import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Portfolio from './Component/Project/Portfolio';


import Mywork from './Component/My work/Mywork';

import Contacts from './Component/Contact/Contacts';
import Footer from './Component/Footer/Footer';




function App() {
  return (
    <div className="App body ">
   <Head/>
   <Hero/>
   <About/>
   <Portfolio/>
   <Mywork/>
   <Contacts/>
   <Footer/>
   
   
   <bootstrap/>
   
    </div>
  );
}

export default App;
