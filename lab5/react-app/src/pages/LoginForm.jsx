import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/dashboard");
    };

    return <button onClick={handleSubmit}>Login</button>;
}
export default LoginForm;