import CarouselSection from "./Carousels"
import Category from "./Category"

const TopSection = ({cart}) => {
  return (
    <div className="d-flex justify-content-center gap-5">
      <Category/>
      <div className="divider"></div>
      <CarouselSection cart = {cart}/>
    </div>
  )
}

export default TopSection
