(function(){
  console.log("about to load netlify id script");
  const newScript = document.createElement("script");
  newScript.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  document.body.appendChild(newScript);
})();