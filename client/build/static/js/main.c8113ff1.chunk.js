(this.webpackJsonptrenders=this.webpackJsonptrenders||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),l=n(11),o=n(5),s=n(45),u=n(14),m=n(31),p=(n(66),n(46)),f=n(47),d=n.n(f),b=n(6);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={currentUser:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return E({},e,{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM:"CLEAR_ITEM"},y=n(54);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e,t){return e.find((function(e){return e.id===t.id}))?(e.map((function(e){return console.log("after if",e)})),e.map((function(e){return e.id===t.id?w({},e,{quantity:e.quantity+1}):e}))):[].concat(Object(y.a)(e),[w({},t,{quantity:1})])},N=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?w({},e,{quantity:e.quantity-1}):e}))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return S({},e,{hidden:!e.hidden});case v.ADD_ITEM:return S({},e,{cartItems:C(e.cartItems,t.payload)});case v.REMOVE_ITEM:return S({},e,{cartItems:N(e.cartItems,t.payload)});case v.CLEAR_ITEM:return S({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},T={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkURL:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkURL:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkURL:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkURL:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkURL:"shop/mens"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return t.type,e},D={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FALIURE:"FETCH_COLLECTIONS_FALIURE"};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={collections:null,isFetching:!1,errorMessage:void 0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.FETCH_COLLECTIONS_START:return x({},e,{isFetching:!0});case D.FETCH_COLLECTIONS_SUCCESS:return x({},e,{isFetching:!1,collections:t.payload});case D.FETCH_COLLECTIONS_FALIURE:return x({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},A={key:"root",storage:d.a,whitelist:["cart"]},H=Object(u.c)({user:g,cart:I,directory:L,shop:U}),M=Object(m.a)(A,H),F=[p.a];var G=Object(u.d)(M,u.a.apply(void 0,F)),q=Object(m.b)(G),z=(n(69),n(9)),V=n.n(z),W=n(17),B=n(19),J=n(20),K=n(22),X=n(21),$=n(23),Q=n(24),Y=n(15),Z=n(4),ee=Object(Z.a)([function(e){return e.directory}],(function(e){return e.sections})),te=(n(71),Object(Q.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.linkURL,i=e.history,l=e.match;return r.a.createElement("div",{onClick:function(){i.push("".concat(l.path).concat(c))},className:"".concat(a?"menu-item "+a:"menu-item"," ")},r.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),ne=(n(73),Object(Z.b)({sections:ee})),ae=Object(o.b)(ne)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory"},t.map((function(e){var t=e.id,n=Object(Y.a)(e,["id"]);return r.a.createElement(te,Object.assign({key:t},n))})))})),re=(n(74),function(){return r.a.createElement(ae,null)}),ce=n(27),ie=n.n(ce);n(75),n(76);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}ie.a.initializeApp({apiKey:"AIzaSyAcNdd24SpGcmdPoInGXJOxCp0cMw4ni7g",authDomain:"crwn-dbs-4e99e.firebaseapp.com",databaseURL:"https://crwn-dbs-4e99e.firebaseio.com",projectId:"crwn-dbs-4e99e",storageBucket:"",messagingSenderId:"532871368869",appId:"1:532871368869:web:3b061b124e4ecc77f9fd4c"});var se=ie.a.auth(),ue=ie.a.firestore(),me=new ie.a.auth.GoogleAuthProvider;me.setCustomParameters({prompt:"select_account"});var pe=function(){return se.signInWithPopup(me)},fe=function(){var e=Object(W.a)(V.a.mark((function e(t,n){var a,r,c,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=ue.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(oe({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.error("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),de=(ie.a,void 0),be=function(){return function(e){var t=ue.collection("collections");e({type:D.FETCH_COLLECTIONS_START}),t.get().then((function(t){var n=t.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{});e({type:D.FETCH_COLLECTIONS_SUCCESS,payload:n}),de.setState({isLoading:!1})})).catch((function(e){return console.log(e)}))}},he=function(e){return e.shop},Ee=Object(Z.a)([he],(function(e){return e.collections})),Oe=Object(Z.a)([Ee],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),ge=Object(Z.a)([he],(function(e){return e.isFetching})),ve=Object(Z.a)([he],(function(e){return!!e.collections})),ye=n(36),je=n(37);function we(){var e=Object(ye.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return we=function(){return e},e}function Ce(){var e=Object(ye.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ce=function(){return e},e}var Ne=je.a.div(Ce()),ke=je.a.div(we()),Se=function(e){return function(t){var n=t.isLoading,a=Object(Y.a)(t,["isLoading"]);return n?r.a.createElement(Ne,null,r.a.createElement(ke,null)):r.a.createElement(e,a)}},Pe=function(){return{type:v.TOGGLE_CART_HIDDEN}},Ie=function(e){return{type:v.ADD_ITEM,payload:e}},Te=(n(78),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(Y.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"custom-button ".concat(a?"inverted":""," ").concat(n?"google-sign-in":"")},c),t)}),Le=(n(79),Object(o.b)(null,(function(e){return{addItem:function(t){return e(Ie(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Te,{onClick:function(){return n(t)},inverted:!0},"ADD TO CART"))}))),De=(n(80),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(Z.a)([Ee],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){console.log(e);var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(Le,{key:e.id,item:e})}))))}))),_e=(n(81),Object(Q.g)((function(e){var t=e.title,n=e.items,a=e.history,c=e.match,i=e.routeName;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title",onClick:function(){return a.push("".concat(c.path,"/").concat(i))}},t),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(Le,{key:e.id,item:e})}))))}))),xe=(n(82),Object(Z.b)({collections:Oe})),Re=Se(Object(o.b)(xe)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(Y.a)(e,["id"]);return r.a.createElement(_e,Object.assign({key:t},n))})))}))),Ue=Se(De),Ae=function(e){function t(){return Object(B.a)(this,t),Object(K.a)(this,Object(X.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStartAsync)()}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.isCollectionFetching,a=e.isCollectionLoading;return r.a.createElement("div",{className:"shop"},r.a.createElement(Q.b,{exact:!0,path:"".concat(t.path),render:function(e){return r.a.createElement(Re,Object.assign({isLoading:n},e))}}),r.a.createElement(Q.b,{path:"".concat(t.path,"/:collectionId"),render:function(e){return r.a.createElement(Ue,Object.assign({isLoading:!a},e))}}))}}]),t}(r.a.Component),He=Object(o.b)((function(){return Object(Z.b)({isCollectionFetching:ge,isCollectionLoading:ve})}),(function(e){return{fetchCollectionsStartAsync:function(){return e(be())}}}))(Ae);function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ge=r.a.createElement("title",null,"Group"),qe=r.a.createElement("desc",null,"Created with Sketch."),ze=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ve=function(e){var t=e.svgRef,n=e.title,a=Fe(e,["svgRef","title"]);return r.a.createElement("svg",Me({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Ge:n?r.a.createElement("title",null,n):null,qe,ze)},We=r.a.forwardRef((function(e,t){return r.a.createElement(Ve,Me({svgRef:t},e))})),Be=(n.p,n(51)),Je=function(e){return e.cart},Ke=Object(Z.a)([Je],(function(e){return e.cartItems})),Xe=Object(Z.a)(Je,(function(e){return e.hidden})),$e=Object(Z.a)([Ke],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Qe=Object(Z.a)([Ke],(function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)}));function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var et=r.a.createElement("g",null),tt=r.a.createElement("g",null),nt=r.a.createElement("g",null),at=r.a.createElement("g",null),rt=r.a.createElement("g",null),ct=r.a.createElement("g",null),it=r.a.createElement("g",null),lt=r.a.createElement("g",null),ot=r.a.createElement("g",null),st=r.a.createElement("g",null),ut=r.a.createElement("g",null),mt=r.a.createElement("g",null),pt=r.a.createElement("g",null),ft=r.a.createElement("g",null),dt=r.a.createElement("g",null),bt=function(e){var t=e.svgRef,n=e.title,a=Ze(e,["svgRef","title"]);return r.a.createElement("svg",Ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),et,tt,nt,at,rt,ct,it,lt,ot,st,ut,mt,pt,ft,dt)},ht=r.a.forwardRef((function(e,t){return r.a.createElement(bt,Ye({svgRef:t},e))})),Et=(n.p,n(89),Object(o.b)((function(e){return{itemCount:$e(e)}}),(function(e){return{toggleCartHidden:function(){return e(Pe())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ht,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}))),Ot=(n(90),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," X $",a)))}),gt=(n(91),Object(Q.g)(Object(o.b)((function(e){return{cartItems:Ke(e)}}))((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ot,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Te,{onClick:function(){n.push("/checkout"),a(Pe())}},"GO TO CHECKOUT"))})))),vt=(n(92),Object(Z.a)([function(e){return e.user}],(function(e){return e.currentUser}))),yt=Object(Z.b)({currentUser:vt,hidden:Xe}),jt=Object(o.b)(yt)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{to:"/",className:"logo-container"},r.a.createElement(We,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(l.b,{to:"/contact",className:"option"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return Object(Be.auth)().signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Et,null)),n?null:r.a.createElement(gt,null))})),wt=(n(93),function(e){var t=e.handleChange,n=e.label,a=Object(Y.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),Ct=(n(94),function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(K.a)(this,Object(X.a)(t).call(this))).handleSubmit=function(){var t=Object(W.a)(V.a.mark((function t(n){var a,r,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.email,c=a.password,t.prev=2,t.next=5,se.signInWithEmailAndPassword(r,c);case 5:e.setState({email:"",password:""}),console.info("user logged in"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.state={email:"",password:""},e}return Object($.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.hadleSubmit},r.a.createElement(wt,{type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(wt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Te,{type:"submit"},"Sign In"),r.a.createElement(Te,{onClick:pe,isGoogleSignIn:!0},"sign In With Google"))))}}]),t}(r.a.Component)),Nt=(n(95),function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(K.a)(this,Object(X.a)(t).call(this))).handleSubmit=function(){var t=Object(W.a)(V.a.mark((function t(n){var a,r,c,i,l,o,s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert('Password don"t match'),t.abrupt("return");case 5:return t.prev=5,t.next=8,se.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,s=o.user,t.next=12,fe(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),console.info("account created by sign up with email and password"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object($.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(wt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"DisplayName",required:!0}),r.a.createElement(wt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(wt,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(wt,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(Te,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),kt=(n(96),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Ct,null),r.a.createElement(Nt,null))}),St=(n(97),Object(o.b)(null,(function(e){return{clearItem:function(t){return e({type:v.CLEAR_ITEM,payload:t})},addItem:function(t){return e(Ie(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("span",{className:"clear-button",onClick:function(){return n(t)}},"\u2715"))}))),Pt=n(53),It=n.n(Pt),Tt=function(e){var t=e.price,n=100*t;return r.a.createElement(It.a,{label:"Pay Now",name:"Trenders Ltd.",image:"http://svgshare.com/i/CUz.svg",billingAddress:!0,shippingAddress:!0,stripeKey:"pk_test_JPm2xL7odi0OaF87tsfraWiz00lwfmXvED",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")}})},Lt=(n(98),Object(o.b)((function(e){return{cartItems:Ke(e),total:Qe(e)}}))((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(St,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL : $",n),r.a.createElement("div",{className:"test-warning"},"*Please use this information for testing",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20- CVV:123*"),r.a.createElement(Tt,{price:n}))})));n(99);function Dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Dt(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xt=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object($.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setCurrentUser;e.collection;this.unsubscribeFromAuth=se.onAuthStateChanged(function(){var e=Object(W.a)(V.a.mark((function e(n){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,fe(n);case 3:e.sent.onSnapshot((function(e){t({currentUser:_t({id:e.id},e.data())})}));case 5:t({userAuth:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(jt,null),r.a.createElement(Q.d,null,r.a.createElement(Q.b,{exact:!0,path:"/",component:re}),r.a.createElement(Q.b,{path:"/shop",component:He}),r.a.createElement(Q.b,{exact:!0,path:"/checkout",component:Lt}),r.a.createElement(Q.b,{exact:!0,path:"/signin",render:function(){return null==e.props.currentUser?r.a.createElement(Q.a,{to:"/"}):r.a.createElement(kt,null)}})))}}]),t}(r.a.Component),Rt=Object(Z.b)({currentUser:vt}),Ut=Object(o.b)(Rt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))(xt);i.a.render(r.a.createElement(o.a,{store:G},r.a.createElement(l.a,null,r.a.createElement(s.a,{persistor:q},r.a.createElement(Ut,null)))),document.getElementById("root"))},57:function(e,t,n){e.exports=n(100)},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.c8113ff1.chunk.js.map