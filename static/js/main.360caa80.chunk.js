(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{112:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),s=(n(112),n(29)),o=n(75),l=n(32),j=n(15),u=n(95),d=n(177),b=n(178),O=n(179),h=n(160),x=n(121),p=n(176),m=n(161),v=n(8);var f=n(2),g=Object(a.createContext)();function y(){var e=function(e,t){var n=Object(a.useState)((function(){var n=localStorage.getItem(e);return n?JSON.parse(n):t})),r=Object(v.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[c,e]),[c,i]}("user",null),t=Object(v.a)(e,2),n=t[0],r=t[1];return{user:n,setAdmin:function(){return r("admin")},unsetAdmin:function(){r("user"),localStorage.removeItem("userAnswers"),localStorage.removeItem("userScore")},signout:function(){return r(null)}}}function A(e){var t=e.children,n=y();return Object(f.jsx)(g.Provider,{value:n,children:t})}function w(){return Object(a.useContext)(g)}var S=n(159),C=n(48);function k(){var e,t=Object(j.g)(),n=w();return n.user?Object(f.jsxs)(S.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(f.jsx)(S.a,{item:!0,xs:9,children:Object(f.jsxs)(C.a,{variant:"subtitle1",style:{marginLeft:"20px"},children:["You are viewing this page as ",n.user]})}),Object(f.jsx)(S.a,{item:!0,xs:3,children:Object(f.jsxs)(h.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[(e=n.user,"admin"===e?Object(f.jsx)(x.a,{onClick:function(){n.unsetAdmin((function(){return t.push("/answers")}))},children:"Become User"}):"user"===e?Object(f.jsx)(x.a,{onClick:function(){n.setAdmin((function(){return t.push("/questions")}))},children:"Become Admin"}):null),Object(f.jsx)(x.a,{onClick:function(){n.signout((function(){return t.push("/")}))},children:"Sign out"})]})})]}):Object(f.jsx)(C.a,{variant:"h5",style:{textAlign:"center"},children:"You are not logged in."})}var N=n(40);function I(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(v.a)(n,2),c=r[0],i=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}var q=n(122),B=n(182),T=n(184),P=n(163),D=n(164),Y=[{id:1,question:"What is the capital of France?",optA:"New York",optB:"London",optC:"Paris",optD:"Dublin",answer:"c",userAnswer:"c",archived:!1},{id:2,question:"Who is CEO of Tesla?",optA:"Jeff Bezos",optB:"Elon Musk",optC:"Bill Gates",optD:"Tony Stark",answer:"b",userAnswer:"d",archived:!1},{id:3,question:"The iPhone was created by which company?",optA:"Apple",optB:"Intel",optC:"Amazon",optD:"Microsoft",answer:"a",userAnswer:"a",archived:!1},{id:4,question:"How many Harry Potter books are there?",optA:"1",optB:"4",optC:"6",optD:"7",answer:"d",userAnswer:"d",archived:!1}],Q=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary}}}));function z(){var e=Object(j.g)(),t=Q(),n=Object(a.useState)(0),r=Object(v.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(new Array(4).fill(!1)),o=Object(v.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(!1),b=Object(v.a)(d,2),O=b[0],h=b[1],p=Object(a.useState)(""),m=Object(v.a)(p,2),g=m[0],y=m[1],A=I("userScore",0),w=Object(v.a)(A,2),k=w[0],z=w[1],H=I("questionBank",Y),R=Object(v.a)(H,2),W=R[0],J=(R[1],I("userAnswers",[])),L=Object(v.a)(J,2),E=(L[0],L[1]),F=function(){h(!1),z(0),e.push("/")},G=function(e){var t,n=new Array(4).fill(!1);switch(n[e.target.value]=!0,u(n),parseInt(e.target.value)){case 0:t="a";break;case 1:t="b";break;case 2:t="c";break;case 3:t="d";break;default:t=""}y(t)};return Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsxs)(C.a,{variant:"h5",style:{textAlign:"center"},children:["There are ",W.length," Questions."]}),Object(f.jsxs)(S.a,{container:!0,spacing:3,children:[Object(f.jsx)(S.a,{item:!0,xs:12,children:Object(f.jsx)(q.a,{className:t.paper,children:Object(f.jsx)(C.a,{variant:"h6",style:{textAlign:"center"},children:W[c].question})})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsxs)(q.a,{className:t.paper,children:[Object(f.jsx)(B.a,{checked:l[0],onChange:G,value:0,inputProps:{"aria-label":"primary checkbox"}}),Object(f.jsx)(C.a,{variant:"subtitle1",style:{textAlign:"center"},children:W[c].optA})]})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsxs)(q.a,{className:t.paper,children:[Object(f.jsx)(B.a,{checked:l[1],onChange:G,value:1,inputProps:{"aria-label":"primary checkbox"}}),Object(f.jsx)(C.a,{variant:"subtitle1",style:{textAlign:"center"},children:W[c].optB})]})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsxs)(q.a,{className:t.paper,children:[Object(f.jsx)(B.a,{checked:l[2],onChange:G,value:2,inputProps:{"aria-label":"primary checkbox"}}),Object(f.jsx)(C.a,{variant:"subtitle1",style:{textAlign:"center"},children:W[c].optC})]})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsxs)(q.a,{className:t.paper,children:[Object(f.jsx)(B.a,{checked:l[3],onChange:G,value:3,inputProps:{"aria-label":"primary checkbox"}}),Object(f.jsx)(C.a,{variant:"subtitle1",style:{textAlign:"center"},children:W[c].optD})]})})]}),Object(f.jsx)(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{marginTop:20},children:Object(f.jsx)(x.a,{onClick:function(){W[c].answer===g&&z(k+1);var e={id:W[c].id,question:W[c].question,answer:W[c].answer,userAnswer:g};E((function(t){return[].concat(Object(N.a)(t),[e])})),c===W.length-1?h(!0):(i(c+1),u(new Array(4).fill(!1)))},size:"large",variant:"contained",color:"secondary",children:"Submit and Go Next"})}),Object(f.jsxs)(T.a,{onClose:F,"aria-labelledby":"customized-dialog-title",open:O,children:[Object(f.jsx)(P.a,{id:"customized-dialog-title",onClose:F,children:"Result"}),Object(f.jsx)(D.a,{dividers:!0,children:Object(f.jsxs)(C.a,{gutterBottom:!0,children:["You answered ",k," correct out of ",W.length]})})]})]})}var H=n(89),R=n.n(H),W=n(166),J=n(165),L=n(167),E=n(169),F=n(168),G=n(186),M=n(181);function U(e){return Object(f.jsx)(M.a,Object(s.a)({elevation:6,variant:"filled"},e))}var K=["Signin As User","Signin As Admin","Signout"];function V(){var e=Object(j.g)(),t=(Object(j.h)().state||{from:{pathname:"/"}}).from,n=w(),a=r.a.useState(!1),c=Object(v.a)(a,2),i=c[0],o=c[1],l=r.a.useState(("user"===n.user&&t.pathname,!0)),u=Object(v.a)(l,2),d=u[0],b=u[1],O=function(e,t){"clickaway"!==t&&b(!1)},p=r.a.useState(2),m=Object(v.a)(p,2),g=m[0],y=m[1],A=r.a.useRef(null),C=r.a.useState("admin"===n.user?2:1),k=Object(v.a)(C,2),N=k[0],I=k[1];r.a.useEffect((function(){"admin"===n.user?y(1):"user"===n.user?y(0):y(2)}),[n.user]);var B=function(e){A.current&&A.current.contains(e.target)||o(!1)},T="user"===n.user?"You must be an Admin":"You need to Signin";return Object(f.jsxs)(S.a,{container:!0,direction:"column",alignItems:"center",children:[Object(f.jsx)(G.a,{open:d,autoHideDuration:3e3,onClose:O,children:Object(f.jsxs)(U,{onClose:O,severity:"info",children:[T," to view the page at ",t.pathname]})}),Object(f.jsxs)(S.a,{item:!0,xs:12,children:[Object(f.jsxs)(h.a,{variant:"contained",color:"secondary",ref:A,"aria-label":"siginin button",children:[Object(f.jsx)(x.a,{onClick:function(){0===N?n.unsetAdmin((function(){e.replace(t)})):1===N?n.setAdmin((function(){e.replace(t)})):n.signout((function(){return e.push("/")}))},children:K[N]}),Object(f.jsx)(x.a,{color:"secondary",size:"large","aria-controls":i?"siginin-button-menu":void 0,"aria-expanded":i?"true":void 0,"aria-label":"select user role","aria-haspopup":"menu",onClick:function(){o((function(e){return!e}))},children:Object(f.jsx)(R.a,{})})]}),Object(f.jsx)(L.a,{open:i,anchorEl:A.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(f.jsx)(J.a,Object(s.a)(Object(s.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(f.jsx)(q.a,{children:Object(f.jsx)(W.a,{onClickAway:B,children:Object(f.jsx)(F.a,{id:"signin-button-menu",children:K.map((function(e,t){return Object(f.jsx)(E.a,{disabled:t===g,selected:t===N,onClick:function(e){return function(e,t){I(t),o(!1)}(0,t)},children:e},e)}))})})})}))}})]})]})}function X(){return Object(f.jsx)("div",{style:{alignItems:"center",marginTop:"60vh"},children:Object(f.jsx)(V,{})})}var Z=n(185),$=n(173),_=n(172),ee=n(187),te=n(180),ne=n(174),ae=n(91),re=n.n(ae),ce=n(92),ie=n.n(ce),se=n(93),oe=n.n(se),le=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary},formControl:{minWidth:220},extendedIcon:{marginRight:e.spacing(1)}}}));function je(){var e=le(),t=Object(a.useState)(""),n=Object(v.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(v.a)(i,2),o=s[0],l=s[1],j=I("questionBank",[]),u=Object(v.a)(j,2),d=(u[0],u[1]),b=I("questionNo",5),O=Object(v.a)(b,2),h=O[0],x=O[1],p=Object(a.useState)(""),m=Object(v.a)(p,2),g=m[0],y=m[1],A=Object(a.useState)(""),w=Object(v.a)(A,2),k=w[0],T=w[1],P=Object(a.useState)(""),D=Object(v.a)(P,2),Y=D[0],Q=D[1],z=Object(a.useState)(""),H=Object(v.a)(z,2),R=H[0],W=H[1],J=Object(a.useState)(""),L=Object(v.a)(J,2),F=L[0],M=L[1],U=Object(a.useState)(!1),K=Object(v.a)(U,2),V=K[0],X=K[1],ae=Object(a.useState)("All of Your Data has been Cleared to Initial"),ce=Object(v.a)(ae,2),se=ce[0],je=ce[1];return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(G.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:o,autoHideDuration:4500,onClose:function(){l(!1)},message:se}),Object(f.jsx)(C.a,{variant:"h5",style:{textAlign:"center"},children:"Questions Page (Admin only)"}),Object(f.jsxs)(S.a,{container:!0,spacing:3,children:[Object(f.jsx)(S.a,{item:!0,xs:12,children:Object(f.jsx)(q.a,{className:e.paper,children:Object(f.jsx)(Z.a,{id:"question",value:r,onChange:function(e){c(e.target.value)},style:{marginTop:35,marginBottom:35},placeholder:"Question",helperText:"Type Your Question Here",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsx)(q.a,{className:e.paper,children:Object(f.jsx)(Z.a,{id:"option-a",value:g,onChange:function(e){y(e.target.value)},placeholder:"Option A",helperText:"Type Your Option A Here",fullWidth:!0,variant:"outlined"})})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsx)(q.a,{className:e.paper,children:Object(f.jsx)(Z.a,{id:"option-b",value:k,onChange:function(e){T(e.target.value)},placeholder:"Option B",helperText:"Type Your Option B Here",fullWidth:!0,variant:"outlined"})})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsx)(q.a,{className:e.paper,children:Object(f.jsx)(Z.a,{id:"option-c",value:Y,onChange:function(e){Q(e.target.value)},placeholder:"Option C",helperText:"Type Your Option C Here",fullWidth:!0,variant:"outlined"})})}),Object(f.jsx)(S.a,{item:!0,xs:6,children:Object(f.jsx)(q.a,{className:e.paper,children:Object(f.jsx)(Z.a,{id:"option-d",value:R,onChange:function(e){W(e.target.value)},placeholder:"Option D",helperText:"Type Your Option D Here",fullWidth:!0,variant:"outlined"})})}),Object(f.jsxs)(S.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",style:{marginTop:20},children:[Object(f.jsx)($.a,{control:Object(f.jsx)(B.a,{checked:V,onChange:function(e){X(e.target.checked)},name:"archived",color:"primary"}),label:"Archived Question"}),Object(f.jsxs)(_.a,{required:!0,variant:"outlined",className:e.formControl,error:!0,children:[Object(f.jsx)(ee.a,{id:"answer",children:"Answer"}),Object(f.jsxs)(te.a,{value:F,onChange:function(e){M(e.target.value)},label:"Answer",children:[Object(f.jsx)(E.a,{value:"a",children:"Option A"}),Object(f.jsx)(E.a,{value:"b",children:"Option B"}),Object(f.jsx)(E.a,{value:"c",children:"Option C"}),Object(f.jsx)(E.a,{value:"d",children:"Option D"})]})]}),Object(f.jsx)(ne.a,{color:"primary","aria-label":"save",onClick:function(){x(h+1);var e={id:h,question:r,optA:g,optB:k,optC:Y,optD:R,answer:F,userAnswer:"DidNotParticipated",archived:V};d((function(t){return[].concat(Object(N.a)(t),[e])})),je("Data Saved"),l(!0)},children:Object(f.jsx)(re.a,{})}),Object(f.jsx)(ne.a,{color:"secondary","aria-label":"clear-all",onClick:function(){localStorage.removeItem("questionBank"),localStorage.removeItem("userAnswers"),localStorage.removeItem("archivedList"),localStorage.removeItem("userScore"),x(7),l(!0)},children:Object(f.jsx)(ie.a,{})}),Object(f.jsxs)(ne.a,{variant:"extended",children:[Object(f.jsx)(oe.a,{className:e.extendedIcon}),"Question-Bank"]})]})]})]})}var ue=n(124),de=n(125),be=n(175),Oe=n(162),he=n(94),xe=n.n(he),pe=Object(m.a)((function(e){return{root:{flexGrow:1},list:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2),textAlign:"center"}}}));function me(){var e=pe(),t=Object(a.useState)(!1),n=Object(v.a)(t,2),r=n[0],c=(n[1],I("questionBank",Y)),i=Object(v.a)(c,2),s=i[0],o=i[1],l=I("userAnswers"),j=Object(v.a)(l,2),u=j[0],d=(j[1],I("archivedList",[])),b=Object(v.a)(d,2),O=b[0],h=b[1];return Object(f.jsx)("div",{className:e.root,children:Object(f.jsxs)(S.a,{container:!0,spacing:3,children:[Object(f.jsxs)(S.a,{item:!0,xs:12,md:4,children:[Object(f.jsx)(C.a,{variant:"h6",className:e.title,children:"Active Questions"}),Object(f.jsx)("div",{className:e.list,children:Object(f.jsx)(ue.a,{dense:r,children:Object(f.jsx)(ve,{list:s,onRemove:function(e){var t=s.filter((function(t){return t.id!==e}));o(t),h((function(t){return[].concat(Object(N.a)(t),[s.find((function(t){return t.id===e}))])}))}})})})]}),void 0===O?null:Object(f.jsxs)(S.a,{item:!0,xs:12,md:4,children:[Object(f.jsx)(C.a,{variant:"h6",className:e.title,children:"Archived Questions"}),Object(f.jsx)("div",{className:e.list,children:Object(f.jsx)(ue.a,{dense:r,children:Object(f.jsx)(ve,{list:O,onRemove:function(e){var t=O.filter((function(t){return t.id!==e}));h(t),o((function(t){return[].concat(Object(N.a)(t),[O.find((function(t){return t.id===e}))])}))}})})})]}),void 0===u?null:Object(f.jsxs)(S.a,{item:!0,xs:12,md:4,children:[Object(f.jsx)(C.a,{variant:"h6",className:e.title,children:"User Report"}),Object(f.jsx)("div",{className:e.list,children:Object(f.jsx)(ue.a,{dense:r,children:Object(f.jsx)(ge,{list:u})})})]})]})})}var ve=function(e){var t=e.list,n=e.onRemove;return t.map((function(e){return Object(f.jsx)(fe,{item:e,onRemove:n},e.id)}))},fe=function(e){var t=e.item,n=e.onRemove;return Object(f.jsxs)(de.a,{children:[Object(f.jsx)(be.a,{primary:t.question.slice(0,20)+"..."}),Object(f.jsx)(Oe.a,{edge:"end","aria-label":"delete",onClick:function(){return n(t.id)},children:Object(f.jsx)(xe.a,{})})]})},ge=function(e){return e.list.map((function(e){return Object(f.jsx)(ye,{item:e},e.id)}))},ye=function(e){var t=e.item;return Object(f.jsxs)(de.a,{children:[Object(f.jsx)(be.a,{primary:"Question '"+t.question.slice(0,10)+"...,' User Answered =>"}),Object(f.jsx)(be.a,{primary:t.userAnswer,style:{textAlign:"right"}})]})},Ae=Object(u.a)({palette:{type:"dark"}}),we=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1),marginTop:"10vh"}}}}));function Se(){var e=we();return Object(f.jsx)(p.a,{theme:Ae,children:Object(f.jsx)(A,{children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(b.a,{}),Object(f.jsx)(O.a,{children:Object(f.jsx)(k,{})}),Object(f.jsx)("div",{className:e.root,children:Object(f.jsxs)(h.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(f.jsx)(l.b,{to:"/answers",children:Object(f.jsx)(x.a,{children:"Answer Page"})}),Object(f.jsx)(l.b,{to:"/questions",children:Object(f.jsx)(x.a,{children:"Question Page"})}),Object(f.jsx)(l.b,{to:"/manage",children:Object(f.jsx)(x.a,{children:"Manage Page"})})]})}),Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:"/signin",children:Object(f.jsx)(X,{})}),Object(f.jsx)(Ce,{path:"/answers",children:Object(f.jsx)(z,{})}),Object(f.jsx)(ke,{path:"/questions",children:Object(f.jsx)(je,{})}),Object(f.jsx)(ke,{path:"/manage",children:Object(f.jsx)(me,{})})]})]})})})})}function Ce(e){var t=e.children,n=Object(o.a)(e,["children"]),a=w();return Object(f.jsx)(j.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){var n=e.location;return null!==a.user?t:Object(f.jsx)(j.a,{to:{pathname:"/signin",state:{from:n}}})}}))}function ke(e){var t=e.children,n=Object(o.a)(e,["children"]),a=w();return Object(f.jsx)(j.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){var n=e.location;return"admin"===a.user?t:Object(f.jsx)(j.a,{to:{pathname:"/signin",state:{from:n}}})}}))}var Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Se,{})}),document.getElementById("root")),Ne()}},[[120,1,2]]]);
//# sourceMappingURL=main.360caa80.chunk.js.map