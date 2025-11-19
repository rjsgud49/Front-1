import { useEffect } from "react";
import Design from "./Design";
import LoginLeft from "./LoginLeft";

export default function Login2Page() {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 스크롤 안되게 막음
    return () => {
      document.body.style.overflow = "auto"; // 원래대로 돌려놓음
    };
  }, []);
  return (
    <div className="flex w-full h-screen">
      <LoginLeft /> {/* 왼쪽 480px */}
      <Design /> {/* 오른쪽 flex-1 */}
    </div>
  );
}
