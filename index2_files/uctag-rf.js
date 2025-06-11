function getEmptyIframe(t, e) {
    var r = document.createElement("iframe");
    return r.setAttribute("frameborder", 0), r.setAttribute("scrolling", "no"), r.setAttribute("marginheight", 0), r.setAttribute("marginwidth", 0), r.setAttribute("TOPMARGIN", 0), r.setAttribute("LEFTMARGIN", 0), r.setAttribute("allowtransparency", "true"), r.setAttribute("width", e), r.setAttribute("height", t), r
};

function parseUrl(t) {
    if(!t || t=='null') return '*';
    var e = document.createElement("a");
    return e.href = decodeURIComponent(t), {
        href: e.href,
        protocol: (e.protocol || "").replace(/:$/, ""),
        hostname: e.hostname,
        port: +e.port,
        pathname: e.pathname.replace(/^(?!\/)/, "/"),
        hash: (e.hash || "").replace(/^#/, ""),
        host: e.host || window.location.host
    }
};

function run(adId, _puburl) {
    var r, o = _puburl, i = window.location, a = parseUrl(o), f = a =='*' ? a : (a.protocol + "://" + a.host), s = location.host, u = i.protocol + "//" + s;

    function c(t) {
        var e = t.message ? "message" : "data", r = {};
        try {
            r = JSON.parse(t[e])
        } catch (t) {
            return
        }
        var n = t.origin || t.originalEvent.origin;
        if (r.message && "Prebid Response" === r.message && (f=='*' || f === n) && r.adId === adId && (r.ad || r.adUrl)) {
            var o = window.document.body, i = r.ad, a = r.adUrl, s = r.width, u = r.height;
            if ("video" === r.mediaType)console.log("Error trying to write ad."); else if (i) {
                var c = getEmptyIframe(r.height, r.width);
                o.appendChild(c), c.contentDocument.open(), c.contentDocument.write(i), c.contentDocument.close()
            } else if (a) {
                var l = getEmptyIframe(u, s);
                l.style.display = "inline", l.style.overflow = "hidden", l.src = a, g.insertElement(l, doc, "body")
            } else console.log("Error trying to write ad. No ad for bid response id: " + id)
        }
    }

    window.addEventListener("message", c, !1), r = JSON.stringify({
        message: "Prebid Request",
        adId: adId,
        adServerDomain: u
    });
    var p = window.parent;
    var pp = p.parent;
    p.postMessage(r, f);
    if(p!=pp)
    pp.postMessage(r, f);
};
var adId = location.search.match(/adid=([^&]*)/)[1];
var pubUri = decodeURIComponent(location.search.match(/ref=([^&]*)/)[1]);
run(adId, pubUri);