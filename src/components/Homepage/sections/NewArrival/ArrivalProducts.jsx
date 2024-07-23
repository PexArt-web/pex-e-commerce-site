const ArrivalProducts = ({id, title, discription, price, image}) => {
    const cardStyle = {
        border:'none'
    }
    const imageStyle = {
      height:'20px'
    }
  return (
    <div className="d-flex gap-3 p-3">
      <div className="card text-bg-dark" style={cardStyle}>
        <img src={image}className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          {discription}
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div>

        {/*  */}
      </div>
    </div>
  );
};

export default ArrivalProducts;
