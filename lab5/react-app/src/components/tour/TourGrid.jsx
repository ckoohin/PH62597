export default function InternationalTours() {
  const tours = [
    { id: 1, title: "Tour Nhật Bản", img: "https://vtourist.com.vn/wp-content/uploads/2024/05/Chua-Asakusa_Tokyo_Japan-1536x1056.jpg" },
    { id: 2, title: "Tour Hàn Quốc", img: "https://vtourist.com.vn/wp-content/uploads/2024/05/Seoul-City-Skyline_Korea.jpg" },
    { id: 3, title: "Tour Thái Lan", img: "https://vtourist.com.vn/wp-content/uploads/2024/05/Muang-Boran_Thailand.jpg" },
    { id: 4, title: "Tour Singapore", img: "https://vtourist.com.vn/wp-content/uploads/2024/07/Helix-Bridge-Singapore.jpg" },
    { id: 5, title: "Tour Malaysia", img: "https://vtourist.com.vn/wp-content/uploads/2024/05/Malaysias-Batu-Caves-Hindu-temple-in-Kuala-Lumpur-1536x1024.jpg" },
    { id: 6, title: "Tour Đài Loan", img: "https://vtourist.com.vn/wp-content/uploads/2024/05/Ho-Nhat-Nguyet_Dai-Loan_Taiwan-1536x1056.jpg" },
    { id: 7, title: "Tour Trung Quốc", img: "https://vtourist.com.vn/wp-content/uploads/2024/06/Shangri-La-Van-Nam.-Trung-Quoc-2-1536x1006.jpg" },
    { id: 8, title: "Tour Châu Âu", img: "https://vtourist.com.vn/wp-content/uploads/2024/05/Du-thuyen-tren-kenh-Amsterdam_Vtourist-min-1536x1056.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="relative group h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            src={tour.img}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full bg-black/50  text-white text-center py-3 text-lg font-semibold">
            {tour.title}
          </div>
        </div>
      ))}
    </div>
  );
}