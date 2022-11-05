import {Route,Routes,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Tour from './components/Tour';
function App() {
  return (
   <>
   <Header />

   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/city:id" element={<Tour />} />
      <Route path="/*" element={<NotFound />} />
   </Routes>

   <Footer />
   </>
  );
}

export default App;


{/* Nested routes */}
{/* <Route path="/tours">
<Route index element={<Tours />} />
<Route path=":id" element={<Tour />} />
<Route path="newservice" element={<NewService />} />
</Route>
<Route path="/services" element={<Services />} />
<Route path="/services/:id" element={<Service />} />
<Route path="/services/newservice" element={<NewService />} /> */}