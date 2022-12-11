/** Main JS */
/* Dark Mode */ function darkMode(){var e=qSel("#mainCont");Pu.sLS("webMode","drK"===Pu.gLS("webMode")?"lgT":"drK"),"drK"===Pu.gLS("webMode")?(e.classList.remove("syD","lgT"),addCt(e,"drK")):(e.classList.remove("drK","syD"),addCt(e,"lgT")),themeColor("themeC")};
/* Header Scroll */ function headScroll(){var e=window.pageYOffset||document.documentElement.scrollTop,d=qSel("#header"),l=qSel("#mobile-menu");20<e?(addCt(d,"stick"),addCt(l,"slide")):(remCt(d,"stick"),remCt(l,"slide"))}window.addEventListener("scroll",headScroll);
/* Near Bottom */ /*window.addEventListener("scroll",function(){var t=getid("backTop"),n=getid("qEdit");window.innerHeight+window.pageYOffset>=document.body.offsetHeight-100?(null!=t&&addCt(t,"nBtm"),null!=n&&addCt(n,"nBtm")):(null!=t&&remCt(t,"nBtm"),null!=n&&remCt(n,"nBtm"))});*/ /* Private Blog Notif */ "true"==isPrivateBlog&&toastNotif('<i class="check"></i>'+blogTitle+" Blog is Private.");
/* Images */ (function(){var imgU=qSell('img.imgThm, .sImg .im, .cmAv .im, .pIm .im, .admIm .im, .sldC .sldIm');for(var i=0;i<imgU.length;i++){if(imgU[i].getAttribute('data-src')){var uImg=imgU[i].getAttribute('data-src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&(uImg.includes('-pd')==!0||uImg.includes('-p-k-no-nu')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30').replace('-pd','-pd-rw-e30'))}}else if(imgU[i].getAttribute('src')){var uImg=imgU[i].getAttribute('src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30'))}else{imgU[i].setAttribute('data-src',uImg)};addCt(imgU[i],'lazy');imgU[i].setAttribute('src','data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')}else if(imgU[i].getAttribute('data-style')){var uImg=imgU[i].getAttribute('data-style');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('w60')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('w60','w60-rw-e30'))}else if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('-nu','-nu-rw-e30'))}else if((uImg.includes('=s')==!0||uImg.includes('/s')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace(/\/s[0-9]+(\-c)?/,'/s1280-rw-e30').replace(/\=s[0-9]+(\-c)?/,'=s1280-rw-e30'))}}};})();
/* Defer Img */ Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}),'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',function(){Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}) });
/* PWA - SW Registration */ !function(a){"navigator"in window&&"serviceWorker"in window.navigator&&document.addEventListener("DOMContentLoaded",()=>{navigator.serviceWorker.register(a.source,{scope:a.scope}).then(a=>{console.groupCollapsed("%c[PWA] SW Registration Successuful.","color:#43a047"),console.log("[SW] Source:","/web/cdn/app/pwa/sw.js"),console.log("[SW] Scope:",a.scope),console.groupEnd()}).catch(a=>{console.groupCollapsed("%c[PWA] SW Registration Failed.","color:#d32f2f"),console.log("[SW] Error: ",a),console.groupEnd()})})}({source:"/cdn/app/pwa/sw.js",scope:"/"});
/* Template Settings*/ var PuSet={license:{key:licenseKey},realViews:{databaseUrl:"https://plus-ui-default-rtdb.firebaseio.com",abbreviation:"true"},noInternet:{enablePopup:"true",enableToast:"true",offlineMes:"You are Offline",onlineMes:"You are Online"},preCopy:{copiedMes:"<i class='clipboard'></i>Copied to Clipboard"},cookieCon:{consentMaxAge:"2592000",cookieError:"Error: Cookie can&#039;t be set! Please unblock this site from the cookie setting of your browser."},gTranslate:{pageLang:"en",includedLangs:"en,hi,gu,bn,ta,te,mr,ne",autoDisplay:"true",multiLangPage:"true"},bookmark:{bmTitle:"Bookmark Posts",closeText:"Close",noBmIcon:"<svg class='line' viewBox='0 0 24 24'><g transform='translate(3.650100, 2.749900)'><path d='M16.51,5.55 L10.84,0.15 C10.11,0.05 9.29,0 8.39,0 C2.1,0 -1.95399252e-14,2.32 -1.95399252e-14,9.25 C-1.95399252e-14,16.19 2.1,18.5 8.39,18.5 C14.69,18.5 16.79,16.19 16.79,9.25 C16.79,7.83 16.7,6.6 16.51,5.55 Z'/><path d='M10.2839,0.0827 L10.2839,2.7437 C10.2839,4.6017 11.7899,6.1067 13.6479,6.1067 L16.5989,6.1067'/><line class='svgC' x1='10.6623' y1='10.2306' x2='5.7623' y2='10.2306'/><line class='svgC' x1='8.2131' y1='12.6808' x2='8.2131' y2='7.7808'/></g></svg>",noBmMes:"The list of favorite articles does not exist yet...",noBmAll:"View all articles",noBmLink:"/search",delIcon:"<svg class='line' viewBox='0 0 24 24'><g transform='translate(3.500000, 2.000000)'><path d='M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524'/><line x1='16.8651429' y1='4.47980952' x2='0.714666667' y2='4.47980952'/><path d='M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952'/></g></svg>",addedNtf:"<i class='check'></i>Bookmarked",removedNtf:"<i class='del'></i>Removed from Bookmarks"},adsenseAds:{publisherId:6450536625798530,antiAdBClose:"false",ignoreMaxAge:"86400",loadType:"defer"},analytics:{propertyID:analyticsID},fontFamily:{mobileFonts:"@font-face{font-family:'Google Sans Text';font-style:normal;font-weight:400;font-display:swap;src:local('Google Sans Text'),local('Google-Sans-Text'),url(https://fonts.gstatic.com/s/googlesanstext/v16/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEp2iw.woff2) format('woff2')} @font-face{font-family:'Google Sans Text';font-style:normal;font-weight:700;font-display:swap;src:local('Google Sans Text'),local('Google-Sans-Text'),url(https://fonts.gstatic.com/s/googlesanstext/v16/5aUp9-KzpRiLCAt4Unrc-xIKmCU5oPFTnmhjtg.woff2) format('woff2')} @font-face{font-family:'Google Sans Mono';font-style:normal;font-weight:400;font-display:swap;src:local('Google Sans Mono'),local('Google-Sans-Mono'),url(https://fonts.gstatic.com/s/googlesansmono/v4/P5sUzYWFYtnZ_Cg-t0Uq_rfivrdYH4RE8-pZ5gQ1abT53wVQGrk.woff2) format('woff2')}"}};
/* Material Icons */ qSell('i.mI').forEach(el => addCt(el, 'notranslate'));
/* Link sites toast */ if(getPram('ref') === 'HouseOfBlogger' || getPram('ref') === 'houseofblogger'){setTimeout(() => {toastNotif(getPram('message') ? getPram('message') : 'House Of Blogger welcomes you on Fineshop Design!')}, getPram('time') ? Number(getPram('time')) : 4000)}
/* check if adblocker */ let fAd=document.createElement("div");fAd.className="textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads",fAd.style.height="1px",document.body.appendChild(fAd);let x_width=fAd.offsetHeight,msg=document.getElementById("msg");!x_width&&adError();
/* Safelink Settings */ var aSl={par:"url",hcd:5000,gcd:15000,nwt:false,sby:"published",mxr:20,pwt:"Almost Ready..."};
/* Comment */
for(let n=qSell(".cmBd .cmCo"),o=0;o<n.length;o++){let l=n[o].innerHTML,e=l.match(/@\S+/g);null!=e&&e.forEach(e=>{l=l.replace(new RegExp(e,"g"),"<code style='padding:2px 3px;font-family:inherit'>"+e+"</code>")}),n[o].innerHTML=l};
/* Safelink */ function _0x1541(t,n){var e=_0x4a4c();return(_0x1541=function(t,n){return e[t=+t]})(t,n)}function _0x4a4c(){var t=[".safeL","location","hash","includes","split","get","length","click","preventDefault","target","getAttribute","href","par","nwt","open","_blank","dec","replace","feeds/posts/summary?alt=json&orderby=","&max-results=","sSS","toString","indexOf","history","replaceState","title","feed","entry","floor","random","alternate","link","hmVrfy","hidden","#hmVrfy .pstL","alt","No post was found","SAFE_L","true","gSS","gcd",".safeGoL","setAttribute","vsbl","innerHTML","pwt","rSS"];return(_0x4a4c=function(){return t})()}!function(){var t=224,n=230,e=255,r=236,a=229,l=240,i=246,u=257,o=249,s=236,c=94,S=263,d=242,f=243,x=225,_=244,h=245,v=103,g=89,w=239,p=246,b=81,m=88,L=248,q=96,y=86,C=275,P=261,A=73,E=72,M=264,k=261,T=252,G=71,N=70,U=233,j=235,F=237,I=81,O=69,V=108,B=102,D=68,H=218,J=231,R=329,W=66,z=278,K=52,Q=440,X=462,Y=223,Z=439,$=462,tt=926,nt=916,et=416,rt=249,at=238,lt=418,it=724,ut=737,ot=35,st=53,ct=736,St=755,dt=735,ft=777,xt=757,_t=741,ht=757,vt=38,gt=45,wt=751,pt=732,bt=752,mt=731,Lt=739,qt=730,yt=729,Ct=22,Pt=8,At=763,Et=770,Mt=754,kt=747,Tt=112,Gt=116,Nt=758,Ut=753,jt=499,Ft=477,It=504,Ot=514,Vt=224,Bt=111;function Dt(t,n){return _0x1541(n- -Bt,t)}function Ht(t,n){return _0x1541(n-Vt,t)}var Jt,Rt,Wt,zt,Kt=qSell(Ht(208,t));function Qt(t){var e=498;const n=window[r(jt,Ft)][r(500,483)];function r(t,n){return _0x1541(t-e,n)}if(n&&n[r(501,It)]("=")&&n[r(502,518)](/=(.*)/s)[0]=="#?"+t&&""!=n.split(/=(.*)/s)[1])return window[r(499,Ot)].hash.split(/=(.*)/s)[1]}function Xt(t){var n=window[_0x1541(Gt-115,Tt)].search;const e=new URLSearchParams(n);return e.has(t)?e[_0x1541(Nt-753,Ut)](t):void 0}0<Kt[Ht(245,n)]&&Kt.forEach(t=>{var a=448,l=449,i=447,u=427,o=160,s=144,c=138,S=422,d=147,f=134,x=454,_=441,h=465,v=455,g=456;t.addEventListener(_0x1541(Mt-kt,Et),function(t){function n(t,n){return _0x1541(n- -147,t)}function e(t,n){return _0x1541(t- -g,n)}t[e(-a,-l)]();var r=t[e(-i,-u)][n(-158,-137)](n(-o,-136)),t=t[n(-s,-c)].getAttribute("data-href");null!=(t=null!=r&&"/"!=r&&"#"!=r&&""!=r?r:null!=t&&"#"!=t&&""!=t?t:void 0)&&(t=b64.enc(t),t=blogUrl+"#?"+aSl[e(-444,-S)]+"="+t,1==aSl[n(-d,-f)]?window[e(-442,-x)](t,e(-_,-h)):window.location[e(-445,-v)]=t)})}),null==Qt(aSl[Ht(e,r)])&&null==Xt(aSl.par)||(Kt=null!=Qt(aSl[Dt(-98,-99)])?b64[Ht(a,l)](Qt(aSl[Ht(i,r)])):b64[Ht(u,l)](Xt(aSl[Ht(o,s)])),Jt=blogUrl[Dt(-92,-c)](/.*?:\/\//g,"//")+Ht(S,d)+aSl.sby+Ht(S,f)+aSl.mxr,Pu[Ht(x,_)]("SAFE_L",Kt),0<(Kt=window[Dt(-129,-110)][Ht(t,h)]())[Dt(-v,-g)]("#")&&(Kt=Kt.substring(0,Kt[Ht(w,p)]("#")),window[Dt(-b,-m)][Ht(242,L)]({},document[Dt(-q,-y)],Kt)),Pu.gAj({url:Jt,async:!0,success:function(t){var n=956,e=713;function r(t,n){return _0x1541(n- -At,t)}function a(t,n){return _0x1541(t-Pt,n)}if((t=JSON.parse(t)[r(-it,-ut)]).entry&&0!==t[a(ot,st)].length){for(var l,i,u=(t=t[r(-725,-ct)])[Math[r(-St,-dt)](Math[a(37,49)]()*t[r(-ft,-xt)])],o=0,s=u.link[r(-_t,-ht)];o<s;o++)a(vt,gt)==(i=u[r(-wt,-pt)][o]).rel&&(l=i.href);remCt(getid(r(-bt,-mt)),r(-Lt,-qt)),qSel(r(-749,-yt)).href=l,setTimeout(function(){addCt(getid(_0x1541(-961- -993,-n)),_0x1541(-678- -e,-657))},aSl.hcd)}else toastNotif(a(44,Ct))}})),null!=Pu.gSS(Ht(C,P))&&Dt(-69,-A)==isPost&&(Jt=Pu[Dt(-60,-E)](Ht(M,k)),Rt=Math[Ht(239,T)](aSl[Dt(-E,-G)]/1e3),Wt=Rt,qSel(Dt(-74,-N))[Ht(U,j)]=Jt,1==aSl[Ht(243,F)]&&qSel(".safeGoL")[Dt(-I,-O)](Dt(-V,-B),Ht(t,239)),addCt(getid("aSlCnt"),Dt(-49,-D)),zt=setInterval(function(){var t=193,n=246,e=--Wt/Rt*100;function r(t,n){return _0x1541(n-lt,t)}qSel(".aSlW").style.width=100-e+"%",qSel(".aSlCd")[r(Q,X)]=Math[_0x1541(-218- -n,-Y)](Wt),Wt<=0&&(clearInterval(zt),qSel(".aSlCd")[r(Z,$)]="0",setTimeout(()=>{qSel(".aSlC")[_0x1541(et-372,396)]=aSl[_0x1541(at-t,rt)]},1e3),setTimeout(()=>{var t=959;addCt(qSel(".aSlB"),_0x1541(-nt- -t,-tt)),addCt(getid("aSlCnt"),"alt")},4e3))},1e3),qSel(".safeGoL").addEventListener(Ht(H,J),function(){Pu[_0x1541(324-z,R)](_0x1541(89-K,W))}))}(); if(qSel('.aScr')!==null){qSel('.aScr').addEventListener('click', () =>{setTimeout(() =>{qSel('.safeGoL').scrollIntoView({behaviour:'smooth', block:'center', inline:'center'})},200)})}
/* Adsense Max Click */ !function(){function o(e,n){return null!=(e=Pu.gC(e))&&parseInt(e)>=n}var s="ADS_FD",e=".adsbygoogle";o(s,3)&&(PuSet.adsenseAds.publisherId=""),0<qSell(e).length&&qSell(e).forEach(e=>{e.addEventListener("click",function(){var e,n;o(s,3)?(fixedNotif("Please don&#39;t spam, if you don&#39;t want to support us. (error: Ads Max Clicked)"),mxAdCl()):(e=s,null!=(n=Pu.gC(e))?(n=parseInt(n)+1,Pu.sC(e,n.toString(),{secure:!0,"max-age":3600})):Pu.sC(e,"1",{secure:!0,"max-age":3600}))})}),window.addEventListener("blur",function(){o(s,3)&&(mxAdCl());for(var e,n,l=qSell(".adsbygoogle iframe"),t=0;t<l.length;t++)document.activeElement==l[t]&&(o(s,3)?(fixedNotif("Please don&#39;t spam, if you don&#39;t want to support us. (error: Ads Max Clicked)"),Pu.sC('MAX_CLICKED','YES',{secure:!0,"max-age":3600,"httpOnly":!0}),mxAdCl()):(e=s,null!=(n=Pu.gC(e))?(n=parseInt(n)+1,Pu.sC(e,n.toString(),{secure:!0,"max-age":3600})):Pu.sC(e,"1",{secure:!0,"max-age":3600})))})}();
/* Lazy js */ function lazyCustomJs(){
ldJs("//cdn.jsdelivr.net/gh/fineshopdesign/cdn@assets/categoryPosts/categoryPosts.min.js","ctgry_js",!0,"body", function () {
getid('HTML2')!=null && (ctgryPst(ctgryLb1, '#HTML2 .ctgry', 6, 600, 200, true));
getid('HTML3')!=null && (ctgryPst(ctgryLb2, '#HTML3 .ctgry', 6, 600, 200, true));
});
"true"==isSingleItem&&0<qSell("div.pre.fd").length&&ldCss("https://www.fineshopdesign.com/cdn/assets/pre/pre.min.css","pre_css",function(){ldJs("https://www.fineshopdesign.com/cdn/assets/pre/pre1.min.js","pre_js",!0,"body")});
/*if(typeof showAds!='undefined'&&isPost=="true"&&isPreview=="false"){var td=new Date();if((td.getDay()%2===0)&&PuSet.adsenseAds.publisherId!==""){(()=>{var adu=[2617042980,2684491596,7060116223,2921898342,3370860020];if(null==Pu.gC("G_CLICK")){var s=document.createElement("div");s.classList.add("gAd"),s.innerHTML="<div class='gCl hidden'><svg class='line' viewBox='0 0 24 24'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg><div class='clDt'>"+Pu.de('G0uiK0lfb07frFjoCTNpdkB3bkBab043mZ45XLBcds68d0ovXk7fPNQ5dJBydqGfrFjoCTWorsYlb8Bodcp=')+"</div></div><div class='gCn'><ins class='adsbygoogle gAdC' style='display:block' data-ad-client='ca-pub-6450536625798530' data-ad-slot='"+Pu.rdm(adu)+"' data-ad-format='auto' data-full-width-responsive='false'></ins></div>",qSel("body").appendChild(s),(gAdC=window.adsbygoogle||[]).push({});const l=s.querySelector("ins.gAdC");var a=()=>{Pu.sC("G_CLICK",1,{secure:1,"max-age":43200}),toastNotif(Pu.de('YsYkmZX4mZ4qCJoyrUCfK0uiK0lvOc7=')),setTimeout(()=>{s.remove(),toastNotif(Pu.de('G0uiK0lfYsYkmZXiXZGvOc7='))},3e3)};l.addEventListener("click",()=>{a()});let t=setInterval(()=>{var e=s.querySelector("ins.gAdC iframe");"unfilled"===l.getAttribute("data-ad-status")&&(clearInterval(t),s.remove()),null!==e&&"filled"===l.getAttribute("data-ad-status")&&(clearInterval(t),s.querySelector(".gCl").classList.remove("hidden"),window.addEventListener("blur",()=>{document.activeElement==e&&a()}))},100)}})();}}*/
/*if(isPost=="false"&&isPreview=="false"){(()=>{let e=document.getElementsByTagName("body")[0],t=document.getElementsByTagName("script")[0],i=document.createElement("div");i.id="fb-chatElem",i.innerHTML="<div id='fb-root'></div><div id='fb-customer-chat' class='fb-customerchat' page_id='109863708244210' attribution='biz_inbox'></div>",window.fbAsyncInit=()=>{FB.init({xfbml:!0,version:"v14.0"})};let n=document.createElement("script");n.id="fb-sdk",n.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",e.appendChild(i),t.parentNode.insertBefore(n,t)})()}*/

    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "e5txsdmymw");

};
/* Scroll js */ function scrollCustomJs(){};
/* Template js */ eval(function(p,l,u,s,f,d){while(u--){if(s[u]){p=p.replace(new RegExp('\\b'+u+'\\b','g'),s[u])}}return p}('16 115(11,14){22 20(11- -88,14)}!16(){16 11(11,14){22 20(14-60,11)}34 14=77();16 19(11,14){22 20(11- -601,14)}130(;;)50{74(354==+41(11(105,60))+-41(11(57,61))/2+41(19(-179,-217))/3+41(19(-357,-358))/4*(-41(11(24,64))/5)+41(19(-209,-163))/6+-41(11(96,66))/7*(-41(19(-211,-163))/8)+41(11(108,68))/9)359;14.90(14.137())}51(11){14.90(14.137())}}();361 25=15.17("363");16 364(){16 11(11,14){22 20(11- -353,14)}16 14(11,14){22 20(14-365,11)}83 155[14(626,147)][11(-367,-368)]({369:30[11(-109,-370)].372,373:30[11(-109,-374)][11(-366,-139)],162:30[11(-109,-178)].162,348:30.202.335,347:155[14(322,147)][14(619,323)].324[11(-139,-171)]},"325")}16 330(){16 11(11,14){22 20(14-382,11)}16 14(11,14){22 20(11- -404,14)}74(""!=30[11(332,396)][14(-389,-350)]&&29!=331(11(430,398))&&0<70[11(419,399)][14(-386,-343)])130(34 19=63(".215-230"),23=70[11(417,401)](),39=0;39<19[11(468,400)];39++){34 47=19[39],46=47.119(11(439,402));(46=23[14(-383,-328)]("227"+84+11(420,404)+46))[11(422,405)]("189",16(23,39){22 16(11){16 14(11,14){22 20(11-290,14)}16 19(11,14){22 20(11-474,14)}0<(11=11[19(498,445)]()?11[19(499,513)]():0)&&(19(500,445)==30[19(488,515)].226?23.79(14(317,345),15.172(11)):23[19(502,525)](14(317,280),11),104(23,19(503,515))),14(316,356)==23[14(320,341)](19(505,543))&&(23.79(19(505,490),!1),11=41(11)+1,39.225(11))}}(47,46))}}16 20(11,14){34 19=77();22(20=16(11,14){22 19[11=+11]})(11,14)}16 175(){16 11(11,14){22 20(11-592,14)}29!=31(11(624,617))&&333(31(20(32,319)),11(625,564))}16 53(11,14){22 20(11-321,14)}30[15.17(53(355,329))][15.17(115(-594,-568))];34 102=[];16 97(){16 11(11,14){22 20(14-334,11)}34 14,19;16 23(11,14){22 20(11- -120,14)}102[11(336,204)](1),36(25+15.17("337="),11(339,340),!1,23(-82,-87),16(){16 11(11,14){22 20(14- -342,11)}29!=31(11(-344,-346))&&52(25+15.17(11(-375,-171)),"352-48")}),89(16(){34 11,45=15[15.17("377=")](23(99,153));16 14(11,14){22 20(14-416,11)}16 75(){16 11(11,14){22 20(11-513,14)}37[15.17(20(42,421))](15.17(11(556,562))),71[15.17(11(557,520))][15.17("423")]="",37[15.17("54=")][15.17("91==")]=45}50{11=15.17(30[15.17(23(157,146))][15.17(14(181,424))])}51(11){50{75()}51(11){37[15.17("54=")][15.17(23(116,157))]=45}}34 19=11[23(112,158)]("-"),208=19[0];16 23(11,14){22 20(14-112,11)}74(111 0===(19=19[1]))50{75()}51(11){37[15.17("54=")][15.17(14(425,426))]=45}207=[19],15[15.17(14(427,129))]({428:15.17("418==")+15.17("429==")+15.17(14(194,194))+15.17("432==")+15.17("433"),434:!0,435:16(11){16 14(11,14){22 20(11-136,14)}34 19=436[15.17("437=")](11)[15.17(14(185,157))][207];74(111 0===19)50{75()}51(11){37[15.17("54=")][15.17("91==")]=45}34 23=19[15.17(14(186,131))],39=19[15.17("440==")],47=19[15.17(46(431,415))];16 46(11,14){22 20(14-393,11)}50{74(84+208===23+39&&0!=16(11){16 14(11,14){22 20(14- -312,11)}16 19(11,14){22 20(14-608,11)}74(-1==37[15.17("54=")][15.17("168=")][15.17(14(-257,-260))](15.17(19(621,182)))&&-1==37[15.17(14(-312,-258))][15.17(14(-273,-257))][15.17("138==")](15.17(19(380,381))))22 11==37[15.17(14(-262,-258))][15.17("384=")]}(47))22 111 385[15.17("387")](15.17("388==")+19[15.17(14(193,128))]+15.17(46(391,379))+19[15.17("154")]);50{75()}51(11){37[15.17("54=")][15.17(46(392,397))]=45}}51(11){50{75()}51(11){37[15.17("54=")][15.17("91==")]=45}}}})},183),29!=407 30[15.17(11(209,409))][15.17(11(315,411))]&&(11(412,413)==188&&36(25+15.17("378=="),23(-61,-3),!0,11(210,191)),36(25+15.17("318"),11(299,314),!0,11(210,191)),"132"==188&&(14=63(11(212,183)),19=63(11(251,252)),0<14[11(181,129)]&&0<19[11(179,129)]&&36(25+15.17(23(-57,-57)),11(248,255),!0,"113",16(){52(25+15.17("259=="),"161-48",16(){16 11(11,14){22 20(14- -607,11)}16 14(11,14){22 20(11-178,14)}29!=31(11(-541,-542))&&83 174({199:31(14(261,263)),169:31(14(264,246))})[14(265,266)](),29!=31(11(-555,-539))&&83 174({199:31(11(-519,-541)),169:31("#122")})[11(-558,-540)]()})})),89(16(){16 11(){165.90(256)}16 14(11,14){22 20(11-533,14)}16 19(11,14){22 20(11- -87,14)}34 23;29!=31(".151")&&36(25+15.17("247="),14(602,587),!0,"59",16(){205(16(){16 11(11,14){22 20(14- -420,11)}29!=245(11(-338,-350))[0]&&104(31(11(-376,-349)),"166")},235)}),52(15.17("233")+84,"234-48",16(){34 11=31(20(72,-237));29!=11&&"238"==37.239(11)[20(73,523)]&&175()}),0<63(".236")[14(551,538)]&&36(25+15.17("240=="),"176-27",!0,14(571,241),16(){52(25+15.17("242"),"176-48")}),29!=31(19(-13,-58))&&36(25+15.17(19(-12,-43)),"243-27",!0,19(-49,-8),16(){52(25+15.17(20(76,-553)),"177-48",16(){16 11(11,14){22 20(14- -244,11)}36(25+15.17(11(-267,-612)),"177-27",!0,11(-180,-269))})}),0<63("148.103 121").93&&36(25+15.17(14(611,623)),14(612,293),!0,"59",16(){63(20(80,296))[20(81,184)](11=>{297[20(82,149)](11)})}),14(559,492)==298&&19(-61,-100)!=268&&(29!=31(19(-4,-21))&&52(25+15.17(19(-3,-28)),19(-2,18),16(){36(25+15.17("300="),20(86,-550),!0,20(38,376))}),29!=31(19(0,1))&&36(25+15.17(14(621,301)),"144-27",!0,"59"),29!=31(14(622,579))&&36(25+15.17(14(623,303)),19(4,-44),!0,"59")),""!=30[19(5,66)][19(6,-26)]&&((23=71[19(7,2)](14(628,295))).442="127://126.304.125/306/27?117="+30[19(5,-55)][14(626,579)],71[19(-49,-112)][14(88,611)](23),37[14(106,573)]=37[14(106,307)]||[],11("27",83 308),11(14(309,590),30[14(625,124)].156)),""!=30[19(-73,-72)].110&&36(19(12,-40),"197-164",!0,"113",16(){16 11(11,14){22 20(14- -124,11)}36(11(-606,-560),11(-310,-311),!0,20(101,313),16(){16 11(11,14){22 20(14-557,11)}34 14=63(11(305,180)),19={};16 23(11,14){22 20(11-292,14)}19[11(619,124)]=30.200.110,70[11(281,182)](19);130(34 39=70[23(190,291)](),47=0;47<14[11(589,575)];47++){34 46=14[47],45=46[23(271,213)](23(184,272));(45=39.196(23(274,275)+84+23(277,212)+45)).195("189",16(23,39){22 16(11){16 14(11,14){22 20(11-523,14)}16 19(11,14){22 20(14-279,11)}0<(11=11[14(547,523)]()?11.192():0)&&(19(282,283)==30[19(284,190)][14(88,616)]?23.79(14(550,587),15.172(11)):23[14(551,556)](19(204,285),11),104(23,14(552,564))),"132"==23.119(19(213,211))&&(23[14(551,568)](14(554,559),!1),11=41(11)+1,39[19(287,288)](11))}}(46,45))}})})},100),205(16(){16 11(11,14){22 20(14-583,11)}29!=31(20(108,-410))&&36(25+15.17(11(444,475)),11(610,609),!0,11(605,621),16(){16 11(11,14){22 20(14- -438,11)}52(25+15.17(11(-395,-327)),11(-276,-326))})},100),23(-94,-133)!=232&&(23(-7,33)==30.228[11(627,107)]?36(25+15.17(11(620,203)),"229-27",!0,23(-82,-131)):23(-4,-10)==30[23(-3,33)][11(614,107)]&&89.27(25+15.17(11(618,203)),11(615,613))),603())}34 95=[];16 92(){34 11,14;16 19(11,14){22 20(11-351,14)}16 23(11,14){22 20(14- -186,11)}95[23(-198,-150)](1),23(-120,-160)==604&&""!=30[23(-108,-67)][23(-35,-66)]&&((14=(11=71)[19(445,490)](23(-96,-65))).117="518",14[23(-49,-64)]=30[23(-101,-67)].220,11[19(474,481)](23(-98,-85))[0][19(447,443)](14))}16 77(){34 11=["600","479","231","480","482","222","223","483","221","#485","487","489=","224-48","491","494","114","478","495","504","506","507","508","509","510","511","512","514","202","497","476","200","110","197-463","449","93","214","118-117","196","/452","195","453","192","132","118-454","79","166","119","118-455","#459","460","461==","448","90","462-27","59","#464","465=","466","467=","469==","470==","91==","471","472","473==","516==","477=","154","138==","517==","54=","168=","566","569==","570==","121-27","572-27","#167, #122","#69 574, #69 576, #69 577, #69 580, #69 581, #69 582","567=","161-27","#167","#69","586","#122","591-27","593-595-596-597",".151","#598","599","#585","565==","534","563==","522==","103-27","148.103 121","527","528","#123","529==","123-48","123-27","#144","531==","#159","521=","159-27","535","156","537","544","545","165","548","127://126.145.125/140/8.4.2/70-164.27","127://126.145.125/140/8.4.2/70-214.27","113",".215-230","561","549","227","226","225",".546","536","216-27","532=","216-48","530","526","218","524","228","229-27","588","220","584"];22(77=16(){22 11})()}34 78=!1;37[53(445,493)](53(446,484),16(){16 11(11,14){22 20(14-56,11)}16 14(11,14){22 20(14-276,11)}(0!=71[14(350,402)].222&&!1===78||0!=71[11(62,94)][14(390,403)]&&!1===78)&&(0==102[14(273,294)]&&29==15.114(14(360,404))&&(97(),15[14(450,405)]("223",1)),0==95.93&&29==15.114("221")&&(92(),15[14(371,405)](14(351,406),1)),29!=31(11(201,187))&&29==15.441(14(362,408))&&89(16(){16 11(11,14){22 20(14-496,11)}52(25+15.17(11(286,88)),11(578,106),16(){36(25+15.17(20(135,456)),"224-27",!0,20(38,-486))})},270),278(),14(289,302)!=232&&14(408,401)==30[11(152,173)][11(206,170)]&&36(25+15.17("218"),14(456,394),!0,"59"),78=!0)},!0),31("59").231(53(457,404),11=>{16 14(11,14){22 20(14-217,11)}16 19(11,14){22 20(14-6,11)}0==102.93&&29==15[14(254,253)](19(153,134))&&(97(),15[14(250,219)](14(107,249),1)),0==95[19(-2,24)]&&29==15[19(141,143)](19(100,136))&&(92(),15[14(414,219)](19(142,136),1))}),15[53(458,405)](115(-501,-555))&&97(),15[53(458,406)](53(451,398))&&92();',10,629,'|||||||||||e|||t|Pu|function|de||n|_0x4da7||return|u||baseUrl||js||null|PuSet|qSel|||var||ldJs|window||d||parseInt||||s|r|a|css||try|catch|ldCss|_0x3a7735|bF6aKUWib07|||||body||||qSell||||||postBody|firebase|document|||if|o||_0x5fb4|lazyJs|setAttribute||||new|blogID||||629|Defer|push|mJAoXf|loadLzJsM|length||aryLzJsM||loadLzJs|||||aryLzJs|hl|remCt||630|1053||736|databaseUrl|void||head|gLS|_0x4fec58||id|data|getAttribute||pre|autoToc|rPst|660|com|www|https||957|for||true|||||shift|mZ4pXUjIXf|734|firebasejs||||aRel|gstatic||674|div|||gTrans|||rUAl|google|propertyID|||aChp||toc|autoDisplay|936|app|dataLayer|hidden|postToc|dFN3mF4jbZV|to||796|abv||TableOfContents|blogAdmin|cdb|msp|753|918|659|929|661|1e3|897||||isSingleItem|value|896|977|val||958|once|ref|fb||from|realViews||gTranslate|1054|975|setTimeout||str|l|915|981|913|968|937|database|pu|bkm|960|O0ixO3Npd0Yvd0YBXJSvbZovOsix|1089|mobileFonts|Lz_JsM|scrollTop|Lz_Js|ck|set|abbreviation|BlogID_|adsenseAds|adstr|views|addEventListener|isError|mJW3dJS9Ok68r8dvKsuyX0rodc4ab03yXJovOZQxdk6jrUWeb8AitsN3mZ6vOsQxdx63KUAqXUWDbF6qLVG6|auth|2e3|dldCo|831|block|getComputedStyle|O0ixO3QyrZ43XF68bpWyr04lb0NpGs67Os5ibc4gdz|632|O0Qxdk6Rb8YvrFWyr04Tb8rvbF6jXTAytD4hmZ7vK8Qx|vue|689|getclass|850|O0uiKc63dsNvd0ujrFVvmqS|1027|1088|1083|956|1001|1097|1118|1003|arguments|||O0Qxdk6VKZAlXV6sG06vrFYvrJSvbZovOsQxdz||819||772|818|820|879|639|isPrivateBlog|651|5e3|907|953||982|952||899|scrollCustomJs|882||724|931|908|888|909|683|1008|989|||842|877|635||697|874|hljs|isPost|969|O0ixO5AobFN3XZWGb8Q3dk4hmZ7vmqS|650||687|googletagmanager|649|gtag|690|Date|631|672|644||830|999|928|||O0ixO34yLZ43XUAvXUWUmZWqXUGvbZovOsix|782|||685|675|InlineLayout|google_translate_element|||||puViews|getid||addCt|939|multiLangPage|1043|O0ixO3NpXFo3mZ6vKZuPKUXjd0QkmUB3dk4hmZ7vmqS||919|976||836||758||797|layout|multilanguagePage||||thmC|747|563569|||917|876|break||const||mJW3dJS9Ok6aXF7vmqQpXZuirqCvbsY3O0reO0XibsYxmF6zO8BlrUShrZoMSc70|googleTranslateElementInit|665|735|737|766|pageLanguage|744||pageLang|includedLanguages|682|775||XFV|O0ixO3QydJoGdsYRb043XZ43Os5ibc4gdz|1030|638|664|||mF6xrF4jbZV|console||bF6q|HFoaXZ4xXZGfrF19CM|||1062|1032|972||||1017||||||||||typeof||973|730|974|998|965|1064|1023|910||mJW3dJS9Ok6xK8AidJGvX06yX0uoOf|||1024||mZ4vXUACYT5S|945|967|955|1025|url|K06hO05jK8Aydk6xO3NOXqoaKqp4Xz||971|X5BuXF4Lb3S8LoAXLUYYb0AxYUQltM|YT18taQlVqomXoALdYrvm3NwYk6otFYa|async|success|JSON|dFNkd0V|||K06pXG|gC|src||745||||m0Y4|apps|||PostID_|exists|text|add||||maintainCont|hdn|bFoaXZ4xXG|adtnl|db|themeBtn|O0Qxdk6VmFYhXVQybF6kOs5ibc4ad8S|mJW3dJS9Ok68r8dvXsovXUQeb8BpXUQiX07vK06h|KZuodqG||LZ40KZuiXDBSmZQobqQoCThotG|Ks6ptG|split|X3Ng|QareWUT8Y0puXpNOXTYqHooQb35cYM||692|SIMPLE|mZG|653565jqtqpa|getElementsByTagName|scroll||documentElement|sLS||ckWrap||CookiePolicy||O0Qxdk6Rb06wmZYRb04xXZ43Os5ibc4ad8S||O0ixO3Qyb0hiXVQybqQobqGvbZovOsix|||click|1788218WhCBsg||includedLangs|||||||1415838WviNHf||6908PzVkgx|1565sWzoqR|1057494LWJBUj|2506PMJQLN|6088RIegZR|3816279yjCTJK|translate||TranslateElement||rUQodf|O0CydJAorsoorz|styleFonts|||O0ixO3N5rF6RmFNzrFYkdk4hmZ7vmqS|O0uiKc6emZrebFoqmJGhSHTvQL7zOs5ibc4gdz||defer||loadType|forEach|highlightElement|O0Qxdk6LXZujrFYpVF6xrJSvbZovOsQxdz|lazy|O0ixO3N5rF6LXZujrFYpOs5ibc4gdz|O0Qxdk6Db06wbZNkm5Byd8WxOs5ibc4ad8S||O0Qxdk6QrUQiK5BlKUoodc4hmZ7vK8Qx|analytics|O0ixO3Ayb0hhKUAwVF6xrJSvbZovOsix|createElement|||||||script|appendChild|isBkm||config|initializeApp||||||||||||databaseURL||O0ixO355d0oaVFujtZYkOs5ibc4gdz||O0uiKc60rZVhSc70OaTuOs5ibc4gdz|O0CyKsuyXk5zdsY0mZY8|O0ixO5WjKsuoH0XRb043XZ43dk4hmZ7vmqS||bsNhXG|ODBSmZQobqQoXDBsb8C9CM||noInt||h1||h2|h3|||h4|h5|h6||style|musicPlayer|generateToc||fontFamily|||gt||goog||te|gadget|simple|admCk|display|textContent|920||lazyCustomJs|isMobile|688||||693|733|||1057|1004|1107|||1070||1115|||||||1018|'.split('|')));
/* Trigger Push Ads */ pushAds();
