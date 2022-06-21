import "../Styling-Sheets/Categories.css";
import categories from "../Assets/categories.json";
import { useHistory } from "react-router-dom";

function Categories(props) {
  const history = useHistory();

  function getRandomNumber(maxLimit) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
  }

  function handleCategoryChoose(categoryId) {
    let randomNumber = getRandomNumber(
      categories[categoryId].NamesArray.length
    );
    let outsider = categories[categoryId].NamesArray[randomNumber];
    props.handleStateFunction(categories[categoryId].categoryName, outsider);

    history.push("players");
  }

  return (
    <>
      <section className="categoriesContainer">
        {categories.map((category, index) => {
          return (
            <figure
              key={index}
              className="categoryBox"
              onClick={() => handleCategoryChoose(index)}
            >
              <img src={category.ImageUrl} alt={category.categoryName} />
            </figure>
          );
        })}
      </section>
    </>
  );
}

export default Categories;
