import{t as e,d as t,g as r,h as s,j as a,f as n,a as o,S as i,L as l,F as c,k as d}from"./vendor.535430d1.js";import{u,a as g,S as h,b as f,c as v,d as p,A as w,L as y,X as M,T as b}from"./arrow-left.16791f33.js";import{u as x}from"./index.fa8264cf.js";const S=e('<div class="svg-container-outside-left"></div>'),k=e('<div class="svg-container-outside"></div>'),m=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #010</h2><p class="info-section">Project ten pulls away from the previous iterations, opting for slow falling line-based output. It also conforms to a triangle-esque boundary, making the entire piece feel off-axis.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),C=e('<div><div class="overlay-wrapper"></div></div>'),I=e("<a></a>"),N=()=>{const[e,d]=t("black"),[N,P]=t(),[j,E]=t(!1),[W]=x(),{data:z,refetch:H}=u();const[L,R]=function(e){const[t,r]=createStore(e);return localStorage.id&&r(JSON.parse(localStorage.id)),a((()=>localStorage.id=JSON.stringify(t))),[t,r]}();r((()=>{R({id:W.id()}),console.log(L.id)}));let A=new class{x1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}y1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}x2(e){return 125*Math.sin(e/15)+125*Math.sin(e/25)+125*Math.sin(e/35)}y2(e){return 125*Math.cos(e/15)+125*Math.cos(e/25)+125*Math.cos(e/35)}};s((()=>{g(N())})),a((()=>{H()})),(e=>{let t=parseInt(e,16),r=e.length,s=e.length/2,a=0,n=0,o=0,i=0,l=t%11+5;for(let d=0;d<r;d++){n=2*(d-s)+1,t%3==1?n=-n:t%3==2&&(n=Math.abs(n)),n*=parseInt(t);for(let e=0;e<r;e++)a=2*(e-s)+1,t%2==1&&(a=Math.abs(a)),a=n*parseInt(t),o=a*n/1%l,o<5&&(i=a*n%l+o)}const c=function(e){let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);let r="#";for(let s=0;s<3;s++)r+=("00"+(t>>8*s&255).toString(16)).substr(-2);return r}(e);console.log(a,n,o,i,l,c),P({userId:e,value1:Math.abs(a),value2:Math.abs(n),value3:o,value4:i,value5:l,color:c})})(L.id);let B=.05,F=0,G=Math.PI/12;let J=N().value1>70?200:100;let O=function(e){return e>5?24:12}(N().value5);const $=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},q=t=>{t.background(e()),t.stroke(N().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<J/O/G;e++)t.line(G*F+e/O,A.x2(N().value5/O*F+e/G),A.x2(N().value5/O*F+e/G),G*F+e/O);F+=B,(F>100||F<.01)&&(B=-B)};return(()=>{const e=C.cloneNode(!0),t=e.firstChild;return n(e,o(h,{setup:$,draw:q,style:{width:"100%",height:"100%",position:"absolute"}}),t),n(t,o(b,{get enter(){return f({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return p({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[o(i,{get when(){return!j()},get children(){return[(()=>{const e=S.cloneNode(!0);return n(e,o(l,{href:"/",class:"more-info",get children(){return o(w,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=k.cloneNode(!0);return n(e,o(y,{class:"list-svg-icon",onclick:()=>E(!j())})),e})()]}}),o(i,{get when(){return j()},get children(){const e=k.cloneNode(!0);return n(e,o(M,{class:"x-svg-icon",onclick:()=>E(!j())})),e}})]}}),null),n(t,o(b,{get enter(){return f({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return p({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return o(i,{get when(){return j()},get children(){const e=m.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,r=t.firstChild;r.firstChild;const s=t.nextSibling;return s.firstChild,n(r,(()=>N().userId),null),n(s,o(c,{get each(){return z()},children:e=>(()=>{const t=I.cloneNode(!0);return t.$$click=()=>P(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),n(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};d(["click"]);export{N as default};
