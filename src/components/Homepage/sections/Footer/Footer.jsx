import SemiFoot from "./SemiFoot";

const Footer = () => {
  return (
    <section>
        <SemiFoot />
      <footer className="card-footer bg-dark text-light">
        
        <div className="d-flex justify-content-between p-2">
          <ul className="list-unstyled">
            <li>
                
              <h3>Exclusive</h3>
            </li>
            <li>Subscribe</li>
            <li>Get 10% percent</li>
            <li></li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <h3>Support</h3>
            </li>
            <li>4 sarumi street, Alakia, Ibadan</li>
            <li>pexart74@gmail</li>
            <li>+2347033962306</li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <h3>Account</h3>
            </li>
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <h3>Quick Link</h3>
            </li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <h3>Download App</h3>
            </li>
            <li>Save $3 with app New Users Only</li>
          </ul>
        </div>
        <div className="card-footer text-center">
          &copy; Copyright Pelumi Adeayo 2024 All rights reserved
        </div>
      </footer>
    </section>
  );
};

export default Footer;
