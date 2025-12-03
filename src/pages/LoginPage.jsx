import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Email và password không được bỏ trống");
            return;
        }
        try {
            const res = await login({ email, password });
            localStorage.setItem("token", res.token);
            toast.success("Đăng nhập thành công");
            navigate("/list");
        } catch (err) {
            toast.error("Sai email hoặc mật khẩu",err.message);
        }
    };
    return (
        <div className="flex justify-center p-6">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 border">
                <h2 className="text-center text-2xl font-semibold mb-6">Login Page</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
                        Đăng Nhập
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;