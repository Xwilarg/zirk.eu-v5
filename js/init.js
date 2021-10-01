window.onload = function() {
    initGamejam();

    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab !== null) {
        displayTab('globalTab', tab.toLowerCase());
    }
};