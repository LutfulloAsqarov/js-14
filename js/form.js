const inputBox = document.querySelector(".form__input");
const inputName = document.querySelector(".input__name");
const inputUserName = document.querySelector(".input__user-name");
const inputEmail = document.querySelector(".input__email");
const inputNumber = document.querySelector(".input__number");
const inputPassword = document.querySelector(".input__password");
const inputPasswordConf = document.querySelector(".input__password-conf");
const table = document.querySelector(".table");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    while (inputPassword.value !== inputPasswordConf.value) {
        inputPasswordConf.value = "";
        alert("Kodni togri takrorlang").preventDefault();
    }

    const item = document.createElement("tr");
    item.className = "item";

    item.innerHTML = `
        <tr>
            <td>${inputName.value}</td>
            <td>${inputUserName.value}</td>
            <td>${inputEmail.velue}</td>
            <td>${inputNumber.value}</td>
            <td>${inputPassword.value}</td>
        </tr>
    `;
    table.appendChild(item);

    inputName.value = "";
    inputUserName.value = "";
    inputEmail.value = "";
    inputNumber.value = "";
    inputPassword.value = "";
    inputPassword.value = "";
    inputPasswordConf.value = "";
});
