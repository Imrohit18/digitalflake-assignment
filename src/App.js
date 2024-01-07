
import './App.css';

import "./styles/styles.css"

// import { history } from "./helpers/history";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CategoriesPage from './pages/Categories/CategoriesPage';
import ProductsPage from './pages/Products/ProductsPage';
import NotAvailabePage from './pages/NotAvailabePage';
import AddNewCategory from './pages/Categories/AddNewCategory';
import AddNewProduct from './pages/Products/AddNewProduct'
import Header from './components/Header';
// import Forgot from './pages/Categories/Forgot';

function App() {

  return (

    <main className='app'>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          {/* <Route exact path="/forgot" element={<Forgot />} /> */}
          <Route exact path="/home" element={[<Header />, <HomePage />]} />
          <Route exact path="/categories" element={[<Header />, <CategoriesPage />]} />
          <Route exact path="/products" element={[<Header />, <ProductsPage />]} />
          <Route exact path="/add-categories" element={[<Header />, <AddNewCategory />]} />
          <Route exact path="/add-products" element={[<Header />, <AddNewProduct />]} />
          <Route exact path="*" element={<NotAvailabePage />} />
        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App;
