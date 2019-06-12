
let cores = null;

let createModal = function () {
    // Main info
    for (let i = 0; i < cores.length; i++) {
        let missions = ``;
        if (cores[i].missions !== undefined || cores[i].missions.length !== 0) {
            for (let j = 0; j < cores[i].missions.length; j++) {
                missions += `                    
                    <div class="rocket-info">
                        <p>Mission ${j+1}</p>
                        <p>${cores[i].missions[j].name}</p>
                    </div>
                `;
            }
        }

        document.querySelector("#cores").innerHTML += `
            <div id="${cores[i].core_serial}-modal" class="rocket-card" style="opacity: 0">
                <h3>${cores[i].core_serial}</h3>            
                <div class="rocket-info">
                    <p>Block Type</p>
                    <p>${cores[i].block}</p>
                </div>
                <div class="rocket-info">
                    <p>Attempted ASDS Landings</p>
                    <p>${cores[i].asds_landings}</p>
                </div>
                <div class="rocket-info">
                    <p>Attempted RTLS Landings</p>
                    <p>${cores[i].rtls_landings}</p>
                </div>
                <div class="rocket-info">
                    <p>Water Landings</p>
                    <p>${boolToText(cores[i].water_landing)}</p>
                </div>
                <div class="rocket-info">
                    <p>Current Status</p>
                    <p>${cores[i].status}</p>
                </div>
            </div>
        `;

        document.querySelector(`#${cores[i].core_serial}-modal`).innerHTML += missions;
        document.querySelectorAll(`#core-${i+1} .core-title`)[0].innerHTML = cores[i].core_serial;
    }

    bindEvents();
};

let clickCard = function (event) {
    let targetName = event.target.parentElement.querySelector('.core-title').innerHTML;
    let target = document.querySelector(`#${targetName}-modal`);

    target.style.top = event.clientY + 'px';
    target.style.left = (event.clientX + 50) + 'px';
    target.style.opacity = '1';
};

let clickExit = function (e) {
    let target = null;
    if (e.target.classList.contains('rocket-card')) {
        target = e.target;
    } else {
        let currentTarget = e.target;
        while (!currentTarget.classList.contains('rocket-card')) { // All of this to get around the event bubbling
            currentTarget = currentTarget.parentElement;
        }
        target = currentTarget;
    }
    target.style.opacity = '0';
    setTimeout(function () {
        target.style.top = '0';
        target.style.left = '0';
    }, 100)
};

let bindEvents = function () {
    let coreCards = document.querySelectorAll('.core-card');
    let coreModals = document.querySelectorAll('.rocket-card');

    for (let i = 0; i < coreCards.length; i++) {
        coreCards[i].addEventListener('click', clickCard, false);
    }

    for (let i = 0; i < coreModals.length; i++) {
        coreModals[i].addEventListener('click', clickExit, false);
    }
};

fetch('https://api.spacexdata.com/v3/cores')
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        cores = json.slice(-6);
        createModal();
    })
    .catch(function (errors) {
        console.log(errors);
    });
