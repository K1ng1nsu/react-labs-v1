# labs-02-useEffect.md

## 문제 1. 컴포넌트 마운트 시 콘솔에 한 번만 메시지 출력

- `MountLog.tsx` 파일에 함수형 컴포넌트 `MountLog`를 만드세요.
- 이 컴포넌트는 **마운트(처음 화면에 나타날 때) 한 번만**
  콘솔에 `"Mount!"`라는 메시지를 출력해야 합니다.

## 문제 2. state 값이 바뀔 때마다 효과 실행하기

- `CounterEffect.tsx` 파일에 함수형 컴포넌트 `CounterEffect`를 만드세요.
- 버튼을 누를 때마다 숫자가 1씩 증가하도록 하세요.
- **count 값이 바뀔 때마다**
  콘솔에 `"count is {count}"`가 출력되게 하세요.

## 문제 3. API 비동기 데이터 불러오기 (로딩 처리 포함)

- `PostLoader.tsx` 파일에 함수형 컴포넌트 `PostLoader`를 만드세요.
- 마운트 시 **[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)** API에서
  게시글 정보를 비동기로 받아와,
  제목과 본문을 화면에 출력하세요.
- 데이터를 가져오는 동안에는 `"로딩중..."`이라는 텍스트가 보여야 합니다.
- \*\*에러가 발생하면 "에러!"\*\*를 보여주세요.

## 문제 4. 타이머(setInterval)와 클린업 처리

- `Timer.tsx` 파일에 함수형 컴포넌트 `Timer`를 만드세요.
- 이 컴포넌트는 **1초마다** 숫자가 1씩 증가해서 화면에 표시됩니다.
- 컴포넌트가 **언마운트될 때**
  setInterval 타이머가 반드시 해제(clean-up)되어야 합니다.
- 타이머가 해제되는 시점에 콘솔로 "Clean up!"을 출력하세요.
