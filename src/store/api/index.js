import axios from 'axios';



const products_url = 'http://localhost:9001/products';
const categories_url = 'http://localhost:9001/categories';
const users_url = 'http://localhost:9001/users';

export const fetchProducts = () => axios.get(products_url);
export const createProduct = (newProduct) => axios.post(products_url, newProduct);
export const updateProduct = (id, updatedProduct) => axios.patch(`${products_url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${products_url}/${id}`);



export const fetchCategories = () => axios.get(categories_url);
export const createCategory = (newCategory) => axios.post(categories_url, newCategory);
export const updateCategory = (id, updatedCategory) => axios.patch(`${categories_url}/${id}`, updatedCategory);
export const deleteCategory = (id) => axios.delete(`${categories_url}/${id}`);


export const fetchUsers = () => axios.get(users_url);

