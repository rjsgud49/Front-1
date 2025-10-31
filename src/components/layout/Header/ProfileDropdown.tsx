import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
    const navigate = useNavigate();

    return (
        <div className="absolute top-12 right-0 w-44 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
            <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => navigate('/profile')}
            >
                프로필 보기
            </button>

            <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => navigate('/settings')}
            >
                설정
            </button>

            <hr className="my-2" />

            <button
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
                onClick={() => alert('로그아웃 기능 필요')}
            >
                로그아웃
            </button>
        </div>
    );
};

export default ProfileDropdown;
