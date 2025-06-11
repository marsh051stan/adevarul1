if (window.frameElement) {
  doc2 = window.frameElement.ownerDocument;
} else {
  doc2 = document;
}

var urlTrvd = window.location.href.split("/");

divs1 = doc2.getElementsByTagName("main")[1];
if (divs1) {
  let mobileCheck1 = function () {
    let check = false;
    (function (a) {
      if (/(android|bb\d+|meego).../.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  let parentDiv2, truvidScript2, insertBefore2;
  truvidScript2 = document.createElement("script");
  truvidScript2.async = true;
  truvidScript2.type = "text/javascript";
  truvidScript2.src = "//go.trvdp.com/init/6545.js";

  switch (urlTrvd[3]) {
    case "stiri-interne":
      truvidScript2.setAttribute("data-pid", "5984");
      break;
    case "stiri-locale":
      truvidScript2.setAttribute("data-pid", "5985");
      break;
    case "politica":
      truvidScript2.setAttribute("data-pid", "5986");
      break;
    case "stil-de-viata":
      truvidScript2.setAttribute("data-pid", "5987");
      break;
    case "showbiz":
      truvidScript2.setAttribute("data-pid", "5988");
      break;
    case "blogurile-adevarul":
      truvidScript2.setAttribute("data-pid", "5989");
      break;
    case "adevarul-live":
      truvidScript2.setAttribute("data-pid", "5990");
      break;
    case "galerii-foto":
      truvidScript2.setAttribute("data-pid", "5991");
      break;
    case "sport":
      truvidScript2.setAttribute("data-pid", "5952");
      break;
    default:
      truvidScript2.setAttribute("data-pid", "4841");
      break;
  }

  function f() {
    if (!mobileCheck1()) {
      parentDiv1 = divs1;
      if (parentDiv1) {
        clearInterval(interval1);
        insertBefore = parentDiv1.children[4];
        let div = document.createElement("div");
        div.style.width = "90%";
        div.style.margin = "20px auto";
        div.appendChild(truvidScript2);
        parentDiv1.insertBefore(div, insertBefore);
        return false;
      }
    } else {
      parentDiv1 = divs1;
      if (parentDiv1) {
        clearInterval(interval1);
        insertBefore = parentDiv1.children[2];
        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.margin = "10px auto";
        div.appendChild(truvidScript2);
        parentDiv1.insertBefore(div, insertBefore);
        return false;
      }
    }
  }

  let interval1 = setInterval(f, 200);
} else {
  truvidScript2 = document.createElement("script");
  truvidScript2.async = true;
  truvidScript2.type = "text/javascript";
  truvidScript2.src = "https://cnt.trvdp.com/js/1544/6587.js";
  let divs2 = doc2.getElementsByTagName("head")[0];
  divs2.appendChild(truvidScript2);
}

let prevVolume = undefined;

top.onTruvidPlayerAdded = function (api) {
  const player = api.playerObject;

  const muteAd = () => {
    if (prevVolume !== undefined) {
      player.setVolume(prevVolume);
      if (prevVolume > 0) {
        player.getPlayerElements().player.mediaVideo.muted = false
      }
      prevVolume = undefined;
    }
    player.unsubscribe("onAdEnd", muteAd);
  };

  setInterval(() => {
    if (
      prevVolume === undefined &&
      player &&
      player.isAdPlaying() &&
      !player.IsPlayerViewable()
    ) {
      prevVolume = player.getCurrentVolume();
      try {
        const adManager = player
          ?.getAdsLib()
          ?.currentBidSession?.getCurrentTruvidAd()
          ?.getAdManager();
        const imaAdsManager = adManager?.getImaAdsManager();
        if (imaAdsManager) {
          imaAdsManager.setVolume(0);
          player.setCurrentVolume(0);
        }
      } catch (ex) {}
      player.subscribe("onAdEnd", muteAd);
    }
  }, 300);
};
