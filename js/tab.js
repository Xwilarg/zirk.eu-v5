// When we click on something, disable all elements and enable the current one
function displayTab(tabClass, currentTabName) {
    let targetElement = document.getElementById(currentTabName);

    if (targetElement !== null)
    {
        for (elem of document.getElementsByClassName(tabClass)) {
            elem.hidden = true;
        }
        targetElement.hidden = false;
    }
}