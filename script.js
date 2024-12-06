const optionMenu = document.querySelector(".Select-menu"),
    SelectBtn = optionMenu.querySelector(".Select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    S_text = optionMenu.querySelector(".S-text");

    S_text.addEventListener("click",() => optionMenu.classList.toggle("active"));


options.forEach(option=> {
    option.addEventListener("click",() => {
        let selectedoption= option.querySelector(".option-text") .innerText;
        S_text.innerText=selectedoption;
        optionMenu.classList.remove("active");

    })
});
