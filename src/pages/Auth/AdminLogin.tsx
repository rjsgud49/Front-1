// src/pages/AdminLogin.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext.tsx';

const AdminLogin = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;
        setErr('');
        setLoading(true);

        // 관리자 전용 로그인 호출
        const ok = await login(id, password, { kind: 'admin' });

        setLoading(false);
        if (ok) {
            navigate('/'); // 필요 시 '/admin' 등으로 변경
        } else {
            setErr('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-80 p-6 bg-white rounded shadow-md">
                <h2 className="mb-4 text-lg font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-red-500 to-yellow-500">
                    관리자 로그인
                </h2>
                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium" htmlFor="id">
                        아이디
                    </label>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                        autoComplete="username"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-1 text-sm font-medium" htmlFor="password">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                        autoComplete="current-password"
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <Link to="/login" className="text-sm text-blue-600 hover:underline">
                        사용자로 로그인하기
                    </Link>
                </div>
                {err && <p className="mt-2 text-sm text-red-600">{err}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 mt-4 text-white rounded transition duration-150 ease-in-out bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? '로그인 중…' : '로그인'}
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
