import React, { useState } from "react";

export const RadioExample = () => {
  // 選択された値を保持するステート
  const [selectValue, setSelectedValue] = useState<string>("FFT");

  // 値の変更を処理する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="sound"
          value="FFT"
          checked={selectValue === "FFT"}
          onChange={handleChange}
        />
        FFT
      </label>
      <label>
        <input
          type="radio"
          name="sound"
          value="Wave"
          checked={selectValue === "Wave"}
          onChange={handleChange}
        />
        Wave
      </label>
      <label>
        <input
          type="radio"
          name="sound"
          value="Spectrum"
          checked={selectValue === "Spectrum"}
          onChange={handleChange}
        />
        Wave
      </label>
      <p>選択された形式: {selectValue}</p>
    </div>
  );
};