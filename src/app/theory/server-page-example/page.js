import { fetchListOfProducts } from "@/actions"

export default async function ServerPageExample() {
  const products = await fetchListOfProducts()
  console.log("products", products)

  return (
    <div className="p-11">
      <h1>ServerPageExample</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => (
            <li className="my-3 p-3 border  rounded-lg">
              <h2 className="text-xl mb-1 font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <p>No products to Show</p>
        )}
      </ul>
    </div>
  )
}
