import{l as e,c as t,a as o,b as r,u as c,i as _,d as n,e as a,r as s,R as i}from"./vendor.38a4d866.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p={},d=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in p)return;p[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},m=[{path:"/",component:e((()=>d((()=>import("./Home.f75b1c3c.js")),["assets/Home.f75b1c3c.js","assets/vendor.38a4d866.js"])))},{path:"/171cbc11889d6afb",component:e((()=>d((()=>import("./Project_1.9650b516.js")),["assets/Project_1.9650b516.js","assets/vendor.38a4d866.js","assets/useFetch.25ad9449.js","assets/index.fe0d019f.js"])))},{path:"/027e048a75c99534",component:e((()=>d((()=>import("./Project_2.7a761038.js")),["assets/Project_2.7a761038.js","assets/vendor.38a4d866.js","assets/useFetch.25ad9449.js","assets/index.fe0d019f.js"])))},{path:"/0519f198b297466a",component:e((()=>d((()=>import("./Project_3.d7c51a57.js")),["assets/Project_3.d7c51a57.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/07459119b391dd23",component:e((()=>d((()=>import("./Project_4.89cbff49.js")),["assets/Project_4.89cbff49.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/34056b9864e87020",component:e((()=>d((()=>import("./Project_5.cd371aea.js")),["assets/Project_5.cd371aea.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/ac172752c4ba3f9c",component:e((()=>d((()=>import("./Project_6.d839c51c.js")),["assets/Project_6.d839c51c.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/4db83f75a4eb9aa",component:e((()=>d((()=>import("./Project_7.8cac5b9d.js")),["assets/Project_7.8cac5b9d.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/217fffe748c22d0c",component:e((()=>d((()=>import("./Project_8.08e68dca.js")),["assets/Project_8.08e68dca.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/21e4a381a3a8cd2",component:e((()=>d((()=>import("./Project_9.0841faf9.js")),["assets/Project_9.0841faf9.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/1ff29dee9383f27c",component:e((()=>d((()=>import("./Project_10.159707e4.js")),["assets/Project_10.159707e4.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/c8794faf4a49a3f2",component:e((()=>d((()=>import("./Project_11.04a4c2ef.js")),["assets/Project_11.04a4c2ef.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/a9a14763660745c0",component:e((()=>d((()=>import("./Project_12.3c4c5d0e.js")),["assets/Project_12.3c4c5d0e.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/84dd169f674becbb",component:e((()=>d((()=>import("./Project_13.b542c921.js")),["assets/Project_13.b542c921.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/87d82fb59adff502",component:e((()=>d((()=>import("./Project_14.1cfaeb81.js")),["assets/Project_14.1cfaeb81.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/14c02b611852c9c3",component:e((()=>d((()=>import("./Project_15.32ad9b00.js")),["assets/Project_15.32ad9b00.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/4ad2ff2df0f22ba8",component:e((()=>d((()=>import("./Project_16.128110e9.js")),["assets/Project_16.128110e9.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/85a1a66265b48a80",component:e((()=>d((()=>import("./Project_17.b6470be6.js")),["assets/Project_17.b6470be6.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/0cfd5b228d03bffc",component:e((()=>d((()=>import("./Project_18.d8a86e4c.js")),["assets/Project_18.d8a86e4c.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/20afa9dd5d18ccc1",component:e((()=>d((()=>import("./Project_19.874a3419.js")),["assets/Project_19.874a3419.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))},{path:"/c22178a1494050d5",component:e((()=>d((()=>import("./Project_20.c065cd73.js")),["assets/Project_20.c065cd73.js","assets/vendor.38a4d866.js","assets/index.fe0d019f.js"])))}],f=r([{id:""}]),l=e=>{const[r,c]=t({id:e.socketId||""}),_=[r];return o(f.Provider,{value:_,get children(){return e.children}})};function E(){return c(f)}const P={url:{API_URL_OUTPUTS:"/api/outputs",API_URL_BASE:"/"}},u=_(P.url.API_URL_BASE);function j(){const e=a(m);return o(l,{get socketId(){return(()=>{const[e,t]=n();return u.on("socket",(o=>{t(o),console.log(e())})),e})()},get children(){return o(e,{})}})}s((()=>o(i,{get children(){return o(j,{})}})),document.getElementById("root"));export{P as c,m as f,E as u};
