import{t as e,d as t,o as s,g as r,f as a,a as n,S as o,L as i,F as l,h as c}from"./vendor.9184b711.js";import{u as d,S as u,a as h,b as g,c as v,A as f,L as p,X as w,T as b,d as m}from"./arrow-left.057f7f78.js";import{u as y}from"./index.1cdfefda.js";const M=e('<div class="svg-container-outside-left"></div>'),x=e('<div class="svg-container-outside"></div>'),k=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #004</h2><p class="info-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officiis tempore necessitatibus illum nisi, consequatur accusamus doloremque dolores, iusto hic fuga incidunt voluptatibus. Explicabo vero accusantium deserunt maiores ea!</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),C=e('<div><div class="overlay-wrapper"></div></div>'),S=e("<a></a>"),N=()=>{const[e,c]=t("black"),[N,E]=t(),[I,P]=t(!1),[L]=y(),{data:W,refetch:j}=d();let z=new class{x1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}y1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}x2(e){return 125*Math.sin(e/15)+125*Math.sin(e/25)+125*Math.sin(e/35)}y2(e){return 125*Math.cos(e/15)+125*Math.cos(e/25)+125*Math.cos(e/35)}};(e=>{let t=parseInt(e,16),s=e.length,r=e.length/2,a=0,n=0,o=0,i=0,l=t%11+5;for(let d=0;d<s;d++){n=2*(d-r)+1,t%3==1?n=-n:t%3==2&&(n=Math.abs(n)),n*=parseInt(t);for(let e=0;e<s;e++)a=2*(e-r)+1,t%2==1&&(a=Math.abs(a)),a=n*parseInt(t),o=a*n/1%l,o<5&&(i=a*n%l+o)}const c=function(e){let t=0;for(let r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);let s="#";for(let r=0;r<3;r++)s+=("00"+(t>>8*r&255).toString(16)).substr(-2);return s}(e);console.log(a,n,o,i,l,c),E({userId:L.id(),value1:Math.abs(a),value2:Math.abs(n),value3:o,value4:i,value5:l,color:c})})(L.id()),s((()=>{m(N())})),r((()=>{j()}));let H=.05,R=0;let q=N().value1>70?200:100;let A=function(e){return e>5?3:6}(N().value5);const B=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},F=t=>{t.background(e()),t.stroke(N().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<q/A;e++)t.line(-50,z.x2(N().value1/A*R*e/40),50,z.x1(N().value2/A*R*e/40)),N().value5>10&&t.rotate(60);R+=H,(R>100||R<.01)&&(H=-H)};return(()=>{const e=C.cloneNode(!0),t=e.firstChild;return a(e,n(u,{setup:B,draw:F,style:{width:"100%",height:"100%",position:"absolute"}}),t),a(t,n(b,{get enter(){return h({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return g({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return v({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[n(o,{get when(){return!I()},get children(){return[(()=>{const e=M.cloneNode(!0);return a(e,n(i,{href:"/",class:"more-info",get children(){return n(f,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=x.cloneNode(!0);return a(e,n(p,{class:"list-svg-icon",onclick:()=>P(!I())})),e})()]}}),n(o,{get when(){return I()},get children(){const e=x.cloneNode(!0);return a(e,n(w,{class:"x-svg-icon",onclick:()=>P(!I())})),e}})]}}),null),a(t,n(b,{get enter(){return h({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return g({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return v({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return n(o,{get when(){return I()},get children(){const e=k.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,s=t.firstChild;s.firstChild;const r=t.nextSibling;return r.firstChild,a(s,(()=>N().userId),null),a(r,n(l,{get each(){return W()},children:e=>(()=>{const t=S.cloneNode(!0);return t.$$click=()=>E(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),a(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};c(["click"]);export{N as default};
