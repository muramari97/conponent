(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),u=(l(n(1)),n(18)),a=n(2);function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"alertPopup",value:function(){a.notification.alert("This is an Onsen UI alert notification test.")}},{key:"renderToolbar",value:function(){return o.default.createElement(u.Toolbar,null,o.default.createElement("div",{className:"center"},"Onsen UI"))}},{key:"render",value:function(){return o.default.createElement(u.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",null,"Hello World!"),o.default.createElement(u.Button,{onClick:this.alertPopup},"Click Me!"))}}]),t}(o.default.Component);t.default=f},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n(9);var r=n(11),o=i(n(0)),u=i(n(1)),a=i(n(2)),l=i(n(17));function i(e){return e&&e.__esModule?e:{default:e}}n(22),n(23),a.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var c=document.getElementById("app");u.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(l.default,null)),c)}},[[7,1,2]]]);