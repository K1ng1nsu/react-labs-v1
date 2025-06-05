import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    // 검색어 없이 검색 버튼 누르면 그냥 결과 페이지로 이동
    navigate(`/result?q=${encodeURIComponent(input)}`);
  }

  return (
    <div>
      <h2>검색 페이지</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}
