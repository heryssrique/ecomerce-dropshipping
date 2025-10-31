import { ProductCard } from './ProductCard';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export function ProductList() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Camiseta Premium',
      price: 129.90,
      image: '/placeholder-product.jpg',
      description: 'Camiseta 100% algodão'
    },
    {
      id: '2',
      name: 'Calça Jeans',
      price: 199.90,
      image: '/placeholder-product.jpg',
      description: 'Modelo skinny'
    },
    {
      id: '3',
      name: 'Tênis Esportivo',
      price: 299.90,
      image: '/placeholder-product.jpg',
      description: 'Conforto e estilo'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
