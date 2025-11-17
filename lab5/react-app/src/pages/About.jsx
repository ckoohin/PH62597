import Navigation from "../components/common/Navigation";

function About() {
    return (
        <div>
            <Navigation/>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Giới thiệu</h1>
                <p className="text-gray-600">
                    Về chúng tôi
                </p>
            </div>
        </div>
    );
}

export default About;