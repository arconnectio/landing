export function init() {
  if (process.env.NODE_ENV === "development") return;

  addPixelScript();
  initTwq(window, document, "script");
  window.twq("config", "og2vk");
}

export function sendConversion(id: string, data: Record<string, unknown>) {
  if (!window.twq) return;

  window.twq("event", id, data);
}

function addPixelScript() {
  const script = document.createElement("script");

  script.type = "text/javascript";
  script.async = true;
  script.src = "https://static.ads-twitter.com/uwt.js";
  document.head.appendChild(script);
}

function initTwq(wndw: Window, doc: Document, el: string) {
  if (!!wndw.twq) return;

  const twitterEventTracker = (wndw.twq = (...args: unknown[]) => {
    // @ts-expect-error
    twitterEventTracker.exe
      ? // @ts-expect-error
        twitterEventTracker.exe.apply(twitterEventTracker, args)
      : // @ts-expect-error
        twitterEventTracker.queue.push(args);
  });

  // @ts-expect-error
  twitterEventTracker.version = "1.1";
  // @ts-expect-error
  twitterEventTracker.queue = [];

  const twitterScriptElement = doc.createElement(el);

  // @ts-expect-error
  twitterScriptElement.async = true;
  // @ts-expect-error
  twitterScriptElement.src = "https://static.ads-twitter.com/uwt.js";

  const a = doc.getElementsByTagName(el)[0];

  if (!a.parentNode) return;
  a.parentNode.insertBefore(twitterScriptElement, a);
}
