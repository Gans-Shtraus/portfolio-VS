
import s from './App.module.css'
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Info } from './Info/Info';

export const App = () => {
  return (
    <>
    <div className={s.main}>
    <Header />
    <Info />
    <Footer />
    </div>
    </>
  )
}




