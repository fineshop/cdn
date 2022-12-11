//# main.js
/* Dark Mode */
function darkMode() {
  var e = qSel("#mainCont");
  Pu.sLS("webMode", "drK" === Pu.gLS("webMode") ? "lgT" : "drK"), "drK" === Pu.gLS("webMode") ? (e.classList.remove("syD", "lgT"), addCt(e, "drK")) : (e.classList.remove("drK", "syD"), addCt(e, "lgT")), themeColor("themeC")
};
/* Header Scroll */
function headScroll() {
  var e = window.pageYOffset || document.documentElement.scrollTop,
    d = qSel("#header"),
    l = qSel("#mobile-menu");
  20 < e ? (addCt(d, "stick"), addCt(l, "slide")) : (remCt(d, "stick"), remCt(l, "slide"))
}
window.addEventListener("scroll", headScroll);
/* Near Bottom */
/*window.addEventListener("scroll",function(){var t=getid("backTop"),n=getid("qEdit");window.innerHeight+window.pageYOffset>=document.body.offsetHeight-100?(null!=t&&addCt(t,"nBtm"),null!=n&&addCt(n,"nBtm")):(null!=t&&remCt(t,"nBtm"),null!=n&&remCt(n,"nBtm"))});*/
/* Private Blog Notif */
"true" == isPrivateBlog && toastNotif('<i class="check"></i>' + blogTitle + " Blog is Private.");
/* Images */
(function () {
  var imgU = qSell('img.imgThm, .sImg .im, .cmAv .im, .pIm .im, .admIm .im, .sldC .sldIm');
  for (var i = 0; i < imgU.length; i++) {
    if (imgU[i].getAttribute('data-src')) {
      var uImg = imgU[i].getAttribute('data-src');
      if ((uImg.includes('blogspot') == !0 || uImg.includes('googleusercontent') == !0) && (uImg.includes('-pd') == !0 || uImg.includes('-p-k-no-nu') == !0) && uImg.includes('-rw') == !1) {
        imgU[i].setAttribute('data-src', uImg.replace('-nu', '-nu-rw-e30').replace('-pd', '-pd-rw-e30'))
      }
    } else if (imgU[i].getAttribute('src')) {
      var uImg = imgU[i].getAttribute('src');
      if ((uImg.includes('blogspot') == !0 || uImg.includes('googleusercontent') == !0) && uImg.includes('p-k-no-nu') == !0 && uImg.includes('-rw') == !1) {
        imgU[i].setAttribute('data-src', uImg.replace('-nu', '-nu-rw-e30'))
      } else {
        imgU[i].setAttribute('data-src', uImg)
      };
      addCt(imgU[i], 'lazy');
      imgU[i].setAttribute('src', 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
    } else if (imgU[i].getAttribute('data-style')) {
      var uImg = imgU[i].getAttribute('data-style');
      if ((uImg.includes('blogspot') == !0 || uImg.includes('googleusercontent') == !0) && uImg.includes('w60') == !0 && uImg.includes('-rw') == !1) {
        imgU[i].setAttribute('data-style', uImg.replace('w60', 'w60-rw-e30'))
      } else if ((uImg.includes('blogspot') == !0 || uImg.includes('googleusercontent') == !0) && uImg.includes('p-k-no-nu') == !0 && uImg.includes('-rw') == !1) {
        imgU[i].setAttribute('data-style', uImg.replace('-nu', '-nu-rw-e30'))
      } else if ((uImg.includes('=s') == !0 || uImg.includes('/s') == !0) && uImg.includes('-rw') == !1) {
        imgU[i].setAttribute('data-style', uImg.replace(/\/s[0-9]+(\-c)?/, '/s1280-rw-e30').replace(/\=s[0-9]+(\-c)?/, '=s1280-rw-e30'))
      }
    }
  };
})();
/* Defer Img */
Defer.dom('.lazy', 100, 'loaded', null, {
  rootMargin: '1px'
}), 'undefined' != typeof infinite_scroll && infinite_scroll.on('load', function () {
  Defer.dom('.lazy', 100, 'loaded', null, {
    rootMargin: '1px'
  })
});
/* PWA - SW Registration */
! function (a) {
  "navigator" in window && "serviceWorker" in window.navigator && document.addEventListener("DOMContentLoaded", () => {
    navigator.serviceWorker.register(a.source, {
      scope: a.scope
    }).then(a => {
      console.groupCollapsed("%c[PWA] SW Registration Successuful.", "color:#43a047"), console.log("[SW] Source:", "/web/cdn/app/pwa/sw.js"), console.log("[SW] Scope:", a.scope), console.groupEnd()
    }).catch(a => {
      console.groupCollapsed("%c[PWA] SW Registration Failed.", "color:#d32f2f"), console.log("[SW] Error: ", a), console.groupEnd()
    })
  })
}({
  source: "/cdn/app/pwa/sw.js",
  scope: "/"
});
/* Material Icons */
qSell('i.mI').forEach(el => addCt(el, 'notranslate'));
/* Link sites toast */
if (getPram('ref') === 'HouseOfBlogger' || getPram('ref') === 'houseofblogger') {
  setTimeout(() => {
    toastNotif(getPram('message') ? getPram('message') : 'House Of Blogger welcomes you on Fineshop Design!')
  }, getPram('time') ? Number(getPram('time')) : 4000)
}
/* check if adblocker */
let fAd = document.createElement("div");
fAd.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads", fAd.style.height = "1px", document.body.appendChild(fAd);
let x_width = fAd.offsetHeight,
  msg = document.getElementById("msg");
!x_width && adError();

/* Comment */
for (let n = qSell(".cmBd .cmCo"), o = 0; o < n.length; o++) {
  let l = n[o].innerHTML,
    e = l.match(/@\S+/g);
  null != e && e.forEach(e => {
    l = l.replace(new RegExp(e, "g"), "<code style='padding:2px 3px;font-family:inherit'>" + e + "</code>")
  }), n[o].innerHTML = l
};
if (qSel('.aScr') !== null) {
  qSel('.aScr').addEventListener('click', () => {
    setTimeout(() => {
      qSel('.safeGoL').scrollIntoView({
        behaviour: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }, 200)
  })
}
/* Adsense Max Click */
! function () {
  function o(e, n) {
    return null != (e = Pu.gC(e)) && parseInt(e) >= n
  }
  var s = "ADS_FD",
    e = ".adsbygoogle";
  o(s, 3) && (PuSet.adsenseAds.publisherId = ""), 0 < qSell(e).length && qSell(e).forEach(e => {
    e.addEventListener("click", function () {
      var e, n;
      o(s, 3) ? (fixedNotif("Please don&#39;t spam, if you don&#39;t want to support us. (error: Ads Max Clicked)"), mxAdCl()) : (e = s, null != (n = Pu.gC(e)) ? (n = parseInt(n) + 1, Pu.sC(e, n.toString(), {
        secure: !0,
        "max-age": 3600
      })) : Pu.sC(e, "1", {
        secure: !0,
        "max-age": 3600
      }))
    })
  }), window.addEventListener("blur", function () {
    o(s, 3) && (mxAdCl());
    for (var e, n, l = qSell(".adsbygoogle iframe"), t = 0; t < l.length; t++) document.activeElement == l[t] && (o(s, 3) ? (fixedNotif("Please don&#39;t spam, if you don&#39;t want to support us. (error: Ads Max Clicked)"), Pu.sC('MAX_CLICKED', 'YES', {
      secure: !0,
      "max-age": 3600,
      "httpOnly": !0
    }), mxAdCl()) : (e = s, null != (n = Pu.gC(e)) ? (n = parseInt(n) + 1, Pu.sC(e, n.toString(), {
      secure: !0,
      "max-age": 3600
    })) : Pu.sC(e, "1", {
      secure: !0,
      "max-age": 3600
    })))
  })
}();
/* Trigger Push Ads */
pushAds();