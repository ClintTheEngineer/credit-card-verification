import { useState } from 'react';
export const Validator = () => {
    const [cardNumber, setCardNumber] = useState('');
  
  
  const validateCard = (cardArr) => {
  let odd = [];
  let arr3 = [];
  let arr2 = [...cardArr];
  arr2.pop();
  arr2.reverse();
  for (let i = 0; i < arr2.length; i++) {
    if (i % 2 == 0) {
      arr3.push(arr2[i]);
    }
  }

  let doubles = arr3.map(function (e) {
    return e * 2;
  });
  for (let i = 0; i < doubles.length; i++) {
    if (doubles[i] > 9) {
      doubles[i] = doubles[i] - 9;
    }
  }
  for (let i = 0; i < cardArr.length; i++) {
    if (i % 2 !== 0) {
      odd.push(cardArr[i]);
    }
  }
  const array = odd.concat(doubles);
  let sum = 0;
  for (const a of array) {
    sum += a;
  }
  const mod = sum % 10;
  if (mod === 0) {
    alert('Valid!');
  } else {
    alert('Not Valid!');
  }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const cardArr = cardNumber.split('').map(Number);
        validateCard(cardArr);
      };

  return (
    <div>
      <h1>Credit Card Validator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-number">Card Number</label>
        <input
          type="text"
          name="card-number"
          id="inputValue"
          className="card-number"
          maxLength="16"
          minLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <button type="submit">Validate</button>
      </form>
    </div>
  );
}
