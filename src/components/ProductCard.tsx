import { AddToCartButton } from './AddToCartButton';

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-none overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">R$ {product.price.toFixed(2)}</span>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}
