(this["webpackJsonptuvshintur.github.io"]=this["webpackJsonptuvshintur.github.io"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__1Uoeg",Open:"SideDrawer_Open__2CKoh",Close:"SideDrawer_Close__2lcFn",Logo:"SideDrawer_Logo__1ybt_"}},,,function(e,a,t){e.exports={Toolbar:"Toolbar_Toolbar__2G32J",DesktopOnly:"Toolbar_DesktopOnly__3r3Mw"}},function(e,a,t){e.exports={Contact:"Contact_Contact__pXxrc",List:"Contact_List__3DyE8",ListItem:"Contact_ListItem__3Saqr"}},function(e,a,t){e.exports={Info:"Info_Info__Ue6fc",Image:"Info_Image__2nKxU",Description:"Info_Description__1IYWy"}},function(e,a,t){e.exports={Layout:"Layout_Layout__1bfW-",Left:"Layout_Left__6lvE3",Right:"Layout_Right__ZTEF0"}},,,function(e,a,t){e.exports={NavigationItem:"NavigationItem_NavigationItem__2ijk_",active:"NavigationItem_active__3nKrr"}},,,,,,,,,function(e,a,t){e.exports={Navigation:"Navigation_Navigation__2e2cC"}},function(e,a,t){e.exports={SideDrawerToggle:"SideDrawerToggle_SideDrawerToggle__3dySH"}},function(e,a,t){e.exports={BackDrop:"BackDrop_BackDrop__JAt0l"}},function(e,a,t){e.exports={About:"About_About__1Vebs"}},function(e,a,t){e.exports={Thought:"Thought_Thought__37PNs"}},,,,function(e,a,t){e.exports=t(50)},,,,,,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=t(9),s=t(34),o=t(26),m=t(7),u=(t(46),t(2)),d=t(27),E=t(28),_=t(36),p=t(35),h=t(20),f=t.n(h),g=function(e){return r.a.createElement("li",{className:f.a.NavigationItem},r.a.createElement(i.b,{to:e.link,exact:e.exact,activeClassName:f.a.active},e.children))},N=t(29),v=t.n(N),k=function(){return r.a.createElement("ul",{className:v.a.Navigation},r.a.createElement(g,{exact:!0,link:"/"},"About"),r.a.createElement(g,{link:"/thought"},"Thoughts"))},b=t(30),T=t.n(b),L=function(e){var a=e.clicked;return r.a.createElement("div",{className:T.a.SideDrawerToggle,onClick:a},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},w=t(14),D=t.n(w),I=function(e){var a=e.sideDrawerClicked;return r.a.createElement("header",{className:D.a.Toolbar},r.a.createElement(L,{clicked:a}),r.a.createElement("div",{className:D.a.Logo}),r.a.createElement("nav",{className:D.a.DesktopOnly},r.a.createElement(k,null)))},y=t(31),S=t.n(y),x=function(e){var a=e.show,t=e.clicked;return a?r.a.createElement("div",{className:S.a.BackDrop,onClick:t}):null},C=t(11),O=t.n(C),j=function(e){var a=e.open,t=e.close,n=[O.a.SideDrawer,O.a.Close];return a&&(n=[O.a.SideDrawer,O.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{show:a,clicked:t}),r.a.createElement("div",{className:n.join(" "),onClick:t},r.a.createElement("nav",null,r.a.createElement(k,null))))},U=(t(48),t(15)),B=t.n(U),A=function(){var e=[{link:"tuvshinturbatzorig@gmail.com",linkType:"email",newTab:!0,iconType:"fa fa-envelope"},{link:"https://www.linkedin.com/in/tuvshintur-batzorig/",linkType:"",newTab:!0,iconType:"fa fa-linkedin"},{link:"https://github.com/Tuvshintur",linkType:"",newTab:!0,iconType:"fa fa-github"},{link:"https://medium.com/@tuvshinturbatzorig",linkType:"",newTab:!0,iconType:"fa fa-medium"}].map((function(e,a){var t=e.link;return"email"===e.linkType&&(t="mailto:"+t),r.a.createElement("li",{key:a,className:B.a.ListItem},r.a.createElement("a",{href:t,target:e.newTab?"_blank":null},r.a.createElement("i",{className:e.iconType})))}));return r.a.createElement("div",{className:B.a.Contact},r.a.createElement("div",{className:B.a.List},e))},H=t(16),J=t.n(H),W=function(){return r.a.createElement("div",{className:J.a.Info},r.a.createElement("img",{src:"/assets/0.jpg",alt:"me",className:J.a.Image}),r.a.createElement("div",{className:J.a.Description},r.a.createElement("h1",null,"Hi, I am Turuu!"),r.a.createElement("h4",null,"Full Stack Developer")),r.a.createElement(A,null))},F=t(17),K=t.n(F),M=function(e){Object(_.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={sideDrawerOpen:!1},e.sideDrawerCloseHandler=function(){e.setState({sideDrawerOpen:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{open:this.state.sideDrawerOpen,close:this.sideDrawerCloseHandler}),r.a.createElement(I,{sideDrawerClicked:this.sideDrawerToggleHandler}),r.a.createElement("main",{className:K.a.Layout},r.a.createElement("div",{className:K.a.Left},r.a.createElement(W,null)),r.a.createElement("div",{className:K.a.Right},this.props.children)))}}]),t}(n.Component),R=function(){return r.a.createElement("section",{className:"Section animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Who?"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",target:"_blank",href:"https://github.com/Tuvshintur",rel:"noreferrer noopener"},"Web Developer")),r.a.createElement("li",{className:"ListItem"},"Table Tennis Player")))},z=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Current Dev Stack"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},"JavaScript (ES2019)"),r.a.createElement("li",{className:"ListItem"},"React"),r.a.createElement("li",{className:"ListItem"},"Redux"),r.a.createElement("li",{className:"ListItem"},"create-react-app"),r.a.createElement("li",{className:"ListItem"},"Node"),r.a.createElement("li",{className:"ListItem"},"Express.js"),r.a.createElement("li",{className:"ListItem"},"MongoDB")))},P=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Current projects"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://github.com/Tuvshintur/Kanban",target:"_blank",rel:"noreferrer noopener"},"Kanban board")),r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://github.com/Tuvshintur/TimeTracker",target:"_blank",rel:"noreferrer noopener"},"TimeTracker"))))},Q=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Work Experiences"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://en.golomtbank.com/",target:"_blank",rel:"noreferrer noopener"},"Golomt Bank Mongolia"),r.a.createElement("span",{className:"Text-right"},"03/2018 - 08/2019")),r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://web.able.mn/",target:"_blank",rel:"noreferrer noopener"},"AbleSoft LLC"," "),r.a.createElement("span",{className:"Text-right"},"01/2016 - 03/2018"))))},G=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Technologies I have used"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},"JavaScript (ES2019), Java, MySQL, OracleDB, postgreSQL, React.js, Node.js, Express.js, Jest, Enzyme, HTML5, CSS3, jQuery, PHP, Webpack, Bootstrap, UIKit, Chart.js, amcharts.js, Angular, Firebase, Mongoose, Knex.js etc.")))},q=(t(49),function(e){var a=e.children;return r.a.createElement("div",null,a)}),V=t(32),X=t.n(V),Y=function(){return r.a.createElement("div",{className:X.a.About},r.a.createElement(q,null,r.a.createElement(R,null),r.a.createElement(z,null),r.a.createElement(P,null),r.a.createElement(Q,null),r.a.createElement(G,null)))},Z=t(33),$=t.n(Z),ee=function(){return r.a.createElement("div",{className:$.a.Thought})};var ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/Thought",component:ee}),r.a.createElement(u.a,{path:"/",exact:!0,component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=m.d,ne=Object(m.c)({}),re=Object(m.e)(ne,te(Object(m.a)(o.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:re},r.a.createElement(i.a,null,r.a.createElement(ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.48847744.chunk.js.map