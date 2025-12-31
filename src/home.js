export const home = function(content) {
    const headline = document.createElement("h1");
    const headlineDesc = document.createElement("p");

    headline.textContent = "Dilly's";
    headlineDesc.textContent = "Your one-stop shop for all things dill.";
    content.appendChild(headline);
    content.appendChild(headlineDesc);
}