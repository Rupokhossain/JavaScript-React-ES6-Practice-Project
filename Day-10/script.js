const fetchBtn = document.getElementById('fetch-btn');
const loader = document.getElementById('loader');
const errorBox = document.getElementById('error-box');
const dataContainer = document.getElementById('data-container');

// main function 
async function getUsers() {
    loader.style.display = "block";
    errorBox.style.display = "none";
    dataContainer.innerHTML = "";

    try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if(!response) {
                    throw new Error("Somthing Error! (Status: " + response.status + ")");
                }

                const users = await response.json();

                // data screen a dekhano
                users.forEach(user => {
                    const p = document.createElement("p");
                    p.textContent = `Name: ${user.name} - email: ${user.email}`;
                    dataContainer.appendChild(p);
                });
    } catch(error) {
        console.log("Caught error", error.messagre);
        errorBox.style.display = "block";
        errorBox.innerText = "Sorry: " + error.messagre;
    } finally {
        loader.style.display = "none";
    }
}
fetchBtn.addEventListener("click", getUsers);