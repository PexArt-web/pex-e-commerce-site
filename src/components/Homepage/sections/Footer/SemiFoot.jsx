import fastDelivery from "../assets/FooterPng/fast.png";
import customerService from "../assets/FooterPng/customer-support.png";
import guaranteCertificate from "../assets/FooterPng/guarantee-certificate.png";
const SemiFoot = () => {
  const imageStyle = {
    height: "100px",
    marginLeft: '30px'
  };
  const customDeliveryIcons = {
    gap:'80px'
  }
  return (
    <section className="">
      <div className="customDeliveryIcons d-flex p-2 justify-content-center  mb-4" style={customDeliveryIcons}>
        <span className="d-grid justify-content-center text-center">
          <img src={fastDelivery} alt="" style={imageStyle} className="mx-auto"/>
          <p>
            FREE AND FAST DELIVERY
          </p>
          <h6>Free delivery for all orders over $140</h6>
        </span>
        <span className="d-grid justify-content-center text-center">
          <img src={customerService} alt="" style={imageStyle} className="mx-auto" />
          <p>
           24/7 CUSTOMER SERVICE
          </p>
          <h6>Friendly 24/7 customer support</h6>
        </span>
        <span className="d-grid justify-content-center text-center">
          <img src={guaranteCertificate} alt="" style={imageStyle} className="mx-auto" />
          <p>
            MONEY BACK GUARANTEE
          </p>
          <h6>We return money within 30 days</h6>
        </span>
       
      </div>
    </section>
  );
};

export default SemiFoot;
