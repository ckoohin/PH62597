import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function ListPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/tours");
      setTours(response.data);
      setError(null);
    } catch (err) {
      setError("Không thể tải danh sách tours", err.message);
      console.error("Error:", err);
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
      await axios.delete(`http://localhost:3000/tours/${id}`);
      setTours(tours.filter((t) => t.id !== id));
      toast.success("Xóa thành công");
    } catch (err) {
      setError(err.message);
      toast.error("Có lỗi khi xóa");
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await axios.patch(`http://localhost:3000/tours/${id}`, {
        active: !currentStatus,
      });
      fetchTours();
      toast.success("Cập nhật trạng thái thành công");
    } catch (error) {
      console.error("Error", error);
      toast.error("Có lỗi khi cập nhật trạng thái");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-semibold mb-6">Danh sách</h1>

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
            {tours.map((tour) => (
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
      </div>
    </div>
  );
}

export default ListPage;
