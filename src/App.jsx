import { Route, Routes } from 'react-router-dom';

import Expenses from './pages/Expenses';
import Home from './pages/Home';
import HomeIndex from './pages/HomeIndex';
import Invoices from './pages/Invoices';
import InvoicesApple from './pages/InvoicesApple';
import InvoicesCreate from './pages/InvoicesCreate';
import InvoicesGoogle from './pages/InvoicesGoogle';
import InvoicesIndex from './pages/InvoicesIndex';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndex />}>
        <Route index element={<Home />}></Route>
        <Route path="/invoices" element={<InvoicesIndex />}>
          <Route index element={<Invoices />}></Route>
          <Route path="/invoices/create" element={<InvoicesCreate />}></Route>
          <Route path="/invoices/google" element={<InvoicesGoogle />}></Route>
          <Route path="/invoices/apple" element={<InvoicesApple />}></Route>
        </Route>
        <Route path="/expenses" element={<Expenses />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
