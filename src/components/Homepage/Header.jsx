const Header = () => {
  return (
    <div>
      <header>
        <nav className="d-flex bg-dark text-light justify-content-between p-1 align-items-center flex-wrap gap-2">
          <span className="d-flex mx-auto gap-2 flex-wrap mt-1">
            
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
            </p>
            <a href="#" className="text-light">
              ShopNow
            </a>
          </span>

          <span className="mb-2">
            <select name="#" id="#" className="bg-dark text-light custom-select">
              <option value="#">English</option>
            </select>
          </span>
        </nav>
        <nav className="nav2 d-flex justify-content-between container p-2">
          <h5>Exclusive</h5>
          <ul className="d-flex gap-4">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <span className="d-flex gap-4">
            <form className ="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="What are you looking for?"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className ="bi bi-search"></i>
              </button>
            </form>
            <div>
          <i className="bi bi-cart3"></i>
          </div>
          </span>
         
        </nav>
      </header>
    </div>
  );
};

export default Header;
