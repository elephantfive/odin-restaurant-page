export const about = function(content) {
    const headline = document.createElement("h1");
    const headlineDesc = document.createElement("p");

    headline.textContent = "Yeep";
    headlineDesc.textContent = "It's the about section.";
    content.appendChild(headline);
    content.appendChild(headlineDesc);
}