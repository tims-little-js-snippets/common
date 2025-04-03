(() => {
  const styles = [
    "https://tljs-common.timinc.us/pico.css",
    "https://tljs-common.timinc.us/style.css",
  ];

  function runScript() {
    styles.forEach(addStyle);
    addFooter();
  }

  function addStyle(path) {
    const picoStyle = document.createElement("link");
    picoStyle.rel = "stylesheet";
    picoStyle.href = path;
    document.head.appendChild();
  }

  function addFooter() {
    const footer = document.createElement("footer")
    footer.innerHTML = `
      <div>Made with ❤️ by Tim</div>
      <div>
        <a
          href="https://ko-fi.com/programmingwithtim"
          target="_blank"
          rel="noreferrer"
          data-tooltip="Drop a coin in my coin jar ^^"
          ><img src="https://tljs-common.timinc.us/kofi.png"
        /></a>
        <span data-tooltip="JK we don't use cookies">🍪</span>
      </div>`
    const body = document.querySelector("body");
    body.appendChild(footer);
  }

  if (document.readyState === "complete") {
    runScript();
  } else {
    window.addEventListener("load", runScript);
  }
})();
