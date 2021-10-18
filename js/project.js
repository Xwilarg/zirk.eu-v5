let projects = [
    {
        "name": "Sanara",
        "id": "Sanara",
        "github": "https://github.com/Xwilarg/Sanara",
        "links": [
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
        "github": "https://github.com/Xwilarg/NHentaiDownloader",
        "links": [
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
        "github": "https://github.com/Xwilarg/BooruSharp",
        "links": [
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
        "github": "https://github.com/Xwilarg/Discord-OAuth2-PHP",
        "links": [
            {
                "name": "Packagist",
                "content": "https://packagist.org/packages/xwilarg/discord-oauth2-php"
            }
        ],
        "nsfw": false
    }
];

function displayProject(index) {
    document.getElementById("projectDisplayContent").src = `img/project/${projects[index].id}.png`;
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