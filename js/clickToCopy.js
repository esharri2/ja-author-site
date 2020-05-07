(function() {
  const copyText = (inputElement, copyIcon, successIcon) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(inputElement.value).then(
        function() {
          copyIcon.classList.add("hidden");
          successIcon.classList.replace("hidden", "inline");
        },
        function() {
          alert("Sorry. That didn't work.");
        }
      );
    } else {
      inputElement.select();
      document.execCommand("copy");
      copyIcon.classList.add("hidden");
      successIcon.classList.remove("hidden");
      successIcon.classList.add("block");
    }
  };

  const clickCopyCmps = document.querySelectorAll(".js-click-copy");
  clickCopyCmps.forEach(cmp => {
    const button = cmp.querySelector("button");
    const input = cmp.querySelector("input");
    const copyIcon = cmp.querySelector(".js-copy-icon");
    const successIcon = cmp.querySelector(".js-success-icon");
    button.addEventListener("click", () => {
      copyText(input, copyIcon, successIcon);
    });
  });
})();
