import React, { useState } from "react";
import "../styles/OptionsSelector.css"; // CSS 파일 추가

const optionsPrices = {
  option1: 34000,
  option2: 49000,
};

const OptionsSelector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addOption = (event) => {
    const value = event.target.value;
    if (value) {
      const text = event.target.options[event.target.selectedIndex].text;
      const price = optionsPrices[value];
      setSelectedOptions((prev) => [
        ...prev,
        { value, text, price, quantity: 1 },
      ]);
      event.target.value = ""; // Reset dropdown
    }
  };

  const updateOptionQuantity = (index, change) => {
    setSelectedOptions((prev) =>
      prev.map((option, i) =>
        i === index
          ? { ...option, quantity: Math.max(option.quantity + change, 1) }
          : option
      )
    );
  };

  const removeOption = (index) => {
    setSelectedOptions((prev) => prev.filter((_, i) => i !== index));
  };

  const totalAmount = selectedOptions.reduce(
    (sum, option) => sum + option.price * option.quantity,
    0
  );

  return (
    <div className="option-selector">
      <select id="option" onChange={addOption}>
        <option value="">옵션 선택</option>
        <option value="option1">한라봉&감귤 주스 40포</option>
        <option value="option2">한라봉&감귤 주스 60포</option>
      </select>
      {selectedOptions.length > 0 && (
        <div className="selected-options">
          {selectedOptions.map((option, index) => (
            <div key={index} className="selected-option">
              <span>{option.text}</span>
              <div className="quantity-controls">
                <button onClick={() => updateOptionQuantity(index, -1)}>-</button>
                <input type="text" readOnly value={option.quantity} />
                <button onClick={() => updateOptionQuantity(index, 1)}>+</button>
                <button onClick={() => removeOption(index)}>x</button>
              </div>
            </div>
          ))}
          <div className="total-price">
            총 상품 금액: {totalAmount.toLocaleString()}원
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionsSelector;
