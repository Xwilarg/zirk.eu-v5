function load(id) {
    if (lazyDict[id] !== undefined) {
        lazyDict[id]();
        lazyDict[id] = undefined;
    }
}

let lazyDict = {
    "gamejam": initGamejam
};