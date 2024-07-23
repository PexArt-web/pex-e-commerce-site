import AllProductCart from "./AllProductCart";

const AllProducts = () => {
  const AllProducts = [
    {
      id: 1,
      category: `Men's clothing`,
      title: `Unisex Y2K Pants`,
      image:
        "https://i.etsystatic.com/47040188/r/il/f8865c/5752936237/il_794xN.5752936237_fuvh.jpg",
      price: 49.48,
      discription: `Elevate your style with our Elastic Ebony Streetwear Pants, tailored for the modern trendsetter. These pants offer a perfect blend of urban sophistication and relaxed comfort, all in a rich ebony shade. From casual hangouts to city adventures, they're your go-to choice.
    
            ✅ Adaptable Style: Fits all occasions, casual to upscale.
            ✅ Comfortable: Elastic fit for day-long comfort.
            ✅ Lasting Quality: Durable design for lasting style.
            ✅ Distinctive Texture: Stand out with unique design details.`,
    },
    {
      id: 2,
      category: `Men's clothing`,
      title: `High Quality Baggy Sweatpants`,
      image:
        "https://i.etsystatic.com/49151383/r/il/9502dc/5898055935/il_794xN.5898055935_5um7.jpg",
      price: 46.92,
      discription:
        "High Quality Eclipse Gray 380GSM Unisex Heavyweight Baggy Sweatpants",
    },
    {
      id: 3,
      category: `Men's clothing`,
      title: `cargo pant for men trousers`,
      image:
        "https://i.etsystatic.com/49316655/r/il/266649/5848314900/il_794xN.5848314900_6mm2.jpg",
      price: 30,
      discription: `Explore timeless style with our custom vintage pants, featuring a high waist for a trendy streetwear look. These baggy and casual men's parachute cargo pants not only exude comfort but also boast unique customization options. Elevate your fashion with personalized details and ample pockets, making them the perfect blend of style and functionality. Embrace individuality with these long trousers that effortlessly combine vintage charm and modern street style. Order your customized pair today for a one-of-a-kind fashion statement.`,
    },
    {
      id: 4,
      category: `Women's clothing`,
      title: `Emerald green silk dress`,
      image:
        "https://i.etsystatic.com/25925166/r/il/ed3522/5883561229/il_1140xN.5883561229_dti2.jpg",
      price: 84.6,
      discription:
        "Emerald green silk dress, silk dress, wrap dress, bridesmaid dress, wedding guest dress, women dress, evening dress, long dress",
    },
    {
      id: 5,
      category: `Women's clothing`,
      title: `Emerald green silk dress`,
      image:
        "https://i.etsystatic.com/25925166/r/il/45dde6/5883561239/il_794xN.5883561239_4kba.jpg",
      price: 84.6,
      discription:
        "Emerald green silk dress, silk dress, wrap dress, bridesmaid dress, wedding guest dress, women dress, evening dress, long dress",
    },
    {
      id: 6,
      category: `Women's clothing`,
      title: `Wedding Dress`,
      image:
        "https://i.etsystatic.com/28278936/r/il/fcbd6c/5907633011/il_794xN.5907633011_lo3b.jpg",
      price: 143.08,
      discription:
        "Bohemian Dress, Wedding Dress, Long Summer Dress, Greek Goddess Dress, Helen Dress, Organic Cotton",
    },
    {
      id: 7,
      category: `Women's clothing`,
      title: `Elegant Blue Abaya`,
      image:
        "https://i.etsystatic.com/50755509/r/il/b4bc3e/5809051876/il_794xN.5809051876_nlgh.jpg",
      price: 49.24,
      discription:
        "Kaftan Elegant Blue Abaya: Unique Blend of Comfort and Style",
    },
    {
      id: 8,
      category: `Women's clothing`,
      title: `Anysize cuatom`,
      image:
        "https://i.etsystatic.com/9514795/r/il/785093/5827991718/il_794xN.5827991718_t6f6.jpg",
      price: 43.28,
      discription:
        "Anysize cuatom 3/4 sleeves 100% linen maxi classic V-neck retro dress with pockets spring summer plus size dress plus size clothing F445L",
    },
    {
      id: 9,
      category: `Women's clothing`,
      title: `Women's Cotton Linen Pocket Dress`,
      image:
        "https://i.etsystatic.com/50623948/r/il/990c54/5874587323/il_794xN.5874587323_d85d.jpg",
      price: 31.97,
      discription: "",
    },
  ];
  const displayAllProducts = AllProducts.map((allProducts) => (
    <AllProductCart key={allProducts.id} {...allProducts} />
  ));
  return (
    <section className="mb-4">
      <nav className="allProducts--Nav p-3">
        <h5 className="p-2 allProducts--title">Our Products</h5>
        <h2>Explore Our Products</h2>
      </nav>
      <div className="d-flex flex-wrap"> {displayAllProducts}</div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger">View All Products</button>
      </div>
    </section>
  );
};

export default AllProducts;
