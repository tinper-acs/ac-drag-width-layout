module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=23)}([function(t,e,n){"use strict";t.exports=n(52)},function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4),o=n(1),u=n(12),a=n(28),i=n(8),c=function(t,e,n){var f,l,s,d=t&c.F,p=t&c.G,_=t&c.S,y=t&c.P,h=t&c.B,b=t&c.W,v=p?o:o[e]||(o[e]={}),m=v.prototype,g=p?r:_?r[e]:(r[e]||{}).prototype;for(f in p&&(n=e),n)(l=!d&&g&&void 0!==g[f])&&i(v,f)||(s=l?g[f]:n[f],v[f]=p&&"function"!=typeof g[f]?n[f]:h&&l?u(s,r):b&&g[f]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):y&&"function"==typeof s?u(Function.call,s):s,y&&((v.virtual||(v.virtual={}))[f]=s,t&c.R&&m&&!m[f]&&a(m,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(32),o=n(34);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=require("react")},function(t,e,n){t.exports={default:n(25),__esModule:!0}},function(t,e,n){var r=n(27);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(14),u=n(17),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(2)&&!n(15)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(6),o=n(4).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(35),__esModule:!0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(44)("keys"),o=n(46);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";(function(t){e.__esModule=!0;var r=u(n(24)),o=u(n(54));function u(t){return t&&t.__esModule?t:{default:t}}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n(0)).enterModule;e&&e(t)}();"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;r.default.Content=o.default;var a=r.default;e.default=a,function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n(0)).default;t&&t.register(a,"default","/Users/study/node/ac-drag-width-layout/src/index.js")}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n(0)).leaveModule;e&&e(t)}()}).call(this,n(3)(t))},function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(11),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(19),_create2=_interopRequireDefault(_create),_isNan=__webpack_require__(48),_isNan2=_interopRequireDefault(_isNan),_react=__webpack_require__(10),_react2=_interopRequireDefault(_react),_utils=__webpack_require__(51);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,_create2.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(t,e):t.__proto__=e)}__webpack_require__(53),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;t&&t(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},DragWidthLayout=function(_Component){function DragWidthLayout(t){_classCallCheck(this,DragWidthLayout);var e=_possibleConstructorReturn(this,_Component.call(this,t));return e.widthList=[],e.onMouseDownLine=function(t,n){var r=e.state.widthList,o=e,u=(n=n||window.event).clientX,a=n.target.parentElement,i=a.parentNode.offsetWidth,c=a.offsetLeft;return e.widthList=[].concat(r),document.onmousemove=function(e){var n=e.clientX-u,a=t,f=t+1,l=parseInt(o.widthList[a]),s=parseInt(o.widthList[f]);n>0&&s&&l&&(s&&s<=n+10&&(n=s-10),r[a]=l+n+"px",r[f]=s-n+"px");var d=-1*n;if(d>0&&s&&l&&(l<=d&&(d=l-10),r[a]=l-d+"px",r[f]=s+d+"px"),n>0&&(0,_isNan2.default)(s)){var p=i-c,_=l+n;p<_+10&&(_=p-10),r[a]=_+"px"}n<0&&(0,_isNan2.default)(s)&&(l<=-n&&(n=10-l),r[a]=l+n+"px"),o.setState({widthList:r})},document.onmouseup=function(t){o.widthList=[].concat(r),document.onmousemove=null,document.onmouseup=null,t.target.releaseCapture&&t.target.releaseCapture()},n.target.setCapture&&n.target.setCapture(),!1},e.state={contentWidth:"100%",widthList:[]},e}return _inherits(DragWidthLayout,_Component),DragWidthLayout.prototype.componentDidMount=function(){var t=this.props,e=t.children,n=t.widthList,r=t.stretchEnd;if(n||(n=e.map(function(t){return"200px"})),r){var o=n.slice(0,-1).reduce(function(t,e){return parseInt(t)+parseInt(e)}),u=5*n.length,a=ReactDOM.findDOMNode(this);n[n.length-1]=a.offsetWidth-o-u}this.setState({widthList:n})},DragWidthLayout.prototype.render=function(){var t=this,e=this.props,n=e.children,r=e.contentHeight,o=void 0===r?"100%":r,u=e.contentWidth,a=void 0===u?"100%":u,i=this.state,c=i.resizeLeft,f=i.widthList;return _react2.default.createElement("div",{style:{width:a,height:o},className:"alt-content"},n&&n.map(function(e,n){return _react2.default.createElement("div",{className:"alt-left-body",key:(0,_utils.uuid)(),style:{height:o}},_react2.default.createElement("div",{className:"alt-width-left",style:{width:f[n]}},e),_react2.default.createElement("div",{className:"resize",onMouseDown:function(){return t.onMouseDownLine(n)},style:{left:c}}))}))},DragWidthLayout.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},DragWidthLayout}(_react.Component),_default=DragWidthLayout;exports.default=_default,function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;t&&(t.register(DragWidthLayout,"DragWidthLayout","/Users/study/node/ac-drag-width-layout/src/DragWidthLayout.js"),t.register(_default,"default","/Users/study/node/ac-drag-width-layout/src/DragWidthLayout.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;t&&t(module)}()}).call(this,__webpack_require__(3)(module))},function(t,e,n){n(26),t.exports=n(1).Object.setPrototypeOf},function(t,e,n){var r=n(7);r(r.S,"Object",{setPrototypeOf:n(29).set})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(13),o=n(18);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),o=n(5),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(12)(Function.call,n(30).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){var r=n(31),o=n(18),u=n(9),a=n(17),i=n(8),c=n(14),f=Object.getOwnPropertyDescriptor;e.f=n(2)?f:function(t,e){if(t=u(t),e=a(e,!0),c)try{return f(t,e)}catch(t){}if(i(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){n(36);var r=n(1).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(7);r(r.S,"Object",{create:n(37)})},function(t,e,n){var r=n(5),o=n(38),u=n(22),a=n(21)("IE_PROTO"),i=function(){},c=function(){var t,e=n(16)("iframe"),r=u.length;for(e.style.display="none",n(47).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[u[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(i.prototype=r(t),n=new i,i.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(13),o=n(5),u=n(39);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,a=u(e),i=a.length,c=0;i>c;)r.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var r=n(40),o=n(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(8),o=n(9),u=n(41)(!1),a=n(21)("IE_PROTO");t.exports=function(t,e){var n,i=o(t),c=0,f=[];for(n in i)n!=a&&r(i,n)&&f.push(n);for(;e.length>c;)r(i,n=e[c++])&&(~u(f,n)||f.push(n));return f}},function(t,e,n){var r=n(9),o=n(42),u=n(43);t.exports=function(t){return function(e,n,a){var i,c=r(e),f=o(c.length),l=u(a,f);if(t&&n!=n){for(;f>l;)if((i=c[l++])!=i)return!0}else for(;f>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(20),o=Math.max,u=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(1),o=n(4),u=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(45)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e,n){n(50),t.exports=n(1).Number.isNaN},function(t,e,n){var r=n(7);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){"use strict";(function(t){e.__esModule=!0,e.getHeight=r,e.uuid=o,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n(0)).enterModule;e&&e(t)}();"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function r(){var t=Math.max(document.body.clientHeight,document.documentElement.clientHeight),e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);return t<e&&t||e}function o(){for(var t=[],e=0;e<36;e+=1)t[e]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substr(3&t[19]|8,1),t[8]="-",t[13]="-",t[18]="-",t[23]="-",t[0]="abcdefghigklmnopqrst".substr(Math.floor(16*Math.random()),1),t.join("")}!function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n(0)).default;t&&(t.register(r,"getHeight","/Users/study/node/ac-drag-width-layout/src/utils.js"),t.register(o,"uuid","/Users/study/node/ac-drag-width-layout/src/utils.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n(0)).leaveModule;e&&e(t)}()}).call(this,n(3)(t))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&"object"==typeof t&&"default"in t?t.default:t}(n(10));function o(t){return o.warnAboutHMRDisabled&&(o.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),r.Children.only(t.children)}o.warnAboutHMRDisabled=!1;var u=function t(){return t.shouldWrapWithAppContainer?function(t){return function(e){return r.createElement(o,null,r.createElement(t,e))}}:function(t){return t}};u.shouldWrapWithAppContainer=!1;e.AppContainer=o,e.hot=u,e.areComponentsEqual=function(t,e){return t===e},e.setConfig=function(){},e.cold=function(t){return t},e.configureComponent=function(){}},function(t,e,n){},function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(11),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(19),_create2=_interopRequireDefault(_create),_react=__webpack_require__(10),_react2=_interopRequireDefault(_react);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=(0,_create2.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(t,e):t.__proto__=e)}!function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;t&&t(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},Content=function(_React$Component){function Content(){return _classCallCheck(this,Content),_possibleConstructorReturn(this,_React$Component.apply(this,arguments))}return _inherits(Content,_React$Component),Content.prototype.render=function(){return this.props.children},Content.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Content}(_react2.default.Component),_default=Content;exports.default=_default,function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;t&&(t.register(Content,"Content","/Users/study/node/ac-drag-width-layout/src/Content.js"),t.register(_default,"default","/Users/study/node/ac-drag-width-layout/src/Content.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;t&&t(module)}()}).call(this,__webpack_require__(3)(module))}]);