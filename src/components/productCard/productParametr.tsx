import { ProductParametr } from "../../app/types"

export const ProductParametrBlock = ({name, value}: ProductParametr) => {
  return (
    <p className="lowercase text-small product-subtitle line-small-md flex justify-between"><strong>{name}:</strong> {value}</p>
  )
}
