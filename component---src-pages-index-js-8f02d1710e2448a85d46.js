(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Ej13:function(e){e.exports=JSON.parse('{"data":{"allDataJson":{"nodes":[{"slug":"/products/docks/","images":[{"image":"/img/products/dock1.png","type":"docks"},{"image":"/img/products/dock2.png","type":"docks"}]},{"slug":"/products/hardware/","images":[{"image":"/img/products/plumbing.jpg","type":"hardware"},{"image":"/img/products/screws.jpg","type":"hardware"}]},{"slug":"/products/siding/","images":[{"image":"/img/products/siding1.jpg","type":"siding"},{"image":"/img/products/siding2.jpg","type":"siding"}]},{"slug":"/products/decking-and-railing/","images":[{"image":"/img/products/decking1.jpg","type":"decking-railing"},{"image":"/img/products/decking2.jpg","type":"decking-railing"}]},{"slug":"/products/paint-and-stain/","images":[{"image":"/img/products/paintStain1.jpg","type":"paint-stain"},{"image":"/img/products/paintStain2.jpg","type":"paint-stain"}]},{"slug":"/products/windows/","images":[{"image":"/img/products/window1.jpg","type":"windows"},{"image":"/img/products/window2.jpg","type":"windows"}]},{"slug":"/products/lumber/","images":[{"image":"/lumber/lumberRack.jpg","type":"lumber"},{"image":"/lumber/trtOnForklift.jpg","type":"lumber"}]},{"slug":"/products/roofing-and-steel/","images":[{"image":"/img/products/roof1.jpg","type":"roofing"},{"image":"/img/products/roof2.jpg","type":"roofing"}]},{"slug":"/products/stone/","images":[{"image":"/img/products/stone1.jpg","type":"stone"},{"image":"/img/products/stone2.jpg","type":"stone"}]},{"slug":"/products/doors/","images":[{"image":"/img/products/door1.jpg","type":"doors"},{"image":"/img/products/door2.jpg","type":"doors"}]}]}}}')},RXBc:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("pIFo"),a("KKXr");var i=a("Ej13"),s=a("q1tI"),n=a.n(s),r=a("Bl7J"),o=a("Wbzz"),l=a("Mz5C"),c=a.n(l),d=a("ZCME"),p=a.n(d);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[{src:"img/slideshow/twoTrucks.jpg",alt:"two delivery trucks"},{src:"img/slideshow/truckTRT.jpg",alt:"truck with treated lumber"},{src:"img/slideshow/catUnloading.jpg",alt:"cat unloading lumber"}],g=0,y=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).state={src:m[g].src,alt:m[g].alt,isActive:m[g].isActive,index:m[g].index},a.playPauseRef=n.a.createRef(),a.playRef=n.a.createRef(),a.pauseRef=n.a.createRef(),a.play=a.play.bind(u(a)),a.pause=a.pause.bind(u(a)),a.hideButton=a.hideButton.bind(u(a)),a.displayButton=a.displayButton.bind(u(a)),a.prevSlide=a.prevSlide.bind(u(a)),a.nextSlide=a.nextSlide.bind(u(a)),a.autoSlide=a.autoSlide.bind(u(a)),a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=i.prototype;return s.play=function(){this.autoSlide(),this.pauseRef.current.style.display="block",this.playRef.current.style.display="none"},s.pause=function(){clearInterval(this.next),this.pauseRef.current.style.display="none",this.playRef.current.style.display="block"},s.displayButton=function(){this.playPauseRef.current.style.display="block"},s.hideButton=function(){this.playPauseRef.current.style.display="none"},s.prevSlide=function(){0===g?(g=m.length-1,this.setState({src:m[g].src,alt:m[g].alt})):(g--,this.setState({src:m[g].src,alt:m[g].alt}))},s.nextSlide=function(){g===m.length-1?(g=0,this.setState({src:m[g].src,alt:m[g].alt})):(g++,this.setState({src:m[g].src,alt:m[g].alt}))},s.autoSlide=function(){this.next=setInterval(this.nextSlide,4e3)},s.componentDidMount=function(){this.autoSlide()},s.componentWillUnmount=function(){clearInterval(this.next)},s.render=function(){return n.a.createElement("div",{id:p.a.slideshow,onMouseEnter:this.displayButton,onMouseLeave:this.hideButton,role:"presentation"},n.a.createElement("img",{src:this.state.src,alt:this.state.alt,id:p.a.introSlides}),n.a.createElement("button",{id:p.a.prev,onClick:this.prevSlide,onMouseEnter:this.hideButton,onMouseLeave:this.displayButton},n.a.createElement("i",{className:"fa fa-angle-left"})),n.a.createElement("button",{id:p.a.next,onClick:this.nextSlide,onMouseEnter:this.hideButton,onMouseLeave:this.displayButton},n.a.createElement("i",{className:"fa fa-angle-right"})),n.a.createElement("div",{id:p.a.playPause,ref:this.playPauseRef,style:{display:"none"},role:"presentation"},n.a.createElement("button",{onClick:this.play,style:{display:"none"},id:p.a.play,ref:this.playRef},n.a.createElement("i",{className:"fa fa-play"})),n.a.createElement("button",{onClick:this.pause,style:{display:"block"},id:p.a.pause,ref:this.pauseRef},n.a.createElement("i",{className:"fa fa-pause"}))),n.a.createElement("div",{id:p.a.slideDots},m.map((function(e,t){var a=t===g;return n.a.createElement("div",{className:p.a.slideDot+" "+(a?p.a.activeDot:""),key:""+e.alt+t})}))))},i}(n.a.Component),f=a("dnWM");var h=function(){var e=i.data,t=[];return e.allDataJson.nodes.forEach((function(e,a){var i=e.slug,s=e.images,n=i.split("/")[2].replace(/-/g," ");t.push({path:i,key:a,name:n,src:s[0].image,alt:s[0].type})})),n.a.createElement("div",{id:c.a.list},t.map((function(e){return n.a.createElement(o.a,{to:e.path,key:e.key,className:c.a.listItem},n.a.createElement("div",null,n.a.createElement("img",{className:c.a.listImg,src:e.src,alt:e.alt}),n.a.createElement("p",{className:c.a.listP},e.name," ",n.a.createElement("i",{className:"fa fa-angle-right"}))))})))},E=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){return n.a.createElement(r.a,null,n.a.createElement("div",{id:c.a.intro},n.a.createElement(y,null),n.a.createElement("div",{id:c.a.about},n.a.createElement("h3",{className:c.a.h3},"Family owned and operated for over 30 years!"))),n.a.createElement("div",{className:c.a.moreInfo},n.a.createElement("div",{className:c.a.moreInfoIntro+" "+c.a.reverse},n.a.createElement("h2",{className:c.a.moreInfoIntroH2},"We are proud to serve contractors and homeowners as your local source for quality building materials."),n.a.createElement("img",{className:c.a.moreInfoImg,src:"/img/warehouseLogo.jpg",alt:"store front"}))),n.a.createElement("div",{className:c.a.containerProd},n.a.createElement("div",{className:c.a.productDiv},n.a.createElement("h3",{className:c.a.h3},"PRODUCTS"),n.a.createElement("div",{className:c.a.products},n.a.createElement(h,null)),n.a.createElement("div",{className:c.a.quote},n.a.createElement(f.a,null)))),n.a.createElement("div",{className:c.a.moreInfo},n.a.createElement("div",{className:c.a.moreInfoIntro},n.a.createElement("img",{className:c.a.moreInfoImg,src:"/img/loadedTruck.jpg",alt:"delivery truck"}),n.a.createElement("h2",{className:c.a.moreInfoIntroH2},"WE DELIVER! - Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas."))))},i}(n.a.Component);t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-8f02d1710e2448a85d46.js.map