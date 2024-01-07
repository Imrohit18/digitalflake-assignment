import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from './Category';
import AddNewCategory from "./AddNewCategory";

import LeftMenu from '../../components/LeftMenu';


import { getCategories } from '../../store/actions/categories';



const CategoriesPage = () => {
    const categories = useSelector((state) => state.categories);
    console.log(categories);

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();


    const [addNew, setAddNew] = useState(false);


    useEffect(() => {
        setAddNew(false)
        dispatch(getCategories());
    }, [currentId, dispatch]);

    const [searched, setSearched] = useState([]);

    const search = useRef(" ");

    const searchHandler = (e) => {
        e.preventDefault();

        const searchItems = [];

        categories.map((category) => {
            let searchMatch =
                category.name.toLowerCase().includes(search.current.value.toLowerCase())
                || category.description.toLowerCase().includes(search.current.value.toLowerCase())
                || category.status.toLowerCase().includes(search.current.value.toLowerCase())
  

            if (searchMatch) {
                searchItems.push(category);
            }
        })

        setSearched(searchItems);
    }

    return (


        <main className="container">

            <LeftMenu />

            <div className="page">

                <div className='page-ribbon'>
                    <div className='title-info'>
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                        <p>Categories</p>
                    </div>
                    <input className='search' ref={search} onChange={searchHandler} type="text" placeholder='Search' />
                    <button onClick={() => setAddNew(true)} className="add-new-btn">
                        Add New
                    </button>

                </div>


                <div className="table-header horizontal-ribbon-card">
                    <p className="id">ID</p>
                    <p className="name">Name</p>
                    <p className="description">Description</p>


                    <p className="status">Status</p>
                    <p className="options">Options</p>

                </div>

                <div className="products-grid">

                    {
                        (search.current.value == "")

                            ?

                            categories.map((category, index) => (
                                <Category setAddNew={setAddNew} key={index} category={category} setCurrentId={setCurrentId} />
                            ))

                            :

                            searched.map((category, index) => (
                                <Category setAddNew={setAddNew} key={index} category={category} setCurrentId={setCurrentId} />
                            ))


                    }

                </div>

                {
                    addNew ?
                        <main className='add-new-container'>
                            <p onClick={() => { setAddNew(false) }}><i class="fa fa-arrow-left" aria-hidden="true"></i></p>
                            <p>Add New Category</p>
                            <AddNewCategory addNew={addNew} setAddNew={setAddNew} currentId={currentId} setCurrentId={setCurrentId} />
                        </main>
                        :
                        <></>
                }

            </div>
        </main >
    );
};

export default CategoriesPage;
