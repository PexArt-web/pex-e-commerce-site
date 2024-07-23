import Header from "./Header";
import AllProductCart from "./sections/AllProducts/AllProductCart";
import AllProducts from "./sections/AllProducts/AllProducts";
import BrowseCategory from "./sections/BrowseCategory/BrowseCategory";
import ShowFlash from "./sections/FlashSales/showFlash";
import Footer from "./sections/Footer/Footer";
import Arrivals from "./sections/NewArrival/Arrivals";


import Single from "./sections/Single";
import TopSection from "./sections/TopSection/TopSection";

const LandingPage = () => {
  const landingCart = [
    {
      id: 1,
      title: "Elegant Golden-Base Stone Top Dining Table",
      image:
        "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FNWIJKUj.jpeg&w=640&q=75",
      price: 66,
      discription:
        "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern decoration.",
    },
    {
      id: 2,
      title: "Sleek Mirror Finish Phone Case",
      image:
        "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2Fyb9UQKL.jpeg&w=640&q=75",
      price: 27,
      discription: `Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.`,
    },
    {
      id: 3,
      title: "Stylish Red & Silver Over-Ear Headphones",
      image:
        "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FYaSqa06.jpeg&w=640&q=75",
      discription:
        "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      price: 60,
    },
  ];
  const carouselElement = landingCart.map((cart) => {
    return cart;
  });

  const singleCart = [
    {
      id: 1,
      category: "Furniture",
      title: "Sleek Modern Leather Sofa",
      image:
        "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FQphac99.jpeg&w=640&q=75",
      price: 53,
      discription:
        "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    },
  ];
  const singleProduct = singleCart.map((product) => (
    <Single key={product.id} {...product} />
  ));

  return (
    <div className="bg-light">
      <main>
        <Header />
        <TopSection cart={carouselElement} />
        <hr />
        <ShowFlash />
        <hr />
        <BrowseCategory />
        <hr />
        {singleProduct}
        <AllProducts />
        <Arrivals />
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;
