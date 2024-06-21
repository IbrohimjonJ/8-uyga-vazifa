import Link from "next/link"

const request = async (url: string) => {
  const req = await fetch(url)
  const data = await req.json()

  return data
}

interface Data {
  id: number
  thumbnail: string
  title: string
  description: string
  category:string
  price:number
}

async function Home() {
  const data = await request("https://dummyjson.com/products")

  return (
    <>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex max-w-6xl mx-auto px-2 my-20">
        {data.products.map((product: Data) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} className="hover:scale-105 shadow-xl shadow mb-3 max-w-sm flex justify-center items-center text-center">
              <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="bg"  src={product.thumbnail} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" color2 card-title">{product.title}</h2>
    <p className="color">{product.category} </p>
    <p className="price">${product.price}</p>
    <div className="card-actions justify-end">
      <button className="details">Go to details</button>
    </div>
  </div>
</div>

                
            </Link>
          );
        })}
      </ul>
    </>
  )
}

export default Home
