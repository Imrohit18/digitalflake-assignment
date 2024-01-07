import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, updateCategory } from '../../store/actions/categories';

const Form = ({ currentId, setCurrentId, addNew, setAddNew }) => {

    console.log(addNew);
    const [categoryData, setCategoryData] = useState({ name: '', description: '', status: 'Not Specified' });
    const category = useSelector((state) => (currentId ? state.categories.find((category) => category._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (category) setCategoryData(category);
    }, [category]);

    const clear = () => {
        setAddNew(true)
        setCurrentId(0);
        setCategoryData({ name: '', description: '', status: '' });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (currentId === 0) {

            dispatch(createCategory(categoryData));
            console.log(categoryData);
            clear();
            setAddNew(false);

        } else {
            dispatch(updateCategory(currentId, categoryData));
            clear();
            setAddNew(false);
        }
    };

    return (
        <main className="form-container">
            <form className='add-new-form' onSubmit={handleSubmit}>

                <div className="input-grid">


                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required value={categoryData.name} type="text" name="name" id="" onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input required value={categoryData.description} type="text" name="description" id="" onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select defaultValue={"Select"} name="" id="" onChange={(e) => { setCategoryData({ ...categoryData, status: e.target.value }) }}>
                            <option value="Select"></option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                </div>
                <div className='submit-btn-group'>
                <button className='white-btn round btn-secondary' type='button' onClick={()=>{setAddNew(false)}}>Cancel</button>

                    <button className='white-btn round btn-secondary' type='button' onClick={clear}>Clear</button>
                    <button className='purple-btn round btn-primary' type="submit" >Save</button>
                </div>
            </form>
        </main>
    );
};

export default Form;
