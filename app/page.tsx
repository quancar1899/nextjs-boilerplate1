import Image from 'next/image';

export default function Home() {
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz G63 AMG',
      price: '$179,000',
      specs: '577 hp | 0-60 mph: 4.5s',
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Rolls-Royce Phantom',
      price: '$460,000',
      specs: '563 hp | V12 Engine',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Lamborghini Huracán',
      price: '$248,000',
      specs: '631 hp | Top Speed: 202 mph',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd3d92?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-neutral-800">
        <h1 className="text-2xl font-serif tracking-widest uppercase">Diamond Cars</h1>
        <ul className="flex space-x-6 text-sm uppercase tracking-wide text-neutral-400">
          <li className="hover:text-white cursor-pointer transition">Trang chủ</li>
          <li className="hover:text-white cursor-pointer transition">Mua xe</li>
          <li className="hover:text-white cursor-pointer transition">Ký gửi</li>
          <li className="hover:text-white cursor-pointer transition">Liên hệ</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-serif mb-4">Đẳng Cấp Vượt Thời Gian</h2>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-8">
          Khám phá bộ sưu tập những siêu phẩm cơ khí xuất sắc nhất thế giới. 
          Nơi định hình phong cách và sự thành công của bạn.
        </p>
        <button className="bg-white text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-neutral-200 transition">
          Xem Bộ Sưu Tập
        </button>
      </section>

      {/* Featured Cars List */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-serif mb-10 text-center uppercase tracking-widest border-b border-neutral-800 pb-4">
          Xe Nổi Bật Trong Tuần
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="group cursor-pointer bg-neutral-800 rounded-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{car.name}</h4>
                <p className="text-neutral-400 text-sm mb-4">{car.specs}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-serif">{car.price}</span>
                  <button className="text-sm border border-white px-4 py-2 hover:bg-white hover:text-black transition">
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-neutral-500 border-t border-neutral-800 text-sm">
        <p>© 2026 Diamond Cars. All rights reserved.</p>
      </footer>
    </main>
  );
}
