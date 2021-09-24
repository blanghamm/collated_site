import{t as e,c as t,e as r,f as s,d as n,b as o,S as a,L as i,F as l,g as c}from"./vendor.7c414862.js";import{u as d,a as u,S as h,b as g,c as v,d as f,A as p,L as w,X as y,T as b}from"./arrow-left.83d684e6.js";import"./Overlay.3c04ed7c.js";import"./index.b400fa30.js";const M=e('<div class="svg-container-outside-left"></div>'),m=e('<div class="svg-container-outside"></div>'),x=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #001</h2><p class="info-section">This iteration focuses on the rapid refiring of one function, this generating a piece of disorientating work. It uses line-based geometry to fit the minimalistic theme.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),k=e('<div><div class="overlay-wrapper"></div></div>'),C=e("<a></a>"),S=localStorage.getItem("id");console.log("user",S);const I=()=>{const[e,c]=t("black"),[I,N]=t(),[E,P]=t(!1),{data:j,refetch:W}=d();let z=new class{x1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}y1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}x2(e){return 125*Math.sin(e/15)+125*Math.sin(e/25)+125*Math.sin(e/35)}y2(e){return 125*Math.cos(e/15)+125*Math.cos(e/25)+125*Math.cos(e/35)}};r((()=>{u(I())})),s((()=>{W()})),S?(e=>{let t=parseInt(e,16),r=e&&e.length,s=e.length/2,n=0,o=0,a=0,i=0,l=t%11+5;for(let d=0;d<r;d++){o=2*(d-s)+1,t%3==1?o=-o:t%3==2&&(o=Math.abs(o)),o*=parseInt(t);for(let e=0;e<r;e++)n=2*(e-s)+1,t%2==1&&(n=Math.abs(n)),n=o*parseInt(t),a=n*o/1%l,a<5&&(i=n*o%l+a)}const c=function(e){let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);let r="#";for(let s=0;s<3;s++)r+=("00"+(t>>8*s&255).toString(16)).substr(-2);return r}(e);console.log(n,o,a,i,l,c),N({userId:e,value1:Math.abs(n),value2:Math.abs(o),value3:a,value4:i,value5:l,color:c})})(S):console.log("error with id recall");let H=.05,L=30;const R=()=>{const e=Math.random(1);return e>.5?6+z.y2(L*e):6*L},A=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},B=t=>{t.background(e()),t.stroke(I().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<I().value1/I().value5;e++)t.line(z.x1(6*I().value1),6+z.y1(L*e),z.x2(6*I().value1),R()),t.rotate(60);L+=H,(L>175||L<25)&&(H=-H)};return(()=>{const e=k.cloneNode(!0),t=e.firstChild;return n(e,o(h,{setup:A,draw:B,style:{width:"100%",height:"100%",position:"absolute"}}),t),n(t,o(b,{get enter(){return g({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[o(a,{get when(){return!E()},get children(){return[(()=>{const e=M.cloneNode(!0);return n(e,o(i,{href:"/",class:"more-info",get children(){return o(p,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=m.cloneNode(!0);return n(e,o(w,{class:"list-svg-icon",onclick:()=>P(!E())})),e})()]}}),o(a,{get when(){return E()},get children(){const e=m.cloneNode(!0);return n(e,o(y,{class:"x-svg-icon",onclick:()=>P(!E())})),e}})]}}),null),n(t,o(b,{get enter(){return g({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return o(a,{get when(){return E()},get children(){const e=x.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,r=t.firstChild;r.firstChild;const s=t.nextSibling;return s.firstChild,n(r,(()=>I().userId),null),n(s,o(l,{get each(){return j()},children:e=>(()=>{const t=C.cloneNode(!0);return t.$$click=()=>N(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),n(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};c(["click"]);export{I as default};
