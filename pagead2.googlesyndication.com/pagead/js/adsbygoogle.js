(function() {
    "use strict";
    const e = () => {
        window.adsbygoogle = {
            loaded: true,
            push: function() {}
        };
        const e = document.querySelectorAll(".adsbygoogle");
        const t = "height:1px!important;max-height:1px!important;max-width:1px!important;width:1px!important;";
        for (let o = 0; o < e.length; o++) {
            const n = `aswift_${o}`;
            if (document.querySelector(`iframe#${n}`) !== null) continue;
            const d = document.createElement("iframe");
            d.id = n;
            d.style = t;
            const a = document.createElement("iframe");
            a.id = `google_ads_frame${o}`;
            d.appendChild(a);
            const i = e[o];
            i.appendChild(d);
            i.setAttribute("data-adsbygoogle-status", "done")
        }
    };
    if (document.querySelectorAll(".adsbygoogle").length === 0 && document.readyState === "loading") window.addEventListener("DOMContentLoaded", e, {
        once: true
    });
    else e()
})();