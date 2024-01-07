import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FileBase from "react-file-base64";
// import { Link } from "react-router-dom";
// import { createCategory, updateCategory } from '../../store/actions/categories';
import { createProduct, updateProduct } from "../../store/api";

const AddNewProduct = ({ categories, setAddNew, currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({
    name: "",
    packSize: "",
    category: "",
    mrp: "",
    image: "",
    status: "",
  });
  const product = useSelector((state) =>
    currentId
      ? state.products.find((product) => product._id === currentId)
      : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const clear = () => {
    setCurrentId(0);
    setProductData({
      name: "",
      packSize: "",
      category: "",
      mrp: "",
      image: "",
      status: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createProduct(productData));
      clear();
    } else {
      dispatch(updateProduct(currentId, productData));
      clear();
    }
  };

  return (
    <main className="form-container">
      <form className="add-new-form" onSubmit={handleSubmit}>
        <div className="input-grid">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              required
              value={productData.name}
              type="text"
              name="title"
              id=""
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Pack Size</label>
            <input
              required
              value={productData.packSize}
              type="text"
              name="packsize"
              id=""
              onChange={(e) =>
                setProductData({ ...productData, packSize: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Category</label>
            <select
              onChange={(e) => {
                setProductData({ ...productData, category: e.target.value });
              }}
              defaultValue={"Select"}
              name=""
              id=""
            >
              <option value="Select"></option>
              {categories.map((c) => {
                console.log(c);

                return (
                  <>
                    <option value={c.name}>{c.name}</option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="">MRP</label>
            <input
              required
              value={productData.mrp}
              type="text"
              name="price"
              id=""
              onChange={(e) =>
                setProductData({ ...productData, mrp: e.target.value })
              }
            />
          </div>
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setProductData({ ...productData, image: base64 })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              defaultValue={"Select"}
              name=""
              id=""
              onChange={(e) => {
                setProductData({ ...productData, status: e.target.value });
              }}
            >
              <option value="Select"></option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="submit-btn-group">
  <button
    className="white-btn round btn-secondary"
    style={{ width: '100px', height: '40px', marginTop: '-400px' }}
    onClick={() => {
      setAddNew(false);
    }}
  >
    Cancel
  </button>
  <button
    className="purple-btn round btn-primary"
    style={{ width: '100px', height: '40px', marginTop: '-400px' }}
    type="submit"
  >
    Save
  </button>
</div>

      </form>
    </main>
  );
};

export default AddNewProduct;
