(this["webpackJsonpdemo-context-api"]=this["webpackJsonpdemo-context-api"]||[]).push([[0],{166:function(e,t,n){e.exports=n(315)},171:function(e,t,n){},175:function(e,t,n){},180:function(e,t){},182:function(e,t){},196:function(e,t){},198:function(e,t){},226:function(e,t){},228:function(e,t){},229:function(e,t){},234:function(e,t){},236:function(e,t){},242:function(e,t){},244:function(e,t){},263:function(e,t){},275:function(e,t){},278:function(e,t){},313:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(33),r=n.n(c),l=n(7),u=n(26),i=n(16),s=n(158),m=(n(87),n(171),n(84)),d=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),o=n[0],c=n[1];return[function(e){c(Object(m.a)(Object(m.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))},function(t){console.log("INSIDE HandleSubmit Hook",o),t.preventDefault(),t.target.reset(),e(o),c({})},o]},f=function(e){var t,n=d((function(t){console.log("INSIDE todoItem",t),e.sendTodo(t)})),a=Object(l.a)(n,2),c=a[0],r=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{id:"form",onSubmit:r},o.a.createElement("h3",null,"Add Item"),o.a.createElement(i.a.Group,{controlId:"formGroupEmail"},o.a.createElement(i.a.Label,null,"To Do Item"),o.a.createElement(i.a.Control,(t={"data-testid":"todoItem",type:"text",placeholder:"Item Details",name:"text"},Object(u.a)(t,"placeholder","Add To Do List Item"),Object(u.a)(t,"onChange",c),t))),o.a.createElement(i.a.Group,{controlId:"formGroupPassword"},o.a.createElement(i.a.Label,null,"Assigned To"),o.a.createElement(i.a.Control,{"data-testid":"assignee",placeholder:"Assignee Name",type:"text",name:"assignee",onChange:c})),o.a.createElement(i.a.Group,{controlId:"formBasicRange"},o.a.createElement(i.a.Control,{"data-testid":"slider",type:"range",defaultValue:"1",min:"1",max:"5",name:"difficulty",onChange:c})),o.a.createElement(s.a,{"data-testid":"submit",variant:"primary",type:"submit"},"Add Item")))},p=(n(175),n(159)),b=n(160),h=n(165),E=n(163),g=o.a.createContext(),v=function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={maxDisplay:4,sortMethod:"assignee",hide:!0},a}return Object(b.a)(n,[{key:"render",value:function(){return o.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),n}(o.a.Component),O=n(85),j=n.n(O),y=n(161),x=n(162),I=n.n(x),C=n(14),S=n.n(C),k=o.a.createContext();var D=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(!1),i=Object(l.a)(u,2),s=i[0],m=i[1];Object(a.useEffect)((function(){if(S.a.load("auth")){var e=S.a.load("auth");d(e)}}),[]);var d=function(e){try{console.log("IN Validate Token ",{token:e});var t=I.a.verify(e,"goldfish");console.log("user2",{user:t}),f(!0,e,t)}catch(n){f(!1,null,{}),console.log("IN CATCH, THIS IS BAD")}},f=function(e,t,n){S.a.save("auth",t),m(!0),r(n)},p={user:c,loggedIn:s,login:function(e,t){fetch("".concat("https://simonpanek-auth-api.herokuapp.com","/signin"),{method:"post",mode:"cors",cache:"no-cache",headers:new Headers({Authorization:"Basic ".concat(btoa("".concat(e,":").concat(t)))})}).then((function(e){return e.json()})).then((function(e){console.log("user.token",e.token),d(e.token)}))}};return console.log("LOGINCONTEXT ",{loggedIn:s}),o.a.createElement(k.Provider,{value:p},e.children)},w=n(149);var T=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],m=i[1],d=Object(a.useState)(""),f=Object(l.a)(d,2),p=f[0],b=f[1],h=Object(a.useState)("user"),E=Object(l.a)(h,2),g=E[0],v=E[1],O=Object(a.useContext)(k),x=function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,I(c,s,g);case 3:S.a.save("signedUp",!0),O.login(c,s,p);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e,t,n){w.post("https://simonpanek-auth-api.herokuapp.com/signup",{username:e,password:t,role:n}).then((function(e){console.log("response from signup server",e.data)}))};return o.a.createElement("form",{onSubmit:x},o.a.createElement("input",{onBlur:function(e){r(e.target.value)},type:"text",name:"name",placeholder:"Name"}),o.a.createElement("input",{onBlur:function(e){m(e.target.value)},type:"password",name:"password",placeholder:"Password"}),o.a.createElement("input",{onBlur:function(e){b(e.target.value)},type:"email",name:"email",placeholder:"Email"}),o.a.createElement("label",null,"Role"),o.a.createElement("select",{onChange:function(e){v(e.target.value)}},o.a.createElement("option",{value:"user"},'"user"'),o.a.createElement("option",{value:"editor"},'"editor"'),o.a.createElement("option",{value:"admin"},'"admin"')),o.a.createElement("button",null,"Enter"))};var N=function(e){var t=Object(a.useContext)(k),n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],u=c[1];return Object(a.useEffect)((function(){console.log("loginContex.loggedIn ",t.loggedIn),console.log("loginContext.user.capabilities ",t.user.capabilities),u(t.loggedIn&&!!e.capability&&t.user.capabilities.includes(e.capability))}),[t.loggedIn,e.capability]),console.log(r,t.loggedIn),r&&o.a.createElement("div",null,e.children)},B=function(e){var t=Object(a.useContext)(g),n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],u=c[1],i=Object(a.useState)([]),s=Object(l.a)(i,2),m=s[0],d=s[1],f=Object(a.useState)(!0),p=Object(l.a)(f,2),b=p[0],h=p[1],E=e.list.slice(0,t.maxDisplay);Object(a.useEffect)((function(){O(),d(E)}),[e.list]);var v=S.a.load("signedUp");Object(a.useEffect)((function(){v&&h(!1)}));var O=function(){for(var n=[],a=Math.ceil(e.list.length/t.maxDisplay),c=1;c<=a;c++)n.push(o.a.createElement("button",{key:c,name:c,onClick:j},"Page ",c));u([n])},j=function(n){var a=n.target.name,o=e.list.slice((a-1)*t.maxDisplay,t.maxDisplay+(a-1)*t.maxDisplay);d(o)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,!1===b?"":o.a.createElement(T,null)),o.a.createElement("div",null,o.a.createElement("ul",null,m.map((function(t){return o.a.createElement("li",{"data-testid":"list-item",className:"complete-".concat(t.complete.toString()),key:t._id},o.a.createElement("span",{id:"listSpan",onClick:function(){return e.handleComplete(t._id)}},t.text," -- ",t.assignee),o.a.createElement(N,{capability:"delete"},o.a.createElement("button",{id:"deleteButton",type:"submit",onClick:function(){return e.handleDelete(t._id)}},"X")))}))),o.a.createElement("div",null,r)))},_=(n(313),n(314),n(164)),A=n(149),H="https://simonpanek-auth-api.herokuapp.com",G=function(){var e=Object(a.useContext)(g),t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){o.sort((function(t,n){return t[e.sortMethod]>n[e.sortMethod]?1:-1})),c(o)}));var r=S.a.load("auth");A.defaults.headers.common.Authorization="Bearer ".concat(r);var u=function(){A.get("".concat(H,"/api/v2/todo/")).then((function(e){var t=e.data;console.log({results:t}),c(t)})).catch(console.error)};return[o,function(e){e.due=new Date,A.post("".concat(H,"/api/v2/todo"),{assignee:e.assignee,complete:!1,difficulty:e.difficulty,text:e.text,__v:0}).then((function(e){var t=e.data;c([].concat(Object(_.a)(o),[t]))})).catch(console.error)},function(e){var t=o.filter((function(t){return t._id===e}))[0]||{};if(t._id){t.complete=!t.complete;var n="".concat(H,"/api/v2/todo/").concat(e);A.put(n,{complete:t.complete}).then((function(e){console.log({response:e}),c(o.map((function(n){return n._id===t._id?e.data:n})))})).catch(console.error)}},function(e){if((o.filter((function(t){return t._id===e}))[0]||{})._id){var t="".concat(H,"/api/v2/todo/").concat(e);A.delete(t).then((function(){return u()})).catch(console.error)}},u]},P=function(){var e=G(),t=Object(l.a)(e,5),n=t[0],c=t[1],r=t[2],u=t[3],i=t[4];Object(a.useEffect)(i,[]);var s=Object(a.useState)([]),m=Object(l.a)(s,2),d=m[0],p=m[1];Object(a.useEffect)((function(){var e="There are ".concat(n.filter((function(e){return!e.complete})).length," Items To Complete");p(e)}),[n]);var b=Object(a.useState)(document.title),h=Object(l.a)(b,2),E=(h[0],h[1]);return Object(a.useEffect)((function(){var e="Todo: ".concat(n.filter((function(e){return!e.complete})).length," / Done: ").concat(n.filter((function(e){return e.complete})).length);return E(e),function(){document.title=e}})),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h2",{id:"countH2"},d)),o.a.createElement("section",{className:"todo"},o.a.createElement("div",null,o.a.createElement(f,{sendTodo:c})),o.a.createElement("div",null,o.a.createElement(B,{list:n,handleComplete:r,handleDelete:u}))))},L=n(56),F=n(86);var M=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],m=i[1],d=Object(a.useState)(!1),f=Object(l.a)(d,2),p=f[0],b=f[1],h=Object(a.useContext)(k),E=S.a.load("auth");return Object(a.useEffect)((function(){E&&b(!0)}),[b]),console.log({userName:c},{password:s}),o.a.createElement("div",null,!0===p?"":o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h.login(c,s)}},o.a.createElement("input",{onBlur:function(e){r(e.target.value)},type:"text",name:"name",placeholder:"Name"}),o.a.createElement("input",{onBlur:function(e){m(e.target.value)},type:"password",name:"password",placeholder:"Password"}),o.a.createElement("button",null,"Enter")))},z=function(e){return o.a.createElement(L.a,{bg:"dark",variant:"dark",expand:"sm"},o.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(F.a,{className:"mr-auto"},o.a.createElement(F.a.Link,{href:"#home"},"Home"))),o.a.createElement(M,null))},J=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,null,o.a.createElement(z,null),o.a.createElement(v,null,o.a.createElement(P,null))))},R=function(){return o.a.createElement(J,null)},U=document.getElementById("root");r.a.render(o.a.createElement(R,null),U)}},[[166,1,2]]]);
//# sourceMappingURL=main.6528acc0.chunk.js.map