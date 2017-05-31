/*!
 * virtual-doml v1.0.1
 * (c) 2017 LowesYang
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.virtualDom=t():e.virtualDom=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=6)}([function(e,t,n){"use strict";function r(e){if(!e)return[];if(!("length"in e))throw new Error("Parameter 1 should be array-like object");for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function o(e){return"string"==typeof e}Object.defineProperty(t,"__esModule",{value:!0}),t.toArray=r,t.isString=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(7),a=n(0),u=function(){function e(){r(this,e),this.patches={},this.walkIndex=0}return o(e,[{key:"getPatches",value:function(e){return e?this.patches[e]:this.patches}},{key:"addPatch",value:function(e,t){this.patches[e]=t}},{key:"apply",value:function(e){var t=this,n=this.patches[this.walkIndex],r=(0,a.toArray)(e.childNodes);r&&r.forEach(function(e){t.walkIndex++,t.apply(e)}),this.applyPatches(e,n)}},{key:"applyPatches",value:function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(n){switch(n.type){case e.REPLACE:(0,i.replaceNode)(t,n.node);break;case e.REORDER:(0,i.reorderChildren)(t,n.moves);break;case e.PROPS:(0,i.setProps)(t,n.props);break;case e.TEXT:(0,i.setText)(t,n.content);break;default:throw new Error("Invalid patch's type")}})}}]),e}();u.REPLACE=0,u.REORDER=1,u.PROPS=2,u.TEXT=3,t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return new d(e,t).getPatches()}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.diff=i;var u=n(1),f=r(u),c=n(0),s=n(4),l=r(s),d=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new f.default;if(o(this,e),!r instanceof f.default)throw new Error("Invalid patches's type:it should be {Patches}.");this.patches=r,this.index=0,this.diffNode(t,n)}return a(e,[{key:"getPatches",value:function(){return this.patches}},{key:"diffNode",value:function(e,t){var n=[],r=this.index;(0,c.isString)(e)&&(0,c.isString)(t)?e!==t&&n.push({type:f.default.TEXT,content:t}):e.tagName===t.tagName&&e.key===t.key?(this.diffProps(e,t,n),e.props&&e.props.hasOwnProperty("ignore")||this.diffChildren(e,t,n)):(this.index+=e.count,n.push({type:f.default.REPLACE,node:t})),n.length&&this.patches.addPatch(r,n)}},{key:"diffProps",value:function(e,t,n){var r=e.props||{},o=t.props||{},i={};for(var a in r)o[a]!==r[a]&&(i[a]=o[a]);for(var u in o)r.hasOwnProperty(u)||(i[u]=o[u]);return Object.keys(i).length&&n.push({type:f.default.PROPS,props:i}),n}},{key:"diffChildren",value:function(e,t,n){var r=(0,l.default)(e.children,t.children,"key"),o=r.moves,i=r.children;o.length&&n.push({type:f.default.REORDER,moves:o});for(var a=e.children,u=0,c=a.length;u<c&&i[u];u++)this.index++,this.diffNode(a[u],i[u])}}]),e}();t.default=d},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){return new u(e,t,n)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.el=o;var a=n(0),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];r(this,e),this.tagName=t,n instanceof Array?this.children=(0,a.toArray)(n):(this.props=n,this.children=(0,a.toArray)(o)),this.key=n.key;var i=0;this.children.forEach(function(t){t instanceof e?i+=t.count+1:i++}),this.count=i}return i(e,[{key:"render",value:function(){var t=document.createElement(this.tagName);for(var n in this.props)t.setAttribute(n,this.props[n]);var r=void 0;return this.children.forEach(function(n){r=n instanceof e?n.render():document.createTextNode(n),t.appendChild(r)}),t}}]),e}();t.default=u},function(e,t,n){e.exports=n(5).diff},function(e,t){function n(e,t,n){function i(e){var t={index:e,type:0};v.push(t)}function a(e,t){var n={index:e,item:t,type:1};v.push(n)}function u(e){w.splice(e,1)}for(var f,c,s=r(e,n),l=r(t,n),d=l.free,p=s.keyIndex,h=l.keyIndex,v=[],y=[],b=0,m=0;b<e.length;){if(f=e[b],c=o(f,n))if(h.hasOwnProperty(c)){var g=h[c];y.push(t[g])}else y.push(null);else{var P=d[m++];y.push(P||null)}b++}var w=y.slice(0);for(b=0;b<w.length;)null===w[b]?(i(b),u(b)):b++;for(var k=b=0;b<t.length;){f=t[b],c=o(f,n);var x=w[k],E=o(x,n);if(x)if(c===E)k++;else if(p.hasOwnProperty(c)){var O=o(w[k+1],n);O===c?(i(b),u(k),k++):a(b,f)}else a(b,f);else a(b,f);b++}return{moves:v,children:y}}function r(e,t){for(var n={},r=[],i=0,a=e.length;i<a;i++){var u=e[i],f=o(u,t);f?n[f]=i:r.push(u)}return{keyIndex:n,free:r}}function o(e,t){if(e&&t)return"string"==typeof t?e[t]:t(e)}t.makeKeyIndexAndFree=r,t.diff=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=r(o),a=n(1),u=r(a),f=n(2);window.vdom={el:o.el,Element:i.default,Patches:u.default,diff:f.diff},t.default=window.vdom},function(e,t,n){"use strict";function r(e,t){var n=void 0;n="string"==typeof t?document.createTextNode(t):t.render(),e.parentNode.replaceChild(n,e)}function o(e,t){var n=(0,f.toArray)(e.childNodes),r=void 0,o=void 0,i={};n.forEach(function(e){if(1===e.nodeType){var t=e.getAttribute("key");t&&(i[t]=e)}}),t.forEach(function(t){if(o=t.index,r=n[o],0===t.type)e.removeChild(r),n.splice(o,1);else{if(1!==t.type)throw new Error("Invalid move's type");var a=i[t.item.key]||("object"===u(t.item)?t.item.render():document.createTextNode(t.item));n.splice(o,0,a),e.insertBefore(a,r)}})}function i(e,t){var n=void 0;for(var r in t)if(n=t[r],t[r])switch(r){case"style":e.style.cssText=n;break;case"value":var o=(e.tagName||"").toLowerCase();"input"===o||"textarea"===o?e.value=n:e.setAttribute(r,n);break;default:e.setAttribute(r,n)}else e.removeAttribute(r)}function a(e,t){e.textContent?e.textContent=t:e.nodeValue=t}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.replaceNode=r,t.reorderChildren=o,t.setProps=i,t.setText=a;var f=n(0)}])});