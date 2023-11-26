/**/
let appData = {};
    appData.startTime = startTime();
    appData.endTime;
    appData.loadTime = appDate.endTime - appData.startTime;

function startTime() {
    if (appData.startTime == undefined) {
        return Date.now();
    } else {
        return;
    }
}
function endTime() {
    if (appData.endTime == undefined) {
        return Date.now();
    } else {
        return;
    }
}
function updateRuntime() {
    appData.currentTime = Date.now();
}