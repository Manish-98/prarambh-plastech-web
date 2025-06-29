import Link from "next/link";
import Card from "./Card";
import { mapClientToCard } from "@/lib/mappers/cardMappers";

const ClientCatalog = ({ 
    title = "Our Clients",
    subtitle = "Trusted by leading companies across diverse industries",
    clients = [],
    ctaText = "View All Clients",
    ctaLink = "/industries",
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
  
          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {clients.map((client) => (
              <Card key={client.id} {...mapClientToCard(client)} />
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
  
  export default ClientCatalog; 