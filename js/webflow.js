/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){var i={},r={},o=[],a=window.Webflow||[],s=window.jQuery,u=s(window),c=s(document),l=s.isFunction,f=i._=n(4),h=n(1)&&s.tram,d=!1,p=!1;function m(t){i.env()&&(l(t.design)&&u.on("__wf_design",t.design),l(t.preview)&&u.on("__wf_preview",t.preview)),l(t.destroy)&&u.on("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){if(d)return void t.ready();if(f.contains(o,t.ready))return;o.push(t.ready)}(t)}function v(t){l(t.design)&&u.off("__wf_design",t.design),l(t.preview)&&u.off("__wf_preview",t.preview),l(t.destroy)&&u.off("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){o=f.filter(o,function(e){return e!==t.ready})}(t)}h.config.hideBackface=!1,h.config.keepInherited=!0,i.define=function(t,e,n){r[t]&&v(r[t]);var i=r[t]=e(s,f,n)||{};return m(i),i},i.require=function(t){return r[t]},i.push=function(t){d?l(t)&&t():a.push(t)},i.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var w,b=navigator.userAgent.toLowerCase(),g=i.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,y=i.env.chrome=/chrome/.test(b)&&/Google/.test(navigator.vendor)&&parseInt(b.match(/chrome\/(\d+)\./)[1],10),x=i.env.ios=/(ipod|iphone|ipad)/.test(b);i.env.safari=/safari/.test(b)&&!y&&!x,g&&c.on("touchstart mousedown",function(t){w=t.target}),i.validClick=g?function(t){return t===w||s.contains(t,w)}:function(){return!0};var k,_="resize.webflow orientationchange.webflow load.webflow";function z(t,e){var n=[],i={};return i.up=f.throttle(function(t){f.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(f.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?f.filter(n,function(e){return e!==t}):[]},i}function j(t){l(t)&&t()}function E(){k&&(k.reject(),u.off("load",k.resolve)),k=new s.Deferred,u.on("load",k.resolve)}i.resize=z(u,_),i.scroll=z(u,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),i.redraw=z(),i.location=function(t){window.location=t},i.env()&&(i.location=function(){}),i.ready=function(){d=!0,p?(p=!1,f.each(r,m)):f.each(o,j),f.each(a,j),i.resize.up()},i.load=function(t){k.then(t)},i.destroy=function(t){t=t||{},p=!0,u.triggerHandler("__wf_destroy"),null!=t.domready&&(d=t.domready),f.each(r,v),i.resize.off(),i.scroll.off(),i.redraw.off(),o=[],a=[],"pending"===k.state()&&E()},s(i.ready),E(),t.exports=window.Webflow=i},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window.tram=function(t){function e(t,e){return(new R.Bare).init(t,e)}function i(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function s(t,e,n){c("Units do not match ["+t+"]: "+e+", "+n)}function u(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return J.test(t)||!V.test(t)?i=parseInt(t,10):V.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i==i?i:n}function c(t){H.debug&&window&&window.console.warn(t)}var l=function(t,e,i){function r(t){return"object"==(void 0===t?"undefined":n(t))}function o(t){return"function"==typeof t}function a(){}return function n(s,u){function c(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}u===i&&(u=s,s=Object),c.Bare=l;var f,h=a[t]=s[t],d=l[t]=c[t]=new a;return d.constructor=c,c.mixin=function(e){return l[t]=c[t]=n(c,e)[t],c},c.open=function(t){if(f={},o(t)?f=t.call(c,d,h,c,s):r(t)&&(f=t),r(f))for(var n in f)e.call(f,n)&&(d[n]=f[n]);return o(d.init)||(d.init=s),c},c.open(u)}}("prototype",{}.hasOwnProperty),f={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},h={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,m="bkwld-tram",v=/[\-\.0-9]/g,w=/[A-Z]/,b="number",g=/^(rgb|#)/,y=/(em|cm|mm|in|pt|pc|px)$/,x=/(em|cm|mm|in|pt|pc|px|%)$/,k=/(deg|rad|turn)$/,_="unitless",z=/(all|none) 0s ease 0s/,j=/^(width|height)$/,E=" ",T=d.createElement("a"),M=["Webkit","Moz","O","ms"],q=["-webkit-","-moz-","-o-","-ms-"],A=function(t){if(t in T.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<M.length;e++)if((n=M[e]+i)in T.style)return{dom:n,css:q[e]+t}},$=e.support={bind:Function.prototype.bind,transform:A("transform"),transition:A("transition"),backface:A("backface-visibility"),timing:A("transition-timing-function")};if($.transition){var O=$.timing.dom;if(T.style[O]=f["ease-in-back"][0],!T.style[O])for(var S in h)f[S][0]=h[S]}var L=e.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&$.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),D=e.now=function(){var t=p.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&$.bind?e.bind(t):Date.now||function(){return+new Date}}(),F=l(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}((""+t).split(E)),i=n[0];e=e||{};var r=Z[i];if(!r)return c("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function o(t,e,i){if(t){var o=void 0===t?"undefined":n(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new C({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":l.call(this);break;case"stop":s.call(this);break;case"redraw":f.call(this);break;default:r.call(this,t,i&&i[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var c=0;d.call(this,t,function(t,e){t.span>c&&(c=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(c=u(t.wait,0))}),h.call(this),c>0&&(this.timer=new C({duration:c,context:this}),this.active=!0,e&&(this.timer.complete=a));var p=this,m=!1,v={};L(function(){d.call(p,t,function(t){t.active&&(m=!0,v[t.name]=t.nextStyle)}),m&&p.$el.css(v)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function s(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==(void 0===t?"undefined":n(t))&&null!=t?t:this.props,d.call(this,e,p),h.call(this)}function l(){s.call(this),this.el.style.display="none"}function f(){this.el.offsetHeight}function h(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[$.transition.dom]=n)}function d(t,e,n){var o,a,s,u,c=e!==p,l={};for(o in t)s=t[o],o in Q?(l.transform||(l.transform={}),l.transform[o]=s):(w.test(o)&&(o=i(o)),o in Z?l[o]=s:(u||(u={}),u[o]=s));for(o in l){if(s=l[o],!(a=this.props[o])){if(!c)continue;a=r.call(this,o)}e.call(this,a,s)}n&&u&&n.call(this,u)}function p(t){t.stop()}function v(t,e){t.set(e)}function b(t){this.$el.css(t)}function g(t,n){e[t]=function(){return this.children?function(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,H.keepInherited&&!H.fallback){var n=G(this.el,"transition");n&&!z.test(n)&&(this.upstream=n)}$.backface&&H.hideBackface&&Y(this.el,$.backface.css,"hidden")},g("add",r),g("start",o),g("wait",function(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new C({duration:t,context:this,complete:a}),this.active=!0)}),g("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):c("No active transition timer. Use start() or wait() before then().")}),g("next",a),g("stop",s),g("set",function(t){s.call(this,t),d.call(this,t,v,b)}),g("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),g("hide",l),g("redraw",f),g("destroy",function(){s.call(this),t.removeData(this.el,m),this.$el=this.el=null})}),R=l(F,function(e){function n(e,n){var i=t.data(e,m)||t.data(e,m,new F.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),P=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function i(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var r=500,a="ease",s=0;t.init=function(t,e,n,i){this.$el=t,this.el=t[0];var o=e[0];n[2]&&(o=n[2]),W[o]&&(o=W[o]),this.name=o,this.type=n[1],this.duration=u(e[1],this.duration,r),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in f?t:n}(e[2],this.ease,a),this.delay=u(e[3],this.delay,s),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=j.test(this.name),this.unit=i.unit||this.unit||H.defaultUnit,this.angle=i.angle||this.angle||H.defaultAngle,H.fallback||i.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+E+this.duration+"ms"+("ease"!=this.ease?E+f[this.ease][0]:"")+(this.delay?E+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new B({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return G(this.el,this.name)},t.update=function(t){Y(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,Y(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var r,o="number"==typeof t,a="string"==typeof t;switch(e){case b:if(o)return t;if(a&&""===t.replace(v,""))return+t;r="number(unitless)";break;case g:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:i(t)}r="hex or rgb string";break;case y:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit)";break;case x:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit or %)";break;case k:if(o)return t+this.angle;if(a&&e.test(t))return t;r="number(deg) or string(angle)";break;case _:if(o)return t;if(a&&x.test(t))return t;r="number(unitless) or string(unit or %)"}return function(t,e){c("Type warning: Expected: ["+t+"] Got: ["+(void 0===e?"undefined":n(e))+"] "+e)}(r,t),t},t.redraw=function(){this.el.offsetHeight}}),I=l(P,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),g))}}),N=l(P,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),X=l(P,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)r=(o=Q[n])[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},Q.perspective&&H.perspective&&(this.current.perspective=H.perspective,Y(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),Y(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new U({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new U({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){Y(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),B=l(function(e){function n(){var t,e,i,r=u.length;if(r)for(L(n),e=D(),t=r;t--;)(i=u[t])&&i.render(e)}var i={ease:f.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||i.ease;f[e]&&(e=f[e][1]),"function"!=typeof e&&(e=i.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=i.from),void 0===r&&(r=i.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=D(),!1!==t.autoplay&&this.play()},e.play=function(){var t;this.active||(this.start||(this.start=D()),this.active=!0,t=this,1===u.push(t)&&L(n))},e.stop=function(){var e,n,i;this.active&&(this.active=!1,e=this,(i=t.inArray(e,u))>=0&&(n=u.slice(i+1),u.length=i,n.length&&(u=u.concat(n))))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,i):function(t){return Math.round(t*c)/c}(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(v,"");n!==t.replace(v,"")&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var u=[],c=1e3}),C=l(B,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),U=l(B,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new B({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),H=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!$.transition,agentTests:[]};e.fallback=function(t){if(!$.transition)return H.fallback=!0;H.agentTests.push("("+t+")");var e=new RegExp(H.agentTests.join("|"),"i");H.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new B(t)},e.delay=function(t,e,n){return new C({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var Y=t.style,G=t.css,W={transform:$.transform&&$.transform.css},Z={color:[I,g],background:[I,g,"background-color"],"outline-color":[I,g],"border-color":[I,g],"border-top-color":[I,g],"border-right-color":[I,g],"border-bottom-color":[I,g],"border-left-color":[I,g],"border-width":[P,y],"border-top-width":[P,y],"border-right-width":[P,y],"border-bottom-width":[P,y],"border-left-width":[P,y],"border-spacing":[P,y],"letter-spacing":[P,y],margin:[P,y],"margin-top":[P,y],"margin-right":[P,y],"margin-bottom":[P,y],"margin-left":[P,y],padding:[P,y],"padding-top":[P,y],"padding-right":[P,y],"padding-bottom":[P,y],"padding-left":[P,y],"outline-width":[P,y],opacity:[P,b],top:[P,x],right:[P,x],bottom:[P,x],left:[P,x],"font-size":[P,x],"text-indent":[P,x],"word-spacing":[P,x],width:[P,x],"min-width":[P,x],"max-width":[P,x],height:[P,x],"min-height":[P,x],"max-height":[P,x],"line-height":[P,_],"scroll-top":[N,b,"scrollTop"],"scroll-left":[N,b,"scrollLeft"]},Q={};$.transform&&(Z.transform=[X],Q={x:[x,"translateX"],y:[x,"translateY"],rotate:[k],rotateX:[k],rotateY:[k],scale:[b],scaleX:[b],scaleY:[b],skew:[k],skewX:[k],skewY:[k]}),$.transform&&$.backface&&(Q.z=[x,"translateZ"],Q.rotateZ=[k],Q.scaleZ=[b],Q.perspective=[y]);var J=/ms/,V=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){n(3),n(6),n(7),n(9),n(10),t.exports=n(11)},function(t,e,n){var i=n(0),r=n(5);i.define("backgroundVideo",t.exports=function(t){return{ready:function(){if(!i.env()){var e=t(document).find(".w-background-video").not(".w-background-video-atom");0!==e.length&&e.each(function(e,n){var i=function(e){var n=t(e).data();if(n.videoUrls){if(r.isMobile())return n.posterUrl?t('<div class="w-background-video-poster">').css({backgroundImage:"url("+n.posterUrl+")",backgroundSize:"cover",backgroundPosition:"50% 50%",position:"absolute",zIndex:-100,width:"100%",height:"100%",top:0,left:0}):void 0;var i=n.videoUrls.split(",").map(function(e){return t("<source />").attr({src:e,"data-wf-ignore":""})}),o=t("<video />").attr({autoplay:n.autoplay,loop:n.loop}).css("background-image","url("+n.posterUrl+")");return o.append(i),o}}(n);i&&t(n).prepend(i)})}}}})},function(t,e,n){var i=window.$,r=n(1)&&i.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,i=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),u=n.forEach,c=n.map,l=(n.reduce,n.reduceRight,n.filter),f=(n.every,n.some),h=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),p=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else{var s=t.keys(n);for(o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(p(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return m(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(p(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var m=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:f&&n.some===f?n.some(i,r):(p(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(h&&t.indexOf===h?-1!=t.indexOf(e):m(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,r.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function c(){var l=t.now()-s;l<n?r=setTimeout(c,n-l):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var l=i&&!r;return r||(r=setTimeout(c,n)),l&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var v=/(.)^/,w={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},b=/\\|'|\r|\n|\u2028|\u2029/g,g=function(t){return"\\"+w[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||v).source,(n.interpolate||v).source,(n.evaluate||v).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(b,g),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()},function(t,e){e.isMobile=function(){var t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}},function(t,e,n){var i=n(0);i.define("brand",t.exports=function(t){var e,n={},r=t("html"),o=t("body"),a=".w-webflow-badge",s=window.location,u=/PhantomJS/i.test(navigator.userAgent);function c(){var t=o.children(a),n=t.length&&t.get(0)===e,r=i.env("editor");n?r&&t.remove():(t.length&&t.remove(),r||o.append(e))}return n.ready=function(){var n,i,o,a=r.attr("data-wf-status"),l=r.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(l)&&s.hostname!==l&&(a=!0),a&&!u&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),i=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({marginRight:"8px",width:"16px"}),o=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"),n.append(i,o),n[0]),c(),setTimeout(c,500))},n})},function(t,e,n){var i=n(0);i.define("forms",t.exports=function(t,e){var r={};n(8);var o,a,s,u=t(document),c=window.location,l=window.XDomainRequest&&!window.atob,f=".w-form",h=/e(-)?mail/i,d=/^\S+@\S+$/,p=window.alert,m=i.env(),v=/list-manage[1-9]?.com/i,w=e.debounce(function(){p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")},100);function b(e,n){var i=t(n),r=t.data(n,f);r||(r=t.data(n,f,{form:i})),g(r);var o=i.closest("div.w-form");r.done=o.find("> .w-form-done"),r.fail=o.find("> .w-form-fail");var s=r.action=i.attr("action");r.handler=null,r.redirect=i.attr("data-redirect"),v.test(s)?r.handler=_:s||(a?r.handler=k:w())}function g(t){var e=t.btn=t.form.find(':input[type="submit"]');t.wait=t.btn.attr("data-wait")||null,t.success=!1,e.prop("disabled",!1),t.label&&e.val(t.label)}function y(t){var e=t.btn,n=t.wait;e.prop("disabled",!0),n&&(t.label=e.val(),e.val(n))}function x(e,n){var i=null;return n=n||{},e.find(':input:not([type="submit"])').each(function(r,o){var a=t(o),s=a.attr("type"),u=a.attr("data-name")||a.attr("name")||"Field "+(r+1),c=a.val();if("checkbox"===s&&(c=a.is(":checked")),"radio"===s){if(null===n[u]||"string"==typeof n[u])return;c=e.find('input[name="'+a.attr("name")+'"]:checked').val()||null}"string"==typeof c&&(c=t.trim(c)),n[u]=c,i=i||function(t,e,n,i){var r=null;"password"===e?r="Passwords cannot be submitted.":t.attr("required")&&(i?(h.test(n)||h.test(t.attr("type")))&&(d.test(i)||(r="Please enter a valid email address for: "+n)):r="Please fill out the required field: "+n);return r}(a,s,u,c)}),i}function k(e){g(e);var n=e.form,r={name:n.attr("data-name")||n.attr("name")||"Untitled Form",source:c.href,test:i.env(),fields:{},dolphin:/pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())};j(e);var o=x(n,r.fields);if(o)return p(o);if(y(e),a){var s="https://webflow.com/api/v1/form/"+a;l&&s.indexOf("https://webflow.com")>=0&&(s=s.replace("https://webflow.com","http://formdata.webflow.com")),t.ajax({url:s,type:"POST",data:r,dataType:"json",crossDomain:!0}).done(function(){e.success=!0,z(e)}).fail(function(){z(e)})}else z(e)}function _(n){g(n);var i=n.form,r={};if(!/^https/.test(c.href)||/^https/.test(n.action)){j(n);var o,a=x(i,r);if(a)return p(a);y(n),e.each(r,function(t,e){h.test(e)&&(r.EMAIL=t),/^((full[ _-]?)?name)$/i.test(e)&&(o=t),/^(first[ _-]?name)$/i.test(e)&&(r.FNAME=t),/^(last[ _-]?name)$/i.test(e)&&(r.LNAME=t)}),o&&!r.FNAME&&(o=o.split(" "),r.FNAME=o[0],r.LNAME=r.LNAME||o[1]);var s=n.action.replace("/post?","/post-json?")+"&c=?",u=s.indexOf("u=")+2;u=s.substring(u,s.indexOf("&",u));var l=s.indexOf("id=")+3;l=s.substring(l,s.indexOf("&",l)),r["b_"+u+"_"+l]="",t.ajax({url:s,data:r,dataType:"jsonp"}).done(function(t){n.success="success"===t.result||/already/.test(t.msg),n.success||console.info("MailChimp error: "+t.msg),z(n)}).fail(function(){z(n)})}else i.attr("method","post")}function z(t){var e=t.form,n=t.redirect,r=t.success;r&&n?i.location(n):(t.done.toggle(r),t.fail.toggle(!r),e.toggle(!r),g(t))}function j(t){t.evt&&t.evt.preventDefault(),t.evt=null}return r.ready=r.design=r.preview=function(){!function(){if(a=t("html").attr("data-wf-site"),!(o=t(f+" form")).length)return;o.each(b)}(),m||s||(s=!0,u.on("submit",f+" form",function(e){var n=t.data(this,f);n.handler&&(n.evt=e,n.handler(n))}))},r})},function(t,e){
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3
 * 2014-12-16 WEBFLOW - Removed UMD wrapper
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * @license MIT (/blob/master/LICENSE.txt)
 */
t.exports=function(t){if(!t.support.cors&&t.ajaxTransport&&window.XDomainRequest){var e=/^https?:\/\//i,n=/^get|post$/i,i=new RegExp("^"+location.protocol,"i");t.ajaxTransport("* text html xml json",function(r,o,a){if(r.crossDomain&&r.async&&n.test(r.type)&&e.test(r.url)&&i.test(r.url)){var s=null;return{send:function(e,n){var i="",a=(o.dataType||"").toLowerCase();s=new XDomainRequest,/^\d+$/.test(o.timeout)&&(s.timeout=o.timeout),s.ontimeout=function(){n(500,"timeout")},s.onload=function(){var e="Content-Length: "+s.responseText.length+"\r\nContent-Type: "+s.contentType,i={code:200,message:"success"},r={text:s.responseText};try{if("html"===a||/text\/html/i.test(s.contentType))r.html=s.responseText;else if("json"===a||"text"!==a&&/\/json/i.test(s.contentType))try{r.json=t.parseJSON(s.responseText)}catch(t){i.code=500,i.message="parseerror"}else if("xml"===a||"text"!==a&&/\/xml/i.test(s.contentType)){var o=new ActiveXObject("Microsoft.XMLDOM");o.async=!1;try{o.loadXML(s.responseText)}catch(t){o=void 0}if(!o||!o.documentElement||o.getElementsByTagName("parsererror").length)throw i.code=500,i.message="parseerror","Invalid XML: "+s.responseText;r.xml=o}}catch(t){throw t}finally{n(i.code,i.message,r,e)}},s.onprogress=function(){},s.onerror=function(){n(500,"error",{text:s.responseText})},o.data&&(i="string"===t.type(o.data)?o.data:t.param(o.data)),s.open(r.type,r.url),s.send(i)},abort:function(){s&&s.abort()}}}})}}(window.jQuery)},function(t,e,n){var i=n(0);i.define("links",t.exports=function(t,e){var n,r,o,a={},s=t(window),u=i.env(),c=window.location,l=document.createElement("a"),f="w--current",h=/^#[\w:.-]+$/,d=/index\.(html|php)$/,p=/\/$/;function m(e){var i=n&&e.getAttribute("href-disabled")||e.getAttribute("href");if(l.href=i,!(i.indexOf(":")>=0)){var a=t(e);if(0===i.indexOf("#")&&h.test(i)){var s=t(i);s.length&&r.push({link:a,sec:s,active:!1})}else if("#"!==i&&""!==i){var u=l.href===c.href||i===o||d.test(i)&&p.test(o);w(a,f,u)}}}function v(){var t=s.scrollTop(),n=s.height();e.each(r,function(e){var i=e.link,r=e.sec,o=r.offset().top,a=r.outerHeight(),s=.5*n,u=r.is(":visible")&&o+a-s>=t&&o+s<=t+n;e.active!==u&&(e.active=u,w(i,f,u))})}function w(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}return a.ready=a.design=a.preview=function(){n=u&&i.env("design"),o=i.env("slug")||c.pathname||"",i.scroll.off(v),r=[];for(var t=document.links,e=0;e<t.length;++e)m(t[e]);r.length&&(i.scroll.on(v),v())},a})},function(t,e,n){var i=n(0);i.define("scroll",t.exports=function(t){var e=t(document),n=window,r=n.location,o=function(){try{return Boolean(n.frameElement)}catch(t){return!0}}()?null:n.history,a=/^[a-zA-Z0-9][\w:.-]*$/;function s(e,s){if(a.test(e)){var u=t("#"+e);if(u.length){if(s&&(s.preventDefault(),s.stopPropagation()),r.hash!==e&&o&&o.pushState&&(!i.env.chrome||"file:"!==r.protocol))(o.state&&o.state.hash)!==e&&o.pushState({hash:e},"","#"+e);var c=i.env("editor")?".w-editor-body":"body",l=t("header, "+c+" > .header, "+c+" > .w-nav:not([data-no-scroll])"),f="fixed"===l.css("position")?l.outerHeight():0;n.setTimeout(function(){!function(e,i){var r=t(n).scrollTop(),o=e.offset().top-i;if("mid"===e.data("scroll")){var a=t(n).height()-i,s=e.outerHeight();s<a&&(o-=Math.round((a-s)/2))}var u=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(u=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(t){n.setTimeout(t,15)},f=(472.143*Math.log(Math.abs(r-o)+125)-2e3)*u;!function t(){var e=Date.now()-c;n.scroll(0,function(t,e,n,i){if(n>i)return e;return t+(e-t)*(r=n/i,r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r}(r,o,e,f)),e<=f&&l(t)}()}(u,f)},s?0:300)}}}return{ready:function(){r.hash&&s(r.hash.substring(1));var n=r.href.split("#")[0];e.on("click","a",function(e){if(!(i.env("design")||window.$.mobile&&t(e.currentTarget).hasClass("ui-link")))if("#"!==this.getAttribute("href")){var r=this.href.split("#"),o=r[0]===n?r[1]:null;o&&s(o,e)}else e.preventDefault()})}}})},function(t,e,n){n(0).define("touch",t.exports=function(t){var e={},n=!document.addEventListener,i=window.getSelection;function r(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}return n&&(t.event.special.tap={bindType:"click",delegateType:"click"}),e.init=function(e){return n?null:(e="string"==typeof e?t(e).get(0):e)?new function(t){var e,n,o,a=!1,s=!1,u=!1,c=Math.min(Math.round(.04*window.innerWidth),40);function l(t){var i=t.touches;i&&i.length>1||(a=!0,s=!1,i?(u=!0,e=i[0].clientX,n=i[0].clientY):(e=t.clientX,n=t.clientY),o=e)}function f(t){if(a){if(u&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var l=t.touches,f=l?l[0].clientX:t.clientX,h=l?l[0].clientY:t.clientY,p=f-o;o=f,Math.abs(p)>c&&i&&""===String(i())&&(r("swipe",t,{direction:p>0?"right":"left"}),d()),(Math.abs(f-e)>10||Math.abs(h-n)>10)&&(s=!0)}}function h(t){if(a){if(a=!1,u&&"mouseup"===t.type)return t.preventDefault(),t.stopPropagation(),void(u=!1);s||r("tap",t)}}function d(){a=!1}t.addEventListener("touchstart",l,!1),t.addEventListener("touchmove",f,!1),t.addEventListener("touchend",h,!1),t.addEventListener("touchcancel",d,!1),t.addEventListener("mousedown",l,!1),t.addEventListener("mousemove",f,!1),t.addEventListener("mouseup",h,!1),t.addEventListener("mouseout",d,!1),this.destroy=function(){t.removeEventListener("touchstart",l,!1),t.removeEventListener("touchmove",f,!1),t.removeEventListener("touchend",h,!1),t.removeEventListener("touchcancel",d,!1),t.removeEventListener("mousedown",l,!1),t.removeEventListener("mousemove",f,!1),t.removeEventListener("mouseup",h,!1),t.removeEventListener("mouseout",d,!1),t=null}}(e):null},e.instance=e.init(document),e})}]);