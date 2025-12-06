export default function Form() {
    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center">
                <div className="w-[1100px] h-[600px] bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.16)] flex overflow-hidden">
                    {/* 왼쪽 초록 영역 */}
                    <div className="w-1/2 bg-[#49A85D] flex items-center justify-center">
                        <img src="src\assets\LipSum-logo-white.svg" className="w-[40%]" />
                    </div>

                    {/* 오른쪽 로그인 영역 */}
                    <div className="w-1/2 p-10 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-2">반가워요!</h2>
                        <p className="text-gray-500 mb-6">계정에 로그인하여 시작하세요</p>

                        <div className="flex flex-col gap-4">
                            {/* 아이디 입력 */}
                            <div>
                                <label className="font-medium">아이디</label>
                                <input
                                    type="text"
                                    placeholder="아이디"
                                    className="mt-1 w-full border-3 rounded-[15px] p-2 border-[#C2C0C0] placeholder-[#888888]"
                                />
                            </div>

                            {/* 비밀번호 입력 */}
                            <div>
                                <label className="font-medium">비밀번호</label>
                                <input
                                    type="password"
                                    placeholder="비밀번호"
                                    className="mt-1 w-full border-3 rounded-[15px] p-2 border-[#C2C0C0] placeholder-[#888888]"
                                />
                            </div>

                            {/*
                            로그인 상태 유지 체크박스
                            TODO: 피그마에 있는 체크박스 UI로 변경해야함.
                            */}
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" id="rememberMe" className=" accent-[#868686]" /> 로그인 상태 유지
                            </div>

                            {/* 로그인 버튼 */}
                            <div className="flex justify-center">
                                <button className="mt-4 w-[250px] h-12 bg-[#666666] hover:bg-[#4C4C4C] text-white py-2 rounded-[15px] flex items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.16)]">
                                    로그인
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
