const CarouselSection = ({cart}) => {
    if (cart.length > 0){
      console.log(cart[0], 'cart');
    }
 
    return (
      <div>
        {cart.length > 0 ?  <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators" >
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{width:'70vw'}}>
            <div className="carousel-item active">
              <img src= {cart[0].image} className="d-block
              w-100" alt="..." style={{height:'70vh'}} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{cart[0].title}</h5>
                <p>
                 {cart[0].discription}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={cart[1].image} className="d-block w-100" alt="..." style={{height:'70vh'}}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>{cart[1].title}</h5>
                <p>
                 {cart[1].discription}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={cart[2].image} className="d-block w-100 " alt="..." style={{height:'70vh'}}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>{cart[2].title}</h5>
                <p>
                  {cart[2].discription}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> : 'no items found'}
       
      </div>
    );
  };
  
  export default CarouselSection;
  