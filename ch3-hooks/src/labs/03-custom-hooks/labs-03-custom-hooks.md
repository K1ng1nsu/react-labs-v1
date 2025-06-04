# labs-03-custom-hooks.md

## 문제 1. useCustomToggle - 불리언 상태를 쉽게 토글하는 훅

- `useCustomToggle.ts` 파일에 커스텀 훅 `useCustomToggle`을 만드세요.
- 불리언 상태값(`value`)과,
  값을 true/false로 바꾸는 toggle 함수(`toggle`)를 리턴하세요.
- 활용 예시:

  ```tsx
  const [visible, toggleVisible] = useCustomToggle(false);
  // <button onClick={toggleVisible}>토글</button>
  ```

## 문제 2. useInterval - 반복 타이머를 손쉽게 다루는 커스텀 훅

- `useInterval.ts` 파일에 커스텀 훅 `useInterval`을 만드세요.
- 인자로 (콜백 함수, 지연(ms))을 받아
  **지정한 시간마다 콜백을 실행**합니다.
- 언마운트 시 자동으로 타이머가 해제되어야 합니다.
- 활용 예시:

  ```tsx
  useInterval(() => setCount((c) => c + 1), 1000);
  ```

## 문제 3. useManualFetch - 수동 호출 API 커스텀 훅

- `useManualFetch.ts` 파일에 커스텀 훅 `useManualFetch<T>`를 만드세요.
- 인자로 url(문자열)을 받고,
  `{ data, loading, error, fetchData }`를 반환하세요.
- 이때 fetchData()를 호출해야 비로소 fetch가 동작합니다.
- 즉, **버튼 클릭 등에서 fetchData()를 호출해 데이터가 갱신**되도록 만드세요.
- 예시 사용법:

  ```tsx
  const { data, loading, error, fetchData } =
    useManualFetch<User>("https://api...");
  <button onClick={fetchData}>데이터 가져오기</button>;
  ```
