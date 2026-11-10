const form = document.getElementById("userForm");
const togglePassword = document.getElementById("togglePassword");
const tableBody = document.getElementById("userTableBody");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     const userId = document.getElementById("userId").value;
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const number = document.getElementById("number").value;
//     const password = document.getElementById("password").value;
//     const address = document.getElementById("address").value;
//     console.log({
//         userId,
//         name,
//         email,
//         password,
//         number,
//         address});


// });

const formSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const userId = form.userId.value;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;

    const tableBody = document.getElementById("userTableBody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${userId}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${number}</td>
        <td>${address}</td>
        <td><button type="button" class="removeBtn">Remove</button></td>
    `;

    tableBody.appendChild(row);

    form.reset();
};

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

tableBody.addEventListener("click", function (e) {
    if (e.target.className === "removeBtn") {
        e.target.parentElement.parentElement.remove();
    }
});