export const menu = function(content) {
    const headline = document.createElement("h1");
    const headlineDesc = document.createElement("p");

    headline.textContent = "Test";
    headlineDesc.textContent = "Tickles";
    content.appendChild(headline);
    content.appendChild(headlineDesc);
}