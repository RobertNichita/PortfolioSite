(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(24),r=n.n(a),s=(n(79),n(80),n(5)),o=n(6),l=n(11),d=n(28),u=n(7),h=n(8),b=(n(81),n(10)),j=n.n(b),p=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"mod",value:function(e,t){return(e%t+t)%t}}]),e}();p.doCallback=function(e,t){return e.apply(e,t)};n(82);var g=n(2),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"contain",children:[Object(g.jsx)("div",{className:"indicator highlight",id:"ind0"}),Object(g.jsx)("div",{className:"indicator",id:"ind1"}),Object(g.jsx)("div",{className:"indicator",id:"ind2"})]})}}],[{key:"updatePageIndication",value:function(e){for(var t=0;t<3;t++)t===e?j()("#ind"+t).addClass("highlight"):j()("#ind"+t).removeClass("highlight")}}]),n}(i.a.Component),O=n(44),m=Object(O.b)({name:"WindowSize",initialState:{w:0,h:0},reducers:{updateSize:function(e,t){e.w=t.payload.w,e.h=t.payload.h}}}),v=m.reducer,x=m.actions,k=Object(O.a)({reducer:v}),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;Object(o.a)(this,n),(c=t.call(this,e)).hPercent=void 0,c.wPercent=void 0,c.unsubscribe=void 0,c.getStyle=function(){return{height:c.state.height,width:c.state.width}},c.state={width:"0px",height:"0px"},c.wPercent=e.wPercent,c.hPercent=e.hPercent,c.unsubscribe=k.subscribe((function(){var e=k.getState(),t=i(e.w,e.h);j()(":root")[0].dataset.landscape=t?"landscape":"portrait",c.setState({width:(e.w*(t?c.wPercent[1]:c.wPercent[0])*.01).toString()+"px",height:(e.h*(t?c.hPercent[1]:c.hPercent[0])*.01).toString()+"px"})}));var i=function(e,t){return e>t};return c}return n}(i.a.Component),y=(n(84),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"BG",style:Object(s.a)(Object(s.a)({},this.getStyle()),{},{margin:0}),children:[Object(g.jsx)("div",{className:"content",children:this.props.children}),Object(g.jsx)("div",{className:"base",style:{backgroundImage:'url("/assets/Images/NicePng_torn-paper-texture-png_cropped.png")'}})]})}}]),n}(w)),N=(n(85),n(86),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(g.jsxs)("a",{className:"card",id:"".concat(null==this.props.id?"":this.props.id),href:this.props.link?this.props.link:"#default",children:[Object(g.jsx)("div",{className:"picture",style:Object(s.a)(Object(s.a)({},this.props.style),{},{backgroundImage:"url(".concat(this.props.picture,")")})}),Object(g.jsx)("div",{className:"description",children:this.props.description})]})}}]),n}(i.a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"cardgrid",children:this.props.cards.map((function(e,t){return Object(g.jsx)(N,{description:e.description,picture:e.picture,style:e.style,link:e.link,id:t},t)}))})}}]),n}(i.a.Component),P=n(40),I=n.n(P),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).resizeContainer=function(){var e=j()(".container_");console.log("a"+c.state.front);var t=j()("#"+c.state.front+".element .BG .content .cardgrid").height();console.log("bheight: ".concat(t)),e.css({height:"".concat(t+150,"px")})},c.debouncedResizeContainer=I()(c.resizeContainer,50,{trailing:!0}),c.hideBaseFloat=function(e){var t=j()(".container_")[0],n=j()(".base-float"),c=n[0],i=t.getBoundingClientRect().bottom;c.getBoundingClientRect().bottom>i?n.css({visibility:"hidden"}):n.css({visibility:"inherit"})},c.swipe=function(e){},c.rotate=function(e){var t=e.data.d,n=e.data.n;r.a.flushSync((function(){c.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{front:p.mod(e.front+("n"===t?1:-1)*n,3),rotation:e.rotation+120*("n"===t?-1:1)})}),(function(){j()(".carousel_").css({"-webkit-transform":"rotateY("+c.state.rotation+"deg)","-moz-transform":"rotateY("+c.state.rotation+"deg)","-o-transform":"rotateY("+c.state.rotation+"deg)",transform:"rotateY("+c.state.rotation+"deg)"});for(var t=0;t<3;t++){var n=j()("#"+t+".element");t===c.state.front?n.css({"z-index":1}):n.css({"z-index":-1})}c.resizeContainer(),j()(c.state.root).animate({scrollTop:j()(".carousel_").offset().top},250),f.updatePageIndication(c.state.front),e.stopPropagation()}))}))},c.state=Object(s.a)(Object(s.a)({},c.state),{},{rotation:0,front:0,root:j()("html, body"),self:Object(d.a)(c),landscape:!1}),j()(window).on("load",(function(){j()(".next").on("click",{d:"n",n:1},c.rotate),j()(".prev").on("click",{d:"p",n:1},c.rotate),j()(window).on("resize",c.debouncedResizeContainer)})),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"top",onTouchMove:function(e){return console.log(JSON.stringify(e))},children:[Object(g.jsx)("div",{className:"container_",style:{width:this.state.width},children:Object(g.jsx)("div",{style:{position:"relative",width:"100%",height:"100%"},children:Object(g.jsxs)("div",{className:"carousel_",children:[Object(g.jsx)("div",{className:"element",id:"0",style:{width:this.state.width},children:Object(g.jsxs)(y,{wPercent:[100,88.5],hPercent:[200,100],children:["Projects",Object(g.jsx)(C,{cards:[{description:"Gource Wizard",picture:"/assets/Images/GourceWizard/GWiz_Logo.png",style:{backgroundColor:"#ffffff"},link:"#/portfolioMd/GourceWizard"},{description:"Petsprout",picture:"/assets/Images/Petsprout/Petsprout_Logo_Transparent.png",style:{backgroundColor:"#353535"},link:"#/portfolioMd/Petsprout"},{description:"Find Dining",picture:"/assets/Images/ScarboroughDining/Logo.png",style:{backgroundColor:"#9B321E"},link:"#/portfolioMd/ScarboroughDining"},{description:"INgest",picture:"/assets/Images/Ingest/Logo.png",style:{backgroundColor:"#4C3ECC"},link:"#/portfolioMd/Ingest"},{description:"Robotics",picture:"/assets/Images/Robotics/Logo.png",style:{backgroundSize:"cover"},link:"#/portfolioMd/Robotics"}]})]})}),Object(g.jsx)("div",{className:"element",id:"1",style:{width:this.state.width},children:Object(g.jsxs)(y,{wPercent:[100,88.5],hPercent:[160,50],children:["Experience",Object(g.jsx)(C,{cards:[{description:"Caseware",picture:"/assets/Images/Caseware/Logo.png",style:{backgroundColor:"#ffffff"},link:"#/portfolioMd/Caseware"},{description:"Altairix",picture:"/assets/Images/Altairix/Logo.png",style:{backgroundColor:"#ffffff"},link:"#/portfolioMd/Altairix"}]})]})}),Object(g.jsx)("div",{className:"element",id:"2",style:{width:this.state.width},children:Object(g.jsxs)(y,{wPercent:[100,88.5],hPercent:[160,100],children:["Hobbies",Object(g.jsx)(C,{cards:[{description:"Music",picture:"/assets/Images/Music/Logo.png",style:{backgroundSize:"cover"},link:"#/portfolioMd/Music"},{description:"Cooking",picture:"/assets/Images/Cooking/mushrooms_cooking.jpg",style:{backgroundSize:"cover"},link:"#/portfolioMd/Cooking"},{description:"Gaming",picture:"",style:{},link:"#/portfolioMd/Gaming"}]})]})})]})})}),Object(g.jsx)("div",{className:"base-float",children:Object(g.jsxs)("div",{className:"float-wrap",children:[Object(g.jsx)("div",{className:"prev",children:Object(g.jsx)("img",{src:"/assets/Icons/arrowL_transp.png",alt:"Left\\nArrow"})}),Object(g.jsx)(f,{}),Object(g.jsx)("div",{className:"next",children:Object(g.jsx)("img",{src:"/assets/Icons/arrowR_transp.png",alt:"Right\\nArrow"})})]})})]})}}]),n}(w),_=n(71),M=n(13),T=(n(87),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;Object(o.a)(this,n),(c=t.call(this,e)).getRoot=function(){return j()(":root")},c.setTheme=function(){var e=c.getRoot()[0],t=j()(".toggle-thumb");c.state.checked?t.addClass("checked"):t.hasClass("checked")&&t.removeClass("checked"),e.dataset.theme=c.state.checked?"light":"",localStorage.setItem("theme",e.dataset.theme)},c.onClick=function(e){c.setState((function(e){return{checked:!e.checked}}),c.setTheme)};var i=localStorage.getItem("theme");return c.state={checked:"light"===i},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setTheme()}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"toggle",children:Object(g.jsxs)("div",{className:"toggle-track",onClick:function(t){return e.onClick(t)},children:[Object(g.jsx)("div",{className:"toggle-thumb"}),Object(g.jsx)("div",{className:"check icon",children:this.props.icons.checked}),Object(g.jsx)("div",{className:"x icon",children:this.props.icons.unchecked})]})})}}]),n}(i.a.Component)),z=n(52),R=n(53),L=(n(93),n(94),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).links={github:"https://github.com/RobertNichita",linkedin:"https://www.linkedin.com/in/robert-nichita-846075115/",brand:"#aboutme"},e.mask="url(/assets/Icons/Social/".concat(e.props.iconName,"_transparent.svg)"),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("a",{href:this.links["".concat(this.props.iconName)],target:"brand"===this.props.iconName?"":"_blank",className:"navIcon",rel:"noreferrer",style:{WebkitMaskImage:this.mask,maskImage:this.mask}})}}]),n}(i.a.Component)),E=(n(95),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"hamburger",style:{visibility:this.props.visible?"visible":"hidden"},children:[Object(g.jsx)("a",{href:"#aboutme",className:"hamText ham",children:Object(g.jsx)("div",{children:"About"})}),Object(g.jsx)("a",{href:"#projects",className:"hamText ham",children:Object(g.jsx)("div",{children:"Projects"})}),Object(g.jsx)("a",{href:"#experience",className:"hamText ham",children:Object(g.jsx)("div",{children:"Experience"})}),Object(g.jsx)("a",{href:"#hobbies",className:"hamText ham",children:Object(g.jsx)("div",{children:"Hobbies"})})]})}}]),n}(i.a.Component)),B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).toggleHamburger=function(){c.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{hamburgerToggle:!e.hamburgerToggle})}))},c.setState(Object(s.a)(Object(s.a)({},c.state),{},{isToggled:!1,hamburgerToggle:!1})),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"nav-contain clamp",style:this.getStyle(),children:[Object(g.jsxs)("a",{href:"#home",className:"navbarHamburger nav",onClick:this.toggleHamburger,children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]}),Object(g.jsx)(E,{visible:this.state.hamburgerToggle}),Object(g.jsx)("a",{href:"#aboutme",className:"navbarText nav",children:Object(g.jsx)("div",{children:"About"})}),Object(g.jsx)("a",{href:"#projects",className:"navbarText nav",children:Object(g.jsx)("div",{children:"Projects"})}),Object(g.jsx)("a",{href:"#experience",className:"navbarText nav",children:Object(g.jsx)("div",{children:"Experience"})}),Object(g.jsx)("a",{href:"#hobbies",className:"navbarText nav",children:Object(g.jsx)("div",{children:"Hobbies"})}),Object(g.jsxs)("div",{className:"icons",children:[Object(g.jsx)(L,{iconName:"github"}),Object(g.jsx)(L,{iconName:"linkedin"}),Object(g.jsx)(L,{iconName:"brand"})]}),Object(g.jsx)(T,{icons:{checked:Object(g.jsx)(z.a,{icon:R.a,color:"#ecffe6",style:{height:"300%",width:"300%"}}),unchecked:Object(g.jsx)(z.a,{icon:R.b,color:"#b8c415",style:{height:"300%",width:"300%"}})}})]})}}]),n}(w),G=(n(96),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"landing",style:this.getStyle(),children:[Object(g.jsxs)("div",{className:"hi",children:[Object(g.jsx)("p",{children:"Hi!"}),Object(g.jsx)("p",{children:Object(g.jsx)("strong",{children:"I'm Robert."})}),Object(g.jsx)("p",{children:"This is my Portfolio."})]}),Object(g.jsx)("div",{className:"am",children:"I'm a fullstack developer  with a focus on building out application backends, data transformations and service integrations"}),Object(g.jsx)("div",{className:"face",style:{background:'center bottom / contain no-repeat url("assets/Images/looking_down.png") , radial-gradient(circle closest-side, var(--FG) 70%,transparent)'}}),Object(g.jsx)("div",{className:"secret",children:"Secrets down here \u2193"}),Object(g.jsx)("div",{className:"base_ one",style:{backgroundImage:'url("/assets/Images/NicePng_torn-paper-texture-png_cropped.png")'}}),Object(g.jsx)("div",{className:"base_ two",style:{backgroundImage:'url("/assets/Images/NicePng_torn-paper-texture-png_cropped.png")'}})]})}}]),n}(w)),A=n(69),F=n(58),H=n(54),W=n.n(H),D=n(63),Y=(n(99),n(134)),J=n(64),U=n(72),q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).loadMarkdown=Object(J.debounce)(function(){var e=Object(D.a)(W.a.mark((function e(t){var n,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.originalEvent&&t.originalEvent.newURL){e.next=3;break}return c.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{md:"# Select an article to read above!"})})),e.abrupt("return");case 3:if(n=t.originalEvent.newURL.split("#")[1],"portfolioMd"===n.split("/")[1]){e.next=7;break}return e.abrupt("return");case 7:i=n.split("/")[2],fetch("/assets/Markdown/".concat(i,".md")).then((function(e){return e.text()})).then((function(e){c.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{md:e||"# No Content in ".concat(i)})}),(function(){var e;j()([document.documentElement,document.body]).animate({scrollTop:(null===(e=j()(".content_container").offset())||void 0===e?void 0:e.top)-100+"px"},250)}))})).catch((function(e){c.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{md:""})}))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),100,{leading:!0}),j()(window).on("load",(function(){j()(window).on("hashchange",c.loadMarkdown),c.loadMarkdown({originalEvent:{newURL:window.location.hash}})})),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"content_container",style:this.getStyle(),children:Object(g.jsx)(Y.a,{children:this.state.md,rehypePlugins:[U.a]})})}}]),n}(w),K=function(e){var t=Object(F.b)(),n=Object(c.useCallback)((function(e,n){t(x.updateSize({w:e,h:n}))}),[t]),i=Object(A.a)({onResize:n}),a=i.ref;i.width,i.height;return Object(g.jsx)("iframe",{ref:a,title:"resize",style:{width:"100%",height:"100vh",backgroundColor:"transparent",margin:"0px",padding:"0px",overflow:"hidden",borderWidth:"0px",position:"absolute"},children:e.children})};var Q=function(){return Object(g.jsx)(F.a,{store:k,children:Object(g.jsx)(_.a,{children:Object(g.jsx)(M.c,{children:Object(g.jsxs)(M.a,{path:"/",children:[Object(g.jsx)(B,{wPercent:[100,10],hPercent:[10,100]}),Object(g.jsx)(G,{wPercent:[100,88.5],hPercent:[90,100]}),Object(g.jsx)(S,{floatOffsetBottom:0,wPercent:[100,88.5],hPercent:[300,300]}),Object(g.jsx)(q,{wPercent:[90,78.5],hPercent:[100,100]}),Object(g.jsx)(K,{})]})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root")),V()},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},99:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.28749948.chunk.js.map