import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

(function() {
    const content = document.querySelector("#content");

    function createContent(location) {
        function clearContent() {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
        }

        clearContent();
        switch(location) {
            case "Home":
                home(content);
                break;
            case "About":
                about(content);
                break;
            case "Menu":
                menu(content);
                break;
        }
    }

    
    createContent('Home');
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            createContent(button.textContent);
        })
    });
})();
