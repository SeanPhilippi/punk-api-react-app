(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),l=n.n(i),c=(n(29),n(20)),o=n(15),s=n(16),d=n(21),m=n(17),u=n(22),g=(n(30),n(23)),k={height:"550px",width:"120px",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"},f=function(e){var t=e.beer,n=e.beer,a=n.name,i=n.tagline,l=n.first_brewed,c=n.ph,o=n.description,s=n.brewers_tips,d=n.image_url,m=e.toggleLiked,u=e.liked;return r.a.createElement("div",{className:"beer"},r.a.createElement("div",{className:"beer-info"},r.a.createElement("div",{className:"name"},a),r.a.createElement("div",{className:"tagline"},i),r.a.createElement("div",{className:"date"},"First brewed: ",l),r.a.createElement("div",{className:"ph"},"ph: ",c),r.a.createElement("div",{className:"desc"},"Description: ",o),r.a.createElement("div",{className:"tips"},"Brewers tips: ",s)),r.a.createElement("div",{className:"image",style:Object(g.a)({},k,{backgroundImage:"url(".concat(d,")")})}),r.a.createElement("button",{className:"like-btn",onClick:function(){return m(t)}},u?"Liked":"Like"))},h=function(e){var t=e.beers,n=e.toggleLiked,a=e.likedBeers;return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"site-title"},"BrewDog Back Catalogue"),r.a.createElement("div",{className:"subheading"},"Explore here"),r.a.createElement("div",{className:"beers-container"},t.map(function(e){var t,i=e.id;return r.a.createElement(f,{key:i,beer:e,toggleLiked:n,liked:(t=i,a.find(function(e){return e.id===t}))})})))},p=function(e){var t=e.likedBeers,n=e.toggleLiked;return r.a.createElement("div",{className:"mylist-container"},r.a.createElement("h1",{className:"header"},"My Liked Beers"),r.a.createElement("ul",{className:"list"},t.map(function(e){return r.a.createElement(f,{key:e.id,beer:e,toggleLiked:n,liked:!0})})))},b=n(7),v=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(b.b,{className:"link",to:"/"},"Home"),r.a.createElement(b.b,{className:"link",to:"/mylist"},"My List"))},E=n(5),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={beers:[],likedBeers:[]},n.toggleLiked=function(e){var t=e.id;n.state.likedBeers.find(function(e){return e.id===t})?(console.log("found, deleting"),n.setState(function(e){return{likedBeers:e.likedBeers.filter(function(e){return e.id!==t})}})):(console.log("adding..."),n.setState(function(t){var n=t.likedBeers;return{likedBeers:[].concat(Object(c.a)(n),[e])}}))},n.home=function(){var e=n.state,t=e.beers,a=e.likedBeers;return r.a.createElement(h,{toggleLiked:n.toggleLiked,beers:t,likedBeers:a})},n.pageNotFound=function(){return r.a.createElement("h1",null,"Page not found")},n.myList=function(){return r.a.createElement(p,{toggleLiked:n.toggleLiked,likedBeers:n.state.likedBeers})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.punkapi.com/v2/beers").then(function(e){return e.json()}).then(function(t){console.log("beers",t),e.setState({beers:t})})}},{key:"render",value:function(){return console.log("likedBeers count: ",this.state.likedBeers.length),r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:this.home}),r.a.createElement(E.a,{exact:!0,path:"/mylist",component:this.myList}),r.a.createElement(E.a,{render:this.pageNotFound()}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.abd4da32.chunk.js.map