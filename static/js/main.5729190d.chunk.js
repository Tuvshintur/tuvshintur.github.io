(this["webpackJsonptuvshintur.github.io"]=this["webpackJsonptuvshintur.github.io"]||[]).push([[0],{131:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__2e2cC"}},132:function(e,t,a){e.exports={SideDrawerToggle:"SideDrawerToggle_SideDrawerToggle__3dySH"}},133:function(e,t,a){e.exports={BackDrop:"BackDrop_BackDrop__JAt0l"}},134:function(e,t,a){e.exports={About:"About_About__1Vebs"}},135:function(e,t,a){e.exports={Category:"Category_Category__2yJj7"}},136:function(e,t,a){e.exports={List:"List_List__1ujp2"}},137:function(e,t,a){e.exports={Modal:"Modal_Modal__2I0m-"}},141:function(e,t,a){e.exports=a(267)},166:function(e,t,a){},169:function(e,t,a){},19:function(e,t,a){e.exports={ListItem:"ListItem_ListItem__1kSDp",Misc:"ListItem_Misc__2Mt7l",Date:"ListItem_Date__31NTT",Tag:"ListItem_Tag__1rZIV",Details:"ListItem_Details__1VKP_",Title:"ListItem_Title__8sWPT",Body:"ListItem_Body__3wg4e",Fade:"ListItem_Fade__yDoqy"}},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),o=a.n(i),l=a(34),s=a(23),c=a(130),u=a(26),m=a(36),d=a.n(m),p=function(e,t){return{type:"AUTH_SUCCESS",token:e,message:t}},h=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},g=function(e){return function(t){setTimeout((function(){t(h())}),1e3*e)}},f=function(e){return{type:"FETCH_POSTS_START",categories:e,posts:[]}},_=function(e){return{type:"FETCH_POSTS_SUCCESS",posts:e}},v=function(e){return{type:"FETCH_POSTS_FAILED",error:e}},E=a(74),T=function(e,t){return Object(E.a)(Object(E.a)({},e),t)},S=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a},y={posts:[],categories:[{title:"Posts",active:!0,icon:"fa fa-newspaper-o"},{title:"Achievements",active:!1,icon:"fa fa-trophy"}],error:!1,loading:!1,modalLoading:!1,message:null,post:{}},C=function(e,t){return T(e,{loading:!0,categories:t.categories,message:null})},b=function(e,t){return T(e,{posts:t.posts,loading:!1,message:null})},k=function(e,t){return T(e,{loading:!1,message:t.message})},N=function(e,t){return T(e,{modalLoading:!0,message:null})},L=function(e,t){return T(e,{modalLoading:!1,message:t.message})},D=function(e,t){return T(e,{modalLoading:!1,message:t.message})},I=function(e,t){return T(e,{modalLoading:!0,message:null})},w=function(e,t){return T(e,{modalLoading:!1,post:t.post,message:null})},A=function(e,t){return T(e,{modalLoading:!1,message:t.message})},O={token:null,message:null,loading:!1,authRedirectPath:"/"},P=function(e,t){return T(e,{loading:!0})},j=function(e,t){return T(e,{token:t.token,message:t.message})},H=function(e,t){return T(e,{loading:!1})},x=function(e,t){return T(e,{authRedirectPath:t.path})},F=Object(u.c)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_START":return C(e,t);case"FETCH_POSTS_SUCCESS":return b(e,t);case"FETCH_POSTS_FAILED":return k(e,t);case"ADD_POST_START":return N(e);case"ADD_POST_SUCCESS":return L(e,t);case"ADD_POST_FAILED":return D(e,t);case"FETCH_POST_START":return I(e);case"FETCH_POST_SUCCESS":return w(e,t);case"FETCH_POST_FAILED":return A(e,t);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return P(e);case"AUTH_SUCCESS":return j(e,t);case"AUTH_FAILED":return H(e);case"SET_AUTH_REDIRECT_PATH":return x(e,t);default:return e}}}),R=(a(166),a(5)),U=a(21),B=a(22),M=a(25),V=a(24),W=a(75),z=a.n(W),J=function(e){return r.a.createElement("li",{className:z.a.NavigationItem},r.a.createElement(l.b,{to:e.link,exact:e.exact,activeClassName:z.a.active},e.children))},q=a(131),K=a.n(q),Q=function(){return r.a.createElement("ul",{className:K.a.Navigation},r.a.createElement(J,{exact:!0,link:"/"},"About"),r.a.createElement(J,{link:"/thought"},"Thoughts"),r.a.createElement(J,{link:"/auth"},"Login"))},G=a(132),X=a.n(G),Y=function(e){var t=e.clicked;return r.a.createElement("div",{className:X.a.SideDrawerToggle,onClick:t},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},Z=a(58),$=a.n(Z),ee=function(e){var t=e.sideDrawerClicked;return r.a.createElement("header",{className:$.a.Toolbar},r.a.createElement(Y,{clicked:t}),r.a.createElement("div",{className:$.a.Logo}),r.a.createElement("nav",{className:$.a.DesktopOnly},r.a.createElement(Q,null)))},te=a(133),ae=a.n(te),ne=function(e){var t=e.show,a=e.clicked;return t?r.a.createElement("div",{className:ae.a.BackDrop,onClick:a}):null},re=a(44),ie=a.n(re),oe=function(e){var t=e.open,a=e.close,n=[ie.a.SideDrawer,ie.a.Close];return t&&(n=[ie.a.SideDrawer,ie.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{show:t,clicked:a}),r.a.createElement("div",{className:n.join(" "),onClick:a},r.a.createElement("nav",null,r.a.createElement(Q,null))))},le=(a(168),a(59)),se=a.n(le),ce=function(){var e=[{link:"tuvshinturbatzorig@gmail.com",linkType:"email",newTab:!0,iconType:"fa fa-envelope"},{link:"https://www.linkedin.com/in/tuvshintur-batzorig/",linkType:"",newTab:!0,iconType:"fa fa-linkedin"},{link:"https://github.com/Tuvshintur",linkType:"",newTab:!0,iconType:"fa fa-github"},{link:"https://medium.com/@tuvshinturbatzorig",linkType:"",newTab:!0,iconType:"fa fa-medium"},{link:"https://drive.google.com/file/d/1W5WCJOKPNr4LIZXfXB2i6H49BC6lJPQs/view?usp=sharing",linkType:"",newTab:!0,iconType:"fa fa-download"}].map((function(e,t){var a=e.link;return"email"===e.linkType&&(a="mailto:"+a),r.a.createElement("li",{key:t,className:se.a.ListItem},r.a.createElement("a",{href:a,target:e.newTab?"_blank":null},r.a.createElement("i",{className:e.iconType})))}));return r.a.createElement("div",{className:se.a.Contact},r.a.createElement("ul",{className:se.a.List},e))},ue=a(60),me=a.n(ue),de=function(){return r.a.createElement("div",{className:me.a.Info},r.a.createElement("img",{src:"/assets/0.jpg",alt:"me",className:me.a.Image}),r.a.createElement("div",{className:me.a.Description},r.a.createElement("h1",null,"Hi, I am Turuu!"),r.a.createElement("h4",null,"Full Stack Developer")),r.a.createElement(ce,null))},pe=a(61),he=a.n(pe),ge=function(e){Object(M.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawerOpen:!1},e.sideDrawerCloseHandler=function(){e.setState({sideDrawerOpen:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e}return Object(B.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{open:this.state.sideDrawerOpen,close:this.sideDrawerCloseHandler}),r.a.createElement(ee,{sideDrawerClicked:this.sideDrawerToggleHandler}),r.a.createElement("main",{className:he.a.Layout},r.a.createElement("div",{className:he.a.Left},r.a.createElement(de,null)),r.a.createElement("div",{className:he.a.Right},this.props.children)))}}]),a}(n.Component),fe=function(){return r.a.createElement("section",{className:"Section animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Who?"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",target:"_blank",href:"https://github.com/Tuvshintur",rel:"noreferrer noopener"},"Web Developer")),r.a.createElement("li",{className:"ListItem"},"Table Tennis Player")))},_e=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Current Dev Stack"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},"JavaScript (ES2019)"),r.a.createElement("li",{className:"ListItem"},"React"),r.a.createElement("li",{className:"ListItem"},"Redux"),r.a.createElement("li",{className:"ListItem"},"create-react-app"),r.a.createElement("li",{className:"ListItem"},"Node"),r.a.createElement("li",{className:"ListItem"},"Express.js"),r.a.createElement("li",{className:"ListItem"},"Graphql"),r.a.createElement("li",{className:"ListItem"},"MongoDB")))},ve=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Current projects"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://github.com/Tuvshintur/social_clones",target:"_blank",rel:"noreferrer noopener"},"Clone of popular social sites. /Only front-end/")),r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://tuvshintur.github.io/React_Roadmap/",target:"_blank",rel:"noreferrer noopener"},"React RoadMap"))))},Ee=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Work Experiences"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://en.golomtbank.com/",target:"_blank",rel:"noreferrer noopener"},"Golomt Bank Mongolia"),r.a.createElement("span",{className:"Text-right"},"03/2018 - 08/2019")),r.a.createElement("li",{className:"ListItem"},r.a.createElement("a",{className:"UnderLinedLink",href:"https://web.able.mn/",target:"_blank",rel:"noreferrer noopener"},"AbleSoft LLC"),r.a.createElement("span",{className:"Text-right"},"01/2016 - 03/2018"))))},Te=function(){return r.a.createElement("section",{className:"Section  animate__animated animate__fadeInDown"},r.a.createElement("h3",{className:"Title"},"Technologies I have used"),r.a.createElement("ul",{className:"UnOrderedList"},r.a.createElement("li",{className:"ListItem"},"JavaScript (ES2019), Java, MySQL, OracleDB, postgreSQL, React.js, Node.js, Express.js, Jest, Enzyme, HTML5, CSS3, jQuery, PHP, Webpack, Bootstrap, UIKit, Chart.js, amcharts.js, Angular, Firebase, Mongoose, Knex.js etc.")))},Se=(a(169),function(e){var t=e.children;return r.a.createElement("div",null,t)}),ye=a(134),Ce=a.n(ye),be=function(){return r.a.createElement("div",{className:Ce.a.About},r.a.createElement(Se,null,r.a.createElement(fe,null),r.a.createElement(_e,null),r.a.createElement(ve,null),r.a.createElement(Ee,null),r.a.createElement(Te,null)))},ke=a(35),Ne=a(140),Le=a(62),De=a.n(Le),Ie=function(e){var t=e.item,a=e.clicked,n=t.active?[De.a.CategoryItem,De.a.Active]:[De.a.CategoryItem];return r.a.createElement("div",{className:n.join(" "),onClick:a},r.a.createElement("i",{className:t.icon}),r.a.createElement("p",null,t.title))},we=a(135),Ae=a.n(we),Oe=function(e){var t=e.categories,a=e.clicked,n=t.map((function(e,t){return r.a.createElement(Ie,{key:t,item:e,clicked:function(){return a(e.title)}})}));return r.a.createElement("div",{className:Ae.a.Category},n)},Pe=a(19),je=a.n(Pe),He=a(56),xe=a.n(He),Fe=function(e){var t=e.item,a=e.clicked,n=t.tags.map((function(e,t){return r.a.createElement("div",{className:je.a.Tag,key:t},e)}));return r.a.createElement("div",{className:je.a.ListItem,onClick:function(){return a(t._id)}},r.a.createElement("div",{className:je.a.Misc},r.a.createElement("div",{className:je.a.Date},r.a.createElement(xe.a,{date:t.createdDate})),n),r.a.createElement("div",{className:je.a.Details},r.a.createElement("h2",{className:je.a.Title},t.title),r.a.createElement("div",{className:je.a.Body,dangerouslySetInnerHTML:{__html:t.body}}),r.a.createElement("div",{className:je.a.Fade})))},Re=a(136),Ue=a.n(Re),Be=function(e){var t=e.listItems,a=e.clicked,n=t.map((function(e,t){return r.a.createElement(Fe,{key:t,item:e,clicked:a})}));return r.a.createElement("div",{className:Ue.a.List},n)},Me=a(78),Ve=a.n(Me),We=function(e){var t=e.isWhite,a=[Ve.a.Loader];return t&&a.push(Ve.a.onWhite),r.a.createElement("div",{className:a.join(" ")},"Loading...")},ze=a(137),Je=a.n(ze),qe=function(e){Object(M.a)(a,e);var t=Object(V.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(B.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.modalClosed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{show:t,clicked:a}),r.a.createElement("div",{className:Je.a.Modal,style:{transform:t?"translateY(0)":"translateY(-100vh)",opacity:t?"1":"0"}},this.props.children))}}]),a}(n.Component),Ke=a(79),Qe=a.n(Ke),Ge=function(e){var t=e.clicked,a=e.type,n=e.disabled,i=e.children,o=[Qe.a.Button];return"Success"===a&&o.push(Qe.a.Success),r.a.createElement("button",{className:o.join(" "),onClick:t,disabled:n},i)},Xe=a(37),Ye=a.n(Xe),Ze=function(e){var t=e.label,a=e.elementType,n=e.touched,i=e.elementConfig,o=e.value,l=e.invalid,s=e.shouldValidate,c=e.errormessage,u=e.changed,m=null,d=[Ye.a.InputElement];switch(l&&s&&n&&d.push(Ye.a.Invalid),a){case"input":m=r.a.createElement("input",Object.assign({className:d.join(" ")},i,{value:o,onChange:u}));break;case"textarea":m=r.a.createElement("textarea",Object.assign({className:d.join(" ")},i,{value:o,onChange:u}));break;case"select":m=r.a.createElement("select",{className:d.join(" "),value:o,onChange:u,multiple:i.multiple},i.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:m=r.a.createElement("input",Object.assign({className:d.join(" ")},i,{value:o,onChange:u}))}var p=null;return l&&n&&(p=r.a.createElement("p",{className:Ye.a.ValidationError},c)),r.a.createElement("div",{className:Ye.a.Input},r.a.createElement("label",{className:Ye.a.Label},t),m,p)},$e=a(27),et=a.n($e),tt=function(e){var t=e.item,a=0===Object.keys(t).length&&t.constructor===Object,n=null;if(!a){var i=t.tags.map((function(e,t){return r.a.createElement("div",{className:et.a.Tag,key:t},e)}));n=a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:et.a.Misc},r.a.createElement("div",{className:et.a.Date},r.a.createElement(xe.a,{date:t.createdDate})),i),r.a.createElement("div",{className:et.a.Details},r.a.createElement("h2",{className:et.a.Title},t.title),r.a.createElement("div",{className:et.a.Body,dangerouslySetInnerHTML:{__html:t.body}})))}return r.a.createElement("div",{className:et.a.Preview},n)},at=a(80),nt=a.n(at),rt=a(138),it=a(57),ot=(a(266),a(139)),lt=a.n(ot),st=function(e){Object(M.a)(a,e);var t=Object(V.a)(a);function a(e){var n;return Object(U.a)(this,a),(n=t.call(this,e)).resetForm=function(){n.setState(n.baseState)},n.onClickCategoryHandler=function(e){var t=n.props.categories.map((function(t){var a=t.title===e;return T(t,{active:a})}));n.props.onFetchPosts(t,e)},n.onClickListHandler=function(e){n.onShowHandler(),n.props.onFetchPost(e)},n.onShowHandler=function(){n.setState({showDetails:!0})},n.onCancelShowHandler=function(){n.setState({showDetails:!1})},n.onAddHandler=function(e){e.preventDefault(),n.setState(T(n.baseState,{adding:!0}))},n.onCancelAddHandler=function(){n.setState({adding:!1})},n.onEditorStateChange=function(e){n.setState({editorState:e})},n.multipleSelectHandler=function(e,t){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(Ne.a)(e),[t])},n.inputChangedHandler=function(e,t){var a=n.state.form,r=T(a[t],{value:a[t].elementConfig.multiple?n.multipleSelectHandler(a[t].value,e.target.value):e.target.value,valid:S(e.target.value,a[t].validation),touched:!0}),i=T(a,Object(ke.a)({},t,r)),o=!0;for(var l in i)o=i[l].valid&&o;n.setState({form:i,formIsValid:o})},n.postAddHandler=function(e){e.preventDefault();var t={},a=n.state,r=a.form,i=a.editorState;for(var o in r)t[o]=r[o].value;t=T(t,{body:lt()(Object(it.convertToRaw)(i.getCurrentContent()))}),n.props.onAddPost(t,n.props.token),n.onCancelAddHandler()},n.state={editorState:it.EditorState.createEmpty(),form:{title:{elementType:"input",elementConfig:{type:"text",placeholder:"Title"},errormessage:"Please Enter Title",value:"",validation:{required:!0},valid:!1,touched:!1},category:{elementType:"select",elementConfig:{options:[{value:"Posts",displayValue:"Posts"},{value:"Achievements",displayValue:"Achievements"}]},errormessage:"Please Enter Valid category",value:"Posts",validation:{},valid:!0},tags:{elementType:"select",elementConfig:{options:[{value:"nodejs",displayValue:"nodejs"},{value:"react",displayValue:"react"},{value:"js",displayValue:"js"}],multiple:!0},errormessage:"Please Enter Valid tags",value:[],validation:{},valid:!0}},formIsvalid:!1,adding:!1,showDetails:!1},n.baseState=n.state,n}return Object(B.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchPosts(this.props.categories)}},{key:"render",value:function(){var e=this,t=this.state,a=t.adding,n=t.showDetails,i=t.editorState,o=t.form,l=t.formIsValid,s=this.props.loading?r.a.createElement(We,null):r.a.createElement(Be,{listItems:this.props.list,clicked:this.onClickListHandler}),c=this.props.modalLoading?r.a.createElement(We,{isWhite:!0}):r.a.createElement(tt,{item:this.props.post}),u=[];for(var m in o)u.push({id:m,config:o[m]});var d=r.a.createElement("form",{onSubmit:this.postAddHandler},u.map((function(t){return r.a.createElement(Ze,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,errormessage:t.config.errormessage,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),r.a.createElement(rt.Editor,{editorState:i,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:this.onEditorStateChange}),r.a.createElement(Ge,{type:"Success",disabled:!l},"Add"));return r.a.createElement("div",{className:nt.a.Thought},r.a.createElement("div",{className:nt.a.Black},r.a.createElement(qe,{show:a,modalClosed:this.onCancelAddHandler},d),r.a.createElement(qe,{show:n,modalClosed:this.onCancelShowHandler},c)),this.props.isAuth?r.a.createElement(Ge,{clicked:this.onAddHandler},"Add"):null,r.a.createElement(Oe,{categories:this.props.categories,clicked:this.onClickCategoryHandler}),s)}}]),a}(n.Component),ct=Object(s.b)((function(e){return{list:e.post.posts,loading:e.post.loading,error:e.post.error,categories:e.post.categories,isAuth:null!==e.auth.token,token:e.auth.token,post:e.post.post,modalLoading:e.post.modalLoading}}),(function(e){return{onFetchPosts:function(t,a){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Posts";return function(a){var n="".concat("https://tuvshintur-app.herokuapp.com","/posts?category=").concat(t);a(f(e)),d.a.get(n).then((function(e){a(_(e.data))})).catch((function(e){a(v(e))}))}}(t,a))},onFetchPost:function(t){return e(function(e){return function(t){var a="".concat("https://tuvshintur-app.herokuapp.com","/posts/").concat(e);t({type:"FETCH_POST_START",post:{}}),d.a.get(a).then((function(e){t({type:"FETCH_POST_SUCCESS",post:e.data})})).catch((function(e){t(function(e){return{type:"FETCH_POST_FAILED",error:e}}(e))}))}}(t))},onAddPost:function(t,a){return e(function(e,t){return function(a){var n="".concat("https://tuvshintur-app.herokuapp.com","/posts"),r={headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}};a({type:"ADD_POST_START"}),d.a.post(n,e,r).then((function(e){var t=e.data.message;a(function(e){return{type:"ADD_POST_SUCCESS",message:e}}(t))})).catch((function(e){e.response&&a(function(e){return{type:"ADD_POST_FAILED",error:e}}(e))}))}}(t,a))}}}))(st),ut=a(81),mt=a.n(ut),dt=function(e){Object(M.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={form:{email:{label:"E-mail",elementType:"input",elementConfig:{type:"email",placeholder:"Email"},errormessage:"Please Enter Valid email",value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{label:"Password",elementType:"input",elementConfig:{type:"password",placeholder:"Password"},errormessage:"Please Enter Valid password",value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}},e.inputChangedHandler=function(t,a){var n=e.state.form,r=T(n,Object(ke.a)({},a,T(n[a],{value:t.target.value,valid:S(t.target.value,n[a].validation),touched:!0})));e.setState({form:r})},e.onSubmit=function(t){t.preventDefault();var a=e.state.form.email.value,n=e.state.form.password.value;e.props.onLogin(a,n)},e}return Object(B.a)(a,[{key:"componentDidUpdate",value:function(){"/"!==this.props.authRedirectPath&&this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=this.state.form,a=[];for(var n in t)a.push({id:n,config:t[n]});var i=a.map((function(t){return r.a.createElement(Ze,{key:t.id,label:t.config.label,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,errormessage:t.config.errormessage,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}));this.props.loading&&(i=r.a.createElement(We,null));var o=null;this.props.error&&(o=r.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuth&&(l=r.a.createElement(R.a,{to:this.props.authRedirectPath})),r.a.createElement("div",{className:mt.a.Auth},l,o,r.a.createElement("form",{onSubmit:this.onSubmit},i,r.a.createElement("div",{className:mt.a.Center},r.a.createElement(Ge,{type:"Submit"},"Login"))))}}]),a}(n.Component),pt=Object(s.b)((function(e){return{message:e.auth.message,isAuth:null!==e.auth.token,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onLogin:function(t,a){return e(function(e,t){return function(a){var n="".concat("https://tuvshintur-app.herokuapp.com","/login"),r={email:e,password:t};a({type:"AUTH_START"}),d.a.post(n,r).then((function(e){var t=e.data,n=t.token,r=t.message,i=new Date((new Date).getTime()+36e5);localStorage.setItem("token",n),localStorage.setItem("expirationDate",i),a(p(n,r)),a(g(3600))})).catch((function(e){a(function(e){return{type:"AUTH_FAILED",error:e}}(e))}))}}(t,a))},onSetAuthRedirectPath:function(){return e({type:"SET_AUTH_REDIRECT_PATH",path:"/"})}}}))(dt);var ht=Object(s.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));a>new Date?(e(p(t,null)),e(g((a.getTime()-(new Date).getTime())/1e3))):e(h())}else e(h())}))}}}))((function(e){return Object(n.useEffect)((function(){e.onTryAutoSignin()})),r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null,r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/Auth",component:pt}),r.a.createElement(R.b,{path:"/Thought",component:ct}),r.a.createElement(R.b,{path:"/",exact:!0,component:be}),r.a.createElement(R.a,{to:"/"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var gt=u.d,ft=Object(u.e)(F,gt(Object(u.a)(c.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:ft},r.a.createElement(l.a,null,r.a.createElement(ht,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){e.exports={Preview:"Preview_Preview__3boMR",Misc:"Preview_Misc__e69Qm",Date:"Preview_Date__kmoRR",Tag:"Preview_Tag__2gXlX",Details:"Preview_Details__1nnu1",Title:"Preview_Title__15oa_",Body:"Preview_Body__Es_lq"}},37:function(e,t,a){e.exports={Input:"Input_Input__1CT2H",Label:"Input_Label__374YS",InputElement:"Input_InputElement__28_6l",Invalid:"Input_Invalid__1EF2p",ValidationError:"Input_ValidationError__aYK4W"}},44:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1Uoeg",Open:"SideDrawer_Open__2CKoh",Close:"SideDrawer_Close__2lcFn",Logo:"SideDrawer_Logo__1ybt_"}},58:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__2G32J",DesktopOnly:"Toolbar_DesktopOnly__3r3Mw"}},59:function(e,t,a){e.exports={Contact:"Contact_Contact__pXxrc",List:"Contact_List__3DyE8",ListItem:"Contact_ListItem__3Saqr"}},60:function(e,t,a){e.exports={Info:"Info_Info__Ue6fc",Image:"Info_Image__2nKxU",Description:"Info_Description__1IYWy"}},61:function(e,t,a){e.exports={Layout:"Layout_Layout__1bfW-",Left:"Layout_Left__6lvE3",Right:"Layout_Right__ZTEF0"}},62:function(e,t,a){e.exports={CategoryItem:"CategoryItem_CategoryItem__s2vrc",Active:"CategoryItem_Active__AcwG8"}},75:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2ijk_",active:"NavigationItem_active__3nKrr"}},78:function(e,t,a){e.exports={Loader:"Spinner_Loader__1WPvs",load3:"Spinner_load3__3WLqh",onWhite:"Spinner_onWhite__1sv9V"}},79:function(e,t,a){e.exports={Button:"Button_Button__3PV2i",Success:"Button_Success__1Q3iP",Danger:"Button_Danger__3GbvB"}},80:function(e,t,a){e.exports={Thought:"Thought_Thought__37PNs",Black:"Thought_Black__6ToZl"}},81:function(e,t,a){e.exports={Auth:"Auth_Auth__266rQ",Center:"Auth_Center__1npsb"}}},[[141,1,2]]]);
//# sourceMappingURL=main.5729190d.chunk.js.map