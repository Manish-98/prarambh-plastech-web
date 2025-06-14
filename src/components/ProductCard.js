import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.altText || product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Content */}
      <div className="p-4 h-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard; 