import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Pay from './Pay';

function App() {
  return (
    <main className='bg-background bg-cover bg-no-repeat bg-center h-screen' >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/payme" element={<Pay />}></Route>
      </Routes>
    </main>
  );
}

export default App;
