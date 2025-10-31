'use client';

import { useCart } from '@/context/CartContext';

type AddToCartButtonProps = {
  productId: string;
};

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(productId);
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      Comprar
    </button>
  );
}
