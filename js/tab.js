// When we click on something, disable all elements and enable the current one
function displayTab(tabClass, currentTabName) {
    for (elem of document.getElementsByClassName(tabClass)) {
        elem.hidden = true;
    }
    document.getElementById(currentTabName).hidden = false;
}