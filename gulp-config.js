module.exports = function () {
    var sitecoreRoot = "C:\\Sitecore\\placeholders-822";
    var config = {
        websiteRoot: sitecoreRoot + "\\Website",
        sitecoreLibraries: sitecoreRoot + "\\Website\\bin",
        solutionName: "Sitecore",
        licensePath: sitecoreRoot + "\\Data\\license.xml",
        runCleanBuilds: true,
        buildConfiguration: "Release"
    };
    return config;
}