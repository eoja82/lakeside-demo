(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Mz5C:function(e,t,r){e.exports={intro:"index-module--intro--1b2xc",listP:"index-module--listP--3OLB8",rightArrow:"index-module--rightArrow--3uaEb",moveArrow:"index-module--moveArrow--1c6gK",h3:"index-module--h3--2MFFs",col:"index-module--col--giSr_",moreInfoHeader:"index-module--moreInfoHeader--9rP3j",headerUnderline:"index-module--headerUnderline--P8TVH",moreInfoP:"index-module--moreInfoP--1aOd_",moreInfoImg:"index-module--moreInfoImg--3Kj5P",productDiv:"index-module--productDiv--2I6iD",products:"index-module--products--3Q6oI",quote:"index-module--quote--2eyEz",disclaimerContainer:"index-module--disclaimerContainer--DRibE",disclaimer:"index-module--disclaimer--3XgWX",closeDisclaimer:"index-module--closeDisclaimer--2FMjA"}},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("9Hrx"),n=r("q1tI"),c=r.n(n),o=r("Bl7J"),i=r("Wbzz"),l=r("Mz5C"),s=r.n(l),u=r("ZCME"),d=r.n(u),m=r("tB/L"),b=r("zBUk"),f=r("XpCt"),p=r("ZCiN");var O=function(e,t){var r=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(!r.current)return e();r.current=!1}),t)},j=r("Xyuu");var v=r("i52p"),h=Math.pow(2,31)-1;function g(){var e=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(n.useRef)();return Object(v.a)((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(a,n){void 0===n&&(n=0),e()&&(r(),n<=h?t.current=setTimeout(a,n):function e(t,r,a){var n=a-Date.now();t.current=n<=h?setTimeout(r,n):setTimeout((function(){return e(t,r,a)}),h)}(t,a,Date.now()+n))},clear:r}}),[])}var y=r("8lGn"),E=r("TSYQ"),x=r.n(E),w=r("y8DL"),P=r("YdCC"),N=Object(P.a)("carousel-caption"),D=r("vUet"),C=r("nKUr"),I=["as","bsPrefix","className"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,n=e.bsPrefix,c=e.className,o=Object(f.a)(e,I),i=x()(c,Object(D.a)(n,"carousel-item"));return Object(C.jsx)(a,S(S({ref:t},o),{},{className:i}))}));R.displayName="CarouselItem";var T=R;function M(e,t){var r=0;return n.Children.map(e,(function(e){return n.isValidElement(e)?t(e,r++):e}))}var L=r("wsUu"),A=r("z+q/"),B=r("ASpx"),U=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:Object(C.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:Object(C.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var z=n.forwardRef((function(e,t){var r=Object(w.a)(e,{activeIndex:"onSelect"}),a=r.as,c=void 0===a?"div":a,o=r.bsPrefix,i=r.slide,l=r.fade,s=r.controls,u=r.indicators,d=r.indicatorLabels,m=r.activeIndex,v=r.onSelect,h=r.onSlide,E=r.onSlid,P=r.interval,N=r.keyboard,I=r.onKeyDown,k=r.pause,S=r.onMouseOver,R=r.onMouseOut,T=r.wrap,H=r.touch,F=r.onTouchStart,z=r.onTouchMove,J=r.onTouchEnd,K=r.prevIcon,X=r.prevLabel,q=r.nextIcon,V=r.nextLabel,Z=r.variant,G=r.className,Y=r.children,Q=Object(f.a)(r,U),_=Object(D.a)(o,"carousel"),$=Object(D.b)(),ee=Object(n.useRef)(null),te=Object(n.useState)("next"),re=Object(b.a)(te,2),ae=re[0],ne=re[1],ce=Object(n.useState)(!1),oe=Object(b.a)(ce,2),ie=oe[0],le=oe[1],se=Object(n.useState)(!1),ue=Object(b.a)(se,2),de=ue[0],me=ue[1],be=Object(n.useState)(m||0),fe=Object(b.a)(be,2),pe=fe[0],Oe=fe[1];de||m===pe||(ee.current?ne(ee.current):ne((m||0)>pe?"next":"prev"),i&&me(!0),Oe(m||0)),Object(n.useEffect)((function(){ee.current&&(ee.current=null)}));var je,ve=0;!function(e,t){var r=0;n.Children.forEach(e,(function(e){n.isValidElement(e)&&t(e,r++)}))}(Y,(function(e,t){++ve,t===m&&(je=e.props.interval)}));var he=Object(j.a)(je),ge=Object(n.useCallback)((function(e){if(!de){var t=pe-1;if(t<0){if(!T)return;t=ve-1}ee.current="prev",null==v||v(t,e)}}),[de,pe,v,T,ve]),ye=Object(p.a)((function(e){if(!de){var t=pe+1;if(t>=ve){if(!T)return;t=0}ee.current="next",null==v||v(t,e)}})),Ee=Object(n.useRef)();Object(n.useImperativeHandle)(t,(function(){return{element:Ee.current,prev:ge,next:ye}}));var xe=Object(p.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ee.current)&&($?ge():ye())})),we="next"===ae?"start":"end";O((function(){i||(null==h||h(pe,we),null==E||E(pe,we))}),[pe]);var Pe="".concat(_,"-item-").concat(ae),Ne="".concat(_,"-item-").concat(we),De=Object(n.useCallback)((function(e){Object(A.a)(e),null==h||h(pe,we)}),[h,pe,we]),Ce=Object(n.useCallback)((function(){me(!1),null==E||E(pe,we)}),[E,pe,we]),Ie=Object(n.useCallback)((function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?ye(e):ge(e));case"ArrowRight":return e.preventDefault(),void($?ge(e):ye(e))}null==I||I(e)}),[N,I,ge,ye,$]),ke=Object(n.useCallback)((function(e){"hover"===k&&le(!0),null==S||S(e)}),[k,S]),Se=Object(n.useCallback)((function(e){le(!1),null==R||R(e)}),[R]),Re=Object(n.useRef)(0),Te=Object(n.useRef)(0),Me=g(),Le=Object(n.useCallback)((function(e){Re.current=e.touches[0].clientX,Te.current=0,"hover"===k&&le(!0),null==F||F(e)}),[k,F]),Ae=Object(n.useCallback)((function(e){e.touches&&e.touches.length>1?Te.current=0:Te.current=e.touches[0].clientX-Re.current,null==z||z(e)}),[z]),Be=Object(n.useCallback)((function(e){if(H){var t=Te.current;Math.abs(t)>40&&(t>0?ge(e):ye(e))}"hover"===k&&Me.set((function(){le(!1)}),P||void 0),null==J||J(e)}),[H,k,ge,ye,Me,P,J]),Ue=null!=P&&!ie&&!de,He=Object(n.useRef)();Object(n.useEffect)((function(){var e,t;if(Ue){var r=$?ge:ye;return He.current=window.setInterval(document.visibilityState?xe:r,null!=(e=null!=(t=he.current)?t:P)?e:void 0),function(){null!==He.current&&clearInterval(He.current)}}}),[Ue,ge,ye,he,P,xe,$]);var We=Object(n.useMemo)((function(){return u&&Array.from({length:ve},(function(e,t){return function(e){null==v||v(t,e)}}))}),[u,ve,v]);return Object(C.jsxs)(c,W(W({ref:Ee},Q),{},{onKeyDown:Ie,onMouseOver:ke,onMouseOut:Se,onTouchStart:Le,onTouchMove:Ae,onTouchEnd:Be,className:x()(G,_,i&&"slide",l&&"".concat(_,"-fade"),Z&&"".concat(_,"-").concat(Z)),children:[u&&Object(C.jsx)("div",{className:"".concat(_,"-indicators"),children:M(Y,(function(e,t){return Object(C.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=d&&d.length?d[t]:"Slide ".concat(t+1),className:t===pe?"active":void 0,onClick:We?We[t]:void 0,"aria-current":t===pe},t)}))}),Object(C.jsx)("div",{className:"".concat(_,"-inner"),children:M(Y,(function(e,t){var r=t===pe;return i?Object(C.jsx)(B.a,{in:r,onEnter:r?De:void 0,onEntered:r?Ce:void 0,addEndListener:L.a,children:function(t,a){return n.cloneElement(e,W(W({},a),{},{className:x()(e.props.className,r&&"entered"!==t&&Pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Ne)}))}}):n.cloneElement(e,{className:x()(e.props.className,r&&"active")})}))}),s&&Object(C.jsxs)(C.Fragment,{children:[(T||0!==m)&&Object(C.jsxs)(y.a,{className:"".concat(_,"-control-prev"),onClick:ge,children:[K,X&&Object(C.jsx)("span",{className:"visually-hidden",children:X})]}),(T||m!==ve-1)&&Object(C.jsxs)(y.a,{className:"".concat(_,"-control-next"),onClick:ye,children:[q,V&&Object(C.jsx)("span",{className:"visually-hidden",children:V})]})]})]}))}));z.displayName="Carousel",z.defaultProps=F;var J=Object.assign(z,{Caption:N,Item:T});var K=function(){return c.a.createElement(J,{fade:!0,pause:"false"},c.a.createElement(J.Item,null,c.a.createElement("img",{src:Object(i.e)("/img/slideShow/storeFront.jpeg"),className:"d-block w-100 "+d.a.img,alt:"Front of Store"}),c.a.createElement(J.Caption,{bsPrefix:d.a.caption1},c.a.createElement("h3",{className:d.a.h3},"FAMILY OWNED AND OPERATED"))),c.a.createElement(J.Item,null,c.a.createElement("img",{src:Object(i.e)("/img/slideShow/boomTruck1.jpg"),className:"d-block w-100 "+d.a.img,alt:"Delivery Truck"}),c.a.createElement(J.Caption,{bsPrefix:d.a.caption2},c.a.createElement("h3",{className:d.a.h3},"WE DELIVER"),c.a.createElement("p",{className:d.a.p},"BOOM TRUCK AVAILABLE"))),c.a.createElement(J.Item,null,c.a.createElement("img",{src:Object(i.e)("/img/slideShow/house.jpeg"),className:"d-block w-100 "+d.a.img,alt:"House Under Construction"}),c.a.createElement(J.Caption,{bsPrefix:d.a.caption3},c.a.createElement("h3",{className:d.a.h3},"NO JOB TOO BIG OR TOO SMALL"))))},X=r("dnWM"),q=r("U1MP"),V=["bsPrefix","className","variant","as"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var G=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.variant,c=e.as,o=void 0===c?"img":c,i=Object(f.a)(e,V),l=Object(D.a)(r,"card-img");return Object(C.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:x()(n?"".concat(l,"-").concat(n):l,a)},i))}));G.displayName="CardImg";var Y=G,Q=r("hhmD"),_=["bsPrefix","className","as"];function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,c=e.as,o=void 0===c?"div":c,i=Object(f.a)(e,_),l=Object(D.a)(r,"card-header"),s=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:l}}),[l]);return Object(C.jsx)(Q.a.Provider,{value:s,children:Object(C.jsx)(o,ee(ee({ref:t},i),{},{className:x()(a,l)}))})}));te.displayName="CardHeader";var re=te,ae=["bsPrefix","className","bg","text","border","body","children","as"];function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=Object(q.a)("h5"),ie=Object(q.a)("h6"),le=Object(P.a)("card-body"),se=Object(P.a)("card-title",{Component:oe}),ue=Object(P.a)("card-subtitle",{Component:ie}),de=Object(P.a)("card-link",{Component:"a"}),me=Object(P.a)("card-text",{Component:"p"}),be=Object(P.a)("card-footer"),fe=Object(P.a)("card-img-overlay"),pe=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.bg,c=e.text,o=e.border,i=e.body,l=e.children,s=e.as,u=void 0===s?"div":s,d=Object(f.a)(e,ae),m=Object(D.a)(r,"card");return Object(C.jsx)(u,ce(ce({ref:t},d),{},{className:x()(a,m,n&&"bg-".concat(n),c&&"text-".concat(c),o&&"border-".concat(o)),children:i?Object(C.jsx)(le,{children:l}):l}))}));pe.displayName="Card",pe.defaultProps={body:!1};var Oe=Object.assign(pe,{Img:Y,Title:se,Subtitle:ue,Body:le,Link:de,Text:me,Header:re,Footer:be,ImgOverlay:fe}),je=r("7vrA"),ve=r("3Z9Z"),he=r("JI6e"),ge=function(){var e=Object(i.d)("3514292898"),t=[];return e.allDataJson.nodes.forEach((function(e,r){var a=e.slug,n=e.images,c=a.split("/")[2].replace(/-/g," ");t.push({path:a,key:r,name:c,src:n[0].image,alt:n[0].type})})),c.a.createElement(je.a,null,c.a.createElement(ve.a,{xs:1,sm:1,md:2,lg:3},t.map((function(e){return c.a.createElement(he.a,{style:{padding:"12px"}},c.a.createElement(Oe,{className:"text-center",key:e.key,style:{border:"none"}},c.a.createElement(i.a,{to:e.path},c.a.createElement(Oe.Img,{varient:"top",src:Object(i.e)(e.src),style:{borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},alt:e.alt})),c.a.createElement(i.a,{to:e.path,className:s.a.listP},c.a.createElement(Oe.Body,{className:"bg-dark",style:{borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"}},e.name," ",c.a.createElement("i",{className:"fa fa-angle-right "+s.a.rightArrow})))))}))))},ye=function(e){function t(t){var r;return(r=e.call(this,t)||this).disclaimer=c.a.createRef(),r.closeDisclaimer=r.closeDisclaimer.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}Object(a.a)(t,e);var r=t.prototype;return r.closeDisclaimer=function(){this.disclaimer.current.style.display="none",clearTimeout(this.timer)},r.componentDidMount=function(){this.timer=setTimeout(this.closeDisclaimer,15e3)},r.componentWillUnmount=function(){clearTimeout(this.timer)},r.render=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{id:s.a.intro},c.a.createElement(K,null)),c.a.createElement(je.a,{fluid:!0},c.a.createElement(ve.a,{className:"bg-dark"},c.a.createElement(he.a,{md:12,lg:6,className:s.a.col},c.a.createElement("div",null,c.a.createElement("h3",{className:s.a.moreInfoHeader},"QUALITY MATERIALS"),c.a.createElement("div",{className:s.a.headerUnderline}),c.a.createElement("p",{className:s.a.moreInfoP},"We are proud to serve contractors and homeowners as your local source for quality building materials."))),c.a.createElement(he.a,{md:12,lg:6,as:"img",src:Object(i.e)("/img/wharehouseFront.jpeg"),alt:"store front",style:{padding:"0"}}))),c.a.createElement(je.a,{fluid:!0},c.a.createElement(ve.a,{className:"bg-dark"},c.a.createElement(he.a,{md:12,lg:6,as:"img",src:Object(i.e)("/img/loadedTruck.jpg"),alt:"Delivery truck",style:{padding:"0"}}),c.a.createElement(he.a,{md:12,lg:6,className:s.a.col},c.a.createElement("div",null,c.a.createElement("h3",{className:s.a.moreInfoHeader},"WE DELIVER"),c.a.createElement("div",{className:s.a.headerUnderline}),c.a.createElement("p",{className:s.a.moreInfoP},"Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas."))))),c.a.createElement("div",{className:s.a.containerProd},c.a.createElement("div",{className:s.a.productDiv},c.a.createElement("h3",{className:s.a.h3},"PRODUCTS"),c.a.createElement("div",{className:s.a.headerUnderline}),c.a.createElement("div",{className:s.a.products},c.a.createElement(ge,null)),c.a.createElement("div",{className:s.a.quote},c.a.createElement(X.a,null)))),c.a.createElement("div",{id:s.a.disclaimerContainer,ref:this.disclaimer,style:{display:"flex"}},c.a.createElement("div",{id:s.a.disclaimer},c.a.createElement("button",{id:s.a.closeDisclaimer,onClick:this.closeDisclaimer},"×"),c.a.createElement("p",null,"Disclaimer: This website is NOT the business website for the company pictured herein.  The images and logos are used with permission for demonstration and educational purposes only."))))},t}(c.a.Component);t.default=ye},ZCME:function(e,t,r){e.exports={img:"slideshow-module--img--2CDnJ",h3:"slideshow-module--h3--2bst_",p:"slideshow-module--p--1PwnG",caption1:"slideshow-module--caption1--3L9MC",caption2:"slideshow-module--caption2--3nWp9",caption3:"slideshow-module--caption3--Re-c-"}}}]);
//# sourceMappingURL=component---src-pages-index-js-aba6021435c1a049a363.js.map