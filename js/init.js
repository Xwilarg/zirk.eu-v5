window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    for (elem of document.getElementsByClassName("globalTab")) {
        elem.hidden = true;
    }
    if (tab !== null) {
        displayTab('globalTab', tab.toLowerCase());
    } else {
        displayTab('globalTab', "home");
    }

    initProjects();

    document.getElementById("moreCSS").onclick = () => {
        let link = document.createElement('link');
        link.rel  = 'stylesheet';
        link.href = "css/wow.css";
        document.head.appendChild(link);
        document.getElementById("cssQuestion").hidden = true;
    };
};