/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("ï»؟ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
//jQuery.XDomainRequest.js
//Author: Jason Moon - @JSONMOON
//IE8+
(function($){

	if (!$.support.cors && $.ajaxTransport && window.XDomainRequest) {
		var httpRegEx = /^https?:\/\//i;
		var getOrPostRegEx = /^get|post$/i;
		var sameSchemeRegEx = new RegExp('^'+location.protocol, 'i');
		var htmlRegEx = /text\/html/i;
		var jsonRegEx = /\/json/i;
		var xmlRegEx = /\/xml/i;

		// ajaxTransport exists in jQuery 1.5+
		$.ajaxTransport('* text html xml json', function(options, userOptions, jqXHR){
			// XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page
			if (options.crossDomain && options.async && getOrPostRegEx.test(options.type) && httpRegEx.test(options.url) && sameSchemeRegEx.test(options.url)) {
				var xdr = null;
				var userType = (userOptions.dataType||'').toLowerCase();
				return {
					send: function(headers, complete){
						xdr = new XDomainRequest();
						if (/^\d+$/.test(userOptions.timeout)) {
							xdr.timeout = userOptions.timeout;
						}
						xdr.ontimeout = function(){
							complete(500, 'timeout');
						};
						xdr.onload = function(){
							var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
							var status = {
									code: 200,
									message: 'success'
							};
							var responses = {
									text: xdr.responseText
							};
							try {
								if (userType === 'html' || htmlRegEx.test(xdr.contentType)) {
									responses.html = xdr.responseText;
								} else if (userType === 'json' || (userType !== 'text' && jsonRegEx.test(xdr.contentType))) {
									try {
										responses.json = $.parseJSON(xdr.responseText);
									} catch(e) {
										status.code = 500;
										status.message = 'parseerror';
										//throw 'Invalid JSON: ' + xdr.responseText;
									}
								} else if (userType === 'xml' || (userType !== 'text' && xmlRegEx.test(xdr.contentType))) {
									var doc = new ActiveXObject('Microsoft.XMLDOM');
									doc.async = false;
									try {
										doc.loadXML(xdr.responseText);
									} catch(e) {
										doc = undefined;
									}
									if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
										status.code = 500;
										status.message = 'parseerror';
										throw 'Invalid XML: ' + xdr.responseText;
									}
									responses.xml = doc;
								}
							} catch(parseMessage) {
								throw parseMessage;
							} finally {
								complete(status.code, status.message, responses, allResponseHeaders);
							}
						};
						// set an empty handler for 'onprogress' so requests don't get aborted
						xdr.onprogress = function(){};
						xdr.onerror = function(){
							complete(500, 'error', {
								text: xdr.responseText
							});
						};
						var postData = '';
						if (userOptions.data) {
							postData = ($.type(userOptions.data) === 'string') ? userOptions.data : $.param(userOptions.data);
						}
						xdr.open(options.type, options.url);
						xdr.send(postData);
					},
					abort: function(){
						if (xdr) {
							xdr.abort();
						}
					}
				};
			}
		});
	}

})(jQuery);


//Fix for IE8 and IE9 doesn't have console.log method
if(!window.console){
	window.console = {log:function(log){}};
}

//Fix for IE8 and IE9 doesn't have trim method
if(!String.prototype.trim){
	''.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,'')})
}
//Fix for IE8 and IE9 doesn't have indexOf method
if (!Array.prototype.indexOf)
{
	Array.prototype.indexOf = function(elt /*, from*/)
	{
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		from = (from < 0)
		? Math.ceil(from)
				: Math.floor(from);
		if (from < 0)
			from += len;

		for (; from < len; from++)
		{
			if (from in this &&
					this[from] === elt)
				return from;
		}
		return -1;
	};
}

//Fix for IE8 doesn't have .now method of Date function.
if (!Date.now) {
	Date.now = function now() {
		return new Date().getTime();
	};
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//Fix for IE8 doesn't have .keys method of Object function.
if (!Object.keys) {
	Object.keys = (function () {
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty,
		hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
		dontEnums = [
		             'toString',
		             'toLocaleString',
		             'valueOf',
		             'hasOwnProperty',
		             'isPrototypeOf',
		             'propertyIsEnumerable',
		             'constructor'
		             ],
		             dontEnumsLength = dontEnums.length;

		return function (obj) {
			if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [], prop, i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}());
}
//Modify ServerName based on platform R2 for R3 static pages and R3 for all R3 pages				
	var serverName = "R4";	

    var requestDTO = new Object();
    //alert(location);
    requestDTO.completeURL=window.location.href;
    requestDTO.serverName="R4";
    requestDTO.cookies=str_obj(document.cookie);
	requestDTO.userAgent=navigator.userAgent;
    //alert(JSON.stringify(requestDTO));
   
	//var incomingDomain = window.location.hostname;

	var incomingDomain = "" ;

	if (document.referrer !=null && document.referrer != ""){
		incomingDomain = getDomainName (document.referrer);
	  }

    	try{	
    var url =  location.protocol+"//" + location.host +'/redirectorpresentationservice/rest/redirect/post';
    $.support.cors = true;

	var request = $
			.ajax({
				url : url,
                type : 'POST',
                contentType :'application/json',
				async : false,
    			data :JSON.stringify(requestDTO),
				crossDomain : true,
				timeout: 5000,
				complete : function(r) {
				if(r.responseText){
                 	var jsonObject = JSON.parse(r.responseText);
                    //alert(r.responseText);
					//console.log('Redirector JS Called from independent file for '+url);
					var date = new Date();
					var cookieAgeType = "relative" ; //absolute
					var cookieTimeZone = "EST" ; //Change this variable with the time zone you want to set 
					var EST = -5;
					var PST = -8 ; 
					var CST = -6;
					var expires = "; expires=";

					if (cookieAgeType == "relative") {									
						if(cookieTimeZone == "EST" ){
							date.setTime(date.getTime() + setCookieToMidnight(EST));										
						} 	else if (cookieTimeZone == "PST"){
							date.setTime(date.getTime() + setCookieToMidnight(PST));
						}	else if (cookieTimeZone == "CST"){
							date.setTime(date.getTime() + setCookieToMidnight(CST));
						}
						expires = expires + date.toGMTString();									
					} else 	{				

					date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
					expires =expires + date.toGMTString();								
				    }
                    //alert ("r.status : "+ r.status) 
					if (r.status == 200) {
                        //alert("Action : "+jsonObject["action"]);

                        if (jsonObject["action"] == 'EXECUTION') {	
                              var cokieObj = jsonObject["cookies"];
		  		 			  for (var key in cokieObj) {
                                  if ("ADD" == cokieObj[key].status || "UPDATE" == cokieObj[key].status  ){
                                   // alert ("key : "+key+" value: "+ cokieObj[key].value+ " Status: "+ cokieObj[key].status);	
									document.cookie = key + "="+ cokieObj[key].value + expires + "; path=/";
                                  }  else if ("DELETE" == cokieObj[key].status){
									document.cookie = key + "=;"+ "expires=Thu, 01 Jan 1970 00:00:01 GMT" + "; path=/";
                                  }
		  					}
 							var jsUrl=jsonObject["executionFile"];
                             $.getScript(jsUrl, function(){
   								console.log("Script loaded and executed."+jsUrl); 
                                    });

						} else if (jsonObject["action"] != 'NOACTION') {	
                              var cokieObj = jsonObject["cookies"];
		  		 			  for (var key in cokieObj) {
                                  if ("ADD" == cokieObj[key].status || "UPDATE" == cokieObj[key].status  ){
                                   // alert ("key : "+key+" value: "+ cokieObj[key].value+ " Status: "+ cokieObj[key].status);	
									document.cookie = key + "="+ cokieObj[key].value + expires + "; path=/";
                                  }  else if ("DELETE" == cokieObj[key].status){
									document.cookie = key + "=;"+ "expires=Thu, 01 Jan 1970 00:00:01 GMT" + "; path=/";
                                  }
		  					}

							var destination = jsonObject["destinationURL"];
                            var hasthrottled = "false";
							var throttlingQueryParam = "";

                            var outgoingDomain  = getDomainName(destination);
                             var isSameDomain = "no";

							 if (outgoingDomain == incomingDomain)
							 {
								 isSameDomain = "yes" ;
							 }

							if ( document.referrer !=null && document.referrer != "" && isSameDomain != "yes"  )
							{
                                //removing throttling related tag if present and will be added after the referrer url.
       
								
                               
								throttlingQueryParam = getParamFromKey(destination,"tid");
									
									if(throttlingQueryParam != undefined && throttlingQueryParam.length > 0){
                                destination = destination.substr(0,destination.length-throttlingQueryParam.length-1);
                                hasthrottled = "true";
									}
                            
								//if (destination.indexOf("?") < 0){

								//	destination += "?" + "redref" + "=" + encodeURIComponent(document.referrer);
								//} else {
								//	destination += "&" + "redref" + "=" + encodeURIComponent(document.referrer);
								//}
                                //
                                var redRefValue =  removeURLParam(document.referrer , 'redref');
								destination = updateQueryStringParameter(destination , 'redref',redRefValue);
                                //adding the throttling related tag at the end of the query parameter.
                                if( hasthrottled == "true") {
								 destination += "&"+throttlingQueryParam;
                                }

							}

                           // alert('destinationURL : '+ destination) 
							window.location = destination;
						} else {
							//Set R3 for R3 application . Set R2 for R2 Static pages.
							document.cookie = "SERVER_COOKIE=R4" + expires
									+ "; path=/";
						}
					}
				}
				}
			});

}catch(err)
{
	
}
        function str_obj(str) {
		if(str){
            str = str.split(';');
            var result = {};
            for (var i = 0; i < str.length; i++) {
                var cur = str[i].split('=');
               // result[cur[0].trim()] = cur[1].trim();
                result[$.trim(cur[0])] = $.trim(cur[1]);
              }
			}
            return result;
        } 

		 function removeTstatusAndSetThrottleStatus(str) {
			var qstr =  getParamFromKey(str, 'tid') ;
			var tempString = "";
             var strLen = 0;
             if(qstr){
               strLen=qstr.length;
			   requestDTO.throttleStatus="TRUE";
             }            

			if (qstr)
            {
				tempString =str.substr(0,str.length-strLen-1);
            }  else {
				tempString = str.substr(0,str.length-strLen);
			}

			return tempString;
    
          }

	function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
		for ( var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

        function setCookieToMidnight(timeZoneOffSet) {
        
            var crntdateInRelativeTZ = new calcTime(timeZoneOffSet);				
            var midnightDate = new Date(crntdateInRelativeTZ.getFullYear(),
                    crntdateInRelativeTZ.getMonth(), crntdateInRelativeTZ.getDate(),
                    24, 0, 0);
            return midnightDate.getTime() - crntdateInRelativeTZ.getTime();
        }
        
        function calcTime(offset) {
            var d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            newDateWithOffset = new Date(utc + (3600000 * offset));
            return newDateWithOffset;
        }
		function updateQueryStringParameter(uri, key, value) {
	  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
		 if (uri.match(re)) {
		 return uri.replace(re, '$1' + key + "=" + value + '$2');
		} else {
		 return uri + separator + key + "=" + value;
		 }
	 }

	function removeURLParam(url, param)
	{
		var urlparts= url.split('?');
		if (urlparts.length>=2)
		 {
		 var prefix= encodeURIComponent(param)+'=';
		 var pars= urlparts[1].split(/[&;]/g);
		 for (var i=pars.length; i-- > 0;)
		 if (pars[i].indexOf(prefix, 0)==0)
			pars.splice(i, 1);
			 if (pars.length > 0)
		return encodeURIComponent(urlparts[0]+'?'+pars.join('&'));
		 else
		 return encodeURIComponent(urlparts[0]);
			}
		else
		return  encodeURIComponent(url);
	}

	function getParamFromKey(url, param)
        {
          var urlparts= url.split('?');
		  var pars;
		  var qStr ;
          if (urlparts.length>=2)
               {
                  var prefix= param+'=';
                  pars= urlparts[1].split(/[&;]/g);
		     		for (var i=pars.length; i-- > 0;)
						{
                          if (pars[i].indexOf(prefix, 0)==0)	
							  {
									qStr = pars[i];
									break;
                              }
						}
				   return qStr;
                             
              }
		}

	function getDomainName(href) {
		 var l = document.createElement("a");
		 l.href = href;
		 return l.hostname;
    }

/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global define:false, require:false, exports:false, module:false, signals:false */

/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 0.8.1 - Build: 266 (2012/07/31 03:33 PM)
 */

(function(global){

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
        }

    };


/*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '0.8.1',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize : false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, listenerContext, priority) {

            var prevIndex = this._indexOfListener(listener, listenerContext),
                binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }

            if(this.memorize && this._prevParams){
                binding.execute(this._prevParams);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener, context) {
            var n = this._bindings.length,
                cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur._listener === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has : function (listener, context) {
            return this._indexOfListener(listener, context) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, listenerContext, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, listenerContext, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove : function (listener, context) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
        	try{
        		if (! this.active) {
        			return;
        		}

        		var paramsArr = Array.prototype.slice.call(arguments),
        		n = this._bindings.length,
        		bindings;

        		if (this.memorize) {
        			this._prevParams = paramsArr;
        		}

        		if (! n) {
        			//should come after memorize
        			return;
        		}

        		bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
        		this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

        		//execute all callbacks until end of the list or until a callback returns `false` or stops propagation
        		//reverse loop since listeners with higher priority will be added at the end of the list
        		do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        	}catch(error){
        		//send to splunk
        		Clazz.Splunk.log(error, "error_dispatch");
        	}
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget : function(){
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Signals namespace
     * @namespace
     * @name signals
     */
    var signals = Signal;

    /**
     * Custom event broadcaster
     * @see Signal
     */
    // alias for backwards compatibility (see #gh-44)
    signals.Signal = Signal;



    //exports to multiple environments
    if(typeof define === 'function' && define.amd){ //AMD
        define(function () { return signals; });
    } else if (typeof module !== 'undefined' && module.exports){ //node
        module.exports = signals;
    } else { //browser
        //use string because of Google closure compiler ADVANCED_MODE
        /*jslint sub:true */
        global['signals'] = signals;
    }

}(this));

var Handlebars={};Handlebars.VERSION="1.0.beta.6";Handlebars.helpers={};Handlebars.partials={};Handlebars.registerHelper=function(b,c,a){if(a){c.not=a}this.helpers[b]=c};Handlebars.registerPartial=function(a,b){this.partials[a]=b};Handlebars.registerHelper("helperMissing",function(a){if(arguments.length===2){return undefined}else{throw new Error("Could not find property '"+a+"'")}});var toString=Object.prototype.toString,functionType="[object Function]";Handlebars.registerHelper("blockHelperMissing",function(f,d){var a=d.inverse||function(){},h=d.fn;var c="";var g=toString.call(f);if(g===functionType){f=f.call(this)}if(f===true){return h(this)}else{if(f===false||f==null){return a(this)}else{if(g==="[object Array]"){if(f.length>0){for(var e=0,b=f.length;e<b;e++){c=c+h(f[e])}}else{c=a(this)}return c}else{return h(f)}}}});Handlebars.registerHelper("each",function(f,d){var g=d.fn,a=d.inverse;var c="";if(f&&f.length>0){for(var e=0,b=f.length;e<b;e++){c=c+g(f[e])}}else{c=a(this)}return c});Handlebars.registerHelper("if",function(b,a){var c=toString.call(b);if(c===functionType){b=b.call(this)}if(!b||Handlebars.Utils.isEmpty(b)){return a.inverse(this)}else{return a.fn(this)}});Handlebars.registerHelper("unless",function(c,b){var d=b.fn,a=b.inverse;b.fn=a;b.inverse=d;return Handlebars.helpers["if"].call(this,c,b)});Handlebars.registerHelper("with",function(b,a){return a.fn(b)});Handlebars.registerHelper("log",function(a){Handlebars.log(a)});var handlebars=(function(){var f={trace:function c(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,INTEGER:29,BOOLEAN:30,hashSegments:31,hashSegment:32,ID:33,EQUALS:34,pathSegments:35,SEP:36,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function b(g,j,k,n,m,i,l){var h=i.length-1;switch(m){case 1:return i[h-1];break;case 2:this.$=new n.ProgramNode(i[h-2],i[h]);break;case 3:this.$=new n.ProgramNode(i[h]);break;case 4:this.$=new n.ProgramNode([]);break;case 5:this.$=[i[h]];break;case 6:i[h-1].push(i[h]);this.$=i[h-1];break;case 7:this.$=new n.InverseNode(i[h-2],i[h-1],i[h]);break;case 8:this.$=new n.BlockNode(i[h-2],i[h-1],i[h]);break;case 9:this.$=i[h];break;case 10:this.$=i[h];break;case 11:this.$=new n.ContentNode(i[h]);break;case 12:this.$=new n.CommentNode(i[h]);break;case 13:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1]);break;case 14:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1]);break;case 15:this.$=i[h-1];break;case 16:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1]);break;case 17:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1],true);break;case 18:this.$=new n.PartialNode(i[h-1]);break;case 19:this.$=new n.PartialNode(i[h-2],i[h-1]);break;case 20:break;case 21:this.$=[[i[h-2]].concat(i[h-1]),i[h]];break;case 22:this.$=[[i[h-1]].concat(i[h]),null];break;case 23:this.$=[[i[h-1]],i[h]];break;case 24:this.$=[[i[h]],null];break;case 25:i[h-1].push(i[h]);this.$=i[h-1];break;case 26:this.$=[i[h]];break;case 27:this.$=i[h];break;case 28:this.$=new n.StringNode(i[h]);break;case 29:this.$=new n.IntegerNode(i[h]);break;case 30:this.$=new n.BooleanNode(i[h]);break;case 31:this.$=new n.HashNode(i[h]);break;case 32:i[h-1].push(i[h]);this.$=i[h-1];break;case 33:this.$=[i[h]];break;case 34:this.$=[i[h-2],i[h]];break;case 35:this.$=[i[h-2],new n.StringNode(i[h])];break;case 36:this.$=[i[h-2],new n.IntegerNode(i[h])];break;case 37:this.$=[i[h-2],new n.BooleanNode(i[h])];break;case 38:this.$=new n.IdNode(i[h]);break;case 39:i[h-2].push(i[h]);this.$=i[h-2];break;case 40:this.$=[i[h]];break}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function d(h,g){throw new Error(h)},parse:function e(o){var x=this,l=[0],G=[null],s=[],H=this.table,h="",q=0,E=0,j=0,n=2,u=1;this.lexer.setInput(o);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}}var i=this.lexer.yylloc;s.push(i);if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError}function w(p){l.length=l.length-2*p;G.length=G.length-p;s.length=s.length-p}function v(){var p;p=x.lexer.lex()||1;if(typeof p!=="number"){p=x.symbols_[p]||p}return p}var D,z,k,C,I,t,B={},y,F,g,m;while(true){k=l[l.length-1];if(this.defaultActions[k]){C=this.defaultActions[k]}else{if(D==null){D=v()}C=H[k]&&H[k][D]}if(typeof C==="undefined"||!C.length||!C[0]){if(!j){m=[];for(y in H[k]){if(this.terminals_[y]&&y>2){m.push("'"+this.terminals_[y]+"'")}}var A="";if(this.lexer.showPosition){A="Parse error on line "+(q+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+m.join(", ")+", got '"+this.terminals_[D]+"'"}else{A="Parse error on line "+(q+1)+": Unexpected "+(D==1?"end of input":"'"+(this.terminals_[D]||D)+"'")}this.parseError(A,{text:this.lexer.match,token:this.terminals_[D]||D,line:this.lexer.yylineno,loc:i,expected:m})}}if(C[0] instanceof Array&&C.length>1){throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+D)}switch(C[0]){case 1:l.push(D);G.push(this.lexer.yytext);s.push(this.lexer.yylloc);l.push(C[1]);D=null;if(!z){E=this.lexer.yyleng;h=this.lexer.yytext;q=this.lexer.yylineno;i=this.lexer.yylloc;if(j>0){j--}}else{D=z;z=null}break;case 2:F=this.productions_[C[1]][1];B.$=G[G.length-F];B._$={first_line:s[s.length-(F||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(F||1)].first_column,last_column:s[s.length-1].last_column};t=this.performAction.call(B,h,E,q,this.yy,C[1],G,s);if(typeof t!=="undefined"){return t}if(F){l=l.slice(0,-1*F*2);G=G.slice(0,-1*F);s=s.slice(0,-1*F)}l.push(this.productions_[C[1]][0]);G.push(B.$);s.push(B._$);g=H[l[l.length-2]][l[l.length-1]];l.push(g);break;case 3:return true}}return true}};var a=(function(){var j=({EOF:1,parseError:function l(o,n){if(this.yy.parseError){this.yy.parseError(o,n)}else{throw new Error(o)}},setInput:function(n){this._input=n;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var o=this._input[0];this.yytext+=o;this.yyleng++;this.match+=o;this.matched+=o;var n=o.match(/\n/);if(n){this.yylineno++}this._input=this._input.slice(1);return o},unput:function(n){this._input=n+this._input;return this},more:function(){this._more=true;return this},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;if(n.length<20){n+=this._input.substr(0,20-n.length)}return(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput();var o=new Array(n.length+1).join("-");return n+this.upcomingInput()+"\n"+o+"^"},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var r,p,o,n;if(!this._more){this.yytext="";this.match=""}var s=this._currentRules();for(var q=0;q<s.length;q++){p=this._input.match(this.rules[s[q]]);if(p){n=p[0].match(/\n.*/g);if(n){this.yylineno+=n.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-1:this.yylloc.last_column+p[0].length};this.yytext+=p[0];this.match+=p[0];this.matches=p;this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(p[0].length);this.matched+=p[0];r=this.performAction.call(this,this.yy,this,s[q],this.conditionStack[this.conditionStack.length-1]);if(r){return r}else{return}}}if(this._input===""){return this.EOF}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function g(){var n=this.next();if(typeof n!=="undefined"){return n}else{return this.lex()}},begin:function h(n){this.conditionStack.push(n)},popState:function m(){return this.conditionStack.pop()},_currentRules:function k(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function h(n){this.begin(n)}});j.performAction=function i(r,o,q,n){var p=n;switch(q){case 0:if(o.yytext.slice(-1)!=="\\"){this.begin("mu")}if(o.yytext.slice(-1)==="\\"){o.yytext=o.yytext.substr(0,o.yyleng-1),this.begin("emu")}if(o.yytext){return 14}break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:return 24;break;case 4:return 16;break;case 5:return 20;break;case 6:return 19;break;case 7:return 19;break;case 8:return 23;break;case 9:return 23;break;case 10:o.yytext=o.yytext.substr(3,o.yyleng-5);this.popState();return 15;break;case 11:return 22;break;case 12:return 34;break;case 13:return 33;break;case 14:return 33;break;case 15:return 36;break;case 16:break;case 17:this.popState();return 18;break;case 18:this.popState();return 18;break;case 19:o.yytext=o.yytext.substr(1,o.yyleng-2).replace(/\\"/g,'"');return 28;break;case 20:return 30;break;case 21:return 30;break;case 22:return 29;break;case 23:return 33;break;case 24:o.yytext=o.yytext.substr(1,o.yyleng-2);return 33;break;case 25:return"INVALID";break;case 26:return 5;break}};j.rules=[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^[^\x00]{2,}?(?=(\{\{))/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[\/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/,/^\[[^\]]*\]/,/^./,/^$/];j.conditions={mu:{rules:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],inclusive:false},emu:{rules:[2],inclusive:false},INITIAL:{rules:[0,1,26],inclusive:true}};return j})();f.lexer=a;return f})();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=handlebars;exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)};exports.main=function commonjsMain(a){if(!a[1]){throw new Error("Usage: "+a[0]+" FILE")}if(typeof process!=="undefined"){var c=require("fs").readFileSync(require("path").join(process.cwd(),a[1]),"utf8")}else{var b=require("file").path(require("file").cwd());var c=b.join(a[1]).read({charset:"utf-8"})}return exports.parser.parse(c)};if(typeof module!=="undefined"&&require.main===module){exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args)}}Handlebars.Parser=handlebars;Handlebars.parse=function(a){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(a)};Handlebars.print=function(a){return new Handlebars.PrintVisitor().accept(a)};Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(b,a){}};Handlebars.log=function(b,a){Handlebars.logger.log(b,a)};(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(c,b){this.type="program";this.statements=c;if(b){this.inverse=new Handlebars.AST.ProgramNode(b)}};Handlebars.AST.MustacheNode=function(d,c,b){this.type="mustache";this.id=d[0];this.params=d.slice(1);this.hash=c;this.escaped=!b};Handlebars.AST.PartialNode=function(c,b){this.type="partial";this.id=c;this.context=b};var a=function(b,c){if(b.original!==c.original){throw new Handlebars.Exception(b.original+" doesn't match "+c.original)}};Handlebars.AST.BlockNode=function(c,b,d){a(c.id,d);this.type="block";this.mustache=c;this.program=b};Handlebars.AST.InverseNode=function(c,b,d){a(c.id,d);this.type="inverse";this.mustache=c;this.program=b};Handlebars.AST.ContentNode=function(b){this.type="content";this.string=b};Handlebars.AST.HashNode=function(b){this.type="hash";this.pairs=b};Handlebars.AST.IdNode=function(f){this.type="ID";this.original=f.join(".");var d=[],g=0;for(var e=0,b=f.length;e<b;e++){var c=f[e];if(c===".."){g++}else{if(c==="."||c==="this"){this.isScoped=true}else{d.push(c)}}}this.parts=d;this.string=d.join(".");this.depth=g;this.isSimple=(d.length===1)&&(g===0)};Handlebars.AST.StringNode=function(b){this.type="STRING";this.string=b};Handlebars.AST.IntegerNode=function(b){this.type="INTEGER";this.integer=b};Handlebars.AST.BooleanNode=function(b){this.type="BOOLEAN";this.bool=b};Handlebars.AST.CommentNode=function(b){this.type="comment";this.comment=b}})();Handlebars.Exception=function(b){var a=Error.prototype.constructor.apply(this,arguments);for(var c in a){if(a.hasOwnProperty(c)){this[c]=a[c]}}this.message=a.message};Handlebars.Exception.prototype=new Error;Handlebars.SafeString=function(a){this.string=a};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var c={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var d=/&(?!\w+;)|[<>"'`]/g;var b=/[&<>"'`]/;var a=function(e){return c[e]||"&amp;"};Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()}else{if(e==null||e===false){return""}}if(!b.test(e)){return e}return e.replace(d,a)},isEmpty:function(e){if(typeof e==="undefined"){return true}else{if(e===null){return true}else{if(e===false){return true}else{if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true}else{return false}}}}}}})();Handlebars.Compiler=function(){};Handlebars.JavaScriptCompiler=function(){};(function(f,e){f.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,assignToHash:15,pushStringParam:16};f.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:2,lookup:1,invokeMustache:3,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:3,invokePartial:1,push:1,assignToHash:1,pushStringParam:1};f.DISASSEMBLE_MAP={};for(var h in f.OPCODE_MAP){var g=f.OPCODE_MAP[h];f.DISASSEMBLE_MAP[g]=h}f.multiParamSize=function(i){return f.MULTI_PARAM_OPCODES[f.DISASSEMBLE_MAP[i]]};f.prototype={compiler:f,disassemble:function(){var t=this.opcodes,r,n;var q=[],v,m,w;for(var s=0,o=t.length;s<o;s++){r=t[s];if(r==="DECLARE"){m=t[++s];w=t[++s];q.push("DECLARE "+m+" = "+w)}else{v=f.DISASSEMBLE_MAP[r];var u=f.multiParamSize(r);var k=[];for(var p=0;p<u;p++){n=t[++s];if(typeof n==="string"){n='"'+n.replace("\n","\\n")+'"'}k.push(n)}v=v+" "+k.join(" ");q.push(v)}}return q.join("\n")},guid:0,compile:function(i,k){this.children=[];this.depths={list:[]};this.options=k;var l=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(l){for(var j in l){this.options.knownHelpers[j]=l[j]}}return this.program(i)},accept:function(i){return this[i.type](i)},program:function(m){var k=m.statements,o;this.opcodes=[];for(var n=0,j=k.length;n<j;n++){o=k[n];this[o.type](o)}this.isSimple=j===1;this.depths.list=this.depths.list.sort(function(l,i){return l-i});return this},compileProgram:function(m){var j=new this.compiler().compile(m,this.options);var n=this.guid++;this.usePartial=this.usePartial||j.usePartial;this.children[n]=j;for(var o=0,k=j.depths.list.length;o<k;o++){depth=j.depths.list[o];if(depth<2){continue}else{this.addDepth(depth-1)}}return n},block:function(o){var l=o.mustache;var n,p,j,k;var m=this.setupStackForMustache(l);var i=this.compileProgram(o.program);if(o.program.inverse){k=this.compileProgram(o.program.inverse);this.declare("inverse",k)}this.opcode("invokeProgram",i,m.length,!!l.hash);this.declare("inverse",null);this.opcode("append")},inverse:function(k){var j=this.setupStackForMustache(k.mustache);var i=this.compileProgram(k.program);this.declare("inverse",i);this.opcode("invokeProgram",null,j.length,!!k.mustache.hash);this.declare("inverse",null);this.opcode("append")},hash:function(n){var m=n.pairs,p,o;this.opcode("push","{}");for(var k=0,j=m.length;k<j;k++){p=m[k];o=p[1];this.accept(o);this.opcode("assignToHash",p[0])}},partial:function(i){var j=i.id;this.usePartial=true;if(i.context){this.ID(i.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",j.original);this.opcode("append")},content:function(i){this.opcode("appendContent",i.string)},mustache:function(i){var j=this.setupStackForMustache(i);this.opcode("invokeMustache",j.length,i.id.original,!!i.hash);if(i.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ID:function(m){this.addDepth(m.depth);this.opcode("getContext",m.depth);this.opcode("lookupWithHelpers",m.parts[0]||null,m.isScoped||false);for(var k=1,j=m.parts.length;k<j;k++){this.opcode("lookup",m.parts[k])}},STRING:function(i){this.opcode("pushString",i.string)},INTEGER:function(i){this.opcode("push",i.integer)},BOOLEAN:function(i){this.opcode("push",i.bool)},comment:function(){},pushParams:function(l){var j=l.length,k;while(j--){k=l[j];if(this.options.stringParams){if(k.depth){this.addDepth(k.depth)}this.opcode("getContext",k.depth||0);this.opcode("pushStringParam",k.string)}else{this[k.type](k)}}},opcode:function(i,l,k,j){this.opcodes.push(f.OPCODE_MAP[i]);if(l!==undefined){this.opcodes.push(l)}if(k!==undefined){this.opcodes.push(k)}if(j!==undefined){this.opcodes.push(j)}},declare:function(i,j){this.opcodes.push("DECLARE");this.opcodes.push(i);this.opcodes.push(j)},addDepth:function(i){if(i===0){return}if(!this.depths[i]){this.depths[i]=true;this.depths.list.push(i)}},setupStackForMustache:function(i){var j=i.params;this.pushParams(j);if(i.hash){this.hash(i.hash)}this.ID(i.id);return j}};e.prototype={nameLookup:function(k,i,j){if(/^[0-9]+$/.test(i)){return k+"["+i+"]"}else{if(e.isValidJavaScriptVariableName(i)){return k+"."+i}else{return k+"['"+i+"']"}}},appendToBuffer:function(i){if(this.environment.isSimple){return"return "+i+";"}else{return"buffer += "+i+";"}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(i,j,l,k){this.environment=i;this.options=j||{};this.name=this.environment.name;this.isChild=!!l;this.context=l||{programs:[],aliases:{self:"this"},registers:{list:[]}};this.preamble();this.stackSlot=0;this.stackVars=[];this.compileChildren(i,j);var n=i.opcodes,m;this.i=0;for(b=n.length;this.i<b;this.i++){m=this.nextOpcode(0);if(m[0]==="DECLARE"){this.i=this.i+2;this[m[1]]=m[2]}else{this.i=this.i+m[1].length;this[m[0]].apply(this,m[1])}}return this.createFunctionContext(k)},nextOpcode:function(r){var o=this.environment.opcodes,m=o[this.i+r],l,p;var q,i;if(m==="DECLARE"){l=o[this.i+1];p=o[this.i+2];return["DECLARE",l,p]}else{l=f.DISASSEMBLE_MAP[m];q=f.multiParamSize(m);i=[];for(var k=0;k<q;k++){i.push(o[this.i+k+1+r])}return[l,i]}},eat:function(i){this.i=this.i+i.length},preamble:function(){var i=[];this.useRegister("foundHelper");if(!this.isChild){var j=this.namespace;var k="helpers = helpers || "+j+".helpers;";if(this.environment.usePartial){k=k+" partials = partials || "+j+".partials;"}i.push(k)}else{i.push("")}if(!this.environment.isSimple){i.push(", buffer = "+this.initializeBuffer())}else{i.push("")}this.lastContext=0;this.source=i},createFunctionContext:function(p){var q=this.stackVars;if(!this.isChild){q=q.concat(this.context.registers.list)}if(q.length>0){this.source[1]=this.source[1]+", "+q.join(", ")}if(!this.isChild){var k=[];for(var o in this.context.aliases){this.source[1]=this.source[1]+", "+o+"="+this.context.aliases[o]}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.source.push("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var n=0,j=this.environment.depths.list.length;n<j;n++){r.push("depth"+this.environment.depths.list[n])}if(p){r.push(this.source.join("\n  "));return Function.apply(this,r)}else{var m="function "+(this.name||"")+"("+r.join(",")+") {\n  "+this.source.join("\n  ")+"}";Handlebars.log(Handlebars.logger.DEBUG,m+"\n\n");return m}},appendContent:function(i){this.source.push(this.appendToBuffer(this.quotedString(i)))},append:function(){var i=this.popStack();this.source.push("if("+i+" || "+i+" === 0) { "+this.appendToBuffer(i)+" }");if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){var j=this.nextOpcode(1),i="";this.context.aliases.escapeExpression="this.escapeExpression";if(j[0]==="appendContent"){i=" + "+this.quotedString(j[1][0]);this.eat(j)}this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+i))},getContext:function(i){if(this.lastContext!==i){this.lastContext=i}},lookupWithHelpers:function(k,l){if(k){var i=this.nextStack();this.usingKnownHelper=false;var j;if(!l&&this.options.knownHelpers[k]){j=i+" = "+this.nameLookup("helpers",k,"helper");this.usingKnownHelper=true}else{if(l||this.options.knownHelpersOnly){j=i+" = "+this.nameLookup("depth"+this.lastContext,k,"context")}else{this.register("foundHelper",this.nameLookup("helpers",k,"helper"));j=i+" = foundHelper || "+this.nameLookup("depth"+this.lastContext,k,"context")}}j+=";";this.source.push(j)}else{this.pushStack("depth"+this.lastContext)}},lookup:function(j){var i=this.topStack();this.source.push(i+" = ("+i+" === null || "+i+" === undefined || "+i+" === false ? "+i+" : "+this.nameLookup(i,j,"context")+");")},pushStringParam:function(i){this.pushStack("depth"+this.lastContext);this.pushString(i)},pushString:function(i){this.pushStack(this.quotedString(i))},push:function(i){this.pushStack(i)},invokeMustache:function(k,j,i){this.populateParams(k,this.quotedString(j),"{}",null,i,function(l,n,m){if(!this.usingKnownHelper){this.context.aliases.helperMissing="helpers.helperMissing";this.context.aliases.undef="void 0";this.source.push("else if("+m+"=== undef) { "+l+" = helperMissing.call("+n+"); }");if(l!==m){this.source.push("else { "+l+" = "+m+"; }")}}})},invokeProgram:function(k,l,j){var i=this.programExpression(this.inverse);var m=this.programExpression(k);this.populateParams(l,null,m,i,j,function(n,p,o){if(!this.usingKnownHelper){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";this.source.push("else { "+n+" = blockHelperMissing.call("+p+"); }")}})},populateParams:function(p,k,t,q,x,w){var l=x||this.options.stringParams||q||this.options.data;var j=this.popStack(),v;var n=[],m,o,u;if(l){this.register("tmp1",t);u="tmp1"}else{u="{ hash: {} }"}if(l){var s=(x?this.popStack():"{}");this.source.push("tmp1.hash = "+s+";")}if(this.options.stringParams){this.source.push("tmp1.contexts = [];")}for(var r=0;r<p;r++){m=this.popStack();n.push(m);if(this.options.stringParams){this.source.push("tmp1.contexts.push("+this.popStack()+");")}}if(q){this.source.push("tmp1.fn = tmp1;");this.source.push("tmp1.inverse = "+q+";")}if(this.options.data){this.source.push("tmp1.data = data;")}n.push(u);this.populateCall(n,j,k||j,w,t!=="{}")},populateCall:function(n,j,k,q,o){var m=["depth0"].concat(n).join(", ");var i=["depth0"].concat(k).concat(n).join(", ");var p=this.nextStack();if(this.usingKnownHelper){this.source.push(p+" = "+j+".call("+m+");")}else{this.context.aliases.functionType='"function"';var l=o?"foundHelper && ":"";this.source.push("if("+l+"typeof "+j+" === functionType) { "+p+" = "+j+".call("+m+"); }")}q.call(this,p,i,j);this.usingKnownHelper=false},invokePartial:function(i){params=[this.nameLookup("partials",i,"partial"),"'"+i+"'",this.popStack(),"helpers","partials"];if(this.options.data){params.push("data")}this.pushStack("self.invokePartial("+params.join(", ")+");")},assignToHash:function(i){var j=this.popStack();var k=this.topStack();this.source.push(k+"['"+i+"'] = "+j+";")},compiler:e,compileChildren:function(j,n){var p=j.children,r,q;for(var o=0,k=p.length;o<k;o++){r=p[o];q=new this.compiler();this.context.programs.push("");var m=this.context.programs.length;r.index=m;r.name="program"+m;this.context.programs[m]=q.compile(r,n,this.context)}},programExpression:function(k){if(k==null){return"self.noop"}var p=this.environment.children[k],o=p.depths.list;var n=[p.index,p.name,"data"];for(var m=0,j=o.length;m<j;m++){depth=o[m];if(depth===1){n.push("depth0")}else{n.push("depth"+(depth-1))}}if(o.length===0){return"self.program("+n.join(", ")+")"}else{n.shift();return"self.programWithDepth("+n.join(", ")+")"}},register:function(i,j){this.useRegister(i);this.source.push(i+" = "+j+";")},useRegister:function(i){if(!this.context.registers[i]){this.context.registers[i]=true;this.context.registers.list.push(i)}},pushStack:function(i){this.source.push(this.nextStack()+" = "+i+";");return"stack"+this.stackSlot},nextStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return"stack"+this.stackSlot},popStack:function(){return"stack"+this.stackSlot--},topStack:function(){return"stack"+this.stackSlot},quotedString:function(i){return'"'+i.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'}};var a=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");var d=e.RESERVED_WORDS={};for(var c=0,b=a.length;c<b;c++){d[a[c]]=true}e.isValidJavaScriptVariableName=function(i){if(!e.RESERVED_WORDS[i]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(i)){return true}return false}})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);Handlebars.precompile=function(d,c){c=c||{};var b=Handlebars.parse(d);var a=new Handlebars.Compiler().compile(b,c);return new Handlebars.JavaScriptCompiler().compile(a,c)};Handlebars.compile=function(b,a){a=a||{};var d;function c(){var g=Handlebars.parse(b);var f=new Handlebars.Compiler().compile(g,a);var e=new Handlebars.JavaScriptCompiler().compile(f,a,undefined,true);return Handlebars.template(e)}return function(f,e){if(!d){d=c()}return d.call(this,f,e)}};Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(d,e,f){var c=this.programs[d];if(f){return Handlebars.VM.program(e,f)}else{if(c){return c}else{c=this.programs[d]=Handlebars.VM.program(e);return c}}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(d,c){c=c||{};return a.call(b,Handlebars,d,c.helpers,c.partials,c.data)}},programWithDepth:function(b,d,c){var a=Array.prototype.slice.call(arguments,2);return function(f,e){e=e||{};return b.apply(this,[f,e.data||d].concat(a))}},program:function(a,b){return function(d,c){c=c||{};return a(d,c.data||b)}},noop:function(){return""},invokePartial:function(a,b,d,e,c,f){options={helpers:e,partials:c,data:f};if(a===undefined){throw new Handlebars.Exception("The partial "+b+" could not be found")}else{if(a instanceof Function){return a(d,options)}else{if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+b+" could not be compiled when running in runtime-only mode")}else{c[b]=Handlebars.compile(a);return c[b](d,options)}}}}};Handlebars.template=Handlebars.VM.template;
var Clazz = {
	/***
	 * Create a class based on a super Class
	 * @param superClass SuperClass that will serve as a base
	 * @param extendedFunctions The functions and variables for the current class
	 * @returns {Function} Return the new class
	 */
	extend : function(superClass, extendedFunctions) {
		var baseClass = function(config) {
			this.config = config;

			// call initialize
			this.initialize(config);
		};

		baseClass.prototype.superClass = {};

		// get all property from super class and give it to this class
		for(var property in superClass.prototype) {

			// copy original method to superClass keyword, exclude the superclass property
			// because it is specific to each class
			if(property != "superClass") {
				baseClass.prototype.superClass[property] = superClass.prototype[property];
				baseClass.prototype[property] = superClass.prototype[property];
			}
		}

		// now apply its own function
		for(var property in extendedFunctions) {
			baseClass.prototype[property] = extendedFunctions[property];
		}

		return baseClass;
	},

	addPackage : function(base, currentPackageName) {
		if(base[currentPackageName] == null) {
			base[currentPackageName] = {};
		}
	},

	/***
	 * Create the package split by .
	 * @param packageName
	 */
	createPackage : function(packageName) {
		var packageNameSplitted = packageName.split(".");
		var currentBase = this;

		for(var i=0;i<packageNameSplitted.length;i++) {
			var currentPackageName = packageNameSplitted[i];
			this.addPackage(currentBase, currentPackageName);
			currentBase = currentBase[currentPackageName];
		}
	}
};

Clazz.Base = Clazz.extend(function() {}, {
	/****
	 * This is called during the object creation 
	 * @param config Parameter for the constructor, typically a {} containing the
	 * necessary initialization parameters
	 */
	__superClass : "This class extends from superClass.",
	__initialize : "This is called during the object creation<br>" +
			"@param config Parameter for the constructor, typically a {} containing the necessary initialization parameters",
	initialize : function(config) {
	}
});

/***
 * A class to deal with custom placement of the objects. Note that this rely on jQuery
 * to function correctly though other framework can be used along with it
 */
Clazz.Widget = Clazz.extend(Clazz.Base, {
	/***
	 * A call to render the UI fragment implemented in renderUI method
	 * @param whereToRender A placeholder to hold the fragment, this would typically
	 * be a div tag or other valid HTML element. 
	 */
	__render : "A call to render the UI fragment implemented in renderUI method<br>" +
	"@param whereToRender A placeholder to hold the fragment, this would typically be a div tag or other valid HTML element.",
	render : function(whereToRender) {
		// call renderUI to get the element
		var fragment = this.renderUI();

		// get the placement using jQuery
		// and embed it 
		$(whereToRender).html(fragment);

		// bind all elements once rendered to provide events
		this.bindUI();
	},

	/**
	 * Function that every subclass needs to override to provide
	 * a fragment that render will call
	 */
	__renderUI : "Function that every subclass needs to override to provide, a fragment that render will call",
	renderUI : function() {
	},

	/****
	 * Bind the UI elements with appropriate events
	 */
	__bindUI : "Bind the UI elements with appropriate events",
	bindUI : function() {
	         /*====== RINTL-25250,PBL-55 start here ======*/
		var timeOutResetLetters;
		var letterPressed= [];
		$(window).keydown(function(e){ //left right handling

		if($("#wu_country_list_header").is(':visible')){
		var charCode = e.which || e.keyCode;
                if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
                {
                    clearTimeout(timeOutResetLetters); //clear timeout, important!
                    timeOutResetLetters = setTimeout(function(){ //if 700 ms of inactivity, reset array of letters pressed and searching string
                        letterPressed = []; 

                    },700);
                    $("#wu_country_list_header li").removeClass('selected');
                    letterPressed.push(String.fromCharCode(e.keyCode));
                    var searchchar = letterPressed.join('');
                     searchchar = searchchar.charAt(0).toUpperCase() + searchchar.slice(1).toLowerCase();
                    if(letterPressed.length == 2){
					console.log(searchchar+"====");
                    }
                     console.log(searchchar);
                      $.each($("#wu_country_list_header li a"),function(index,el){
                        if($(el).text().indexOf(searchchar) == 0){
                            $(el).parent().addClass('selected');
                            $("#wu_country_list_header").scrollTop(0);
                            var storePosition = $(el).parent().position().top; 
                            $("#wu_country_list_header").scrollTop(storePosition);
                            return false; //found, 'break' the each loop
                        }

                    });

                }
                else if(e.keyCode == "38")
                { //left, select prev
                    
					var ifFound = false;
                    var currSelected = null;
                     $.each($("#wu_country_list_header li"),function(index,el){
                        if($(el).hasClass("selected")){
                            ifFound = true;
                             currSelected = $(el)
                            currSelected.removeClass('selected');   
						if(!currSelected.is($("#wu_country_list_header li").first())){
                                currSelected =   currSelected.prev(); 
                              //  currSelected.prev().addClass('selected');

                            }
                            else{
								currSelected = $("#wu_country_list_header li").last();
                            }
						//break;
                            return false;
                        }

                    });

                    if(!ifFound){
					currSelected = $("#wu_country_list_header li").last();
                    }
                    currSelected.addClass('selected');
                              $("#wu_country_list_header").scrollTop(0);
                              var storePosition = currSelected.position().top; 
                              $("#wu_country_list_header").scrollTop(storePosition);


                }else if(e.keyCode == "40")
                { //right, select next

                     var ifFound = false;
                    var currSelected = null;

                      $.each($("#wu_country_list_header li"),function(index,el){
                        if($(el).hasClass("selected")){
                             ifFound = true;
                             currSelected = $(el)
                             currSelected.removeClass('selected');   
								if(!currSelected.is($("#wu_country_list_header li").last())){
                             currSelected =   currSelected.next(); 
                                //currSelected.next().addClass('selected');

                            }
                            else {
                                currSelected = $("#wu_country_list_header li").first();
						//$("#wu_country_list_header li").first().addClass('selected');
                            }
							currSelected.addClass('selected');
                              $("#wu_country_list_header").scrollTop(0);
                              var storePosition = currSelected.position().top; 
                              $("#wu_country_list_header").scrollTop(storePosition);
                            return false;

                        }

                    });

				if(!ifFound){
					currSelected = $("#wu_country_list_header li").last();
                    }
                    currSelected.addClass('selected');
                              $("#wu_country_list_header").scrollTop(0);
                              var storePosition = currSelected.position().top; 
                              $("#wu_country_list_header").scrollTop(storePosition);
                            e.preventDefault();
                            return false; //found, 'break' the each loop

                }else if(e.keyCode == "13"){ //enter
                     var currSelected =  $("#wu_country_list_header li .selected");
                   $('.entered').remove();
                   $(document.body).append(currSelected.clone().addClass('entered'));
                }
            }
        });
	  /*====== RINTL-25250,PBL-55 end here ======*/
	},

	/****
	 * If NavigationController is used, this function is called automatically
	 * when a new view is pushed to the stack and this object is about to dissapear
	 * from the view
	 */
	__onPause : "If NavigationController is used, this function is called automatically when a new view is pushed to the stack and this object is about to dissapear from the view",
	onPause : function() {
	},

	/***
	 * If NavigationController is used, this function is called automatically
	 * when a view is popped from the stack and this object become visible again
	 */
	__onResume : "If NavigationController is used, this function is called automatically when a view is popped from the stack and this object become visible again",
	onResume : function() {
	}
});

//TODO: MOVE this to different file and load dynamically via require.js
Clazz.AngularProvider = {
	compiledCache : {},

	merge : function(templateUrl, data, callbackFunction) {
		var self = this;
		if(this.compiledCache[templateUrl] != null) {
			var compiledTemplate = this.compiledCache[templateUrl].compiledTemplate;
			var scope =  this.compiledCache[templateUrl].scope;
			scope.data = data;
			var element = compiledTemplate(scope);
			scope.$digest();
			callbackFunction(element);
		} else {
			$.get(templateUrl).success(function(template, status, response) {
				// get ng service
				var injector = angular.injector(['ng']);

				injector.invoke(function($rootScope, $compile, $document){
					var compiledTemplate = $compile(response.responseText);
					var scope = $rootScope.$new();
					self.compiledCache[templateUrl] = {"compiledTemplate" : compiledTemplate, "scope" : scope };

					scope.data = data;
					var element = compiledTemplate(scope);
					scope.$digest();
					callbackFunction(element);
				});
			}).error(function(error) {
				//console.log("error "+ error.status +": "+ error.statusText);
			});
		}
	}
};

//TODO: MOVE this to different file and load dynamically via require.js
Clazz.DustProvider = {
	compiledCache : {},

	merge : function(templateUrl, data, callbackFunction) {
		var lastPath = templateUrl.substring(templateUrl.lastIndexOf("/")+1);
		$.get(templateUrl).success(function(template, status, response) {
			var compiledTemplate = dust.compile(response.responseText, lastPath);
			dust.loadSource(compiledTemplate);

			dust.render(lastPath, data ,function(error,output){
				callbackFunction(output);
			});
		}).error(function(error) {
			//console.log("error "+ error.status +": "+ error.statusText);
		});
	}
};

//TODO: MOVE this to different file and load dynamically via require.js
Clazz.HandleBarProvider = {
	compiledCache : {},

	merge : function(templateUrl, data, callbackFunction) {
		var self = this;
		if(this.compiledCache[templateUrl] != null){
			var compiledTemplate = self.compiledCache[templateUrl].compiledTemplate;
			var element = compiledTemplate(data);
			callbackFunction(element);
		}else{
			$.get(templateUrl).success(function(template, status, response) {
				var compiledTemplate = Handlebars.compile(typeof template == "object" ? response.responseText : template);
				var element = compiledTemplate(data);
				var cacheTemplate = {"compiledTemplate" : compiledTemplate};
				self.compiledCache[templateUrl] = cacheTemplate;
				
				callbackFunction(element);

			}).error(function(error) {
				//console.log("error "+ error.status +": "+ error.statusText);
			});
		}
		
	}
};

//TODO: MOVE this to different file and load dynamically via require.js
Clazz.PlateProvider = {
	compiledCache : {},

	merge : function(templateUrl, data, callbackFunction) {
		$.get(templateUrl).success(function(template, status, response) {
			var mapping = Plates.Map();

			var allElement = $(response.responseText);
			var allWithDataAttribute = $('[data-text]', allElement);
			var allWithDataHtmlAttribute = $('[data-html]', allElement);

			// get every data and htmlData in the template
			for(var i=0;i<allWithDataAttribute.length;i++) {
				var element = $(allWithDataAttribute[i]);
				var keyValue = element.attr("data-text");
				mapping.where('data-text').is(keyValue).to(keyValue);
			}

			// get every data and htmlData in the template
			for(var i=0;i<allWithDataHtmlAttribute.length;i++) {
				var element = $(allWithDataHtmlAttribute[i]);
				var keyValue = element.attr("data-html");
				mapping.where('data-html').is(keyValue).append(data[keyValue]);
			}

			var element = Plates.bind(response.responseText, data, mapping);
			callbackFunction(element);
		}).error(function(error) {
			//console.log("error "+ error.status +": "+ error.statusText);
		});
	}
};

Clazz.UnderscoreProvider = {
	compiledCache : {},

	merge : function(templateUrl, data, callbackFunction) {
		$.get(templateUrl).success(function(template, status, response) {
			var compiledTemplate = _.template(response.responseText, data);
			callbackFunction(compiledTemplate);
		}).error(function(error) {
			//console.log("error "+ error.status +": "+ error.statusText);
		});
	}
};

Clazz.RivetProvider = {
	compiledCache : {},

	merge : function(templateUrl, data, callbackFunction) {
		$.get(templateUrl).success(function(template, status, response) {
			var allElement = $(response.responseText);
			var rivetsView = rivets.bind(allElement, {data:data});
			var element = rivetsView.els;
			callbackFunction(element);
		}).error(function(error) {
			//console.log("error "+ error.status +": "+ error.statusText);
		});
	}
};

TemplateProvider = {
	DUST: Clazz.DustProvider,
	UNDERSCORE : Clazz.UnderscoreProvider,
	HANDLE_BAR : Clazz.HandleBarProvider,
	ANGULAR : Clazz.AngularProvider,
	RIVET : Clazz.RivetProvider,
	PLATE : Clazz.PlateProvider
};

Clazz.TemplateProvider = Clazz.extend(Clazz.Base, {
	templateEngine : null, 

	__initianlize : "Initialize the widget. For example, assign initial values to variables.",
	initialize : function(config) {
		if(config.templateEngine != null) {
			this.templateEngine = config.templateEngine;
		} else {
			this.templateEngine = TemplateProvider.DUST;
		}
	},

	merge : function(templateUrl, data, callbackFunction) {
		var self = this;
		self.templateEngine.merge(templateUrl, data, callbackFunction);
	}
});


Clazz.WidgetWithTemplate = Clazz.extend(Clazz.Widget, {
	// the url of the template
	__templateUrl : "the url of the template",
	templateUrl: null,

	// default the provider to handlebar
	__templateProvider : "default the provider to handlebar",
	templateProvider: TemplateProvider.HANDLE_BAR,

	// data for data binding process. If you don't override preRender(), this is the default
	// data that it will use
	__data : "data for data binding process. If you don't override preRender(), this is the default data that it will use",
	data : {},

	// the last result of the element after the element has been bounded and rendered
	__element : "the last result of the element after the element has been bounded and rendered",
	element: null,

	// default container if render place is not specified
	// for example: <app:account-list>
	__defaultContainer : "default container if render place is not specified",
	defaultContainer : null,

	__doMore : "Called after postRender",
	doMore: function(element) {}, 

	/***
	 * Called after the renderTemplate() and bindUI() completes. 
	 * Override and add any preRender functionality here
	 *
	 * @element: Element as the result of the template + data binding
	 */
	__postRender : "Called after the renderTemplate() and bindUI() completes. Override and add any postRender functionality here.<br>@element: Element as the result of the template + data binding",
	postRender : function(element) {
	},

	/****
	 * Called before the render() function, override and add any preRender functionality
	 * here
	 * 
	 * @whereToRender The node where we are going to render the UI
	 * @renderFunction The renderTemplate function by default, use to render the UI and call bindUI afterwards
	 */
	__preRender : "Called before the render() function, override and add any preRender functionality here<br>" +
	"@whereToRender The node where we are going to render the UI<br>" + 
	"@renderFunction The renderTemplate function by default, use to render the UI and call bindUI afterwards",
	
	preRender: function(whereToRender, renderFunction) {
		// default implementation just call renderFunction
		renderFunction(this.data, whereToRender);
	},

	/***
	 * A call to render the UI fragment implemented in renderUI method
	 * @param whereToRender A placeholder to hold the fragment, this would typically
	 * be a div tag or other valid HTML element. 
	 * 
	 * @whereToRender The node where we are going to render the UI
	 */
	render : function(whereToRender) {
		if(whereToRender == null) {
			whereToRender = $(this.defaultContainer);
		}
		try {
			this.preRender(whereToRender, $.proxy(this.renderTemplate, this));
		} catch(error) {
			// send to splunk....
			Clazz.Splunk.log(error, "render");
			throw new Error(error.stack);
		}
	},

	/***
	 * Render using the template url specified with the template engine
	 * 
	 * @data The data that is used for binding with the template
	 * @whereToRender The node where we are going to render the UI
	 */
	__renderTemplate : "Render using the template url specified with the template engine<br>" + 
	"@data The data that is used for binding with the template<br>" +
	"@whereToRender The node where we are going to render the UI",
	renderTemplate: function(data, whereToRender) {
		if(this.templateUrl != null) {
			var self = this;

			var templateProvider = new Clazz.TemplateProvider({ templateEngine : this.templateProvider});

			templateProvider.merge(this.templateUrl, data, function(element) {
				try {
					$(whereToRender).html(element);
					self.bindUI();
					self.postRender(element);
					self.element = element;
					self.doMore(element);
				} catch (error) {
					// send to splunk....
					Clazz.Splunk.log(error, "render_template");
					throw new Error(error.stack);
				}
			});
		}
	},

	/***
	 *  Method to get the HTML String representation, can be used to include
	 *  the part of the Widget to other template
	 *  
	 *  @return The HTML string from the result of data binding with the template
	 */
	__getHtmlString : "Method to get the HTML String representation, can be used to include the part of the Widget to other template<br>"+
	"@return The HTML string from the result of data binding with the template",
	getHtmlString: function() {
		if(this.element != null) {
			return $(this.element)[0].outerHTML;
		}
	},

	/**
	 * Method to initiate any event handling
	 * called after the renderTemplate() completes
	 */
	__handleEvent : "Method to initiate any event handling called after the renderTemplate() completes",
	handleEvent : function(element){
		this.bindUI();
		this.postRender(element);
		this.element = element;
	}
});


Clazz.PageWidget = Clazz.extend(Clazz.WidgetWithTemplate, {
	pageUrl: null,
	
	initialize : function(config) {
		this.pageUrl = config.pageUrl;
	},

	render : function(whereToRender) {
        var self = this;
		var iFrame =  $("<iframe src = '" + self.pageUrl + "' frameBorder='0' width='100%' height='100%' scrolling='auto'/>");
        $(whereToRender).append(iFrame);

        // iPhone5 retina screen doesn't exactly work with 100%!!!
        // retina detection
        var modern_media_query = window.matchMedia( "screen and (-webkit-min-device-pixel-ratio:2)");
		var er = new RegExp("iPhone","i");

        if( modern_media_query.matches && er.test(navigator.userAgent) ){
            // unfortunately, iPhone 5 size needs to be hardcoded...
        	var mainHeight = $(whereToRender).height();
        	if(mainHeight == 0){
                iFrame.css('height',"460px");
        	}
        	else{
        		// use mainContainer height
        		iFrame.css('height',mainHeight);
        	}
        }
        
        // Samsung Galaxy Note 2 - Portrait
        var noteTwoModernMediaQuery = window.matchMedia( "screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-height: 1200px) and (max-device-height: 1300px)");
        var isAppNative = window.sessionStorage.getItem('isAppNative');
        var isAndroid = navigator.userAgent.match(/Android/i);
        
        if(isAppNative && isAndroid && noteTwoModernMediaQuery.matches){
        	var heightDoc = iFrame.contents().height();
        	iFrame.css('height', heightDoc);
        	
            iFrame.load(function() {
            	heightDoc = iFrame.contents().height();
            	iFrame.css('height', heightDoc);
    		});
        }
        
        this.bindUI();
        this.doMore();
	}
});


Clazz.AnimationProvider = Clazz.extend(
	Clazz.Base,
	{
		isNative : null,	
		container : null,
		
		initialize  : function(config) {
			if(config.container != null) {
				this.isNative = config.isNative;
				this.container = config.container;
			}
		},
		
		animate : function(type, callback) {
			if(type == Clazz.ANIMATION_TYPE.SLIDE_LEFT) {
				this.animateLeft(callback);
			} else if(type == Clazz.ANIMATION_TYPE.SLIDE_RIGHT) {
				this.animateRight(callback);
			} else if(type == Clazz.ANIMATION_TYPE.SLIDE_UP) {
				this.animateUp(callback);
			} else if(type == Clazz.ANIMATION_TYPE.SLIDE_DOWN) {
				this.animateDown(callback);
			} else if(type == Clazz.ANIMATION_TYPE.FADE_IN) {
				this.fadeIn(callback);
			} else if(type == Clazz.ANIMATION_TYPE.FADE_OUT) {
				this.fadeOut(callback);
			} 
		},
		
		animateLeft : function(callback) {
			var container =  $(this.container);
			if(!this.isNative) {
				container.animate({
					  left: "-=1250px"
				}, {
					duration : 2000, 
					complete: function() {
						callback(container);
					}		
				});
			} else {
				this.doNativeTransition({type:"reveal",direction:"fromRight"});
				callback(container);
			}
		},
		
		animateRight : function(callback) {
			var container =  $(this.container);
			if(!this.isNative) {
				container.animate({
					  left: "+=1250px"
				}, {
					duration : 1000, 
					complete: function() {
						callback(container);
					}		
				});
			} else {
				this.doNativeTransition({type:"moveIn",direction:"fromLeft"});
				callback(container);
			}
		},
		
		animateUp : function(callback) {
			var container =  $(this.container);
			if(!this.isNative) {
				container.animate({
					  top: "-=1250px"
				}, {
					duration : 1000, 
					complete: function() {
						callback(container);
					}		
				});
			} else {
				this.doNativeTransition({type:"reveal",direction:"fromTop"});
				callback(container);
			}
		},
		
		animateDown : function(callback) {
			var container =  $(this.container);
			if(!this.isNative) {
				container.animate({
					  top: "+=1250px"
				}, {
					duration : 1000, 
					complete: function() {
						callback(container);
					}		
				});
			} else {
				this.doNativeTransition({type:"moveIn",direction:"fromBottom"});
				callback(container);
			}
		},
		
		fadeIn : function(callback) {
			var container =  $(this.container);
			if(!this.isNative) {
				container.css({ opacity: 0.3 });
				
				container.animate({
					  opacity: 1
				}, {
					duration : 2000, 
					complete: function() {
						callback(container);
					}		
				});
			}
			else {
				this.doNativeTransition({type:"fade"});
				callback(container);
			}
		}, 
		
		fadeOut : function(callback) {
			var container =  $(this.container);
			if(!this.isNative) {
				container.css({ opacity: 1 });
				
				container.animate({
					opacity: 0.0
				}, {
					duration : 900, 
					complete: function() {
						callback(container);
					}		
				});
			}
			else {
				this.doNativeTransition({type:"fade"});
				callback(container);
			}
		},
		
		doNativeTransition : function(options){
			var callbackFunction = function(param){
				//console.log(param);
				};
			var className = "Transition";
			var functionName = "transition";
			cordova.exec(callbackFunction,callbackFunction,className,functionName,[options]);
		}
	}
);

Clazz.ANIMATION_TYPE = {
	SLIDE_LEFT : 1,
	SLIDE_RIGHT : 2,
	SLIDE_UP : 3,
	SLIDE_DOWN : 4,
	FADE_IN : 5,
	FADE_OUT : 6
};

Clazz.NAVIGATION_ANIMATION = {
	// push transition in goes to the left, pop going the reverse
	SLIDE_LEFT_RIGHT : 1,
	SLIDE_UP_DOWN : 2,
	FADE_IN_FADE_OUT : 3
};

Clazz.NavigationController = Clazz.extend(
	Clazz.Base,
	{
		stack: [],
		indexMapping : {},

		isNative : false,
		isUsingAnimation : true,
		
		// used in single page single div or multi divs scenario
		mainContainer : null,
		currentIndex: -1,
		
		jQueryContainer : null,
		transitionType : Clazz.NAVIGATION_ANIMATION.SLIDE_LEFT_RIGHT,
		
		initialize : function(config) {
			this.mainContainer = config.mainContainer;
			this.jQueryContainer = $(this.mainContainer);
			
			if(config.transitionType) {
				this.transitionType = config.transitionType;
			}
			
			if(config.isNative) {
				this.isNative = config.isNative;
			}

			if(this.transitionType == Clazz.NAVIGATION_ANIMATION.SLIDE_LEFT_RIGHT) {
				this.pushAnimationTypeForGoingIn = Clazz.ANIMATION_TYPE.FADE_IN;
				this.pushAnimationTypeForGoingOut = Clazz.ANIMATION_TYPE.SLIDE_LEFT;
				
				this.popAnimationTypeForGoingIn = Clazz.ANIMATION_TYPE.SLIDE_RIGHT;
				this.popAnimationTypeForGoingOut = Clazz.ANIMATION_TYPE.FADE_OUT;
			} else if(this.transitionType == Clazz.NAVIGATION_ANIMATION.SLIDE_UP_DOWN) {
				this.pushAnimationTypeForGoingIn = Clazz.ANIMATION_TYPE.FADE_IN;
				this.pushAnimationTypeForGoingOut = Clazz.ANIMATION_TYPE.SLIDE_UP;
				
				this.popAnimationTypeForGoingIn = Clazz.ANIMATION_TYPE.SLIDE_DOWN;
				this.popAnimationTypeForGoingOut = Clazz.ANIMATION_TYPE.FADE_OUT;
			} else  if(this.transitionType == Clazz.NAVIGATION_ANIMATION.FADE_IN_FADE_OUT) {
				this.pushAnimationTypeForGoingIn = Clazz.ANIMATION_TYPE.FADE_IN;
				this.pushAnimationTypeForGoingOut = Clazz.ANIMATION_TYPE.FADE_OUT;
				
				this.popAnimationTypeForGoingIn = Clazz.ANIMATION_TYPE.FADE_IN;
				this.popAnimationTypeForGoingOut = Clazz.ANIMATION_TYPE.FADE_OUT;
			
			}
		},
		
		pop : function(goBack) {
			if(goBack == null) {
				goBack = true;
			}
			
			var self = this;
			var page = this.stack.pop();
		
			var animationProviderMain = new Clazz.AnimationProvider( {
				isNative: self.isNative,
				container: page.element
			});
			
			if(!self.isNative){
				// To prevent UI failure when onComplete() in animate() is not successfully executed
				setTimeout(function(){
                    page.element.remove();
                    page = null;
                    delete page;
                }, 900);
               
                animationProviderMain.animate(this.popAnimationTypeForGoingOut, function(container) {});
			} else {
				page.element.remove();
				page = null;
				delete page;
			}
			
			if(this.stack.length > 0) {
				var topPage = this.stack[this.stack.length-1];
				topPage.element.show();
				
				var animationProviderSub = new Clazz.AnimationProvider( {
					isNative: self.isNative,
					container: topPage.element
				});
					
				// call in transition on sub
				animationProviderSub.animate(this.popAnimationTypeForGoingIn, function(container) {
					container.css("z-index", 4);
					
					if(goBack) {
						history.back();
					}
					self.currentIndex = self.stack.length - 1;
				});
			}
		},
		
		push : function(view) {
			var self = this;
			
			// create top element for pushing
			var newDiv = $("<div></div>");
			
			// add absolute positioning
			newDiv.addClass("spa-maincontent-div");
			
			self.jQueryContainer.append(newDiv);
		
			view.doMore = function(element) {
				var animationProviderMain = new Clazz.AnimationProvider( {
					isNative: self.isNative,
					container: newDiv
				});
				
				animationProviderMain.animate(self.pushAnimationTypeForGoingIn, function(container) {
					container.show();
					container.css("z-index", 4);
				});

				if(self.stack.length > 0) {
					var topPage = self.stack[self.stack.length-1];
					
					// call onPause to save the state of this page
					if(topPage.view.onPause) {
						topPage.view.onPause();
					}
					
					var animationProviderSub = new Clazz.AnimationProvider( {
						isNative: self.isNative,
						container: topPage.element
					});
				
					animationProviderSub.animate(self.pushAnimationTypeForGoingOut, function(container) {
						container.hide();
						container.css("z-index", 3);
						//optimize Stack Element for WU
						if(view.name){
							self.optimizeStackElement(view.name);
						}
					});
				}
				
				// update browser history
				var title = "#page" + self.stack.length;
				var name = view.name ? "#"  + view.name : title;
				
				// push into the stack
				var data = {
					view : view,
					element : newDiv
				};
				
				self.stack.push(data);
				self.currentIndex = self.stack.length - 1;
				self.indexMapping[name] = self.stack.length - 1;
				history.pushState({}, name, name);
			};
			
			// render in its default container
			view.render(newDiv);
		},
		
		getView: function(locationHash) {
			var index = this.indexMapping[locationHash];
				
			if(index != null) {
				var page = this.stack[index];
				
				if(this.currentIndex > index) {
					for(var i = this.currentIndex; i > index; i--) {
						var current = this.stack[i];
						
						// delete the mapping
						// update browser history
						var title = "#page" + i;
						var name = current.view.name ? "#"  + current.view.name : title;
						delete this.indexMapping[name];
						this.pop(false);
					}
				} 
				
				if(page.view.onResume) {
					// call on resume on the current page
					page.view.onResume();
				}
			} 
		},

        /**
         * optimizeStackElement
         * optimize stack element when opened page from menu navigation and home
         * review by ibnu siena
         */
		optimizeStackElement: function(pageName){
			var self = this;
			var stackPosisition = 0;
			if(pageName.indexOf("index")!== -1 || pageName.indexOf("home")!== -1){
				this.removeStack(stackPosisition);
			}else if(pageName.indexOf("profile")!== -1 || pageName.indexOf("sendmoneyOptions")!== -1 || pageName.indexOf("trackTransferOptions")!== -1){
				stackPosisition = 1;
				this.removeStack(stackPosisition);
			}
			
		},
		
		/**
		 * removeStack
		 * remove all stack element page
		 * review by ibnu siena
		 */
		removeStack: function(stackPosisition){
            //saving last page
            var tempPage = this.stack.pop();
            for(var i=this.stack.length; i > stackPosisition; i--){
				var page = this.stack.pop();
				page.element.remove();
				var title = "#page" + this.stack.length;
				var name = page.view.name ? "#"  + page.view.name : title;
				delete this.indexMapping[name];
            }
            // update browser history
            var title = "#page" + this.stack.length;
            var name = tempPage.view.name ? "#"  + tempPage.view.name : title;
            this.stack.push(tempPage);
            this.indexMapping[name] = this.stack.length - 1;
			this.currentIndex = this.stack.length - 1;
		}
	}
);

// To use this function, the apps should inject javascript "isAppNative = true" into webview
Clazz.isAppNative = (Clazz.isAppNative) ? Clazz.isAppNative : window != null && window.sessionStorage.getItem('isAppNative');
Clazz.SplunkLogger = Clazz.extend(Clazz.Base,{

	log: function(error, errorCode, otherInfo){
		var module = "/SplunkLog";
		var message, stackError;
		
		try{
			var isAppNative = window.sessionStorage.getItem('isAppNative');
			var psConfig = Clazz.presentationServiceConfig;
			
			if(isAppNative && Clazz.synchingPresentationServiceConfig){
				psConfig = Clazz.synchingPresentationServiceConfig;
			}
			
			var first=parseInt(location.hostname.charAt(0));
			var url;
			if(isNaN(first) && location.hostname!=="localhost")
			{
				url = location.protocol+"//" + location.host +"/"+ psConfig.context;
			}else
			{
				url = psConfig.protocol+"://" + psConfig.host + ":" + psConfig.port +"/"+ psConfig.context;
			}

			if(typeof(error) === "object"){
				if(error.stack && error.message){
					stackError = error.stack;
					message = error.message;
				}else{
					message = JSON.stringify(error);
				}
			}else{
				message = error;
			}
			
			var urlLocation = location.toString();
			var data = {
					error:errorCode,
					message:message,
					stackError: stackError,
					location: urlLocation
			};
			
			if(otherInfo != null) {
				data.otherInfo = JSON.stringify(otherInfo);
			}
			
			$.support.cors = true;
			$.ajax({
				url:url+module,
				data: JSON.stringify(data),
				contentType: 'application/json',
				crossDomain: true,
				header : {
					'Access-Control-Allow-Headers' : 'x-requested-with',
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				type : "POST",
				dataType : "json",
			});
		}catch(error){
			console.log("error_splunk : "+error.stack);
			throw new Error(error.stack);
		}
	}
});

if(!Clazz.Splunk){
	Clazz.Splunk = new Clazz.SplunkLogger();
}
Clazz.WidgetWithTemplateMobile = Clazz.extend(Clazz.WidgetWithTemplate, {
	renderTemplate: function(data, whereToRender) {
		if(this.templateUrl != null) {
			var self = this;

			var templateProvider = new Clazz.TemplateProvider({ templateEngine : this.templateProvider});

			templateProvider.merge(this.templateUrl, data, function(element) {
				try {
					$(whereToRender).html(element);
					self.bindUI();
					self.postRender(element);
					self.element = element;
					self.doMore(element);
					if (Clazz.WUNavigator.isInMobilePage()) {
						$('html,body').animate({scrollTop: 0},0);
					}
				} catch (error) {
					// send to splunk....
					Clazz.Splunk.log(error, "render_template");
					throw new Error(error.stack);
				}
			});
		}
	}
});
/*
 RequireJS 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(Z){function x(b){return J.call(b)==="[object Function]"}function E(b){return J.call(b)==="[object Array]"}function o(b,e){if(b){var f;for(f=0;f<b.length;f+=1)if(b[f]&&e(b[f],f,b))break}}function M(b,e){if(b){var f;for(f=b.length-1;f>-1;f-=1)if(b[f]&&e(b[f],f,b))break}}function y(b,e){for(var f in b)if(b.hasOwnProperty(f)&&e(b[f],f))break}function N(b,e,f,h){e&&y(e,function(e,j){if(f||!F.call(b,j))h&&typeof e!=="string"?(b[j]||(b[j]={}),N(b[j],e,f,h)):b[j]=e});return b}function t(b,e){return function(){return e.apply(b,
arguments)}}function $(b){if(!b)return b;var e=Z;o(b.split("."),function(b){e=e[b]});return e}function aa(b,e,f){return function(){var h=ga.call(arguments,0),c;if(f&&x(c=h[h.length-1]))c.__requireJsBuild=!0;h.push(e);return b.apply(null,h)}}function ba(b,e,f){o([["toUrl"],["undef"],["defined","requireDefined"],["specified","requireSpecified"]],function(h){var c=h[1]||h[0];b[h[0]]=e?aa(e[c],f):function(){var b=z[O];return b[c].apply(b,arguments)}})}function G(b,e,f,h){e=Error(e+"\nhttp://requirejs.org/docs/errors.html#"+
b);e.requireType=b;e.requireModules=h;if(f)e.originalError=f;return e}function ha(){if(H&&H.readyState==="interactive")return H;M(document.getElementsByTagName("script"),function(b){if(b.readyState==="interactive")return H=b});return H}var j,p,u,B,s,C,H,I,ca,da,ia=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ja=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ka=/^\.\//;p=Object.prototype;var J=p.toString,F=p.hasOwnProperty;p=Array.prototype;var ga=p.slice,la=p.splice,w=!!(typeof window!==
"undefined"&&navigator&&document),fa=!w&&typeof importScripts!=="undefined",ma=w&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,O="_",S=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",z={},r={},P=[],K=!1;if(typeof define==="undefined"){if(typeof requirejs!=="undefined"){if(x(requirejs))return;r=requirejs;requirejs=void 0}typeof require!=="undefined"&&!x(require)&&(r=require,require=void 0);j=requirejs=function(b,e,f,h){var c,o=O;!E(b)&&typeof b!=="string"&&
(c=b,E(e)?(b=e,e=f,f=h):b=[]);if(c&&c.context)o=c.context;(h=z[o])||(h=z[o]=j.s.newContext(o));c&&h.configure(c);return h.require(b,e,f)};j.config=function(b){return j(b)};require||(require=j);j.version="2.0.6";j.jsExtRegExp=/^\/|:|\?|\.js$/;j.isBrowser=w;p=j.s={contexts:z,newContext:function(b){function e(a,d,k){var l,b,i,v,e,c,f,g=d&&d.split("/");l=g;var h=m.map,j=h&&h["*"];if(a&&a.charAt(0)===".")if(d){l=m.pkgs[d]?g=[d]:g.slice(0,g.length-1);d=a=l.concat(a.split("/"));for(l=0;d[l];l+=1)if(b=d[l],
b===".")d.splice(l,1),l-=1;else if(b==="..")if(l===1&&(d[2]===".."||d[0]===".."))break;else l>0&&(d.splice(l-1,2),l-=2);l=m.pkgs[d=a[0]];a=a.join("/");l&&a===d+"/"+l.main&&(a=d)}else a.indexOf("./")===0&&(a=a.substring(2));if(k&&(g||j)&&h){d=a.split("/");for(l=d.length;l>0;l-=1){i=d.slice(0,l).join("/");if(g)for(b=g.length;b>0;b-=1)if(k=h[g.slice(0,b).join("/")])if(k=k[i]){v=k;e=l;break}if(v)break;!c&&j&&j[i]&&(c=j[i],f=l)}!v&&c&&(v=c,e=f);v&&(d.splice(0,e,v),a=d.join("/"))}return a}function f(a){w&&
o(document.getElementsByTagName("script"),function(d){if(d.getAttribute("data-requiremodule")===a&&d.getAttribute("data-requirecontext")===g.contextName)return d.parentNode.removeChild(d),!0})}function h(a){var d=m.paths[a];if(d&&E(d)&&d.length>1)return f(a),d.shift(),g.undef(a),g.require([a]),!0}function c(a,d,k,l){var b,i,v=a?a.indexOf("!"):-1,c=null,f=d?d.name:null,h=a,j=!0,m="";a||(j=!1,a="_@r"+(M+=1));v!==-1&&(c=a.substring(0,v),a=a.substring(v+1,a.length));c&&(c=e(c,f,l),i=q[c]);a&&(c?m=i&&
i.normalize?i.normalize(a,function(a){return e(a,f,l)}):e(a,f,l):(m=e(a,f,l),b=g.nameToUrl(m)));a=c&&!i&&!k?"_unnormalized"+(O+=1):"";return{prefix:c,name:m,parentMap:d,unnormalized:!!a,url:b,originalName:h,isDefine:j,id:(c?c+"!"+m:m)+a}}function p(a){var d=a.id,k=n[d];k||(k=n[d]=new g.Module(a));return k}function r(a,d,k){var b=a.id,c=n[b];if(F.call(q,b)&&(!c||c.defineEmitComplete))d==="defined"&&k(q[b]);else p(a).on(d,k)}function A(a,d){var k=a.requireModules,b=!1;if(d)d(a);else if(o(k,function(d){if(d=
n[d])d.error=a,d.events.error&&(b=!0,d.emit("error",a))}),!b)j.onError(a)}function s(){P.length&&(la.apply(D,[D.length-1,0].concat(P)),P=[])}function u(a,d,k){a=a&&a.map;d=aa(k||g.require,a,d);ba(d,g,a);d.isBrowser=w;return d}function z(a){delete n[a];o(L,function(d,k){if(d.map.id===a)return L.splice(k,1),d.defined||(g.waitCount-=1),!0})}function B(a,d,k){var b=a.map.id,c=a.depMaps,i;if(a.inited){if(d[b])return a;d[b]=!0;o(c,function(a){var a=a.id,b=n[a];return!b||k[a]||!b.inited||!b.enabled?void 0:
i=B(b,d,k)});k[b]=!0;return i}}function C(a,d,b){var l=a.map.id,c=a.depMaps;if(a.inited&&a.map.isDefine){if(d[l])return q[l];d[l]=a;o(c,function(i){var i=i.id,c=n[i];!Q[i]&&c&&(!c.inited||!c.enabled?b[l]=!0:(c=C(c,d,b),b[i]||a.defineDepById(i,c)))});a.check(!0);return q[l]}}function I(a){a.check()}function T(){var a,d,b,l,c=(b=m.waitSeconds*1E3)&&g.startTime+b<(new Date).getTime(),i=[],e=!1,j=!0;if(!U){U=!0;y(n,function(b){a=b.map;d=a.id;if(b.enabled&&!b.error)if(!b.inited&&c)h(d)?e=l=!0:(i.push(d),
f(d));else if(!b.inited&&b.fetched&&a.isDefine&&(e=!0,!a.prefix))return j=!1});if(c&&i.length)return b=G("timeout","Load timeout for modules: "+i,null,i),b.contextName=g.contextName,A(b);j&&(o(L,function(a){if(!a.defined){var a=B(a,{},{}),d={};a&&(C(a,d,{}),y(d,I))}}),y(n,I));if((!c||l)&&e)if((w||fa)&&!V)V=setTimeout(function(){V=0;T()},50);U=!1}}function W(a){p(c(a[0],null,!0)).init(a[1],a[2])}function J(a){var a=a.currentTarget||a.srcElement,d=g.onScriptLoad;a.detachEvent&&!S?a.detachEvent("onreadystatechange",
d):a.removeEventListener("load",d,!1);d=g.onScriptError;a.detachEvent&&!S||a.removeEventListener("error",d,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}var U,X,g,Q,V,m={waitSeconds:60,baseUrl:"./",paths:{},pkgs:{},shim:{}},n={},Y={},D=[],q={},R={},M=1,O=1,L=[];Q={require:function(a){return u(a)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports=q[a.map.id]={}},module:function(a){return a.module={id:a.map.id,uri:a.map.url,config:function(){return m.config&&m.config[a.map.id]||
{}},exports:q[a.map.id]}}};X=function(a){this.events=Y[a.id]||{};this.map=a;this.shim=m.shim[a.id];this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};X.prototype={init:function(a,d,b,c){c=c||{};if(!this.inited){this.factory=d;if(b)this.on("error",b);else this.events.error&&(b=t(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.depMaps.rjsSkipMap=a.rjsSkipMap;this.errback=b;this.inited=!0;this.ignore=c.ignore;c.enabled||this.enabled?this.enable():
this.check()}},defineDepById:function(a,d){var b;o(this.depMaps,function(d,c){if(d.id===a)return b=c,!0});return this.defineDep(b,d)},defineDep:function(a,d){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=d)},fetch:function(){if(!this.fetched){this.fetched=!0;g.startTime=(new Date).getTime();var a=this.map;if(this.shim)u(this,!0)(this.shim.deps||[],t(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},
load:function(){var a=this.map.url;R[a]||(R[a]=!0,g.load(this.map.id,a))},check:function(a){if(this.enabled&&!this.enabling){var d,b,c=this.map.id;b=this.depExports;var e=this.exports,i=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(x(i)){if(this.events.error)try{e=g.execCb(c,i,b,e)}catch(f){d=f}else e=g.execCb(c,i,b,e);if(this.map.isDefine)if((b=this.module)&&b.exports!==void 0&&b.exports!==this.exports)e=
b.exports;else if(e===void 0&&this.usingExports)e=this.exports;if(d)return d.requireMap=this.map,d.requireModules=[this.map.id],d.requireType="define",A(this.error=d)}else e=i;this.exports=e;if(this.map.isDefine&&!this.ignore&&(q[c]=e,j.onResourceLoad))j.onResourceLoad(g,this.map,this.depMaps);delete n[c];this.defined=!0;g.waitCount-=1;g.waitCount===0&&(L=[])}this.defining=!1;if(!a&&this.defined&&!this.defineEmitted)this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0}}else this.fetch()}},
callPlugin:function(){var a=this.map,d=a.id,b=c(a.prefix,null,!1,!0);r(b,"defined",t(this,function(b){var k;k=this.map.name;var i=this.map.parentMap?this.map.parentMap.name:null;if(this.map.unnormalized){if(b.normalize&&(k=b.normalize(k,function(a){return e(a,i,!0)})||""),b=c(a.prefix+"!"+k,this.map.parentMap,!1,!0),r(b,"defined",t(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),b=n[b.id]){if(this.events.error)b.on("error",t(this,function(a){this.emit("error",a)}));
b.enable()}}else k=t(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),k.error=t(this,function(a){this.inited=!0;this.error=a;a.requireModules=[d];y(n,function(a){a.map.id.indexOf(d+"_unnormalized")===0&&z(a.map.id)});A(a)}),k.fromText=function(a,b){var d=K;d&&(K=!1);p(c(a));j.exec(b);d&&(K=!0);g.completeLoad(a)},b.load(a.name,u(a.parentMap,!0,function(a,b,d){a.rjsSkipMap=!0;return g.require(a,b,d)}),k,m)}));g.enable(b,this);this.pluginMaps[b.id]=b},enable:function(){this.enabled=
!0;if(!this.waitPushed)L.push(this),g.waitCount+=1,this.waitPushed=!0;this.enabling=!0;o(this.depMaps,t(this,function(a,b){var k,e;if(typeof a==="string"){a=c(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.depMaps.rjsSkipMap);this.depMaps[b]=a;if(k=Q[a.id]){this.depExports[b]=k(this);return}this.depCount+=1;r(a,"defined",t(this,function(a){this.defineDep(b,a);this.check()}));this.errback&&r(a,"error",this.errback)}k=a.id;e=n[k];!Q[k]&&e&&!e.enabled&&g.enable(a,this)}));y(this.pluginMaps,
t(this,function(a){var b=n[a.id];b&&!b.enabled&&g.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){o(this.events[a],function(a){a(b)});a==="error"&&delete this.events[a]}};return g={config:m,contextName:b,registry:n,defined:q,urlFetched:R,waitCount:0,defQueue:D,Module:X,makeModuleMap:c,configure:function(a){a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/");var b=m.pkgs,e=m.shim,f=m.paths,
j=m.map;N(m,a,!0);m.paths=N(f,a.paths,!0);if(a.map)m.map=N(j||{},a.map,!0,!0);if(a.shim)y(a.shim,function(a,b){E(a)&&(a={deps:a});if(a.exports&&!a.exports.__buildReady)a.exports=g.makeShimExports(a.exports);e[b]=a}),m.shim=e;if(a.packages)o(a.packages,function(a){a=typeof a==="string"?{name:a}:a;b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ka,"").replace(ea,"")}}),m.pkgs=b;y(n,function(a,b){if(!a.inited&&!a.map.unnormalized)a.map=c(b)});if(a.deps||a.callback)g.require(a.deps||
[],a.callback)},makeShimExports:function(a){var b;return typeof a==="string"?(b=function(){return $(a)},b.exports=a,b):function(){return a.apply(Z,arguments)}},requireDefined:function(a,b){var e=c(a,b,!1,!0).id;return F.call(q,e)},requireSpecified:function(a,b){a=c(a,b,!1,!0).id;return F.call(q,a)||F.call(n,a)},require:function(a,d,e,f){var h;if(typeof a==="string"){if(x(d))return A(G("requireargs","Invalid require call"),e);if(j.get)return j.get(g,a,d);a=c(a,d,!1,!0);a=a.id;return!F.call(q,a)?A(G("notloaded",
'Module name "'+a+'" has not been loaded yet for context: '+b)):q[a]}e&&!x(e)&&(f=e,e=void 0);d&&!x(d)&&(f=d,d=void 0);for(s();D.length;)if(h=D.shift(),h[0]===null)return A(G("mismatch","Mismatched anonymous define() module: "+h[h.length-1]));else W(h);p(c(null,f)).init(a,d,e,{enabled:!0});T();return g.require},undef:function(a){s();var b=c(a,null,!0),e=n[a];delete q[a];delete R[b.url];delete Y[a];if(e){if(e.events.defined)Y[a]=e.events;z(a)}},enable:function(a){n[a.id]&&p(a).enable()},completeLoad:function(a){var b,
c,e=m.shim[a]||{},f=e.exports&&e.exports.exports;for(s();D.length;){c=D.shift();if(c[0]===null){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);W(c)}c=n[a];if(!b&&!q[a]&&c&&!c.inited)if(m.enforceDefine&&(!f||!$(f)))if(h(a))return;else return A(G("nodefine","No define call for "+a,null,[a]));else W([a,e.deps||[],e.exports]);T()},toUrl:function(a,b){var c=a.lastIndexOf("."),f=null;c!==-1&&(f=a.substring(c,a.length),a=a.substring(0,c));return g.nameToUrl(e(a,b&&b.id,!0),f)},nameToUrl:function(a,b){var c,
e,f,i,h,g;if(j.jsExtRegExp.test(a))i=a+(b||"");else{c=m.paths;e=m.pkgs;i=a.split("/");for(h=i.length;h>0;h-=1)if(g=i.slice(0,h).join("/"),f=e[g],g=c[g]){E(g)&&(g=g[0]);i.splice(0,h,g);break}else if(f){c=a===f.name?f.location+"/"+f.main:f.location;i.splice(0,h,c);break}i=i.join("/");i+=b||(/\?/.test(i)?"":".js");i=(i.charAt(0)==="/"||i.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+i}return m.urlArgs?i+((i.indexOf("?")===-1?"?":"&")+m.urlArgs):i},load:function(a,b){j.load(g,a,b)},execCb:function(a,b,c,e){return b.apply(e,
c)},onScriptLoad:function(a){if(a.type==="load"||ma.test((a.currentTarget||a.srcElement).readyState))H=null,a=J(a),g.completeLoad(a.id)},onScriptError:function(a){var b=J(a);if(!h(b.id))return A(G("scripterror","Script error",a,[b.id]))}}}};j({});ba(j);if(w&&(u=p.head=document.getElementsByTagName("head")[0],B=document.getElementsByTagName("base")[0]))u=p.head=B.parentNode;j.onError=function(b){throw b;};j.load=function(b,e,f){var h=b&&b.config||{},c;if(w)return c=h.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml",
"html:script"):document.createElement("script"),c.type=h.scriptType||"text/javascript",c.charset="utf-8",c.async=!0,c.setAttribute("data-requirecontext",b.contextName),c.setAttribute("data-requiremodule",e),c.attachEvent&&!(c.attachEvent.toString&&c.attachEvent.toString().indexOf("[native code")<0)&&!S?(K=!0,c.attachEvent("onreadystatechange",b.onScriptLoad)):(c.addEventListener("load",b.onScriptLoad,!1),c.addEventListener("error",b.onScriptError,!1)),c.src=f,I=c,B?u.insertBefore(c,B):u.appendChild(c),
I=null,c;else fa&&(importScripts(f),b.completeLoad(e))};w&&M(document.getElementsByTagName("script"),function(b){if(!u)u=b.parentNode;if(s=b.getAttribute("data-main")){if(!r.baseUrl)C=s.split("/"),ca=C.pop(),da=C.length?C.join("/")+"/":"./",r.baseUrl=da,s=ca;s=s.replace(ea,"");r.deps=r.deps?r.deps.concat(s):[s];return!0}});define=function(b,e,f){var h,c;typeof b!=="string"&&(f=e,e=b,b=null);E(e)||(f=e,e=[]);!e.length&&x(f)&&f.length&&(f.toString().replace(ia,"").replace(ja,function(b,c){e.push(c)}),
e=(f.length===1?["require"]:["require","exports","module"]).concat(e));if(K&&(h=I||ha()))b||(b=h.getAttribute("data-requiremodule")),c=z[h.getAttribute("data-requirecontext")];(c?c.defQueue:P).push([b,e,f])};define.amd={jQuery:!0};j.exec=function(b){return eval(b)};j(r)}})(this);

var configFilePath = "/etc/designs/westernunion/config/config.json";
if(window != null && window.location != null){
	if(window.location.href != null && window.location.href.indexOf("/westernunion-mobile/") != -1){
		configFilePath = "/etc/designs/westernunion/config/config.json";
	}
}

var globalenv = localStorage.getItem("globalEnv");
var envName = localStorage.getItem("globalEnvName");
if (globalenv !== null || globalenv !== undefined) {
	Clazz.globalEnv = JSON.parse(globalenv);
}    

if (envName !== undefined || envName !== null) {
	Clazz.globalEnvName = envName;
}    

if (!Clazz.config){

	$.ajax({
		url : configFilePath,
		success : function(data){
			Clazz.config = jQuery.parseJSON(data);

			if (Clazz.config == null){
				Clazz.config = data;
			}

			var matchedEnv = null, finalConfigs = [];
			if (Clazz.config !== null && Clazz.config.length !== 0) {
				for(var i=0;i<Clazz.config.length;i++){
					if (Clazz.globalEnvName === Clazz.config[i].name) {
						matchedEnv = Clazz.config[i];
					}    
				}
			}    

			if (Clazz.globalEnv !== undefined && Clazz.globalEnv !== null 
					&& Clazz.globalEnv.length !== 0 && matchedEnv !== null) {
				var globalConfigNames = [];
				for (var j=0; j<Clazz.globalEnv[0].configurations.length;j++) {
					globalConfigNames.push(Clazz.globalEnv[0].configurations[j].name);
				}     

				finalConfigs = $.merge(finalConfigs, Clazz.globalEnv[0].configurations);

				for (var k=0; k<matchedEnv.configurations.length;k++) {
					if ($.inArray(matchedEnv.configurations[k].name, globalConfigNames) === -1) {
						finalConfigs.push(matchedEnv.configurations[k]);
					}   
				} 
			}    

			if(!Clazz.getServer){
				Clazz.getServer = function(){
					var configs = Clazz.config;
					var environment = Clazz.environment;
					for(var i=0;i<configs.length;i++){
						var currentServer = configs[i];
						if (!environment) {
							return currentServer;
						} else if(currentServer.name === environment){
							return currentServer;
						}
					}
					return currentServer;
				};
			}

			if(!Clazz.getConfiguration){
				Clazz.getConfiguration = function(configName){
					var configuration, server, serverConfigurations;
					if (matchedEnv !== null && finalConfigs.length !== 0) {
						serverConfigurations = finalConfigs;
					} else {
						server = Clazz.getServer();
						serverConfigurations = server.configurations;
					}    
					for(var i=0;i<serverConfigurations.length;i++){
						var currentConfig = serverConfigurations[i];
						if(currentConfig.name === configName){
							configuration = currentConfig;
						}
					}

					return configuration;
				};
			}

			if(!Clazz.presentationServiceConfig){
				var configuration = Clazz.getConfiguration("presentationservices");
				Clazz.presentationServiceConfig = configuration.properties;
			}
			if(!Clazz.serverServiceConfig){
				var configuration = Clazz.getConfiguration("Server");
				Clazz.serverServiceConfig = configuration.properties;
			}
			if(!Clazz.synchingPresentationServiceConfig){
				var configuration = Clazz.getConfiguration("synching-presentationservices");
				Clazz.synchingPresentationServiceConfig = configuration.properties;
			}
		},
		async : false
	});
}

var langConfigFilePath = "/etc/designs/westernunion/config/langConfig.json";
if(window != null && window.location != null){
	if(window.location.href != null && window.location.href.indexOf("/westernunion-mobile/") != -1){
		langConfigFilePath = "/etc/designs/westernunion/config/langConfig.json";
	}
}

if (!Clazz.langConfig){
	$.ajax({
		url : langConfigFilePath,
		success : function(data){
			Clazz.langConfig = jQuery.parseJSON(data);

			if (Clazz.langConfig == null){
				Clazz.langConfig = data;
			}
		},
		async : false
	});
}
// MSDropDown - jquery.dd.js
// author: Marghoob Suleman - http://www.marghoobsuleman.com/
// Date: 10 Nov, 2012 
// Version: 3.5.2
// Revision: 27
// web: www.marghoobsuleman.com
/*
// msDropDown is free jQuery Plugin: you can redistribute it and/or modify
// it under the terms of the either the MIT License or the Gnu General Public License (GPL) Version 2
*/ 

var msBeautify=msBeautify||{};(function($){function dd(element,settings){var settings=$.extend(true,{byJson:{data:null,selectedIndex:0,name:null,size:0,multiple:false,width:250},mainCSS:"dd",height:120,visibleRows:7,rowHeight:0,showIcon:true,zIndex:9999,useSprite:false,animStyle:"slideDown",event:"click",openDirection:"auto",jsonTitle:true,style:"",disabledOpacity:.7,disabledOptionEvents:true,childWidth:0,enableCheckbox:false,checkboxNameSuffix:"_mscheck",append:"",prepend:"",reverseMode:true,roundedCorner:true,enableAutoFilter:true,on:{create:null,open:null,close:null,add:null,remove:null,change:null,blur:null,click:null,dblclick:null,mousemove:null,mouseover:null,mouseout:null,focus:null,mousedown:null,mouseup:null}},settings);var $this=this;var holderId={postElementHolder:"_msddHolder",postID:"_msdd",postTitleID:"_title",postTitleTextID:"_titleText",postChildID:"_child"};var css={dd:settings.mainCSS,ddTitle:"ddTitle",arrow:"ddArrow arrowoff",ddChild:"ddChild",ddTitleText:"ddTitleText",disabled:"disabled",enabled:"enabled",ddOutOfVision:"ddOutOfVision",borderTop:"borderTop",noBorderTop:"noBorderTop",selected:"selected",divider:"divider",optgroup:"optgroup",optgroupTitle:"optgroupTitle",description:"description",label:"ddlabel",hover:"hover",disabledAll:"disabledAll"};var css_i={li:"_msddli_",borderRadiusTp:"borderRadiusTp",ddChildMore:"border shadow",fnone:"fnone"};var isList=false,isMultiple=false,isDisabled=false,cacheElement={},element,orginial={},isOpen=false;var DOWN_ARROW=40,UP_ARROW=38,LEFT_ARROW=37,RIGHT_ARROW=39,ESCAPE=27,ENTER=13,ALPHABETS_START=47,SHIFT=16,CONTROL=17,BACKSPACE=8,DELETE=46;var shiftHolded=false,controlHolded=false,lastTarget=null,forcedTrigger=false,oldSelected,isCreated=false;var doc=document,ua=window.navigator.userAgent,isIE=ua.match(/msie/i);settings.reverseMode=settings.reverseMode.toString();settings.roundedCorner=settings.roundedCorner.toString();var isArray=function(e){return Object.prototype.toString.call(e)=="[object Array]"?true:false};var msieversion=function(){var e=ua.indexOf("MSIE");if(e>0){return parseInt(ua.substring(e+5,ua.indexOf(".",e)))}else{return 0}};var checkDataSetting=function(){settings.mainCSS=$("#"+element).data("maincss")||settings.mainCSS;settings.visibleRows=$("#"+element).data("visiblerows")||settings.visibleRows;if($("#"+element).data("showicon")==false){settings.showIcon=$("#"+element).data("showicon")}settings.useSprite=$("#"+element).data("usesprite")||settings.useSprite;settings.animStyle=$("#"+element).data("animstyle")||settings.animStyle;settings.event=$("#"+element).data("event")||settings.event;settings.openDirection=$("#"+element).data("opendirection")||settings.openDirection;settings.jsonTitle=$("#"+element).data("jsontitle")||settings.jsonTitle;settings.disabledOpacity=$("#"+element).data("disabledopacity")||settings.disabledOpacity;settings.childWidth=$("#"+element).data("childwidth")||settings.childWidth;settings.enableCheckbox=$("#"+element).data("enablecheckbox")||settings.enableCheckbox;settings.checkboxNameSuffix=$("#"+element).data("checkboxnamesuffix")||settings.checkboxNameSuffix;settings.append=$("#"+element).data("append")||settings.append;settings.prepend=$("#"+element).data("prepend")||settings.prepend;settings.reverseMode=$("#"+element).data("reversemode")||settings.reverseMode;settings.roundedCorner=$("#"+element).data("roundedcorner")||settings.roundedCorner;settings.enableAutoFilter=$("#"+element).data("enableautofilter")||settings.enableAutoFilter;settings.reverseMode=settings.reverseMode.toString();settings.roundedCorner=settings.roundedCorner.toString();settings.enableAutoFilter=settings.enableAutoFilter.toString()};var getElement=function(e){if(cacheElement[e]===undefined){cacheElement[e]=doc.getElementById(e)}return cacheElement[e]};var getIndex=function(e){var t=getPostID("postChildID");return $("#"+t+" li."+css_i.li).index(e)};var createByJson=function(){if(settings.byJson.data){var validData=["description","image","title"];try{if(!element.id){element.id="dropdown"+msBeautify.counter}settings.byJson.data=eval(settings.byJson.data);var id="msdropdown"+msBeautify.counter++;var obj={};obj.id=id;obj.name=settings.byJson.name||element.id;if(settings.byJson.size>0){obj.size=settings.byJson.size}obj.multiple=settings.byJson.multiple;var oSelect=createElement("select",obj);for(var i=0;i<settings.byJson.data.length;i++){var current=settings.byJson.data[i];var opt=new Option(current.text,current.value);for(var p in current){if(p.toLowerCase()!="text"){var key=$.inArray(p.toLowerCase(),validData)!=-1?"data-":"";opt.setAttribute(key+p,current[p])}}oSelect.options[i]=opt}getElement(element.id).appendChild(oSelect);oSelect.selectedIndex=settings.byJson.selectedIndex;$(oSelect).css({width:settings.byJson.width+"px"});element=oSelect}catch(e){throw"There is an error in json data."}}};var init=function(){createByJson();if(!element.id){element.id="msdrpdd"+msBeautify.counter++}element=element.id;$this.element=element;checkDataSetting();isDisabled=getElement(element).disabled;var e=settings.enableCheckbox;if(e.toString()==="true"){getElement(element).multiple=true;settings.enableCheckbox=true}isList=getElement(element).size>1||getElement(element).multiple==true?true:false;if(isList){isMultiple=getElement(element).multiple}mergeAllProp();createLayout();updateProp("uiData",getDataAndUI());updateProp("selectedOptions",$("#"+element+" option:selected"));var t=getPostID("postChildID");oldSelected=$("#"+t+" li."+css.selected);if(settings.reverseMode==="true"){$("#"+element).on("change",function(){setValue(this.selectedIndex)})}getElement(element).refresh=function(e){$("#"+element).msDropdown().data("dd").refresh()}};var getPostID=function(e){return element+holderId[e]};var getInternalStyle=function(e){var t=e.style===undefined?"":e.style.cssText;return t};var parseOption=function(opt){var imagePath="",title="",description="",value=-1,text="",className="",imagecss="",index;if(opt!==undefined){var attrTitle=opt.title||"";if(attrTitle!=""){var reg=/^\{.*\}$/;var isJson=reg.test(attrTitle);if(isJson&&settings.jsonTitle){var obj=eval("["+attrTitle+"]")}title=isJson&&settings.jsonTitle?obj[0].title:title;description=isJson&&settings.jsonTitle?obj[0].description:description;imagePath=isJson&&settings.jsonTitle?obj[0].image:attrTitle;imagecss=isJson&&settings.jsonTitle?obj[0].imagecss:imagecss;index=opt.index}text=opt.text||"";value=opt.value||"";className=opt.className||"";title=$(opt).prop("data-title")||$(opt).data("title")||title||"";description=$(opt).prop("data-description")||$(opt).data("description")||description||"";imagePath=$(opt).prop("data-image")||$(opt).data("image")||imagePath||"";imagecss=$(opt).prop("data-imagecss")||$(opt).data("imagecss")||imagecss||"";index=$(opt).index()}var o={image:imagePath,title:title,description:description,value:value,text:text,className:className,imagecss:imagecss,index:index};return o};var createElement=function(e,t,n){var r=doc.createElement(e);if(t){for(var i in t){switch(i){case"style":r.style.cssText=t[i];break;default:r[i]=t[i];break}}}if(n){r.innerHTML=n}return r};var hideOriginal=function(){var e=getPostID("postElementHolder");if($("#"+e).length==0){var t={style:"height: 0px;overflow: hidden;position: absolute;",className:css.ddOutOfVision};t.id=e;var n=createElement("div",t);$("#"+element).after(n);$("#"+element).appendTo($("#"+e))}else{$("#"+e).css({height:0,overflow:"hidden",position:"absolute"})}getElement(element).tabIndex=-1};var createWrapper=function(){var e=settings.roundedCorner=="true"?" borderRadius":"";var t={className:css.dd+" ddcommon"+e};var n=getInternalStyle(getElement(element));var r=$("#"+element).outerWidth();t.style="width: "+r+"px;";if(n.length>0){t.style=t.style+""+n}t.id=getPostID("postID");t.tabIndex=getElement(element).tabIndex;var i=createElement("div",t);return i};var createTitle=function(){var e;if(getElement(element).selectedIndex>=0){e=getElement(element).options[getElement(element).selectedIndex]}else{e={value:"",text:""}}var t="",n="";var r=$("#"+element).data("usesprite");if(r){settings.useSprite=r}if(settings.useSprite!=false){t=" "+settings.useSprite;n=" "+e.className}var i=settings.roundedCorner=="true"?" "+css_i.borderRadiusTp:"";var s=createElement("div",{className:css.ddTitle+t+i});var o=createElement("span",{className:css.divider});var u=createElement("span",{className:css.arrow});var a=getPostID("postTitleID");var f=createElement("span",{className:css.ddTitleText+n,id:a});var l=parseOption(e);var c=l.image;var h=l.text||"";if(c!=""&&settings.showIcon){var p=createElement("img");p.src=c;if(l.imagecss!=""){p.className=l.imagecss+" "}}var d=createElement("span",{className:css.label},h);s.appendChild(o);s.appendChild(u);if(p){f.appendChild(p)}f.appendChild(d);d.setAttribute("class",css.label+" wu-description-text");s.appendChild(f);var v=createElement("span",{className:css.description},l.description);f.appendChild(v);return s};var createFilterBox=function(){var e=getPostID("postTitleTextID");var t=settings.roundedCorner=="true"?"borderRadius":"";var n=createElement("input",{id:e,type:"text",value:"",autocomplete:"off",className:"text shadow "+t,style:"display: none"});return n};var createChild=function(e){var t={};var n=getInternalStyle(e);if(n.length>0){t.style=n}var r=e.disabled?css.disabled:css.enabled;r=e.selected?r+" "+css.selected:r;r=r+" "+css_i.li;t.className=r;if(settings.useSprite!=false){t.className=r+" "+e.className}var i=createElement("li",t);var s=parseOption(e);if(s.title!=""){i.title=s.title}var o=s.image;if(o!=""&&settings.showIcon){var u=createElement("img");u.src=o;if(s.imagecss!=""){u.className=s.imagecss+" "}}if(s.description!=""){var a=createElement("span",{className:css.description},s.description)}var f=e.text||"";var l=createElement("span",{className:css.label},f);l.setAttribute("class",css.label+" wu-description-text");if(settings.enableCheckbox===true){var c=createElement("input",{type:"checkbox",name:element+settings.checkboxNameSuffix+"[]",value:e.value||"",className:"checkbox"});i.appendChild(c);if(settings.enableCheckbox===true){c.checked=e.selected?true:false}}if(u){i.appendChild(u)}i.appendChild(l);if(a){i.appendChild(a)}else{if(u){u.className=u.className+css_i.fnone}}var h=createElement("div",{className:"clear"});i.appendChild(h);return i};var createChildren=function(){var e=getPostID("postChildID");var t={className:css.ddChild+" ddchild_ "+css_i.ddChildMore,id:e};if(isList==false){t.style="z-index: "+settings.zIndex}else{t.style="z-index:1"}var n=$("#"+element).data("childwidth")||settings.childWidth;if(n){t.style=(t.style||"")+";width:"+n}var r=createElement("div",t);var i=createElement("ul");if(settings.useSprite!=false){i.className=settings.useSprite}var s=getElement(element).children;for(var o=0;o<s.length;o++){var u=s[o];var a;if(u.nodeName.toLowerCase()=="optgroup"){a=createElement("li",{className:css.optgroup});var f=createElement("span",{className:css.optgroupTitle},u.label);a.appendChild(f);var l=u.children;var c=createElement("ul");for(var h=0;h<l.length;h++){var p=createChild(l[h]);c.appendChild(p)}a.appendChild(c)}else{a=createChild(u)}i.appendChild(a)}r.appendChild(i);return r};var childHeight=function(e){var t=getPostID("postChildID");if(e){if(e==-1){$("#"+t).css({height:"auto",overflow:"auto"})}else{$("#"+t).css("height",e+"px")}return false}var n;var r=getElement(element).options.length;if(r>settings.visibleRows||settings.visibleRows){var i=$("#"+t+" li:first");var s=parseInt(i.css("padding-bottom"))+parseInt(i.css("padding-top"));if(settings.rowHeight===0){$("#"+t).css({visibility:"hidden",display:"block"});settings.rowHeight=Math.ceil(i.height());$("#"+t).css({visibility:"visible"});if(!isList||settings.enableCheckbox===true){$("#"+t).css({display:"none"})}}n=(settings.rowHeight+s)*Math.min(settings.visibleRows,r)+3}else if(isList){n=$("#"+element).height()}return n};var applyChildEvents=function(){var e=getPostID("postChildID");$("#"+e).on("click",function(e){if(isDisabled===true)return false;e.preventDefault();e.stopPropagation();if(isList){bind_on_events()}});$("#"+e+" li."+css.enabled).on("click",function(e){if(e.target.nodeName.toLowerCase()!=="input"){close(this)}});$("#"+e+" li."+css.enabled).on("mousedown",function(t){if(isDisabled===true)return false;oldSelected=$("#"+e+" li."+css.selected);lastTarget=this;t.preventDefault();t.stopPropagation();if(settings.enableCheckbox===true){if(t.target.nodeName.toLowerCase()==="input"){controlHolded=true}}if(isList===true){if(isMultiple){if(shiftHolded===true){$(this).addClass(css.selected);var n=$("#"+e+" li."+css.selected);var r=getIndex(this);if(n.length>1){var i=$("#"+e+" li."+css_i.li);var s=getIndex(n[0]);var o=getIndex(n[1]);if(r>o){s=r;o=o+1}for(var u=Math.min(s,o);u<=Math.max(s,o);u++){var a=i[u];if($(a).hasClass(css.enabled)){$(a).addClass(css.selected)}}}}else if(controlHolded===true){$(this).toggleClass(css.selected);if(settings.enableCheckbox===true){var f=this.childNodes[0];f.checked=!f.checked}}else{$("#"+e+" li."+css.selected).removeClass(css.selected);$("#"+e+" input:checkbox").prop("checked",false);$(this).addClass(css.selected);if(settings.enableCheckbox===true){this.childNodes[0].checked=true}}}else{$("#"+e+" li."+css.selected).removeClass(css.selected);$(this).addClass(css.selected)}}else{$("#"+e+" li."+css.selected).removeClass(css.selected);$(this).addClass(css.selected)}});$("#"+e+" li."+css.enabled).on("mouseenter",function(e){if(isDisabled===true)return false;e.preventDefault();e.stopPropagation();if(lastTarget!=null){if(isMultiple){$(this).addClass(css.selected);if(settings.enableCheckbox===true){this.childNodes[0].checked=true}}}});$("#"+e+" li."+css.enabled).on("mouseover",function(e){if(isDisabled===true)return false;$(this).addClass(css.hover)});$("#"+e+" li."+css.enabled).on("mouseout",function(t){if(isDisabled===true)return false;$("#"+e+" li."+css.hover).removeClass(css.hover)});$("#"+e+" li."+css.enabled).on("mouseup",function(t){if(isDisabled===true)return false;t.preventDefault();t.stopPropagation();if(settings.enableCheckbox===true){controlHolded=false}var n=$("#"+e+" li."+css.selected).length;forcedTrigger=oldSelected.length!=n||n==0?true:false;fireAfterItemClicked();unbind_on_events();bind_on_events();lastTarget=null});if(settings.disabledOptionEvents==false){$("#"+e+" li."+css_i.li).on("click",function(e){if(isDisabled===true)return false;fireOptionEventIfExist(this,"click")});$("#"+e+" li."+css_i.li).on("mouseenter",function(e){if(isDisabled===true)return false;fireOptionEventIfExist(this,"mouseenter")});$("#"+e+" li."+css_i.li).on("mouseover",function(e){if(isDisabled===true)return false;fireOptionEventIfExist(this,"mouseover")});$("#"+e+" li."+css_i.li).on("mouseout",function(e){if(isDisabled===true)return false;fireOptionEventIfExist(this,"mouseout")});$("#"+e+" li."+css_i.li).on("mousedown",function(e){if(isDisabled===true)return false;fireOptionEventIfExist(this,"mousedown")});$("#"+e+" li."+css_i.li).on("mouseup",function(e){if(isDisabled===true)return false;fireOptionEventIfExist(this,"mouseup")})}};var removeChildEvents=function(){var e=getPostID("postChildID");$("#"+e).off("click");$("#"+e+" li."+css.enabled).off("mouseenter");$("#"+e+" li."+css.enabled).off("click");$("#"+e+" li."+css.enabled).off("mouseover");$("#"+e+" li."+css.enabled).off("mouseout");$("#"+e+" li."+css.enabled).off("mousedown");$("#"+e+" li."+css.enabled).off("mouseup")};var triggerBypassingHandler=function(e,t,n){$("#"+e).off(t,n);$("#"+e).trigger(t);$("#"+e).on(t,n)};var applyEvents=function(){var e=getPostID("postID");var t=getPostID("postTitleTextID");var n=getPostID("postChildID");$("#"+e).on(settings.event,function(e){if(isDisabled===true)return false;fireEventIfExist(settings.event);e.preventDefault();e.stopPropagation();open(e)});$("#"+e).on("keydown",function(e){var t=e.which;if(!isOpen&&(t==ENTER||t==UP_ARROW||t==DOWN_ARROW||t==LEFT_ARROW||t==RIGHT_ARROW||t>=ALPHABETS_START&&!isList)){open(e);e.preventDefault();e.stopImmediatePropagation()}});$("#"+e).on("focus",wrapperFocusHandler);$("#"+e).on("blur",wrapperBlurHandler);$("#"+t).on("blur",function(t){triggerBypassingHandler(e,"focus",wrapperFocusHandler)});applyChildEvents();$("#"+e).on("dblclick",on_dblclick);$("#"+e).on("mousemove",on_mousemove);$("#"+e).on("mouseenter",on_mouseover);$("#"+e).on("mouseleave",on_mouseout);$("#"+e).on("mousedown",on_mousedown);$("#"+e).on("mouseup",on_mouseup)};var wrapperFocusHandler=function(e){fireEventIfExist("focus")};var wrapperBlurHandler=function(e){fireEventIfExist("blur")};var fixedForList=function(){var e=getPostID("postID");var t=getPostID("postChildID");if(isList===true&&settings.enableCheckbox===false){$("#"+e+" ."+css.ddTitle).hide();$("#"+t).css({display:"block",position:"relative"})}else{if(settings.enableCheckbox===false){isMultiple=false}$("#"+e+" ."+css.ddTitle).show();$("#"+t).css({display:"none",position:"absolute"});var n=$("#"+t+" li."+css.selected)[0];$("#"+t+" li."+css.selected).removeClass(css.selected);var r=getIndex($(n).addClass(css.selected));setValue(r)}childHeight(childHeight())};var fixedForDisabled=function(){var e=getPostID("postID");var t=isDisabled==true?settings.disabledOpacity:1;if(isDisabled===true){$("#"+e).addClass(css.disabledAll)}else{$("#"+e).removeClass(css.disabledAll)}};var fixedSomeUI=function(){var e=getPostID("postTitleTextID");if(settings.enableAutoFilter=="true"){$("#"+e).on("keyup",applyFilters)}fixedForList();fixedForDisabled()};var createLayout=function(){var e=createWrapper();var t=createTitle();e.appendChild(t);var n=createFilterBox();var r=createChildren();e.appendChild(r);$("#"+element).after(e);hideOriginal();fixedSomeUI();applyEvents();var i=getPostID("postChildID");if(settings.append!=""){$("#"+i).append(settings.append)}if(settings.prepend!=""){$("#"+i).prepend(settings.prepend)}if(typeof settings.on.create=="function"){settings.on.create.apply($this,arguments)}};var selectUI_LI=function(e){function r(e){$($("#"+t+" li."+css_i.li)[e]).addClass(css.selected);if(settings.enableCheckbox===true){$($("#"+t+" li."+css_i.li)[e]).find("input.checkbox").prop("checked","checked")}}var t=getPostID("postChildID");$("#"+t+" li."+css_i.li).removeClass(css.selected);if(settings.enableCheckbox===true){$("#"+t+" li."+css_i.li+" input.checkbox").prop("checked",false)}if(isArray(e)===true){for(var n=0;n<e.length;n++){r(e[n])}}else{r(e)}};var selectMutipleOptions=function(e,t){var n=getPostID("postChildID");var r=e||$("#"+n+" li."+css.selected);for(var i=0;i<r.length;i++){var s=t===true?r[i]:getIndex(r[i]);getElement(element).options[s].selected="selected"}setValue(r)};var fireAfterItemClicked=function(){var e=getPostID("postChildID");var t=$("#"+e+" li."+css.selected);if(isMultiple&&(shiftHolded||controlHolded)||forcedTrigger){getElement(element).selectedIndex=-1}var n;if(t.length==0){n=-1}else if(t.length>1){selectMutipleOptions(t)}else{n=getIndex($("#"+e+" li."+css.selected))}if((getElement(element).selectedIndex!=n||forcedTrigger)&&t.length<=1){forcedTrigger=false;var r=has_handler("change");getElement(element).selectedIndex=n;setValue(n);if(typeof settings.on.change=="function"){var i=getDataAndUI();settings.on.change(i.data,i.ui)}$("#"+element).trigger("change")}};var setValue=function(e,t){if(e!==undefined){var n,r,i;if(e==-1){n=-1;r="";i="";updateTitleUI(-1)}else{if(typeof e!="object"){var s=getElement(element).options[e];getElement(element).selectedIndex=e;n=e;r=parseOption(s);i=e>=0?getElement(element).options[e].text:"";updateTitleUI(undefined,r);r=r.value}else{n=t&&t.index||getElement(element).selectedIndex;r=t&&t.value||getElement(element).value;i=t&&t.text||getElement(element).options[getElement(element).selectedIndex].text||"";updateTitleUI(n)}}updateProp("selectedIndex",n);updateProp("value",r);updateProp("selectedText",i);updateProp("children",getElement(element).children);updateProp("uiData",getDataAndUI());updateProp("selectedOptions",$("#"+element+" option:selected"))}};var has_handler=function(e){var t={byElement:false,byJQuery:false,hasEvent:false};var n=$("#"+element);try{if(n.prop("on"+e)!==null){t.hasEvent=true;t.byElement=true}}catch(r){}var i;if(typeof $._data=="function"){i=$._data(n[0],"events")}else{i=n.data("events")}if(i&&i[e]){t.hasEvent=true;t.byJQuery=true}return t};var bind_on_events=function(){unbind_on_events();$("body").on("click",close)};var unbind_on_events=function(){$("body").off("click",close)};var applyFilters=function(e){if(e.keyCode<ALPHABETS_START&&e.keyCode!=BACKSPACE&&e.keyCode!=DELETE){return false}var t=getPostID("postChildID");var n=getPostID("postTitleTextID");var r=getElement(n).value;if(r.length==0){$("#"+t+" li:hidden").show();childHeight(childHeight())}else{$("#"+t+" li").hide();var i=$("#"+t+" li:Contains('"+r+"')").show();if($("#"+t+" li:visible").length<=settings.visibleRows){childHeight(-1)}if(i.length>0&&!isList||!isMultiple){$("#"+t+" ."+css.selected).removeClass(css.selected);$(i[0]).addClass(css.selected)}}if(!isList){adjustOpen()}};var hideFilterBox=function(){var e=getPostID("postTitleTextID");if($("#"+e+":visible").length>0){$("#"+e+":visible").hide();getElement(e).blur()}};var on_keydown=function(e){var t=getPostID("postTitleTextID");var n=getPostID("postChildID");switch(e.keyCode){case DOWN_ARROW:case RIGHT_ARROW:e.preventDefault();e.stopPropagation();next();break;case UP_ARROW:case LEFT_ARROW:e.preventDefault();e.stopPropagation();previous();break;case ESCAPE:case ENTER:e.preventDefault();e.stopPropagation();close();var r=$("#"+n+" li."+css.selected).length;forcedTrigger=oldSelected.length!=r||r==0?true:false;fireAfterItemClicked();unbind_on_events();lastTarget=null;break;case SHIFT:shiftHolded=true;break;case CONTROL:controlHolded=true;break;default:break}if(isDisabled===true)return false;fireEventIfExist("keydown")};var on_keyup=function(e){switch(e.keyCode){case SHIFT:shiftHolded=false;break;case CONTROL:controlHolded=false;break}if(isDisabled===true)return false;fireEventIfExist("keyup")};var on_dblclick=function(e){if(isDisabled===true)return false;fireEventIfExist("dblclick")};var on_mousemove=function(e){if(isDisabled===true)return false;fireEventIfExist("mousemove")};var on_mouseover=function(e){if(isDisabled===true)return false;e.preventDefault();fireEventIfExist("mouseover")};var on_mouseout=function(e){if(isDisabled===true)return false;e.preventDefault();fireEventIfExist("mouseout")};var on_mousedown=function(e){if(isDisabled===true)return false;fireEventIfExist("mousedown")};var on_mouseup=function(e){if(isDisabled===true)return false;fireEventIfExist("mouseup")};var option_has_handler=function(e,t){var n={byElement:false,byJQuery:false,hasEvent:false};if($(e).prop("on"+t)!=undefined){n.hasEvent=true;n.byElement=true}var r=$(e).data("events");if(r&&r[t]){n.hasEvent=true;n.byJQuery=true}return n};var fireOptionEventIfExist=function(e,t){if(settings.disabledOptionEvents==false){var n=getElement(element).options[getIndex(e)];if(option_has_handler(n,t).hasEvent===true){if(option_has_handler(n,t).byElement===true){n["on"+t]()}if(option_has_handler(n,t).byJQuery===true){switch(t){case"keydown":case"keyup":break;default:$(n).trigger(t);break}}return false}}};var fireEventIfExist=function(e){if(typeof settings.on[e]=="function"){settings.on[e].apply(this,arguments)}if(has_handler(e).hasEvent===true){if(has_handler(e).byElement===true){getElement(element)["on"+e]()}else if(has_handler(e).byJQuery===true){switch(e){case"keydown":case"keyup":break;default:$("#"+element).triggerHandler(e);break}}return false}};var scrollToIfNeeded=function(e){var t=getPostID("postChildID");e=e!==undefined?e:$("#"+t+" li."+css.selected);if(e.length>0){var n=parseInt($(e).position().top);var r=parseInt($("#"+t).height());if(n>r){var i=n+$("#"+t).scrollTop()-r/2;$("#"+t).animate({scrollTop:i},500)}}};var next=function(){function i(e){e=e+1;if(e>t.length){return e}if($(t[e]).hasClass(css.enabled)===true){return e}return e=i(e)}var e=getPostID("postChildID");var t=$("#"+e+" li:visible."+css_i.li);var n=$("#"+e+" li:visible."+css.selected);n=n.length==0?t[0]:n;var r=$("#"+e+" li:visible."+css_i.li).index(n);if(r<t.length-1){r=i(r);if(r<t.length){if(!shiftHolded||!isList||!isMultiple){$("#"+e+" ."+css.selected).removeClass(css.selected)}$(t[r]).addClass(css.selected);updateTitleUI(r);if(isList==true){fireAfterItemClicked()}scrollToIfNeeded($(t[r]))}if(!isList){adjustOpen()}}};var previous=function(){function s(e){e=e-1;if(e<0){return e}if($(n[e]).hasClass(css.enabled)===true){return e}return e=s(e)}var e=getPostID("postChildID");var t=$("#"+e+" li:visible."+css.selected);var n=$("#"+e+" li:visible."+css_i.li);var r=$("#"+e+" li:visible."+css_i.li).index(t[0]);if(r>=0){r=s(r);if(r>=0){if(!shiftHolded||!isList||!isMultiple){$("#"+e+" ."+css.selected).removeClass(css.selected)}$(n[r]).addClass(css.selected);updateTitleUI(r);if(isList==true){fireAfterItemClicked()}if(parseInt($(n[r]).position().top+$(n[r]).height())<=0){var i=$("#"+e).scrollTop()-$("#"+e).height()-$(n[r]).height();$("#"+e).animate({scrollTop:i},500)}}if(!isList){adjustOpen()}}};var adjustOpen=function(){var e=getPostID("postID");var t=getPostID("postChildID");var n=$("#"+e).offset();var r=$("#"+e).height();var i=$(window).height();var s=$(window).scrollTop();var o=$("#"+t).height();var u=$("#"+e).height();var a=settings.openDirection.toLowerCase();if((i+s<Math.floor(o+r+n.top)||a=="alwaysup")&&a!="alwaysdown"){u=o;$("#"+t).css({top:"-"+u+"px",display:"block",zIndex:settings.zIndex});if(settings.roundedCorner=="true"){$("#"+e).removeClass("borderRadius borderRadiusTp").addClass("borderRadiusBtm")}var u=$("#"+t).offset().top;if(u<-10){$("#"+t).css({top:parseInt($("#"+t).css("top"))-u+20+s+"px",zIndex:settings.zIndex});if(settings.roundedCorner=="true"){$("#"+e).removeClass("borderRadiusBtm borderRadiusTp").addClass("borderRadius")}}}else{$("#"+t).css({top:u+"px",zIndex:settings.zIndex});if(settings.roundedCorner=="true"){$("#"+e).removeClass("borderRadius borderRadiusBtm").addClass("borderRadiusTp")}}if(isIE){if(msieversion()<=7){$("div.ddcommon").css("zIndex",settings.zIndex-10);$("#"+e).css("zIndex",settings.zIndex+5)}}};var open=function(e){if(isDisabled===true)return false;var t=getPostID("postID");var n=getPostID("postChildID");if(!isOpen){isOpen=true;if(msBeautify.oldDiv!=""){$("#"+msBeautify.oldDiv).css({display:"none"})}msBeautify.oldDiv=n;$("#"+n+" li:hidden").show();adjustOpen();var r=settings.animStyle;if(r==""||r=="none"){$("#"+n).css({display:"block"});scrollToIfNeeded();if(typeof settings.on.open=="function"){var i=getDataAndUI();settings.on.open(i.data,i.ui)}}else{$("#"+n)[r]("fast",function(){scrollToIfNeeded();if(typeof settings.on.open=="function"){var e=getDataAndUI();settings.on.open(e.data,e.ui)}})}bind_on_events()}else{if(settings.event!=="mouseover"){close()}}};var close=function(e){isOpen=false;var t=getPostID("postID");var n=getPostID("postChildID");if(isList===false||settings.enableCheckbox===true){$("#"+n).css({display:"none"});if(settings.roundedCorner=="true"){$("#"+t).removeClass("borderRadiusTp borderRadiusBtm").addClass("borderRadius")}}unbind_on_events();if(typeof settings.on.close=="function"){var r=getDataAndUI();settings.on.close(r.data,r.ui)}hideFilterBox();childHeight(childHeight());$("#"+n).css({zIndex:1});updateTitleUI(getElement(element).selectedIndex)};var mergeAllProp=function(){try{orginial=$.extend(true,{},getElement(element));for(var e in orginial){if(typeof orginial[e]!="function"){$this[e]=orginial[e]}}}catch(t){}$this.selectedText=getElement(element).selectedIndex>=0?getElement(element).options[getElement(element).selectedIndex].text:"";$this.version=msBeautify.version.msDropdown;$this.author=msBeautify.author};var getDataAndUIByOption=function(e){if(e!=null&&typeof e!="undefined"){var t=getPostID("postChildID");var n=parseOption(e);var r=$("#"+t+" li."+css_i.li+":eq("+e.index+")");return{data:n,ui:r,option:e,index:e.index}}return null};var getDataAndUI=function(){var e=getPostID("postChildID");var t=getElement(element);var n,r,i,s;if(t.selectedIndex==-1){n=null;r=null;i=null;s=-1}else{r=$("#"+e+" li."+css.selected);if(r.length>1){var o=[],u=[],a=[];for(var f=0;f<r.length;f++){var l=getIndex(r[f]);o.push(l);u.push(t.options[l])}n=o;i=u;s=o}else{i=t.options[t.selectedIndex];n=parseOption(i);s=t.selectedIndex}}return{data:n,ui:r,index:s,option:i}};var updateTitleUI=function(e,t){var n=getPostID("postTitleID");var r={};if(e==-1){r.text="&nbsp;";r.className="";r.description="";r.image=""}else if(typeof e!="undefined"){var i=getElement(element).options[e];r=parseOption(i)}else{r=t}$("#"+n).find("."+css.label).html(r.text);getElement(n).className=css.ddTitleText+" "+r.className;if(r.description!=""){$("#"+n).find("."+css.description).html(r.description).show()}else{$("#"+n).find("."+css.description).html("").hide()}var s=$("#"+n).find("img");if(s.length>0){$(s).remove()}if(r.image!=""&&settings.showIcon){s=createElement("img",{src:r.image});$("#"+n).prepend(s);if(r.imagecss!=""){s.className=r.imagecss+" "}if(r.description==""){s.className=s.className+css_i.fnone}}};var updateProp=function(e,t){$this[e]=t};var updateUI=function(e,t,n){var r=getPostID("postChildID");var i=false;switch(e){case"add":var s=createChild(t||getElement(element).options[n]);var o;if(arguments.length==3){o=n}else{o=$("#"+r+" li."+css_i.li).length-1}if(o<0||!o){$("#"+r+" ul").append(s)}else{var u=$("#"+r+" li."+css_i.li)[o];$(u).before(s)}removeChildEvents();applyChildEvents();if(settings.on.add!=null){settings.on.add.apply(this,arguments)}break;case"remove":i=$($("#"+r+" li."+css_i.li)[n]).hasClass(css.selected);$("#"+r+" li."+css_i.li+":eq("+n+")").remove();var a=$("#"+r+" li."+css.enabled);if(i==true){if(a.length>0){$(a[0]).addClass(css.selected);var f=$("#"+r+" li."+css_i.li).index(a[0]);setValue(f)}}if(a.length==0){setValue(-1)}if($("#"+r+" li."+css_i.li).length<settings.visibleRows&&!isList){childHeight(-1)}if(settings.on.remove!=null){settings.on.remove.apply(this,arguments)}break}};this.act=function(){var e=arguments[0];Array.prototype.shift.call(arguments);switch(e){case"add":$this.add.apply(this,arguments);break;case"remove":$this.remove.apply(this,arguments);break;default:try{getElement(element)[e].apply(getElement(element),arguments)}catch(t){}break}};this.add=function(){var e,t,n,r,i;var s=arguments[0];if(typeof s=="string"){e=s;t=e;opt=new Option(e,t)}else{e=s.text||"";t=s.value||e;n=s.title||"";r=s.image||"";i=s.description||"";opt=new Option(e,t);$(opt).data("description",i);$(opt).data("image",r);$(opt).data("title",n)}arguments[0]=opt;getElement(element).add.apply(getElement(element),arguments);updateProp("children",getElement(element)["children"]);updateProp("length",getElement(element).length);updateUI("add",opt,arguments[1])};this.remove=function(e){getElement(element).remove(e);updateProp("children",getElement(element)["children"]);updateProp("length",getElement(element).length);updateUI("remove",undefined,e)};this.set=function(e,t){if(typeof e=="undefined"||typeof t=="undefined")return false;e=e.toString();try{updateProp(e,t)}catch(n){}switch(e){case"size":getElement(element)[e]=t;if(t==0){getElement(element).multiple=false}isList=getElement(element).size>1||getElement(element).multiple==true?true:false;fixedForList();break;case"multiple":getElement(element)[e]=t;isList=getElement(element).size>1||getElement(element).multiple==true?true:false;isMultiple=getElement(element).multiple;fixedForList();updateProp(e,t);break;case"disabled":getElement(element)[e]=t;isDisabled=t;fixedForDisabled();break;case"selectedIndex":case"value":if(e=="selectedIndex"&&isArray(t)===true){$("#"+element+" option").prop("selected",false);selectMutipleOptions(t,true);selectUI_LI(t)}else{getElement(element)[e]=t;selectUI_LI(getElement(element).selectedIndex);setValue(getElement(element).selectedIndex)}break;case"length":var r=getPostID("postChildID");if(t<getElement(element).length){getElement(element)[e]=t;if(t==0){$("#"+r+" li."+css_i.li).remove();setValue(-1)}else{$("#"+r+" li."+css_i.li+":gt("+(t-1)+")").remove();if($("#"+r+" li."+css.selected).length==0){$("#"+r+" li."+css.enabled+":eq(0)").addClass(css.selected)}}updateProp(e,t);updateProp("children",getElement(element)["children"])}break;case"id":break;default:try{getElement(element)[e]=t;updateProp(e,t)}catch(n){}break}};this.get=function(e){return $this[e]||getElement(element)[e]};this.visible=function(e){var t=getPostID("postID");if(e===true){$("#"+t).show()}else if(e===false){$("#"+t).hide()}else{return $("#"+t).css("display")=="none"?false:true}};this.debug=function(e){msBeautify.debug(e)};this.close=function(){close()};this.open=function(){open()};this.showRows=function(e){if(typeof e=="undefined"||e==0){return false}settings.visibleRows=e;childHeight(childHeight())};this.visibleRows=this.showRows;this.on=function(e,t){$("#"+element).on(e,t)};this.off=function(e,t){$("#"+element).off(e,t)};this.addMyEvent=this.on;this.getData=function(){return getDataAndUI()};this.namedItem=function(){var e=getElement(element).namedItem.apply(getElement(element),arguments);return getDataAndUIByOption(e)};this.item=function(){var e=getElement(element).item.apply(getElement(element),arguments);return getDataAndUIByOption(e)};this.setIndexByValue=function(e){this.set("value",e)};this.destroy=function(){var e=getPostID("postElementHolder");var t=getPostID("postID");$("#"+t+", #"+t+" *").off();getElement(element).tabIndex=getElement(t).tabIndex;$("#"+t).remove();$("#"+element).parent().replaceWith($("#"+element));$("#"+element).data("dd",null)};this.refresh=function(){setValue(getElement(element).selectedIndex)};init()}msBeautify={version:{msDropdown:"3.5.2"},author:"Marghoob Suleman",counter:20,debug:function(e){if(e!==false){$(".ddOutOfVision").css({height:"auto",position:"relative"})}else{$(".ddOutOfVision").css({height:"0px",position:"absolute"})}},oldDiv:"",create:function(e,t,n){n=n||"dropdown";var r;switch(n.toLowerCase()){case"dropdown":case"select":r=$(e).msDropdown(t).data("dd");break}return r}};$.msDropDown={};$.msDropdown={};$.extend(true,$.msDropDown,msBeautify);$.extend(true,$.msDropdown,msBeautify);if($.fn.prop===undefined){$.fn.prop=$.fn.attr}if($.fn.on===undefined){$.fn.on=$.fn.bind;$.fn.off=$.fn.unbind}if(typeof $.expr.createPseudo==="function"){$.expr[":"].Contains=$.expr.createPseudo(function(e){return function(t){return $(t).text().toUpperCase().indexOf(e.toUpperCase())>=0}})}else{$.expr[":"].Contains=function(e,t,n){return $(e).text().toUpperCase().indexOf(n[3].toUpperCase())>=0}}$.fn.extend({msDropDown:function(e){return this.each(function(){if(!$(this).data("dd")){var t=new dd(this,e);$(this).data("dd",t)}})}});$.fn.msDropdown=$.fn.msDropDown})(jQuery)
/*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(window, document, $) {

	// Opera Mini v7 doesnâ€™t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (exception) {}
	}

}(this, document, jQuery));