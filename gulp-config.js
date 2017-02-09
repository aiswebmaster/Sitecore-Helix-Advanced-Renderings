module.exports = function () {
    var sitecoreRoot = "C:\\Sitecore\\example-82";
    var config = {
        websiteRoot: sitecoreRoot + "\\Website",
        sitecoreLibraries: sitecoreRoot + "\\Website\\bin",
        solutionName: "Sitecore",
        licensePath: sitecoreRoot + "\\Data\\license.xml",
        runCleanBuilds: false
    };
    return config;
}