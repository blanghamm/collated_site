import{t as e,d as t,g as r,h as s,j as n,f as o,a,S as i,L as l,F as d,k as c}from"./vendor.535430d1.js";import{u,a as g,S as v,b as h,c as f,d as p,A as w,L as y,X as b,T as m}from"./arrow-left.16791f33.js";import{u as S}from"./index.fa8264cf.js";const k=e('<div class="svg-container-outside-left"></div>'),x=e('<div class="svg-container-outside"></div>'),C=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #003</h2><p class="info-section">Number three is based on a more symmetrical output, pulsing in and out over extended viewing. It also uses a line-based geometry like those before.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),N=e('<div><div class="overlay-wrapper"></div></div>'),I=e("<a></a>"),M=()=>{const[e,c]=t("black"),[M,E]=t(),[P,j]=t(!1),[W]=S(),{data:z,refetch:H}=u();const[L,R]=function(e){const[t,r]=createStore(e);return localStorage.id&&r(JSON.parse(localStorage.id)),n((()=>localStorage.id=JSON.stringify(t))),[t,r]}();r((()=>{R({id:W.id()}),console.log(L.id)}));s((()=>{g(M())})),n((()=>{H()})),(e=>{let t=parseInt(e,16),r=e.length,s=e.length/2,n=0,o=0,a=0,i=0,l=t%11+5;for(let c=0;c<r;c++){o=2*(c-s)+1,t%3==1?o=-o:t%3==2&&(o=Math.abs(o)),o*=parseInt(t);for(let e=0;e<r;e++)n=2*(e-s)+1,t%2==1&&(n=Math.abs(n)),n=o*parseInt(t),a=n*o/1%l,a<5&&(i=n*o%l+a)}const d=function(e){let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);let r="#";for(let s=0;s<3;s++)r+=("00"+(t>>8*s&255).toString(16)).substr(-2);return r}(e);console.log(n,o,a,i,l,d),E({userId:e,value1:Math.abs(n),value2:Math.abs(o),value3:a,value4:i,value5:l,color:d})})(L.id);let A=.05,B=0;let F=M().value1>70?200:100;let G=function(e){return e>5?12:6}(M().value5);const J=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},O=t=>{t.background(e()),t.stroke(M().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<F;e++)t.line(M().value1*G+B,B*e,M().value5*G+B,B),t.rotate(60);B+=A,(B>100||B<.01)&&(A=-A)};return(()=>{const e=N.cloneNode(!0),t=e.firstChild;return o(e,a(v,{setup:J,draw:O,style:{width:"100%",height:"100%",position:"absolute"}}),t),o(t,a(m,{get enter(){return h({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return f({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return p({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[a(i,{get when(){return!P()},get children(){return[(()=>{const e=k.cloneNode(!0);return o(e,a(l,{href:"/",class:"more-info",get children(){return a(w,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=x.cloneNode(!0);return o(e,a(y,{class:"list-svg-icon",onclick:()=>j(!P())})),e})()]}}),a(i,{get when(){return P()},get children(){const e=x.cloneNode(!0);return o(e,a(b,{class:"x-svg-icon",onclick:()=>j(!P())})),e}})]}}),null),o(t,a(m,{get enter(){return h({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return f({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return p({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return a(i,{get when(){return P()},get children(){const e=C.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,r=t.firstChild;r.firstChild;const s=t.nextSibling;return s.firstChild,o(r,(()=>M().userId),null),o(s,a(d,{get each(){return z()},children:e=>(()=>{const t=I.cloneNode(!0);return t.$$click=()=>E(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),o(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};c(["click"]);export{M as default};
