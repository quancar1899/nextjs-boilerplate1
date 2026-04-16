'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  // State tính trả góp
  const [carPrice, setCarPrice] = useState(13000000000);
  const [downPayment, setDownPayment] = useState(30);
  const [termMonths, setTermMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(8.5);

  // State bộ lọc và tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const loanAmount = carPrice - (carPrice * downPayment) / 100;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const monthlyPayment = 
    (loanAmount * monthlyInterestRate) / 
    (1 - Math.pow(1 + monthlyInterestRate, -termMonths));

  const formatVND = (number: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
  };

  // Dữ liệu xe đã thêm phân loại (category)
  const cars = [
    {
      id: 'g63-amg',
      name: 'Mercedes-Benz G63 AMG',
      price: '13.000.000.000 đ',
      specs: 'Sản xuất 2022 | ODO: 15,000 km | Màu Đen',
      category: 'SUV',
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'phantom-viii',
      name: 'Rolls-Royce Phantom VIII',
      price: '45.000.000.000 đ',
      specs: 'Sản xuất 2021 | ODO: 8,000 km | Bespoke',
      category: 'Sedan',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'lexus-lx600',
      name: 'Lexus LX600 VIP 4 Chỗ',
      price: '10.500.000.000 đ',
      specs: 'Sản xuất 2023 | Xe lướt siêu mới | Trắng/Nâu',
      category: 'SUV',
      image: 'https://images.unsplash.com/photo-1669023030485-573b6a75ab64?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'lamborghini-huracan',
      name: 'Lamborghini Huracán EVO',
      price: '16.800.000.000 đ',
      specs: 'Sản xuất 2022 | ODO: 5,000 km | Vàng',
      category: 'Supercar',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd3d92?q=80&w=800&auto=format&fit=crop',
    }
  ];

  // Logic lọc xe
  const filteredCars = cars.filter(car => {
    const matchCategory = activeCategory === 'Tất cả' || car.category === activeCategory;
    const matchSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ['Tất cả', 'SUV', 'Sedan', 'Supercar'];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-600 selection:text-white">
      {/* HEADER (Giữ nguyên) */}
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-serif tracking-widest text-amber-500 uppercase">Quân Car</h1>
          <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide text-zinc-400 font-medium">
            <li className="hover:text-amber-500 cursor-pointer transition">Trang chủ</li>
            <li className="hover:text-amber-500 cursor-pointer transition">Bộ sưu tập</li>
            <li className="hover:text-amber-500 cursor-pointer transition">Mua trả góp</li>
            <li className="hover:text-amber-500 cursor-pointer transition">Liên hệ</li>
          </ul>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded uppercase text-xs tracking-widest font-bold transition">
            Hotline: 0999.999.999
          </button>
        </div>
      </nav>

      {/* HERO SECTION (Giữ nguyên) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Garage" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-amber-500 uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Chuyên Xe Sang Lướt Đỉnh Cao</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Định Chuẩn <br/> Đẳng Cấp Thượng Lưu</h2>
          <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Sở hữu ngay những siêu phẩm cơ khí xuất sắc nhất với sự bảo chứng chất lượng tuyệt đối từ Quân Car.
          </p>
        </div>
      </section>

      {/* TÌM KIẾM & BỘ LỌC */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-zinc-800 pb-8">
          
          {/* Nút lọc */}
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-sm uppercase tracking-wider transition ${
                  activeCategory === cat 
                  ? 'border-amber-500 bg-amber-500/10 text-amber-500 font-bold' 
                  : 'border-zinc-800 text-zinc-400 hover:border-zinc-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Ô tìm kiếm */}
          <div className="w-full md:w-72 relative">
            <input 
              type="text" 
              placeholder="Tìm tên xe..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 px-6 text-sm text-white focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>
      </section>

      {/* DANH SÁCH XE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {filteredCars.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            Không tìm thấy mẫu xe nào phù hợp.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="group bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition duration-300 overflow-hidden rounded-xl flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image src={car.image} alt={car.name} fill className="object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
                  <div className="absolute top-4 right-4 bg-zinc-950/80 text-amber-500 px-3 py-1 text-xs uppercase tracking-wider rounded">Mới về</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 truncate">{car.name}</h4>
                  <p className="text-zinc-400 text-sm mb-6 h-10">{car.specs}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800">
                    <span className="text-xl font-serif text-amber-500">{car.price}</span>
                    {/* Nút này sẽ dẫn sang trang chi tiết */}
                    <Link href={`/car/${car.id}`}>
                      <button className="text-sm bg-zinc-800 px-4 py-2 rounded hover:bg-white hover:text-black transition font-semibold cursor-pointer">
                        Chi tiết
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CALCULATOR & FOOTER (Giữ nguyên như cũ, tôi thu gọn lại để tiết kiệm độ dài, bạn copy nguyên đoạn này là được) */}
      <section className="bg-zinc-900 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif mb-6">Giải Pháp Tài Chính Linh Hoạt</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">Quân Car hỗ trợ thủ tục ngân hàng nhanh chóng, bảo mật với hạn mức vay lên đến 70% giá trị xe.</p>
            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 mb-6">
              <h4 className="text-amber-500 font-bold uppercase tracking-wider mb-2">🎁 Quà Tặng Độc Quyền</h4>
              <p className="text-zinc-300 text-sm mb-4">Tải ngay Ebook "How to buy used luxury car" do Quân Car biên soạn.</p>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded text-sm uppercase tracking-widest transition">Tải Ebook Miễn Phí</button>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
               <span>Đừng quên theo dõi các video review chi tiết trên kênh YouTube</span>
               <a href="#" className="text-red-500 font-bold hover:underline flex items-center gap-1">▶ Diamond Cars</a>
            </div>
          </div>
          <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
            <h4 className="text-2xl font-serif mb-6 text-center text-white">Công Cụ Tính Trả Góp</h4>
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Giá trị xe (VNĐ)</label>
                <input type="number" value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-amber-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-zinc-400 text-sm mb-2">Trả trước (%)</label><input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-amber-500" /></div>
                <div><label className="block text-zinc-400 text-sm mb-2">Lãi suất (%/năm)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-amber-500" /></div>
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Thời hạn vay: {termMonths} tháng</label>
                <input type="range" min="12" max="84" step="12" value={termMonths} onChange={(e) => setTermMonths(Number(e.target.value))} className="w-full accent-amber-500" />
              </div>
              <div className="pt-6 border-t border-zinc-800 space-y-3">
                <div className="flex justify-between text-zinc-400"><span>Số tiền cần vay:</span><span className="text-white font-medium">{formatVND(loanAmount)}</span></div>
                <div className="flex justify-between text-amber-500 text-xl font-bold"><span>Trả góp mỗi tháng:</span><span>{formatVND(monthlyPayment)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-zinc-950 py-12 text-center text-zinc-600 text-sm border-t border-zinc-800">
        <h2 className="text-2xl font-serif text-zinc-400 mb-4 uppercase tracking-widest">Quân Car</h2>
        <p className="mb-2">Địa chỉ Showroom: KĐT Nam Trung Yên, Cầu Giấy, Hà Nội</p>
        <p>© 2026 Quân Car. All rights reserved.</p>
      </footer>
    </main>
  );
}
