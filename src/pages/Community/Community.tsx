import { useEffect, useState } from "react";

import axios from "axios";
import { useAuth } from "../../auth/AuthContext";

type Post = {
  postUuid: string;
  title: string;
  writer: string | null;
  writedAt: string;
  likes: number;
  views: number;
  comments: number;
};

const api = axios.create({
  baseURL: "http://3.38.107.119:8080",
  headers: { "Content-Type": "application/json" },
});

export default function Community() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/post/list?page=${page}&size=10`);
        const data = res.data;
        if (data.success) {
          setPosts(data.data.content);
          setTotalPages(data.data.totalPages);
        }
      } catch (err) {
        console.error("게시글 목록 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  return (
    <div className="min-h-screen px-6 py-8 bg-gray-50">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">커뮤니티</h1>
        {user && (
          <div className="text-sm text-gray-600">
            환영합니다, <span className="font-semibold">{user.id}</span> 님
          </div>
        )}
      </header>

      {loading ? (
        <div className="py-10 text-center text-gray-500">불러오는 중...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.postUuid}
              className="p-5 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
            >
              <h2 className="mb-2 text-lg font-semibold line-clamp-1">
                {post.title}
              </h2>
              <p className="mb-3 text-sm text-gray-500">
                {post.writer ?? "익명"} ·{" "}
                {new Date(post.writedAt).toLocaleDateString("ko-KR")}
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
                <span>👁️ {post.views}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 페이지네이션 */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-40"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
        >
          이전
        </button>
        <span className="flex items-center text-sm text-gray-700">
          {page} / {totalPages}
        </span>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-40"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
}
