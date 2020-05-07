(function() {
  const button = document.getElementById("back-to-top");

  button.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  // TODO intersection observer?

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1600) {
      if (button.classList.contains("hidden")) {
        button.classList.replace("hidden", "block");
      }
    } else {
      button.classList.replace("block", "hidden");
    }
  });
})();
