(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Mz5C:function(e,t,a){e.exports={intro:"index-module--intro--1b2xc",list:"index-module--list--3g7VV",listItem:"index-module--listItem--2c9i_",listImg:"index-module--listImg--3v4dz",listP:"index-module--listP--3OLB8",about:"index-module--about--1XnaA",h3:"index-module--h3--2MFFs",moreInfo:"index-module--moreInfo--xU1cc",moreInfoIntro:"index-module--moreInfoIntro--1u-8O",moreInfoIntroH2:"index-module--moreInfoIntroH2--mF9Mc",moreInfoImg:"index-module--moreInfoImg--3Kj5P",containerProd:"index-module--containerProd--1Bqrt",productDiv:"index-module--productDiv--2I6iD",products:"index-module--products--3Q6oI",quote:"index-module--quote--2eyEz",reverse:"index-module--reverse--2qH-N"}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),o=a("jm5j"),i=a("q1tI"),l=a.n(i),s=a("Bl7J"),r=a("Wbzz"),d=a("Mz5C"),c=a.n(d),m=a("JX7q"),u=a("ZCME"),p=a.n(u),g=[{src:"img/slideshow/twoTrucks.jpg",alt:"two delivery trucks"},{src:"img/slideshow/truckTRT.jpg",alt:"truck with treated lumber"},{src:"img/slideshow/catUnloading.jpg",alt:"bobcat unloading lumber"}],f=0,h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={src:g[f].src,alt:g[f].alt,isActive:g[f].isActive,index:g[f].index},a.playPauseRef=l.a.createRef(),a.playRef=l.a.createRef(),a.pauseRef=l.a.createRef(),a.play=a.play.bind(Object(m.a)(a)),a.pause=a.pause.bind(Object(m.a)(a)),a.hideButton=a.hideButton.bind(Object(m.a)(a)),a.displayButton=a.displayButton.bind(Object(m.a)(a)),a.prevSlide=a.prevSlide.bind(Object(m.a)(a)),a.nextSlide=a.nextSlide.bind(Object(m.a)(a)),a.autoSlide=a.autoSlide.bind(Object(m.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.play=function(){this.autoSlide(),this.pauseRef.current.style.display="block",this.playRef.current.style.display="none"},a.pause=function(){clearInterval(this.next),this.pauseRef.current.style.display="none",this.playRef.current.style.display="block"},a.displayButton=function(){this.playPauseRef.current.style.display="block"},a.hideButton=function(){this.playPauseRef.current.style.display="none"},a.prevSlide=function(){0===f?(f=g.length-1,this.setState({src:g[f].src,alt:g[f].alt})):(f--,this.setState({src:g[f].src,alt:g[f].alt}))},a.nextSlide=function(){f===g.length-1?(f=0,this.setState({src:g[f].src,alt:g[f].alt})):(f++,this.setState({src:g[f].src,alt:g[f].alt}))},a.autoSlide=function(){this.next=setInterval(this.nextSlide,4e3)},a.componentDidMount=function(){this.autoSlide()},a.componentWillUnmount=function(){clearInterval(this.next)},a.render=function(){return l.a.createElement("div",{id:p.a.slideshow,onMouseEnter:this.displayButton,onMouseLeave:this.hideButton,role:"presentation"},l.a.createElement("img",{src:this.state.src,alt:this.state.alt,id:p.a.introSlides}),l.a.createElement("button",{id:p.a.prev,onClick:this.prevSlide,onMouseEnter:this.hideButton,onMouseLeave:this.displayButton,"aria-label":"previous slide"},l.a.createElement("i",{className:"fa fa-angle-left"})),l.a.createElement("button",{id:p.a.next,onClick:this.nextSlide,onMouseEnter:this.hideButton,onMouseLeave:this.displayButton,"aria-label":"next slide"},l.a.createElement("i",{className:"fa fa-angle-right"})),l.a.createElement("div",{id:p.a.playPause,ref:this.playPauseRef,style:{display:"none"},role:"presentation"},l.a.createElement("button",{onClick:this.play,style:{display:"none"},id:p.a.play,ref:this.playRef},l.a.createElement("i",{className:"fa fa-play"})),l.a.createElement("button",{onClick:this.pause,style:{display:"block"},id:p.a.pause,ref:this.pauseRef},l.a.createElement("i",{className:"fa fa-pause"}))),l.a.createElement("div",{id:p.a.slideDots},g.map((function(e,t){var a=t===f;return l.a.createElement("div",{className:p.a.slideDot+" "+(a?p.a.activeDot:""),key:""+e.alt+t})}))))},t}(l.a.Component),y=a("dnWM"),E=function(){var e=o.data,t=[];return e.allDataJson.nodes.forEach((function(e,a){var n=e.slug,o=e.images,i=n.split("/")[2].replace(/-/g," ");t.push({path:n,key:a,name:i,src:o[0].image,alt:o[0].type})})),l.a.createElement("div",{id:c.a.list},t.map((function(e){return l.a.createElement(r.a,{to:e.path,key:e.key,className:c.a.listItem},l.a.createElement("div",null,l.a.createElement("img",{className:c.a.listImg,src:e.src,alt:e.alt}),l.a.createElement("p",{className:c.a.listP},e.name," ",l.a.createElement("i",{className:"fa fa-angle-right"}))))})))},v=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{id:c.a.intro},l.a.createElement(h,null),l.a.createElement("div",{id:c.a.about},l.a.createElement("h3",{className:c.a.h3},"Family owned and operated for over 30 years!"))),l.a.createElement("div",{className:c.a.moreInfo},l.a.createElement("div",{className:c.a.moreInfoIntro+" "+c.a.reverse},l.a.createElement("h2",{className:c.a.moreInfoIntroH2},"We are proud to serve contractors and homeowners as your local source for quality building materials."),l.a.createElement("img",{className:c.a.moreInfoImg,src:"/img/wharehouseFront.jpeg",alt:"store front"}))),l.a.createElement("div",{className:c.a.containerProd},l.a.createElement("div",{className:c.a.productDiv},l.a.createElement("h3",{className:c.a.h3},"PRODUCTS"),l.a.createElement("div",{className:c.a.products},l.a.createElement(E,null)),l.a.createElement("div",{className:c.a.quote},l.a.createElement(y.a,null)))),l.a.createElement("div",{className:c.a.moreInfo},l.a.createElement("div",{className:c.a.moreInfoIntro},l.a.createElement("img",{className:c.a.moreInfoImg,src:"/img/loadedTruck.jpg",alt:"delivery truck"}),l.a.createElement("h2",{className:c.a.moreInfoIntroH2},"WE DELIVER! - Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas."))))},t}(l.a.Component);t.default=v},ZCME:function(e,t,a){e.exports={slideshow:"slideshow-module--slideshow--ZCROj",introSlides:"slideshow-module--introSlides--2g-9k",prev:"slideshow-module--prev--Wf75T",next:"slideshow-module--next--2RkY2",playPause:"slideshow-module--playPause--2NRoG",play:"slideshow-module--play--1RPsL",pause:"slideshow-module--pause--2DWYs",slideDots:"slideshow-module--slideDots--PFGeq",slideDot:"slideshow-module--slideDot--1rpgY",activeDot:"slideshow-module--activeDot--35SQy"}},dnWM:function(e,t,a){"use strict";var n=a("JX7q"),o=a("dI71"),i=a("q1tI"),l=a.n(i),s=a("TJpk"),r=a.n(s),d=a("k1Bu"),c=a.n(d),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).openModal=a.openModal.bind(Object(n.a)(a)),a.closeModal=a.closeModal.bind(Object(n.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.openModal=function(){document.getElementById("modal").style.display="block"},a.closeModal=function(e){var t=document.getElementById("modal"),a=document.getElementById("xClose");e.target!==t&&e.target!==a||(t.style.display="none")},a.componentDidMount=function(){window.addEventListener("click",this.closeModal)},a.componentWillUnmount=function(){window.removeEventListener("click",this.closeModal)},a.render=function(){return l.a.createElement("div",null,l.a.createElement(r.a,null,l.a.createElement("link",{rel:"stylesheet",href:"https://www.w3schools.com/w3css/4/w3.css"})),l.a.createElement("button",{id:c.a.button,onClick:this.openModal},"Get A Quote"),l.a.createElement("div",{id:"modal",onClick:this.closeModal,className:"w3-modal w3-animate-zoom",role:"presentation"},l.a.createElement("div",{className:"w3-modal-content w3-card-4 "+c.a.modalContent},l.a.createElement("header",{className:"w3-container w3-blue"},l.a.createElement("span",{id:"xClose",onClick:this.closeModal,className:"w3-button w3-display-topright",role:"presentation"},"×"),l.a.createElement("h2",{id:c.a.h2},"Please call or email us for a quote:")),l.a.createElement("div",{id:c.a.contactInfo,className:"w3-container"},l.a.createElement("p",null,l.a.createElement("a",{href:"tel:1-218-832-3300"},l.a.createElement("i",{className:"fa fa-phone"})," 1-218-832-3300")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:eric@lakesidemarcell.com"},l.a.createElement("i",{className:"fa fa-envelope-square"})," eric@lakesidemarcell.com"))))))},t}(l.a.Component);t.a=m},jm5j:function(e){e.exports=JSON.parse('{"data":{"allDataJson":{"nodes":[{"slug":"/products/docks/","images":[{"image":"/img/products/dock1.png","type":"docks"},{"image":"/img/products/dock2.png","type":"docks"}]},{"slug":"/products/hardware/","images":[{"image":"/img/products/plumbing.jpg","type":"hardware"},{"image":"/img/products/screws.jpg","type":"hardware"}]},{"slug":"/products/decking-and-railing/","images":[{"image":"/img/products/decking1.jpg","type":"decking-railing"},{"image":"/img/products/decking2.jpg","type":"decking-railing"}]},{"slug":"/products/paint-and-stain/","images":[{"image":"/img/products/paintStain1.jpg","type":"paint-stain"},{"image":"/img/products/paintStain2.jpg","type":"paint-stain"}]},{"slug":"/products/lumber/","images":[{"image":"/lumber/lumberRack.jpg","type":"lumber"},{"image":"/lumber/trtOnForklift.jpg","type":"lumber"}]},{"slug":"/products/roofing-and-steel/","images":[{"image":"/img/products/roof1.jpg","type":"roofing"},{"image":"/img/products/roof2.jpg","type":"roofing"}]},{"slug":"/products/stone/","images":[{"image":"/img/products/stone1.jpg","type":"stone"},{"image":"/img/products/stone2.jpg","type":"stone"}]},{"slug":"/products/windows/","images":[{"image":"/img/products/window1.jpg","type":"windows"},{"image":"/img/products/window2.jpg","type":"windows"}]},{"slug":"/products/doors/","images":[{"image":"/img/products/door1.jpg","type":"doors"},{"image":"/img/products/door2.jpg","type":"doors"}]},{"slug":"/products/siding/","images":[{"image":"/img/products/siding1.jpg","type":"siding"},{"image":"/img/products/siding2.jpg","type":"siding"}]}]}}}')},k1Bu:function(e,t,a){e.exports={button:"getQuote-module--button--3orSd",modalContent:"getQuote-module--modalContent--279p0",contactInfo:"getQuote-module--contactInfo--HF7M0",modal:"getQuote-module--modal--ET5-k",h2:"getQuote-module--h2--dQQDP"}}}]);
//# sourceMappingURL=component---src-pages-index-js-60d5501fc6303544b79a.js.map