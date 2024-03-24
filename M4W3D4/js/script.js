const userTable = document.querySelector("#userTable");
const dropdownSelection = document.querySelector("#dropdownSelection");
const searchInput = document.querySelector("#searchInput");
let dropdownSelected = "";

const hiddenTable = () => {
    const table = document.querySelector(".table-responsive > table");
    const noUserFound = document.querySelector(".table-responsive > p");
    table.classList.add("d-none");
    noUserFound.classList.remove("d-none");
}

const showTable = () => {
    const table = document.querySelector(".table-responsive > table");
    const noUserFound = document.querySelector(".table-responsive > p");
    table.classList.remove("d-none");
    noUserFound.classList.add("d-none");
}

const dropdownManager = () => {
    const dropdownList = document.querySelectorAll("#dropdownList > li");
    dropdownSelection.textContent = "Choose one";
    dropdownList.forEach(item => {
        item.addEventListener("click", () => {
            item.textContent === "All" ?
                dropdownSelection.textContent = "Choose one" :
                dropdownSelection.textContent = item.textContent;
            dropdownSelected = item.textContent;
            searchInputManager();
        })
    })
}
dropdownManager();

const searchInputManager = () => {
    dropdownSelection.textContent !== "Choose one" ?
        searchInput.setAttribute("placeholder", "Search your user") & searchInput.removeAttribute("disabled") :
        searchInput.setAttribute("placeholder", "Choose a category");
}
searchInputManager();

const showUserData = (user) => {
    const tableRow = document.createElement("tr");
    const tableRowHead = document.createElement("th");
    tableRowHead.setAttribute("scope", "row");
    tableRowHead.textContent = user["id"];
    tableRow.append(tableRowHead);
    for (let index in user) {
        if (index === "name" || index === "username" || index === "email") {
            const tableData = document.createElement("td");
            tableData.textContent = user[index];
            tableRow.append(tableData);
        }
    }
    userTable.append(tableRow);
}

const getUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const body = await response.json();
        return body;
    } catch (error) {
        console.log(error);
    }
}

getUserData().then(res => {
    let userFiltered = [];
    res.forEach(user => showUserData(user));
    searchInput.addEventListener("input", () => {
        if (dropdownSelected !== "") {
            showTable();
            userTable.innerHTML = ""
            userFiltered = res.filter(user => user[dropdownSelected.toLowerCase()].toLowerCase().includes(searchInput.value.toLowerCase()));
            userFiltered.forEach(user => showUserData(user));
        }
        if (userFiltered.length === 0) {
            hiddenTable();
        }
    })
})
