(this["webpackJsonpproblem-book"]=this["webpackJsonpproblem-book"]||[]).push([[0],{51:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o=n(1),l=n.n(o),d=n(8),j=n.n(d),u=n(2),b=n(4),p=n(3),x=n.p+"static/media/logo.47644d92.svg",h=n.p+"static/media/admin.9385f271.svg",O=n(23),g=(n(31),n.p+"static/media/cross.47eb640c.svg"),m=n(0),f=p.b.div(a||(a=Object(u.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  justify-content: space-between;\n  line-height: 20px;\n  background-color: aquamarine;\n  padding: 10px;\n"]))),v=p.b.div(r||(r=Object(u.a)(["\n  width: calc(100% - 20px);\n  line-height: 20px;\n  background-color: white;\n  padding: 10px;\n  color: red;\n  form { color: black; }\n"]))),w=p.b.img(c||(c=Object(u.a)(["\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-left: 20px;\n"]))),k=function(e){var t=e.children,n=e.isOpen,a=e.setOpen,r=e.header;return Object(m.jsxs)(O.a,{open:n,center:!0,onClose:function(){return a(!1)},closeOnOverlayClick:!0,closeOnEsc:!0,showCloseIcon:!1,focusTrapped:!1,styles:{modal:{padding:0,width:"500px"}},children:[Object(m.jsxs)(f,{children:[r,Object(m.jsx)(w,{src:g,onClick:function(){return a(!1)}})]}),Object(m.jsx)(v,{children:t})]})},S=p.b.label(i||(i=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  input {\n    width: 100%;\n    margin-top: 10px;\n  }\n  margin: 20px 0;\n"]))),y=p.b.div(s||(s=Object(u.a)(["\n  color: red;\n  width: 100%;\n"]))),C=function(e){var t=e.name,n=e.error,a=e.defaultValue,r=e.type,c=e.children;return"select"===r?Object(m.jsxs)(S,{children:[t,Object(m.jsx)(y,{children:n}),c]}):Object(m.jsxs)(S,{children:[t,Object(m.jsx)(y,{children:n}),Object(m.jsx)("input",{defaultValue:a,name:t.toLowerCase()})]})};C.defaultProps={error:"",defaultValue:"",type:"input",children:null};var D=C,I=n(7),T=n.n(I);T.a.defaults.baseURL="https://uxcandy.com/~shapoval/test-task-backend/v2";var F,L,A,E,P,V,_,M,q,z,B,J,N,U,R,G,H,K,Q,W=p.b.div(F||(F=Object(u.a)(["\n  width: calc(100% - 40px);\n  height: 60px;\n  position: sticky;\n  background-color: aquamarine;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  \n  img {\n    width: 40px;\n    height: 40px;\n  }\n"]))),X=p.b.div(L||(L=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n"]))),Y=p.b.button(A||(A=Object(u.a)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: bold;\n"]))),Z={username:"",password:""},$=function(e){var t=e.loggedIn,n=e.logOut,a=e.logIn,r=Object(o.useState)(!1),c=Object(b.a)(r,2),i=c[0],s=c[1],l=Object(o.useState)(Z),d=Object(b.a)(l,2),j=d[0],u=d[1];return Object(m.jsxs)(W,{children:[Object(m.jsxs)(X,{to:"/",children:[Object(m.jsx)("img",{src:x,alt:""}),"Problem Book"]}),Object(m.jsxs)(Y,{onClick:function(){u(""),t?n():s(!0)},children:[t?"Switch to user":"Switch to admin",Object(m.jsx)("img",{src:h,alt:""})]}),Object(m.jsx)(k,{isOpen:i,setOpen:s,header:"Log in as admin",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(Z),function(e,t,n){var a=new FormData;a.set("username",e),a.set("password",t),T.a.post("/login?developer=Cherkasik",a).then(n)}(e.target.login.value,e.target.password.value,(function(e){"error"!==e.data.status?(a(e.data.message.token),s(!1)):u(e.data.message)}))},children:[Object(m.jsx)(D,{name:"Login",error:j.username}),Object(m.jsx)(D,{name:"Password",error:j.password}),Object(m.jsx)("button",{type:"submit",children:"Login"})]})})]})},ee=n.p+"static/media/down-arrow.20d70776.svg",te=n.p+"static/media/plus.2a3feb59.svg",ne=p.b.div(E||(E=Object(u.a)(["\n  width: 100%;\n  max-width: 1000px;\n  height: calc(100% - 80px);\n  margin: auto;\n"]))),ae=p.b.div(P||(P=Object(u.a)(["\n  width: 100%;\n  font-size: 40px;\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  p {\n    margin: 0;\n  }\n"]))),re=p.b.div(V||(V=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n"]))),ce=p.b.img(_||(_=Object(u.a)(["\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n"]))),ie=p.b.img(M||(M=Object(u.a)(["\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  ","\n  transition: transform 0.3s ease;\n"])),(function(e){return e.rotateArrow&&"transform: rotate(180deg);"})),se=p.b.label(q||(q=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  input {\n    width: 100%;\n    margin-top: 10px;\n  }\n  margin: 20px 0;\n"]))),oe=p.b.div(z||(z=Object(u.a)(["\n  color: red;\n  width: 100%;\n"]))),le=p.b.select(B||(B=Object(u.a)(["\n  margin-right: 10px;\n  height: 20px;\n  width: 100px;\n"]))),de={username:"",email:"",text:""},je=function(e){var t=e.children,n=e.changeSortDirection,a=e.rotateArrow,r=e.getTasks,c=e.sortField,i=e.setSortField,s=Object(o.useState)(!1),l=Object(b.a)(s,2),d=l[0],j=l[1],u=Object(o.useState)(de),p=Object(b.a)(u,2),x=p[0],h=p[1];return Object(m.jsxs)(ne,{children:[Object(m.jsxs)(ae,{children:[Object(m.jsx)("p",{children:"Task list"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)(le,{value:c,onChange:function(e){return i(e.target.value)},children:[Object(m.jsx)("option",{value:"id",children:"id"}),Object(m.jsx)("option",{value:"username",children:"username"}),Object(m.jsx)("option",{value:"email",children:"email"}),Object(m.jsx)("option",{value:"status",children:"status"})]}),Object(m.jsx)(ie,{rotateArrow:a,onClick:n,src:ee}),Object(m.jsx)(ce,{onClick:function(){h(de),j(!0)},src:te}),Object(m.jsx)(k,{setOpen:j,isOpen:d,header:"Create task",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(de),function(e,t,n,a){var r=new FormData;r.set("username",e),r.set("email",t),r.set("text",n),T.a.post("/create?developer=Cherkasik",r).then(a)}(e.target.username.value,e.target.email.value,e.target.text.value,(function(e){"error"!==e.data.status?(r(),j(!1)):h(e.data.message)}))},children:[Object(m.jsxs)(se,{children:["Username",Object(m.jsx)(oe,{children:x.username}),Object(m.jsx)("input",{name:"username"})]}),Object(m.jsxs)(se,{children:["Email",Object(m.jsx)(oe,{children:x.email}),Object(m.jsx)("input",{name:"email"})]}),Object(m.jsxs)(se,{children:["Text",Object(m.jsx)(oe,{children:x.text}),Object(m.jsx)("input",{name:"text"})]}),Object(m.jsx)("button",{type:"submit",children:"Save"})]})})]})]}),Object(m.jsx)(re,{children:t})]})},ue=n.p+"static/media/edit.3a5b0553.svg",be=p.b.form(J||(J=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 260px;\n  width: 100%;\n  margin: 10px;\n  padding: 20px;\n  border: 1px solid black;\n  ","\n"])),(function(e){return e.done&&"\n    background-color: green;\n    color: white;\n  "})),pe=p.b.div(N||(N=Object(u.a)(["\n  max-height: 100px;\n  min-height: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  line-height: 20px;\n"]))),xe=p.b.div(U||(U=Object(u.a)(["\n  width: 100%;\n  min-height: 200px;\n  margin-top: 20px;\n"]))),he=p.b.div(R||(R=Object(u.a)(["\n  p {\n    width: 100%;\n    margin: 0;\n  }\n"]))),Oe=p.b.div(G||(G=Object(u.a)(["\n  p {\n    width: 100%;\n    margin: 0;\n  }\n"]))),ge=p.b.img(H||(H=Object(u.a)(["\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n"]))),me={text:"",status:""},fe=function(e){var t=e.name,n=e.email,a=e.text,r=e.status,c=e.isLoggedIn,i=e.updateCard,s=e.getTasks,l=Object(o.useState)(!1),d=Object(b.a)(l,2),j=d[0],u=d[1],p=Object(o.useState)(me),x=Object(b.a)(p,2),h=x[0],O=x[1],g=r%10===1,f=1===Math.floor(r/10);return Object(m.jsxs)(be,{done:f,children:[Object(m.jsxs)(pe,{children:[Object(m.jsxs)(he,{children:[Object(m.jsx)("p",{children:t}),Object(m.jsx)("p",{children:n})]}),Object(m.jsxs)(Oe,{children:[Object(m.jsx)("p",{children:g?"Edited":""}),c&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ge,{src:ue,onClick:function(){O(me),u(!0)}}),Object(m.jsx)(k,{setOpen:u,isOpen:j,header:"Create task",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(me);var t=e.target.text.value,n=10*parseInt(e.target.status.value,10);(t!==a||g)&&(n+=1);var r=i(t,n);r&&r.then((function(e){"ok"===e.data.status&&(s(),u(!1))}))},children:[Object(m.jsx)(D,{name:"Text",error:h.text,defaultValue:a}),Object(m.jsx)(D,{name:"Status",error:h.status,type:"select",children:Object(m.jsxs)("select",{defaultValue:f?1:0,name:"status",children:[Object(m.jsx)("option",{value:"0",children:"Task not done"}),Object(m.jsx)("option",{value:"1",children:"Task done"})]})}),Object(m.jsx)("button",{type:"submit",children:"Save"})]})})]})]})]}),Object(m.jsx)(xe,{children:a})]})},ve=p.b.div(K||(K=Object(u.a)(["\n  width: 100%;\n"]))),we=function(e){var t=e.pageNumber,n=e.currentPage,a=e.onChange;return 0===t?null:Object(m.jsx)(ve,{children:Object(m.jsx)("select",{value:n,onChange:a,children:Array.from(Array(t).keys()).map((function(e){return Object(m.jsx)("option",{value:e+1,children:e+1},e)}))})})};var ke=Object(p.a)(Q||(Q=Object(u.a)(["\n  html, body, #root {\n    height: 100%;\n    width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n"]))),Se=function(){var e,t=Object(o.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)({}),i=Object(b.a)(c,2),s=i[0],l=i[1],d=Object(o.useState)(!0),j=Object(b.a)(d,2),u=j[0],p=j[1],x=Object(o.useState)("id"),h=Object(b.a)(x,2),O=h[0],g=h[1],f=Object(o.useState)(1),v=Object(b.a)(f,2),w=v[0],k=v[1],S=function(){k(1),function(e,t,n){return T.a.get("/?developer=Cherkasik&sort_direction=".concat(e?"asc":"desc","&page=").concat(t,"&sort_field=").concat(n))}(u,w,O).then((function(e){return l(e.data.message)}))},y=function(){return new Date(localStorage.getItem("expireDate"))<=new Date};Object(o.useEffect)((function(){if(localStorage.getItem("token")){if(y())return localStorage.clear(),void r(!1);r(!0)}}),[]),Object(o.useEffect)((function(){S()}),[u,w,O]);var C=function(e,t,n){return y()?(r(!1),null):function(e,t,n){var a=new FormData;return a.set("token",localStorage.getItem("token")),a.set("text",t),a.set("status",n),T.a.post("/edit/".concat(e,"?developer=Cherkasik"),a)}(e,t,n)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ke,{}),Object(m.jsx)($,{loggedIn:a,logOut:function(){localStorage.clear(),r(!1)},logIn:function(e){var t=new Date;t.setDate(t.getDate()+1),localStorage.setItem("token",e),localStorage.setItem("expireDate",t.toString()),r(!0)}}),Object(m.jsxs)(je,{changeSortDirection:function(){return p(!u)},rotateArrow:u,getTasks:function(){return S()},sortField:O,setSortField:g,children:[null===(e=s.tasks)||void 0===e?void 0:e.map((function(e){return Object(m.jsx)(fe,{isLoggedIn:a,name:e.username,email:e.email,status:e.status,text:e.text,updateCard:function(t,n){return C(e.id,t,n)},getTasks:S},e.id)})),Object(m.jsx)(we,{pageNumber:Math.ceil(s.total_task_count/3)||0,currentPage:w,onChange:function(e){return k(parseInt(e.target.value,10))}})]})]})};j.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(Se,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.cd641c4c.chunk.js.map