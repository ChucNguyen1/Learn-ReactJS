import React, { useState, useEffect } from "react";
import "./Product.scss";

function UseEffect() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [pageActive]);

  const handleClickPagi = (pageIndex) => {
    setPageActive(pageIndex);
  };

  return (
    <div className="product-container">
      <h2 className="title">Danh sách sản phẩm</h2>

      <div className="product-list">
        {data.map((item) => (
          <div className="product_item" key={item.id}>
            <div className="product_image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h3 className="product_title">{item.title}</h3>
            <p className="product_price">${item.price}</p>
          </div>
        ))}
      </div>

      <ul className="pagination">
        {[...Array(quantityPage)].map((_, i) => (
          <li
            key={i}
            onClick={() => handleClickPagi(i)}
            className={pageActive === i ? "active" : ""}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffect;
