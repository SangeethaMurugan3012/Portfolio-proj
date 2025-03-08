import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'


import Head from './Component/Head/Head';
// import Header from './Component/Head/Header';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Portfolio from './Component/Project/Portfolio';
// import Services from './Component/Services/Services';
// import Card from './Component/Card/Card';
import Mywork from './Component/My work/Mywork';
// import Contact from './Component/Contact/Contact';
import Contacts from './Component/Contact/Contacts';
import Footer from './Component/Footer/Footer';




function App() {
  return (
    <div className="App body ">
   <Head/>
   {/* <Header/> */}
   <Hero/>
   <About/>
   <Portfolio/>
   {/* <Services/> */}
   {/* <Card/> */}
   <Mywork/>
   {/* <Contact/> */}
   <Contacts/>
   <Footer/>
   
   
   <bootstrap/>
   
    </div>
  );
}

export default App;
