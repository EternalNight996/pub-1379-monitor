(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[3],{374:function(e,t,i){"use strict";i.r(t);var r=i(29),n=i(30),o=i(37),a=i(32),s=i(31),c=i(0),l=i(3),u=i(4),d=i(5),f=i.n(d),p=i(79),_=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i},h=function(e){return c.createElement(p.a,null,(function(t){var i,r=t.getPrefixCls,n=t.direction,o=e.prefixCls,a=e.type,s=void 0===a?"horizontal":a,d=e.orientation,p=void 0===d?"center":d,h=e.className,g=e.children,m=e.dashed,v=e.plain,b=_(e,["prefixCls","type","orientation","className","children","dashed","plain"]),y=r("divider",o),x=p.length>0?"-".concat(p):p,w=!!g,O=f()(y,"".concat(y,"-").concat(s),(i={},Object(u.a)(i,"".concat(y,"-with-text"),w),Object(u.a)(i,"".concat(y,"-with-text").concat(x),w),Object(u.a)(i,"".concat(y,"-dashed"),!!m),Object(u.a)(i,"".concat(y,"-plain"),!!v),Object(u.a)(i,"".concat(y,"-rtl"),"rtl"===n),i),h);return c.createElement("div",Object(l.a)({className:O},b,{role:"separator"}),g&&c.createElement("span",{className:"".concat(y,"-inner-text")},g))}))},g=i(385),m=i(377),v=i(43),b=i(122),y=i(82),x=(i(411),i(1)),w={capture:!1,passive:!0,once:!1},O=function(e){Object(a.a)(i,e);var t=Object(s.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={width:"100%",height:500,data:[]},n.onResize=n.onResize.bind(Object(o.a)(n)),n}return Object(n.a)(i,[{key:"initData",value:function(){var e=document.body.clientWidth;e>768&&(e<920?this.setState({width:"var(--MaxWidthSmall)"}):e<1024?this.setState({width:"var(--MaxWidthMiddle)"}):this.setState({width:"var(--MaxWidthLarge)"}))}},{key:"onResize",value:function(e){var t=e.srcElement.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=(e.srcElement.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.state),r=i.width;i.height;if(t!==r){var n="var(--MaxWidthSmall)",o="var(--MaxWidthMiddle)",a="var(--MaxWidthLarge)";t>768?t<920?r!==n&&this.setState({width:n}):t<1024?r!==o&&this.setState({width:o}):r!==a&&this.setState({width:a}):t<768&&"100%"!==r&&this.setState({width:"100%"})}}},{key:"componentWillMount",value:function(){this.initData()}},{key:"componentDidMount",value:function(){var e=[],t=[],i=[];Array(5).fill().forEach((function(i,r){e.push({key:r+1,title:"\u6d4b\u8bd5\u533a".concat(r+1),content:"!!!!"}),t.push({key:r+1,title:"\u6d4b\u8bd5\u533a".concat(r+1),content:"!!!!"})})),i.push(e),i.push(t),this.setState({data:i}),window.addEventListener("resize",this.onResize,w)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize,w)}},{key:"render",value:function(){var e=this.state,t=e.width,i=(e.height,e.data),r=function(e,i,r){return e.map((function(e,n){return Object(x.jsxs)(v.a,{overflowX:"hidden",margin:r,width:"100%"===t?t:"49%",float:i,children:[Object(x.jsx)(h,{children:Object(x.jsx)("h2",{style:{fontSize:"30px"},children:e.title})}),Object(x.jsx)(g.b,{align:"center",children:Object(x.jsx)("p",{style:{color:"#0a0"},children:e.content})})]},e.key)}))};return Object(x.jsxs)(b.a,{width:t,limit:!1,children:[Object(x.jsx)(y.b,{}),Object(x.jsx)(m.b,{dataSource:i,split:!1,renderItem:function(e){return r(e,"left","0 5px 5px 0")}}),Object(x.jsx)(m.b,{dataSource:i,split:!1,renderItem:function(e){return r(e,"left","0 5px 5px 0")}}),Object(x.jsxs)(b.a,{width:t,float:"left",maxWidth:"40%",children:[Object(x.jsx)(v.a,{}),Object(x.jsx)(v.a,{}),Object(x.jsx)(v.a,{}),Object(x.jsx)(v.a,{})]}),Object(x.jsxs)(b.a,{width:t,float:"right",maxWidth:"40%",children:[Object(x.jsx)(v.a,{}),Object(x.jsx)(v.a,{}),Object(x.jsx)(v.a,{}),Object(x.jsx)(v.a,{})]})]})}}]),i}(c.Component),j=i(36),z=i(39);t.default=Object(j.b)((function(e){var t=e.getIn(["auth"]).toJS(),i=e.getIn(["pageUI","userConfigs"]).toJS();return{auth:t,language:Object(z.a)(i.language),userConfigs:i}}))(O)},409:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},410:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},411:function(e,t,i){"use strict";var r=i(409);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"AutoSizer",{enumerable:!0,get:function(){return n.default}});var n=r(i(412))},412:function(e,t,i){"use strict";var r=i(409),n=i(413);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,s=r(i(414)),c=r(i(415)),l=r(i(416)),u=r(i(417)),d=r(i(410)),f=r(i(418)),p=r(i(420)),_=n(i(0)),h=r(i(421));r(i(96));function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(i,!0).forEach((function(t){(0,p.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var v=(a=o=function(e){function t(){var e,i;(0,s.default)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return i=(0,l.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(n))),(0,p.default)((0,d.default)(i),"state",{height:i.props.defaultHeight||0,width:i.props.defaultWidth||0}),(0,p.default)((0,d.default)(i),"_parentNode",void 0),(0,p.default)((0,d.default)(i),"_autoSizer",void 0),(0,p.default)((0,d.default)(i),"_window",void 0),(0,p.default)((0,d.default)(i),"_detectElementResize",void 0),(0,p.default)((0,d.default)(i),"_onResize",(function(){var e=i.props,t=e.disableHeight,r=e.disableWidth,n=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,a=i._parentNode.offsetWidth||0,s=(i._window||window).getComputedStyle(i._parentNode)||{},c=parseInt(s.paddingLeft,10)||0,l=parseInt(s.paddingRight,10)||0,u=parseInt(s.paddingTop,10)||0,d=parseInt(s.paddingBottom,10)||0,f=o-u-d,p=a-c-l;(!t&&i.state.height!==f||!r&&i.state.width!==p)&&(i.setState({height:o-u-d,width:a-c-l}),n({height:o,width:a}))}})),(0,p.default)((0,d.default)(i),"_setRef",(function(e){i._autoSizer=e})),i}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,h.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,i=e.className,r=e.disableHeight,n=e.disableWidth,o=e.style,a=this.state,s=a.height,c=a.width,l={overflow:"visible"},u={};return r||(l.height=0,u.height=s),n||(l.width=0,u.width=c),_.createElement("div",{className:i,ref:this._setRef,style:m({},l,{},o)},t(u))}}]),t}(_.Component),(0,p.default)(o,"propTypes",null),a);t.default=v,(0,p.default)(v,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},413:function(e,t,i){var r=i(181).default;function n(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(n=function(e){return e?i:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var i=n(t);if(i&&i.has(e))return i.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=a?Object.getOwnPropertyDescriptor(e,s):null;c&&(c.get||c.set)?Object.defineProperty(o,s,c):o[s]=e[s]}return o.default=e,i&&i.set(e,o),o},e.exports.default=e.exports,e.exports.__esModule=!0},414:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},415:function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},416:function(e,t,i){var r=i(181).default,n=i(410);e.exports=function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},417:function(e,t){function i(t){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,i(t)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},418:function(e,t,i){var r=i(419);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},419:function(e,t){function i(t,r){return e.exports=i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,i(t,r)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},420:function(e,t){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},e.exports.default=e.exports,e.exports.__esModule=!0},421:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,i){var r;r="undefined"!==typeof i?i:"undefined"!==typeof window?window:"undefined"!==typeof self?self:e;var n="undefined"!==typeof r.document&&r.document.attachEvent;if(!n){var o=function(){var e=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||function(e){return r.setTimeout(e,20)};return function(t){return e(t)}}(),a=function(){var e=r.cancelAnimationFrame||r.mozCancelAnimationFrame||r.webkitCancelAnimationFrame||r.clearTimeout;return function(t){return e(t)}}(),s=function(e){var t=e.__resizeTriggers__,i=t.firstElementChild,r=t.lastElementChild,n=i.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,n.style.width=i.offsetWidth+1+"px",n.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight},c=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;s(this),this.__resizeRAF__&&a(this.__resizeRAF__),this.__resizeRAF__=o((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(i){i.call(t,e)})))}))}},l=!1,u="",d="animationstart",f="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),_="",h=r.document.createElement("fakeelement");if(void 0!==h.style.animationName&&(l=!0),!1===l)for(var g=0;g<f.length;g++)if(void 0!==h.style[f[g]+"AnimationName"]){_=f[g],u="-"+_.toLowerCase()+"-",d=p[g],l=!0;break}var m="resizeanim",v="@"+u+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",b=u+"animation: 1ms "+m+"; "}return{addResizeListener:function(e,i){if(n)e.attachEvent("onresize",i);else{if(!e.__resizeTriggers__){var o=e.ownerDocument,a=r.getComputedStyle(e);a&&"static"==a.position&&(e.style.position="relative"),function(e){if(!e.getElementById("detectElementResize")){var i=(v||"")+".resize-triggers { "+(b||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',r=e.head||e.getElementsByTagName("head")[0],n=e.createElement("style");n.id="detectElementResize",n.type="text/css",null!=t&&n.setAttribute("nonce",t),n.styleSheet?n.styleSheet.cssText=i:n.appendChild(e.createTextNode(i)),r.appendChild(n)}}(o),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=o.createElement("div")).className="resize-triggers";var l='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var u=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return l}});e.__resizeTriggers__.innerHTML=u.createHTML("")}else e.__resizeTriggers__.innerHTML=l;e.appendChild(e.__resizeTriggers__),s(e),e.addEventListener("scroll",c,!0),d&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==m&&s(e)},e.__resizeTriggers__.addEventListener(d,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(i)}},removeResizeListener:function(e,t){if(n)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",c,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(d,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(i){}}}}}}).call(this,i(115))}}]);
//# sourceMappingURL=3.49da8043.chunk.js.map