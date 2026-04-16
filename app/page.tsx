'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  // --- STATE CHO CÔNG CỤ TÍNH TRẢ GÓP ---
  const [carPrice, setCarPrice] = useState(13000000000); // Mặc định 13 tỷ (G63)
  const [downPayment, setDownPayment] = useState(30); // Trả trước 30%
  const [termMonths, setTermMonths] = useState(60); // Thời hạn 60 tháng (5 năm)
  const [interestRate, setInterestRate] = useState(8.5); // Lãi suất 8.5%/năm

  // --- LOGIC TÍNH TOÁN ---
  const loanAmount = carPrice - (carPrice * downPayment) / 100;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const monthlyPayment = 
    (loanAmount * monthlyInterestRate) / 
    (1 - Math.pow(1 + monthlyInterestRate, -termMonths));
  const totalInterest = (monthlyPayment * termMonths) - loanAmount;

  // Format tiền tệ VNĐ
  const formatVND = (number: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
  };

  // --- DỮ LIỆU XE MẪU ---
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz G63 AMG',
      price: '13.000.000.000 đ',
      specs: 'Sản xuất 2022 | ODO: 15,000 km | Màu Đen',
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Rolls-Royce Phantom VIII',
      price: '45.000.000.000 đ',
      specs: 'Sản xuất 2021 | ODO: 8,000 km | Bespoke',
      image: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/672076322_1958034848169870_6129856746619548193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHa4lMN0IVb8WhphLMJHEMhk8OOoSEpuqqTw46hISm6qviE0AIt5JjwXmRV3m0Y_9MEXLJt26LK3mMVGhLwlRG6&_nc_ohc=6z0qIKWgZeUQ7kNvwEMQKXN&_nc_oc=Adr_hv8_pDymyZv6e3e2kaTKjt_cosqOSgzZxK4TN4HTC1PByJ1EigckkuooCHo1tnAYQtaXOdv6ntmE1d7pqxMh&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=ta5sXesiCSx90tOXZqKzHA&_nc_ss=7a3a8&oh=00_Af3chcI0UEwOMqbDue9US5FSlBSqJRSI_JeKiszukb2ZAA&oe=69E6ADC3',
    },
    {
      id: 3,
      name: 'Lexus LX600 VIP 4 Chỗ',
      price: '10.500.000.000 đ',
      specs: 'Sản xuất 2023 | Xe lướt siêu mới | Trắng/Nâu',
      image: 'https://images.unsplash.com/photo-1669023030485-573b6a75ab64?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-600 selection:text-white">
      {/* HEADER */}
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

      {/* HERO SECTION */}
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-600 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-amber-700 transition font-bold">
              Xem Xe Đang Bán
            </button>
            <button className="border border-zinc-500 bg-zinc-900/50 text-white px-8 py-4 uppercase tracking-widest text-sm hover:border-amber-500 hover:text-amber-500 transition">
              Ký Gửi Xe Của Bạn
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
          <div>
            <h3 className="text-3xl font-serif text-white mb-2">Bộ Sưu Tập Nổi Bật</h3>
            <p className="text-zinc-500">Những mẫu xe vừa cập bến showroom</p>
          </div>
          <button className="hidden md:block text-amber-500 hover:text-amber-400 uppercase tracking-widest text-sm transition">
            Xem tất cả &rarr;
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="group bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition duration-300 overflow-hidden rounded-xl">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                />
                <div className="absolute top-4 right-4 bg-zinc-950/80 text-amber-500 px-3 py-1 text-xs uppercase tracking-wider rounded">
                  Mới về
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 truncate">{car.name}</h4>
                <p className="text-zinc-400 text-sm mb-6 h-10">{car.specs}</p>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
                  <span className="text-xl font-serif text-amber-500">{car.price}</span>
                  <button className="text-sm bg-zinc-800 px-4 py-2 rounded hover:bg-white hover:text-black transition font-semibold">
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR WIDGET & YOUTUBE / EBOOK PROMO */}
      <section className="bg-zinc-900 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Promo info */}
          <div>
            <h3 className="text-3xl font-serif mb-6">Giải Pháp Tài Chính Linh Hoạt</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Quân Car hỗ trợ thủ tục ngân hàng nhanh chóng, bảo mật với hạn mức vay lên đến 70% giá trị xe. Sử dụng công cụ bên cạnh để ước tính chi phí.
            </p>
            
            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 mb-6">
              <h4 className="text-amber-500 font-bold uppercase tracking-wider mb-2">🎁 Quà Tặng Độc Quyền</h4>
              <p className="text-zinc-300 text-sm mb-4">Tải ngay Ebook <span className="italic text-white">"How to buy used luxury car"</span> do chính Quân Car biên soạn để nắm bắt những bí quyết chọn xe lướt đỉnh nhất.</p>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded text-sm uppercase tracking-widest transition">Tải Ebook Miễn Phí</button>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-400">
               <span>Đừng quên theo dõi các video review chi tiết trên kênh YouTube</span>
               <a href="#" className="text-red-500 font-bold hover:underline flex items-center gap-1">
                 ▶ Diamond Cars
               </a>
            </div>
          </div>

          {/* Right Column: Calculator */}
          <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
            <h4 className="text-2xl font-serif mb-6 text-center text-white">Công Cụ Tính Trả Góp</h4>
            
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Giá trị xe (VNĐ)</label>
                <input 
                  type="number" 
                  value={carPrice} 
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">Trả trước (%)</label>
                  <input 
                    type="number" 
                    value={downPayment} 
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">Lãi suất (%/năm)</label>
                  <input 
                    type="number" 
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-2">Thời hạn vay: {termMonths} tháng</label>
                <input 
                  type="range" 
                  min="12" 
                  max="84" 
                  step="12"
                  value={termMonths} 
                  onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div className="pt-6 border-t border-zinc-800 space-y-3">
                <div className="flex justify-between text-zinc-400">
                  <span>Số tiền cần vay:</span>
                  <span className="text-white font-medium">{formatVND(loanAmount)}</span>
                </div>
                <div className="flex justify-between text-amber-500 text-xl font-bold">
                  <span>Trả góp mỗi tháng:</span>
                  <span>{formatVND(monthlyPayment)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-12 text-center text-zinc-600 text-sm border-t border-zinc-800">
        <h2 className="text-2xl font-serif text-zinc-400 mb-4 uppercase tracking-widest">Quân Car</h2>
        <p className="mb-2">Địa chỉ Showroom: KĐT Nam Trung Yên, Cầu Giấy, Hà Nội</p>
        <p className="mb-8">Hotline: 0999.999.999 | Email: contact@quancar.com</p>
        <p>© 2026 Quân Car. All rights reserved. Powered by Next.js & Vercel.</p>
      </footer>
    </main>
  );
}
