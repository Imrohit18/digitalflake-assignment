import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/actions/products';

const Product = ({ product, setCurrentId, setAddNew }) => {

    const dispatch = useDispatch();

    const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);

    const handleConfirmationPrompt = () => {

        if (showConfirmationPrompt) {
            setShowConfirmationPrompt(false);
        }

    }

    console.log(product);

    return (
        <main>
            <div className='horizontal-ribbon-card'>
                <p className="id">{product._id.substring(product._id.length - 3)}</p>
                <p className="name">{product.name}</p>
                <p className="packsize">{product.packSize}</p>
                <p className="category">{product.category}</p>
                <p className="mrp">{product.mrp}</p>

                <img className='product-image' src={product.image} alt="" srcset="" />

                <p className="status">{product.status}</p>


                <div className="options">


                    <div>
                        <button className='btn btn-dark' onClick={() => { setAddNew(true); setCurrentId(product._id) }}><i class="fa fa-pencil-square" aria-hidden="true"></i></button>

                        {
                            (product.status === "Active")
                                ?
                                <button className='btn btn-danger' onClick={() => setShowConfirmationPrompt(true)} > <i class="fa fa-trash" aria-hidden="true"></i></button>
                                :
                                <button className='btn btn-danger' disabled onClick={() => setShowConfirmationPrompt(true)} > <i class="fa fa-trash" aria-hidden="true"></i></button>

                        }
                    </div>

                    {
                        showConfirmationPrompt ?
                            <main className="confirmation-window">

                                <div onClick={() => setShowConfirmationPrompt(false)} className="confirmation-background">

                                </div>

                                <form onClick={() => {
                                    setShowConfirmationPrompt(true)
                                }} className="confirmation delete-confirmation" onSubmit={() => handleConfirmationPrompt()}>
                                    <h3>Delete</h3>
                                    <p><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Are you sure you want to delete</p>
                                    <button className="white-btn cancel-delete" onClick={() => setShowConfirmationPrompt(false)}>Cancel</button>
                                    <button type='submit' className="purple-btn confirm-delete" onClick={() => dispatch(deleteProduct(product._id))}>Delete</button>
                                </form>
                            </main>

                            :
                            <></>
                    }

                </div>
            </div>
        </main>
    )
}

export default Product