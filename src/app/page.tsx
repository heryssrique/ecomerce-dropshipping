import { ProductList } from '@/components/ProductList';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">LOJA DROPSHIPPING</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">HOME</a>
            <a href="#" className="hover:text-gray-300">PRODUTOS</a>
            <a href="#" className="hover:text-gray-300">SOBRE</a>
            <a href="#" className="hover:text-gray-300">CONTATO</a>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">COLEÇÃO EXCLUSIVA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossos produtos premium com entrega rápida
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">DESTAQUES</h2>
          <ProductList />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-6">
        <div className="container mx-auto text-center">
          <p> 2025 Loja Dropshipping. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
