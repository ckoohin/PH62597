import { Link } from "react-router-dom";

export default function TourCard({id, image, title, description, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">

      <div className="h-52 w-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col">
        <h2 className="text-xl font-bold text-blue-900 leading-tight">
          {title}
        </h2>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <div className="mt-3">
          <span className="text-lg font-bold text-red-600">
            {price.toLocaleString()} đ
          </span>
        </div>
        <div className="mt-4">
          <Link
              to={`/tours/${id}`}
              className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}