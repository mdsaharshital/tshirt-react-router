import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Orderreview' element={<OrderReview/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
