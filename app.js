const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const inputMeals = document.getElementById('inputMeals').value;
    searchMeals(inputMeals);
})


//search meals
const searchMeals = mealName => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeals.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => foodNotFound(error))
}

// Food not found
const foodNotFound = () => {
    document.getElementById('foodNotFound').innerText = 'Food name found, try another food name!';
}

// display meals on click
const displayMeals = meals => {
    const mealsDiv = document.getElementById('mealsDiv');
    meals.forEach(meal => {
        const singleMeal = document.createElement('div');
        const mealInfo = `
            <div onclick="mealInfo('${meal.strMeal}')" >
            <img src="${meal.strMealThumb}" class="item-img" >
            <h5 class="item-text">${meal.strMeal}</h5>
            </div>
        `
        singleMeal.innerHTML = mealInfo;
        mealsDiv.appendChild(singleMeal);
    });
}

// meal information..
const mealInfo = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredientsInfo(data.meals))
}

// render ingredients info
const renderIngredientsInfo = info => {
    info.forEach(ingredient => {
        console.log(ingredient);
        const ingredientsInfo = document.getElementById('ingredientInfo');
        const ing = [
            ingredient.strIngredient1,
            ingredient.strIngredient2,
            ingredient.strIngredient3,
            ingredient.strIngredient4,
            ingredient.strIngredient5,
            ingredient.strIngredient6,
            ingredient.strIngredient7,
            ingredient.strIngredient8,
            ingredient.strIngredient9,
            ingredient.strIngredient10,
            ingredient.strIngredient11,
            ingredient.strIngredient12,
            ingredient.strIngredient13,
            ingredient.strIngredient14,
            ingredient.strIngredient15,
            ingredient.strIngredient16,
            ingredient.strIngredient17,
            ingredient.strIngredient18,
            ingredient.strIngredient19,
            ingredient.strIngredient20
        ]

        ing.forEach(element => {
            if (element === null) {
                console.log('null')
            }
            else {
                console.log(element)
                ingredientsInfo.innerHTML = `
            <img src="${ingredient.strMealThumb}">
            <h1>${ingredient.strMeal}</h1>
            <h3>Ingredient</h3>
            <p>${element}</p>
        `
            }
        });
        
    });
}