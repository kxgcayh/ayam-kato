import Image from "next/dist/client/image"
import { ProductInterface } from "../../interfaces/product.interface"

interface ArrivalProductPros {
  product: ProductInterface;
}

function ArrivalProduct(props: ArrivalProductPros) {
  const { product } = props;
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 grid-item cat1 cat4">
      <div className="arrival-items text-center mb-55">
        <div className="arrival-img">
          <Image src={`/img/katos/${product.category}/${product.imagePath}`} alt="bag" width={250} height={250} priority />
        </div>
        <div className="arrival-details position-relative pt-25">
          <h5>
            <a href="#">{product.name}</a>
          </h5>
          <div className="price">
            <span>Rp. {' '}{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArrivalProduct
