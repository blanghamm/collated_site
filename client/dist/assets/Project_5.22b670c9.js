import{t as e,d as t,g as s,h as r,f as n,a,S as o,L as i,F as l,j as c}from"./vendor.4430d691.js";import{u as d,a as u,S as h,b as g,c as v,d as p,A as f,L as w,X as y,T as b}from"./arrow-left.2a286f55.js";import{u as M}from"./index.5be617ed.js";const m=e('<div class="svg-container-outside-left"></div>'),x=e('<div class="svg-container-outside"></div>'),k=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #005</h2><p class="info-section">Project five focuses on a smooth animation loop, showcasing a primitive shape bouncing within its digital environment. It also possesses the ability to generate far more complex outputs.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),C=e('<div><div class="overlay-wrapper"></div></div>'),S=e("<a></a>"),I=()=>{const[e,c]=t("black"),[I,N]=t(),[P,j]=t(!1),[E]=M(),{data:W,refetch:z}=d();let H=new class{x1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}y1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}x2(e){return 125*Math.sin(e/15)+125*Math.sin(e/25)+125*Math.sin(e/35)}y2(e){return 125*Math.cos(e/15)+125*Math.cos(e/25)+125*Math.cos(e/35)}};s((()=>{u(I())})),r((()=>{z()})),(e=>{let t=parseInt(e,16),s=e.length,r=e.length/2,n=0,a=0,o=0,i=0,l=t%11+5;for(let d=0;d<s;d++){a=2*(d-r)+1,t%3==1?a=-a:t%3==2&&(a=Math.abs(a)),a*=parseInt(t);for(let e=0;e<s;e++)n=2*(e-r)+1,t%2==1&&(n=Math.abs(n)),n=a*parseInt(t),o=n*a/1%l,o<5&&(i=n*a%l+o)}const c=function(e){let t=0;for(let r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);let s="#";for(let r=0;r<3;r++)s+=("00"+(t>>8*r&255).toString(16)).substr(-2);return s}(e);console.log(n,a,o,i,l,c),N({userId:e,value1:Math.abs(n),value2:Math.abs(a),value3:o,value4:i,value5:l,color:c})})(E.id());let L=.05,R=0;let A=I().value1>70?200:100;let B=function(e){return e>5?3:6}(I().value5);const F=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},G=t=>{t.background(e()),t.stroke(I().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<A/B;e++)t.line(-50,H.x2(I().value1/B*R+e/40),50,H.x1(I().value2/B*R+e/40)),I().value5>10&&t.rotate(60);R+=L,(R>100||R<.01)&&(L=-L)};return(()=>{const e=C.cloneNode(!0),t=e.firstChild;return n(e,a(h,{setup:F,draw:G,style:{width:"100%",height:"100%",position:"absolute"}}),t),n(t,a(b,{get enter(){return g({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return p({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[a(o,{get when(){return!P()},get children(){return[(()=>{const e=m.cloneNode(!0);return n(e,a(i,{href:"/",class:"more-info",get children(){return a(f,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=x.cloneNode(!0);return n(e,a(w,{class:"list-svg-icon",onclick:()=>j(!P())})),e})()]}}),a(o,{get when(){return P()},get children(){const e=x.cloneNode(!0);return n(e,a(y,{class:"x-svg-icon",onclick:()=>j(!P())})),e}})]}}),null),n(t,a(b,{get enter(){return g({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return p({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return a(o,{get when(){return P()},get children(){const e=k.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,s=t.firstChild;s.firstChild;const r=t.nextSibling;return r.firstChild,n(s,(()=>I().userId),null),n(r,a(l,{get each(){return W()},children:e=>(()=>{const t=S.cloneNode(!0);return t.$$click=()=>N(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),n(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};c(["click"]);export{I as default};