import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
     <header>
       <a href='/'>amazon</a>
     </header>
     <main>
       <Routes>
         <Route path='/' element={<HomeScreen />} />
         <Route path='/products/:slug' element={<ProductScreen />} />
       </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
