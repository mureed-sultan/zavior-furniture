const Showcase = () => {
    const products = [
      { title: "Chair", image: "/images/chair.jpg", link: "/shop?query=chairs" },
      { title: "Table", image: "/images/table.jpg", link: "/shop?query=tables" },
      { title: "Lamp", image: "/images/lamp.jpg", link: "/shop?query=lamps" },
    ];
  
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <a href={product.link} className="block text-blue-500 mt-1">Shop {product.title} →</a>
          </div>
        ))}
      </section>
    );
  };
  
  export default Showcase;
  