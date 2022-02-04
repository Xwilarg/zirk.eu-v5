let projects = [
    {
        "name": "Sanara",
        "id": "Sanara",
        "description": "Multipurpose bot for Discord",
        "imageDescription": "Top left: image search, bottom left: shiritori (Japanese associative word game), right: text translation from image",
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
                "content": "https://discordapp.com/oauth2/authorize?client_id=329664361016721408&permissions=3196928&scope=bot"
            }
        ],
        "nsfw": false
    },
    {
        "name": "NHentaiDownloader",
        "id": "NHentaiDownloader",
        "description": "Allows to download doujinshi (fan-made manga) from some popular website",
        "imageDescription": "Download of many doujinshi at once",
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
        "nsfw": true
    },
    {
        "name": "BooruSharp",
        "id": "BooruSharp",
        "description": "C# library to download images from Booru websites (anime image aggregator)",
        "imageDescription": "Code to get the URL and rating of a random image having the \"Cirno\" tag",
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
        "nsfw": true
    },
    {
        "name": "Discord OAuth2 PHP",
        "id": "Discord-OAuth2-PHP",
        "description": "PHP library to easily use Discord OAuth2 authentification",
        "imageDescription": "Code to authentificate an user with Discord and get his username and Discord tag",
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
        "nsfw": false
    },
    {
        "name": "DailyReset",
        "id": "DailyReset",
        "description": "Android application to help learning Korean and Japanese",
        "imageDescription": "Image 1: Daily word, Image 2: Quizz with handwritten input, Image 3: Quizz result, Image 4: Sample sentence with daily word",
        "languages": [ "Kotlin" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/DailyReset"
            }
        ],
        "nsfw": false
    },
    {
        "name": "Euphonia",
        "id": "Euphonia",
        "description": "Website to host and play your music",
        "imageDescription": "Example of the website with a music playing. Top right: Preview from mobile notification",
        "languages": [ "JavaScript", "PHP", "Python" ],
        "links": [
            {
                "name": "Source Code",
                "content": "https://github.com/Xwilarg/Euphonia"
            }
        ],
        "nsfw": false
    }
];

function displayProject(index) {
    document.getElementById("projectDisplay").hidden = false;

    let project = projects[index];
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
    for (let index in projects)
    {
        let project = projects[index];
        html += `<img class="projectPreviewInstance" src="img/project/${project.id}.png" onclick="displayProject(${index})"></img>`;
    }
    document.getElementById("projectPreview").innerHTML = html;
}