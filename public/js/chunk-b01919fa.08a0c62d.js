(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b01919fa"],{"922b":function(e,r,n){},a55b:function(e,r,n){"use strict";n.r(r);var s=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"container"},[n("h2",[e._v("Login to SVTrain")]),n("div",{staticClass:"login-form"},[n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userLogin,expression:"userLogin"}],attrs:{type:"text",placeholder:"Login"},domProps:{value:e.userLogin},on:{keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login(r)},input:function(r){r.target.composing||(e.userLogin=r.target.value)}}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],ref:"password",attrs:{type:"password",placeholder:"Type password..."},domProps:{value:e.userPassword},on:{keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login(r)},input:function(r){r.target.composing||(e.userPassword=r.target.value)}}})]),n("li",[n("b-button",{attrs:{disabled:e.loading},on:{click:e.login,keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login(r)}}},[e._v(" Login ")])],1),n("li",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage.length>0,expression:"errorMessage.length > 0"}],staticClass:"error-message"},[e._v(" "+e._s(e.errorMessage)+" ")])])])])},t=[],o=(n("d3b7"),n("25f0"),n("96cf"),n("1da1")),a=n("7c15"),i={name:"LoginPage",data:function(){return{userLogin:"admin",userPassword:"",errorMessage:"",loading:!1}},methods:{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.errorMessage="",0!==e.userLogin.length){r.next=5;break}return e.errorMessage="Login can not be empty",e.userPassword="",r.abrupt("return");case 5:if(0!==e.userPassword.length){r.next=9;break}return e.errorMessage="Password can not be empty",e.userPassword="",r.abrupt("return");case 9:return n=null,r.prev=10,e.loading=!0,r.next=14,a["a"].login(e.userLogin,e.userPassword);case 14:n=r.sent,localStorage.setItem("sessionToken",n.sessionToken),localStorage.setItem("sessionUser",n.login),a["a"].setSessionToken(n.sessionToken),e.$router.push({name:"WorkSpacePage"}),e.loading=!1,r.next=27;break;case 22:r.prev=22,r.t0=r["catch"](10),e.loading=!1,e.errorMessage=r.t0.toString(),e.userPassword="";case 27:case"end":return r.stop()}}),r,null,[[10,22]])})))()}},mounted:function(){this.$refs.password.focus(),this.$bvToast.toast("Mounted",{title:"Error",autoHideDelay:5e3,variant:"danger",toaster:"b-toaster-bottom-right",solid:!0})}},u=i,l=(n("f4aa"),n("2877")),d=Object(l["a"])(u,s,t,!1,null,"643eafa2",null);r["default"]=d.exports},f4aa:function(e,r,n){"use strict";var s=n("922b"),t=n.n(s);t.a}}]);
//# sourceMappingURL=chunk-b01919fa.08a0c62d.js.map