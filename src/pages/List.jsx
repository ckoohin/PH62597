import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { getTours, deleteTour, patchTour } from "../services/tourService";

function ListPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const fetchTours = async () => {
    try {
      setLoading(true);
      const data = await getTours();
      setTours(data);
    } catch (err) {
      console.error("Error:", err);
      toast.error("Không thể tải danh sách tours");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Đang tải...</div>
      </div>
    );
  }

  const handleDelete = async (id) => {
    try {
      if (!confirm("Bạn chắc chắn muốn xóa Tour này chứ?")) return;
      await deleteTour(id); 
      setTours(tours.filter((t) => t.id !== id));
      toast.success("Xóa thành công");
    } catch (err) {
      toast.error("Có lỗi khi xóa", err);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await patchTour(id, { active: !currentStatus });
      fetchTours();
      toast.success("Cập nhật trạng thái thành công");
    } catch (error) {
      console.error("Error", error);
      toast.error("Có lỗi khi cập nhật trạng thái");
    }
  };

  const filteredTours = tours.filter((tour) => {
    const matchSearch = tour.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = categoryFilter ? tour.category === categoryFilter : true;
    const matchStatus = statusFilter ? statusFilter === "active" ? tour.active === true : tour.active === false : true;
    return matchSearch && matchCategory && matchStatus;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-semibold mb-6">Danh sách</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Tìm theo tên..."
          className="px-4 py-2 border rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Tất cả danh mục</option>
          <option value="tour nội địa">Tour nội địa</option>
          <option value="tour châu âu">Tour châu âu</option>
        </select>

        <select
          className="px-4 py-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Tất cả trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="inactive">Đã ngừng</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Destination
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Duration
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Price
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Image
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Available
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Active
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Category
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTours.map((tour) => (
              <tr className="hover:bg-gray-50" key={tour.id}>
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.destination}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.duration}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.price}
                </td>
                <td className="px-4 py-2 border border-gray-300 hover:scale-105 transition">
                  <img src={tour.image} className="max-w-60" alt="" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.available}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tour.active}
                      onChange={() => toggleStatus(tour.id, tour.active)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all relative">
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-all"></div>
                    </div>
                  </label>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.category}
                </td>
                <td className="flex gap-3 px-4 py-20 border border-gray-300">
                  <button
                    onClick={() => handleDelete(tour.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                  <Link
                    to={`/edit/${tour.id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTours.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            Không tìm thấy tour nào.
          </div>
        )}
      </div>
    </div>
  );
}

export default ListPage;
