interface ProductCardProps {
  name: string;
  price: number;
  description?: string;
}

function ProductCard({
  name,
  price,
  description,
}: ProductCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>

      {description && <p>{description}</p>}
    </div>
  );
}

export default ProductCard;