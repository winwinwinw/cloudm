(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1389:function(e,t,n){"use strict";n("db1d")},"34f1":function(e,t,n){"use strict";n("4d51")},"44ab":function(e,t,n){},"4bdf":function(e,t,n){},"4d51":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=n("2877"),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("van-nav-bar",{attrs:{title:e.$route.meta.title,fixed:""},scopedSlots:e._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"wap-nav",size:"0.7rem",color:"#000"}})]},proxy:!0}])})],1),n("div",{staticClass:"main"},[n("router-view")],1),n("div",[n("van-tabbar",{attrs:{route:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{replace:"",to:"/layout/home",icon:"music-o"}},[e._v("音乐")]),n("van-tabbar-item",{attrs:{replace:"",to:"/layout/mine",icon:"contact"}},[e._v("我的")])],1)],1)])},f=[],m={name:"index",data:function(){return{active:0}}},p=m,h=(n("f3ed"),Object(i["a"])(p,d,f,!1,null,"035d5c52",null)),v=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"play"},[n("div",{staticClass:"song-bg",style:"background-image: url("+(e.songInfo&&e.songInfo.al&&e.songInfo.al.picUrl)}),n("div",{staticClass:"header"},[n("van-icon",{staticClass:"left-icon",attrs:{name:"arrow-left",size:"20"},on:{click:function(t){return e.$router.back()}}})],1),n("div",{staticClass:"song-wrapper"},[n("div",{staticClass:"song-turn ani",style:"animation-play-state:"+(e.playState?"running":"paused")},[n("div",{staticClass:"song-img"},[n("img",{staticStyle:{width:"100%"},attrs:{src:""+(e.songInfo&&e.songInfo.al&&e.songInfo.al.picUrl),alt:""}})])]),n("div",{staticClass:"start-box",on:{click:e.audioStart}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.playState,expression:"!playState"}],staticClass:"song-start"})]),n("div",{staticClass:"song-msg"},[n("h2",{staticClass:"m-song-h2"},[n("span",{staticClass:"m-song-sname"},[e._v(e._s(e.songInfo.name)+"-"+e._s(e.songInfo&&e.songInfo.ar&&e.songInfo.ar[0].name))])]),n("div",{staticClass:"lrcContent"},[n("p",{staticClass:"lrc"},[e._v(e._s(e.curLyric))])])]),n("div",{staticClass:"needle",style:"transform: rotate("+e.needleDeg+");"})]),n("audio",{ref:"audio",attrs:{preload:"metadata",src:"https://music.163.com/song/media/outer/url?id="+e.id+".mp3"}})])},b=[],y=n("1da1"),w=n("ade3"),_=(n("c3a6"),n("ad06")),k=(n("96cf"),n("b0c0"),n("ac1f"),n("466d"),n("fb6a"),n("1276"),n("d3b7"),n("159b"),n("a9e3"),n("bc3a")),S=n.n(k),L="daiHongChao";function x(e){return localStorage.setItem(L,e)}function O(){return localStorage.getItem(L)}function C(){return localStorage.removeItem(L)}var j=S.a.create({baseURL:"//121.40.228.138:3000/",headers:{},params:{},data:{},xhrFields:{withCredentials:!0},timeout:5e3});j.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),j.interceptors.response.use((function(e){var t=e.data.code;return 200!==t?Promise.reject(e):(e.data.token&&x(e.data.token),e)}),(function(e){return Promise.reject(e)}));var E=j,I=function(e){var t=e.phone,n=e.password,a=e.captcha,r=e.md5_password;return E({url:"/login/cellphone",params:{phone:t,password:n,captcha:a,md5_password:r}})},$=function(){return E({url:"/logout"})},R=function(e){var t=e.limit;return E({url:"/personalized",params:{limit:t}})},N=function(e){var t=e.limit;return E({url:"/personalized/newsong",params:{limit:t}})},M=function(){return E({url:"/search/hot"})},D=function(e){var t=e.keywords,n=e.limit,a=e.offset;return E({url:"/cloudsearch",params:{keywords:t,limit:n,offset:a}})},T=function(e){var t=e.id;return E({url:"/song/detail?ids=".concat(t)})},z=function(e){var t=e.id;return E({url:"/lyric?id=".concat(t)})},F=function(e){var t=e.songListId;e.limit;return E({url:"/playlist/track/all",params:{id:t,limit:10}})},H={components:Object(w["a"])({},_["a"].name,_["a"]),name:"play",data:function(){return{playState:!1,id:this.$route.query.id,songInfo:{},lyric:{},curLyric:"",lastLy:"",audioEvent:null}},computed:{needleDeg:function(){return this.playState?"-7deg":"-38deg"}},methods:{getSong:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T({id:e.id});case 2:return n=t.sent,e.songInfo=n.data.songs[0],t.next=6,z({id:e.id});case 6:a=t.sent,console.log(n),r=a.data.lrc.lyric,e.lyric=e._formatLyr(r),e.curLyric=e.lyric[0];case 11:case"end":return t.stop()}}),t)})))()},_formatLyr:function(e){var t=/\[.+?\]/g,n=e.match(t),a=e.split(/\[.+?\]/).slice(1),r={};return n.forEach((function(e,t){var n=60*e.split(":")[0].split("")[2],s="0"===e.split(":")[1].split(".")[0].split("")[0]?e.split(":")[1].split(".")[0].split("")[1]:e.split(":")[1].split(".")[0];r[n+Number(s)]=a[t]})),r},audioStart:function(){this.playState?this.$refs.audio.pause():this.$refs.audio.play(),this.playState=!this.playState},showLyric:function(){var e=this;this.audioEvent=function(){var t=Math.floor(e.$refs.audio.currentTime);e.lyric[t]?(e.curLyric=e.lyric[t],e.lastLy=e.curLyric):e.curLyric=e.lastLy},this.$refs.audio.addEventListener("timeupdate",this.audioEvent)}},mounted:function(){this.getSong(),this.showLyric(),console.log(this.$route.query.id),console.log(this.$refs.audio.ended)},beforeRouteLeave:function(e,t,n){this.$refs.audio.removeEventListener("timeupdate",this.audioEvent),n()}},P=H,V=(n("1389"),Object(i["a"])(P,g,b,!1,null,"3ea33fac",null)),q=V.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{title:e.$route.meta.title,fixed:""},scopedSlots:e._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"arrow-left",size:"0.7rem",color:"#000"},on:{click:function(t){return e.$router.replace("/layout/home")}}})]},proxy:!0}])}),n("div",[n("van-search",{attrs:{placeholder:e.searchHotVal,"show-action":""},on:{cancel:function(t){e.kw=""},input:e.searchChangeFn,search:function(t){e.kw=e.searchHotVal}},model:{value:e.kw,callback:function(t){e.kw=t},expression:"kw"}})],1),0===e.kw.length||0===e.hotSearchList.length?n("div",{staticClass:"search_wrap"},[n("p",{staticClass:"hot_title"},[e._v("热门搜索")]),n("div",{staticClass:"hot_name_wrap"},e._l(e.hotSearchList,(function(t,a){return n("span",{key:a,staticClass:"hot_item",on:{click:function(n){return e.keyWordInputFn(t.first)}}},[e._v(e._s(t.first))])})),0)]):n("div",{staticClass:"search_wrap"},[n("p",{staticClass:"hot_title"},[e._v("最佳匹配")]),n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了",offset:"30"},on:{load:function(t){return e.onLoad(e.kw)}},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.searchList,(function(e,t){return n("MusicItem",{key:t,attrs:{name:e.name,id:e.id,albumName:e.alia[0],singerName:e.ar[0].name}})})),1)],1)],1)},A=[],J=n("2909"),K=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-cell-group",[n("van-cell",{attrs:{center:"",title:e.name,label:e.singerName+(void 0!==e.albumName?"-"+e.albumName:"")},scopedSlots:e._u([{key:"right-icon",fn:function(){return[n("van-icon",{attrs:{name:"play-circle-o",size:"0.6rem"},on:{click:e.playMusicFn}})]},proxy:!0}])})],1)],1)}),B=[],W={name:"MusicItem",props:{name:String,id:[Number,String],albumName:String,singerName:String},methods:{playMusicFn:function(){this.$router.push({path:"/play",query:{id:this.id}})}}},G=W,Q=Object(i["a"])(G,K,B,!1,null,"0feadc40",null),X=Q.exports,Y={data:function(){return{kw:"",loading:!1,finished:!1,hotSearchList:[],searchList:[],timer:null,page:1,searchHotVal:this.$route.query.searchHotVal}},components:{MusicItem:X},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:n=t.sent,e.hotSearchList=n.data.result.hots;case 4:case"end":return t.stop()}}),t)})))()},methods:{searchChangeFn:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.page=1,e.finished=!1,clearTimeout(e.timer),0!==e.kw.length){t.next=6;break}return e.searchList=[],t.abrupt("return");case 6:e.timer=setTimeout(Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.searchFn();case 2:n=t.sent,e.searchList=n.data.result.songs,console.log(n);case 5:case"end":return t.stop()}}),t)}))),100);case 7:case"end":return t.stop()}}),t)})))()},keyWordInputFn:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.page=1,t.finished=!1,t.kw=e,n.next=5,t.searchFn();case 5:a=n.sent,t.searchList=a.data.result.songs;case 7:case"end":return n.stop()}}),n)})))()},searchFn:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D({keywords:e.kw,limit:10,offset:10*(e.page-1)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},onLoad:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.page++,n.next=3,t.searchFn(e);case 3:if(a=n.sent,!(t.searchList.length+10>=a.data.result.songCount)){n.next=7;break}return t.finished=!0,n.abrupt("return");case 7:t.searchList=[].concat(Object(J["a"])(t.searchList),Object(J["a"])(a.data.result.songs)),t.loading=!1;case 9:case"end":return n.stop()}}),n)})))()}}},Z=Y,ee=(n("34f1"),Object(i["a"])(Z,U,A,!1,null,"cdb10e58",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("van-search",{attrs:{placeholder:e.searchHotVal},on:{focus:function(t){return e.enterSearchFn(e.searchHotVal)}}})],1),n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},e._l(e.images,(function(e,t){return n("van-swipe-item",{key:t},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}],staticStyle:{width:"100%",height:"100%"},attrs:{alt:""}})])})),1),n("p",{staticClass:"title"},[e._v("推荐歌单")]),n("div",[n("van-row",{attrs:{gutter:"6"}},e._l(e.recommendSongList,(function(t){return n("van-col",{key:t.id,attrs:{span:"8"},on:{click:function(n){return e.songListFn(t.id)}}},[n("div",{staticClass:"songListImg"},[n("van-image",{attrs:{width:"100%",height:"3rem",src:t.picUrl}}),n("div",{staticClass:"playCount"},[n("van-icon",{attrs:{name:"service-o",size:"10"}}),n("span",[e._v(" "+e._s(Math.floor(t.playCount/1e4))+"万 ")])],1)],1),n("p",{staticClass:"song_name"},[e._v(e._s(t.name))])])})),1)],1),n("p",{staticClass:"title"},[e._v("推荐音乐")]),n("div",e._l(e.recommendNewMusicList,(function(e,t){return n("music-item",{key:t,attrs:{name:e.name,id:e.id,albumName:e.song.album.alias[0],singerName:e.song.album.artists[0].name}})})),1)],1)},ae=[],re={name:"index",data:function(){return{recommendSongList:[],recommendNewMusicList:[],playCount:0,hotSearchList:[],placeholderHot:"",hotSearchID:Math.floor(10*Math.random()),time:null,images:["https://w.wallhaven.cc/full/3z/wallhaven-3zwkz9.jpg","https://img01.yzcdn.cn/vant/apple-1.jpg","https://img01.yzcdn.cn/vant/apple-2.jpg"]}},components:{MusicItem:X},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R({limit:6});case 2:return n=t.sent,e.recommendSongList=n.data.result,t.next=6,N({limit:10});case 6:return a=t.sent,e.recommendNewMusicList=a.data.result,t.next=10,M();case 10:r=t.sent,e.hotSearchList=r.data.result.hots,e.searchTermRotation(),e.placeholderHot=e.hotSearchList[e.hotSearchID].first;case 14:case"end":return t.stop()}}),t)})))()},methods:{songListFn:function(e){},searchTermRotation:function(){var e=this;clearInterval(this.time),this.time=setInterval((function(){e.hotSearchID++,e.hotSearchID>9&&(e.hotSearchID=0),e.placeholderHot=e.hotSearchList[e.hotSearchID].first}),4e3)},enterSearchFn:function(e){clearInterval(this.time),this.$router.push({path:"/layout/search",query:{searchHotVal:e}})}},computed:{searchHotVal:{get:function(){return this.placeholderHot}}}},se=re,ie=(n("f32d"),Object(i["a"])(se,ne,ae,!1,null,"6fe4f314",null)),oe=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header"},[n("van-icon",{staticClass:"left-icon",attrs:{name:"arrow-left",size:"20",color:"black"},on:{click:function(t){return e.$router.back()}}})],1),e._l(e.songList,(function(e,t){return n("MusicItem",{key:t,attrs:{name:e.al.name,id:e.al.id,albumName:e.alia[0],singerName:e.ar[0].name}})}))],2)},ue=[],le={name:"index",data:function(){return{songListId:this.$route.query.songListID,songList:[]}},components:{MusicItem:X},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F({songListId:e.songListId});case 2:n=t.sent,e.songList=n.data.songs,console.log(n);case 5:case"end":return t.stop()}}),t)})))()}},de=le,fe=(n("f9e2"),Object(i["a"])(de,ce,ue,!1,null,"6a12f00c",null)),me=fe.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loginStatus?n("div",{staticClass:"userBox"},[n("div",{staticClass:"userInfo"},[n("div",{staticClass:"headP"},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.$store.getters.headP,alt:""}})]),n("div",{staticClass:"nickName"},[e._v(e._s(e.$store.getters.nickName))]),n("div",{staticClass:"info"},[n("span",{staticStyle:{color:"#39a9ed"}},[e._v("关注数:")]),e._v(e._s(e.$store.getters.follows))])]),n("div",{staticClass:"tool"},e._l(e.toolList,(function(t,a){return n("div",{key:a,staticClass:"toolBox"},[n("van-icon",{attrs:{name:t.icon,color:t.color?"#c1c1c1":"#c20c0c",size:"42"}}),n("span",[e._v(e._s(t.name))])],1)})),0)]):n("div",[n("van-empty",{attrs:{description:"请登录"}},[n("van-button",{staticClass:"bottom-button",attrs:{round:"",type:"danger"},on:{click:e.loginFN}},[e._v("登陆")])],1)],1)])},he=[],ve={name:"index",data:function(){return{loginStatus:!1,toolList:[{name:"最近播放",icon:"clock"},{name:"本地/下载",icon:"label"},{name:"云盘",icon:"music"},{name:"已购",icon:"goods-collect"},{name:"我的好友",icon:"friends"},{name:"收藏和赞",icon:"star"},{name:"我的博客",icon:"audio"},{name:"音乐应用",icon:"add-o",color:"#eee"}]}},created:function(){!this.loginStatus&&this.$store.getters.UserID&&(this.loginStatus=!0)},methods:{loginFN:function(){this.$router.push("/login")}}},ge=ve,be=(n("764c"),Object(i["a"])(ge,pe,he,!1,null,"66958c77",null)),ye=be.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},_e=[],ke={name:"index"},Se=ke,Le=Object(i["a"])(Se,we,_e,!1,null,"62268058",null),xe=Le.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title"},[n("van-nav-bar",{attrs:{title:e.$route.meta.title,fixed:""},scopedSlots:e._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"arrow-left",size:"0.7rem",color:"#000"},on:{click:function(t){return e.$router.replace("/layout/mine")}}})]},proxy:!0}])})],1),n("van-sticky",{attrs:{"offset-top":48}},[n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写正确的手机号",trigger:"onBlur",pattern:/^1[3456789]\d{9}$/}]},model:{value:e.formLogin.username,callback:function(t){e.$set(e.formLogin,"username",t)},expression:"formLogin.username"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登陆")])],1)],1)],1),e._m(0),n("van-button",{staticStyle:{"margin-top":"300px"},on:{click:e.loginStatusFN}},[e._v("清除VueRouter缓存")])],1)},Ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reg"},[n("a",{attrs:{href:"javascript:"}},[e._v("注册")]),n("span",[e._v(" | ")]),n("a",{attrs:{href:"javascript:"}},[e._v("找回密码")])])}],je=n("5530"),Ee=(n("5319"),n("e7e5"),n("d399")),Ie=function(e){var t=e.type,n=e.message;"success"===t?Object(Ee["a"])({type:t,message:n}):Object(Ee["a"])({type:"fail",message:n})},$e=n("2f62"),Re={name:"login",data:function(){return{formLogin:{username:"18324576519",password:"dai20000316"},uid:0}},methods:Object(je["a"])(Object(je["a"])({},Object($e["b"])("user",["getLoginActions","loginOutActions"])),{},{onSubmit:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getLoginActions({phone:t.formLogin.username,password:t.formLogin.password});case 3:n=e.sent,t.$router.replace({path:"/layout"}),console.log(n),t.uid=n.data.account.id,Ie({type:"success",message:"登陆成功"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),Ie({message:"手机号或密码错误"}),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},loginStatusFN:function(){this.loginOutActions()}})},Ne=Re,Me=(n("e484"),Object(i["a"])(Ne,Oe,Ce,!1,null,"72f667e4",null)),De=Me.exports;a["a"].use(l["a"]);var Te=[{path:"/",redirect:"/layout"},{path:"/login",name:"Login",component:De,meta:{title:"登陆"}},{path:"/layout",name:"Layout",component:v,redirect:"/layout/home",children:[{path:"home",name:"Home",component:oe,meta:{title:"音乐"}},{path:"search",name:"Search",component:te,meta:{title:"搜索"}},{path:"mine",name:"Mine",component:ye,meta:{title:"我的"}},{path:"broadcasting",name:"broadcasting",component:xe,meta:{title:"电台"}}]},{path:"/play",name:"Play",component:q},{path:"/songList",name:"SongList",component:me},{path:"*",redirect:"/layout/home",hidden:!0}],ze=function(){return new l["a"]({routes:Te})},Fe=ze();function He(){Fe.matcher=ze().matcher}var Pe=Fe,Ve=function(){return{token:O()||[],userDetail:{}}},qe=Ve(),Ue={RESET_STATE:function(e){Object.assign(e,Ve())},SET_TOKEN:function(e,t){e.token=t,x(t)},REMOVE_TOKEN:function(e){e.token="",C()},SET_USER:function(e,t){e.userDetail=t}},Ae={getLoginActions:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,I(t);case 3:return r=n.sent,200===r.data.code&&(a("SET_USER",r.data),a("SET_TOKEN",r.data.token)),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},loginOutActions:function(e){var t=e.commit;t("RESET_STATE"),t("REMOVE_TOKEN"),He(),$()}},Je={namespaced:!0,state:qe,mutations:Ue,actions:Ae},Ke=(n("e9c4"),{UserID:function(e){return"{}"!==JSON.stringify(e.user.userDetail)?e.user.userDetail.account.id:null},token:function(e){return e.user.token},nickName:function(e){return"{}"!==JSON.stringify(e.user.userDetail)?e.user.userDetail.profile.nickname:null},headP:function(e){return"{}"!==JSON.stringify(e.user.userDetail)?e.user.userDetail.profile.avatarUrl:null},follows:function(e){return"{}"!==JSON.stringify(e.user.userDetail)?e.user.userDetail.profile.follows:null}}),Be=Ke;a["a"].use($e["a"]);var We=new $e["a"].Store({modules:{user:Je},getters:Be}),Ge=We,Qe=(n("ed90"),n("5a8b"),n("a52c"),n("2ed4")),Xe=(n("537a"),n("ac28")),Ye=(n("5246"),n("6b41")),Ze=(n("4d48"),n("d1e1")),et=(n("81e6"),n("9ffb")),tt=(n("4056"),n("44bf")),nt=(n("0653"),n("34e9")),at=(n("c194"),n("7744")),rt=(n("5852"),n("d961")),st=(n("2994"),n("2bdd")),it=(n("f1dc"),n("6e47")),ot=(n("4b0a"),n("2bb1")),ct=(n("7844"),n("5596")),ut=(n("91d5"),n("f0ca")),lt=(n("66b9"),n("b650")),dt=(n("66cf"),n("343b")),ft=(n("be7f"),n("565f")),mt=(n("38d5"),n("772a")),pt=(n("0cc8"),n("3104")),ht=(n("9a83"),n("f564"));a["a"].use(Ee["a"]),a["a"].use(ht["a"]),a["a"].use(pt["a"]),a["a"].use(mt["a"]),a["a"].use(ft["a"]),a["a"].use(dt["a"]),a["a"].use(lt["a"]),a["a"].use(ut["a"]),a["a"].use(ct["a"]),a["a"].use(ot["a"]),a["a"].use(it["a"]),a["a"].use(st["a"]),a["a"].use(rt["a"]),a["a"].use(_["a"]),a["a"].use(at["a"]),a["a"].use(nt["a"]),a["a"].use(tt["a"]),a["a"].use(et["a"]),a["a"].use(Ze["a"]),a["a"].use(Ye["a"]),a["a"].use(Xe["a"]),a["a"].use(Qe["a"]),a["a"].config.productionTip=!1,console.log=function(){},console.error=function(){},console.dir=function(){},new a["a"]({router:Pe,store:Ge,render:function(e){return e(u)}}).$mount("#app")},"5a8b":function(e,t,n){},"764c":function(e,t,n){"use strict";n("e69a")},b8ef:function(e,t,n){},ce77:function(e,t,n){},db1d:function(e,t,n){},e484:function(e,t,n){"use strict";n("ce77")},e69a:function(e,t,n){},ed90:function(e,t){(function(e,t){var n=t.documentElement,a=e.devicePixelRatio||1;function r(){t.body?t.body.style.fontSize=12*a+"px":t.addEventListener("DOMContentLoaded",r)}function s(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}if(r(),s(),e.addEventListener("resize",s),e.addEventListener("pageshow",(function(e){e.persisted&&s()})),a>=2){var i=t.createElement("body"),o=t.createElement("div");o.style.border=".5px solid transparent",i.appendChild(o),n.appendChild(i),1===o.offsetHeight&&n.classList.add("hairlines"),n.removeChild(i)}})(window,document)},f32d:function(e,t,n){"use strict";n("44ab")},f3ed:function(e,t,n){"use strict";n("b8ef")},f9e2:function(e,t,n){"use strict";n("4bdf")}});
//# sourceMappingURL=app.7d23a2fc.js.map