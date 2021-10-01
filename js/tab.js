function displayTab(tabClass, currentTabName) {
    for (elem of document.getElementsByClassName(tabClass)) {
        elem.hidden = true;
    }
    document.getElementById(currentTabName).hidden = false;
}