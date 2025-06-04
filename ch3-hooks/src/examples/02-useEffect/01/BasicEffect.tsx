// 컴포넌트가 마운트될 때 콘솔에 한 번만 메시지 출력
import { useEffect } from "react";

export default function BasicEffect() {
  useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
  }, []); // 빈 배열: 마운트 시 1회

  return <div>콘솔을 확인해보세요!</div>;
}
