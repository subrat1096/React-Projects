import { useState } from "react";

function TextForm() {
  const [text, setText] = useState("Enter text here...");

  function handleUpperCase() {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }

  function handleLowerCase() {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  }

  function handleCamelCase() {
    let camelCaseText = [];
    camelCaseText = text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
    setText(camelCaseText);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="flex flex-col items-start justify-center max-w-5xl mx-auto">
      <label
        htmlFor="Textarea"
        className="block text-sm text-gray-500 dark:text-gray-600"
      >
        Enter Text To Convert
      </label>

      <textarea
        id="Textarea"
        placeholder={text}
        value={text}
        onChange={handleChange}
        className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      ></textarea>

      <div className="flex w-full mt-4 gap-4">
        <button
          onClick={handleUpperCase}
          className="px-4 py-2 text-sm text-white duration-100 bg-indigo-600 rounded-lg shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2"
        >
          Convert To Uppercase
        </button>
        <button
          onClick={handleLowerCase}
          className="px-4 py-2 text-sm text-white duration-100 bg-indigo-600 rounded-lg shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2"
        >
          Convert To Lowercase
        </button>
        <button
          onClick={handleCamelCase}
          className="px-4 py-2 text-sm text-white duration-100 bg-indigo-600 rounded-lg shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2"
        >
          Convert To CamelCase
        </button>
      </div>
      <div className="flex flex-col mt-5 gap-2">
        <h2 className="font-bold text-3xl">Your Text Summery</h2>
        <p>
          <b>{text.split(/\s+/).length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(/\s+/).length}</b> mins to read
        </p>
      </div>
      <div className="flex flex-col mt-5">
        <h2 className="font-bold text-3xl">Your Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;
