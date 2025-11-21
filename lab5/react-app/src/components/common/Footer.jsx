export default function Footer() {
  return (
    <footer className="bg-gray-50 border-gray-100 py-12">
            <div className="grid lg:grid-cols-5 gap-y-8">
              <div className="lg:col-span-2 space-y-4 ">
                <h3 className="text-lg font-bold text-gray-800">Đăng ký để nhận tin về chúng tôi</h3>
                <p className="text-sm text-gray-600">
                  Chắc chắn liên hệ với chúng tôi để nhận thêm thông tin về tour ưu đãi!
                </p>
                <form className="flex px-25">
                  <input
                    type="email"
                    placeholder="Địa chỉ Email"
                    className="flex p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-700 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded-r-md transition duration-150 text-sm"
                  >
                    Gửi ngay!
                  </button>
                </form>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-800">VĂN PHÒNG TẠI HÀ NỘI</h4>
                <p className="text-sm text-gray-600">
                  Tầng 6, Indochina Tower, 241 Xuân Thuỷ, P. Cầu Giấy
                </p>
                <p className="text-sm text-gray-600">
                  SĐT:0943.7.88818
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-800 mb-3">VỀ CHÚNG TÔI</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Giới thiệu</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Liên hệ</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Tuyển dụng</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">CEO Triển khai Event</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-800 mb-3">SẢN PHẨM</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Tour quốc tế</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Tour nội địa</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Tư vấn Visa</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Event - Teambuilding</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-red-600">Dịch vụ Tư vấn Visa</a></li>
                </ul>
              </div>
          </div>
    </footer>
  );
}