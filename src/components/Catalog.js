import Link from "next/link";

const Catalog = ({
  title,
  subtitle,
  items = [],
  renderItem,
  ctaText,
  ctaLink,
  backgroundColor = "bg-white",
}) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center">
          {items.map((item) => (
              renderItem(item)
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="text-center">
            <Link href={ctaLink} className="button">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog; 