const Single = ({id, category, title, price, image, discription}) => {
    const styleImage = {
        height: '80vh'
    }
    const styleCard = {
        border: 'none'
    }
  return (
    <section className="container mb-5">
      <div className="card text-bg-dark" style={styleCard}>
        <img src= {image} className="card-img" alt="..." style={styleImage} />
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
    </section>
  );
};

export default Single;
