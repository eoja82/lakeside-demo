(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5GCD":function(e){e.exports=JSON.parse('{"data":{"allDataJson":{"nodes":[{"slug":"/products/doors/"},{"slug":"/products/decking-and-railing/"},{"slug":"/products/docks/"},{"slug":"/products/hardware/"},{"slug":"/products/siding/"},{"slug":"/products/paint-and-stain/"},{"slug":"/products/lumber/"},{"slug":"/products/roofing-and-steel/"},{"slug":"/products/windows/"},{"slug":"/products/stone/"}]}}}')},"6cLl":function(e,t,a){e.exports={layout:"product-module--layout--1uzEn"}},Dltz:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return k}));var o=a("q1tI"),n=a.n(o),r=a("Bl7J"),l=a("dI71"),c=a("TJpk"),d=a("cHZr"),i=a.n(d),s=a("dnWM"),u=a("Wbzz"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props.product.slug.split("/")[2].replace(/-/g," "),t=this.props.product.descriptionLogos.split(/\*/g);return n.a.createElement("div",{id:i.a.container,style:{backgroundImage:"url("+Object(u.c)("/img/graySiding.jpg")+")"}},n.a.createElement(c.Helmet,null,n.a.createElement("title",null,"Lakeside Lumber is your source for "+e),n.a.createElement("meta",{name:"description",content:this.props.product.description+this.props.product.descriptionLogos}),n.a.createElement("meta",{name:"keywords",content:"marcell, bigfok, effie, deer river, talmoon, grand rapids, "+e})),n.a.createElement("div",{id:i.a.header},n.a.createElement("h1",{id:i.a.h1},this.props.product.description)),n.a.createElement("div",{id:i.a.productImg},this.props.product.images.map((function(e,t){return n.a.createElement("img",{src:Object(u.c)(e.image),alt:e.type,key:t,className:i.a.productImg})}))),n.a.createElement("div",{id:i.a.logoDescription},n.a.createElement("p",{className:i.a.p},"Click on a logo below for more information."),n.a.createElement("div",null,t.map((function(e,t){return n.a.createElement("p",{className:i.a.pDiscription+" "+i.a.p,key:t},e)})))),n.a.createElement("div",{className:i.a.getQuote},n.a.createElement(s.a,null)),n.a.createElement("div",{id:i.a.products},this.props.product.product.map((function(e,t){return n.a.createElement("div",{key:t,id:i.a.logoDiv},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},e.logo?n.a.createElement("img",{src:Object(u.c)(e.logo),alt:e.manufacturer,className:i.a.img}):n.a.createElement("h3",{className:i.a.h3},e.manufacturer)))}))))},t}(n.a.Component),p=a("5GCD"),g=a("bwW8"),f=a.n(g),h=function(){var e=p.data,t={backgroundColor:"rgb(198, 198, 198, .7)",color:"black"},a=[];return e.allDataJson.nodes.forEach((function(e,t){var o=e.slug,n=o.split("/")[2].replace(/-/g," ");a.push({path:o,key:t,name:n})})),n.a.createElement("div",{id:f.a.sidebar},a.map((function(e){return n.a.createElement(u.a,{to:e.path,id:f.a.link,activeStyle:t,key:e.key},e.name)})))},E=a("6cLl"),b=a.n(E),k=(t.default=function(e){var t=e.data;return n.a.createElement(r.a,null,n.a.createElement("div",{id:b.a.layout},n.a.createElement(h,{id:b.a.sideBar}),n.a.createElement(m,{id:b.a.display,product:t.dataJson})))},"3983847429")},bwW8:function(e,t,a){e.exports={sidebar:"prodSidebar-module--sidebar--1Dh49",link:"prodSidebar-module--link--2ZbeG"}},cHZr:function(e,t,a){e.exports={container:"products-module--container--1E-Sy",header:"products-module--header--2vO0r",h1:"products-module--h1--25pf0",productHeader:"products-module--productHeader--2HCdg",productImg:"products-module--productImg--pgmOo",logoDescription:"products-module--logoDescription--3UBLX",p:"products-module--p--zTXGg",pDiscription:"products-module--pDiscription--2yi8h",getQuote:"products-module--getQuote--iYTl9",products:"products-module--products--1PJiL",img:"products-module--img--294Zr",h3:"products-module--h3--1cGMs",logoDiv:"products-module--logoDiv--2rv4g"}},dnWM:function(e,t,a){"use strict";var o=a("JX7q"),n=a("dI71"),r=a("q1tI"),l=a.n(r),c=a("TJpk"),d=a.n(c),i=a("k1Bu"),s=a.n(i),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).openModal=a.openModal.bind(Object(o.a)(a)),a.closeModal=a.closeModal.bind(Object(o.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.openModal=function(){document.getElementById("modal").style.display="block"},a.closeModal=function(e){var t=document.getElementById("modal"),a=document.getElementById("xClose");e.target!==t&&e.target!==a||(t.style.display="none")},a.componentDidMount=function(){window.addEventListener("click",this.closeModal)},a.componentWillUnmount=function(){window.removeEventListener("click",this.closeModal)},a.render=function(){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement("link",{rel:"stylesheet",href:"https://www.w3schools.com/w3css/4/w3.css"})),l.a.createElement("button",{id:s.a.button,onClick:this.openModal},"Get A Quote"),l.a.createElement("div",{id:"modal",onClick:this.closeModal,className:"w3-modal w3-animate-zoom",role:"presentation"},l.a.createElement("div",{className:"w3-modal-content w3-card-4 "+s.a.modalContent},l.a.createElement("header",{className:"w3-container w3-blue"},l.a.createElement("span",{id:"xClose",onClick:this.closeModal,className:"w3-button w3-display-topright",role:"presentation"},"×"),l.a.createElement("h2",{id:s.a.h2},"Please call or email us for a quote:")),l.a.createElement("div",{id:s.a.contactInfo,className:"w3-container"},l.a.createElement("p",null,l.a.createElement("a",{href:"tel:1-555-555-5555"},l.a.createElement("i",{className:"fa fa-phone"})," 1-555-555-5555")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:john@fakeemail.com"},l.a.createElement("i",{className:"fa fa-envelope-square"})," john@fakeemail.com"))))))},t}(l.a.Component);t.a=u},k1Bu:function(e,t,a){e.exports={button:"getQuote-module--button--3orSd",modalContent:"getQuote-module--modalContent--279p0",contactInfo:"getQuote-module--contactInfo--HF7M0",modal:"getQuote-module--modal--ET5-k",h2:"getQuote-module--h2--dQQDP"}}}]);
//# sourceMappingURL=component---src-templates-product-js-45176e3f17d17d188940.js.map