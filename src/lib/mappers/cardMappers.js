// Mapper for client data
export const mapClientToCard = (client) => ({
  image: client.logo,
  title: client.companyName,
  subtitle: client.sector,
  imageAlt: `${client.companyName} logo`,
});

// Mapper for product data
export const mapProductToCard = (product) => ({
  image: product.imageUrl,
  title: product.name,
  description: product.description,
  imageAlt: product.altText || product.name,
});
