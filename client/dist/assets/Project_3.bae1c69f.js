import{t as e,d as t,g as r,h as s,f as n,a,S as o,L as i,F as l,j as d}from"./vendor.4430d691.js";import{u as c,a as u,S as g,b as v,c as h,d as f,A as p,L as w,X as b,T as y}from"./arrow-left.ea8baa2c.js";import{u as m}from"./index.2e8f8626.js";const k=e('<div class="svg-container-outside-left"></div>'),x=e('<div class="svg-container-outside"></div>'),C=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #003</h2><p class="info-section">Number three is based on a more symmetrical output, pulsing in and out over extended viewing. It also uses a line-based geometry like those before.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),S=e('<div><div class="overlay-wrapper"></div></div>'),I=e("<a></a>"),N=()=>{const[e,d]=t("black"),[N,M]=t(),[E,P]=t(!1),[j]=m(),{data:W,refetch:z}=c();(e=>{let t=parseInt(e,16),r=e.length,s=e.length/2,n=0,a=0,o=0,i=0,l=t%11+5;for(let c=0;c<r;c++){a=2*(c-s)+1,t%3==1?a=-a:t%3==2&&(a=Math.abs(a)),a*=parseInt(t);for(let e=0;e<r;e++)n=2*(e-s)+1,t%2==1&&(n=Math.abs(n)),n=a*parseInt(t),o=n*a/1%l,o<5&&(i=n*a%l+o)}const d=function(e){let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);let r="#";for(let s=0;s<3;s++)r+=("00"+(t>>8*s&255).toString(16)).substr(-2);return r}(e);console.log(n,a,o,i,l,d),M({userId:j.id(),value1:Math.abs(n),value2:Math.abs(a),value3:o,value4:i,value5:l,color:d})})(j.id()),r((()=>{u(N())})),s((()=>{z()}));let H=.05,L=0;let R=N().value1>70?200:100;let A=function(e){return e>5?12:6}(N().value5);const B=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},F=t=>{t.background(e()),t.stroke(N().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<R;e++)t.line(N().value1*A+L,L*e,N().value5*A+L,L),t.rotate(60);L+=H,(L>100||L<.01)&&(H=-H)};return(()=>{const e=S.cloneNode(!0),t=e.firstChild;return n(e,a(g,{setup:B,draw:F,style:{width:"100%",height:"100%",position:"absolute"}}),t),n(t,a(y,{get enter(){return v({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return h({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[a(o,{get when(){return!E()},get children(){return[(()=>{const e=k.cloneNode(!0);return n(e,a(i,{href:"/",class:"more-info",get children(){return a(p,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=x.cloneNode(!0);return n(e,a(w,{class:"list-svg-icon",onclick:()=>P(!E())})),e})()]}}),a(o,{get when(){return E()},get children(){const e=x.cloneNode(!0);return n(e,a(b,{class:"x-svg-icon",onclick:()=>P(!E())})),e}})]}}),null),n(t,a(y,{get enter(){return v({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return h({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return a(o,{get when(){return E()},get children(){const e=C.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,r=t.firstChild;r.firstChild;const s=t.nextSibling;return s.firstChild,n(r,(()=>N().userId),null),n(s,a(l,{get each(){return W()},children:e=>(()=>{const t=I.cloneNode(!0);return t.$$click=()=>M(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),n(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};d(["click"]);export{N as default};
