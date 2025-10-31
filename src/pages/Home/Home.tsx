import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-8 py-8 bg-gray-50">
            {/* ===== LEFT : 기여자 랭킹 ===== */}
            <aside className="lg:w-1/5 bg-white rounded-xl shadow-md p-4 h-fit">
                <h2 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-1">🏆 기여자 랭킹</h2>
                <ul className="space-y-3">
                    {['홍길동', '이서준', '김태호', '박민서', '정지원'].map((name, idx) => (
                        <li
                            key={idx}
                            className="flex justify-between items-center text-sm text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            <span>
                                {idx + 1}. {name}
                            </span>
                            <span className="font-semibold text-indigo-500">{Math.floor(Math.random() * 500)}점</span>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* ===== CENTER : 메인 컨테이너 ===== */}
            <main className="flex-1 flex flex-col gap-6">
                {/* 이벤트 박스 */}
                <div className="w-full">
                    <img
                        src="https://school.gyo6.net/upload/gbsw/widg/img_9497v37d5=b7vad=48vba=b0vd6=6a45v03b1v8c4b_v4101.png"
                        className="w-full rounded-3xl"
                    />
                </div>

                {/* ✅ 채널 선택 + 게시글 (이벤트 박스와 통일된 스타일) */}
                <section className="bg-white rounded-2xl shadow-md p-4">
                    <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-1">📌 채널</h2>

                    <div className="flex gap-3 mb-5">
                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600 transition-colors">
                            일반 채널
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                            개발 채널
                        </button>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        {[
                            '이번 주 스터디 모임 공지합니다.',
                            'React 상태관리 어떤 걸 쓰면 좋을까요?',
                            'Java 실습에서 질문 있습니다!',
                            'Next.js 15에서 app router 오류 질문',
                            '학원 근처 맛집 추천해요!',
                        ].map((title, idx) => (
                            <li
                                key={idx}
                                className="p-3 hover:bg-gray-50 cursor-pointer transition-colors text-gray-700"
                            >
                                {title}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 블로그 카드 3개 */}
                <section>
                    <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-1">📰 블로그 최신글</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer"
                            >
                                <img
                                    src={`https://picsum.photos/seed/blog${item}/400/220`}
                                    alt={`blog-${item}`}
                                    className="rounded-md mb-3 w-full h-40 object-cover"
                                />
                                <h3 className="font-semibold text-gray-800 mb-1">블로그 글 제목 {item}</h3>
                                <p className="text-sm text-gray-600">간단한 설명이 들어갑니다. 읽어보세요!</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* ===== RIGHT : 최신 글 ===== */}
            <aside className="lg:w-1/5 bg-white rounded-xl shadow-md p-4 h-fit">
                <h2 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-1">📢 최신 글</h2>
                <ul className="space-y-3">
                    {[
                        '오늘 수업 후기 공유합니다!',
                        'Spring Boot 설정 오류 해결 방법',
                        '스터디 참여하실 분?',
                        '좋은 개발 블로그 추천',
                        'SQL JOIN 정리',
                    ].map((title, idx) => (
                        <li
                            key={idx}
                            className="text-sm text-gray-700 border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer transition-colors"
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Home;
