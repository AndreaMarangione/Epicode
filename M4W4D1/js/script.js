const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAyYzkxOWU2MDQ3YjAwMTlmYTVmZjAiLCJpYXQiOjE3MTE0NTg1ODUsImV4cCI6MTcxMjY2ODE4NX0.gctNSZqs0TCS4955P1QKk0p8P1St-CluXZFXau7D-9Y";
const defaultHeaders = {
    "Authorization": KEY,
    "Content-type": "application/json",
}

const hideSpinner = () => {
    const spinner = document.querySelector("#spinner");
    spinner.classList.add("d-none");
}

const showSpinner = () => {
    const spinner = document.querySelector("#spinner");
    spinner.classList.remove("d-none");
}

const abstractFetch = async (url, options = {}, manageSpinner = true) => {
    const requestOptions = {
        method: options.method || "GET",
        headers: { ...defaultHeaders, ...options.headers },
        ...options
    }
    if (manageSpinner) {
        showSpinner();
    }
    if (requestOptions.body) {
        requestOptions.body = JSON.stringify(options.body);
    }
    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`${options.method} Response from fetch not ok`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (manageSpinner) {
            hideSpinner();
        }
    }
}
abstractFetch(ENDPOINT, {}).then(res => console.log(res));

// const showProducts = (product) => {
//     const image = document.createElement("img");
//     const 
// }

