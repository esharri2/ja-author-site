const url = new URL(window.location.href)
const pathname = url.pathname;

if (url.pathname.includes("/admin") || url.hash.includes("recovery_token")) {
  (async () => {
    try {
      await import("./loadNetlifyIdentity.js");
    } catch (error) {
      console.error(error);
    }
  })();
}



