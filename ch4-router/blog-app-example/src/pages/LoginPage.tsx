import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const isLogin = false;

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  return <div>로그인 페이지</div>;
}
