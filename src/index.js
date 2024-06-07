import "./styles.css"
import GithubMark from "./res/github-mark.png";
import OpenInNew from "./res/open-in-new.png";

import WeatherAppPic from "./res/weather-app-pic.png";
import RestaurantPagePic from "./res/restaurant-page-pic.png";
import AdminDashboardPic from "./res/admin-dashboard2.png";
import BattleshipPic from "./res/battleship-pic.png";

function createLinkedImage(src, href="#") {
    const a = document.createElement("a");
    a.href = href;

    if (href !== "#") {
        a.referrerPolicy = "no-referrer";
        a.target = "_blank";
    }

    const img = document.createElement("img");
    img.src = src;

    a.appendChild(img);

    return a;
}

function createProjectCard(projectName, description, githubLink="#", liveLink="#", projectPic=null) {
    const section = document.createElement("section");
    section.setAttribute("class", "project-card");

    {
        let img = null;
        if (projectPic === null) {
            img = document.createElement("div");
            img.setAttribute("class", "img-placeholder");
        } else {
            img = document.createElement("img");
            img.setAttribute("class", "proj-img");
            img.src = projectPic;
        }
        //divImg.style.backgroundColor = projectImg;
        
        const divDiscussion = document.createElement("div");
        divDiscussion.setAttribute("class", "discussion");

        {
            const divHeader = document.createElement("div");
            divHeader.setAttribute("class", "header");

            {
                const h3 = document.createElement("h3");
                h3.textContent = projectName;
                const ul = document.createElement("ul");

                {
                    const li0 = document.createElement("li");
                    li0.appendChild(createLinkedImage(GithubMark, githubLink));

                    const li1 = document.createElement("li");
                    li1.appendChild(createLinkedImage(OpenInNew, liveLink));

                    ul.append(li0, li1);
                }

                divHeader.append(h3, ul);
            }

            const p = document.createElement("p");
            p.textContent = description;

            divDiscussion.append(divHeader, p);
        }

        section.append(img, divDiscussion);
    }

    return section;
}

const divProjectContainer = document.querySelector(".project-container");
divProjectContainer.append(
    createProjectCard("Weather App", "Short description of the project. Just a couple sentences will do.", "https://github.com/cjxo/top-weather-app", "https://cjxo.github.io/top-weather-app/", WeatherAppPic),
    createProjectCard("Restaurant Page", "A restaurant that showcases unforgettable dining experience with ducks.", "https://github.com/cjxo/Restaurant-Page", "https://cjxo.github.io/Restaurant-Page/", RestaurantPagePic),
    createProjectCard("Admin Dashboard", "Short description of the project. Just a couple sentences will do.", "https://github.com/cjxo/admin-dashboard", "https://cjxo.github.io/admin-dashboard/", AdminDashboardPic),
    createProjectCard("Battleship Game", "Short description of the project. Just a couple sentences will do.", "https://github.com/cjxo/top-battle-ship", "https://cjxo.github.io/top-battle-ship/", BattleshipPic),
)