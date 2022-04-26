window.onload = function() {
    const urlParam = window.location.hash;

    for (elem of document.getElementsByClassName("globalTab")) {
        elem.hidden = true;
    }
    if (urlParam !== null) {
        displayTab('globalTab', urlParam.toLowerCase().substring(1));
    }

    initProjects();

    document.getElementById("moreCSS").onclick = () => {
        let link = document.createElement('link');
        link.rel  = 'stylesheet';
        link.href = "css/wow.css";
        document.head.appendChild(link);
        document.getElementById("cssQuestion").hidden = true;
    };

    Array.from(document.getElementsByClassName("question")).forEach(e => {
        let children = e.children;
        children[0].addEventListener("click", () => {
            children[1].hidden = !children[1].hidden;
        });
        children[1].hidden = true;
    });
};