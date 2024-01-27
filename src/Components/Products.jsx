
import { Link } from "react-router-dom"
import data from "../assets/data"
function Products() {
  return (
  <>
   
   
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
     {
        data.map((data)=>{
            return (
                <>
                <li>
        <div className="group block overflow-hidden">
          <img
            src={data.img}
            alt=""
            className="h-[240px] w-[250px] object-center transition duration-500 group-hover:scale-105"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
           {data.title}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900">RS. {data.price} </span>

            </p>

            <div className="flex justify-center">
              <Link
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-black hover:text-white"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </li>

                </>
            )
        })
     }
    </ul>
  </div>
</section>
  </>
  )
}

export default Products