import { useState } from "react";

function Exercise3() {
  const [input, setInput] = useState("");

  const countCharacters = (text) => {
    const characters = text.split("");
    const vowels = "aeiouAEIOU";
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let vowelCount = 0;
    let consonantCount = 0;
    let specialCharCount = 0;

    for (const char of characters) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (consonants.includes(char)) {
        consonantCount++;
      } else if (!/\s/.test(char)) {
        specialCharCount++;
      }
    }

    const wordCount = text.split(/\s+/).length;

    return {
      totalChars: characters.length,
      wordCount,
      vowelCount,
      consonantCount,
      specialCharCount,
    };
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const characterData = countCharacters(input);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter your text here"
      />
      <br />
      <p>Total Characters: {characterData.totalChars}</p>
      <p>Words: {characterData.wordCount}</p>
      <p>Vowels: {characterData.vowelCount}</p>
      <p>Consonants: {characterData.consonantCount}</p>
      <p>Special Characters: {characterData.specialCharCount}</p>
    </div>
  );
}

export default Exercise3;
