
let rockets = null;
let showingText = false;


let boolToText = function (input) {
    if (input) {
        return "Yes"
    } else {
        return "No"
    }
};

let createCards = function () {
    for (let i = 0; i < rockets.length - 1; i++) {
        let currentRocket = null;
        let GTO = 0;

        if ( i === 0 ) {
            currentRocket = "falcon-1";
        } else if ( i === 1 ) {
            currentRocket = "falcon-9";
        } else {
            currentRocket = "falcon-heavy";
        }

        if ( rockets[i].payload_weights[1] !== undefined ) {
            GTO = rockets[i].payload_weights[1].kg;
        }

        // Main info
        document.querySelector(`#${currentRocket}`).innerHTML += `
            <div id="${currentRocket}-main" class="rocket-card main-card">
                <h3>${rockets[i].rocket_name}</h3>
                <div class="rocket-info">
                    <p>Cost Per Launch</p>
                    <p>$${rockets[i].cost_per_launch}</p>
                </div>
                <div class="rocket-info">
                    <p>Payload LEO</p>
                    <p>${rockets[i].payload_weights[0].kg}kg</p>
                </div>
                <div class="rocket-info">
                    <p>Payload GTO</p>
                    <p>${GTO}kg</p>
                </div>                
                <div class="rocket-info">
                    <p>Stages</p>
                    <p>${rockets[i].stages}</p>
                </div>                                    
                <div class="rocket-info">
                    <p>Diameter</p>
                    <p>${rockets[i].diameter.meters}m</p>
                </div>                            
                <div class="rocket-info">
                    <p>Height</p>
                    <p>${rockets[i].height.meters}m</p>
                </div>
                <div class="rocket-info">
                    <p>Success Rate</p>
                    <p>${rockets[i].success_rate_pct}%</p>
                </div>
                <div class="rocket-info">
                    <p>Operational</p>
                    <p>${boolToText(rockets[i].active)}</p>
                </div>
            </div>
        `;

        // Rocket engines
        document.querySelector(`#${currentRocket}`).innerHTML += `
            <div id="${currentRocket}-engines" class="rocket-card">
                <h3>${rockets[i].rocket_name} Engines</h3>
                <div class="rocket-info">
                    <p>Type</p>
                    <p>${rockets[i].engines.type}</p>
                </div>
                <div class="rocket-info">
                    <p>Version</p>
                    <p>${rockets[i].engines.version}</p>
                </div>
                <div class="rocket-info">
                    <p>Number</p>
                    <p>${rockets[i].engines.number}</p>
                </div>
                <div class="rocket-info">
                    <p>Propellant</p>
                    <p>${rockets[i].engines.propellant_2}</p>
                </div>
                <div class="rocket-info">
                    <p>Thrust - Sea level</p>
                    <p>${rockets[i].engines.thrust_sea_level.kN}kN</p>
                </div>
                <div class="rocket-info">
                    <p>Thrust - Vacuum</p>
                    <p>${rockets[i].engines.thrust_vacuum.kN}kN</p>
                </div>
                <div class="rocket-info">
                    <p>Layout</p>
                    <p>${rockets[i].engines.layout}</p>
                </div>
                <div class="rocket-info">
                    <p>Max engine loss</p>
                    <p>${rockets[i].engines.engine_loss_max}</p>
                </div>
            </div>
        `;

        // Lower stage
        document.querySelector(`#${currentRocket}`).innerHTML += `
            <div id="${currentRocket}-lower-stage" class="rocket-card">
                <h3>${rockets[i].rocket_name} First Stage</h3>
                <div class="rocket-info">
                    <p>Engines</p>
                    <p>${rockets[i].first_stage.engines}</p>
                </div>
                <div class="rocket-info">
                    <p>Burn time</p>
                    <p>${rockets[i].first_stage.burn_time_sec}sec</p>
                </div>
                <div class="rocket-info">
                    <p>Fuel amount</p>
                    <p>${rockets[i].first_stage.fuel_amount_tons}tons</p>
                </div>
                <div class="rocket-info">
                    <p>Reusable</p>
                    <p>${boolToText(rockets[i].first_stage.reusable)}</p>
                </div>
                
                <div class="rocket-info">
                    <p>Thrust - Sea level</p>
                    <p>${rockets[i].first_stage.thrust_sea_level.kN}kN</p>
                </div>
                <div class="rocket-info">
                    <p>Thrust - Vacuum</p>
                    <p>${rockets[i].first_stage.thrust_vacuum.kN}kN</p>
                </div>
            </div>
        `;

        // Upper stage
        document.querySelector(`#${currentRocket}`).innerHTML += `
            <div id="${currentRocket}-upper-stage" class="rocket-card">
                <h3>${rockets[i].rocket_name} Second Stage</h3>
                <div class="rocket-info">
                    <p>Engines</p>
                    <p>${rockets[i].second_stage.engines}</p>
                </div>
                <div class="rocket-info">
                    <p>Burn time</p>
                    <p>${rockets[i].second_stage.burn_time_sec}sec</p>
                </div>
                <div class="rocket-info">
                    <p>Fuel amount</p>
                    <p>${rockets[i].second_stage.fuel_amount_tons}tons</p>
                </div>                
                <div class="rocket-info">
                    <p>Reusable</p>
                    <p>${boolToText(rockets[i].second_stage.reusable)}</p>
                </div>
                
                <div class="rocket-info">
                    <p>Thrust</p>
                    <p>${rockets[i].second_stage.thrust.kN}kN</p>
                </div>
            </div>
        `;

        // Rocket fairing
        document.querySelector(`#${currentRocket}`).innerHTML += `
            <div id="${currentRocket}-fairing" class="rocket-card">
                <h3>${rockets[i].rocket_name} Composite Fairing</h3>
                <div class="rocket-info">
                    <p>Diameter</p>
                    <p>${rockets[i].second_stage.payloads.composite_fairing.diameter.meters}m</p>
                </div>
                <div class="rocket-info">
                    <p>Height</p>
                    <p>${rockets[i].second_stage.payloads.composite_fairing.height.meters}m</p>
                </div>
            </div>
        `;

        // Landing legs
        document.querySelector(`#${currentRocket}`).innerHTML += `
            <div id="${currentRocket}-landing-legs" class="rocket-card">
                <h3>${rockets[i].rocket_name} Landing Legs</h3>
                <div class="rocket-info">
                    <p>Number</p>
                    <p>${rockets[i].landing_legs.number}</p>
                </div>
                <div class="rocket-info">
                    <p>Material</p>
                    <p>${rockets[i].landing_legs.material}</p>
                </div>
            </div>
        `;

    }

    // Dragon capsule

    fetch('https://api.spacexdata.com/v3/dragons/dragon1')
        .then(function(response) {
            return response.json();
        })
        .then(function (json) {
            let capsule = json;
            document.querySelector("#falcon-9").innerHTML += `
                <div id="falcon-9-capsule" class="rocket-card">
                    <h3>${capsule.name}</h3>
                    <div class="rocket-info">
                        <p>Crew Capacity</p>
                        <p>${capsule.crew_capacity}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Dry Mass</p>
                        <p>${capsule.dry_mass_kg}kg</p>
                    </div>
                    <div class="rocket-info">
                        <p>First Flight</p>
                        <p>${capsule.first_flight}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Heat Shield Material</p>
                        <p>${capsule.heat_shield.material}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Heat Shield Size</p>
                        <p>${capsule.heat_shield.size_meters}m</p>
                    </div>
                    <div class="rocket-info">
                        <p>Heat Shield Maximum temperature</p>
                        <p>${capsule.heat_shield.temp_degrees}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Thruster</p>
                        <p>${capsule.thrusters[0].type}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Thruster amount</p>
                        <p>${capsule.thrusters[0].amount}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Payload Mass</p>
                        <p>${capsule.launch_payload_mass.kg}kg</p>
                    </div>
                    <div class="rocket-info">
                        <p>Payload Volume</p>
                        <p>${capsule.launch_payload_vol.cubic_meters}m2</p>
                    </div>
                    <div class="rocket-info">
                        <p>Return Payload Mass</p>
                        <p>${capsule.return_payload_mass.kg}kg</p>
                    </div>
                    <div class="rocket-info">
                        <p>Return Payload Volume</p>
                        <p>${capsule.return_payload_vol.cubic_meters}m2</p>
                    </div>                
                    <div class="rocket-info">
                        <p>Diameter</p>
                        <p>${capsule.diameter.meters}m</p>
                    </div>
                    <div class="rocket-info">
                        <p>Height</p>
                        <p>${capsule.height_w_trunk.meters}m</p>
                    </div>
                </div>
            `;
            bindEvents();
        })
        .catch(function (errors) {
            console.log(errors);
        });

};

let toggleVisibility = function (element, event) {
    if (element.classList.contains('shown') && event.type === 'mouseleave') {
        element.style.opacity = '0';
        setTimeout(function () {
            element.style.top = '0';
            element.style.left = '0';
            element.classList.remove('shown');
        }, 100);
    } else {
        element.classList.add('shown');
        element.style.top = event.clientY + 'px';
        element.style.left = (event.clientX + 50) + 'px';
        element.style.opacity = '1';
    }
};

let hoverCard = function (e) {
    let event = e;
    let id = this.getAttribute("id");

    switch (true) {
        case (id.includes("falcon-9")):
            switch (true) {
                case (id.includes("third")):
                    toggleVisibility(document.querySelector('#falcon-9-fairing'), event);
                    break;
                case (id.includes("upper")):
                    toggleVisibility(document.querySelector('#falcon-9-upper-stage'), event);
                    break;
                case (id.includes("lower")):
                    toggleVisibility(document.querySelector('#falcon-9-lower-stage'), event);
                    break;
                case (id.includes("landing")):
                    toggleVisibility(document.querySelector('#falcon-9-landing-legs'), event);
                    break;
                case (id.includes("engine")):
                    toggleVisibility(document.querySelector('#falcon-9-engines'), event);
                    break;
                case (id.includes("capsule")):
                    toggleVisibility(document.querySelector('#falcon-9-capsule'), event);
                    break;
                default:
                    console.log(1);
            }
            break;
        case (id.includes("falcon-heavy")):
            switch (true) {
                case (id.includes("third")):
                    toggleVisibility(document.querySelector('#falcon-heavy-fairing'), event);
                    break;
                case (id.includes("upper")):
                    toggleVisibility(document.querySelector('#falcon-heavy-upper-stage'), event);
                    break;
                case (id.includes("lower")):
                    toggleVisibility(document.querySelector('#falcon-heavy-lower-stage'), event);
                    break;
                case (id.includes("landing")):
                    toggleVisibility(document.querySelector('#falcon-heavy-landing-legs'), event);
                    break;
                case (id.includes("engine")):
                    toggleVisibility(document.querySelector('#falcon-heavy-engines'), event);
                    break;
                default:
                    console.log(1);
            }
            break;
        default:
            switch (true) {
                case (id.includes("upper")):
                    toggleVisibility(document.querySelector('#falcon-1-upper-stage'), event);
                    break;
                case (id.includes("lower")):
                    toggleVisibility(document.querySelector('#falcon-1-lower-stage'), event);
                    break;
                case (id.includes("engine")):
                    toggleVisibility(document.querySelector('#falcon-1-engines'), event);
                    break;
                default:
                    console.log(1);
            }
    }

};

let bindEvents = function () {
    let rocket_parts = document.querySelectorAll('.rocket-part');
    for (let i = 0; i < rocket_parts.length; i++) {
        rocket_parts[i].addEventListener('mouseenter', hoverCard, false);
        rocket_parts[i].addEventListener('mouseleave', hoverCard, false);
    }
};

fetch('https://api.spacexdata.com/v3/rockets')
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        rockets = json;
        createCards();
    })
    .catch(function (errors) {
        console.log(errors);
    });

 //setTimeout(bindEvents, 150); // for some reason it wont bind the events if this is done without a 1ms delay
