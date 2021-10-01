let gamejams = [
    {
        "name": "TheRollingDices",
        "fullName": "The Rolling Dices - Paint It, Red",
        "nsfw": false
    },
    {
        "name": "Nautilus",
        "fullName": "Nautilus",
        "nsfw": false
    },
    {
        "name": "RRR",
        "fullName": "R.R.R. (Remove Reuse Repair)",
        "nsfw": false
    },
    {
        "name": "DungeonMaster",
        "fullName": "Dungeon Master",
        "nsfw": false
    },
    {
        "name": "LarryTheSheepsMuseumInvasion",
        "fullName": "Larry: The Sheep\'s Museum Invasion",
        "nsfw": false
    },
    {
        "name": "KibouNoImouto",
        "fullName": "希望の妹",
        "nsfw": true
    },
    {
        "name": "NewSensations",
        "fullName": "New Sensations",
        "nsfw": false
    },
    {
        "name": "JovialJudgement",
        "fullName": "Jovial Judgement",
        "nsfw": false
    },
    {
        "name": "ToFSDfSftPDRRoDwL",
        "fullName": "ToFSDfSftPDRRoDwL",
        "nsfw": false
    },
    {
        "name": "Manchaud",
        "fullName": "Manchaud",
        "nsfw": false
    },
    {
        "name": "HadipoRun",
        "fullName": "Hadipo Run",
        "nsfw": false
    },
    {
        "name": "PowerDown",
        "fullName": "PowerDown",
        "nsfw": false,
    },
    {
        "name": "TalesOfLayinskia",
        "fullName": "Tales of Layinskia",
        "nsfw": false
    },
    {
        "name": "Vespias",
        "fullName": "Vespias: Battle for the Pentacle",
        "nsfw": false
    }
];

// Wait for window to load so jamDisplay isn't null
function initGamejam() {
    let jamDisplay = document.getElementById("jamDisplay");
    
    let html = "";
    // Display all jams
    for (let index in gamejams)
    {
        let jam = gamejams[index];
    
        html += '<img id="jam-' + jam.name + '" src="img/gamejam/' + jam.name + '.jpg"></img>'
    }
    jamDisplay.innerHTML = html;

    // Add mouse over events
    for (let index in gamejams)
    {
        let jam = gamejams[index];

        document.getElementById("jam-" + jam.name).addEventListener("mouseover", function() {
            console.log(this);
            this.src = "";
            this.style.backgroundImage = "url(img/gamejam/" + jam.name + ".gif)";
        }, false);
        document.getElementById("jam-" + jam.name).addEventListener("mouseout", function() {
            this.src = "img/gamejam/" + jam.name + ".jpg";
            this.style.backgroundImage = "";
        }, false);
    }
}