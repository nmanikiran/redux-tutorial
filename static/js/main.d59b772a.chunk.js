(this["webpackJsonpredux-tutorial"]=this["webpackJsonpredux-tutorial"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=a(144),i=(a(87),a(44)),u=a(8),s=a(140),m=a(137),d=a(138),p=a(136),f=a(139),v=a(145),E=a(30),g=function(e){var t=e.src,a=e.alt,n=e.height,l=e.imgLoading,o=e.onLoad,c=e.onError;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("img",{style:{width:"100%",display:l?"none":"block",height:"100%",objectFit:"cover"},src:t,alt:a||"Movie poster",onLoad:o,onError:c}),l&&r.a.createElement(p.a,{variant:"rect",height:n||"100%"}))},b=function(e){var t=e.src,a=e.alt,l=e.height,o=Object(n.useState)(!0),c=Object(E.a)(o,2),i=c[0],u=c[1];return r.a.createElement(g,{src:t,alt:a,height:l,imgLoading:i,onLoad:function(){u(!1)},onError:function(){u(!1)}})},h=function(e){var t=e.loading,a=e.label,n=e.value,l=e.first;return t||n?r.a.createElement(v.a,{mt:l?0:2},n?r.a.createElement(m.a,{variant:"body1"},r.a.createElement(v.a,{component:"span",display:"flex"},r.a.createElement(v.a,{component:"span",fontWeight:"fontWeightBold",mr:1.5},a,":"),r.a.createElement("span",null,n))):r.a.createElement(p.a,{width:"80%"})):null},y=function(e){var t=e.entity,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,spacing:5},r.a.createElement(d.a,{item:!0,xs:12,sm:5,md:3},r.a.createElement(b,{src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title,height:350})),r.a.createElement(d.a,{item:!0,xs:12,sm:7,md:9},r.a.createElement(v.a,{mb:2},r.a.createElement(m.a,{variant:"h4",gutterBottom:!0},t?t.Title:r.a.createElement(p.a,{width:"60%"})),r.a.createElement(m.a,{variant:"subtitle1",color:"textSecondary"},t?"".concat(t.Type.toUpperCase()," \u2022 ").concat(t.Year):r.a.createElement(p.a,{width:"20%"}))),r.a.createElement(m.a,{variant:"body1"},t?t.Plot:r.a.createElement(r.a.Fragment,null,Array.from(new Array(3)).map((function(e,t){return r.a.createElement(p.a,{key:t})})),r.a.createElement(p.a,{width:"50%"}))),r.a.createElement(v.a,{mt:3},r.a.createElement(h,{loading:a,label:"Director",value:null===t||void 0===t?void 0:t.Director,first:!0}),r.a.createElement(h,{loading:a,label:"Writer",value:null===t||void 0===t?void 0:t.Writer}),r.a.createElement(h,{loading:a,label:"Actors",value:null===t||void 0===t?void 0:t.Actors})))),r.a.createElement(v.a,{my:7},r.a.createElement(d.a,{container:!0,spacing:3},(t?t.Ratings.slice(0,3):Array.from(new Array(3))).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:(null===e||void 0===e?void 0:e.Source)||t},!!t&&r.a.createElement(f.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(v.a,{py:2},r.a.createElement(m.a,{variant:"h5",gutterBottom:!0,component:"div"},r.a.createElement(v.a,{textAlign:"center"},e?e.Value:r.a.createElement(p.a,{width:"40%",style:{margin:"auto"}}))),r.a.createElement(m.a,{variant:"body1",component:"div"},r.a.createElement(v.a,{textAlign:"center"},e?e.Source:r.a.createElement(p.a,{width:"80%",style:{margin:"auto"}}))))))})))),r.a.createElement(v.a,{mt:3},r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(h,{loading:a,label:"Awards",value:null===t||void 0===t?void 0:t.Awards,first:!0}),r.a.createElement(h,{loading:a,label:"Rating",value:null===t||void 0===t?void 0:t.Rated}),r.a.createElement(h,{loading:a,label:"Release Date",value:null===t||void 0===t?void 0:t.Released}),r.a.createElement(h,{loading:a,label:"Runtime",value:null===t||void 0===t?void 0:t.Runtime}),r.a.createElement(h,{loading:a,label:"Genre",value:null===t||void 0===t?void 0:t.Genre})),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(h,{loading:a,label:"Language",value:null===t||void 0===t?void 0:t.Language,first:!0}),r.a.createElement(h,{loading:a,label:"Country",value:null===t||void 0===t?void 0:t.Country}),r.a.createElement(h,{loading:a,label:"DVD Release Date",value:null===t||void 0===t?void 0:t.DVD}),r.a.createElement(h,{loading:a,label:"Box Office Collection",value:null===t||void 0===t?void 0:t.BoxOffice}),r.a.createElement(h,{loading:a,label:"Production",value:null===t||void 0===t?void 0:t.Production})))))},j=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null},O=function(e){var t=e.entity,a=e.error,n=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(s.a,null,a?r.a.createElement(m.a,{variant:"body1",color:"textSecondary"},a):r.a.createElement(y,{entity:t,loading:n})))},w=a(21),x=a.n(w),C=a(29),R=a(19),S=a(55),k=a(40),T=a.n(k);T.a.defaults.baseURL="https://www.omdbapi.com/",T.a.interceptors.request.use((function(e){return e.params=Object(R.a)({apikey:"e30c3fda"},e.params),e}),(function(e){return Promise.reject(e)}));var B,F=function(){return T.a.CancelToken.source()},D=T.a,L={fetchBySearch:function(){var e=Object(C.a)(x.a.mark((function e(){var t,a,n,r,l,o,c,i,u=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"",a=u.length>1&&void 0!==u[1]?u[1]:1,n=u.length>2&&void 0!==u[2]?u[2]:"",r=u.length>3?u[3]:void 0,e.next=6,D.get("/",{params:{s:t,page:a,type:n},cancelToken:r});case 6:if(l=e.sent,o=l.data,c=o.Response,o.Error,i=Object(S.a)(o,["Response","Error"]),"False"!==c){e.next=11;break}throw new Error("No results found");case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchByID:function(){var e=Object(C.a)(x.a.mark((function e(t,a){var n,r,l,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/",{params:{i:t,plot:"full"},cancelToken:a});case 2:if(n=e.sent,r=n.data,l=r.Response,r.Error,o=Object(S.a)(r,["Response","Error"]),"False"!==l){e.next=7;break}throw new Error("No result found");case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},N=function(e,t){switch(t.type){case"start":return{loading:!0,error:null,data:null};case"success":return Object(R.a)({},e,{loading:!1,data:t.payload});case"error":return Object(R.a)({},e,{loading:!1,error:t.payload});default:throw new Error("undefined action")}},A=function(){var e=function(e){var t=Object(n.useReducer)(N,{loading:!1,error:null,data:null}),a=Object(E.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){l({type:"start"});var t=F();return function(){var a=Object(C.a)(x.a.mark((function a(){var n;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L.fetchByID(e,t.token);case 3:n=a.sent,l({type:"success",payload:n}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),D.isCancel(a.t0)||l({type:"error",payload:a.t0.message});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()(),function(){t.cancel()}}),[e]),r}(Object(u.g)().id),t=e.data,a=e.error,l=e.loading;return r.a.createElement(O,{entity:t,error:a,loading:l})},M=a(141),P=a(142),I=a(147),q=a(143),W=a(69),G=a.n(W),V=a(68),U=a.n(V),z=a(150),H=Object(M.a)((function(e){return{root:{padding:"2px 4px 2px 10px",display:"flex",alignItems:"center",maxWidth:600},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),J=function(e){var t=e.inputRef,a=e.input,n=e.setInput,l=e.error,o=e.searchTerm,c=e.onSubmit,i=e.onReset,u=H();return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{component:"form",className:u.root,onSubmit:c,onReset:i},r.a.createElement(I.a,{inputRef:t,className:u.input,placeholder:"Search movies",inputProps:{"aria-label":"search movies"},value:a,onChange:function(e){return n(e.target.value)}}),o&&r.a.createElement(q.a,{className:u.iconButton,"aria-label":"clear",type:"reset"},r.a.createElement(U.a,null)),r.a.createElement(f.a,{className:u.divider,orientation:"vertical"}),r.a.createElement(q.a,{className:u.iconButton,"aria-label":"search",type:"submit"},r.a.createElement(G.a,null))),l&&r.a.createElement(z.a,{error:!0},l))},Y=a(13),Z=a(22),$=a(33),_=Object(Z.b)("".concat("movie","/fetchMoviesBySearch"),function(){var e=Object(C.a)(x.a.mark((function e(t,a){var n,r,l,o,c,i,u,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=a.signal,l=F(),r.addEventListener("abort",(function(){return l.cancel()})),o=n().filter,c=o.searchTerm,i=o.page,u=o.type,e.next=6,L.fetchBySearch(c,i,u,l.token);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),K=Object(Z.c)({name:"movie",initialState:{entities:[],totalEntities:0,error:"",loading:!1},reducers:{resetMovies:function(e){return Object(R.a)({},e,{entities:[],totalEntities:0,error:""})}},extraReducers:(B={},Object($.a)(B,_.pending,(function(e){e.loading=!0})),Object($.a)(B,_.fulfilled,(function(e,t){e.entities=t.payload.Search,e.totalEntities=t.payload.totalResults,e.error="",e.loading=!1})),Object($.a)(B,_.rejected,(function(e,t){e.entities=[],e.totalEntities=0,e.error=t.error.message,e.loading=!1})),B)}),Q=K.actions.resetMovies,X=K.reducer,ee=Object(Z.c)({name:"filter",initialState:{searchTerm:"",page:1,type:""},reducers:{setSearchTerm:function(e,t){return Object(R.a)({},e,{searchTerm:t.payload,page:1})},resetFilters:function(){return{searchTerm:"",page:1,type:""}},setPageState:function(e,t){return Object(R.a)({},e,{page:t.payload})},setTypeState:function(e,t){return Object(R.a)({},e,{type:t.payload,page:1})}}}),te=ee.actions,ae=te.setSearchTerm,ne=te.resetFilters,re=te.setPageState,le=te.setTypeState,oe=Object(Z.b)("".concat("filter","/search"),(function(e,t){var a=t.dispatch;a(ae(e)),a(_())})),ce=Object(Z.b)("".concat("filter","/resetSearch"),(function(e,t){var a=t.dispatch;a(ne()),a(Q())})),ie=Object(Z.b)("".concat("filter","/setPage"),(function(e,t){var a=t.dispatch;a(re(e)),a(_())})),ue=Object(Z.b)("".concat("filter","/setType"),(function(e,t){var a=t.dispatch;a(le(e)),a(_())})),se=ee.reducer,me=function(){var e=Object(Y.d)((function(e){return e.filter.searchTerm})),t=Object(Y.c)(),a=Object(n.useState)(""),l=Object(E.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(),u=Object(E.a)(i,2),s=u[0],m=u[1],d=Object(n.useRef)(),p=Object(n.useRef)(null);Object(n.useEffect)((function(){c(e)}),[e]);return r.a.createElement(J,{inputRef:p,input:o,setInput:c,error:s,searchTerm:e,onSubmit:function(a){a.preventDefault(),m(""),o.length<3?m("Minimum 3 chars"):(p.current&&p.current.blur(),o!==e&&(d.current&&d.current.abort(),d.current=t(oe(o))))},onReset:function(e){e.preventDefault(),c(""),m(),t(ce())}})},de=function(){return r.a.createElement(m.a,{variant:"subtitle1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt labore nihil non hic distinctio harum voluptas sequi quidem asperiores sunt dolorum, maiores maxime a nam tempora ipsum fugit nemo! Recusandae? Veritatis ex dolore magni atque quisquam voluptatem, delectus assumenda officiis nobis explicabo odio alias cupiditate sunt nesciunt labore autem. Iusto, quisquam.")},pe=a(72),fe=a.n(pe),ve=a(73),Ee=a.n(ve),ge=a(74),be=a.n(ge),he=a(151),ye=function(e){var t=e.value,a=e.label,n=e.icon,l=e.type,o=e.onClick,c=e.onDelete;return r.a.createElement(he.a,{label:a,icon:n,color:l===t?"secondary":"default",onClick:function(){return o(t)},onDelete:l===t?c:null})},je=Object(M.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{marginRight:e.spacing(1)}}}})),Oe=function(e){var t=e.type,a=e.onFilter,n=e.onResetFilter,l=je(),o=function(e){e!==t&&a(e)},c=function(){t&&n()};return r.a.createElement("div",{className:l.root},r.a.createElement(ye,{value:"movie",label:"Movie",icon:r.a.createElement(fe.a,null),type:t,onClick:o,onDelete:c}),r.a.createElement(ye,{value:"series",label:"Series",icon:r.a.createElement(Ee.a,null),type:t,onClick:o,onDelete:c}),r.a.createElement(ye,{value:"episode",label:"Episode",icon:r.a.createElement(be.a,null),type:t,onClick:o,onDelete:c}))},we=function(){var e=Object(Y.d)((function(e){return e.filter.type})),t=Object(Y.c)(),a=Object(n.useRef)();return r.a.createElement(Oe,{type:e,onFilter:function(e){a.current&&a.current.abort(),a.current=t(ue(e))},onResetFilter:function(){a.current&&a.current.abort(),a.current=t(ue(""))}})},xe=function(e){var t=e.totalEntities,a=e.error;return e.loading?r.a.createElement(p.a,{height:20,width:"25%"}):r.a.createElement(m.a,{variant:"body2",color:"textSecondary"},a||"".concat(t," results found"))},Ce=a(116),Re=a(75),Se=a.n(Re),ke=Object(M.a)((function(e){return{root:{display:"grid",gridTemplateRows:"350px max-content auto",justifyContent:"normal",alignItems:"start",gridRowGap:e.spacing(1),"&:hover, &:focus":{backgroundColor:Se.a[300]}}}})),Te=function(e){var t=e.entity,a=ke(),n=Object(u.f)();return r.a.createElement(Ce.a,{className:a.root,onClick:t?function(){return e=t.imdbID,void n.push("/".concat(e));var e}:null},r.a.createElement(b,{src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title}),r.a.createElement(m.a,{component:"div"},r.a.createElement(v.a,{fontSize:17,lineHeight:"normal",mt:1,px:1},t?t.Title:r.a.createElement(p.a,null))),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"div"},r.a.createElement(v.a,{px:1,mb:2},t?"".concat(t.Type.toUpperCase()," \u2022 ").concat(t.Year):r.a.createElement(p.a,{width:"60%"}))))},Be=a(146),Fe=Object(M.a)((function(){return{ul:{justifyContent:"center"}}})),De=function(e){var t=e.count,a=e.page,n=e.onPageChange,l=Fe();return r.a.createElement(Be.a,{count:t,page:a,onChange:n,size:"large",showFirstButton:!0,showLastButton:!0,classes:l,color:"secondary"})},Le=function(){var e=Object(Y.d)((function(e){return e.filter.page})),t=Object(Y.d)((function(e){return Math.ceil(e.movie.totalEntities/10)})),a=Object(Y.c)(),l=Object(n.useRef)();return t>1&&r.a.createElement(De,{count:t,page:e,onPageChange:function(e,t){l.current&&l.current.abort(),l.current=a(ie(t)),window.scrollTo(0,0)}})},Ne=Object(M.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr));",gridColumnGap:e.spacing(4),gridRowGap:e.spacing(8),marginBottom:e.spacing(8)}}})),Ae=function(e){var t=e.entities,a=e.loading,n=Ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.root},(a?Array.from(new Array(3)):t).map((function(e,t){return r.a.createElement(Te,{entity:e,key:(null===e||void 0===e?void 0:e.imdbID)||t})}))),!a&&r.a.createElement(Le,null))},Me=function(e){var t=e.entities,a=e.totalEntities,n=e.error,l=e.loading,o=!(a||n||l);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h2",gutterBottom:!0},r.a.createElement("span",{role:"img","aria-label":"popcorn emoji"},"\ud83c\udf7f"),"Movies"),r.a.createElement(me,null)),o?r.a.createElement(v.a,{mt:3},r.a.createElement(s.a,null,r.a.createElement(de,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{my:3},r.a.createElement(s.a,null,r.a.createElement(we,null))),r.a.createElement(f.a,null),r.a.createElement(s.a,null,r.a.createElement(v.a,{mt:3,mb:5},r.a.createElement(xe,{totalEntities:a,error:n,loading:l})),r.a.createElement(Ae,{entities:t,loading:l}))))},Pe=function(){var e=Object(Y.d)((function(e){return e.movie}),Y.b),t=e.entities,a=e.totalEntities,n=e.error,l=e.loading;return r.a.createElement(Me,{entities:t,totalEntities:a,error:n,loading:l})},Ie=(a(112),function(e){var t=e.url,a=void 0===t?"https://github.com/batbrain9392":t,n=e.fill,l=void 0===n?"#24292e":n,o=e.color,c=void 0===o?"#fff":o;return r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:l,color:c},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))});var qe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie,{url:"https://github.com/batbrain9392/redux-tutorial"}),r.a.createElement(i.a,null,r.a.createElement(v.a,{mt:5,mb:10},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/:id",component:A}),r.a.createElement(u.a,{path:"/",exact:!0,component:Pe})))))},We=Object(Z.a)({reducer:{filter:se,movie:X}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null),r.a.createElement(Y.a,{store:We},r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(113)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.d59b772a.chunk.js.map