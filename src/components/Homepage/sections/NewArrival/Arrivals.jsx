import ArrivalProducts from "./ArrivalProducts"

const Arrivals = () => {
    const arrivalCart = [
        {
            id: 1,
            category: `Women's clothing`,
            title: "Off-Shoulder Ladies Fashion",
            image:
              "https://i.etsystatic.com/16049496/r/il/0ed364/5905253149/il_1140xN.5905253149_az2f.jpg",
            price: 63,
            discription: "",
          },
          {
            id: 2,
            category: `Women's clothing`,
            title: `Knitted Mini Dress`,
            image:
              "https://i.etsystatic.com/50793050/r/il/d4b36f/5853327256/il_1140xN.5853327256_kuto.jpg",
            price: 39,
            discription: "",
          },
          {
            id: 3,
            category: `Women's clothing`,
            title: "Off-Shoulder Ladies Fashion",
            image:
              "https://i.etsystatic.com/50793050/r/il/a4ae48/5853327242/il_1140xN.5853327242_k3ay.jpg",
            price: 29,
            discription:
              "Ruffle Strapless Cloth | Off-Shoulder Ladies Fashion | Knitted Mini Dress",
          },
          
    ]
    const arrivalDisplay = arrivalCart.map(items => (
        <ArrivalProducts key={items.id} {...items}/>
    ))
  return (
    <section className="mb-4">
      <div className="card p-3">
        <nav>
            <h5 className="featured--nav p-2">
                Featured
            </h5>
            <h2>
                New Arrival
            </h2>
        </nav>
       <div className="d-flex">
       {arrivalDisplay}
       </div>
      </div>
    </section>
  )
}

export default Arrivals
