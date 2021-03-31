(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{49:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),r=c(17),n=c.n(r),i=c(20),o=c(4),l=(c(49),c(2)),j=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"inner-content",children:[Object(l.jsx)("div",{className:"brand",children:Object(l.jsx)(i.b,{to:"/",children:"MovieApp"})}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/favorites",children:"Favorites"})})]})]})})})},d=c(33),b=c.n(d),u=c(39),h=c(25),O=c(74),f=c(41),v=c.n(f),x=c(40),p=c.n(x),m=c(42),g=c(34),N={favorites:localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[]},y=function(e,t){switch(t.type){case"ADD_MOVIE":return Object(g.a)(Object(g.a)({},e),{},{favorites:[].concat(Object(m.a)(e.favorites),[t.payload])});case"REMOVE_MOVIE":return{favorites:e.favorites.filter((function(e){return e.id!==t.payload}))};default:return e}},E=Object(a.createContext)(),w=function(e){var t=Object(a.useReducer)(y,N),c=Object(h.a)(t,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(s.favorites))}),[s]),Object(l.jsx)(E.Provider,{value:{favorites:s.favorites,dispatch:r},children:e.children})},_=E,I=function(e){var t=e.movie,c=Object(a.useContext)(_),s=c.dispatch,r=!!c.favorites.find((function(e){return e.id===t.id}));return Object(l.jsxs)("div",{className:"result-card",children:[Object(l.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(l.jsx)("div",{className:"filler-poster"})}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h3",{className:"title",children:t.title}),Object(l.jsx)("h4",{className:"release-date",children:t.release_date?t.release_date.substring(0,4):"-"})]}),r?Object(l.jsx)(O.a,{startIcon:Object(l.jsx)(p.a,{}),style:{width:"250px",marginBottom:"30px",marginLeft:"110px",backgroundColor:"#E50914",color:"#fff"},onClick:function(){return function(e){s({type:"REMOVE_MOVIE",payload:e.id})}(t)},children:"Remove From Favorites"}):Object(l.jsx)(O.a,{startIcon:Object(l.jsx)(v.a,{}),style:{width:"200px",marginBottom:"30px",marginLeft:"160px",backgroundColor:"#041c45",color:"#fff"},onClick:function(){return function(e){s({type:"ADD_MOVIE",payload:e})}(t)},children:"Add To Favorites"})]})]})},M=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),n=Object(h.a)(r,2),i=n[0],o=n[1],j=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(t.target.value),"dfbf0d2ccd7a5faa63a22c477095fca1",c="https://api.themoviedb.org/3/search/movie?api_key=".concat("dfbf0d2ccd7a5faa63a22c477095fca1","&language=en-US&page=1&include_adult=false&query=").concat(t.target.value),e.next=5,fetch(c);case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent).errors?s([]):s(r.results);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"a-page",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"add-content",children:[Object(l.jsx)("div",{className:"input-wrapper",children:Object(l.jsx)("input",{type:"text",placeholder:"Search for a movie",value:i,onChange:j})}),c.length>0&&Object(l.jsx)("ul",{className:"results",children:c.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(I,{movie:e})},e.id)}))})]})})})},k=function(e){var t=e.movie,c=Object(a.useContext)(_).dispatch;return Object(l.jsxs)("div",{className:"image-container",children:[Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}),Object(l.jsx)("div",{className:"overlay",onClick:function(){return function(e){c({type:"REMOVE_MOVIE",payload:e.id})}(t)},children:"Remove From Favourites"})]})},C=function(){var e=Object(a.useContext)(_).favorites;return Object(l.jsx)("div",{className:"movie-page",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{className:"heading",children:"My Favorites"})}),e.length>0?Object(l.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(l.jsx)(k,{movie:e,type:"favorites"},e.id)}))}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"no-movies",children:"No movies found."}),Object(l.jsx)("img",{style:{width:"600px",height:"600px",marginLeft:"290px"},src:"/images/notfound.png",alt:"not-found"})]})]})})};var S=function(){return Object(l.jsx)(w,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(M,{})}),Object(l.jsx)(o.a,{path:"/favorites",children:Object(l.jsx)(C,{})})]})]})})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.aaaadd11.chunk.js.map