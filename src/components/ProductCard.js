import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.altText || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">Product Image</span>
            </div>
          </div>
        )}
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