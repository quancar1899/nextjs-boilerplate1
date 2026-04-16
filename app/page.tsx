'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';

export default function Home() {
  // --- CẤU CỨ DỮ LIỆU XE (Quân có thể thêm/bớt xe tại đây) ---
  const initialCars = [
    {
      id: 1,
      name: 'Mercedes-Benz G63 AMG lướt',
      brand: 'mercedes',
      price: '11.500.000.000 đ',
      specs: 'Sản xuất 2022 | 15.000km | Trắng nội thất Đỏ',
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera S',
      brand: 'porsche',
      price: '8.900.000.000 đ',
      specs: 'Sản xuất 2023 | Siêu lướt 2.000km | Xanh Miami',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Range Rover Autobiography LWB',
      brand: 'range rover',
      price: '14.200.000.000 đ',
      specs: 'Sản xuất 2022 | Model 2023 | Đen/Nâu',
      image: 'https://images.unsplash.com/photo-1606148301579-994f31539266?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'BMW 730Li M-Sport',
      brand: 'bmw',
      price: '3.800.000.000 đ',
      specs: 'Sản xuất 2021 | ODO 20.000km | Trắng tinh khôi',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Audi Q8 55 TFSI Quattro',
      brand: 'audi',
      price: '4.100.000.000 đ',
      specs: 'Sản xuất 2020 | Đăng ký 2021 | Cam/Đen',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Lamborghini Huracán STO',
      brand: 'xe khác',
      price: '28.000.000.000 đ',
      specs: 'Sản xuất 2022 | Cực phẩm sưu tầm',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd3d92?q=80&w=800&auto=format&fit=crop',
    },
  ];

  // --- STATE QUẢN LÝ TÌM KIẾM VÀ LỌC ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('tất cả');

  const categories = ['tất cả', 'mercedes', 'porsche', 'range rover', 'bmw', 'audi', 'xe khác'];

  // Logic lọc xe thông minh
  const filteredCars = useMemo(() => {
    return initialCars.filter((car) => {
      const matchesBrand = selectedBrand === 'tất cả' || car.brand === selectedBrand;
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [searchTerm, selectedBrand]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* HEADER */}
      <nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-serif tracking-widest text-amber-500 uppercase">Quân Car</h1>
          
          <div className="flex items-center gap-6">
            <ul className="hidden lg:flex space-x-6 text-xs uppercase tracking-widest text-neutral-400">
              <li className="hover:text-amber-500 cursor-pointer transition">Trang chủ</li>
              <li className="hover:text-amber-500 cursor-pointer transition">Mua xe</li>
              <li className="hover:text-amber-500 cursor-pointer transition">Ký gửi</li>
            </ul>
            <a href="tel:0799223333" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded text-sm font-bold transition flex items-center gap-2">
               Hotline: 0799 22 3333
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Đẳng Cấp Xe Lướt Thượng Lưu</h2>
          <p className="text-neutral-400 max-w-xl mx-auto italic">Nơi hội tụ những siêu phẩm từ các thương hiệu hàng đầu thế giới.</p>
        </div>
      </section>

      {/* BỘ LỌC VÀ TÌM KIẾM */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-8 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
          {/* Ô Tìm kiếm */}
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Tìm kiếm mẫu xe bạn mong muốn (VD: G63, Porsche...)" 
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-4 px-6 focus:border-amber-500 outline-none transition"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Danh mục hãng xe */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedBrand(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition border ${
                  selectedBrand === cat 
                  ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-900/20' 
                  : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:border-amber-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DANH SÁCH XE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 transition duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-amber-500 px-3 py-1 text-[10px] uppercase font-bold tracking-tighter rounded">
                  {car.brand}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition">{car.name}</h3>
                <p className="text-neutral-500 text-sm mb-4">{car.specs}</p>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
                  <span className="text-xl font-serif text-amber-500">{car.price}</span>
                  <button className="text-xs border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition uppercase tracking-widest">
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-20 text-neutral-500 italic">
            Không tìm thấy xe phù hợp với yêu cầu của Quân.
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-amber-500 mb-6 uppercase tracking-[0.4em]">Quân Car</h2>
          <div className="flex justify-center gap-8 mb-8 text-neutral-500 text-sm">
            <span>Youtube: Diamond Cars</span>
            <span>Hotline: 0799 22 3333</span>
          </div>
          <p className="text-neutral-700 text-xs tracking-widest uppercase">
            © 2026 Quân Car Luxury. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
