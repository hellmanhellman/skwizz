var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.reddit.com",
  contentScriptWhen: "end",
  contentScriptFile: data.url("content_script.js")
});