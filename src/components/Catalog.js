import Image from "next/image";
import Link from "next/link";

const Catalog = ({ 
    title = "Our Product Range",
    subtitle = "Comprehensive packaging solutions for every industry",
    products = [],
    ctaText = "View All Products",
    ctaLink = "/products",
    backgroundColor = "bg-gray-50"
  }) => {
    return (
      <section className={`py-16 ${backgroundColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.alt || product.title}
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
                <div className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-md leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="text-center">
              <Link
                href={ctaLink}
                className="button"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default Catalog;
  