function placeholderSuccess(response){
    let data = response.data;
    for (let post of data){
        document.body.insertAdjacentHTML(`beforeend`,`<h3>${post.id}. ${post.title}</h3>`)
        document.body.insertAdjacentHTML(`beforeend`, `<p>${post.body}</p>`)
    }
    
}
function placeholderFailure(error){
    document.body.insertAdjacentHTML(`afterbegin`,`<h1>There was an error!</h1>`)
    console.log(error);
}

function mealSuccess(response){
    let meals = response.data.meals;
    let resultElement = document.getElementById(`results`);
    resultElement.innerHTML = "";
    for (let meal of meals){
        resultElement.insertAdjacentHTML(`beforeend`,`<h2>${meal.strMeal}</h2>`);
        resultElement.insertAdjacentHTML(`beforeend`,`<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`)
    }
}

function mealFailure(error){
    console.log("Meal failed");
    console.log(error);
}


// axios.request({
//     url : "https://jsonplaceholder.typicode.com/posts"
// }).then(placeholderSuccess).catch(placeholderFailure);

function search(){
    axios.request({
        url : "https://www.themealdb.com/api/json/v1/1/search.php",
        params : {
            s : document.getElementById(`searchBox`).value
        }
    }).then(mealSuccess).catch(mealFailure);
}

document.getElementById(`searchSubmit`).addEventListener(`click`,search);
