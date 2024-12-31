import React from 'react'

const Home = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to MyShop!
          </h1>
          <p className="text-lg mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200">
            Shop Now
          </button>
        </div>
      </header>
      <section id="featured" className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
            Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Product 1", "Product 2", "Product 3", "Product 4"].map(
              (product, index) => (
                <div
                  key={index}
                  className="bg-gray-100 shadow-md rounded-lg p-4 text-center hover:shadow-xl"
                >
                  <img
                    src={`https://via.placeholder.com/150?text=${product}`}
                    alt={product}
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">{product}</h3>
                  <p className="text-sm text-gray-500">$99.99</p>
                  <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600">
                    Buy Now
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home