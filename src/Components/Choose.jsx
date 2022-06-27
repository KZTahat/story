import categories from "../Assets/categories.json";
import { useState, useEffect } from "react";

function Choose(props) {
  let [options, setOptions] = useState([]);

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  function handleChoose(e) {
    console.log(e);
  }

  useEffect(() => {
    categories.forEach((category) => {
      if (category.categoryName == props.categoryName) {
        let newOptions = getRandom(category.NamesArray, 6);
        console.log(newOptions);

        setOptions([...newOptions]);
      }
    });
    console.log("options", options);

    if (!options.includes(props.selectedName)) {
      setOptions([...options, props.selectedName]);
    }
  }, []);

  return (
    <>
      <section>
        <h3>{props.outsider[0]}</h3>
        {options.map((option, index) => {
          return (
            <button key={index} className="optionButton">
              {option}
            </button>
          );
        })}
      </section>
    </>
  );
}

export default Choose;
