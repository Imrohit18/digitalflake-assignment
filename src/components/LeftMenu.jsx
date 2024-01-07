import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  const [homeActive, setHomeActive] = useState(false);
  const [categoriesActive, setCategoriesActive] = useState(false);
  const [productsActive, setProductsctive] = useState(false);


  const activeHome = () => {

    setHomeActive(true);
    setCategoriesActive(false);
    setProductsctive(false);

  }

  const activeCategories = () => {
    setHomeActive(false);
    setCategoriesActive(true);
    setProductsctive(false);
    setProductsctive(true)
  }

  const activeProducts = () => {
    setHomeActive(false);
    setCategoriesActive(false);
    
  }
  return (
    <main>
      <div className="left-menu">
        <Link onClick={activeHome} to={"/home"}>
          <div>
            <i className="fa fa-home" aria-hidden="true"></i>
            {homeActive ? <p className='active'>Home</p> : <p className='not-active'>Home</p>}
          </div>
        </Link>
        <Link onClick={activeCategories} to={"/categories"}>
          <div>
            <i className="fa fa-th-large" aria-hidden="true"></i>
            {categoriesActive ? <p className='active'>Categories</p> : <p className='not-active'>Categories</p>}
          </div>
        </Link>
        <Link onClick={activeProducts} to={"/products"}>
          <div>
            <i className="fa fa-archive" aria-hidden="true"></i>
            {productsActive ? <p className='active'>Products</p> : <p className='not-active'>Products</p>}
          </div>
        </Link>

      </div>
    </main>
  )
}

export default LeftMenu