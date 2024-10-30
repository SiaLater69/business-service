import Image from 'next/image';
import MainPage from './pages/MainPage';
import Services from './pages/Services';

export default function Home() {
  return (
   <div>
     <MainPage/>
     <Services/>
   </div>
  );
}
