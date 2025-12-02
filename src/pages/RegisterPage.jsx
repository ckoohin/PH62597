import { useState } from "react";
import { register } from "../services/tourService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Vui lòng nhập đủ thông tin");
            return;
        }

        try {
            await register({ email, password });
            toast.success("Đăng ký thành công");
            navigate("/login");
        } catch (err) {
            toast.error("Đăng ký lỗi ",err.message);
        }
    };
    return (
        <div className="flex justify-center p-6">
            <div className="w-full max-w-xl bg-white shadow p-6 rounded">
                <h2 className="text-center text-xl mb-6">Register Page</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <button className="w-full py-3 bg-blue-600 text-white rounded">
                        Đăng Ký
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;