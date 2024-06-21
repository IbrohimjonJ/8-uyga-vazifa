"use client"

interface Product {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
  description: string;
}

interface Paramsl {
  params: {
    id: number;
  };
}

const fetchProduct = async (url: string): Promise<Product> => {
  const req = await fetch(url);
  const data: Product = await req.json();

  return data;
};

const productid = async (params: Paramsl): Promise<JSX.Element> => {
  

  const product: Product = await fetchProduct(`https://dummyjson.com/products/${params.params.id}`);

  return (
    <>
      <div key={product.id} className="m-auto flex justify-center xl:w-3/4 p-4">
        <div className="flex p-4 gap-5">
          <div className="card1">
            <img
              className="w-2/4 img"
              src={product.thumbnail}
              width={500}
              height={300}
              alt={product.title}
            />
          </div>
          <div>
            <p className="price1">${product.price}</p>
            <h2 className="text-3xl font-semibold mt-2">{product.title}</h2>
            <p className="m">{product.description}</p>
                        <button className="btn btn-primary">Add to bag</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default productid;
