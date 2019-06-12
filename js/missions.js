let missions = null;

let createMissions = function () {

    let missionId = function (missionId) {
        if (missionId === undefined || missionId.length === 0) {
            return 'No ID';
        } else {
            return missionId[0]
        }
    };

    let missionPatch = function (missionPatch) {
        if (missionPatch === null) {
            return "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png";
        } else {
            return missionPatch
        }
    };

    let missionDetails = function (details) {
        if (details === null) {
            return "No details yet.";
        } else {
            return details
        }
    };

    let missionSucess = function (mission) {
        if (mission.launch_success !== null ) {
            if (mission.launch_success) {
                return "Yes";
            } else {
                return mission.launch_failure_details.reason
            }
        } else {
            return "Not Launched"
        }

    };

    // let missionDetails1 = function () {
    //
    // };

    for (let i = 0; i < missions.length; i++) {
        let mission = missions[i];
        let template = ``;

        template += `
            <div id="mission-${mission.flight_number}" class="container-mission">
                <div class="mission-heading">
                    <img class="patch" src="${missionPatch(mission.links.mission_patch_small)}" alt="mission ${mission.mission_name} patch ">
                    <h3 class="mission-name">${mission.mission_name}</h3>
                </div>                
                <div class="mission-column">
                    <div class="mission-details">                    
                        <div class="mission-title">
                            <div class="container-title">
                                <p>Mission ID</p>
                                <p>${missionId(mission.mission_id)}</p>
                            </div>
                            <div class="container-title">
                                <p>Successful Launch</p>
                                <p>${missionSucess(mission)}</p>
                            </div>
                            <div class="container-title">
                                <p>Launch Date UTC</p>
                                <p>${new Date(mission.launch_date_unix * 1000).toISOString().slice(0, 19).replace('T', ' ')}</p>
                            </div>
                            <div class="container-title">
                                <p>Rocket Used</p>
                                <p>${mission.rocket.rocket_name}</p>
                            </div>
                            <div class="container-title">
                                <p>Launch Site</p>
                                <p>${mission.launch_site.site_name}</p>
                            </div>
                            <div class="container-title">
                                <p>Video Link</p>
                                <a href="${mission.links.video_link}">YouTube</a>
                            </div>
                        </div>
                        <p class="mission-description">${missionDetails(mission.details)}</p>
                    </div>
                    <div class="mission-payloads">
                        <div class="container-title">
                            <p>Payloads</p>
                        </div>
                    </div>
                </div>
                
            </div>
        `;

        // let payloads = ``;
        // for (let j = 0; j < mission.payload_ids.length; j++) {
        //     payloads += `<p class="mission-id">${mission.payload_ids[j]}</p>`;
        // }
        //
        document.querySelector("#missions").innerHTML += template;
        // document.querySelector(`#mission-${mission.mission_id} .mission-payloads`).innerHTML += payloads;

    }

};


fetch('https://api.spacexdata.com/v3/launches')
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        missions = json;
        // console.table(missions);
        createMissions();
    })
    .catch(function (errors) {
        console.log(errors);
    });
