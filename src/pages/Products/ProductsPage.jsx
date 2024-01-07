import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';
import AddNewProduct from "./AddNewProduct";

import LeftMenu from '../../components/LeftMenu';



import { getProducts } from '../../store/actions/products';



const ProductsPage = () => {

  // const categories = useSelector((state) => state.categories);
  // console.log(categories);

  const categoriesState = useSelector((state) => state.categories);
  const [categories, setCategories] = useState(categoriesState);
  console.log(categories,setCategories);


  const products = useSelector((state) => state.products);
  console.log(products);


  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();



  const [addNew, setAddNew] = useState(false);



  useEffect(() => {
    setAddNew(false)

    dispatch(getProducts());
  }, [currentId, dispatch]);

  const [searched, setSearched] = useState([]);

  const search = useRef(" ");

  const searchHandler = (e) => {

    e.preventDefault();

    const searchItems = [];

    products.map((product) => {

      let searchMatch = product.name.toLowerCase().includes(search.current.value.toLowerCase())
        || product.packSize.toLowerCase().includes(search.current.value.toLowerCase())
        || product.mrp.toLowerCase().includes(search.current.value.toLowerCase())
        || product.category.toLowerCase().includes(search.current.value.toLowerCase())
        || product.status.toLowerCase().includes(search.current.value.toLowerCase());

      if (searchMatch) {
        searchItems.push(product);
      }

    })

    setSearched(searchItems);
  }



  return (
    // !products.length ? <main className="products-container"><h1>LOADING . . . . . . . </h1></main> : (

    <main className="container">

      <LeftMenu />

      <div className="page">

        <div className='page-ribbon'>
          <div className='title-info'>
            <i class="fa fa-archive" aria-hidden="true"></i>
            <p>Products</p>
          </div>
          <input className='search' ref={search} onChange={searchHandler} type="text" placeholder='Search' />
          <button onClick={() => setAddNew(true)} className="add-new-btn">
            Add New
          </button>

        </div>



        <div className="products-grid">

          <div className="table-header horizontal-ribbon-card">
            <p className="id">ID</p>
            <p className="name">Name</p>
            <p className="packsize">PackSize</p>
            <p className="category">Category</p>
            <p className="mrp">MRP</p>

            <p className="image">IMAGE</p>

            <p className="status">Status</p>
            <p className="options">Options</p>

          </div>


          {
            (search.current.value == "")

              ?

              products.map((product, index) => (
                <Product setAddNew={setAddNew} key={index} product={product} setCurrentId={setCurrentId} />
              ))

              :

              searched.map((product, index) => (
                <Product setAddNew={setAddNew} key={index} product={product} setCurrentId={setCurrentId} />
              ))


          }

        </div>

        {
          addNew ?
            <main className='add-new-container'>
              <div className="title-info">
                <p onClick={() => { setAddNew(false) }}><i class="fa fa-arrow-left" aria-hidden="true"></i></p>
                <p>Add Product</p>
              </div>
              <AddNewProduct categories={categories} addNew={addNew} setAddNew={setAddNew} currentId={currentId} setCurrentId={setCurrentId} />
            </main>
            :
            <></>
        }

      </div >
    </main>

    // )
  );
};

export default ProductsPage;
