import { useInput } from "./useInput";

export default function LoginForm() {
  const username = useInput("");
  const password = useInput("");

  return (
    <form>
      <input placeholder="아이디" onChange={username.onChange} />
      <input
        placeholder="비밀번호"
        type="password"
        onChange={password.onChange}
      />
      <button type="button" onClick={username.reset}>
        ID 초기화
      </button>
    </form>
  );
}
