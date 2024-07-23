const AllProductCart = ({ id, title, discription, image, price, category }) => {
  const cardStyles = {
    width: "18rem",
    // height: "210px",
  };
  const imageStyles = {
    height: "10rem",
  };
  return (
    <div className="p-3">
      <div className="row row-cols-1 row-cols g-4">
        <div className="col">
          <div className="card" style={cardStyles}>
            <div className="card-body">
              <img
                src={image}
                className="card-img-top"
                alt="..."
                style={imageStyles}
              />
              <h6 className="card-title">{title.slice(0,30)}...</h6>
              <p className="card-text">${price}</p>
              <div className=" d-flex">
              <small className="text-body-secondary">rating</small>
              <p>(99)</p>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCart;
