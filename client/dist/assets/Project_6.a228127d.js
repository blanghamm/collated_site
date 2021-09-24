import{t as e,c as t,e as s,f as r,d as o,b as n,S as a,L as i,F as l,g as c}from"./vendor.ab946149.js";import{u as d,a as u,S as g,b as h,c as v,d as f,A as p,L as w,X as y,T as b}from"./arrow-left.15514624.js";import"./index.7bff7f82.js";const M=e('<div class="svg-container-outside-left"></div>'),m=e('<div class="svg-container-outside"></div>'),x=e('<div class="overlay-ui"><div class="title-content"><h2>Collated #006</h2><p class="info-section">Project six moves away from purely line-based geometry. It uses circle-based geometry following a smooth animation track, linking itself to project five.</p></div><div class="overlay-content-left"><div class="top-content"><p><strong>Selected version: </strong></p></div><div class="bottom-content"><strong>Entries:</strong></div></div></div>'),k=e('<div><div class="overlay-wrapper"></div></div>'),C=e("<a></a>"),S=localStorage.getItem("id");console.log("user",S);const I=()=>{const[e,c]=t("black"),[I,N]=t(),[P,j]=t(!1),{data:E,refetch:W}=d();let z=new class{x1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}y1(e){return-125*Math.cos(e/10)+125*Math.cos(e/20)+125*Math.cos(e/30)}x2(e){return 125*Math.sin(e/15)+125*Math.sin(e/25)+125*Math.sin(e/35)}y2(e){return 125*Math.cos(e/15)+125*Math.cos(e/25)+125*Math.cos(e/35)}};s((()=>{u(I())})),r((()=>{W()})),S?(e=>{let t=parseInt(e,16),s=e.length,r=e.length/2,o=0,n=0,a=0,i=0,l=t%11+5;for(let d=0;d<s;d++){n=2*(d-r)+1,t%3==1?n=-n:t%3==2&&(n=Math.abs(n)),n*=parseInt(t);for(let e=0;e<s;e++)o=2*(e-r)+1,t%2==1&&(o=Math.abs(o)),o=n*parseInt(t),a=o*n/1%l,a<5&&(i=o*n%l+a)}const c=function(e){let t=0;for(let r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);let s="#";for(let r=0;r<3;r++)s+=("00"+(t>>8*r&255).toString(16)).substr(-2);return s}(e);console.log(o,n,a,i,l,c),N({userId:e,value1:Math.abs(o),value2:Math.abs(n),value3:a,value4:i,value5:l,color:c})})(S):console.log("error with id recall");let H=.05,L=0;let R=I().value1>70?200:100;let A=function(e){return e>5?3:6}(I().value5);const B=e=>{e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.frameRate(60),e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL).parent("solid-p5"),e.colorMode(e.HSB,360,100,100),e.angleMode(e.DEGREES)},F=t=>{t.background(e()),t.stroke(I().color),t.strokeWeight(1.5),t.noFill();for(let e=0;e<R/A;e++)t.ellipse(-50,z.x2(I().value1/A*L+e/40),50,z.x1(I().value2/A*L+e/40)),I().value5>10&&t.rotate(60);L+=H,(L>100||L<.01)&&(H=-H)};return(()=>{const e=k.cloneNode(!0),t=e.firstChild;return o(e,n(g,{setup:B,draw:F,style:{width:"100%",height:"100%",position:"absolute"}}),t),o(t,n(b,{get enter(){return h({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return[n(a,{get when(){return!P()},get children(){return[(()=>{const e=M.cloneNode(!0);return o(e,n(i,{href:"/",class:"more-info",get children(){return n(p,{class:"arrow-svg-icon"})}})),e})(),(()=>{const e=m.cloneNode(!0);return o(e,n(w,{class:"list-svg-icon",onclick:()=>j(!P())})),e})()]}}),n(a,{get when(){return P()},get children(){const e=m.cloneNode(!0);return o(e,n(y,{class:"x-svg-icon",onclick:()=>j(!P())})),e}})]}}),null),o(t,n(b,{get enter(){return h({opacity:[0,1]},{duration:2e3,easing:"ease",fill:"backwards"})},get exit(){return v({opacity:[1,0]},{duration:2e3,easing:"ease"})},get move(){return f({duration:2e3,easing:"ease",fill:"backwards"})},get children(){return n(a,{get when(){return P()},get children(){const e=x.cloneNode(!0),t=e.firstChild.nextSibling.firstChild,s=t.firstChild;s.firstChild;const r=t.nextSibling;return r.firstChild,o(s,(()=>I().userId),null),o(r,n(l,{get each(){return E()},children:e=>(()=>{const t=C.cloneNode(!0);return t.$$click=()=>N(e),t.style.setProperty("color","white"),t.style.setProperty("cursor","pointer"),t.style.setProperty("display","flex"),t.style.setProperty("padding","2px"),t.style.setProperty("fontSize","8px"),o(t,(()=>e.userId)),t})()}),null),e}})}}),null),e})()};c(["click"]);export{I as default};
