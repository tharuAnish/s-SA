"use client"

import { fetchListOfProducts } from "@/actions"
import { useEffect, useState } from "react"

function ClientPageExample() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function getListOfProducts() {
    setLoading(true)
    const data = await fetchListOfProducts()
    console.log(data)
    if (data) {
      setProducts(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    getListOfProducts()
  }, [])

  if (loading) return <h1>Loading data! Please wait</h1>

  return (
    <div className="p-11">
      <h1>Client page server actions example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => (
            <li className="my-3 p-3 border  rounded-lg">
              <h2 className="text-xl mb-1 font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  )
}

export default ClientPageExample
