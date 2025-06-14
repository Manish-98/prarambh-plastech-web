import Link from "next/link";
import ProductCard from "./ProductCard";

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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
  