(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Mz5C:function(e,t,n){e.exports={intro:"index-module--intro--1b2xc",listContainer:"index-module--listContainer--2juRc",listP:"index-module--listP--3OLB8",rightArrow:"index-module--rightArrow--3uaEb",moveArrow:"index-module--moveArrow--1c6gK",col:"index-module--col--giSr_",moreInfoP:"index-module--moreInfoP--1aOd_",moreInfoImg:"index-module--moreInfoImg--3Kj5P",disclaimerContainer:"index-module--disclaimerContainer--DRibE",disclaimer:"index-module--disclaimer--3XgWX",closeDisclaimer:"index-module--closeDisclaimer--2FMjA"}},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("9Hrx"),r=n("q1tI"),c=n.n(r),o=n("Bl7J"),i=n("UDME"),l=n("ZCME"),s=n.n(l),u=n("Wbzz"),m=n("tB/L"),d=n("zBUk"),f=n("XpCt"),b=n("ZCiN");var p=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},O=n("Xyuu");var v=n("i52p"),j=Math.pow(2,31)-1;function h(){var e=function(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(r.useRef)();return Object(v.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=j?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=j?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),j)}(t,a,Date.now()+r))},clear:n}}),[])}var E=n("8lGn"),g=n("TSYQ"),x=n.n(g),y=n("y8DL"),w=n("YdCC"),N=Object(w.a)("carousel-caption"),C=n("vUet"),D=n("nKUr"),k=["as","bsPrefix","className"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=r.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,c=e.className,o=Object(f.a)(e,k),i=x()(c,Object(C.a)(r,"carousel-item"));return Object(D.jsx)(a,P(P({ref:t},o),{},{className:i}))}));T.displayName="CarouselItem";var R=T;function S(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}var M=n("wsUu"),L=n("z+q/"),A=n("ASpx"),B=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:Object(D.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:Object(D.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var K=r.forwardRef((function(e,t){var n=Object(y.a)(e,{activeIndex:"onSelect"}),a=n.as,c=void 0===a?"div":a,o=n.bsPrefix,i=n.slide,l=n.fade,s=n.controls,u=n.indicators,m=n.indicatorLabels,v=n.activeIndex,j=n.onSelect,g=n.onSlide,w=n.onSlid,N=n.interval,k=n.keyboard,I=n.onKeyDown,P=n.pause,T=n.onMouseOver,R=n.onMouseOut,U=n.wrap,J=n.touch,K=n.onTouchStart,X=n.onTouchMove,z=n.onTouchEnd,V=n.prevIcon,Z=n.prevLabel,F=n.nextIcon,G=n.nextLabel,Y=n.variant,q=n.className,H=n.children,_=Object(f.a)(n,B),Q=Object(C.a)(o,"carousel"),$=Object(C.b)(),ee=Object(r.useRef)(null),te=Object(r.useState)("next"),ne=Object(d.a)(te,2),ae=ne[0],re=ne[1],ce=Object(r.useState)(!1),oe=Object(d.a)(ce,2),ie=oe[0],le=oe[1],se=Object(r.useState)(!1),ue=Object(d.a)(se,2),me=ue[0],de=ue[1],fe=Object(r.useState)(v||0),be=Object(d.a)(fe,2),pe=be[0],Oe=be[1];me||v===pe||(ee.current?re(ee.current):re((v||0)>pe?"next":"prev"),i&&de(!0),Oe(v||0)),Object(r.useEffect)((function(){ee.current&&(ee.current=null)}));var ve,je=0;!function(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}(H,(function(e,t){++je,t===v&&(ve=e.props.interval)}));var he=Object(O.a)(ve),Ee=Object(r.useCallback)((function(e){if(!me){var t=pe-1;if(t<0){if(!U)return;t=je-1}ee.current="prev",null==j||j(t,e)}}),[me,pe,j,U,je]),ge=Object(b.a)((function(e){if(!me){var t=pe+1;if(t>=je){if(!U)return;t=0}ee.current="next",null==j||j(t,e)}})),xe=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:xe.current,prev:Ee,next:ge}}));var ye=Object(b.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(xe.current)&&($?Ee():ge())})),we="next"===ae?"start":"end";p((function(){i||(null==g||g(pe,we),null==w||w(pe,we))}),[pe]);var Ne="".concat(Q,"-item-").concat(ae),Ce="".concat(Q,"-item-").concat(we),De=Object(r.useCallback)((function(e){Object(L.a)(e),null==g||g(pe,we)}),[g,pe,we]),ke=Object(r.useCallback)((function(){de(!1),null==w||w(pe,we)}),[w,pe,we]),Ie=Object(r.useCallback)((function(e){if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?ge(e):Ee(e));case"ArrowRight":return e.preventDefault(),void($?Ee(e):ge(e))}null==I||I(e)}),[k,I,Ee,ge,$]),Pe=Object(r.useCallback)((function(e){"hover"===P&&le(!0),null==T||T(e)}),[P,T]),Te=Object(r.useCallback)((function(e){le(!1),null==R||R(e)}),[R]),Re=Object(r.useRef)(0),Se=Object(r.useRef)(0),Me=h(),Le=Object(r.useCallback)((function(e){Re.current=e.touches[0].clientX,Se.current=0,"hover"===P&&le(!0),null==K||K(e)}),[P,K]),Ae=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Se.current=0:Se.current=e.touches[0].clientX-Re.current,null==X||X(e)}),[X]),Be=Object(r.useCallback)((function(e){if(J){var t=Se.current;Math.abs(t)>40&&(t>0?Ee(e):ge(e))}"hover"===P&&Me.set((function(){le(!1)}),N||void 0),null==z||z(e)}),[J,P,Ee,ge,Me,N,z]),Ue=null!=N&&!ie&&!me,We=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(Ue){var n=$?Ee:ge;return We.current=window.setInterval(document.visibilityState?ye:n,null!=(e=null!=(t=he.current)?t:N)?e:void 0),function(){null!==We.current&&clearInterval(We.current)}}}),[Ue,Ee,ge,he,N,ye,$]);var Je=Object(r.useMemo)((function(){return u&&Array.from({length:je},(function(e,t){return function(e){null==j||j(t,e)}}))}),[u,je,j]);return Object(D.jsxs)(c,W(W({ref:xe},_),{},{onKeyDown:Ie,onMouseOver:Pe,onMouseOut:Te,onTouchStart:Le,onTouchMove:Ae,onTouchEnd:Be,className:x()(q,Q,i&&"slide",l&&"".concat(Q,"-fade"),Y&&"".concat(Q,"-").concat(Y)),children:[u&&Object(D.jsx)("div",{className:"".concat(Q,"-indicators"),children:S(H,(function(e,t){return Object(D.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[t]:"Slide ".concat(t+1),className:t===pe?"active":void 0,onClick:Je?Je[t]:void 0,"aria-current":t===pe},t)}))}),Object(D.jsx)("div",{className:"".concat(Q,"-inner"),children:S(H,(function(e,t){var n=t===pe;return i?Object(D.jsx)(A.a,{in:n,onEnter:n?De:void 0,onEntered:n?ke:void 0,addEndListener:M.a,children:function(t,a){return r.cloneElement(e,W(W({},a),{},{className:x()(e.props.className,n&&"entered"!==t&&Ne,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Ce)}))}}):r.cloneElement(e,{className:x()(e.props.className,n&&"active")})}))}),s&&Object(D.jsxs)(D.Fragment,{children:[(U||0!==v)&&Object(D.jsxs)(E.a,{className:"".concat(Q,"-control-prev"),onClick:Ee,children:[V,Z&&Object(D.jsx)("span",{className:"visually-hidden",children:Z})]}),(U||v!==je-1)&&Object(D.jsxs)(E.a,{className:"".concat(Q,"-control-next"),onClick:ge,children:[F,G&&Object(D.jsx)("span",{className:"visually-hidden",children:G})]})]})]}))}));K.displayName="Carousel",K.defaultProps=J;var X=Object.assign(K,{Caption:N,Item:R});var z=function(){return c.a.createElement(X,{fade:!0,pause:"false"},c.a.createElement(X.Item,null,c.a.createElement("img",{src:Object(u.e)("/img/slideShow/storeEnterance.jpeg"),className:"d-block w-100 "+s.a.img,alt:"Front of Store"}),c.a.createElement(X.Caption,{bsPrefix:s.a.caption1},c.a.createElement("h3",{className:s.a.h3},"FAMILY OWNED AND OPERATED"))),c.a.createElement(X.Item,null,c.a.createElement("img",{src:Object(u.e)("/img/slideShow/boomTruck1.jpg"),className:"d-block w-100 "+s.a.img,alt:"Delivery Truck"}),c.a.createElement(X.Caption,{bsPrefix:s.a.caption2},c.a.createElement("h3",{className:s.a.h3},"WE DELIVER"),c.a.createElement("p",{className:s.a.p},"BOOM TRUCK AVAILABLE"))),c.a.createElement(X.Item,null,c.a.createElement("img",{src:Object(u.e)("/img/slideShow/house.jpeg"),className:"d-block w-100 "+s.a.img,alt:"House Under Construction"}),c.a.createElement(X.Caption,{bsPrefix:s.a.caption3},c.a.createElement("h3",{className:s.a.h3},"NO JOB TOO BIG OR TOO SMALL"))))},V=n("dnWM"),Z=n("Mz5C"),F=n.n(Z),G=n("6xyR"),Y=n("7vrA"),q=n("3Z9Z"),H=n("JI6e"),_=function(){var e=Object(u.d)("795933130"),t=[];return e.allDataJson.nodes.forEach((function(e,n){var a=e.slug,r=e.products,c=a.split("/")[2].replace(/-/g," ");t.push({path:a,key:n,name:c,src:r[0].image.src,alt:r[0].image.alt})})),c.a.createElement(Y.a,{id:F.a.listContainer},c.a.createElement(q.a,{xs:1,sm:1,md:2,lg:3},t.map((function(e){return c.a.createElement(H.a,{style:{padding:"12px"}},c.a.createElement(G.a,{className:"text-center",key:e.key,style:{border:"none"}},c.a.createElement(u.a,{to:e.path},c.a.createElement(G.a.Img,{varient:"top",src:Object(u.e)(e.src),style:{borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},alt:e.alt})),c.a.createElement(u.a,{to:e.path,className:F.a.listP},c.a.createElement(G.a.Body,{className:"bg-dark",style:{borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"}},e.name," ",c.a.createElement("i",{className:"fa fa-angle-right "+F.a.rightArrow})))))}))))},Q=function(e){function t(t){var n;return(n=e.call(this,t)||this).disclaimer=c.a.createRef(),n.closeDisclaimer=n.closeDisclaimer.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.closeDisclaimer=function(){this.disclaimer.current.style.display="none",clearTimeout(this.timer)},n.componentDidMount=function(){this.timer=setTimeout(this.closeDisclaimer,15e3)},n.componentWillUnmount=function(){clearTimeout(this.timer)},n.render=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{id:F.a.intro},c.a.createElement(z,null)),c.a.createElement(Y.a,{fluid:!0},c.a.createElement(q.a,{className:"bg-dark"},c.a.createElement(H.a,{md:12,lg:6,className:F.a.col},c.a.createElement("div",null,c.a.createElement(i.a,{text:"QUALITY MATERIALS",lightText:!0,style:{marginTop:0}}),c.a.createElement("p",{className:F.a.moreInfoP},"We are proud to serve contractors and homeowners as your local source for quality building materials."))),c.a.createElement(H.a,{md:12,lg:6,as:"img",src:Object(u.e)("/img/deck.jpg"),alt:"Deck",style:{padding:"0"}}))),c.a.createElement(Y.a,{fluid:!0},c.a.createElement(q.a,{className:"bg-dark"},c.a.createElement(H.a,{md:12,lg:6,as:"img",src:Object(u.e)("/img/boomTruck2.jpg"),alt:"Delivery truck",style:{padding:"0"}}),c.a.createElement(H.a,{md:12,lg:6,className:F.a.col},c.a.createElement("div",null,c.a.createElement(i.a,{text:"WE DELIVER",lightText:!0,style:{marginTop:0}}),c.a.createElement("p",{className:F.a.moreInfoP},"Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas."))))),c.a.createElement(Y.a,null,c.a.createElement(i.a,{text:"PRODUCTS"}),c.a.createElement(V.a,null),c.a.createElement(_,null)),c.a.createElement("div",{id:F.a.disclaimerContainer,ref:this.disclaimer,style:{display:"flex"}},c.a.createElement("div",{id:F.a.disclaimer},c.a.createElement("button",{id:F.a.closeDisclaimer,onClick:this.closeDisclaimer},"×"),c.a.createElement("p",null,"Disclaimer: This website is NOT the business website for the company pictured herein.  The images and logos are used with permission for demonstration and educational purposes only."))))},t}(c.a.Component);t.default=Q},ZCME:function(e,t,n){e.exports={img:"slideshow-module--img--2CDnJ",h3:"slideshow-module--h3--2bst_",p:"slideshow-module--p--1PwnG",caption1:"slideshow-module--caption1--3L9MC",caption2:"slideshow-module--caption2--3nWp9",caption3:"slideshow-module--caption3--Re-c-"}}}]);
//# sourceMappingURL=component---src-pages-index-js-7b05e15b206993fe51f9.js.map