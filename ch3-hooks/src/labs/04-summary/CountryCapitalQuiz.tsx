import React, { useEffect, useRef, useState } from 'react';
import { useToggle } from '../../examples/03-custom-hooks/01/useToggle';
type Country = {
  country: string;
  capital: string;
  imgSrc: string;
};

// 개선 방안
// countries[randomIndex] 같은 코드 임시변수에 저장함으로써 명확하게
// useEffect 사용시 의존성 클로저 고려 -> 해결
// 커스텀 훅 사용으로 내부 로직 복잡성 최소화
// 추가 주석으로 코드 흐름 메모
// 커스텀 훅 재사용성 높히는 방안 강구 -> useManualFetch 에서 setData 하는 부분 콜백으로 넘겨주면 일반화가능
// ->

const CountryCapitalQuiz = () => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [reset, resetToggle] = useToggle();
  const [randomIndex, setRandomIndex] = useState(-1);
  const [answer, setAnswer] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log('useEffect 1');

    setLoading(true);
    setError(null);

    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) throw new Error('CAN NOT FETCH DATA');
        return response.json();
      })
      .then((data) => {
        setRandomIndex(Math.floor(Math.random() * data.length));
        setCountries(
          data.map((country) => {
            let capital = 'unknown';
            if (country.capital) capital = country.capital[0];

            return {
              country: country.name.common,
              capital,
              imgSrc: country.flags.png,
            };
          })
        );
      })
      .catch((error: Error) => {
        console.log(error);

        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log('useEffect 2');

    if (randomIndex != -1) {
      setRandomIndex(Math.floor(Math.random() * countries!.length));
    }
  }, [reset, countries]);

  if (loading)
    return (
      <div>
        <h3>CountryCapitalQuiz</h3>
        <p>Loading ...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <h3>CountryCapitalQuiz</h3>
        <p>Error Message : {error}</p>
      </div>
    );

  if (countries?.length > 0) {
    console.log(countries![randomIndex].capital);
  }

  return (
    <div>
      <h3>CountryCapitalQuiz</h3>
      {countries?.length > 0 && (
        <>
          <img
            src={countries![randomIndex].imgSrc}
            alt={`${countries![randomIndex].country} flag`}
          />
          <p>{countries![randomIndex].country}</p>
          <input type="text" ref={inputRef} />{' '}
          <button onClick={() => setAnswer(inputRef.current!.value)}>
            submit
          </button>
        </>
      )}
      {answer.length > 0 && (
        <>
          <p>
            {answer == countries[randomIndex].capital ? '정답' : '오답'}
            입니다.
          </p>
          <p>정답: [{countries[randomIndex].capital}]</p>
          <button
            onClick={() => {
              setAnswer('');
              inputRef.current!.value = '';
              resetToggle();
            }}
          >
            next
          </button>
        </>
      )}
    </div>
  );
};

export default CountryCapitalQuiz;
