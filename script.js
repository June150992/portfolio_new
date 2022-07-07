destAbout = document.querySelector("#about");
destExperience = document.querySelector(".third");
destProjects = document.querySelector(".projects");
destSkills = document.querySelector(".skills");
destFooter = document.querySelector("#footer");
destKoncept = document.querySelector("#koncept");

async function fetchAbout() {
    let pagesUrl = "https://portfolio-wp-api.creativegamerstuff.dk/wp-json/wp/v2/pages?include=38";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertAboutContent(); 
}

function insertAboutContent() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="col_1" id="${section.slug}">
                        <h1>${section.title.rendered}</h1>
                    </div>
                    <div class="col_2">
                        <p>${section.content.rendered}</p>
                    </div>  
                </div>
            </section>
`;
        destAbout.insertAdjacentHTML("beforeend", template);
    });
}

fetchAbout();
console.log('Api fetched successfully');

async function fetchExperience() {
    let pagesUrl = "https://portfolio-wp-api.creativegamerstuff.dk/wp-json/wp/v2/posts?include=50";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertExperience(); 
}

function insertExperience() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="col_1" id="${section.slug}">
                        <h1 style="line-height: 2rem;">${section.title.rendered}</h1>
                    </div>
                    <div class="col_2">
                        <p>${section.content.rendered}</p>
                    <div class="cv">
                      <a href="assets/CV.pdf" download="CV - Julie Levin Petersen" id="cv_btn" target="_blank">Download CV</a>
                    </div>
                </div>
            </div>
            </section>
`;
        destExperience.insertAdjacentHTML("beforeend", template);
    });
}

fetchExperience();
console.log('Api fetched successfully');

async function fetchProjects() {
    let pagesUrl = "https://portfolio-wp-api.creativegamerstuff.dk/wp-json/wp/v2/posts?include=94";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertProjects(); 
}

function insertProjects() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="col_1" id="${section.slug}">
                        <h1 style="line-height: 2rem;">${section.title.rendered}</h1>
                    </div>
                    <div class="col_2">
                        <p>${section.content.rendered}</p>
                        <div class="project_btns">
                        <button><a href="https://stellaatlantico.com/">Stella Atlántico</a></button>
                        <button><a href="https://bolighimlen.dk/">Bolighimlen</a></button>
                        <button><a href="http://creativegamerstuff.dk/kea/sem3/coloringbook/index.html">Disney Malebog</a></button>
                        <button><a href="http://creativegamerstuff.dk/kea/sem3/world-games-1.1/index.html">World Games Casino</a></button>
                        <button><a href="http://creativegamerstuff.dk/kea/sem2/kalklandet_main/index.html">Kalklandet</a></button>
                        <button><a href="http://creativegamerstuff.dk/kea/sem3/14c.01.05_gta_intro/index.html">CSS Animation Demo</a></button>
                        <button><a href="http://creativegamerstuff.dk/kea/03%20animation/spil/index.html">Bloodmania Animation Demo</a></button>
                    </div>
                </div>
            </div>
            </section>
`;
        destProjects.insertAdjacentHTML("beforeend", template);
    });
}

fetchProjects();
console.log('Api fetched successfully');

async function fetchSkills() {
    let pagesUrl = "https://portfolio-wp-api.creativegamerstuff.dk/wp-json/wp/v2/posts?include=103";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertSkills(); 
}

function insertSkills() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="col_1" id="${section.slug}">
                        <h1 style="line-height: 2rem;">${section.title.rendered}</h1>
                    </div>
                    <div class="col_2">
                        <p>${section.content.rendered}</p>
                </div>
            </div>
            </section>
`;
        destSkills.insertAdjacentHTML("beforeend", template);
    });
}

fetchSkills();
console.log('Api fetched successfully');

async function fetchFooter() {
    let pagesUrl = "https://portfolio-wp-api.creativegamerstuff.dk/wp-json/wp/v2/posts?include=115";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertFooter(); 
}

function insertFooter() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="footer-content">
                    <h1 style="line-height: 2rem;">${section.title.rendered}</h1>
                    <p>${section.content.rendered}</p> 
                    </div>
            </section>
`;
        destFooter.insertAdjacentHTML("beforeend", template);
    });
}

fetchFooter();
console.log('Api fetched successfully');

async function fetchKoncept() {
    let pagesUrl = "https://portfolio-wp-api.creativegamerstuff.dk/wp-json/wp/v2/posts?include=235";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertKoncept(); 
}

function insertKoncept() {
    section.forEach(section => {
        let template =
            `
            <section>
            <div class="koncept_2" data-aos="fade-up">
                <h1 style="line-height: 2rem;">${section.title.rendered}</h1><br>
                <p>${section.content.rendered}</p> 
                <div class="prototype">
                <button><a href="https://xd.adobe.com/view/9b8f928a-2daa-40c0-8cc1-9da19290123c-cedc/?fullscreen" target="_blank">Se Prototype</a></button>
                </div>
                </div>
        </section>
`;
        destKoncept.insertAdjacentHTML("beforeend", template);
    });
}

fetchKoncept();
console.log('Api fetched successfully');