const STATE_WORKING = 0;
const STATE_HALF = 1;
const STATE_NOT_WORKING = 2;

let projects = [
    {
        "name": "Euphonia",
        "description": "Website to host and play your music",
        "comment": "I was tired of others music platforms so I made my own!",
        "languages": [ "JavaScript", "PHP", "Python" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Euphonia"
            }
        ],
        "image": {
            "id": "Euphonia",
            "description": "Example of the website with a music playing. Top right: Preview from mobile notification"
        },
        "nsfw": false,
        "type": "Website",
        "highlist": true,
        "dates": {
            "start": "2021-11-25",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Things works well, should probably work on a easy way to import songs next"
        }
    },
    {
        "name": "Colodex",
        "description": "Library to use Holodex (vtuber stream aggregator) in C",
        "languages": [ "C" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Colodex"
            }
        ],
        "nsfw": false,
        "type": "Library",
        "highlist": false,
        "dates": {
            "start": "2021-09-08",
            "end": "2021-10-27"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "Only a few methods in the API are implemented"
        }
    },
    {
        "name": "TwitterSharp",
        "id": "TwitterSharp",
        "description": "C# wrapper around Twitter API V2",
        "comment": "This project is referenced by Twitter Developer Platform! https://developer.twitter.com/en/docs/twitter-api/tools-and-libraries/v2",
        "imageDescription": "Code to search the 10 latests tweet of Mori Calliope ",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TwitterSharp"
            }
        ],
        "nsfw": false,
        "type": "Library",
        "highlist": true,
        "dates": {
            "start": "2021-05-03",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Still a few API endpoints not implemented but the most important ones are here"
        }
    },
    {
        "name": "GitHub Traffic",
        "description": "Statistics about the traffic of your GitHub repositories",
        "languages": [ "Python" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/GitHubTraffic"
            }
        ],
        "nsfw": false,
        "type": "Library",
        "highlist": false,
        "dates": {
            "start": "2021-04-10",
            "end": "2022-02-16"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Only display the numbers of views but it's good enough for this project scope"
        }
    },
    {
        "name": "Pina",
        "description": "A Discord bot that allow anyone to pin messages in your server without the \"Manage Messages\" permission",
        "comment": "Surely didn't expect this project to be much popular but it's doing decently I guess, still have weird bugs I have no idea how to solve tho",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Pina"
            }
        ],
        "nsfw": false,
        "type": "Discord Bot",
        "highlist": false,
        "dates": {
            "start": "2019-05-29",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Discord OAuth2 PHP",
        "description": "PHP library to easily use Discord OAuth2 authentification",
        "languages": [ "PHP" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Discord-OAuth2-PHP"
            },
            {
                "name": "Packagist",
                "content": "https://packagist.org/packages/xwilarg/discord-oauth2-php"
            }
        ],
        "nsfw": false,
        "type": "Library",
        "highlist": false,
        "dates": {
            "start": "2019-04-19",
            "end": "2020-07-17"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "Still some issue where if the user reload the page, he have to authentify again"
        }
    },
    {
        "name": "NHentai Downloader",
        "description": "Allows to download doujinshi (fan-made manga) from some popular website",
        "image": {
            "description": "Download of many doujinshi at once",
            "id": "NHentaiDownloader"
        },
        "languages": [ "TypeScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/NHentaiDownloader"
            },
            {
                "name": "Website",
                "content": "https://nhentaidownloader.zirk.eu"
            }
        ],
        "nsfw": true,
        "type": "Web Extension",
        "highlist": true,
        "dates": {
            "start": "2018-09-04",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "BooruSharp",
        "description": "C# library to download images from Booru websites (anime image aggregator)",
        "comment": "Making a common library for so many websites is such a pain, I still don't know why my unit tests randomly fails",
        "image": {
            "id": "BooruSharp",
            "description": "Code to get the URL and rating of a random image having the \"Cirno\" tag"
        },
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/BooruSharp"
            },
            {
                "name": "NuGet",
                "content": "https://www.nuget.org/packages/BooruSharp"
            }
        ],
        "nsfw": true,
        "type": "Library",
        "highlist": true,
        "dates": {
            "start": "2018-07-16",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Looks like some API calls are failing for some booru but I can't reproduce the issue repeatedly"
        }
    },
    {
        "name": "Sanara",
        "description": "Multipurpose bot for Discord",
        "image": {
            "id": "Sanara",
            "description": "Top left: image search<br/>Bottom left: shiritori (Japanese associative word game)<br/>Right: text translation from image"
        },
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Sanara"
            },
            {
                "name": "Website",
                "content": "https://sanara.zirk.eu"
            },
            {
                "name": "Invitation Link",
                "content": "https://discord.com/api/oauth2/authorize?client_id=329664361016721408&scope=bot%20applications.commands"
            }
        ],
        "nsfw": false,
        "type": "Discord Bot",
        "highlist": true,
        "dates": {
            "start": "2017-08-28",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "There are still a lot of crashs reported, especially on the subscription module"
        }
    },
    {
        "name": "FPL-TimePlayed",
        "description": "Flashpoint extension to display how much time you spent on a game",
        "languages": [ "Typescript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FPL-TimePlayed"
            }
        ],
        "nsfw": false,
        "type": "Flashpoint extension",
        "highlist": false,
        "dates": {
            "start": "2021-04-04",
            "end": "2021-04-30"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "Last time I tried the extension couldn't create playlists anymore"
        }
    },
    {
        "name": "DailyReset",
        "description": "Android application to help learning Korean and Japanese, give a new word every day and do quizzes based on them",
        "comment": "Made this project to motivate myself to continue learning Japanese... that didn't work",
        "image": {
            "id": "DailyReset",
            "description": "Image 1: Daily word<br/>Image 2: Quizz with handwritten input<br/>Image 3: Quizz result<br/>Image 4: Sample sentence with daily word"
        },
        "languages": [ "Kotlin" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/DailyReset"
            }
        ],
        "nsfw": false,
        "type": "Android App",
        "highlist": true,
        "dates": {
            "start": "2021-02-04",
            "end": "2021-12-20"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "The app would need more gamification and a better design to be great"
        }
    },
    {
        "name": "Yuuka",
        "description": "A Discord bot that allow you to create tags with text, audio or images, and then play them when you want to",
        "image": {
            "id": "Yuuka",
            "description": "Tags"
        },
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Yuuka"
            }
        ],
        "nsfw": false,
        "type": "Discord Bot",
        "highlist": true,
        "dates": {
            "start": "2020-07-20",
            "end": "2021-12-21"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "CSV Cleaner",
        "description": "Some handy tools to clean your CSV files",
        "comment": "A tool I made for someone who had to manually clean CSV files, I'm pretty happy of the end result",
        "image" : {
            "id": "CSVCleaner",
            "description": "CSV data loaded into the software"
        },
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/CSVCleaner"
            }
        ],
        "nsfw": false,
        "type": "Software",
        "highlist": true,
        "dates": {
            "start": "2019-01-22",
            "end": "2019-02-03"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Could be more intuitive to use"
        }
    },
    {
        "name": "Lania",
        "description": "A Discord bot than open a gate allowing you to send an image to a random guild and to see the reactions they add to it",
        "comment": "Was expecting this project to be more popular but it never took of",
        "image": {
            "id": "Lania",
            "description": "Left: An image send to others guilds<br/>Right: 2 images received"
        },
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Lania"
            }
        ],
        "nsfw": false,
        "type": "Discord Bot",
        "highlist": true,
        "dates": {
            "start": "2018-06-09",
            "end": "2020-01-06"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Had some minor annoying bugs were some information weren't transmit properly between servers"
        }
    },
    {
        "name": "Konawall",
        "description": "Set a random anime wallpaper on your computer",
        "languages": [ "Python" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Konawall"
            }
        ],
        "nsfw": false,
        "type": "Script",
        "highlist": false,
        "dates": {
            "start": "2018-06-08",
            "end": "2018-10-05"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "FightEpitechGrades",
        "id": "FightEpitechGrades",
        "description": "2D fighting game",
        "comment": "First games I made at EPITECH, having people trying to beat the AI was a lot of fun",
        "imageDescription": "Player versus AI",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FightEpitechGrades-Old"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlist": false,
        "date": "End of 2016"
    },
    {
        "name": "ProjetISNProcessing",
        "id": "ProjetISNProcessing",
        "description": "RPG",
        "comment": "Final project of my last year of highschool, I kind of wanted to continue it but after some time the game become really laggy, never found out why",
        "imageDescription": "Ongoing game",
        "languages": [ "Java" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/ProjetISNProcessing"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlist": false,
        "date": "2015 - 2016"
    },
    {
        "name": "The Quest Of Zirk",
        "id": "TQOZ",
        "description": "Text-based game for TI-83+",
        "comment": "Game I made back in high-school on my calculator, had to stop because I reached the limit of 99 GOTO I could do",
        "imageDescription": "Screen 1: Main menu (Main menu 1-Play 2-Stats 3-Reset 4-Achievements 5-Codes 6-Credit 7-Exit)<br/>Screen 2: Fight (You are attacking, your enemy loose: 12  He Still has: 33)<br/>Screen 3: In-game menu (Where are you going? 1- Capital 2-City 3-River 4-Graveyard 5-Dungeon)<br/>Screen 4: Stats recap (Enemies killed: 1  Damages done: 67  Damages received: 100)",
        "languages": [ "TI-Basic" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TQOZ"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlist": false,
        "date": "Around 2012"
    }
];

function displayProject(index) {
    document.getElementById("projectDisplay").hidden = false;

    let project = projects[index];
    if (!project.nsfw)
    {
        document.getElementById("projectDisplayTitle").innerHTML = project.name;
    }
    else
    {
        document.getElementById("projectDisplayTitle").innerHTML = "";
    }
    document.getElementById("projectDisplayText").innerHTML = project.description;
    document.getElementById("projectDisplayContent").src = `img/project/${project.id}.png`;
    document.getElementById("projectDisplaySubtext").innerHTML = project.imageDescription;
    if (!project.nsfw) // We don't want to link projects that are in fact NSFW
    {
        let buttons = "";
        for (let index in project.links)
        {
            let link = project.links[index];
            buttons += '<a class="button neutral" href="' + link.content + '">' + link.name + '</a>';
        }
        document.getElementById("projectDisplayButtons").innerHTML = buttons;
    }
    else
    {
        document.getElementById("projectDisplayButtons").innerHTML = "";
    }
}

function initProjects() {
    let html = "";
    let wasHighlist = true;
    for (let index in projects.sort((a, b) => {
        return b.highlist - a.highlist;
    }))
    {
        let project = projects[index];
        if (wasHighlist && !project.highlist)
        {
            wasHighlist = false;
            html += "<hr/>";
        }
        html += `<img class="projectPreviewInstance" src="img/project/${project.id}.png" onclick="displayProject(${index})"></img>`;
    }
    document.getElementById("projectPreview").innerHTML = html;
}