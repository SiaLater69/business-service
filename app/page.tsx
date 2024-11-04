import Image from 'next/image';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';

export default function Home() {
  return (
   <div>
     <MainPage/>
     <Services/>
     <Clients/>
     <About/>
     <Contact/>
   </div>
  );
}
