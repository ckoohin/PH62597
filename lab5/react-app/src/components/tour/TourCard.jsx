import Button from "../common/Button";

export default function TourCard({ image, title, description, price }) {
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
          <Button variant="custom" size="small">Xem thêm</Button>
        </div>
      </div>
    </div>
  );
}