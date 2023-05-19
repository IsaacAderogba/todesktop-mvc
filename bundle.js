(()=>{var t={828:function(t,e){"use strict";var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.getActiveWin=void 0,e.getActiveWin=t=>n(void 0,void 0,void 0,(function*(){return yield window.todesktop.activeWin.getActiveWin(t)}))},780:function(t,e){"use strict";var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.extractIcon=void 0,e.extractIcon=(...t)=>n(void 0,void 0,void 0,(function*(){return yield window.todesktop.getAppIcon.extractIcon(...t)}))},311:(t,e)=>{"use strict";e.tr=e.B5=void 0,e.B5=(...t)=>window.todesktop.selectedText.registerShortcut(...t),e.tr=(...t)=>window.todesktop.selectedText.unregisterShortcut(...t)},994:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var o=n(81),i=n.n(o),r=n(645),s=n.n(r),a=n(667),l=n.n(a),c=new URL(n(808),n.b),d=new URL(n(36),n.b),p=s()(i()),u=l()(c),h=l()(d);p.push([t.id,"html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #111111;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -140px;\n\twidth: 100%;\n\tfont-size: 80px;\n\tfont-weight: 200;\n\ttext-align: center;\n\tcolor: #b83f45;\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\theight: 65px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 45px;\n\theight: 65px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -65px;\n\tleft: -0;\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tdisplay: inline-block;\n\tfont-size: 22px;\n\tcolor: #949494;\n\tpadding: 10px 27px 10px 27px;\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #484848;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url("+u+");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url("+h+");\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n\tfont-weight: 400;\n\tcolor: #484848;\n}\n\n.todo-list li.completed label {\n\tcolor: #949494;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #949494;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover,\n.todo-list li .destroy:focus {\n\tcolor: #C18585;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n\tdisplay: block;\n\theight: 100%;\n\tline-height: 1.1;\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tfont-size: 15px;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: #DB7676;\n}\n\n.filters li a.selected {\n\tborder-color: #CE4646;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 19px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #4d4d4d;\n\tfont-size: 11px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n\n:focus,\n.toggle:focus + label,\n.toggle-all:focus + label {\n\tbox-shadow: 0 0 2px 2px #CF7D7D;\n\toutline: 0;\n}\n",""]);const f=p},590:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),s=n.n(r)()(i());s.push([t.id,"hr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '“';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '”';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n",""]);const a=s},424:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),s=n.n(r)()(i());s.push([t.id,"html {\n  -webkit-app-region: drag;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n}\n\ninput.new-todo {\n  text-align: center;\n  padding: 16px;\n  box-shadow: none;\n}\n\nfooter,\nh1 {\n  display: none;\n}\n\n.todoapp {\n  margin: 0;\n  box-shadow: none;\n  background: transparent;\n}\n\n.todo-list {\n  padding: 0 16px;\n}\n\n.view {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.view:hover img {\n  opacity: 0.1;\n  transition: opacity 0.25s;\n}\n\n.view img {\n  width: 48px;\n  height: 48px;\n}\n",""]);const a=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},s=[],a=0;a<t.length;a++){var l=t[a],c=o.base?l[0]+o.base:l[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var u=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=n(r[s]);e[a].references--}for(var l=o(t,i),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},234:()=>{!function(){"use strict";var t,e,n,o,i,r=function(t){t.defaults=function(t){if(!t)return t;for(var e=1,n=arguments.length;e<n;e++){var o=arguments[e];if(o)for(var i in o)null==t[i]&&(t[i]=o[i])}return t},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var e=/(.)^/,n={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},o=/\\|'|\r|\n|\t|\u2028|\u2029/g;return t.template=function(i,r,s){var a;s=t.defaults({},s,t.templateSettings);var l=new RegExp([(s.escape||e).source,(s.interpolate||e).source,(s.evaluate||e).source].join("|")+"|$","g"),c=0,d="__p+='";i.replace(l,(function(t,e,r,s,a){return d+=i.slice(c,a).replace(o,(function(t){return"\\"+n[t]})),e&&(d+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'"),r&&(d+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),s&&(d+="';\n"+s+"\n__p+='"),c=a+t.length,t})),d+="';\n",s.variable||(d="with(obj||{}){\n"+d+"}\n"),d="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+d+"return __p;\n";try{a=new Function(s.variable||"obj","_",d)}catch(t){throw t.source=d,t}if(r)return a(r,t);var p=function(e){return a.call(this,e,t)};return p.source="function("+(s.variable||"obj")+"){\n"+d+"}",p},t}({});function s(){var t=location.href.indexOf("examples/");return location.href.substr(0,t)}function a(t,e){if(!(this instanceof a))return new a(t,e);var n,o;if("object"!=typeof t)try{t=JSON.parse(t)}catch(t){return}e&&(n=e.template,o=e.framework),!n&&t.templates&&(n=t.templates.todomvc),!o&&document.querySelector("[data-framework]")&&(o=document.querySelector("[data-framework]").dataset.framework),this.template=n,t.backend?(this.frameworkJSON=t.backend,this.frameworkJSON.issueLabel=o,this.append({backend:!0})):t[o]&&(this.frameworkJSON=t[o],this.frameworkJSON.issueLabel=o,this.append()),this.fetchIssueCount()}"todomvc.com"===location.hostname&&(t=window,e=document,n="script","ga",t.GoogleAnalyticsObject="ga",t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,o=e.createElement(n),i=e.getElementsByTagName(n)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(o,i),ga("create","UA-31081062-1","auto"),ga("send","pageview")),a.prototype.append=function(t){var e=document.createElement("aside");if(e.innerHTML=r.template(this.template,this.frameworkJSON),e.className="learn",t&&t.backend){var n=e.querySelector(".source-links"),o=n.firstElementChild,i=n.lastElementChild,a=i.getAttribute("href");i.setAttribute("href",a.substr(a.lastIndexOf("http"))),n.innerHTML=o.outerHTML+i.outerHTML}else{var l=e.querySelectorAll(".demo-link");Array.prototype.forEach.call(l,(function(t){"http"!==t.getAttribute("href").substr(0,4)&&t.setAttribute("href",s()+t.getAttribute("href"))}))}document.body.className=(document.body.className+" learn-bar").trim(),document.body.insertAdjacentHTML("afterBegin",e.outerHTML)},a.prototype.fetchIssueCount=function(){var t=document.getElementById("issue-count-link");if(t){var e=t.href.replace("https://github.com","https://api.github.com/repos"),n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(e){var n=JSON.parse(e.target.responseText);if(n instanceof Array){var o=n.length;0!==o&&(t.innerHTML="This app has "+o+" open issues",document.getElementById("issue-count").style.display="inline")}},n.send()}},"tastejs.github.io"===location.hostname&&(location.href=location.href.replace("tastejs.github.io/todomvc","todomvc.com")),function(t,e){if(!location.host)return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");var n=new XMLHttpRequest;n.open("GET",s()+"learn.json",!0),n.send(),n.onload=function(){200===n.status&&e&&e(n.responseText)}}(0,a)}()},36:t=>{"use strict";t.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E"},808:t=>{"use strict";t.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.b=document.baseURI||self.location.href,(()=>{"use strict";n(234);var t=n(379),e=n.n(t),o=n(795),i=n.n(o),r=n(569),s=n.n(r),a=n(565),l=n.n(a),c=n(216),d=n.n(c),p=n(589),u=n.n(p),h=n(590),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var m=n(994),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var b=n(424),v={};v.styleTagTransform=u(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const w={};function x(t,e){return(e||document).querySelector(t)}function y(t,e,n,o){t.addEventListener(e,n,!!o)}function k(t,e,n,o,i){y(t,n,(n=>{const i=n.target,r=t.querySelectorAll(e);let s=r.length;for(;s--;)if(r[s]===i){o.call(i,n);break}}),!!i)}const C=t=>parseInt(t.parentNode.dataset.id||t.parentNode.parentNode.dataset.id,10);var L=n(311),I=n(828),A=n(780);function _(t){const[e,n,o]=t.split(".").map(Number);return{major:e,minor:n,patch:o}}function S(t,e){return!!function(t,e){const n=_(t),o=_(e);return n.major>o.major||!(n.major<o.major)&&(n.minor>o.minor||!(n.minor<o.minor)&&(n.patch>o.patch||!(n.patch<o.patch)))}(T(),e)||(console.warn(`[todesktop-client] ${t} not called. ${t} was introduced in ${e}. You are running version ${T()}.`),!1)}const T=()=>"object"==typeof window.todesktop&&window.todesktop.desktopifyVersion,$="undefined"!=typeof window&&window.todesktop,E=t=>async(e,n)=>{const o=((t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),""))(),i="*"===e?Object.keys(t):[e];for(const e of i){const i=t[e];null==$||$.on(i,n,o)}const r=N(t);return async()=>r(e,n,o)},N=t=>(e,n,o)=>{const i="*"===e?Object.keys(t):[e];for(const e of i){const i=t[e];null==$||$.off(i,n,o)}},{invoke:D,construct:j,releaseMemory:M}=function(t,e){const n={package:{name:"client-core",version:"1.0.0-dev"},invoke:{version:"1.0.0"}};return{invoke:function(t){const e={metadata:n,payload:{command:t}};return window.todesktop.invoke(e)},construct:function(t){const e={metadata:n,payload:{command:Object.assign(Object.assign({},t),{method:":new"})}};return window.todesktop.invoke(e)},releaseMemory:function(t){if(S("releaseMemory","4.6.0"))return(null==t?void 0:t.length)?window.todesktop.releaseMemory(t):void console.log("No memory references to release")}}}();var z;E({openProtocolURL:"open-protocol-url"});const R="undefined"!=typeof window&&window.todesktop,O=(t,e)=>({removeAllListeners:async(n,{ref:o}={})=>{e&&!S(`${t} removeAllListeners`,e)||(await D({instanceRef:o,namespace:t,method:"removeAllListeners",args:[n]}),window.todesktop.off(n))},on:async(n,o,{ref:i,preventDefault:r}={})=>{if(e&&!S(`${t} addEventListener`,e))return;const s=await D({instanceRef:i,namespace:t,eventName:n,eventOptions:{preventDefault:r}});return window.todesktop.on(s,((t,...e)=>{if(q(e[0])){const[,...t]=e;return o(...t)}return o(...e)})),()=>(async(n,{ref:o,eventId:i})=>{e&&!S(`${t} removeEventListener`,e)||(await D({instanceRef:o,namespace:t,eventName:n,eventId:i}),window.todesktop.off(i))})(n,{eventId:s,ref:i})}});null===(z=null==R?void 0:R.env)||void 0===z||z.NODE_ENV;const q=t=>B(t)&&"preventDefault"in t&&"sender"in t,B=t=>null!==t&&("function"==typeof t||"object"==typeof t),F=O("app");F.on,F.removeAllListeners;const H=O("electronUpdater");H.on,H.removeAllListeners;const Z=O("Menu");Z.on,Z.removeAllListeners,E({show:"menubar.show",hide:"menubar.hide"});const P=((t,e)=>{const n=O("BrowserWindow");return{removeAllListeners:n.removeAllListeners,on:(...e)=>((t,e)=>function(t,e){const n=t[0],o=n in e;return o&&function(t){console.warn(`[todesktop-client] ${t} is a legacy event and may be removed in future.\n        Contact support or look through our typescript files to find a suitable replacement.`)}(n),o}(t,e))(e,t)?E(t)(...e):n.on(...e)}})({enterFullscreen:"window.enter-full-screen",exitFullscreen:"window.leave-full-screen"});P.on,P.removeAllListeners;const U=O("Notification");U.on,U.removeAllListeners,E({start:"pushNotifications.start",error:"pushNotifications.error",tokenUpdate:"pushNotifications.tokenUpdate",receive:"pushNotifications.receive"});const J=O("screen");J.on,J.removeAllListeners;const V=O("Tray");V.on,V.removeAllListeners,E({navigate:"did-navigate"});const W=O("session","4.17.0");W.on,W.removeAllListeners;const G=new class{constructor(t,e){const n=window.localStorage;let o;this.getLocalStorage=()=>o||JSON.parse(n.getItem(t)||"[]"),this.setLocalStorage=e=>{n.setItem(t,JSON.stringify(o=e))},e&&e()}find(t,e){let n;e(this.getLocalStorage().filter((e=>{for(n in t)if(t[n]!==e[n])return!1;return!0})))}update(t,e){const n=t.id,o=this.getLocalStorage();let i,r=o.length;for(;r--;)if(o[r].id===n){for(i in t)o[r][i]=t[i];break}this.setLocalStorage(o),e&&e()}insert(t,e){const n=this.getLocalStorage();n.push(t),this.setLocalStorage(n),e&&e()}remove(t,e){let n;const o=this.getLocalStorage().filter((e=>{for(n in t)if(t[n]!==e[n])return!0;return!1}));this.setLocalStorage(o),e&&e(o)}count(t){this.find(w,(e=>{const n=e.length;let o=n,i=0;for(;o--;)i+=e[o].completed;t(n,n-i,i)}))}}("todos-vanilla-es6"),X=new class{itemList(t){return t.reduce(((t,e)=>{return t+`\n<li data-id="${e.id}"${e.completed?' class="completed"':""}>\n\t<div class="view">\n\t\t<input class="toggle" type="checkbox" ${e.completed?"checked":""}>\n\t\t<label>${n=e.title,n.replace(/[&<]/g,(t=>"&"===t?"&amp;":"&lt;"))}</label>\n    <img src="${e.icon||"https://raw.githubusercontent.com/ToDesktop/todesktop-mvc/main/assets/todomvc-logo.png"}" />\n\t\t<button class="destroy"></button>\n\t</div>\n</li>`;var n}),"")}itemCounter(t){return`${t} item${1!==t?"s":""} left`}},K=new class{constructor(t){this.template=t,this.$todoList=x(".todo-list"),this.$todoItemCounter=x(".todo-count"),this.$clearCompleted=x(".clear-completed"),this.$main=x(".main"),this.$toggleAll=x(".toggle-all"),this.$newTodo=x(".new-todo"),k(this.$todoList,"li label","dblclick",(({target:t})=>{this.editItem(t)}))}editItem(t){const e=t.parentElement.parentElement;e.classList.add("editing");const n=document.createElement("input");n.className="edit",n.value=t.innerText,e.appendChild(n),n.focus()}showItems(t){this.$todoList.innerHTML=this.template.itemList(t)}removeItem(t){const e=x(`[data-id="${t}"]`);e&&this.$todoList.removeChild(e)}setItemsLeft(t){this.$todoItemCounter.innerHTML=this.template.itemCounter(t)}setClearCompletedButtonVisibility(t){this.$clearCompleted.style.display=t?"block":"none"}setMainVisibility(t){this.$main.style.display=t?"block":"none"}setCompleteAllCheckbox(t){this.$toggleAll.checked=!!t}updateFilterButtons(t){x(".filters .selected").className="",x(`.filters [href="#/${t}"]`).className="selected"}clearNewTodo(){this.$newTodo.value=""}setItemComplete(t,e){const n=x(`[data-id="${t}"]`);n&&(n.className=e?"completed":"",x("input",n).checked=e)}editItemDone(t,e){const n=x(`[data-id="${t}"]`),o=x("input.edit",n);n.removeChild(o),n.classList.remove("editing"),x("label",n).textContent=e}bindAddItem(t){y(this.$newTodo,"change",(({target:e})=>{const n=e.value.trim();n&&t(n)}))}bindRemoveCompleted(t){y(this.$clearCompleted,"click",t)}bindToggleAll(t){y(this.$toggleAll,"click",(({target:e})=>{t(e.checked)}))}bindRemoveItem(t){k(this.$todoList,".destroy","click",(({target:e})=>{t(C(e))}))}bindToggleItem(t){k(this.$todoList,".toggle","click",(({target:e})=>{t(C(e),e.checked)}))}bindEditItemSave(t){k(this.$todoList,"li .edit","blur",(({target:e})=>{e.dataset.iscanceled||t(C(e),e.value.trim())}),!0),k(this.$todoList,"li .edit","keypress",(({target:t,keyCode:e})=>{13===e&&t.blur()}))}bindEditItemCancel(t){k(this.$todoList,"li .edit","keyup",(({target:e,keyCode:n})=>{27===n&&(e.dataset.iscanceled=!0,e.blur(),t(C(e)))}))}}(X),Q=new class{constructor(t,e){!async function(t,e){S("app:once","2.6.0")&&window.todesktop.app.once("bindToDesktopPlugins",e)}(0,(t=>{(0,L.B5)("CommandOrControl+Shift+.",(async t=>{const e=t.trim();if(e){const{owner:t}=await(0,I.getActiveWin)(),n=await(0,A.extractIcon)(t.path);!async function(t){window.todesktop.app.focus({steal:!0})}(),this.addItem(`Review ${e}`,n)}})),new ResizeObserver((t=>{for(let e of t)window.resizeTo(e.contentRect.width,e.contentRect.height)})).observe(document.querySelector("body")),window.addEventListener("unload",(()=>{(0,L.tr)("CommandOrControl+Shift+."),t()}))})),this.store=t,this.view=e,e.bindAddItem(this.addItem.bind(this)),e.bindEditItemSave(this.editItemSave.bind(this)),e.bindEditItemCancel(this.editItemCancel.bind(this)),e.bindRemoveItem(this.removeItem.bind(this)),e.bindToggleItem(((t,e)=>{this.toggleCompleted(t,e),this._filter()})),e.bindRemoveCompleted(this.removeCompletedItems.bind(this)),e.bindToggleAll(this.toggleAll.bind(this)),this._activeRoute="",this._lastActiveRoute=null}setView(t){const e=t.replace(/^#\//,"");this._activeRoute=e,this._filter(),this.view.updateFilterButtons(e)}addItem(t,e){this.store.insert({id:Date.now(),title:t,icon:e,completed:!1},(()=>{this.view.clearNewTodo(),this._filter(!0)}))}editItemSave(t,e){e.length?this.store.update({id:t,title:e},(()=>{this.view.editItemDone(t,e)})):this.removeItem(t)}editItemCancel(t){this.store.find({id:t},(e=>{const n=e[0].title;this.view.editItemDone(t,n)}))}removeItem(t){this.store.remove({id:t},(()=>{this._filter(),this.view.removeItem(t)}))}removeCompletedItems(){this.store.remove({completed:!0},this._filter.bind(this))}toggleCompleted(t,e){this.store.update({id:t,completed:e},(()=>{this.view.setItemComplete(t,e)}))}toggleAll(t){this.store.find({completed:!t},(e=>{for(let{id:n}of e)this.toggleCompleted(n,t)})),this._filter()}_filter(t){const e=this._activeRoute;(t||""!==this._lastActiveRoute||this._lastActiveRoute!==e)&&this.store.find({"":w,active:{completed:!1},completed:{completed:!0}}[e],this.view.showItems.bind(this.view)),this.store.count(((t,e,n)=>{!async function(t){window.todesktop.app.setBadgeCount(t)}(e),this.view.setItemsLeft(e),this.view.setClearCompletedButtonVisibility(n),this.view.setCompleteAllCheckbox(n===t),this.view.setMainVisibility(t)})),this._lastActiveRoute=e}}(G,K),Y=()=>Q.setView(document.location.hash);y(window,"load",Y),y(window,"hashchange",Y)})()})();