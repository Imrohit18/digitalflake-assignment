import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../store/actions/categories';

const Category = ({ category, setCurrentId, setAddNew }) => {

    const dispatch = useDispatch();

    const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);

    const handleConfirmationPrompt = () => {

        if (showConfirmationPrompt) {
            setShowConfirmationPrompt(false);
        }
    }

    console.log(category);

    return (
        <main>
            <div className='horizontal-ribbon-card'>
                <p className="id">{category._id.substring(category._id.length -3)}</p>
                <p className="name">{category.name}</p>
                <p className="description">{category.description}</p>
                <p className="status">{category.status}</p>
                <div className="options">
                    <div>
                        <button className='btn btn-dark' onClick={() => { setAddNew(true); setCurrentId(category._id) }}><i class="fa fa-pencil-square" aria-hidden="true"></i></button>

                        {
                            (category.status === "Active")
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
                                    <button type='submit' className="purple-btn confirm-delete" onClick={() => dispatch(deleteCategory(category._id))}>Delete</button>
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

export default Category