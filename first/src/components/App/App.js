import './App.scss';
import { Route,Routes,Link} from 'react-router-dom';
import { Header } from '../header/header.jsx';
import { Hero } from '../hero-block/hero-block.jsx';
import { Basket } from '../../pages/basket';
import { Home } from '../../pages/home';
import { createContext, useEffect,useState} from 'react';
export let ContextBuy = createContext();
function App() {
  const { Provider } = ContextBuy;
  let [sum, setSum] =useState( +localStorage.getItem(`sum`) || 0)
  let [search,setSerch] = useState("")
  let [countMenu,setCountMenu] = useState( +localStorage.getItem(`countMenu`) ||0)
  let [productBys,setProductsBuy] = useState( JSON.parse(localStorage.getItem('productBys'))||[])
  useEffect( ()=>{
    localStorage.setItem(`sum`,sum)
    localStorage.setItem(`countMenu`,countMenu)
    localStorage.setItem(`productBys`,JSON.stringify(productBys))
})
  return (
    <>
      <Hero/>
      <main className='page'>
        <Provider value={{sum, setSum,countMenu,setCountMenu,productBys,setProductsBuy}}>
      <Header search={search} setSerch={setSerch} sum={sum} count={countMenu} setCount={setCountMenu}/>    
      <Routes>
        <Route path='/' element={<Home search={search} />}/>
        <Route path='/basket' element={<Basket productBys={productBys} setProductsBuy={setProductsBuy}countMenu={countMenu} setCountMenu={setCountMenu} sum={sum} setSum={setSum} search={search}/>}/>
      </Routes>
        </Provider>
      </main>      
    </>
  );
}
export default App;
