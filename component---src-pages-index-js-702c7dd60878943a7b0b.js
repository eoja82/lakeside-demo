"use strict";(self.webpackChunklakeside_lumber=self.webpackChunklakeside_lumber||[]).push([[678],{9643:function(e,t,n){var r=n(4942),a=n(5987),c=n(5900),l=n.n(c),o=n(7294),i=n(5697),s=n.n(i),u=n(9541),d=n(5893),m=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s().string,s().bool,s().bool,s().bool,s().bool;var v=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.fluid,o=e.rounded,i=e.roundedCircle,s=e.thumbnail,f=(0,a.Z)(e,m);return n=(0,u.vE)(n,"img"),(0,d.jsx)("img",p(p({ref:t},f),{},{className:l()(r,c&&"".concat(n,"-fluid"),o&&"rounded",i&&"rounded-circle",s&&"".concat(n,"-thumbnail"))}))}));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=v},6629:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(7326),a=n(4578),c=n(7294),l=n(8902),o=n(8315),i="slideshow-module--h3--GJ321",s="slideshow-module--img--2ag82",u=n(1597),d=n(4942),m=n(885),f=n(5987),p=n(5655);var v=function(e,t){var n=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},b=n(9424);var h=n(9129),E=Math.pow(2,31)-1;function g(e,t,n){var r=n-Date.now();e.current=r<=E?setTimeout(t,r):setTimeout((function(){return g(e,t,n)}),E)}function y(){var e=function(){var e=(0,c.useRef)(!0),t=(0,c.useRef)((function(){return e.current}));return(0,c.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,c.useRef)();return(0,h.Z)((function(){return clearTimeout(t.current)})),(0,c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=E?t.current=setTimeout(r,a):g(t,r,Date.now()+a))},clear:n}}),[])}var O=n(1590),x=n(5900),w=n.n(x),j=n(5210),N=(0,n(8870).Z)("carousel-caption"),Z=n(9541),k=n(5893),P=["as","bsPrefix","className"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=c.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,a=e.bsPrefix,c=e.className,l=(0,f.Z)(e,P),o=w()(c,(0,Z.vE)(a,"carousel-item"));return(0,k.jsx)(r,D(D({ref:t},l),{},{className:o}))}));T.displayName="CarouselItem";var S=T;function R(e,t){var n=0;return c.Children.map(e,(function(e){return c.isValidElement(e)?t(e,n++):e}))}var I=n(949),L=n(9059),M=n(558),A=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,k.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,k.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var U=c.forwardRef((function(e,t){var n=(0,j.Ch)(e,{activeIndex:"onSelect"}),r=n.as,a=void 0===r?"div":r,l=n.bsPrefix,o=n.slide,i=n.fade,s=n.controls,u=n.indicators,d=n.indicatorLabels,h=n.activeIndex,E=n.onSelect,g=n.onSlide,x=n.onSlid,N=n.interval,P=n.keyboard,C=n.onKeyDown,D=n.pause,T=n.onMouseOver,S=n.onMouseOut,B=n.wrap,K=n.touch,U=n.onTouchStart,W=n.onTouchMove,V=n.onTouchEnd,G=n.prevIcon,J=n.prevLabel,F=n.nextIcon,X=n.nextLabel,Y=n.variant,H=n.className,_=n.children,z=(0,f.Z)(n,A),Q=(0,Z.vE)(l,"carousel"),$=(0,Z.SC)(),ee=(0,c.useRef)(null),te=(0,c.useState)("next"),ne=(0,m.Z)(te,2),re=ne[0],ae=ne[1],ce=(0,c.useState)(!1),le=(0,m.Z)(ce,2),oe=le[0],ie=le[1],se=(0,c.useState)(!1),ue=(0,m.Z)(se,2),de=ue[0],me=ue[1],fe=(0,c.useState)(h||0),pe=(0,m.Z)(fe,2),ve=pe[0],be=pe[1];de||h===ve||(ee.current?ae(ee.current):ae((h||0)>ve?"next":"prev"),o&&me(!0),be(h||0)),(0,c.useEffect)((function(){ee.current&&(ee.current=null)}));var he,Ee=0;!function(e,t){var n=0;c.Children.forEach(e,(function(e){c.isValidElement(e)&&t(e,n++)}))}(_,(function(e,t){++Ee,t===h&&(he=e.props.interval)}));var ge=(0,b.Z)(he),ye=(0,c.useCallback)((function(e){if(!de){var t=ve-1;if(t<0){if(!B)return;t=Ee-1}ee.current="prev",null==E||E(t,e)}}),[de,ve,E,B,Ee]),Oe=(0,p.Z)((function(e){if(!de){var t=ve+1;if(t>=Ee){if(!B)return;t=0}ee.current="next",null==E||E(t,e)}})),xe=(0,c.useRef)();(0,c.useImperativeHandle)(t,(function(){return{element:xe.current,prev:ye,next:Oe}}));var we=(0,p.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(xe.current)&&($?ye():Oe())})),je="next"===re?"start":"end";v((function(){o||(null==g||g(ve,je),null==x||x(ve,je))}),[ve]);var Ne="".concat(Q,"-item-").concat(re),Ze="".concat(Q,"-item-").concat(je),ke=(0,c.useCallback)((function(e){(0,L.Z)(e),null==g||g(ve,je)}),[g,ve,je]),Pe=(0,c.useCallback)((function(){me(!1),null==x||x(ve,je)}),[x,ve,je]),Ce=(0,c.useCallback)((function(e){if(P&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?Oe(e):ye(e));case"ArrowRight":return e.preventDefault(),void($?ye(e):Oe(e))}null==C||C(e)}),[P,C,ye,Oe,$]),De=(0,c.useCallback)((function(e){"hover"===D&&ie(!0),null==T||T(e)}),[D,T]),Te=(0,c.useCallback)((function(e){ie(!1),null==S||S(e)}),[S]),Se=(0,c.useRef)(0),Re=(0,c.useRef)(0),Ie=y(),Le=(0,c.useCallback)((function(e){Se.current=e.touches[0].clientX,Re.current=0,"hover"===D&&ie(!0),null==U||U(e)}),[D,U]),Me=(0,c.useCallback)((function(e){e.touches&&e.touches.length>1?Re.current=0:Re.current=e.touches[0].clientX-Se.current,null==W||W(e)}),[W]),Ae=(0,c.useCallback)((function(e){if(K){var t=Re.current;Math.abs(t)>40&&(t>0?ye(e):Oe(e))}"hover"===D&&Ie.set((function(){ie(!1)}),N||void 0),null==V||V(e)}),[K,D,ye,Oe,Ie,N,V]),Be=null!=N&&!oe&&!de,qe=(0,c.useRef)();(0,c.useEffect)((function(){var e,t;if(Be){var n=$?ye:Oe;return qe.current=window.setInterval(document.visibilityState?we:n,null!=(e=null!=(t=ge.current)?t:N)?e:void 0),function(){null!==qe.current&&clearInterval(qe.current)}}}),[Be,ye,Oe,ge,N,we,$]);var Ke=(0,c.useMemo)((function(){return u&&Array.from({length:Ee},(function(e,t){return function(e){null==E||E(t,e)}}))}),[u,Ee,E]);return(0,k.jsxs)(a,q(q({ref:xe},z),{},{onKeyDown:Ce,onMouseOver:De,onMouseOut:Te,onTouchStart:Le,onTouchMove:Me,onTouchEnd:Ae,className:w()(H,Q,o&&"slide",i&&"".concat(Q,"-fade"),Y&&"".concat(Q,"-").concat(Y)),children:[u&&(0,k.jsx)("div",{className:"".concat(Q,"-indicators"),children:R(_,(function(e,t){return(0,k.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=d&&d.length?d[t]:"Slide ".concat(t+1),className:t===ve?"active":void 0,onClick:Ke?Ke[t]:void 0,"aria-current":t===ve},t)}))}),(0,k.jsx)("div",{className:"".concat(Q,"-inner"),children:R(_,(function(e,t){var n=t===ve;return o?(0,k.jsx)(M.Z,{in:n,onEnter:n?ke:void 0,onEntered:n?Pe:void 0,addEndListener:I.Z,children:function(t,r){return c.cloneElement(e,q(q({},r),{},{className:w()(e.props.className,n&&"entered"!==t&&Ne,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Ze)}))}}):c.cloneElement(e,{className:w()(e.props.className,n&&"active")})}))}),s&&(0,k.jsxs)(k.Fragment,{children:[(B||0!==h)&&(0,k.jsxs)(O.Z,{className:"".concat(Q,"-control-prev"),onClick:ye,children:[G,J&&(0,k.jsx)("span",{className:"visually-hidden",children:J})]}),(B||h!==Ee-1)&&(0,k.jsxs)(O.Z,{className:"".concat(Q,"-control-next"),onClick:Oe,children:[F,X&&(0,k.jsx)("span",{className:"visually-hidden",children:X})]})]})]}))}));U.displayName="Carousel",U.defaultProps=K;var W=Object.assign(U,{Caption:N,Item:S});var V=function(){return c.createElement(W,{fade:!0,pause:"false"},c.createElement(W.Item,null,c.createElement("img",{src:(0,u.dq)("/img/slideShow/storeEnterance.jpeg"),className:"d-block w-100 "+s,alt:"Front of Store"}),c.createElement(W.Caption,{bsPrefix:"slideshow-module--caption1--4bZZx"},c.createElement("h3",{className:i},"FAMILY OWNED AND OPERATED"))),c.createElement(W.Item,null,c.createElement("img",{src:(0,u.dq)("/img/slideShow/boomTruck1.jpg"),className:"d-block w-100 "+s,alt:"Delivery Truck"}),c.createElement(W.Caption,{bsPrefix:"slideshow-module--caption2--snxeO"},c.createElement("h3",{className:i},"WE DELIVER"),c.createElement("p",{className:"slideshow-module--p--iSET3"},"BOOM TRUCK AVAILABLE"))),c.createElement(W.Item,null,c.createElement("img",{src:(0,u.dq)("/img/slideShow/house.jpeg"),className:"d-block w-100 "+s,alt:"House Under Construction"}),c.createElement(W.Caption,{bsPrefix:"slideshow-module--caption3--vqjyN"},c.createElement("h3",{className:i},"NO JOB TOO BIG OR TOO SMALL"))))},G=n(7621),J="index-module--col--0W32y",F="index-module--moreInfoP--k8KPN",X=n(1809),Y=n(7408),H=n(3639),_=n(9643),z=n(994),Q=function(){var e=(0,u.K2)("795933130"),t=[];return e.allDataJson.nodes.forEach((function(e,n){var r=e.slug,a=e.products,c=r.split("/")[2].replace(/-/g," ");t.push({path:r,key:n,name:c,src:a[0].image.src,alt:a[0].image.alt})})),c.createElement(H.Z,{id:"index-module--listContainer--J1G4h"},c.createElement(z.Z,{xs:1,sm:1,md:2,lg:3},t.map((function(e){return c.createElement(Y.Z,{style:{padding:"12px"},key:e.key},c.createElement(X.Z,{className:"text-center",style:{border:"none"}},c.createElement(u.rU,{to:e.path},c.createElement(X.Z.Img,{varient:"top",src:(0,u.dq)(e.src),style:{borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},alt:e.alt})),c.createElement(u.rU,{to:e.path,className:"index-module--listP--RuYqI"},c.createElement(X.Z.Body,{className:"bg-dark",style:{borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"}},e.name," ",c.createElement("i",{className:"fa fa-angle-right index-module--rightArrow--5RRgq"})))))}))))},$=function(e){function t(t){var n;return(n=e.call(this,t)||this).disclaimer=c.createRef(),n.closeDisclaimer=n.closeDisclaimer.bind((0,r.Z)(n)),n}(0,a.Z)(t,e);var n=t.prototype;return n.closeDisclaimer=function(){this.disclaimer.current.style.display="none",clearTimeout(this.timer)},n.componentDidMount=function(){this.timer=setTimeout(this.closeDisclaimer,15e3)},n.componentWillUnmount=function(){clearTimeout(this.timer)},n.render=function(){return c.createElement(l.Z,null,c.createElement("div",{id:"index-module--intro--z05Ck"},c.createElement(V,null)),c.createElement(H.Z,{fluid:!0},c.createElement(z.Z,{className:"bg-dark"},c.createElement(Y.Z,{md:12,lg:6,className:J},c.createElement("div",null,c.createElement(o.Z,{text:"QUALITY MATERIALS",lightText:!0,style:{marginTop:0}}),c.createElement("p",{className:F},"We are proud to serve contractors and homeowners as your local source for quality building materials."))),c.createElement(Y.Z,{md:12,lg:6,style:{padding:"0"}},c.createElement(_.Z,{src:(0,u.dq)("/img/deck.jpg"),alt:"Deck",fluid:!0})))),c.createElement(H.Z,{fluid:!0},c.createElement(z.Z,{className:"bg-dark"},c.createElement(Y.Z,{md:12,lg:6,style:{padding:"0"}},c.createElement(_.Z,{src:(0,u.dq)("/img/boomTruck2.jpg"),alt:"Delivery truck",fluid:!0})),c.createElement(Y.Z,{md:12,lg:6,className:J},c.createElement("div",null,c.createElement(o.Z,{text:"WE DELIVER",lightText:!0,style:{marginTop:0}}),c.createElement("p",{className:F},"Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas."))))),c.createElement(H.Z,null,c.createElement(o.Z,{text:"PRODUCTS"}),c.createElement(G.Z,null),c.createElement(Q,null)),c.createElement("div",{id:"index-module--disclaimerContainer--y+ld6",ref:this.disclaimer,style:{display:"flex"}},c.createElement("div",{id:"index-module--disclaimer--KlXii"},c.createElement("button",{id:"index-module--closeDisclaimer--Cc-cO",onClick:this.closeDisclaimer},"×"),c.createElement("p",null,"Disclaimer: This website is NOT the business website for the company pictured herein.  The images and logos are used with permission for demonstration and educational purposes only."))))},t}(c.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-702c7dd60878943a7b0b.js.map