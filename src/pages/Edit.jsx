import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getTourById, updateTour } from "../services/tourService";

function EditPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [destination, setDetination] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");
  const [active, setActive] = useState(true);
  const [category, setCategory] = useState("");

  const { id } = useParams();

  const getTour = async (id) => {
    try {
      const res = await getTourById(id);
      setName(res.name);
      setDetination(res.destination);
      setDuration(res.duration);
      setPrice(res.price);
      setImage(res.image);
      setDescription(res.description);
      setAvailable(res.available);
      setActive(res.active);
      setCategory(res.category);
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  };

  useEffect(() => {
    if (id) getTour(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      return toast.error("Tên tour không được bỏ trống");
    }
    if (name.length < 5 || name.length > 100) {
      return toast.error("Tên tour phải từ 5 đến 100 ký tự");
    }

    if (!destination.trim()) {
      return toast.error("Điểm đến không được bỏ trống");
    }
    if (destination.length < 2 || destination.length > 50) {
      return toast.error("Điểm đến phải từ 2 đến 50 ký tự");
    }

    if (!duration.trim()) {
      return toast.error("Thời gian tour không được bỏ trống");
    }

    if (!price || isNaN(price) || Number(price) <= 0) {
      return toast.error("Giá tour phải là số lớn hơn 0");
    }

    const urlRegex =
      /^(https?:\/\/)[\w.-]+(\.[\w.-]+)+(\/[\w._~:/?#[\]@!$&'()*+,;=-]*)?$/;
    if (!image.trim()) {
      return toast.error("URL hình ảnh không được bỏ trống");
    }
    if (!urlRegex.test(image)) {
      return toast.error("URL hình ảnh không hợp lệ");
    }

    if (!description.trim()) {
      return toast.error("Mô tả không được bỏ trống");
    }
    if (description.length < 10 || description.length > 1000) {
      return toast.error("Mô tả phải từ 10 đến 1000 ký tự");
    }

    if (available === "" || isNaN(available) || Number(available) < 0) {
      return toast.error("Số lượng chỗ phải là số ≥ 0");
    }

    if (!category) {
      return toast.error("Vui lòng chọn loại tour");
    }

    if (!["tour nội địa", "tour quốc tế"].includes(category)) {
      return toast.error("Loại tour không hợp lệ");
    }
    const newTour = {
      name,
      destination,
      duration,
      price: Number(price),
      image,
      description,
      available: Number(available),
      active,
      category,
    };

    try {
      await updateTour(id, newTour);
      toast.success("Sửa tour thành công");
      navigate("/list");
    } catch (err) {
      toast.error("Lỗi sửa tour", err.message);
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 border">
        <h1 className="text-center text-2xl font-semibold mb-6">
          Sửa Tour
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Destination</label>
            <input
              value={destination}
              onChange={(e) => setDetination(e.target.value)}
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Duration</label>
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Available</label>
            <input
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
              type="number"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              type="checkbox"
              className="h-5 w-5 text-blue-600"
            />
            <label className="font-medium">Active</label>
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Chọn loại tour --</option>
              <option value="tour nội địa">Tour nội địa</option>
              <option value="tour quốc tế">Tour quốc tế</option>
              <option value="tour châu âu">Tour châu âu</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Cập Nhật Tour
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPage;
