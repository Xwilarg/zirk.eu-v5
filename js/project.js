let projects = [
    {
        "name": "Sanara",
        "id": "Sanara",
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
    }
];

function displayProject(index) {
    let project = projects[index];
    document.getElementById("projectDisplayContent").src = `img/project/${project.id}.png`;
    let buttons = "";
    for (let index in project.links)
    {
        let link = project.links[index];
        buttons += '<a class="button neutral" href="' + link.content + '">' + link.name + '</a>';
    }
    document.getElementById("projectDisplayButtons").innerHTML = buttons;
}

function initProjects() {
    let html = "";
    for (let index in projects)
    {
        let project = projects[index];

        if (!project.nsfw)
        {
            html += `<img class="projectPreviewInstance" src="img/project/${project.id}.png" onclick="displayProject(${index})"></img>`;
        }
    }
    document.getElementById("projectPreview").innerHTML = html;
}