import Background from './Background';
import Form from './Form';

export default function Login() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 -z-10">
                <Background />
            </div>

            {/* Form Layer */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <Form />
            </div>
        </div>
    );
}
