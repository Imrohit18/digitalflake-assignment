import * as api from '../api/index';


export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (product) => (dispatch) => {
  try {

    const { data } = api.createProduct(product);
    dispatch({ type: "CREATE", payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
