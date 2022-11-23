function clearCookies(){
    Cookies.remove(`imageUrl`);
    location.href = "/";
}

let src = Cookies.get(`imageUrl`);

document.body.insertAdjacentHTML(`afterbegin`, `<img src="${src}" alt="Your pokemon">`);
document.getElementById(`backButton`).addEventListener(`click`, clearCookies);