import{t as e,d as t,g as r,h as s,j as o,f as n,a,S as i,L as l,F as c,k as d}from"./vendor.535430d1.js";import{u,a as h,S as g,b as v,c as p,d as f,A as y,L as w,X as b,T as m}from"./arrow-left.51345b25.js";import{u as M}from"./index.4196ba1a.js";const x=e('<div class="svg-container-outside-left"></div>'),S=e('<div class="svg-container-outside"></div>'),k=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #009</h2><p class="info-section">Project nine return to line-based geometry, this time opting for a symmetrical expanding vortex. The algorithm behind this project does yield some slightly mismatched outputs.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),C=e('<div><div class="overlay-wrapper"></div></div>'),N=e("<a></a>"),I=()=>{const[e,d]=t("black"),[I,P]=t(),[j,E]=t(!1),[W]=M(),{data:z,refetch:H}=u();const[L,R]=function(e){const[t,r]=createStore(e);return localStorage.id&&r(JSON.parse(localStorage.id)),o((()=>localStorage.id=JSON.stringify(t))),[t,r]}();r((()=>{R({id:W.id()}),console.log(L.id)}));let A=new class{x1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}y1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}x2(e){return 125*Math.sin(e/15)+125*Math.sin(e/25)+125*Math.sin(e/35)}y2(e){return 125*Math.cos(e/15)+125*Math.cos(e/25)+125*Math.cos(e/35)}};s((()=>{h(I())})),o((()=>{H()})),L.id?(e=>{let t=parseInt(e,16),r=e.length,s=e.length/2,o=0,n=0,a=0,i=0,l=t%11+5;for(let d=0;d<r;d++){n=2*(d-s)+1,t%3==1?n=-n:t%3==2&&(n=Math.abs(n)),n*=parseInt(t);for(let e=0;e<r;e++)o=2*(e-s)+1,t%2==1&&(o=Math.abs(o)),o=n*parseInt(t),a=o*n/1%l,a<5&&(i=o*n%l+a)}const c=function(e){let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);let r="#";for(let s=0;s<3;s++)r+=("00"+(t>>8*s&255).toString(16)).substr(-2);return r}(e);console.log(o,n,a,i,l,c),P({userId:e,value1:Math.abs(o),value2:Math.abs(n),value3:a,value4:i,value5:l,color:c})})(L.id):console.log("error with id recall");let B=.05,F=0,G=Math.PI/12;let J=I().value1>70?200:100;let O=function(e){return e>5?24:12}(I().value5);const T=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},$=t=>{t.background(e()),t.stroke(I().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<J/O/G;e++)t.line(-50,A.x2(I().value1/O*F+e/40),50,A.x1(I().value2/O*F+e/40)),t.rotate(30);F+=B,(F>100||F<.01)&&(B=-B)};return(()=>{const e=C.cloneNode(!0),t=e.firstChild;return n(e,a(g,{setup:T,draw:$,style:{width:"100%",height:"100%",position:"absolute"}}),t),n(t,a(m,{get enter(){return v({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return p({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[a(i,{get when(){return!j()},get children(){return[(()=>{const e=x.cloneNode(!0);return n(e,a(l,{href:"/",class:"more-info",get children(){return a(y,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=S.cloneNode(!0);return n(e,a(w,{class:"list-svg-icon",onclick:()=>E(!j())})),e})()]}}),a(i,{get when(){return j()},get children(){const e=S.cloneNode(!0);return n(e,a(b,{class:"x-svg-icon",onclick:()=>E(!j())})),e}})]}}),null),n(t,a(m,{get enter(){return v({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return p({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return a(i,{get when(){return j()},get children(){const e=k.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,r=t.firstChild;r.firstChild;const s=t.nextSibling;return s.firstChild,n(r,(()=>I().userId),null),n(s,a(c,{get each(){return z()},children:e=>(()=>{const t=N.cloneNode(!0);return t.$$click=()=>P(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),n(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};d(["click"]);export{I as default};