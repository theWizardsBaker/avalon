(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-00145a9d":"9f45f55d","chunk-0e245d4a":"03f9c96c"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-00145a9d":1,"chunk-0e245d4a":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-00145a9d":"6e6f456f","chunk-0e245d4a":"7aa73c4d"}[e]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],m.parentNode.removeChild(m),a(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e7e":function(e,t,a){e.exports=a.p+"img/dragin.c598bc5d.svg"},1:function(e,t){},"1fdc":function(e,t,a){"use strict";var n=a("3c1c"),r=a.n(n);r.a},"3c1c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("4de4"),a("fb6a"),a("0d03"),a("d3b7"),a("25f0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i={name:"App",data:function(){return{}}},o=i,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero is-dark is-medium"},[a("div",{staticClass:"hero-body"},[e._m(0),a("h4",{staticClass:"fancy-subtitle subtitle is-4 has-text-centered drop-shadow"},[e._v(" Start a new game or enter a game key to join another player's game ")]),a("div",{staticClass:"columns is-mobile is-3 is-centered is-multiline"},e._l(e.gameOptions,(function(t){return a("div",{key:t.name,staticClass:"column is-narrow-mobile is-narrow-tablet"},[a("card",{attrs:{display:t.display},scopedSlots:e._u([{key:"title",fn:function(){return["knight"===t.type?a("span",{staticClass:"tag is-medium is-knight fancy drop-shadow"},[e._v(" "+e._s(t.name)+" ")]):e._e(),"minion"===t.type?a("span",{staticClass:"tag is-medium is-minion fancy drop-shadow"},[e._v(" "+e._s(t.name)+" ")]):e._e()]},proxy:!0},{key:"content",fn:function(){},proxy:!0},{key:"footer",fn:function(){return[t.hasOwnProperty("userName")?a("div",{staticClass:"field"},[a("label",{staticClass:"label help"},[e._v("Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"option.userName"}],staticClass:"input",class:{"is-danger":t.error},attrs:{type:"text",name:"room",length:"25",disabled:e.gameSelected},domProps:{value:t.userName},on:{input:function(a){a.target.composing||e.$set(t,"userName",a.target.value)}}})])]):e._e(),t.hasOwnProperty("gameKey")?a("div",{staticClass:"field"},[a("label",{staticClass:"label help"},[e._v("Game Key")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gameKey,expression:"option.gameKey"}],staticClass:"input",class:{"is-danger":t.error},attrs:{type:"text",name:"room",disabled:e.gameSelected,length:"10",hint:"game key"},domProps:{value:t.gameKey},on:{input:function(a){a.target.composing||e.$set(t,"gameKey",a.target.value)}}})])]):e._e(),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-fullwidth",attrs:{disabled:e.gameSelected},on:{click:function(a){return e.handleSelection(t)}}},[e._v(" "+e._s(e._f("capitalize")(t.action))+" Game ")])])])]},proxy:!0}],null,!0)})],1)})),0),a("div",{},[a("h3",{staticClass:"title is-4 has-text-danger has-text-centered"},[e._v(" "+e._s(e.errorMessage)+" ")])]),e._m(1)])])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"fancy-title title is-1 has-text-centered drop-shadow "},[e._v(" Knights "),a("span",{staticClass:"small"},[e._v("vs")]),e._v(" Minions ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"has-text-centered fancy"},[a("br"),a("h4",{staticClass:"subtitle is-3"},[e._v("Beta")]),a("h4",{staticClass:"subtitle is-6"},[e._v("(This probably won't work well)")])])}],p=(a("a4d3"),a("7db0"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),h=a("ae8d"),y=a("2f62");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(p["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={name:"GameSelect",components:{Card:h["a"]},mounted:function(){for(var e=this,t=function(t){e.delay(1100+300*t).then((function(){e.$set(e.gameOptions[t],"display",!0)}))},a=0;a<this.gameOptions.length;a++)t(a)},data:function(){return{gameSelected:!1,errorMessage:"",gameOptions:[{name:"Host Game",action:"create",text:"Create a new game.",error:!1,display:!1,userName:"",type:"knight"},{name:"Join Game",action:"join",text:"Join another user's game.",error:!1,display:!1,gameKey:"",userName:"",type:"minion"}]}},watch:{gameKey:function(e){e&&this.playGame()}},computed:v({},Object(y["c"])(["gameKey"]),{selectedOption:function(){return this.gameOptions.find((function(e){return e.selected}))}}),methods:{handleSelection:function(e){var t=this;if(this.errorMessage="",e.error=!1,e.hasOwnProperty("userName")&&(e.error=""==e.userName||0==e.userName.length),e.hasOwnProperty("gameKey")&&(e.error=e.error||""==e.gameKey||0==e.gameKey.length),!e.error){this.gameSelected=!0,e.selected=!0;var a={userId:null,name:e.userName,gameKey:e.gameKey},n="create"===e.action?"create_game":"join_game";try{this.$socket.client.emit(n,a,(function(n){n.error?t.showError(n.data.message):(a.userId=n.data.userId,a.gameKey=n.data.gameKey,t.$store.dispatch("create"===e.action?"newGame":"joinGame",a))}))}catch(r){alert("ERROR")}}},playGame:function(){this.$router.push({name:"lobby",params:{gameKey:this.gameKey}})},showError:function(e){this.selectedOption.error=!0,this.selectedOption.selected=!1,this.errorMessage=e,this.gameSelected=!1}}},_=b,E=(a("1fdc"),Object(c["a"])(_,m,f,!1,null,"df16a876",null)),C=E.exports;n["a"].use(y["a"]);var k=new y["a"].Store({state:{game:{key:null,host:!1,connected:!1,leader:0,minPlayers:5,maxPlayers:12},user:{id:""},players:[]},getters:{connected:function(e){var t=e.game;return t.connected},player:function(e){var t=e.players,a=e.user;return t.find((function(e){return e.userId===a.id}))},gameKey:function(e){var t=e.game;return t.key},players:function(e){var t=e.players;return t},isHost:function(e){var t=e.game;return t.host},inLobby:function(e){var t=e.game;return t.key&&!t.connected},inGame:function(e){var t=e.game;return t.key&&t.connected},leader:function(e){var t=e.game,a=e.players;return a[t.leader]},isLeader:function(e,t){var a=e.user,n=t.leader;return n.userId===a.id},role:function(e,t){var a=t.player;return a.role},allegiance:function(e,t){var a=t.player;return a.role.alignment}},mutations:{INCREMENT_STAGE:function(e,t){e.game.stage+=t},START_GAME:function(e,t){e.game={host:t.host,key:t.player.gameKey,connected:t.connected,leader:0,minPlayers:5,maxPlayers:12},e.user={id:t.player.userId},e.players=[],e.questions=[]},CLEAR_PLAYER_SELECT:function(e){e.players.forEach((function(e){n["a"].set(e,"selected",!1)}))},SELECT_PLAYER:function(e,t){e.players.forEach((function(e){e.userId===t&&n["a"].set(e,"selected",!e.selected)}))},NEXT_LEADER:function(e){e.game.leader<e.players.length-1?e.game.leader++:e.game.leader=0},QUIT_GAME:function(e,t){t&&this._vm.$socket.client.emit("quit_game",{gameKey:e.game.key,user:e.user}),e.game={key:null,host:!1,connected:!1,leader:0,minPlayers:5,maxPlayers:12},e.user={id:""},e.players=[],e.questions=[]},SOCKET_BEGIN_GAME:function(e,t){e.players=t.players,e.game.connected=!0},PLAYER_JOINED:function(e,t){e.players.push(t)},SOCKET_SEND_GAME_STATE:function(e,t){var a=e.game,n=(e.questions,e.players);a.host&&this._vm.$socket.client.emit("game_state",{players:n,leader:a.leader,gameKey:a.key})},SOCKET_GAME_STATE:function(e,t){e.game.host||(e.players=t.players)}},actions:{newGame:function(e,t){var a=e.commit;a("START_GAME",{player:t,host:!0,connected:!1}),a("PLAYER_JOINED",t)},joinGame:function(e,t){var a=e.commit;a("START_GAME",{player:t,host:!1,connected:!1})},clearPlayerSelections:function(e){var t=e.commit;t("CLEAR_PLAYER_SELECT")},playerSelect:function(e,t){var a=e.commit;a("SELECT_PLAYER",t)},nextLeader:function(e){var t=e.commit;t("NEXT_LEADER")},quitGame:function(e){var t=e.commit;t("QUIT_GAME",!0)},endGame:function(e){var t=e.commit;t("QUIT_GAME",!1)},socket_playerJoined:function(e,t){var a=e.commit;a("PLAYER_JOINED",t)}}});n["a"].use(d["a"]);var w=[{path:"/",publicPath:"${process.env.VUE_APP_PUBLIC_PATH}",name:"gameselect",component:C},{path:"/lobby/:gameKey",name:"lobby",component:function(){return a.e("chunk-0e245d4a").then(a.bind(null,"417e"))},meta:{requiresAuth:!0},beforeEnter:function(e,t,a){k.getters.inLobby&&!k.getters.inGame?a():a("/")}},{path:"/play/:gameKey",name:"play",component:function(){return a.e("chunk-00145a9d").then(a.bind(null,"8363"))},meta:{requiresAuth:!0},beforeEnter:function(e,t,a){!k.getters.inLobby&&k.getters.inGame?a():a("/")}},{path:"*",redirect:{name:"gameselect"}}],O=new d["a"]({mode:"history",base:"/",routes:w}),P=O,S=a("8055"),x=a.n(S),A=a("f87c");a("fb98");n["a"].config.productionTip=!1;var T=x()("".concat("kvm.justin-letourneau.dev"),{});n["a"].use(A["a"],T,{store:k}),n["a"].filter("capitalize",(function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""})),n["a"].mixin({methods:{delay:function(e,t){return new Promise((function(a){setTimeout(a.bind(null,t),e)}))},shuffle:function(e){for(var t=e.length-1;t>0;t-=1){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}}}),new n["a"]({router:P,store:k,render:function(e){return e(u)}}).$mount("#app")},"6ff8":function(e,t,a){},ae08:function(e,t,a){"use strict";var n=a("6ff8"),r=a.n(n);r.a},ae8d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card",on:{click:function(t){return e.handleClick()}}},[a("div",{staticClass:"card-inner",class:{flip:e.display}},[a("div",{staticClass:"box card-front"},[a("div",{staticClass:"playing-card-outline"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.selected,expression:"selected"}],staticClass:"selection"},[e._m(0)]),a("h4",{staticClass:"title is-5 has-text-dark"},[e._t("title")],2),a("div",{staticClass:"playing-card-content has-text-centered"},[e._t("content")],2),a("div",{staticClass:"playing-card-footer"},[e._t("footer")],2)])]),e._m(1)])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-large"},[a("span",{staticClass:"fa-stack fa-3x"},[a("i",{staticClass:"fa fa-circle fa-stack-2x has-text-black"}),a("i",{staticClass:"fa fa-stack-1x has-text-white fa-check"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box card-backing"},[n("div",{staticClass:"backing"},[n("img",{staticClass:"branding",attrs:{src:a("0e7e")}})])])}],s={name:"playing-card",props:{display:{type:Boolean,default:!1},alignment:{type:String,default:null},select:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(){this.select&&this.$emit("selected")}}},i=s,o=(a("ae08"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"3078715c",null);t["a"]=c.exports},fb98:function(e,t,a){}});
//# sourceMappingURL=app.13ced58d.js.map