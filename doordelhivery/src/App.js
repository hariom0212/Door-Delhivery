import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog'
import Privacy from './components/Privacy'
import Blog1 from './components/Blog1'
import Blog2 from './components/Blog2'
import Blog3 from './components/Blog3'
import Blog4 from './components/Blog4'


function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/privacy" element={<Privacy/>} />
    <Route path="/blog1" element={<Blog1/>} />
    <Route path="/blog2" element={<Blog2/>} />
    <Route path="/blog3" element={<Blog3/>} />
    <Route path="/blog4" element={<Blog4/>} />
               
   </Routes>
   <Footer />
  </BrowserRouter>   
  );
}
export default App;
