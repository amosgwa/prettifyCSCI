function fixit() {
    console.log("Injecting file");
    chrome.tabs.insertCSS(null, {file: "injectthis.css"});
    window.close();
};

document.addEventListener('DOMContentLoaded', function() {
    $('#fixText').click(function() {
        fixit();
    });
});
