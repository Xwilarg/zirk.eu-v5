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
                "name": "Website",
                "content": "https://sanara.zirk.eu"
            },
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
        "highlight": true,
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
        "highlight": true,
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
        "highlight": true,
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
        "highlight": true,
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
        "name": "Colodex",
        "description": "Library to use Holodex (vtuber stream aggregator) in C",
        "languages": [ "C" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Colodex"
            }
        ],
        "image": {
            "id": "Colodex",
            "description": "Request to get information about the latest streams"
        },
        "nsfw": false,
        "type": "Library",
        "highlight": false,
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
        "description": "C# wrapper around Twitter API V2",
        "comment": "This project is referenced by Twitter Developer Platform! https://developer.twitter.com/en/docs/twitter-api/tools-and-libraries/v2",
        "image": {
            "id": "TwitterSharp",
            "description": "Code to search the 10 latests tweet of Mori Calliope"
        },
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TwitterSharp"
            }
        ],
        "nsfw": false,
        "type": "Library",
        "highlight": true,
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
        "image": {
            "id": "GitHubTraffic",
            "description": "Most popular repositories for user \"Xwilarg\""
        },
        "nsfw": false,
        "type": "Library",
        "highlight": false,
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
        "image": {
            "id": "Pina",
            "description": "Example of how to pin a message using the bot, followed by setting a whitelist"
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
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
        "image": {
            "description": "Code to get and display the username of someone",
            "id": "Discord-OAuth2-PHP"
        },
        "nsfw": false,
        "type": "Library",
        "highlight": false,
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
        "name": "FPL-TimePlayed",
        "description": "Flashpoint extension to display how much time you spent on a game",
        "languages": [ "Typescript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FPL-TimePlayed"
            }
        ],
        "image": {
            "id": "FPL-TimePlayed",
            "description": "Example of usage"
        },
        "nsfw": false,
        "type": "Flashpoint extension",
        "highlight": false,
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
        "highlight": true,
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
        "description": "A Discord bot that allow you to create tags with text, audio or images, and then play/show them when you want to",
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
        "highlight": true,
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
        "highlight": true,
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
        "highlight": true,
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
        "image": {
            "id": "Konawall",
            "description": "Setting a random wallpaper with the tag \"kantai_collection\""
        },
        "nsfw": false,
        "type": "Script",
        "highlight": false,
        "dates": {
            "start": "2018-12-30",
            "end": "2019-01-20"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "FightEpitechGrades",
        "description": "2D fighting game where you import your marks and fight against them",
        "comment": "First games I made at EPITECH, having people trying to beat the AI was a lot of fun",
        "image": {
            "id": "FightEpitechGrades",
            "description": "Player versus AI",
        },
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FightEpitechGrades-Old"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlight": true,
        "dates": {
            "start": "End of 2016",
            "end": "End of 2016"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "The \"fight against grades\" that was supposed to be the main part of the game ended up not being here"
        }
    },
    {
        "name": "ProjetISNProcessing",
        "description": "Turned-based RPG where you need to go inside an endless dungeon",
        "comment": "Final project of my last year of highschool, I kind of wanted to continue it but after some time the game become really laggy, never found out why",
        "image": {
            "id": "ProjetISNProcessing",
            "description": "Ongoing game"
        },
        "languages": [ "Java" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/ProjetISNProcessing"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlight": true,
        "dates": {
            "start": "2015",
            "end": "2016"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "After some levels the game became really laggy and thus unplayable"
        }
    },
    {
        "name": "The Quest Of Zirk",
        "description": "Text-based game for TI-83+",
        "comment": "Game I made back in high-school on my calculator, had to stop because I reached the limit of 99 GOTO I could do",
        "image": {
            "id": "TQOZ",
            "description": "Screen 1: Main menu (Main menu 1-Play 2-Stats 3-Reset 4-Achievements 5-Codes 6-Credit 7-Exit)<br/>Screen 2: Fight (You are attacking, your enemy loose: 12  He Still has: 33)<br/>Screen 3: In-game menu (Where are you going? 1- Capital 2-City 3-River 4-Graveyard 5-Dungeon)<br/>Screen 4: Stats recap (Enemies killed: 1  Damages done: 67  Damages received: 100)"
        },
        "languages": [ "TI-Basic" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TQOZ"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlight": true,
        "dates": {
            "start": "Around 2012",
            "end": "Around 2012"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "jpo",
        "description": "Showcase of some EPITECH projects in VR, mostly in a parodic way",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/jpo"
            }
        ],
        "image": {
            "id": "jpo",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2017-12-17",
            "end": "2018-02-10"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Still could be improved but was still used during open days"
        }
    },
    {
        "name": "Lab2D",
        "description": "Adventure / RPG game where you are a service agent uncovering the secrets of a laboratory",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Lab2D"
            }
        ],
        "image": {
            "id": "Lab2D",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2017-11-09",
            "end": "2017-11-23"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "You can explore things for a bit but will quickly get stopped by the fact that the game isn't finished"
        }
    },
    {
        "name": "FightEpitechGrades",
        "description": "2D fighting game where you import your marks and fight against them",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FightEpitechGrades"
            }
        ],
        "image": {
            "id": "FightEpitechGrades-2",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2018-06-08",
            "end": "2018-10-04"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "Improved version of the other one, still lacking in a lot of points"
        }
    },
    {
        "name": "Particles",
        "description": "Example of particles system with the SFML",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Particles"
            }
        ],
        "image": {
            "id": "Particles",
            "description": null
        },
        "nsfw": false,
        "type": "Software",
        "highlight": false,
        "dates": {
            "start": "2018-12-29",
            "end": "2019-01-03"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "FPH",
        "description": "Gestion game where you have to build a squad and send it fight in a building",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FPH"
            }
        ],
        "image": {
            "id": "FPH",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2019-02-28",
            "end": "2019-03-03"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": "Work was done on the UI but there is nothing behind it"
        }
    },
    {
        "name": "WebColor",
        "description": "Example of client/server implement for syncing a color",
        "languages": [ "Golang", "C++", "JavaScript" ],
        "links": [
            {
                "name": "Source Code (Golang Server)",
                "content": "https://github.com/Xwilarg/WebServerGo"
            },
            {
                "name": "Source Code (C++ Server)",
                "content": "https://github.com/Xwilarg/WebServerPlus"
            },
            {
                "name": "Source Code (Client)",
                "content": "https://github.com/Xwilarg/WebClient"
            }
        ],
        "image": {
            "id": "WebColor",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2019-04-02",
            "end": "2022-05-17"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "LOLIS2D",
        "description": "Wrapper around the SFML",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/LOLIS2D"
            }
        ],
        "image": {
            "id": "LOLIS2D",
            "description": null
        },
        "nsfw": false,
        "type": "Library",
        "highlight": false,
        "dates": {
            "start": "2019-02-21",
            "end": "2019-08-09"
        },
        "state": {
            "status": STATE_HALF,
            "comment": "Allow to create an object and move it around"
        }
    },
    {
        "name": "FE3H-Badge",
        "description": "Create an image to show who you S ranked in Fire Emblem: 3 Houses",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/FE3H-Badge"
            }
        ],
        "image": {
            "id": "FE3H-Badge",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2019-08-12",
            "end": "2019-08-10"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": "Not really pretty but is working"
        }
    },
    {
        "name": "KC-Bomber-Survival",
        "description": "Shoot them 'up based on the browser game Kantai Collection",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/KC-Bomber-Survival"
            }
        ],
        "image": {
            "id": "KC-Bomber-Survival",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2019-09-12",
            "end": "2019-09-24"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "RhythmParadise",
        "description": "Rhythm game",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/RhythmParadise"
            }
        ],
        "image": {
            "id": "RhythmParadise",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2019-11-18",
            "end": "2019-12-01"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Project Alpha",
        "description": "Beat them all",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/ProjectAlpha"
            }
        ],
        "image": {
            "id": "ProjectAlpha",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2019-10-26",
            "end": "2019-12-26"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Hayari",
        "description": "A fast and lightweight browser",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Hayari"
            }
        ],
        "image": {
            "id": "Hayari",
            "description": null
        },
        "nsfw": false,
        "type": "Software",
        "highlight": false,
        "dates": {
            "start": "2020-01-21",
            "end": "2020-01-25"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Horizon",
        "description": "Website to compare shipgirls from differents games",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Horizon"
            }
        ],
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2019-04-07",
            "end": "2020-02-19"
        },
        "state": {
            "status": STATE_HALF,
            "comment": null
        }
    },
    {
        "name": "Hanako",
        "description": "A robot vacuum cleaner",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Hanako"
            }
        ],
        "image": {
            "id": "Hanako",
            "description": null
        },
        "nsfw": false,
        "type": "Robot",
        "highlight": false,
        "dates": {
            "start": "2020-03-02",
            "end": null
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "TerrariaBot",
        "description": "A library to make Terraria bots",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TerrariaBot"
            },
            {
                "name": "Source Code (Example)",
                "content": "https://github.com/Xwilarg/Meina"
            }
        ],
        "image": {
            "id": "TerrariaBot",
            "description": null
        },
        "nsfw": false,
        "type": "Library",
        "highlight": false,
        "dates": {
            "start": "2020-04-11",
            "end": "2020-05-01"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Tami",
        "description": "Bot to allow you to moderate a server with votes",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Tami"
            }
        ],
        "image": {
            "id": "Tami",
            "description": null
        },
        "nsfw": false,
        "type": "Script",
        "highlight": false,
        "dates": {
            "start": "2020-06-30",
            "end": "2020-07-01"
        },
        "state": {
            "status": STATE_HALF,
            "comment": null
        }
    },
    {
        "name": "Sand and Seeds",
        "description": "Farming game",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Sand-and-Seeds"
            }
        ],
        "image": {
            "id": "SandAndSeeds",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2020-07-13",
            "end": "2020-04-20"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Alimentation Warning",
        "description": "Tell you if your laptop isn't plugged-in",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Alimentation-Warning"
            }
        ],
        "nsfw": false,
        "type": "Script",
        "highlight": false,
        "dates": {
            "start": "2020-04-03",
            "end": "2020-04-27"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Yousei",
        "description": "A quizz based app to learn Japanese",
        "languages": [ "Kotlin" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Yousei"
            }
        ],
        "image": {
            "id": "Yousei",
            "description": null
        },
        "nsfw": false,
        "type": "Mobile Application",
        "highlight": false,
        "dates": {
            "start": "2020-07-07",
            "end": "2020-10-22"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Isathos",
        "description": null,
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Isathos"
            }
        ],
        "image": {
            "id": "Isathos",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2020-07-24",
            "end": "2020-10-25"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Arena",
        "description": "2D fighting game",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Arena"
            }
        ],
        "image": {
            "id": "Arena",
            "description": "Example of a character in the arena who equipped a sword"
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2020-11-14",
            "end": "2020-11-28"
        },
        "state": {
            "status": STATE_HALF,
            "comment": null
        }
    },
    {
        "name": "Natsuri",
        "description": "Create sentences based on others people messages",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Natsuri"
            }
        ],
        "image": {
            "id": "Natsuri",
            "description": null
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "2020-11-22",
            "end": "2020-12-04"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Joumachi",
        "description": "Correct typos in other people messages",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Joumachi"
            }
        ],
        "image": {
            "id": "Joumachi",
            "description": null
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "2020-12-04",
            "end": "2020-12-04"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Ship",
        "description": "Display fanmades couples from animes/games",
        "languages": [ "JavaScript", "PHP" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Ship"
            }
        ],
        "image": {
            "id": "Ship",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2020-09-21",
            "end": "2021-01-09"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "HololiveCalendar",
        "description": "Display debut date of Hololive members",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/HololiveCalendar"
            }
        ],
        "image": {
            "id": "HololiveCalendar",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2020-01-13",
            "end": "2021-01-19"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "CharaCreator",
        "description": "Tool to help creating characters and worlds more easily",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/CharaCreator"
            }
        ],
        "image": {
            "id": "CharaCreator",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2020-12-10",
            "end": "2021-03-10"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Cover",
        "description": "Display differents covers for a song",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Cover"
            }
        ],
        "image": {
            "id": "Cover",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2021-02-12",
            "end": "2021-03-28"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "HoloSongs",
        "description": "List original songs made by Hololive",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/HoloSongs"
            }
        ],
        "image": {
            "id": "HoloSongs",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2021-04-02",
            "end": "2021-04-06"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "ML_Ball",
        "description": "AI learning to play with balls",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/ML_Ball"
            }
        ],
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2021-04-21",
            "end": "2021-04-22"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "HoloRPG",
        "description": "Tactical RPG",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/HoloRPG-old"
            }
        ],
        "image": {
            "id": "HoloRPG",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2021-05-22",
            "end": "2021-05-08"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Onigiri",
        "description": "Bot that post every new tweet from Hololive",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Onigiri"
            }
        ],
        "image": {
            "id": "Onigiri",
            "description": null
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "2021-05-05",
            "end": "2021-05-09"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "ImageCategorizer",
        "description": "Software to help categorizing images",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/ImageCategorizer"
            }
        ],
        "image": {
            "id": "ImageCategorizer",
            "description": null
        },
        "nsfw": false,
        "type": "Software",
        "highlight": false,
        "dates": {
            "start": "2021-07-10",
            "end": "2021-07-10"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Airi",
        "description": "Bot that attempt to play Soul Worker by reading the screen",
        "languages": [ "C++" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Airi"
            }
        ],
        "image": {
            "id": "Airi",
            "description": "Example of a bot that follow the player and help him"
        },
        "nsfw": false,
        "type": "Bot",
        "highlight": false,
        "dates": {
            "start": "2019-03-18",
            "end": "2021-07-10"
        },
        "state": {
            "status": STATE_HALF,
            "comment": null
        }
    },
    {
        "name": "Fuyanami",
        "description": "Bot that help managing a VPS",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Fuyanami"
            }
        ],
        "image": {
            "id": "Fuyanami",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2020-11-06",
            "end": "2021-09-01"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "NHentaiAnalytics",
        "description": "Find doujins based on your preferences",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/NHentaiAnalytics"
            }
        ],
        "image": {
            "id": "NHentaiAnalytics",
            "description": null
        },
        "nsfw": true,
        "type": "Browser Extension",
        "highlight": false,
        "dates": {
            "start": "2019-12-07",
            "end": "2021-09-22"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "VNotify",
        "description": "Desktop notifications for new vtubers streams",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/VNotify"
            }
        ],
        "image": {
            "id": "VNotify",
            "description": null
        },
        "nsfw": false,
        "type": "Software",
        "highlight": false,
        "dates": {
            "start": "2021-09-15",
            "end": "2021-09-29"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "TrafficSimulator",
        "description": "Simulation of car traffic",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TrafficSimulator"
            }
        ],
        "image": {
            "id": "TrafficSimulator",
            "description": null
        },
        "nsfw": false,
        "type": "Library",
        "highlight": false,
        "dates": {
            "start": "2020-12-19",
            "end": "2021-09-20"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "NHentaiSharp",
        "description": "Library to use a doujin API",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/NHentaiSharp"
            }
        ],
        "nsfw": true,
        "type": "Library",
        "highlight": false,
        "dates": {
            "start": "2018-08-08",
            "end": "2021-11-25"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Camellia",
        "description": "Utility commands",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Camellia"
            }
        ],
        "image": {
            "id": "Camellia",
            "description": null
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "2021-07-21",
            "end": "2021-11-26"
        },
        "state": {
            "status": STATE_NOT_WORKING,
            "comment": null
        }
    },
    {
        "name": "Konari",
        "description": "Bot that analyze and censor messages",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Konari"
            }
        ],
        "image": {
            "id": "Konari",
            "description": null
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "2018-11-29",
            "end": "2019-09-14"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Atsuka",
        "description": "Bot that order you to apologize if you say bad things",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Atsuka"
            }
        ],
        "image": {
            "id": "Atsuka",
            "description": "Example of censorship by the bot"
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "2019-04-25",
            "end": "2019-07-14"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Sanara Website",
        "description": "Website of Sanara",
        "languages": [ "JavaScript", "PHP" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Sanara-Website"
            }
        ],
        "image": {
            "id": "SanaraWebsite",
            "description": null
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2019-04-29",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "SDVX5ToKamaitachi",
        "description": "Export SDVX 5 e-amusement data to Kamaitachi JSON",
        "languages": [ "C#" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/SDVX5ToKamaitachi"
            }
        ],
        "image": {
            "id": "SDVX5ToKamaitachi",
            "description": "Example of export"
        },
        "nsfw": false,
        "type": "Software",
        "highlight": false,
        "dates": {
            "start": "2022-03-15",
            "end": "2022-03-16"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "HumbleWish",
        "description": "Extension to know where game in Humble Bundle are in the wishlist of your friends",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/HumbleWish"
            }
        ],
        "image": {
            "id": "HumbleWish",
            "description": null
        },
        "nsfw": false,
        "type": "Browser Extension",
        "highlight": false,
        "dates": {
            "start": "2022-04-13",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Taikyoku Shogi",
        "description": "Implementation of Taikyoku Shogi",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/TaikyokuShogi"
            }
        ],
        "image": {
            "id": "TaikyokuShogi",
            "description": null
        },
        "nsfw": false,
        "type": "Video Game",
        "highlight": false,
        "dates": {
            "start": "2022-03-28",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "CommitMessageAnalyzer",
        "description": "Analyze the commit messages on one of your repository",
        "languages": [ "JavaScript", "PHP" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/CommitMessageAnalyzer"
            }
        ],
        "image": {
            "id": "CommitMessageAnalyzer",
            "description": "Analyze of the lasts commits of a repository"
        },
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2018-08-14",
            "end": "2022-04-16"
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "zirk.eu",
        "description": "This website",
        "languages": [ "JavaScript" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/zirk.eu"
            }
        ],
        "nsfw": false,
        "type": "Website",
        "highlight": false,
        "dates": {
            "start": "2021-05-30",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    },
    {
        "name": "Tsuna",
        "description": "Compile and execute code sent on Discord",
        "languages": null,
        "links": [],
        "image": {
            "id": "Tsuna",
            "description": null
        },
        "nsfw": false,
        "type": "Discord Bot",
        "highlight": false,
        "dates": {
            "start": "Q1 2019",
            "end": null
        },
        "state": {
            "status": STATE_WORKING,
            "comment": null
        }
    }
];

function displayProject(name) {
    document.getElementById("projectDisplay").hidden = false;

    let project = projects.filter(x => x.name === name)[0];
    if (!project.nsfw)
    {
        document.getElementById("projectDisplayTitle").innerHTML = project.name;
    }
    else
    {
        document.getElementById("projectDisplayTitle").innerHTML = "";
    }
    document.getElementById("projectDisplayText").innerHTML = project.description;
    document.getElementById("projectDisplayContent").src = `img/project/highlight/${project.image.id}.png`;
    document.getElementById("projectDisplaySubtext").innerHTML = project.image.description;
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

function getHighlightHtml(project) {
    let buttons = `<div class="project-buttons">`;
    for (let b of project.links) {
        buttons += `<a class="button neutral">${b.name}</a>`;
    }
    buttons += "</div>"

    return `
    <div class="highlight-preview">
        <img class="projectPreviewInstance" src="img/project/highlight/${project.image.id}.png"/><br/>
        ${buttons}
    </div>    
    `;
}

function showProjectPreview(name, src) {
    document.getElementById("projectNormalPreview").hidden = false;
    document.getElementById("projectNormalPreviewTitle").innerHTML = name;
    document.getElementById("projectNormalPreviewImage").src = src;
}

function hideProjectPreview() {
    document.getElementById("projectNormalPreview").hidden = true;
}

function initProjects() {
    let html = "";
    for (let project of projects
        .filter(x => x.highlight)
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        }))
    {
        html += getHighlightHtml(project);
    }
    document.getElementById("projectPreview").innerHTML = html;

    html = "";
    for (let index in projects.sort((a, b) => {
        return a.name.localeCompare(b.name);
    }))
    {
        let project = projects[index];
        let image = "";
        let imageContent = "";
        if (project.image !== undefined) {
            image = `onmouseover="showProjectPreview('${project.name}', 'img/project/${project.highlight ? "highlight" : "normal"}/${project.image.id}.png')" onmouseleave="hideProjectPreview()"`;
            imageContent = "Hover me";
        }
        const censorName = project.nsfw ? 'class="censor"' : "";
        html += `
            <tr>
                <td ${censorName}>${project.name}</td>
                <td>${project.type}</td>
                <td>${project.description}</td>
                <td>${project.languages === null ? "" : project.languages.join(' ')}</td>
                <td></td>
                <td></td>
                <td ${image}>${imageContent}</td>
            </tr>
        `
    }
    document.getElementById("projectAll").innerHTML = html;
}