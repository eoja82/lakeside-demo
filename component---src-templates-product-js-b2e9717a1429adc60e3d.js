(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5GCD":function(e){e.exports=JSON.parse('{"data":{"allDataJson":{"nodes":[{"slug":"/products/decking-and-railing/"},{"slug":"/products/docks/"},{"slug":"/products/doors/"},{"slug":"/products/hardware/"},{"slug":"/products/paint-and-stain/"},{"slug":"/products/siding/"},{"slug":"/products/lumber/"},{"slug":"/products/roofing-and-steel/"},{"slug":"/products/stone/"},{"slug":"/products/windows/"}]}}}')},"6cLl":function(e,t,a){e.exports={layout:"product-module--layout--1uzEn"}},Dltz:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return y}));var o=a("q1tI"),r=a.n(o),l=a("Bl7J"),n=a("dI71"),c=a("TJpk"),d=a("cHZr"),i=a.n(d),s=a("dnWM"),u=a("Wbzz"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.product.slug.split("/")[2].replace(/-/g," "),t=this.props.product.descriptionLogos.split(/\*/g),a=/^http/i;return r.a.createElement("div",{id:i.a.container,style:{backgroundImage:"url("+Object(u.c)("/img/graySiding.jpg")+")"}},r.a.createElement(c.Helmet,null,r.a.createElement("title",null,"Lakeside Lumber is your source for "+e),r.a.createElement("meta",{name:"description",content:this.props.product.description+this.props.product.descriptionLogos}),r.a.createElement("meta",{name:"keywords",content:"marcell, bigfok, effie, deer river, talmoon, grand rapids, "+e})),r.a.createElement("div",{id:i.a.header},r.a.createElement("h1",{id:i.a.h1},this.props.product.description)),r.a.createElement("div",{id:i.a.productImg},this.props.product.images.map((function(e,t){return r.a.createElement("img",{src:Object(u.c)(e.image),alt:e.type,key:t,className:i.a.productImg})}))),r.a.createElement("div",{id:i.a.logoDescription},r.a.createElement("p",{className:i.a.p},"Click on a logo below for more information."),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("p",{className:i.a.pDiscription+" "+i.a.p,key:t},e)})))),r.a.createElement("div",{className:i.a.getQuote},r.a.createElement(s.a,null)),r.a.createElement("div",{id:i.a.products},this.props.product.product.map((function(e,t){return r.a.createElement("div",{key:t,id:i.a.logoDiv},r.a.createElement("a",{href:a.test(e.link)?e.link:Object(u.c)(e.link),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},e.logo?r.a.createElement("img",{src:Object(u.c)(e.logo),alt:e.manufacturer,className:i.a.img}):r.a.createElement("h3",{className:i.a.h3},e.manufacturer)))}))))},t}(r.a.Component),p=a("5GCD"),g=a("bwW8"),b=a.n(g),E=function(){var e=p.data,t={backgroundColor:"rgb(198, 198, 198, .7)",color:"black"},a=[];return e.allDataJson.nodes.forEach((function(e,t){var o=e.slug,r=o.split("/")[2].replace(/-/g," ");a.push({path:o,key:t,name:r})})),r.a.createElement("div",{id:b.a.sidebar,style:{backgroundImage:"url("+Object(u.c)("/img/brickBG.jpeg")+")"}},a.map((function(e){return r.a.createElement(u.a,{to:e.path,id:b.a.link,activeStyle:t,key:e.key},e.name)})))},f=a("6cLl"),h=a.n(f),y=(t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement("div",{id:h.a.layout},r.a.createElement(E,{id:h.a.sideBar}),r.a.createElement(m,{id:h.a.display,product:t.dataJson})))},"3983847429")},bwW8:function(e,t,a){e.exports={sidebar:"prodSidebar-module--sidebar--1Dh49",link:"prodSidebar-module--link--2ZbeG"}},cHZr:function(e,t,a){e.exports={container:"products-module--container--1E-Sy",header:"products-module--header--2vO0r",h1:"products-module--h1--25pf0",productHeader:"products-module--productHeader--2HCdg",productImg:"products-module--productImg--pgmOo",logoDescription:"products-module--logoDescription--3UBLX",p:"products-module--p--zTXGg",pDiscription:"products-module--pDiscription--2yi8h",getQuote:"products-module--getQuote--iYTl9",products:"products-module--products--1PJiL",img:"products-module--img--294Zr",h3:"products-module--h3--1cGMs",logoDiv:"products-module--logoDiv--2rv4g"}},dnWM:function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o),l=a("k1Bu"),n=a.n(l);t.a=function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",id:n.a.button,"data-bs-toggle":"modal","data-bs-target":"#quoteModal"},"Get A Quote"),r.a.createElement("div",{className:"modal fade",id:"quoteModal",tabIndex:"-1",role:"dialog","aria-labelledby":"modalTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content",id:n.a.modalContent},r.a.createElement("div",{className:"modal-header",id:n.a.modalHeader},r.a.createElement("h4",{className:"modal-title",id:"modalTitle"},"Please call or email us for a quote:"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{id:n.a.close,"aria-hidden":"true"}))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,r.a.createElement("a",{href:"tel:1-555-555-5555",style:{color:"#3e3e3e",fontSize:"larger"}},r.a.createElement("i",{className:"fa fa-phone"})," 1-555-555-5555")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:john@fakeemail.com",style:{color:"#3e3e3e",fontSize:"larger"}},r.a.createElement("i",{className:"fa fa-envelope-square"})," john@fakeemail.com"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"Close"))))))}},k1Bu:function(e,t,a){e.exports={button:"getQuote-module--button--3orSd",modalHeader:"getQuote-module--modalHeader--3XlCj",close:"getQuote-module--close--3MSJa"}}}]);
//# sourceMappingURL=component---src-templates-product-js-b2e9717a1429adc60e3d.js.map