import { useState } from "react";

export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const reset = () => setValue(initialValue);

  return { value, onChange, reset };
}
