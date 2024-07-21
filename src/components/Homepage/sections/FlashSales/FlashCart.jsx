const FlashCart = ({ id, title, price, description, image, category }) => {
  console.log(title, "flash");

  const cardStyles = {
    width: "18rem",
  };
  const imageStyles = {
    height: "10rem",
  };
  return (
    <div className="p-3">
      <div className="card" style={cardStyles}>
        <div className="card-body">
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={imageStyles}
          />
          <h6 className="card-title">{title.slice(0, 30)}..</h6>
          <p className="card-text price">${price}</p>
          <div className="d-flex gap-2">
          <p className="rating">rating star</p>
          <p className="rating--count">(99)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCart;
