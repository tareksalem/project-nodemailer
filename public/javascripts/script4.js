/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * tabs/tabs.js
 * tabs/tabs.slideshow.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(d,i){var k=h.eq(d),l=!c.data("tabs");typeof d=="string"&&d.replace("#","")&&(k=h.filter("[href*=\""+d.replace("#","")+"\"]"),d=Math.max(h.index(k),0));if(e.rotate){var m=h.length-1;if(d<0)return f.click(m,i);if(d>m)return f.click(0,i)}if(!k.length){if(j>=0)return f;d=e.initialIndex,k=h.eq(d)}if(d===j)return f;i=i||a.Event(),i.type="onBeforeClick",g.trigger(i,[d]);if(!i.isDefaultPrevented()){var n=l?e.initialEffect&&e.effect||"default":e.effect;b[n].call(f,d,function(){j=d,i.type="onClick",g.trigger(i,[d])}),h.removeClass(e.current),k.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.off(e.event).removeClass(e.current),i.find("a[href^=\"#\"]").off("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).on(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=\"#\"]").on("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href=\""+location.hash+"\"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);
(function(a){var b;b=a.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3e3,clickable:!0,api:!1}};function c(b,c){var d=this,e=b.add(this),f=b.data("tabs"),g,h=!0;function i(c){var d=a(c);return d.length<2?d:b.parent().find(c)}var j=i(c.next).click(function(){f.next()}),k=i(c.prev).click(function(){f.prev()});function l(){g=setTimeout(function(){f.next()},c.interval)}a.extend(d,{getTabs:function(){return f},getConf:function(){return c},play:function(){if(g)return d;var b=a.Event("onBeforePlay");e.trigger(b);if(b.isDefaultPrevented())return d;h=!1,e.trigger("onPlay"),e.on("onClick",l),l();return d},pause:function(){if(!g)return d;var b=a.Event("onBeforePause");e.trigger(b);if(b.isDefaultPrevented())return d;g=clearTimeout(g),e.trigger("onPause"),e.off("onClick",l);return d},resume:function(){h||d.play()},stop:function(){d.pause(),h=!0}}),a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(b,e){a.isFunction(c[e])&&a(d).on(e,c[e]),d[e]=function(b){return a(d).on(e,b)}}),c.autopause&&f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause,d.resume),c.autoplay&&d.play(),c.clickable&&f.getPanes().click(function(){f.next()});if(!f.getConf().rotate){var m=c.disabledClass;f.getIndex()||k.addClass(m),f.onBeforeClick(function(a,b){k.toggleClass(m,!b),j.toggleClass(m,b==f.getTabs().length-1)})}}a.fn.slideshow=function(d){var e=this.data("slideshow");if(e)return e;d=a.extend({},b.conf,d),this.each(function(){e=new c(a(this),d),a(this).data("slideshow",e)});return d.api?e:this}})(jQuery);

(function(a,b){if(typeof exports=="object"){module.exports=b()}else{a.Spinner=b()}}(this,function(){var e=["webkit","Moz","ms","O"],o={},n;function g(p,s){var q=document.createElement(p||"div"),r;for(r in s){q[r]=s[r]}return q}function h(q){for(var p=1,r=arguments.length;p<r;p++){q.appendChild(arguments[p])}return q}var i=(function(){var p=g("style",{type:"text/css"});h(document.getElementsByTagName("head")[0],p);return p.sheet||p.styleSheet}());function c(t,p,u,x){var q=["opacity",p,~~(t*100),u,x].join("-"),r=0.01+u/x*100,w=Math.max(1-(1-t)/p*(100-r),t),v=n.substring(0,n.indexOf("Animation")).toLowerCase(),s=v&&"-"+v+"-"||"";if(!o[q]){i.insertRule("@"+s+"keyframes "+q+"{0%{opacity:"+w+"}"+r+"%{opacity:"+t+"}"+(r+0.01)+"%{opacity:1}"+(r+p)%100+"%{opacity:"+t+"}100%{opacity:"+w+"}}",i.cssRules.length);o[q]=1}return q}function m(t,u){var r=t.style,p,q;if(r[u]!==undefined){return u}u=u.charAt(0).toUpperCase()+u.slice(1);for(q=0;q<e.length;q++){p=e[q]+u;if(r[p]!==undefined){return p}}}function f(p,r){for(var q in r){p.style[m(p,q)||q]=r[q]}return p}function k(r){for(var p=1;p<arguments.length;p++){var q=arguments[p];for(var s in q){if(r[s]===undefined){r[s]=q[s]}}}return r}function j(p){var q={x:p.offsetLeft,y:p.offsetTop};while((p=p.offsetParent)){q.x+=p.offsetLeft,q.y+=p.offsetTop}return q}var d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};function b(p){if(typeof this=="undefined"){return new b(p)}this.opts=k(p||{},b.defaults,d)}b.defaults={};k(b.prototype,{spin:function(y){this.stop();var C=this,q=C.opts,r=C.el=f(g(0,{className:q.className}),{position:q.position,width:0,zIndex:q.zIndex}),B=q.radius+q.length+q.width,D,A;if(y){y.insertBefore(r,y.firstChild||null);A=j(y);D=j(r);f(r,{left:(q.left=="auto"?A.x-D.x+(y.offsetWidth>>1):parseInt(q.left,10)+B)+"px",top:(q.top=="auto"?A.y-D.y+(y.offsetHeight>>1):parseInt(q.top,10)+B)+"px"})}r.setAttribute("role","progressbar");C.lines(r,C.opts);if(!n){var v=0,p=(q.lines-1)*(1-q.direction)/2,u,s=q.fps,x=s/q.speed,w=(1-q.opacity)/(x*q.trail/100),z=x/q.lines;(function t(){v++;for(var E=0;E<q.lines;E++){u=Math.max(1-(v+(q.lines-E)*z)%x*w,q.opacity);C.opacity(r,E*q.direction+p,u,q)}C.timeout=C.el&&setTimeout(t,~~(1000/s))})()}return C},stop:function(){var p=this.el;if(p){clearTimeout(this.timeout);if(p.parentNode){p.parentNode.removeChild(p)}this.el=undefined}return this},lines:function(r,t){var q=0,u=(t.lines-1)*(1-t.direction)/2,p;function s(v,w){return f(g(),{position:"absolute",width:(t.length+t.width)+"px",height:t.width+"px",background:v,boxShadow:w,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*q+t.rotate)+"deg) translate("+t.radius+"px,0)",borderRadius:(t.corners*t.width>>1)+"px"})}for(;q<t.lines;q++){p=f(g(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:n&&c(t.opacity,t.trail,u+q*t.direction,t.lines)+" "+1/t.speed+"s linear infinite"});if(t.shadow){h(p,f(s("#000","0 0 4px #000"),{top:2+"px"}))}h(r,h(p,s(t.color,"0 0 1px rgba(0,0,0,.1)")))}return r},opacity:function(q,p,r){if(p<q.childNodes.length){q.childNodes[p].style.opacity=r}}});function l(){function p(r,q){return g("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',q)}i.addRule(".spin-vml","behavior:url(#default#VML)");b.prototype.lines=function(u,t){var q=t.length+t.width,A=2*q;function z(){return f(p("group",{coordsize:A+" "+A,coordorigin:-q+" "+-q}),{width:A,height:A})}var v=-(t.width+t.length)*2+"px",y=f(z(),{position:"absolute",top:v,left:v}),x;function w(s,r,B){h(y,h(f(z(),{rotation:360/t.lines*s+"deg",left:~~r}),h(f(p("roundrect",{arcsize:t.corners}),{width:q,height:t.width,left:t.radius,top:-t.width>>1,filter:B}),p("fill",{color:t.color,opacity:t.opacity}),p("stroke",{opacity:0}))))}if(t.shadow){for(x=1;x<=t.lines;x++){w(x,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(x=1;x<=t.lines;x++){w(x)}return h(u,y)};b.prototype.opacity=function(r,q,t,s){var u=r.firstChild;s=s.shadow&&s.lines||0;if(u&&q+s<u.childNodes.length){u=u.childNodes[q+s];u=u&&u.firstChild;u=u&&u.firstChild;if(u){u.opacity=t}}}}var a=f(g("group"),{behavior:"url(#default#VML)"});if(!m(a,"transform")&&a.adj){l()}else{n=m(a,"animation")}return b}));
Clazz.createPackage("com.wu.abs");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.constants.PROTOCOL_INDEX = 0;
Clazz.com.wu.constants.DOMAIN_INDEX = 2;
Clazz.com.wu.constants.LANGUAGE_INDEX = 6;
Clazz.com.wu.constants.SESSION_EXPIRED_MESSAGE = "Your session has been timed out!"; /*MYWU-1878*/
Clazz.com.wu.constants.SESSION_EXPIRED_TITLE = "Alert";
Clazz.com.wu.constants.ESSION_EXPIRED_BUTTON_TEXT = "OK";
Clazz.com.wu.constants.EMPTY_RESPONSE = "{}";
Clazz.com.wu.constants.CREATE_SESSION = "/CreateSession";
Clazz.com.wu.constants.MODULE_KEEPSESSION = "/SessionKeepAlive";
Clazz.com.wu.constants.MODULE_SIGNOFF = "/CustomerSignOff";
Clazz.com.wu.constants.RETRY_BUTTON = "Retry Button";
Clazz.com.wu.constants.BIG_IP_SERVER = "BIGipServer";
Clazz.com.wu.constants.PORT_BIG_IP = "_443";
Clazz.com.wu.constants.MODULE_EDIValidation = "/EDIValidation";
Clazz.com.wu.constants.TRIGGER_EDI = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()] && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].triggerEDI ? Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].triggerEDI : null;
Clazz.com.wu.constants.EDI_LIVE = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()] && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].liveEDI ? Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].liveEDI : null;

Clazz.com.wu.abs.API = Clazz.extend(Clazz.Base,{
	__showSpinner : "A flag to toggle whether show spinner when waiting for response",
	showSpinner: true,
	__basePath : "Basepath of current page",
	basePath : null,
	__checkOnlineInterval : "A interval function created when browser is offline. Keep checking if browser is online. Once browser is online, clear alert message and clear itself.",
	checkOnlineInterval : null,
	__isAppNative : "variable that keeps value from local storage. that value signifies whether app can run in native or not.",
	isAppNative : false,
	__propertiesData: "Properties Data",
	propertiesData : null,

	initialize : function(config) {
		if(config){
			this.propertiesData = config.propertiesData;
		}
		this.isAppNative = window.sessionStorage.getItem('isAppNative');

		var psConfig = this.isAppNative ? Clazz.synchingPresentationServiceConfig : Clazz.presentationServiceConfig;

		var first=parseInt(location.hostname.charAt(0));
        var hostName = location.hostname;

		this.basePath = Clazz.WUNavigator.isInMobilePage() ? Clazz.WUNavigator.bashPathMobile : Clazz.WUNavigator.basePath;
		this.basePath = this.basePath.replace("international","gb");		
		
		if (hostName.indexOf("cms")>-1)
        {
			this.url = location.protocol+"//" + "wudispatcher-uatp2.westernunion.com" +"/"+ psConfig.context;
			if(this.basePath.indexOf("/gb/en/") != -1 || this.basePath.indexOf("/ie/en/") != -1)
			{
				this.url = "https://wudispatcher-uatp2.westernunion.com/"+ psConfig.context;
			}			
        }
		else if(isNaN(first) && hostName !=="localhost" && (hostName.indexOf("wuauthor")==-1 && hostName.indexOf("wupub")==-1))
        {
			this.url = location.protocol+"//" + location.host +"/"+ psConfig.context;
		}
        else
        {
			this.url = psConfig.protocol+"://" + psConfig.host +"/"+ psConfig.context;
		}
		
        if(this.basePath && (this.basePath.indexOf("/fraud-awareness/") != -1 || this.basePath.indexOf("/fraudawareness") != -1)) {
			this.basePath = '/us/en/';
        }
	},

	__ajaxPostRequest : "Do ajax post, waiting for response, call callback function.",
	ajaxPostRequest : function(module, postBody, callbackFunction, errorHandler, sessionExpiredCallback) {
		var self = this;
		//Please update PS to allow 'bashPath', all class PS which extends to 'WesternUnionRequestModel' need add this variable
		//Fixed international bug for IE browser
		var varBashPath = "bashPath";
		//The condition use for IE under version 10
		//if(navigator.userAgent.match(/MSIE/i) && (navigator.appVersion.indexOf("MSIE 10") === -1)){
			//varBashPath = "bash_path";
			//The condition use for specially IE 8 in Home page
			//if((navigator.appVersion.indexOf("MSIE 8") != -1) && Clazz.WUNavigator.isInThisWebPage("home.html")){
			//	if((module == "/CreateSession" ||module == "/GetDatabase")|| module == "/CustomerSignOff"){
				//	varBashPath = "bashPath";
			//	}
		//	}
		//}
		postBody[varBashPath] = (Clazz.MobileConfig && Clazz.MobileConfig.isMobileWeb) ? Clazz.MobileConfig.basePath : this.basePath;

		if(postBody.hasOwnProperty('ps_version')){
			 delete postBody['ps_version'];
		}

		if(!navigator.onLine && !this.isAppNative){
			self.displayAlertNoConnection();
			return;
		}

		if (this.isAppNative){
			var param = [];
			this.callPluginNativeUseCordova("CheckNetworkPlugin","checkConnection",
					function(response){
						var status = response.status;
						if(!status){
							var message = "You'll need network access to use this app. Please turn on your phone's Wi-Fi or make sure you're on your mobile network. You may also be experiencing low signal strength.";
							// send to splunk....
							Clazz.Splunk.log(message, "Cordova Native");
							return;
						}
					},
					function(error){
						// send to splunk....
						Clazz.Splunk.log(error, "Cordova Native");
					},param);
			
			var isAndroid = navigator.userAgent.match(/Android/i);
			var channelPostBody = postBody.channel;
			var type = "SMARTPHONE";
			if(isAndroid && channelPostBody){
				channelPostBody.type = type;
				channelPostBody.version = "9F01";
			}else if(channelPostBody){
				channelPostBody.type = type;
				channelPostBody.version = "9E01";
			}
		}
		if(Clazz.WUNavigator.isInMobilePage() && postBody.channel){
			postBody.channel = Clazz.WUChannelMobile.getMobileChannel();
		}
		if(Clazz.wuSpinner&&this.showSpinner&&module !== Clazz.com.wu.constants.MODULE_KEEPSESSION){
			Clazz.wuSpinner.show();
		}

		var url = this.url + module;

        if (module.indexOf("PerformWuCRUDOperation")>-1 && location.hostname.indexOf("cms")>-1) {
            var prefix='wudispatcher-', env='';
            var sURLVariables = location.search.substring(1).split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == "env") {
                    env = sParameterName[1];
                }
            }

            url = url.replace("uatp2", env);
            if (env.length==0) { 
	             url=url.replace('-', '');
	             url = url.replace('wudispatcher', prefix);
    	         url = url.replace('presentationservice', 'wuconnect');            
            }
        }


		var timestamp = new Date().getTime();
		
		// aldi 
		//get host
		var hostUrl = window.location.host;
        var keyBigIpCookie = "BIGipServerwudispatcher.westernunion.com_443";
        if(hostUrl=="www2.westernunion.com" || hostUrl=="wudispatcher-prv.westernunion.com"  || hostUrl=="wudispatcher-prvp.westernunion.com"  || hostUrl=="wudispatcher-prvc.westernunion.com")
        {
            
          keyBigIpCookie="BIGipServerwudispatcher-prv.westernunion.com_443";
        }
		//init key bigIp
		//var keyBigIpCookie = Clazz.com.wu.constants.BIG_IP_SERVER+hostUrl+Clazz.com.wu.constants.PORT_BIG_IP;
		// this method is ternary
		// get value cookie simple "BIGipServerwudispatcher-uatp2.westernunion.com_443"
		var bigIpServer = dtmGetCookie(keyBigIpCookie)?"&s="+dtmGetCookie(keyBigIpCookie):"";
		
		if(url.indexOf("?") == -1){
			url = url + "?timestamp=" + timestamp+bigIpServer;
		}else{
			url = url + "&timestamp=" + timestamp+bigIpServer;
		}
		
		// FireFox and IE cross domain ajax issue fix starts here
		/*if ('XDomainRequest' in window && window.XDomainRequest !== null) {
		           $.ajaxSettings.xhr = function() {
		         try { return new XDomainRequest(); }
		         catch(e) { }
		        };
	        }*/
		// FireFox and IE cross domain ajax issue fix ends here
		url = url.replace('presentationservice', 'wuconnect');
		$.support.cors = true;
		$.ajax({
			url : url,
			data : JSON.stringify(postBody),
			contentType: 'application/json',
			timeout: 900000,
			crossDomain: true,
			header : {
				'Access-Control-Allow-Headers' : 'x-requested-with',
				'Accept': 'application/json; indent=4',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
			type : "POST",
			dataType : "json",

			success : function(response, e ,xhr) {
				try {
					if(Clazz.wuSpinner){
						Clazz.wuSpinner.hide();
					}

					//DTM catch send money inputes pass form home page
					//  dtmGetJsonObj(response);
					//End of DTM
					var responseStr = JSON.stringify(response);
					if(responseStr == "null"){
						// commenting it out as part of temporary fix (by jubin)
						//Clazz.com.wu.constants.EMPTY_RESPONSE) 

						if(Clazz.WUNavigator.isInMobilePage()){
							var data = {};
							data.message = Clazz.AlertConnetcionMobile.propertiesData.alert_service_currently_down;
							if(errorHandler){
								errorHandler(data);								
							}
						} else {
							alert("The service is currently down. Please try again.");				
						}
					}
					else{ 
						var error = response.error;
						if(error){
							var errorCode = error.code;
							var errorMessage = response.error.message;
							response.error.message = errorMessage;
							//DTM web+mdot error code trigger whenever err happen -start
							//if(!Clazz.WUNavigator.isInMobilePage()){
							DTM_Trigger('DTM-ERROR-DIRECT-CALL',errorCode);
							//delete error analytic when response success
							if(analyticsObject && analyticsObject.sc_error){
                                delete analyticsObject.sc_error;
                            }
                            //Added for RINTL-30555 - Indentity verification requirement - Start
					    	if(errorCode && errorCode === "C7003"){
					    		wuSessionStorage.setItem('ValidationResponse',(JSON.stringify(response)));
								wuSessionStorage.setItem('CollectIdErrorRespCode', response.error.code);
                    			var summaryObj = Clazz.WULocalStorage.getSummaryObjects();
                   				wuSessionStorage.setItem('SummaryObjects',summaryObj);
					    	    Clazz.WUNavigator.goToSpainCollectIDPage(errorCode);
					    	}
					    	//Added for RINTL-30555 - Indentity verification requirement - End
							//}
							//DTM error code trigger whenever err happen end
						}

						if(self.hasSessionExpiredError(response)){
							if(Clazz.WUNavigator.isInMobilePage()){
								var isLogOff = Clazz.WULocalStorage.getDoLogout(); 
								Clazz.WULocalStorage.clearAll();

								if(!isLogOff && isLogOff !== "true"){
									Clazz.WULocalStorage.setIsMobileSessionExpired("true");
								}
								
								if(window.sessionStorage.getItem('isAppNative')){
									cordova.exec(function(response) {},function(error) {},"FindAgentLocationsPlugin","removeMap", []);									
								}

								Clazz.WUNavigator.goToLOginMobilePage();
							}else{
								if(response && response.error){
									var errorCode = response.error.code;
									if(errorCode === "C1130"){
											Clazz.WULocalStorage.setSessionExpiredAlertData(JSON.stringify(response));
									}
								}
								Clazz.WUNavigator.goToSessionExpiredPage();
							}
						}
						else{
							//Fixing path for Cookie
                            var arrayBasePath = self.basePath.split("/");
							var subStringBasePath = "/"+arrayBasePath[1];
							//var subStringBasePath = self.basePath.substring(0, self.basePath.length - 1);
							if(module === Clazz.com.wu.constants.CREATE_SESSION){
								if(response && response.security){
									var session = response.security.session.id;
									var currentTimestamp = new Date().valueOf();
									Clazz.WUCookies.setCookieSessionId(session, 10, subStringBasePath, null);
									//Zad : RINTL-17527
									Clazz.WUCookies.setCookieSessionInfo(currentTimestamp, 10, subStringBasePath, null);
									Clazz.WUCookies.setCookieSessionDomain(window.location.host, 10, subStringBasePath, null);

                                    //'233f9e95-1c53-4f41-99c0-4cbc70ac6cfe'
                                    //'staging.cdn-net.com'
                                    //AFEO-6193-Start
                                    /*if (_cc  && inauth_sid && inauth_domain) {
										_cc.push(['ci', {'sid': inauth_sid, 'tid': session }]);
										_cc.push(['run', ('https:' == document.location.protocol ? 'https://': 'http://') + inauth_domain]);
        	    	                    var c = document.createElement('script'); c.type ='text/javascript'; c.async = true;
										c.src = ('https:' == document.location.protocol ? 'https://' :'http://') + inauth_domain + '/cc.js';

										var s = document.getElementsByTagName('script')[0];
										if (s.parentElement.querySelector('script[src="'+c.src+'"]')==undefined) {
											s.parentNode.insertBefore(c, s);
										}
                                    }*/
                                    //AFEO-6193-End
									DTM_Trigger("dtm-reinitial-sessionid");
								}
								//PBL-1041
								if(response && response.security && response.security.dataCenter){
									Clazz.WULocalStorage.setDataCenter(response.security.dataCenter);
								}
								//PBL-1041
								if(response && response.security && response.security.clientIp){
									Clazz.WULocalStorage.setClientIp(response.security.clientIp);
								}
							}else if(module === Clazz.com.wu.constants.MODULE_SIGNOFF){
								Clazz.WUCookies.clearCookieSessionId(subStringBasePath, null);
								Clazz.WULocalStorage.clearAll();
								Clazz.WUCookies.clearAll();			//Zad : RINTL-17527
							}
							else if(module === Clazz.com.wu.constants.MODULE_KEEPSESSION){
								var session = postBody.security.session.id;
								Clazz.WUCookies.setCookieSessionId(session, 10, subStringBasePath, null);
								//Zad : RINTL-17527
								var currentTimestamp = new Date().valueOf();
								Clazz.WUCookies.setCookieSessionInfo(currentTimestamp, 10, subStringBasePath, null);
								Clazz.WUCookies.setCookieSessionDomain(window.location.host, 10, subStringBasePath, null);
							}else{
								var session = Clazz.WUCookies.getCookieSessionId();
								//Zad : RINTL-17527 : Check for timestamp diff to be less than 15 mins.
								var sessionInfo = Clazz.WUCookies.getCookieSessionInfo() ? Clazz.WUCookies.getCookieSessionInfo() : 0;	// If cookie not present, session expire will trigger.
								var storedDomain = Clazz.WUCookies.getCookieSessionDomain() ? Clazz.WUCookies.getCookieSessionDomain() : '';
								var currentTimestamp = new Date().getTime();
								var isExpired = (currentTimestamp - sessionInfo) > 15*60*1000;
								var isCrossDomain = (storedDomain !== window.location.host);
								if (isCrossDomain) {
									Clazz.WULocalStorage.clearAll();
									Clazz.WUCookies.clearAll();
									location.reload(true);
								} else if (isExpired) {
									Clazz.WULocalStorage.clearAll();
									//Clazz.WUSessionStorage.clearAll();
									Clazz.WUCookies.clearAll();
									Clazz.WUNavigator.goToSessionExpiredPage();
								} else if(session !== "null" && session){
									Clazz.WUCookies.setCookieSessionId(session, 10, subStringBasePath, null);
									//Zad : RINTL-17527: Resetting timestamp on every success call
									var currentTimestamp = new Date().valueOf();
									Clazz.WUCookies.setCookieSessionInfo(currentTimestamp, 10, subStringBasePath, null);
									Clazz.WUCookies.setCookieSessionDomain(window.location.host, 10, subStringBasePath, null);
								}
							}
							if(callbackFunction !== null && callbackFunction !== undefined) {
								callbackFunction(response);
							}
						}
					}
				} catch (error) {
					// send to splunk....

					var extraInfo = {"context": "API Call", 
							"apiRequestURL" : url};

					// if there is any session info
					if(Clazz.WUCookies.getCookieSessionId()){
						extraInfo.sessionId = Clazz.WUCookies.getCookieSessionId();
					}

					Clazz.Splunk.log(error, "response_error", extraInfo);

					throw new Error(error.stack);
				}
			},

			error : function(jqXHR, textStatus, errorThrown) {
				var that = this;
				if(Clazz.wuSpinner){
					Clazz.wuSpinner.hide();
				}

				var message = 'Service unavailable, please try again later.';

				if(!navigator.onLine && !window.sessionStorage.getItem('isAppNative')){
					self.displayAlertNoConnection();
					self.checkOnlineInterval = setInterval(function() {
						if(navigator.onLine){
							$('#main-alert').hide();
							$('#main-alert').empty();
							clearInterval(self.checkOnlineInterval);
						}
					}, 500);
				} else {
					//check if status of ajax request is not abort and then call callbackfunction
					if(errorHandler != null && !jqXHR.statusText !== null) {
						//DTM mdot error code trigger when service down
						DTM_Trigger('DTM-ERROR-DIRECT-CALL','PS9999');
						// DTM error error code
						errorHandler(message);
					} else if(window.sessionStorage.getItem('isAppNative')){
						self.callPluginNativeUseCordova("PopupAlertPlugin","showPopupAlert",function(response){},function(error){},[]);
					} else {
						//DTM mdot error code trigger when service down
						DTM_Trigger('DTM-ERROR-DIRECT-CALL','PS9999');
						// DTM error error code
						self.showServiceDownAlert(message);
					}
				}

				var extraInfo = {"context": "API Call", 
						"apiRequestURL" : url};

				// if there is any session info
				if(Clazz.WUCookies.getCookieSessionId()){
					extraInfo.sessionId = Clazz.WUCookies.getCookieSessionId();
				}

				// send to splunk....
				Clazz.Splunk.log(textStatus, "rejected_request", extraInfo);
			}
		});
	},


	__isErrorResponse : "Check if is an error response.",
	isErrorResponse : function(response){
		var hasError = false;
		if(response.error){

		}
		return hasError;
	},

	__hasSessionExpiredError : "Check if @response has session expired error code.",
	hasSessionExpiredError : function(response){
		var hasSessionExpErr = false;
		if(response && response.error){
			var errorCode = response.error.code;
			if(errorCode === "C1130" || errorCode === "C5000" || errorCode==="CQ5902"){
				hasSessionExpErr = true;
				var session = Clazz.WUCookies.getCookieSessionId();
				//Zad : RINTL-17527 : Check for timestamp diff to be less than 15 mins.
				var sessionInfo = Clazz.WUCookies.getCookieSessionInfo() ? Clazz.WUCookies.getCookieSessionInfo() : 0;	// If cookie not present, session expire will trigger.
				var storedDomain = Clazz.WUCookies.getCookieSessionDomain() ? Clazz.WUCookies.getCookieSessionDomain() : '';
				var currentTimestamp = new Date().getTime();
				var isExpired = (currentTimestamp - sessionInfo) > 15*60*1000;
				var isCrossDomain = (storedDomain !== window.location.host);
				if (isCrossDomain) {
					Clazz.WULocalStorage.clearAll();
					Clazz.WUCookies.clearAll();
					hasSessionExpErr = false;
					location.reload(true);
				} else if (isExpired) {
					Clazz.WULocalStorage.clearAll();
					//Clazz.WUSessionStorage.clearAll();
					Clazz.WUCookies.clearAll();
					//Clazz.WUNavigator.goToSessionExpiredPage();
				} else if(session !== "null" && session){
					var subStringBasePath = this.basePath.substring(0, this.basePath.length - 1);
					Clazz.WUCookies.clearCookieSessionId(subStringBasePath, null);
					//Zad : RINTL-17527
					Clazz.WULocalStorage.clearAll();
					Clazz.WUCookies.clearAll();
					hasSessionExpErr = false;
					location.reload(true);
				}
			}
		}
		return hasSessionExpErr;
	},

	__callPluginNativeUseCordova : "Call plugin to communicate with Native.",
	callPluginNativeUseCordova : function(pluginName, pluginMethod, successCallBack, errorCallback, param){
		if(param == null){
			param = [];
		}
		if(pluginName != null && pluginMethod != null){
			document.addEventListener("deviceready", function(){
				if(cordova.exec){
					cordova.exec(
					(successCallBack != null)?successCallBack:function(response) {},
					(errorCallback != null)?errorCallback:function(error) {}, 
					pluginName,pluginMethod,param);
				}
			}, false);
		}
	},

	__displayAlertNoConnection : "Display error message if there is internet connection issue.",
	displayAlertNoConnection : function(){
		var message = "Ooops. There's no Internet Connectivity";
		var button = Clazz.com.wu.constants.RETRY_BUTTON;
		if(Clazz.wuSpinner){
			Clazz.wuSpinner.hide();
		}

		this.showServiceDownAlert(message, button);
	},

	__showServiceDownAlert : "Show error message if service is down.",
	showServiceDownAlert:function(message, button){
		if(Clazz.WUNavigator.isInMobilePage()){
			var data = {
					'message' : message,
					'button'  : button
			};
			
			Clazz.AlertConnetcionMobile.showAlert(data);
		}else{
			var html='<div class="popup-custom-mask"></div><div class="popup-custom-container">';
			html+='<div class="popup-custom"><div class="popup-custom-content-container">';
			html+='<div class="popup-custom-content"><div class="popup-text">';
			html+='<div class="popup-title">Alert</div><div class="popup-message">'+message+'</div>';
			html+='</div></div>';

			if(button == Clazz.com.wu.constants.RETRY_BUTTON){
				html+='<div class="popup-button" onclick="$(\'#main-alert\').hide();$(\'#main-alert\').empty();location.reload();"><div class="popup-button-left popup-button-single"><p style="margin-top: 3%;">Retry</p>';			
			} else {
				html+='<div class="popup-button" onclick="$(\'#main-alert\').hide();$(\'#main-alert\').empty();$(\'body\').unbind(\'touchmove\');"><div class="popup-button-left popup-button-single"><p style="margin-top: 3%;">OK</p>';			
			}

			html+='</div></div></div></div></div>';

			$("#main-alert").html(html);
			$("#main-alert").show();
		}
	},
    
    __EDIValicdation :"Do EDI validation",
	EDIValicdation : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(Clazz.com.wu.constants.MODULE_EDIValidation, postBody, requestSuccessHandler, errorHandler);
	},
		__getEDIBody :"getEDIBody",
	getEDIBody : function(postBody,method) {
        var body = {};
        var senderProfileAPIs = ["/RegisterCustomer","/UpdateCustomerProfile"];
        var receiverProfileAPIS = ["/AddReceivers","/UpdateReceivers"];
        body["security"] = postBody.security;
        if(senderProfileAPIs.indexOf(method) > -1){
	        body["sender"] = {};
	        body["sender"]["name"] = {};
	        body["sender"]["name"] = postBody && postBody.gateway_customer && postBody.gateway_customer.name  ? postBody.gateway_customer.name : null;
	        body["sender"]["address"] = {};
	        body["sender"]["address"] = postBody && postBody.gateway_customer.address ? postBody.gateway_customer.address : null;
	        body["sender"]["mobile_phone"] = postBody && postBody.gateway_customer.mobile_phone ? postBody.gateway_customer.mobile_phone : null;
    	}
    	else if(receiverProfileAPIS.indexOf(method) > -1) {
    		body["receiver"] = {};
	        body["receiver"]["name"] = {};
	        body["receiver"]["name"] = postBody && postBody.receivers && postBody.receivers.receiver && postBody.receivers.receiver[0] ? postBody.receivers.receiver[0].name : null;
	        body["receiver"]["address"] = {};
	        body["receiver"]["address"] = postBody && postBody.receivers && postBody.receivers.receiver && postBody.receivers.receiver[0] ? postBody.receivers.receiver[0].address : null;
	        body["receiver"]["mobile_phone"] = postBody && postBody.receivers && postBody.receivers.receiver && postBody.receivers.receiver[0] && postBody.receivers.receiver[0].mobile_phone ? postBody.receivers.receiver[0].mobile_phone : null;
    	}
        return body;
	},

	__showRTRAErrors : "Make @objectKey field has red color and display error message.",
	showRTRAErrors : function(objectKeys,method) {
	    var currentLocation = window.location.pathname;
		var array = currentLocation.split("/");
		var page = array[array.length-1];
		page = page && page.includes(".html") ? page.split(".html")[0] : page;
		var senderProfileAPIs = ["/RegisterCustomer","/UpdateCustomerProfile"];
        var receiverProfileAPIS = ["/AddReceivers","/UpdateReceivers"];
        var formElements = {};
        if(senderProfileAPIs.indexOf(method) > -1){
            if(page == "profile"){
				formElements = JSON.parse(Clazz.WULocalStorage.getEditProfileFormElements());
				if(formElements.zip){
                    formElements["zipCode"] = formElements.zip;
				}
            }
            else if(page == "register"){
				formElements = JSON.parse(Clazz.WULocalStorage.getRegisterFormElement());
            }
        }
        else if(receiverProfileAPIS.indexOf(method) > -1){
            if(page == "profile" && method == "/AddReceivers"){
                formElements = JSON.parse(Clazz.WULocalStorage.getAddReceiverFormElementsInDashboard());
            }
            else if(page == "profile" && method == "/UpdateReceivers"){
				formElements = JSON.parse(Clazz.WULocalStorage.getEditReceiverFormElementsInDashboard());
            }
            else if(page == "receiverInformation"){
				formElements = JSON.parse(Clazz.WULocalStorage.getSendMoneyReceiverFormElements());
            }
            var errorObjects = objectKeys;
            for(i=0;i<errorObjects.length;i++){
				var objectKey = errorObjects[i].code;
				if(objectKey == "receiver.name.lastName"){
				  var paternalNameObject = {"code": "receiver.name.paternalName"};
				  objectKeys.push(paternalNameObject)
				}
				else if(objectKey == "receiver.name.middleName"){
				  var maternalNameObject = {"code": "receiver.name.maternalName"};
				  objectKeys.push(maternalNameObject)
				}
	        }
        }
        if(formElements.zipCode){
        	formElements["postalCode"] = formElements.zipCode;
        }
        else if(formElements.postalCode){
        	formElements["zipCode"] = formElements.postalCode;
        }
		for(i=0;i<objectKeys.length;i++){
			var objectKey = objectKeys[i].code.split(".");
			if(objectKey[1] == "address"){
				if(objectKey[2] == "line1"){
					objectKey[2] = "address1"
				}
				else if(objectKey[2] == "line2"){
					objectKey[2] = "address2"
				}
			}
            objectKey = objectKey[2];
			var objectValue = formElements[objectKey];
			$(objectValue.errorElement).removeClass('display-none');
			$(objectValue.errorElement).show();
			$(objectValue.inputElement).addClass('error');
			$(objectValue.containerElement).addClass('error');
            if($(objectValue.errorElement).text() == "" && objectValue.errorMessage){
				$(objectValue.errorElement).text(objectValue.errorMessage)
            }
	    }
	}
});

Clazz.createPackage("com.wu.api");

Clazz.com.wu.api.DatabaseAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	__modulGetDatabase :"Module to request database",
	modulGetDatabase : "/GetDatabase",

	__doGetDatabase :"Do GetDatabase PS call.",
	doGetDatabase : function(postBody, requestSuccessHandler, errorHandler){
		if(navigator.userAgent.indexOf("MSIE 8.0") != -1 || navigator.userAgent.indexOf("MSIE 9.0") != -1){
			postBody['additional_context_path'] = postBody.additionalContextPath;
			delete postBody.additionalContextPath;
		}
		
		this.ajaxPostRequest(this.modulGetDatabase, postBody, requestSuccessHandler, errorHandler);
	}

});

Clazz.createPackage("com.wu.api");

Clazz.com.wu.api.SessionAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	__moduleCreateSession : "Module to request create session.",
	moduleCreateSession : "/CreateSession",
	__moduleValidateToken : "Module to request validate token.",
	moduleValidateToken : "/ValidateToken",
	__moduleRedeliverToken : "Module to request redeliver token.",
	moduleRedeliverToken : "/RedeliverToken",
	__moduleVerifySession : "Module to request verify session.",
	moduleVerifySession : "/VerifySession",
	__moduleTerminateSession : "Module to request terminate session.",
	moduleTerminateSession :"/TerminateSession",
	__moduleSessionKeepAlive : "Module to request keep alive session.",
	moduleSessionKeepAlive: "/SessionKeepAlive",
	
	__createSession :"Do CreateSession PS call.",
	createSession : function(requestSuccessHandler,errorHandler) {
		
		//Temporary handle, still configure 'require' is failed in mobile
		if(!Clazz.WUNavigator.isInMobilePage()){
			var self=this;
			require.config({
	            paths : {
	               //'snare' : '//ci-mpsnare.iovation.com/wu/snare',
	                'snare' : '//mpsnare.iesnare.com/wu/snare',
	                
	                
	            }        
	        });
	             
	        // MOMO: Load multiple JS files and execute a callback when they've all finished. Apparently they have to be loaded in sequence!!!!
	        require(['snare'], 
	                function () {
	                   self.ajaxPostRequest(self.moduleCreateSession, self.getSessionPostBodyRequest(), requestSuccessHandler, errorHandler);
	                    
	                }
	         );
		}else{
			this.ajaxPostRequest(this.moduleCreateSession, this.getSessionPostBodyRequest(), requestSuccessHandler, errorHandler);
		}
	},

	__validateToken :"Do ValidateToken PS call.",
	validateToken : function(postBody, requestSuccessHandler,errorHandler){
		this.ajaxPostRequest(this.moduleValidateToken, postBody, requestSuccessHandler, errorHandler);
	},

	__redeliverToken :"Do RedeliverToken PS call.",
	redeliverToken : function(postBody, requestSuccessHandler,errorHandler){
		this.ajaxPostRequest(this.moduleRedeliverToken, postBody, requestSuccessHandler, errorHandler);
	},
	
	__verifiySession :"Do VerifySession PS call.",
	verifiySession : function(postBody, requestSuccessHandler,errorHandler){
		this.ajaxPostRequest(this.moduleVerifySession, postBody, requestSuccessHandler, errorHandler);
	},
	
	__terminateSession :"Do TerminateSession PS call.",
	terminateSession : function(requestSuccessHandler,errorHandler){
		this.ajaxPostRequest(this.moduleTerminateSession, this.getRequestBodyTerminate(), requestSuccessHandler, errorHandler);
	},
	
	__sessionKeepAlive :"Do SessionKeepAlive PS call.",
	sessionKeepAlive : function(sessionId,requestSuccessHandler,errorHandler){
		var postBody = this.getPostBodySessionKeepAlive(sessionId);
		this.ajaxPostRequest(this.moduleSessionKeepAlive, postBody, requestSuccessHandler, errorHandler);
	},
	
	__getSessionPostBodyRequest : "Get session post body request.",
	getSessionPostBodyRequest : function(){
		var sessionPostBodyRequest = new Object();
		sessionPostBodyRequest['device'] = this.getDevice();
		sessionPostBodyRequest['channel'] = this.getChannel();
		sessionPostBodyRequest['external_reference_no'] = "1";
		sessionPostBodyRequest['locale'] = this.getLocale();
		sessionPostBodyRequest['security'] = this.getSecurity();
		return sessionPostBodyRequest;
	},
	
	__getPostBodySessionKeepAlive : "Get post body session keep alive.",
	getPostBodySessionKeepAlive : function(sessionId){
		var sessionPostBodyRequest = new Object();
		sessionPostBodyRequest['security'] = this.getSecuritySession(sessionId);
		return sessionPostBodyRequest;
	},
	
	
	//blaze production web issue fixed for hardcoded value for web.
	//we should only pass this data for Native application
	__getDevice : "Get device.",
	getDevice : function(){
		var device = new Object();
		//device["geo_coordinates"] = this.getGeoCoordinates();
		device["id"] = "";
		//device["identities"] = this.getIdentities();
		//device["sub_type"] = "Windows8";
		//device["type"] = "MOBILE";

		if(Clazz.WUNavigator.isInMobilePage()){
			device["type"] = "MOBILE";
		}else{
			device["type"] = "WEB";
		}
		
		return device;
	},
	
	__getChannel : "Get channel.",
	getChannel : function(){
		var channel = new Object();
		if(Clazz.WUNavigator.isInMobilePage()){
			channel["type"] = "MWEB";
			channel["name"] = "WEBAPP";
			channel["version"] = "9801";
		}else{
			channel["name"] = "Western Union";
			channel["type"] = "WEB";
			channel["version"] = "9Z00";
		}
		
		return channel;
	},
	
	__getLocale : "Get locale.",
	getLocale : function(){
		var locale = {};
		var countryIsoCode = Clazz.WULocalStorage.getCountryIsoCode() ? Clazz.WULocalStorage.getCountryIsoCode().toLowerCase() : Clazz.WUNavigator.getSenderCountryFromURL();
		countryIsoCode = countryIsoCode.replace("INTERNATIONAL","GB");
		locale['country_code'] = countryIsoCode.toUpperCase();
		locale['language_code'] = Clazz.WUNavigator.getSenderLanguageFromURL();
		return locale;
	},
	
	__getSecurity : "Get security.",
	getSecurity : function(){
		var security = new Object();
		security["black_box_data"] = getGlobalBlackBoxData();//this.getBlackBoxData();
		security["client_ip"] = "245024209201";//Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "";
		return security;
	},
	
	__getSecuritySession : "Get security session.",
	getSecuritySession : function(sessionId){
		var security = new Object();
		security["session"] = this.getSession(sessionId);
		return security;
	},
	
	__getSession : "Get session.",
	getSession : function(sessionId){
		var session = new Object();
		session["id"] = sessionId;
		return session;
	},
	
	__getGeoCoordinates : "Get geo coordinates.",
	getGeoCoordinates : function(){
		var geoCoordinates = new Object();
		return geoCoordinates;
	},

	__getIdentity : "Get identity.",
	getIdentity : function(){
		var identity = new Array();

		var modelNoIdentity = new Object();
		modelNoIdentity["data"] = "";
		modelNoIdentity["type"] = "MODEL_NO";
		identity.push(modelNoIdentity);

		var macAddrIdentity = new Object();
		macAddrIdentity["data"] = "";
		macAddrIdentity["type"] = "MAC_ADDR";
		identity.push(macAddrIdentity);

		var ipAddrIdentity = new Object();
		ipAddrIdentity["data"] = "";
		ipAddrIdentity["type"] = "IP_ADDR";
		identity.push(ipAddrIdentity);

		var nameIdentity = new Object();
		nameIdentity["data"] = "d2att";
		nameIdentity["type"] = "NAME";
		identity.push(nameIdentity);

		var carrierNameIdentity = new Object();
		carrierNameIdentity["data"] = "";
		carrierNameIdentity["type"] = "CARRIER_NAME";
		identity.push(carrierNameIdentity);

		var deviceOsIdentity = new Object();
		deviceOsIdentity["data"] = "Windows 8";
		deviceOsIdentity["type"] = "DEVICE_OS";
		identity.push(deviceOsIdentity);

		var deviceOsVersionIdentity = new Object();
		deviceOsVersionIdentity["data"] = "8.0";
		deviceOsVersionIdentity["type"] = "DEVICE_OS_VERSION";
		identity.push(deviceOsVersionIdentity);

		var processorIdentity = new Object();
		processorIdentity["data"] = "74,78";
		processorIdentity["type"] = "PROCESSOR";
		identity.push(processorIdentity);

		var memoryIdentity = new Object();
		memoryIdentity["data"] = "228,237";
		memoryIdentity["type"] = "MEMORY";
		identity.push(memoryIdentity);

		var diskDeviceIdentity = new Object();
		diskDeviceIdentity["data"] = "28,29";
		diskDeviceIdentity["type"] = "DISK_DEVICE";
		identity.push(diskDeviceIdentity);

		var networkAdapterIdentity = new Object();
		networkAdapterIdentity["data"] = "240,17";
		networkAdapterIdentity["type"] = "NETWORK_ADAPTER";
		identity.push(networkAdapterIdentity);

		var audioAdapterIdentity = new Object();
		audioAdapterIdentity["data"] = "98,23";
		audioAdapterIdentity["type"] = "AUDIO_ADAPTER";
		identity.push(audioAdapterIdentity);

		var dockingStationIdentity = new Object();
		dockingStationIdentity["data"] = "1,0";
		dockingStationIdentity["type"] = "DOCKING_STATION";
		identity.push(dockingStationIdentity);

		var mobileBroadbandIdentity = new Object();
		mobileBroadbandIdentity["data"] = "";
		mobileBroadbandIdentity["type"] = "MOBILE_BROADBAND";
		identity.push(mobileBroadbandIdentity);

		var bluetoothIdentity = new Object();
		bluetoothIdentity["data"] = "";
		bluetoothIdentity["type"] = "BLUETOOTH";
		identity.push(bluetoothIdentity);

		var systemBiosIdentity = new Object();
		systemBiosIdentity["data"] = "210,160";
		systemBiosIdentity["type"] = "SYSTEM_BIOS";
		identity.push(systemBiosIdentity);

		return identity;
	},

	__getIdentities : "Get identities.",
	getIdentities : function(){
		var identities = new Object();
		identities["identity"] = this.getIdentity();
		return identities;
	},

	__GetAnalytics : "Get analytics.",
	GetAnalytics : function() {
		var analytics= new Object();
		analytics["state"]=this.GetState();
		return analytics;
	},
	
	__GetState : "Get state.",
	GetState : function() {
		var state=new Object();
		state["context"]="Welcome";
		state["sub_context"]="MainMenu";
		return state;
	},
	
	__getRequestBodyTerminate : "Get request body terminate.",
    getRequestBodyTerminate : function(){
    	var requestBody = {};
		requestBody['security'] = this.getSecurityToken();
		return requestBody;
    },
    
	__getSecurityToken : "Get security token.",
    getSecurityToken : function() {
		var security = {};
		security['session'] = this.getSession(Clazz.WUCookies.getCookieSessionId());
		if(Clazz.WULocalStorage.getClientIp()){
			security.client_ip = Clazz.WULocalStorage.getClientIp();
		}
		return security;
	}
});

Clazz.createPackage("com.wu.api");

Clazz.com.wu.api.CurrenciesAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	__modul : "Module for request currencies",
	modul : "/GetCurrencies",

	__doGetCurrency :"Do GetCurrencies PS call.",
	doGetCurrency : function(postBody, requestSuccessHandler, errorHandler) {
		var isWubs = Clazz.WULocalStorage.getIsWubs();
		var path = this.modul;
		if(isWubs && isWubs=='true') {
			path = '/GetCurrencies?IsWubs=true';
		} else {
			path = '/GetCurrencies?IsWubs=false';
		}
		this.ajaxPostRequest(path, postBody, requestSuccessHandler, errorHandler);
	}
});

Clazz.createPackage("com.wu.api");

Clazz.com.wu.api.LogoutAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	__modul : "Module for request sign off.",
	modul : "/CustomerSignOff",

	__doLogout :"Do CustomerSignOff PS call.",
	doLogout : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.modul, postBody, requestSuccessHandler, errorHandler);
	}
});

Clazz.createPackage("com.wu.api");

Clazz.com.wu.api.ProfileAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	__getCustomerProfileModul : "Module to request customer profile",
	getCustomerProfileModul : "/GetCustomerProfile",
	__updateCustomerProfileModul : "Module to request update customer profile",
	updateCustomerProfileModul : "/UpdateCustomerProfile",
	__modulChangePassword : "Module to request change password",
	modulChangePassword : "/ChangePassword",
	__modulTransactionLimit : "Module to request transaction limit",
	modulTransactionLimit : "/GetLimits",
	__modulCustomerMessages : "Module to request customer message",
	modulCustomerMessages : "/GetCustomerMessages",
	__moduleGetCustomerVerificationStatus : "Module to request customer verification status",
	moduleGetCustomerVerificationStatus : "/GetCustomerVerificationStatus",
	__modulUpdateCustomerMessages : "Module to request update customer message",
	modulUpdateCustomerMessages : "/UpdateCustomerMessages",
	__moduleEDIValidations : "module to request EDI validation perfprmed by RTRA",
	moduleEDIValidations : "/EDIValidation",

	__getProfile :"Do GetCustomerProfile PS call.",
	getProfile : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.getCustomerProfileModul, postBody, requestSuccessHandler, errorHandler);
	},

	__updateProfile :"Do UpdateCustomerProfile PS call.",
	updateProfile : function(postBody, requestSuccessHandler, errorHandler) {
		var self = this;
        if(Clazz.com.wu.constants.TRIGGER_EDI != null && Clazz.com.wu.constants.TRIGGER_EDI == "true"){
            var EDIBody = self.getEDIBody(postBody,self.updateCustomerProfileModul);
            self.EDIValicdation(EDIBody, function(response){
                if(Clazz.com.wu.constants.EDI_LIVE != null && Clazz.com.wu.constants.EDI_LIVE == "true" && response && response.error && response.error.code == "C6364" &&  response.error.reasons && response.error.reasons.reason && response.error.reasons.reason[0] && response.error.reasons.reason[0].code){
					console.log("EDI failed");
                    self.showRTRAErrors(response.error.reasons.reason, self.updateCustomerProfileModul);
                    return;
                }else{
					self.ajaxPostRequest(self.updateCustomerProfileModul, postBody, requestSuccessHandler, errorHandler);
                }
            });
        }
        else{
            self.ajaxPostRequest(this.updateCustomerProfileModul, postBody, requestSuccessHandler, errorHandler);
        }
	},

	__doChangePassword :"Do ChangePassword PS call.",
	doChangePassword : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.modulChangePassword, postBody, requestSuccessHandler, errorHandler);
	},

	__getTransactionLimit :"Do GetLimits PS call.",
	getTransactionLimit : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.modulTransactionLimit, postBody, requestSuccessHandler, errorHandler);
	},

	__getCustomerMessage :"Do GetCustomerMessages PS call.",
	getCustomerMessage : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.modulCustomerMessages, postBody, requestSuccessHandler, errorHandler);
	},

	__getCustomerVerificationStatus :"Do GetCustomerVerificationStatus PS call.",
	getCustomerVerificationStatus : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.moduleGetCustomerVerificationStatus, postBody, requestSuccessHandler, errorHandler);
	},

	__updateCustomerMessages :"Do UpdateCustomerMessages PS call.",
	updateCustomerMessages : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.modulUpdateCustomerMessages, postBody, requestSuccessHandler, errorHandler);
	}
});

Clazz.createPackage("com.wu.api");

Clazz.com.wu.api.CrossCountryAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	modulGetUrlCrossCountry : "/CrossCountryURL",

	__getUrlCrossCountry :"Do CrossCountryURL PS call.",
	getUrlCrossCountry : function(postBody, requestSuccessHandler, errorHandler){
		this.ajaxPostRequest(this.modulGetUrlCrossCountry, postBody, requestSuccessHandler, errorHandler);
	}
});

Clazz.createPackage("com.wu.util");

Clazz.com.wu.util.WUCountryRedirector = Clazz.extend(Clazz.Base,{

	/**
	 *	Get List of Default URL Cross Country based Country ISO Code
	 */
	__getCrossCountryCsv : "Get List of Default URL Cross Country based Country ISO Code",
	getCrossCountryCsv : function(countryIsoCode, callback, errorHandler) {
		var requestData = {
			"country_iso_code" : countryIsoCode
		};
		
		var crossCountryAPI = new Clazz.com.wu.api.CrossCountryAPI();
		crossCountryAPI.getUrlCrossCountry(requestData, function(response){
			if(callback) {
				callback(response);	
			}
		}, function(error){
			if(errorHandler) {
				errorHandler(error);	
			}
		});
	}
	
});

Clazz.createPackage("com.wu.util");

Clazz.com.wu.util.WUNavigator = Clazz.extend(Clazz.Base,{

	__basePath : "The base path of the desktop web site",
	basePath : "/",	
	__pathDot : "The base path of the mdot",
	pathDot : "", 
	__countryPath : "The location of country parameter in url",
	countryPath : 4,
	__langPath : "The location of language parameter in url",
	langPath :5,
	__bashPathMobile : "The base path of mobile web site.",
	bashPathMobile : "/content/wucom/mobile-sites/",
	
	__INTERSTITIAL_PAGE_URL : "variable constant for url of interstitial page",
	INTERSTITIAL_PAGE_URL : "login/interstitialPage.html",
	__INTERSTITIAL_PAGE_URL_SEND_MONEY : "variable constant for url of interstitial page",
	INTERSTITIAL_SENDMONEY_PAGE_URL : "send-money/interstitialPage.html",
	__LOGIN_PAGE_URL : "variable constant for url of login page",
	LOGIN_PAGE_URL : "login.html",
	__PROFILE_PAGE_URL : "variable constant for url of profile page",
	PROFILE_PAGE_URL : "profile.html",
	__HOME_PAGE_URL : "variable constant for url of home page",
	HOME_PAGE_URL : "home.html",
	__RESET_PASSWORD_URL : "variable constant for url of reset password page",
	RESET_PASSWORD_URL : "password-recovery.html",
    __EUCountries : "variable constant for EU countries",
    EUCountries : ["IE","GB","FR","DE","BE","CH","LU","LI","IS","AT","IT","PL","PT","EE","GR","ES","FI","SE","NZ","NO","DK","BG","RO","RU","HU","MT"],	//PBL-1844 in Docking
    __ZIPCountries : "variable constant for ZIP countries allowing special characters",
	ZIPCountries : ["NL","PL","GR","PT"],
	__AlphabetsNotAllowed :"variable constant for countries not allowing alphabets",
	  AlphabetsNotAllowed:["PL","GR","PT","FI","EE","ES","SE","DK","NO"],

	/****
	    Go to a particular url. For single page app, this will utilize the PageWidget and NavigationController.
	    In Single Page Application (SPA), each page, the url is encapsulated in PageWidget where each content
	    is encapsulated in the iFrame. That way, both SPA and multi pages app can co-exists without changing the code
	
	    @param url The URL that is assinged to go to
	    @param pageName The # in SPA, otherwise it is ignored
	    @param isReturningToPreviousPage Check if the user is trying to return to a previous page 
    ***/
   initialize : function(){
       var first=parseInt(location.hostname.charAt(0));
       var pathname = window.location.pathname;
       var splitPathname = pathname.split("/");
       
       // added for CLFE-13
       for (var i = 0; i < splitPathname.length; i++) {
    	   if(splitPathname[i] && splitPathname[i].trim() != ""){    		   
    		   
    		   var pathData = splitPathname[i].toUpperCase();
    		   var senderData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[pathData]?Clazz.langConfig.senderInfoMap[pathData]:null;
    		   if(senderData){ 

					var indexVal=pathname.search("/"+splitPathname[i]+"/");
    			   this.basePath =  pathname.substring(0,indexVal+1);    			   
				 
    			   this.countryPath = i;    			   
    			   this.langPath = i+1;  			   
    			   break;
				   
    		   }
    	   }
       }

        if(isNaN(first) && location.hostname!=="localhost")
       {
          if(splitPathname!==undefined && (splitPathname[1]!=="content"))
           {
				//this.basePath = "/";
                this.basePath = this.basePath + splitPathname[this.countryPath] + "/" + splitPathname[this.langPath] + "/";
                this.bashPathMobile = "/" + splitPathname[1] + "/" + splitPathname[2] + "/m/";
           }else
           {
                //this.basePath = "/content/wucom/base/";
                this.basePath = this.basePath + splitPathname[this.countryPath] + "/"+splitPathname[this.langPath] + "/";

                this.bashPathMobile = "/content/wucom/mobile-sites/";
                this.bashPathMobile = this.bashPathMobile + splitPathname[4] + "/" + splitPathname[5] + "/";
           }  
       }else{
           //debugger;
    	   var countryCode;
           var languageCode;
           //if(pathname.indexOf('content') !== -1){
				//this.basePath = "/content/wucom/base/"
				countryCode =  splitPathname[this.countryPath];
                languageCode = splitPathname[this.langPath];
          // }else{
				//this.basePath = "/"
				//countryCode =  splitPathname[1];
                //languageCode = splitPathname[2];
           //}

    	   if(countryCode.indexOf("_") != -1){
    		  this.basePath = this.basePath + countryCode + "/";
    		  this.bashPathMobile = this.bashPathMobile + countryCode + "/";
    	   }else{
    		  this.basePath = this.basePath + countryCode + "/"+languageCode + "/";
    		  this.bashPathMobile = this.bashPathMobile + countryCode + "/"+languageCode + "/";
    	   }
       }

       //Change basePathMobile when in blue print mode
       if(pathname.indexOf("txnmobile-blueprint") != -1){
    	   this.bashPathMobile = "/content/wucom/base/txnmobile-blueprint/en";
       }

       if(pathname.indexOf("/static/") != -1){
    	   this.bashPath = "/us/en/";
           this.basePath = "/us/en/";
       }

       //change countryPath for mDot
       if(pathname.indexOf("mobile-sites") != -1){
    	   this.countryPath = 4;
       }
   },

	__goTo : "Go to given page",
	goTo : function(url, pageName, isReturningToPreviousPage){
		var isSpa = top.Clazz != null && top.Clazz.navigationController != null;
		isReturningToPreviousPage = isReturningToPreviousPage != null ? isReturningToPreviousPage : false;

		if(!isSpa) {
			window.location.href = url;
		} else if (isSpa && !isReturningToPreviousPage) {
			var pageWidget = new Clazz.PageWidget({pageUrl: url});
			
			if(pageName != null) {
				pageWidget.name = pageName;
			}
			
			// stop checking sessionId when change page in mobile single page
			// apps/westernunion-mobile/components/WUcommon/WUSessionChecker.jsp
			if(typeof StopSessionCheckerMobileSPA != 'undefined'){
				StopSessionCheckerMobileSPA();
			}
			
			top.Clazz.navigationController.push(pageWidget);
			
		} else {
			top.Clazz.navigationController.pop();
		}
		var isBackButton = JSON.parse(Clazz.WULocalStorage.getIsBackButton());
		if(this.isInMobilePage() && this.getSenderLanguageFromURL() != "US" && Clazz.WUCookieSettingsMobile){
			if(!Clazz.WUCookies.getCookieCookieOptIn() && (!isBackButton)){
				Clazz.WUCookieSettingsMobile.saveDefaultCookieOpt();
			}else{
				Clazz.WULocalStorage.clearIsBackButton();
			}
		}
	},

	goToLanguage : function(languageCode){
		var currentPath = this.getCurrentPath();
		//var languageIndex = currentPath.indexOf("content") != -1 ? 5 : 2;
		var languageIndex = this.langPath;
		var currentPathArray = currentPath.split("/");
		currentPathArray[languageIndex] = languageCode.toLowerCase();
		var newPath = "";        
		for(var i = 1; i < currentPathArray.length; i++){
			newPath += "/" + currentPathArray[i];
		}
        var path = newPath.split(".");
		//Start pbl-1704 
        var tempAlias = null;
		var langAlias = sessionStorage.getItem("CountryAlias");
        var countryArry = sessionStorage.getItem("CountryArry");
		var count=0;
		var lng;
		if(Clazz.WUNavigator.isInThisWebPage("send-money/start.html")){
        var PageVar=currentPathArray[currentPathArray.length-1].split(".");
		if(langAlias && countryArry && PageVar[0]==countryArry){
			var langArry = langAlias.split("|");
			for(var lng = 0; lng < langArry.length; lng++){
				if(path[0].indexOf("/"+langArry[lng]+"/") > -1){
					var sub = path[0].substring(0, path[0].indexOf("/"+langArry[lng]+"/"));
						path[0] = sub+"/"+langArry[lng]+"/"+"home";
						var countryArrays = countryArry.split("|");
						tempAlias = countryArrays[count];
						break;		
				}
				count++;
			}
		}
		}
		else if(langAlias && countryArry){
			var langArry = langAlias.split("|");
			for(var lng = 0; lng < langArry.length; lng++){
				if(path[0].indexOf("/"+langArry[lng]+"/") > -1){
					var sub = path[0].substring(0, path[0].indexOf("/"+langArry[lng]+"/"));
						path[0] = sub+"/"+langArry[lng]+"/"+"home";
						var countryArrays = countryArry.split("|");
						tempAlias = countryArrays[count];
						break;		
				}
				count++;
			}
		}
		//End pbl-1704
        var jsonPath = path[0] + "/jcr:content.json";
        var slingAlias = "";
        var self = this;
		var pageResource = Clazz.WULocalStorage.getPageResource();
		var actualPath = "";
		if (pageResource) {
			for(var i = 1; i < currentPathArray.length-1; i++){
				actualPath += "/" + currentPathArray[i];
			}
			actualPath += "/" + pageResource + "." + path[1];
		}

        $.get(jsonPath).then(function(jsonData){
            slingAlias = jsonData['sling:alias'];
			//start pbl-1704 
            if(tempAlias != null){
                slingAlias = tempAlias;
            }
			//end pbl-1704 
        	if (slingAlias) {				
				//if (!pageResource) { -> If we change the page it keeps same page in page resource
					var setPageRes = currentPathArray[currentPathArray.length-1].split(".");
					Clazz.WULocalStorage.setPageResource(setPageRes[0]);				
				//}
				currentPathArray[currentPathArray.length-1] = slingAlias + "." + path[1];
				var slingPath = "";
				for(var i = 1; i < currentPathArray.length; i++){
					slingPath += "/" + currentPathArray[i];
				}			
				self.goTo(slingPath);
            } else {
				self.goTo(newPath);
            }
        }, function(xhr, status, error){
			//self.goTo(actualPath);
			var actualPathArray = actualPath.split(".");
			var jsonActualPath = actualPathArray[0] + "/jcr:content.json";
			$.get(jsonActualPath).then(function(jsonData){
				slingAlias = jsonData['sling:alias'];
				if (slingAlias) {				
					currentPathArray[currentPathArray.length-1] = slingAlias + "." + path[1];
					var slingPath = "";
					for(var i = 1; i < currentPathArray.length; i++){
						slingPath += "/" + currentPathArray[i];
					}			
					self.goTo(slingPath);
				} else {
					self.goTo(actualPath);
				}				
			});
        });
	},

	__back : "Go back",
	back : function(backToIndex){
		var isSpa = top.Clazz.navigationController;

		if(!isSpa) {
			if(backToIndex){
				window.history.go(backToIndex);
			}else{
				if(this.getCurrentPath() != (this.pathDot+this.bashPathMobile+this.HOME_PAGE_URL)){
					window.history.back();
				}
			}
		} else {
			top.Clazz.navigationController.pop();
		}
	},

	__forward : "Go forward",
	forward : function(){
		var isSpa = top.Clazz.navigationController;

		// not supporting moving forward in Spa
		if(!isSpa) {
			window.history.forward();
		}
	},
	
	__getCurrentPath : "Return path of current page.",
	getCurrentPath : function(){
		return window.location.pathname;
	},
	
	__goToProfilePage : "this method is used to redirect to Profile page web version",
	goToProfilePage : function(){
		Clazz.WULocalStorage.clearIdentityData();
		Clazz.WULocalStorage.clearVerificationData();
    	Clazz.WULocalStorage.clearValidationResponse();
    	Clazz.WULocalStorage.clearValidationRequest();
    	Clazz.WULocalStorage.clearSendMoneyObjects();
    	Clazz.WULocalStorage.clearSendMoneyInmate();
    	Clazz.WULocalStorage.clearReceiverInformation();
    	Clazz.WULocalStorage.clearDataInputField();
    	Clazz.WULocalStorage.clearKycObject();
    	Clazz.WULocalStorage.clearMtcObject();
    	Clazz.WULocalStorage.clearErrorResponse();
    	Clazz.WULocalStorage.clearBankName();
		this.goTo(this.basePath+this.PROFILE_PAGE_URL, "profile");
	},
	
	__goToTrackTransferPage : "this method is used to redirect to track transfer page web version",
	goToTrackTransferPage : function(){
		this.goTo(this.basePath+"track-transfer.html");
	},
	
	__goToTrackTransferMobilePage : "this method is used to redirect to track transfer page mdot version",
	goToTrackTransferMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/option.html");
	},
	
	__goToMultipleTransactionMobilePage : "this method is used to redirect to track transfer page for multiple transaction mdot version",
	goToMultipleTransactionMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/multipleTransaction.html");
	},
	
	__goToMultipleTransactionLevel2MobilePage : "this method is used to redirect to track transfer page for multiple transaction level 2 mdot version",
	goToMultipleTransactionLevel2MobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/multipleTransactionLvl2.html");
	},
	
	__goToTrackingMoneyTransferMobilePage : "this method is used to redirect to tracking money transfer page mdot version",
	goToTrackingMoneyTransferMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/moneyTransfer.html");
	},
	
	__goToTrackingBillpayMobilePage : "this method is used to redirect to tracking bill pay page mdot version",
	goToTrackingBillpayMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/billpay.html");
	},
	
	__goToTrackingInmateMobilePage : "this method is used to redirect to tracking inmate page mdot version",
	goToTrackingInmateMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/inmate.html");
	},
	
	__goToTrackingDetailsResultMobilePage : "this method is used to redirect to tracking details result page mdot version",
	goToTrackingDetailsResultMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"trackTransfer/trackTransferDetailsResult.html");
	},
	
	__goToLoginPage : "this method is used to redirect to login page web version",
	goToLoginPage : function(){
		this.goTo(this.basePath+this.LOGIN_PAGE_URL)
	},
	
	__goToLOginMobilePage : "this method is used to redirect to login page mdot version",
	goToLOginMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+this.LOGIN_PAGE_URL, "login");
	},
	
	__goToForgotPasswordPage : "this method is used to redirect to forgot password page mdot version",
	goToForgotPasswordPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"forgotPassword/password-recovery.html")
	},
	
	__goToTempPassForgotPasswordPage : "this method is used to redirect to temporary password in forgot password page mdot version",
	goToTempPassForgotPasswordPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"forgotPassword/tempPassword.html")
	},
	
	__goToRegisterMobilePage : "this method is used to redirect to register page mdot version",
	goToRegisterMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"register.html", "register");
	},
	
	__goToRegisterPage : "this method is used to redirect to register page web version",
	goToRegisterPage : function(){
		this.goTo(this.basePath+"register.html")
	},
	
	__goToSpainCollectIDPage : "this method is used to redirect to CollectId page",
	//Added errorCode param as part of changes for RINTL-30555
	goToSpainCollectIDPage : function(errorCode){
	//changes for RINTL-28635:START
		var pathname = window.location.pathname;
		var splitPathname = pathname.split("/");
		this.basePath= "/"+splitPathname[this.countryPath]+"/"+splitPathname[this.langPath]+"/";
		if (errorCode){

			this.goTo(this.basePath+"send-money/app/globalcollectid?errorcode="+errorCode)
		}else {
			//changes for RINTL-28635:END	
			this.goTo(this.basePath+"send-money/app/globalcollectid")
		}
	},

	__goToHomePage : "this method is used to redirect to home page web version",
	goToHomePage : function(){
		Clazz.WULocalStorage.clearSummaryObjects();
		Clazz.WULocalStorage.clearIdentityData();
		Clazz.WULocalStorage.clearVerificationData();
    	Clazz.WULocalStorage.clearValidationResponse();
    	Clazz.WULocalStorage.clearValidationRequest();
    	Clazz.WULocalStorage.clearSendMoneyObjects();
    	Clazz.WULocalStorage.clearSendMoneyInmate();
    	Clazz.WULocalStorage.clearReceiverInformation();
    	Clazz.WULocalStorage.clearDataInputField();
    	Clazz.WULocalStorage.clearKycObject();
    	Clazz.WULocalStorage.clearMtcObject();
    	Clazz.WULocalStorage.clearErrorResponse();
    	Clazz.WULocalStorage.clearBankName();
    	Clazz.WULocalStorage.clearAlternatePaymentTypes();
		this.goTo(this.basePath+this.HOME_PAGE_URL);
	},
	
	__goToHomeMobilePage : "this method is used to redirect to home page mdot version",
	goToHomeMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+this.HOME_PAGE_URL, "home");
	},
	
	__goToProfileMobilePage : "this method is used to redirect to profile page mdot version",
	goToProfileMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+this.PROFILE_PAGE_URL, "profile");
	},
	
	__goToPayBillsMobilePage : "this method is used to redirect to paybills page mdot version",
	goToPayBillsMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"payBills.html", "paybill");
	},
	
	__goToPaymentInfoCreditCardMobilePage : "this method is used to redirect to payment info credit card page mdot version",
	goToPaymentInfoCreditCardMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"paymentInfoCreditCard.html", "paybill");
	},
	
	__goToCreditCardCvvMobilePage : "this method is used to redirect to cvv page mdot version",
	goToCreditCardCvvMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"creditCardCvv.html", "paybill");
	},
	
	__goToAddGoldCardMobilePage : "this method is used to redirect to add gold card page mdot version",
	goToAddGoldCardMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"addGoldCard.html", "paybill");
	},
	
	__goToAddCreditCardPage : "this method is used to redirect to add credit card page mdot version",
	goToAddCreditCardPage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"addCreditCard.html", "addCreditCard");
	},
	
	__goToAddBankAccountMobilePage : "this method is used to redirect to add bank account page mdot version",
	goToAddBankAccountMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"addBankAccount.html", "addBankAccount");
	},
	
	__goToReviewPayBillPage : "this method is used to redirect to review pay bill page mdot version",
	goToReviewPayBillPage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"reviewPayBillPage.html", "paybill");
	},
	
	__goToSendMoneyMobilePage : "this method is used to redirect to send money page mdot version",
	goToSendMoneyMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"sendMoney.html", "sendmoney");
	},
	
	__goToSendMoneyOptionsMobilePage : "this method is used to redirect to send money options page mdot version",
	goToSendMoneyOptionsMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/options.html", "sendmoneyOptions");
	},
	
	__goToSenderInterstitialMobilePage : "this method is used to redirect to sender interstitial page mdot version",
	goToSenderInterstitialMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/senderInterstitial.html", "senderInterstitial");
	},
	
	__goToSendMoneyBankAccountInfoMobilePage : "this method is used to redirect to bank account info page mdot version",
	goToSendMoneyBankAccountInfoMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/bankAccountInfo.html", "sendmoneyBankAccountInfo");
	},
	
	__goToSendMoneyAddBankMobilePage : "this method is used to redirect to add bank page mdot version",
	goToSendMoneyAddBankMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/addBank.html", "sendmoneyAddBank");
	},
	
	__goToSendMoneyAgentLocationMobilePage : "this method is used to redirect to send money agent location page mdot version",
	goToSendMoneyAgentLocationMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-payAtAgent/payAtAgent.html", "sendmoneyPayAtAgent");
	},
	
	__goToSendMoneySavedBankMobilePage : "this method is used to redirect to saved bank page mdot version",
	goToSendMoneySavedBankMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/savedBanks.html", "sendmoneySavedBank");
	},
	
	__goToPaymentMethodMobilePage : "this method is used to redirect to payment method page mdot version",
	goToPaymentMethodMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/paymentMethod.html", "paymentMethod");
	},	
	
	__goToPaymentInfoCreditCardMobilePage : "this method is used to redirect to payment info credit card page mdot version",
	goToPaymentInfoCreditCardMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/paymentInfoCvv.html", "sendMoneyPaymentInfoCvv");
	},
	
	__goToPaymentInfoWUPayMobilePage : "this method is used to redirect to payment info wupay page mdot version",
	goToPaymentInfoWUPayMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/paymentInfoWUPay.html", "sendMoneyPaymentInfoWUPay");
	},
	
	__goToAddPromoCodeMobilePage : "this method is used to redirect to add promo code page mdot version",
	goToAddPromoCodeMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/promoCode.html", "promoCode");
	},	
	
	__goToReceiptPaybillMobilePage : "this method is used to redirect to receipt paybill page mdot version",
	goToReceiptPaybillMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"receipt.html", "receipt");
	},
	
	__goToReceiptSendMoneyMobilePage : "this method is used to redirect to receipt send money page mdot version",
	goToReceiptSendMoneyMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/receipt.html", "receipt");
	},


	//Veda PCF changes(Purpose of Transaction and Source of Funds)
	__goToSendMoneyReceiverInfoPage : "this method is used to redirect to send money options page mdot version",
	goToSendMoneyReceiverInfoPage : function() {
		this.goTo(this.basePath+"send-money/receiverInformation.html", "sendmoneyOptions");
	},

	__goToReceiptReceiptPayAtAgentMobilePage : "this method is used to redirect to receipt pay at agent page mdot version",
	goToReceiptReceiptPayAtAgentMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"receiptPayAtAgent.html", "receipt");
	},
	
	__goToSendMoneyPanelPage : "this method is used to redirect to receipt pay at agent page mdot version",
	goToSendMoneyPanelPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/start.html", "sendmoney");
	},
	
	__goToSendMoneyReviewMobilePage : "this method is used to redirect to send money review page mdot version",
	goToSendMoneyReviewMobilePage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/review.html", "review");
	},
	
	__goToSendMoneyPaymentPage : "this method is used to redirect to send money payment page mdot version",
	goToSendMoneyPaymentPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"sendMoneyPayment.html", "sendmoney");
	},
	
	__goToSendMoneySoftDeclineValidationPage : "this method is used to redirect to send money soft decline validation page mdot version",
	goToSendMoneySoftDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/sendMoneySoftDecline.html");
	},
	
	__goToSendMoneyWUPaySoftDeclineValidationPage : "this method is used to redirect to send money wupay soft decline validation page mdot version",
	goToSendMoneyWUPaySoftDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/sendMoneyWUPaySoftDecline.html");
	},
	
	__goToSendMoneyHardDeclineValidationPage : "this method is used to redirect to send money hard decline validation page mdot version",
	goToSendMoneyHardDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/sendMoneyHardDecline.html");
	},
	
	__goToSendMoneyHardDeclineValidationPageWeb : "this method is used to redirect to send money hard decline validation page mdot version",
	goToSendMoneyHardDeclineValidationPageWeb : function() {
		this.goTo(this.basePath+"send-money/sendMoneyHardDecline.html");
	},
	
	__goToSendMoneyReceiverPage : "this method is used to redirect to send money receiver page mdot version",
	goToSendMoneyReceiverPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/sendMoneyReceiver.html", "sendmoney");
	},
	
	__goToSummarySendMoneyMobilePage : "this method is used to redirect to summary send money page mdot version",
	goToSummarySendMoneyMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/summary.html", "sendmoney");
	},
	
	__goToSendMoneySaveBillerMobile : "this method is used to redirect to send money save biller page mdot version",
	goToSendMoneySaveBillerMobile : function() {
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillSaveBiller.html","pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillSaveBiller.html", "saveBiller");
	},
	
	__goToSendMoneySearchBillerMobile : "this method is used to redirect to send money search biller page mdot version",
	goToSendMoneySearchBillerMobile : function() {
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillSearchBiller.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillSearchBiller.html", "searchBiller");
	},

	__goToPayBillPaymentMethod : "this method is used to redirect to paybill payment page mdot version",
	goToPayBillPaymentMethod : function() {
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillPaymentMethod.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillPaymentMethod.html", "payBillPaymentMethod");
	},
	
	__goToPayBillLandingMobile : "this method is used to redirect to paybill landing page mdot version",
	goToPayBillLandingMobile : function() {
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillLanding.html","pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillLanding.html", "payBillLanding");
	},
	
	__goToPayBillSaveCardMobile : "this method is used to redirect to paybill save card page mdot version",
	goToPayBillSaveCardMobile : function(){
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillSaveCard.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillSaveCard.html", "payBillSaveCard");
	},
	
	__goToPayBillEditCreditCardMobile : "this method is used to redirect to paybill edit credit card page mdot version",
	goToPayBillEditCreditCardMobile : function(){
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillEditCreditCard.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillEditCreditCard.html", "payBillEditCreditCard");
	},
	
	__goToPayBillReviewMobilePage : "this method is used to redirect to paybill review page mdot version",
	goToPayBillReviewMobilePage : function(){
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillReview.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillReview.html", "payBillReview");
	},
	
	__goToPayBillKycOptionsMobilePage : "this method is used to redirect to paybill kyc options page mdot version",
	goToPayBillKycOptionsMobilePage : function(){
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillkycOptions.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillkycOptions.html", "payBillkycOptions");
	},
	
	__goToPayBillKycVerificationMobilePage : "this method is used to redirect to paybill kyc verification page mdot version",
	goToPayBillKycVerificationMobilePage : function(){
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillKycVerification.html", "pay-bill");
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillKycVerification.html", "payBillKycVerification");
	},
	
	__goToPayBillSoftDeclineValidationPage : "this method is used to redirect to paybill soft decline validation page mdot version",
	goToPayBillSoftDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillSoftDecline.html");
	}, 
	
	__goToPayBillHardDeclineValidationPage : "this method is used to redirect to paybill hard decline validation page mdot version",
	goToPayBillHardDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillHardDecline.html");
	},
	
	__goToPayBillPrimaryIdentificationMobile : "this method is used to redirect to paybill primary identification page mdot version",
	goToPayBillPrimaryIdentificationMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/primaryIdentification.html","pay-bill");
	},
	
	__goToPayBillReceiptMobilePage : "this method is used to redirect to paybill receipt page mdot version",
	goToPayBillReceiptMobilePage : function(){
		sessionStorage.setItem(this.pathDot+this.bashPathMobile+"pay-bill/payBillReceiptMobile.html", "pay-bill"); 
		this.goTo(this.pathDot+this.bashPathMobile+"pay-bill/payBillReceiptMobile.html", "payBillReceiptMobile");
	},
	
	__goToInmateSearchFacilityMobile : "this method is used to redirect to inmate of search facility page mdot version",
	goToInmateSearchFacilityMobile : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateSearchFacility.html", "searchFacility");
	},
	           
	__goToInmateSaveFacilityMobile : "this method is used to redirect to inmate of save facility page mdot version",
	goToInmateSaveFacilityMobile : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateSaveFacility.html", "saveFacility");
	},
	
	__goToInmateLandingMobile : "this method is used to redirect to inmate landing page mdot version",
	goToInmateLandingMobile : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateLanding.html", "inmateLanding");
	},
	
	__goToInmatePaymentMethod : "this method is used to redirect to inmate payment method page mdot version",
	goToInmatePaymentMethod : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmatePaymentMethod.html", "inmatePaymentMethod");
	},
	
	__goToInmateSaveCardMobile : "this method is used to redirect to inmate of save card page mdot version",
	goToInmateSaveCardMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateSaveCard.html", "inmateSaveCard");
	},
	
	__goToInmateEditCreditCardMobile : "this method is used to redirect to inmate of edit credit card page mdot version",
	goToInmateEditCreditCardMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateEditCreditCard.html", "inmateEditCreditCard");
	},
	
	__goToInmateReviewMobilePage : "this method is used to redirect to inmate of review page mdot version",
	goToInmateReviewMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateReview.html", "inmateReview");
	},
	
	__goToInmateKycOptionsMobilePage : "this method is used to redirect to inmate of kyc options page mdot version",
	goToInmateKycOptionsMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateKycOptions.html", "inmateKycOptions");
	},
	
	__goToInmateKycVerificationMobilePage : "this method is used to redirect to inmate of kyc verification page mdot version",
	goToInmateKycVerificationMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateKycVerification.html", "inmateKycVerification");
	},
	
	__goToInmateSoftDeclineValidationPage : "this method is used to redirect to inmate of soft decline validation page mdot version",
	goToInmateSoftDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateSoftDecline.html");
	},
	
	__goToInmateHardDeclineValidationPage : "this method is used to redirect to inmate of hard decline validation page mdot version",
	goToInmateHardDeclineValidationPage : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateHardDecline.html");
	},
	
	__goToInmateReceiptMobilePage : "this method is used to redirect to receipt inmate page mdot version",
	goToInmateReceiptMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/inmateReceiptMobile.html", "inmateReceiptMobile");
	},
	
	__goToInmatePrimaryIdentificationMobile : "this method is used to redirect to inmate primary identification page mdot version",
	goToInmatePrimaryIdentificationMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-inmate/primaryIdentification.html","send-inmate");
	},
	
	__goToEstimatePriceMobilePage : "this method is used to redirect to estimate price page mdot version",
	goToEstimatePriceMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"estimatePrice.html", "estimatePrice");
	},
	
	__goToEstimatePriceOptionMobilePage : "this method is used to redirect to estimate price option page mdot version",
	goToEstimatePriceOptionMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"price-estimator/options.html", "estimatePriceOption");
	},
	
	__goToEstimatePaymentMobilePage : "this method is used to redirect to estimate payment page mdot version",
	goToEstimatePaymentMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"price-estimator/estimatorPaymentMethod.html", "estimatorPaymentMethod");
	},
	
	__goToPaymentMethodSofortMobilePage : "this method is used to redirect to payment method sofort instruction page mdot version",
	goToPaymentMethodSofortMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/paymentInfoSofort.html", "paymentMethodSofortInstruction");
	},
	
	__goToEstimatePriceStartMobilePage : "this method is used to redirect to estimate price start page mdot version",
	goToEstimatePriceStartMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"price-estimator/estimateStart.html", "estimatePriceStart");
	},
	
	__goToEstimateDeleveryOptionMobilePage : "this method is used to redirect to estimate delivery option page mdot version",
	goToEstimateDeleveryOptionMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"price-estimator/deliveryOptions.html", "estimateDeliveryOptions");
	},
	
	__goToEstimatePayBillMobilePage : "this method is used to redirect to estimate of paybill page mdot version",
	goToEstimatePayBillMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"price-estimator/estimatePaybill.html", "estimatePayBill");
	},
	
	__goToEstimateSearchPayBillMobilePage : "this method is used to redirect to estimate of search paybill page mdot version",
	goToEstimateSearchPayBillMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"price-estimator/searchPayBill.html", "searchPayBill");
	},

    /*********RINTL 1620 ************/
	__goToFindLocationStaticPage : "this method is used to redirect to find location static page web version",
	goToFindLocationStaticPage : function() {
		this.goTo(this.basePath + "agent-locator.html");
	},





	// RTHREE-2756 - Modified the URL 
	__goToCallNowStaticPage : "this method is used to redirect to call now of static page",
	goToCallNowStaticPage : function() {
		window.location='http://www.westernunion.com/pay-bills-by-phone';
	},
	
	__goToDownLoadStaticPage : "this method is used to redirect to download of static page",
	goToDownLoadStaticPage : function() {
		window.location='http://www.westernunion.com/us/campaigns/mobile-app.page?REF_ID=BVO4-5SRQ-RVBY-QEXC-2DES-3DGY-RG64-7ZVR&REF_ID=761L-2DLN-30RP-WNSY-OIY1-8WZH-TUNF-00YH';
	},
	
	__goToFindAnAgentMobilePage : "this method is used to redirect to find an agent page mdot version",
	goToFindAnAgentMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"agentLocator.html", "agentLocator");
	},
	
	__goToPayAtAgentMobilePage : "this method is used to redirect to pay at agent page mdot version",
	goToPayAtAgentMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"payAtAgent.html", "payAtAgent");
	},
	
	__goToEstimatePriceResultMobilePage : "this method is used to redirect to estimate price result page mdot version",
	goToEstimatePriceResultMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"estimatePriceResult.html", "estimatePriceResult");
	},
	
	__goToPaymentInfoBankAccountMobilePage : "this method is used to redirect to payment info bank account page mdot version",
	goToPaymentInfoBankAccountMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"paymentInfoBankAccount.html", "PaymentInfoBankAccount");
	},
	
	__goToPaymentInfoBankDetailMobilePage : "this method is used to redirect to payment info bank detail page mdot version",
	goToPaymentInfoBankDetailMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"paymentInfoBankDetail.html", "PaymentInfoBankDetail");
	},
	
	__goToPaymentInfoEditBankMobilePage : "this method is used to redirect to payment info edit bank page mdot version",
	goToPaymentInfoEditBankMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"paymentInfoEditBank.html", "paymentInfoEditBank");
	},
	
	__goToPaymentInfoEditCreditCardMobilePage : "this method is used to redirect to payment info edit credit card page mdot version",
	goToPaymentInfoEditCreditCardMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/paymentInfoEditCreditCard.html", "paymentInfoEditCreditCard");
	},
	
	__goToCustomerSupportMobilePage : "this method is used to redirect to customer support page mdot version",
	goToCustomerSupportMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"customerSupportPage.html", "customerSupport");
	},
	
	__goToKycOptionsMobilePage : "this method is used to redirect to kyc options page mdot version",
	goToKycOptionsMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/kycOptions.html", "kycOptions");
	},
	
	__goToKycVerificationOptionsMobilePage : "this method is used to redirect to kyc verification options page mdot version",
	goToKycVerificationOptionsMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/kycVerificationOptions.html", "kycVerificationOptions");
	},
	
	__goToKycVerificationAdditionalInfoMobilePage : "this method is used to redirect to kyc verification additional info page mdot version",
	goToKycVerificationAdditionalInfoMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"kycVerificationAdditionalInfo.html", "kycVerificationAdditionalInfo");
	},
	
	__goToKycAdditionalIfoOptionalMobilePage : "this method is used to redirect to kyc additional info optional page mdot version",
	goToKycAdditionalIfoOptionalMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"kycAdditionalIfoOptional.html", "kycAdditionalIfoOptional");
	},
	
	__goToKycNonRealTimeListOptionMobilePage : "this method is used to redirect to kyc non real time list optional page mdot version",
	goToKycNonRealTimeListOptionMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"kycNonRealTimeListOption.html", "kycNonRealTimeListOption");
	},
	
	__goToKycCardBankStatementMobilePage : "this method is used to redirect to kyc card bank statement page mdot version",
	goToKycCardBankStatementMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"kycCardBankStatement.html", "kycCardBankStatement");
	},
	
	__goToKycVerificationTransactionNumberMobilePage : "this method is used to redirect to kyc verification transaction number page mdot version",
	goToKycVerificationTransactionNumberMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"kycVerificationTransactionNumber.html", "kycVerificationTransactionNumber");
	},
	
	__goToAboutUsMobile : "this method is used to redirect to about us page mdot version",
	goToAboutUsMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"about.html", "about");
	},
	
	__goToWebViewMobile : "this method is used to redirect to web view mobile",
	goToWebViewMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"webViewMobile.html", "webViewMobile");
	},
	
	__goToPayAtAgentPanelMobilePage : "this method is used to redirect to pay at agent panel mdot version",
	goToPayAtAgentPanelMobilePage : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"payAtAgentPanel.html", "payAtAgentPanel");
	},
	
	__goToResetPasswordPage : "this method is used to redirect to reset password page web version",
	goToResetPasswordPage : function(){
		this.goTo(this.basePath+this.RESET_PASSWORD_URL);
	},

	__goToPayBillsPage : "this method is used to redirect to paybill page web version",
	goToPayBillsPage : function(){
		this.goTo(this.basePath+"bill-pay/start.html")
	},
	
	__goToPayBillsKycConfirmIdentity : "this method is used to redirect to paybill kyc confirm identity page web version",
	goToPayBillsKycConfirmIdentity : function(){
		this.goTo(this.basePath+"bill-pay/kycConfirmIdentity.html");
	},
	
	__goToPayBillsLogin : "this method is used to redirect to paybill of login page web version",
	goToPayBillsLogin : function(){
		this.goTo(this.basePath+"bill-pay/payBillsLogin.html")
	},
	
	__goToInterstitialPage : "this method is used to redirect to interstitial page web version",
	goToInterstitialPage : function(){
		if(this.isInThisWebPage("send-money/sendMoneyLogin.html")){
			window.location.replace(this.basePath+this.INTERSTITIAL_SENDMONEY_PAGE_URL);
		}else{
			window.location.replace(this.basePath+this.INTERSTITIAL_PAGE_URL);
		}

	},
	// This function can be removed after CLFE sprint 20. Renamed with function below 'goToVerificationPage'
	__goToAustraliaVerificationPage : "this method is used to redirect to australia verification page web version",
	goToAustraliaVerificationPage : function(){
		this.goTo(this.basePath+"australia-verification.html");
	},

	__goToVerificationPage : "this method is used to redirect to australia verification page web version",
	goToVerificationPage : function(){
		this.goTo(this.basePath+"verification.html");
	},

	__goToEstimatePricePage : "this method is used to redirect to estimate price page web version",
	goToEstimatePricePage : function(){
		this.goTo(this.basePath+"price-estimator/start.html")
	},

	__goToEstimatePricePaybillsPage : "this method is used to redirect to estimate price of paybills page web version",
	goToEstimatePricePaybillsPage : function(){
		this.goTo(this.basePath+"price-estimator/performEstimatedFeeInquiry.html")
	},
	
	__goToEstimatePriceSendmoneyPage : "this method is used to redirect to estimate price of send money page web version",
	goToEstimatePriceSendmoneyPage : function(){
		this.goTo(this.basePath+"price-estimator/continue.html")
	},

	__goToSendMoneyPage : "this method is used to redirect to send money page web version",
	goToSendMoneyPage : function(){
		this.goTo(this.basePath+"send-money/start.html")
	},
	
	__goToReceiverInformation : "this method is used to redirect to receiver information page web version",
	goToReceiverInformation : function(){
		this.goTo(this.basePath+"send-money/receiverInformation.html")
	},
	
	__goToSendMoneyLogin : "this method is used to redirect to send money of login page web version",
	goToSendMoneyLogin : function(){
		this.goTo(this.basePath+"send-money/sendMoneyLogin.html")
	},
	
	__goToSendMoneyRegister : "this method is used to redirect to send money of register page web version",
	goToSendMoneyRegister : function(){
		this.goTo(this.basePath+"send-money/register.html")
	},
	
	__goToPaymentInformation : "this method is used to redirect to payment information page web version",
	goToPaymentInformation : function(){
		this.goTo(this.basePath+"send-money/paymentInformation.html")
	},
	
	__goToReviewSendMoney : "this method is used to redirect to review of send money page web version",
	goToReviewSendMoney : function(){
		this.goTo(this.basePath+"send-money/review.html")
	},
	
	__goToSendMoneyDeclineOptions : "this method is used to redirect to send money of decline options page web version",
	goToSendMoneyDeclineOptions : function(){
		this.goTo(this.basePath+"send-money/declineOptions.html")
	},
	
	__goToConfirmIdentitySendMoney : "this method is used to redirect to confirm identity of send money page web version",
	goToConfirmIdentitySendMoney : function(){
		this.goTo(this.basePath+"send-money/confirmIdentity.html")
	},

	// This function can be removed after CLFE sprint 20. Renamed with function below 'goToSendMoneyVerification'
	__goToSendMoneyAustraliaVerification : "this method is used to redirect to send money of Australia verification page web version",
	goToSendMoneyAustraliaVerification : function(){
		this.goTo(this.basePath+"send-money/australia-verification.html");
	},

	__goToSendMoneyVerification : "this method is used to redirect to send money of Australia verification page web version",
	goToSendMoneyVerification : function(){
		this.goTo(this.basePath+"send-money/verification.html");
	},
	
	__goToPayBillsPage : "this method is used to redirect to send money of Australia verification page web version",
	goToPayBillsPage : function(){
		this.goTo(this.basePath+"bill-pay/start.html")
	},
	
	__goToRequiredBillerInformationPage : "this method is used to redirect to required biller information page web version",
	goToRequiredBillerInformationPage : function(){
		this.goTo(this.basePath+"bill-pay/requiredBillerInformation.html")
	},
	
	__goToPaymentInfoPayBills : "this method is used to redirect to payment information of paybills page web version",
	goToPaymentInfoPayBills : function(){
		this.goTo(this.basePath+"bill-pay/paymentInformation.html")
	},
	
	__goToConfirmIdentityPayBills : "this method is used to redirect to confirm identity of paybills page web version",
	goToConfirmIdentityPayBills : function(){
		this.goTo(this.basePath+"bill-pay/confirmIdentity.html")
	},
	
	__goToReviewPayBills : "this method is used to redirect to review paybills page web version",
	goToReviewPayBills : function(){
		this.goTo(this.basePath+"bill-pay/review.html")
	},
	
	__goToReceiptPayBills : "this method is used to redirect to receipt paybills page web version",
	goToReceiptPayBills : function(){
		this.goTo(this.basePath+"bill-pay/receipt.html")
	},
	
	__goToSessionExpiredPage : "this method is used to redirect to session expired page web version",
	goToSessionExpiredPage : function(){
		this.goTo(this.basePath+"session-expired.html")
	},
	
	__goToHardLockPage : "this method is used to redirect to hard lock page web version",
	goToHardLockPage : function(){
		this.goTo(this.basePath+"hardLock.html")
	},
	
	__goToSendMoneyReceiptPage : "this method is used to redirect to send money receipt page web version",
	goToSendMoneyReceiptPage : function(){
		this.goTo(this.basePath+"send-money/receipt.html")
	},
	
	__goToSendMoneyWUPayReceiptPage : "this method is used to redirect to send money wupay receipt page web version",
	goToSendMoneyWUPayReceiptPage : function(){
		this.goTo(this.basePath+"send-money/sendMoneyWUPayReceipt.html")
	},
	
	__goToSendMoneyCashReceiptPage : "this method is used to redirect to send money cash receipt page web version",
	goToSendMoneyCashReceiptPage : function(){
		this.goTo(this.basePath+"send-money/sendMoneyCashReceipt.html")
	},
	
	__goToSendMoneyInmatePage : "this method is used to redirect to send money of inmate page web version",
	goToSendMoneyInmatePage : function(){
		this.goTo(this.basePath+"send-inmate/start.html");
	},
	
	__goToStaticPageFindAgent : "this method is used to redirect to static page of find agent web version",
	goToStaticPageFindAgent : function(){
		window.location.assign("http://locations.westernunion.com/");
	},
	
	__goToSendMoneyKycConfirmIdentity : "this method is used to redirect to send money of kyc confirm identity page web version",
	goToSendMoneyKycConfirmIdentity : function(){
		this.goTo(this.basePath+"send-money/kycConfirmIdentity.html");
	},
	
	__goToSendMoneyDocUpload : "this method is used to redirect to send money of doc Transfer page web version",
	goToSendMoneyDocUpload : function(){
		this.goTo(this.basePath+"send-money/docTransfer.html");
	},
	
	__goToSendInmateKycConfirmIdentity : "this method is used to redirect to send inmate of kyc confirm identity page web version",
	goToSendInmateKycConfirmIdentity : function(){
		this.goTo(this.basePath+"send-inmate/kycConfirmIdentity.html");
	},

	__goToSendMoneyKycVerificationOptions : "this method is used to redirect to send money kyc verification options page web version",
	goToSendMoneyKycVerificationOptions : function(){
		this.goTo(this.basePath+"send-money/kycVerificationOptions.html");
	},

	__goToSendInmateKycVerificationOptions : "this method is used to redirect to send inmate of kyc verification options page web version",
	goToSendInmateKycVerificationOptions : function(){
		this.goTo(this.basePath+"send-inmate/kycVerificationOptions.html");
	},

	__goToBillPayKycVerificationOptions : "this method is used to redirect to paybill of kyc verification options page web version",
	goToBillPayKycVerificationOptions : function(){
		this.goTo(this.basePath+"bill-pay/kycVerificationOptions.html");
	},
	
	__goToSendMoneyKycSoftDescriptor : "this method is used to redirect to send money of kyc soft decriptor page web version",
	goToSendMoneyKycSoftDescriptor : function(){
		this.goTo(this.basePath+"send-money/kycSoftDescriptor.html");
	},
	
	__goToSendMoneyKycUploadDocument : "this method is used to redirect to send money of kyc upload document page web version",
	goToSendMoneyKycUploadDocument : function(){
		this.goTo(this.basePath+"send-money/kycUploadDocuments.html");
	},
	
	__goToSendMoneyKycUploadDocumentScreen : "this method is used to redirect to send money of kyc upload document screen page web version",
	goToSendMoneyKycUploadDocumentScreen : function(){
		this.goTo(this.basePath+"send-money/kycUploadIdScreen.html");
	},
	
	__goToSendMoneyKycWUTransactionNbrScreen : "this method is used to redirect to send money of kyc WU transaction number page web version",
	goToSendMoneyKycWUTransactionNbrScreen : function(){
		this.goTo(this.basePath+"send-money/kycWUTransactionNumber.html");
	},
	
	__goToSendMoneyInmateFees : "this method is used to redirect to send money inmate fees page web version",
	goToSendMoneyInmateFees : function() {
		this.goTo(this.basePath+"send-inmate/performEstimatedInmateFeeInquiry.html");
	},
	
	__goToSendMoneyInmateReceiverInfo : "this method is used to redirect to send money inmate receiver info page web version",
	goToSendMoneyInmateReceiverInfo : function() {
		this.goTo(this.basePath+"send-inmate/inmateReceiverInformation.html");
	},
	
	__goToSendMoneyInmatePaymentInfo : "this method is used to redirect to send money inmate payment info page web version",
	goToSendMoneyInmatePaymentInfo : function() {
		this.goTo(this.basePath+"send-inmate/inmatePaymentInformation.html");
	},
	
	__goToSendMoneyInmateReview : "this method is used to redirect to review of send money inmate page web version",
	goToSendMoneyInmateReview : function() {
		this.goTo(this.basePath+"send-inmate/inmateReview.html");
	},
	
	__goToReceiptInmate : "this method is used to redirect to receipt of send money inmate page web version",
	goToReceiptInmate : function(){
		this.goTo(this.basePath+"send-inmate/inmateReceipt.html")
	},

	__goToSendMoneyKycDUSuccess : "this method is used to redirect to send money of kyc document upload success page web version",
	goToSendMoneyKycDUSuccess : function(){
		this.goTo(this.basePath+"send-money/kycSuccessDocUpload.html");
	},

	__goToConfirmationScreen : "this method is used to redirect to send money of confirmation screen page web version",
	goToConfirmationScreen : function(){
		this.goTo(this.basePath+"send-money/confirmationScreen.html");
	},

	__goToSendMoneyInmateLogin : "this method is used to redirect to send money inmate of login page web version",
    goToSendMoneyInmateLogin : function(){
		this.goTo(this.basePath+"send-inmate/login.html");
	},
		
	__goToOnlieFXError : "this method is used to redirect to online FX error page web version",
	goToOnlieFXError : function(){
		this.goTo(this.basePath+"online-fx-error.html");
	},
	//MYWU-1419
	__goToFindAgentLocation : "this method is used to redirect to Find Agent Location page web version",
	goToFindAgentLocation : function(){
		this.goTo(this.basePath + "agent-locator.html");
	},
	//As part of MYWU
	__goToTermsAndConditions : "this method is used to redirect to terms and conditions page web version",
    goToTermsAndConditions : function() {
		this.goTo(this.basePath+"termsandcondition.html");
	},
	
	__goToExpressRegistrationPage : "this method is used to redirect to express of registration page web version",
	goToExpressRegistrationPage : function() {
		this.goTo(this.basePath+"expressregister.html");
	},
	
	__goToSendMoneyDeliveryOptionMobile : "this method is used to redirect to send money of delivery options page mdot version",
	goToSendMoneyDeliveryOptionMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/deliveryOptions.html");
	},
	
	__goToSendMoneyTestQuestionMobile : "this method is used to redirect to send money of test question page mdot version",
	goToSendMoneyTestQuestionMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/testQuestion.html");
	},
	
	//confirm identity and primary identification mobile
	__goToPrimaryIdentificationMobile : "this method is used to redirect to primary identification or confirm identity page mdot version",
	goToPrimaryIdentificationMobile : function(){
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/primaryIdentification.html");
	},
	
	//As part of Interstitial page added
	__goToSendMoneyInterstitial : "this method is used to redirect to send money interstitial page web version",
	goToSendMoneyInterstitial : function() {
		window.location.replace(this.basePath+"send-money/interstitialPage.html");
	},

	__goToMultipleBiller : "this method is used to redirect to multiple biller page web version",
	goToMultipleBiller : function() {
		this.goTo(this.basePath+"bill-pay/multipleBillerInformation.html");
	},

	__goToR2Home : "this method is used to redirect to R2 home page",
	goToR2Home : function(){
		this.goTo("http://www.westernunion.com/Home");
	},

	//As part of mobile international page added
	__goToSendMoneySummaryPageIntl : "this method is used to redirect to send money summary page mdot international version",
	goToSendMoneySummaryPageIntl : function() {
		this.goTo(this.pathDot+this.bashPathMobile+"send-money/summary.html", "sendmoney");
	},
	
	__isInMobilePage : "Used to detect currently is displaying mobile page.", 
	isInMobilePage : function() {
		var mobilePage = this.bashPathMobile;
		return this.isInCurrentPage(mobilePage);
	},
	
	// Reviewer : Reza Pahlevi
	// Used to detect the current page that is being displayed for mobile.
	__isInThisMobilePage : "Used to detect the current page that is being displayed for mobile.",
	isInThisMobilePage : function(page){
		var mobilePage = this.bashPathMobile + page;
		return this.isInCurrentPage(mobilePage);
	},

	// Used to detect the current page that is being displayed for web.
	__isInThisWebPage : "Used to detect the current page that is being displayed for web.",
	isInThisWebPage : function(page){
		var webPage = this.basePath + page;
		return this.isInCurrentPage(webPage);
	},

	// private function
	__isInCurrentPage : "this method is used to check current page ",
	isInCurrentPage : function(page){
		var currentPath = this.getCurrentPath();
		return (currentPath.indexOf(page) != -1);
	},
   
	__getPostHandlerPath : "Get post handler path.",
	getPostHandlerPath : function(page){
		
		return this.basePath+"docupload-handler.html";
	},
	
	__getSendMoneyKycUploadDocument : "Get url of send money kyc upload document page.",
    getSendMoneyKycUploadDocument : function(){
		return this.basePath+"send-money/kycUploadDocuments.html";
	},
	
	__getSendMoneyReviewPage : "this method is used to redirect to review of send money page mdot version",
	getSendMoneyReviewPage : function(){
		return this.basePath+"send-money/review.html";
	},
	__getBasePath : "Return basePath of current page.",
	getBasePath : function(){
		return this.basePath;
	},
	
	
	__goToCustomUrlResolver : "this method is used to resolve the url",
	goToCustomUrlResolver : function(page){
        if(page && page.indexOf('.html') > -1) {
        	window.location.href = this.basePath+page;
        } else {
			window.location.href = page;
        }
	 },
	
	__goToCustomUrlTabResolver : "this method is used to resolve the url",
	goToCustomUrlTabResolver : function(page){
		window.open(location.protocol+'//'+location.hostname+this.basePath+page,'_blank');
	 },

	

	__getSenderCountryFromURL : "Return which country current page is for according to URL.",
	getSenderCountryFromURL : function(){
		var currentPath = this.getCurrentPath();
		var pathArray = currentPath.split("/");
		var countryPart;
		
        if(currentPath.indexOf('content') !== -1){
        	countryPart =  pathArray[this.countryPath];
        }else{
        	countryPart =  pathArray[1];
        }
		
		if(countryPart.indexOf("_") != -1){
			var temp = countryPart.split("_");
			countryPart = temp[1];
		}
		
		var senderCountryIsoCode = countryPart? countryPart.toUpperCase() : null;
        //commented to avoid the blocker issue in QA22. Sender value was going null
		if(senderCountryIsoCode == 'INTERNATIONAL'){
			senderCountryIsoCode = 'GB';
		}
        if(senderCountryIsoCode == 'FRAUD-AWARENESS' || senderCountryIsoCode == undefined || senderCountryIsoCode == 'FRAUDAWARENESS'){
			senderCountryIsoCode = 'US';
		}
		return senderCountryIsoCode;
	},
	
	__getSenderLanguageFromURL : "Return which language current page is for according to URL.",
	getSenderLanguageFromURL : function(){
		var currentPath = this.getCurrentPath();
		var pathArray = currentPath.split("/");
		var countryPart;
		
        //if(currentPath.indexOf('content') !== -1){
        	countryPart =  pathArray[this.langPath];
        //}else{
        	//countryPart =  pathArray[2];
       // }

        if(countryPart == 'index' || countryPart == 'index.html' || countryPart == undefined){
        	countryPart =  'EN';
        }
		
		var senderCountryIsoCode = countryPart? countryPart.toLowerCase() : null;
		return senderCountryIsoCode;
	},

    __goToContactUsSuccessPage : "this method is used to redirect to contact-us success page",
    goToContactUsSuccessPage : function(){
                                this.goTo(this.basePath+"contactus-success.html")
    },

    __isEuropeanCountry : "This method used to check EU country",
	    isEuropeanCountry : function (){
       if(this.EUCountries.indexOf(this.getSenderCountryFromURL()) != -1){
              return true;
       }else{
              return false;
       }      
    },

	__isNewFMACountry : "Returns if country is in one of new FMA countries where transactions can be sent while verification is in progress.",
    isNewFMACountry: function(){
        var newFMACountries = ['GB', 'FR', 'DE', 'IT', 'AT'];
        return $.inArray(Clazz.WUNavigator.getSenderCountryFromURL(), newFMACountries)>-1;
    },

    isCurrentCountry : function(combinedAddress){		
		var senderData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[this.getSenderCountryFromURL()]? Clazz.langConfig.senderInfoMap[this.getSenderCountryFromURL()] : null;        
		return (senderData.countryName.toLowerCase() === combinedAddress.toLowerCase());		
    },
	
	__isRUCountry : "This method used to check if country is Russia",
	isRUCountry : function (){
       var currentcountry = Clazz.WUNavigator.getSenderCountryFromURL();
       if(currentcountry == 'RU'){
              return true;
       }else{
              return false;
       }      
    },
	
	__isNotRUCountry : "This method used to check if country is Russia",
	isNotRUCountry : function (){
       var currentcountry = Clazz.WUNavigator.getSenderCountryFromURL();
       if(currentcountry == 'RU'){
              return false;
       }else{
              return true;
       }      
    }, 	

   __goToCrossCountryRedirection : "No return value. This function handles the cross country redirection",
	goToCrossCountryRedirection:function(countryCode,languageCode)
	{
	  var country=countryCode.toLowerCase();
	  var language="en";
	  if(languageCode!==undefined && languageCode!== null && languageCode!=="")
	  {
       language=languageCode.toLowerCase();
	  }
      this.goTo(location.protocol+"//" + location.host +"/"+ country+"/"+language);
	},
	
	__goToPhoneVerificationPage : "this method is used to redirect to track transfer page web version",
	goToPhoneVerificationPage : function(){
        this.goTo(this.basePath+"phoneVerification.html");
	}
});

if(!Clazz.WUNavigator){
	Clazz.WUNavigator = new Clazz.com.wu.util.WUNavigator();
}

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUSpinner = Clazz.extend(Clazz.Base,{
	__spinner : "Instance of class Spinner.",
	spinner:null,
	__spinnerContainer : "The selector of spinner container.",
	spinnerContainer : null,
	__spinnerNumber : "A count to control if spinner should be displayed or hide.",
	spinnerNumber : 0,

	initialize : function(config){
		//default parameter for spinner
		var opts = {
				lines: 10,            // The number of lines to draw
				length: 26,            // The length of each line
				width: 10,             // The line thickness
				radius: 22,           // The radius of the inner circle
				rotate: 0,            // Rotation offset
				corners: 1,           // Roundness (0..1)
				color: '#000',        // #rgb or #rrggbb
				direction: 1,         // 1: clockwise, -1: counterclockwise
				speed: 1,             // Rounds per second
				trail: 60,           // Afterglow percentage
				opacity: 1/4,         // Opacity of the lines
				shadow: false,
				fps: 20,              // Frames per second when using setTimeout()
				zIndex: 2e9,          // Use a high z-index by default
				className: 'spinner', // CSS class to assign to the element
				top: '300px',          // center vertically
				left: '600px',         // center horizontally
				position: 'absolute'  // element position
		}

		//opts can be created when the spinner is instantiated. otherwise, get the default one.
		if(config && config.opts){
			opts = this.compareOpts(opts, config.opts);
		}
		this.spinner = new Spinner(opts);
		this.spinnerContainer = $("<div class='spinner-container'></div>");
	},
	
	__isHideSpinner : "Check if spinner should be hide.",
	isHideSpinner : function(){
        var isHideSpinner = this.spinnerNumber == 0;
		return isHideSpinner;
	},

	__hide : "Decrease spinnerNumber. If spinnerNumber becomes 0, hide spinner.",
	hide : function(){
		if(this.spinnerNumber > 0){
			this.spinnerNumber--;
		}
		var isAppNative = window.sessionStorage.getItem('isAppNative');
		if (isAppNative && cordova != null) {
			document.addEventListener("deviceready", function(){
				cordova.exec(
						function(response) {},
						function(error) {},
						"SpinnerPlugin", 
						"hideSpinner", 
						[]
				);
	    	}, false);
		}
		else{
			if(this.isHideSpinner()){
				this.spinner.stop();
				$(".spinner-container").css({'visibility':'hidden'});
				$(".spinner-container").remove();
				
				if(!Clazz.WUNavigator.isInMobilePage()){
					$("input, select").prop('disabled', false);
				}
			}
		}
	},

	__show : "Increase spinnerNumber, show spinner.",
	show : function(container){
		this.spinnerNumber++;
		var self = this;
		var isAppNative = window.sessionStorage.getItem('isAppNative');
		if (isAppNative && cordova != null) {
			document.addEventListener("deviceready", function(){
				cordova.exec(
						function(response) {}, 
						function(error) {}, 
						"SpinnerPlugin", 
						"showSpinner", 
						[]
				);
	    	}, false);
		}
		else{
			if(!container){
				container = "html";  // MYWU-815 - Modified from body to html
			}
			//$("input").blur();  RINTL-8035
			
			this.spinnerContainer.css({'visibility':'visible'});
			$(container).append(this.spinnerContainer);
			this.spinnerContainer.append(this.spin().el);
			
			if(!Clazz.WUNavigator.isInMobilePage()){
				$("input, select").prop('disabled', true);
			}
		}
	},

	__spin : "Spin spinner.",
	spin : function(){
		//we can do manually positioning by returning this element
		return this.spinner.spin();
	},

	__compareOpts : "this method is used to compare default Opts object and new Opts object",
	compareOpts : function(defaultOpts, newOpts){
		//copy each property from the new opts, leave the old one there.
		for(var property in newOpts){
			defaultOpts[property] = newOpts[property];
		}
		return defaultOpts;
	}

});

if(!Clazz.wuSpinner){
	
	var opts = {
		speed : 2
	};
	
	var isMobile = Clazz.WUNavigator.isInMobilePage();
	if(isMobile){
		opts = {
			speed : 2,
			length : 10,
			width : 3,
			radius : 10,
			color : "#FFF"
		};
	}
	
	Clazz.wuSpinner = new Clazz.com.wu.widget.module.WUSpinner({
		opts : opts
	});
}

Clazz.createPackage("com.wu.util");

Clazz.com.wu.util.WULocalStorage = Clazz.extend(Clazz.Base,{
	
	__storage : "LocalStorage of brwoser.",
	storage : window.localStorage,
	__sessionLocal : "SessionStorage of brwoser.",
	sessionLocal:window.sessionStorage,
	
	__keySet : "The key set used for this website.",
	keySet : [
	          "AddPromocode",
	          "SessionId",
	          "FirstName",
	          "LastName",
	          'PaternalName',
	          'MaternalName',
	          'NameType',
	          "AccountNumber",
	          "Email",
	          "Password",
	          "Response",
              "CaptchAaudio",
              "InterstitialErrorCodes",
	          "GatewayCustomer",
	          "CaptchaImage",
	          "CaptchaAudio",
	          "SendMoneyMiniData",
	          "ZipCode",
	          "SelectCountry",
	          "Amount",
	          "ImgCaptcha",
	          "SummaryObjects",
	          "DestinationCountryList",
	          "LanguageList",
	          "CountryOfBirthList",
	          "ValidationResponse",
	          "USStateList",
	          "MXStateList",
	          "CAStateList",
        	  "CHStateList",
       		  "INStateList",
     		  "ATStateList",
              "BEStateList",
          	  "SKStateList",
          	  "EGStateList",
         	  "ADStateList",
           	  "VNStateList",
			  "AEStateList",
              "SIStateList",
              "LUStateList",
              "BDStateList",
              "LTStateList",
              "LVStateList",
              "JPStateList",
              "IDStateList",
              "IEStateList",
              "GRStateList",
              "HUStateList",
              "FIStateList",
              "EEStateList",
              "GBStateList",
              "ROStateList",
              "PKStateList",
              "PLStateList",
              "AUStateList",
              "DEStateList",
              "FRStateList",
              "BRStateList",
              "ESStateList",
              "NLStateList",
              "MYStateList",
              "ITStateList",
              "PHStateList",
              "CNStateList",
              "THStateList",
              "SEStateList",
              "BHStateList",
              "BGStateList",
              "PTStateList",
              "CLStateList",
              "CYStateList",
              "CZStateList",
              "DKStateList",
	          "SecurityQuestionList",
	          "SendMoneyObjects",
	          "SendMoneyMobileObjects",
	          "LoginObject",
	          "DestinationCountryListMobile",
	          "SucessChangePassword",
	          "BillerInformation",
	          "FeeInqueryOptionData",
	          "DataInputField",
	          "CreditCardInfo",
	          "PaymentInfo",
	          "CountryPhoneCode",
	          "DefaultLandingPage",
	          "BankAccountInfo",
	          "BankAccount",
	          "KycObject",
	          "ReceiverInformation",
	          "PaymentMethod",
	          "AcceessAddCreditCardPageFrom",
	          "SessionExpiredPath",
	          "SendMoneyInmate",
	          "AcceessAddBankPageFrom",
	          "ValidationRequest",
	          "DeliveryMethodCode",
	          "AboutWUobj",
	          "MtcObject",
	          "HardLock",
	          "SoftLock",
	          "GoldCardNumber",
	          "GenIIIVerificationStatus", 
	          "ErrorResponse",
	          "AlternatePaymentTypes",
	          "IsFromPaybillsResult",
	          "IdentityData",
	          "LastPage",
              "AccountNumberText",
              "ReEnterAccountNumberText",
              "ClabeText",
              "ReEnterClabeText",			  
        	  "LegalDisclaimerObject",
        	  "HasPendingTransaction",
        	  "VerificationData",
        	  "IsSWB",
        	  "IsSWBEstimatePrice",
        	  "IsChangeEmail",
        	  "TrxContainer",
        	  "BankName",
        	  "IsWubs",
        	  "FreeInquiryRequest",
        	  "IsFromReview",
        	  "IsFromWubsFlow", //As part of WUBS March catch up
        	  "TrackTransactionData",
			  "SendMoneyValidationRequest", //IP
        	  "SendMoneyAddBankRequest", //IP
        	  "SendMoneyIsPaymentCheck", //IP
        	  "SendMoneyIsPaymentNewcard",
        	  "IntertitialPageSection",//IP
        	  "SenderInfoValidation",
        	  "IsMobileSessionExpired",
        	  "Limits",
        	  "IsEditPurpose",
        	  "IsEditCC",
        	  "DeliveryOptionMobile",
        	  "IsFromEstimatePriceAndSwb",
			  "CustomerByHashCode",
			  "customerUMNstorage",
		  	  "IsFromTrackTransferSendAgain",
        	  "WUBSEstimateAmount",
        	  "WUBSEstimateToCurrency",
        	  "WUBSEstimateFromCurrency",
        	  "SessionExpiredAlertData",
        	  "EmailVerificationData",
        	  "ClientIp",
        	  "IsWUbsReviewTriggered",
        	  "InterstitialResponse",
        	  "CountryIsoCode",
        	  "CustomerMessage",
        	  "AccessPayAtAgentPage",
        	  "IsSuccessChangedPasswordMobile",
        	  "SendMoneyLocalStorage",
        	  "OptionStatus",
        	  "IsFromSendMoneyOption",
        	  "IsFromPayBillMobile",
        	  "IsFromInmateMobile",
        	  "SaveBiller",
        	  "TrackTransfer",
        	  "MultipleTransfer",
        	  "FieldResponse",
        	  "IsVerificationEmail",
			  "IsEditCC",
			  "GetPrevPage",
              "IsEmailPage",
			  "defaultLoyaltyPoints",
			  "IsWUbsReviewTriggered",
			  "RewardHistoryList",
			  "RewardCurrentTab",
			  "NPMlookupStorage",
			  "IsMYWUBlockLink",
              "ExpressNav",
        	  "AccNumBiller",
        	  "IsFromMobileReview",
		      "HashCode",
			  "ExpressMiddleName",
			  "login_status",
			  "find_tab", 
        	  "find_index",  
        	  "src",
              "ISTCReceiptPageLink",
              "MobileLastPage",
			  "DoLogout",
			  "GetLoyaltyCardsResponse",
			  "IsPaymentRetry",
			  "TrackTransferRequest",
			  "IsFromOverview",
			  "IsFromInterstitial",
			  "SendAgainObject",
        	  "QuickResendOverlaySummaryObject",
        	  "QuickResendFeeInquiryObject",
        	  "TransactionOrigin",
			  "OldSummaryObjects",
			  "FromTransactionPage",
			  "FirstTransaction",
			  "TimeFeedback",
			  "TabProfileName",
			  "InmateReceiverInfo",
			  "IsSendMoneyValidationError",
			  "IsSendMoneyValidationFailedAmount",
			  "Compliance",
			  "SecurityQuestionListIntl",
			  "SenderOccupation",			  
			  "IdentityError",
			  "ErrorResponseIntl",
			  "IsFromEmailVerification",
			  "MobileIntlAccountInformation",
			  "IsBackButton",
        	"IdVerificationCount",
        	"LegalNoticeCount",
        	"PWMP",
        	"MerchantId",
            "PriceEstimator",
            "ExceedLimit",
			"IsNewUser",
			"Profile_tab_fma",
			"TransFee",
			"OccasionalFlag",
			"ReviewOccasionalFlag",
			"EmailVerificationPage",
        	"FromRegistrationPage",
			"GetRecieverResponse",
			"OccasionalFlag",
			"DataCenter",
			"PageResource",
			"popupamount",
			"selectOption",
			"SenderLanguageCode",
        	"loweramount",
        	"TransferData",
        	"DutResponse",
        	"AddReceiverFormElementsInDashboard",
            "EditReceiverFormElementsInDashboard",
            "EditProfileFormElements",
            "RegisterFormElement",
            'SendMoneyReceiverFormElements',
            "OnlineVerObject",
            "CustomerVerificationStatus",
            'PSEndpoint',
            'KYCPSEndpoint',
            "IdealSortCodes",
            "VerifiedContact",
        	"ReturnUrlPhoneVerification",
			"UpdateProfileInfo",
			"PhoneVerificationData",
        	"IsCaptchaValidated",
        	"TempContactNumber",
			"FlashMessage",
			"Forgotloginflow",
            "LastPageResetPassword",
        	"ForgotResetflow"
	          ],   

	initialize : function(config){
		for(var i=0;i<this.keySet.length;i++){
			var key = this.keySet[i];
			this.addSetFunction(key);
			this.addGetFunction(key);
			this.addClearFunction(key);
		};
	},
	
	__addSetFunction : "Create set function for all keys in keySet.",
	addSetFunction : function(key){
		this["set"+key] = function(value){
			this.sessionLocal.setItem(key, value);
		}
	},

	__addGetFunction : "Create get function for all keys in keySet.",
	addGetFunction : function(key){
		this["get"+key] = function(){
			var value = this.sessionLocal.getItem(key);
			return value;
		}
	},

	__addClearFunction : "Create clear function for all keys in keySet.",
	addClearFunction : function(key){
		this["clear"+key] = function(){
			this.sessionLocal.removeItem(key);
		}
	},
	
	__clearAll : "Clear everything this website saved to localStorage or sessionStorage.",
	clearAll : function(){
		this.sessionLocal.clear();
		this.storage.clear();
	}
});


if(!Clazz.WULocalStorage){
	Clazz.WULocalStorage = new Clazz.com.wu.util.WULocalStorage();
}

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUHeaderWidgetContainer = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#header-container",

	templateUrl : null,
	__resourcePath : "Resource path.",
	resourcePath : null,

	__wuHeader : "An instance of WUHeader.",
	wuHeader : null,
	__wuMaskMain : "An instance of WUMaskMain.",
	wuMaskMain: null,
	__cookieManagementListener : "An instance of CookieManagementListener.",
	cookieManagementListener : null,
	__propertiesData : "Properties data.",
	propertiesData: null,

	__maskMainRender : "Selector of wuMaskMain .",
	maskMainRender : "#frame-maskMain-cookies",
	

	initialize: function(config){
		if(config){
			this.resourcePath = (config.resourcePath)?config.resourcePath : null;
			this.propertiesData = (config.propertiesDataHeader)?config.propertiesDataHeader : null;
		}
		
		this.wuHeader = this.getHeaderWidget();
		this.cookieManagementListener = new Clazz.com.listener.CookieManagementListener({
			resourcePath : this.resourcePath
		});
	},

	__getHeaderWidget : "Get header widget.",
	getHeaderWidget : function(){
		var headerWidget = new Clazz.com.wu.widget.module.WUHeaderNonTxBase({
			propertiesData : this.propertiesData
		});
		return headerWidget;
	},

	/* changes for RINTL 15509

	postRender: function(){
		this.wuHeader.render();
		//render management bar
		var enableCookie = this.propertiesData.enable_cookie;
		if(enableCookie){
			this.cookieManagementListener.managementBarRender();
		}
	}
});*/


    postRender: function(){
		this.wuHeader.render();
		//PBL-2349 Start
        var getLocationHref =  window.location.href;
        var getarray = getLocationHref.split('/');
        if(getarray.indexOf("agent-locator.html") > -1 || getarray.indexOf("znajdz-placowke.html") > -1){
			$('.WuWapperWhite').css("width","auto");
        }
        //PBL-2349 End
		//PBL-1942 Start
		if(localStorage.getItem('sessionid')){
        	$('#cssd').val(localStorage.getItem('sessionid'));
        }
		//PBL-1942 End
		//render management bar

        var countryIsoCodeLocal = Clazz.WUNavigator.getSenderCountryFromURL();
       
		var enableCookie = this.propertiesData.enable_cookie;
       if(countryIsoCodeLocal !== "US")
                   {
					 //if(enableCookie){
								this.cookieManagementListener.managementBarRender();

						//	}
                   }



	}
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUHeaderNonTxIntlContainer = Clazz.extend(Clazz.com.wu.widget.module.WUHeaderWidgetContainer, {

	__getHeaderWidget : "Get an instance of WUHeaderNonTxIntl",
	getHeaderWidget : function(){
		var headerWidget = new Clazz.com.wu.widget.module.WUHeaderNonTxIntl({
			propertiesData : this.propertiesData
		});
		return headerWidget;
	}
});

Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.constants.URL_LEARN_MORE_SENDMONEY_IN_PERSON_INTL = Clazz.WUNavigator.basePath + "send-money-online.html";
Clazz.com.wu.constants.URL_LEARN_MORE_RECEIVEMONEY_IN_PERSON_INTL = Clazz.WUNavigator.basePath + "receive-money.html";
Clazz.com.wu.constants.URL_GO_TO_FAQS_INTL = Clazz.WUNavigator.basePath + "customer-support-topics.html";
Clazz.com.wu.constants.URL_GO_TO_CONTACT_US_INTL = Clazz.WUNavigator.basePath + "contact-us.html";
Clazz.com.wu.constants.URL_GO_TO_GOLD_CARD_AU_INTL = "http://www.westernunion.com.au/au/gold-card/gold-card-program.page?";
Clazz.com.wu.constants.URL_TAB_GO_TO_GOLD_CARD ={};
Clazz.com.wu.constants.URL_TAB_GO_TO_GOLD_CARD.DE = "http://www.westernuniongold.com/grr/de/";
Clazz.com.wu.constants.URL_TAB_GO_TO_GOLD_CARD.FR = "http://www.westernuniongold.com/frz/fr/";
Clazz.com.wu.constants.URL_TAB_GO_TO_SENDMONEY_INTL = Clazz.WUNavigator.basePath + "send-money/start.html";
Clazz.com.wu.constants.URL_TAB_GO_TO_RECEIVEMONEY_INTL = Clazz.WUNavigator.basePath + "receive-money.html";
Clazz.com.wu.constants.URL_TAB_GO_TO_CUSTOMERCARE_INTL = Clazz.WUNavigator.basePath + "customer-support-topics.html";
Clazz.com.wu.constants.URL_TAB_GO_TO_PREPAID_INTL = "https://www.wuprepaid.co.uk/wuprepaid/public/login.do";
Clazz.com.wu.constants.URL_TAB_GO_TO_MYWU_ABOUT = Clazz.WUNavigator.basePath + "mywu-about.html";

//As part of Medallia requirement script including into pages
Clazz.com.wu.constants.URL_MEDALIA = "https://amch.questionmarket.com/adsc/d871029/5/884239/randm.js?";


Clazz.com.wu.constants.URL_SEND_MONEY_TO_INMATE=Clazz.WUNavigator.basePath+"send-inmate/start.html";
Clazz.com.wu.constants.URL_SEND_MONEY_ONLINE_LEARN_MORE=Clazz.WUNavigator.basePath+"send-money-online.html";
Clazz.com.wu.constants.URL_SEND_MONEY_BY_PHONE_LEARN_MORE=Clazz.WUNavigator.basePath+"send-money-by-phone.html";
Clazz.com.wu.constants.URL_FIND_LOCATION = Clazz.WUNavigator.basePath + "agent-locator.html";
Clazz.com.wu.constants.URL_MEDALIA_PAGES = []; //Specify the pages those don't need medallia script loading
Clazz.com.wu.constants.PROFILE_PERSONAL_INFO_INTL = 3;
Clazz.com.wu.constants.PROFILE_PERSONAL_INFO_INTL_DE = 4;
Clazz.com.wu.constants.DE_COUNTRY_ISO_CODE = "DE";
Clazz.com.wu.constants.US_COUNTRY_ISO_CODE = "US";
Clazz.com.wu.constants.URL_RECEIVE_MONEY_IN_PERSON_LEARN_MORE=Clazz.WUNavigator.basePath+"receive-money.html";
Clazz.com.wu.constants.URL_RECEIVE_MONEY_ON_PREPAID_CARD_LEARN_MORE=Clazz.WUNavigator.basePath+"receive-money-prepaid.html";
Clazz.com.wu.constants.URL_PAY_BILLS_ONLINE_LEARN_MORE=Clazz.WUNavigator.basePath+"pay-bills-online.html";
Clazz.com.wu.constants.URL_PAY_BILLS_IN_PERSON_LEARN_MORE=Clazz.WUNavigator.basePath+"pay-bills-in-person.html";
Clazz.com.wu.constants.URL_PAY_BILLS_BY_PHONE_LEARN_MORE=Clazz.WUNavigator.basePath+"pay-bills-by-phone.html";

/****************16515***************/

Clazz.com.wu.constants.URL_PREPAID_CARD_GETACARD="https://www.wunetspendprepaid.com/prepaid-debit-card/applyNow.m?AID=w_corp&SITEID=home_tab";

/***************************/

Clazz.com.wu.widget.module.WUHeaderNonTxBase = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#header",

	disableMegaMenu : false,
	isHome : false,
	__headerLogo : "Selector",
	headerLogo : ".wu-header-logo",
	__headerUserName : "Selector",
	headerUserName : "#header-name",
	__loginMenuButton : "Selector",
	loginMenuButton : "#wu-header-login-menu-button",
	__profileMenuDropDown : "Selector",
	profileMenuDropDown : "#wu-header-profile-menu-dropdown",
	__headerLoginButton : "Selector",
	headerLoginButton : ".wu-header-login",
	__headerRegisterButton : "Selector",
	headerRegisterButton : ".wu-header-register",
	__headerProfileMenuDropDowArrow : "Selector",
	headerProfileMenuDropDowArrow : "#wu-header-profile-menu-dropdown-arrow",
	__goToOverviewButton : "Selector",
	goToOverviewButton : "#wu_account_overview",
	__goToProfileSettingsButton : "Selector",
	goToProfileSettingsButton : "#wu_profile_settings",
	__headerSignOutButton : "Selector",
	headerSignOutButton : "#wu_sign_out",
	__countryDropDown : "Selector",
	countryDropDown : "#wu_country_header",
	__languageDropDown : "Selector",
	languageDropDown : "#wu_language_header",
	__countryDropDownArrow : "Selector",
	countryDropDownArrow : "#wu_country_header_arrow",
	__languageDropDownArrow : "Selector",
	languageDropDownArrow : "#wu_language_header_arrow",
	__countryDropDownItemList : "Selector",
	countryDropDownItemList : "#wu_country_list_header li",
	__languageDropDownItemList : "Selector",
	languageDropDownItemList : "#wu_language_list_header li",
	__sendMoneyTab : "Selector",
	sendMoneyTab : ".wu-header-send",
	__sendMoneyTabLink : "Selector",
	sendMoneyTabLink : ".tab-send-money-link",
	__receiveMoneyTab : "Selector",
	receiveMoneyTab : ".wu-header-receive",
	__goldTab : "Selector",
	goldTab : ".wu-header-gold",
	__custSupportTab : "Selector",
	custSupportTab : ".wu-header-cust-support",
	__prePaidCardTab : "Selector",
	prePaidCardTab : ".wu-header-pre", 
	__sendMoneyTabMenu : "Selector",
	sendMoneyTabMenu : "#tab-send-money-id-menu",
	__receiveMoneyTabMenu : "Selector",
	receiveMoneyTabMenu : "#tab-receive-money-id-menu",
	__goldCardTabMenu : "Selector",
	goldCardTabMenu : "#tab-gold-card-id-menu",
	__custSupportTabMenu : "Selector",
	custSupportTabMenu : "#tab-cust-support-id-menu",
	__prePaidCardTabMenu : "Selector",
	__payTab : "Selector",
	payTab : '.wu-header-pay',
	__payTabMenu : "Selector",
	payTabMenu:"#tab-pay-bills-id-menu", 
	prePaidCardTabMenu : "#tab-prepaid-card-id-menu",
	__learnMoreSendMoneyButton : "Selector",
	learnMoreSendMoneyButton : "#wu-header-learn-more-in-person-button",
	__learnMoreReceiveMoneyButton : "Selector",
	learnMoreReceiveMoneyButton : "#wu-header-learn-more-receive-money-in-person-button",
	__goToFAQsIntlButton : "Selector",
	goToFAQsIntlButton : "#wu-go-to-faqs-intl",
	__goToContacIntlButton : "Selector",
	goToContacIntlButton : "#wu-go-to-contact-us-intl",
	__goToGoldCardIntlButton : "Selector",
	goToGoldCardIntlButton : "#wu-go-to-gold-card-intl",
	__trackTransfer : "Selector",
	trackTransfer : '.wu-header-track-transfer',
	__headerPromoLink : "Selector",
	headerPromoLink: ".wu-promo-link",
	__headerConsumerLink : "Selector",
	headerConsumerLink : "#wu_header_consumer",
	__calculatePrice : "Selector",
	calculatePrice : ".wu-header-estimated-price a",
	__sendMoneyToInmate : "Selector",
	sendMoneyToInmate : ".sending-money-inmate",
	__getStartedSlideDownButton : "Selector",
	getStartedSlideDownButton : "#go-to-sendmoney",
	__sendMoneyOnlineLearnMore : "Selector",
	sendMoneyOnlineLearnMore : "#wu-send-money-online-learn-more",
	__sendMoneyInPersonLearnMore : "Selector",
	sendMoneyInPersonLearnMore : "#wu-send-money-in-person-learn-more",
	__sendMoneyByPhoneLearnMore : "Selector",
	sendMoneyByPhoneLearnMore : "#wu-send-money-by-phone-learn-more",
	__findLocationSlideDownButton : "Selector",
	findLocationSlideDownButton :"#go-to-find-location",
	databaseListener: null,
	enableLanguageDropdown : null,
	countryIsoCode : null,
	languageCode : null,
	propertiesData : null,
	data:{},
	
	initialize: function(config){
	var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
        if(currentcountry=='AU'){
		var gatewayCustomer=JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
            var idVerificationCount=Clazz.WULocalStorage.getIdVerificationCount();
        if((gatewayCustomer && gatewayCustomer.identityVerificationStatus === 'N') || (gatewayCustomer === null && idVerificationCount != null)){

                if(idVerificationCount != null && Number(idVerificationCount)<3 && !Clazz.WUNavigator.isInThisWebPage("verification.html")){
					Clazz.WULocalStorage.clearAccountNumber();
                    this.toggleHeaderMenuLogin(this.profileMenuDropDown, this.loginMenuButton);
					Clazz.WULocalStorage.clearGatewayCustomer();
                    Clazz.WULocalStorage.clearInterstitialResponse();
                    //Clazz.WULocalStorage.clearLoginPageErrors();
                     Clazz.WULocalStorage.clearResponse();

                    //localStorage.removeItem("LoginPageErrors");
                    Clazz.WULocalStorage.clearIdVerificationCount();
                    if(Clazz.WUNavigator.isInThisWebPage("profile.html")){
						Clazz.WUNavigator.goToHomePage();
                    }

                }else if(idVerificationCount != null && Number(idVerificationCount)>=3 && Clazz.WUNavigator.isInThisWebPage("send-money/start.html")){
					Clazz.WUNavigator.goToProfilePage();

                }

            }
        }

		if(config){
			this.propertiesData = config.propertiesData;
			this.data.propertiesData = this.propertiesData;
			this.disableMegaMenu = (this.propertiesData.disable_mega_menu) ? this.propertiesData.disable_mega_menu : false;
			this.enableLanguageDropdown = (this.propertiesData.enableLanguageDropdown  && this.propertiesData.enableLanguageDropdown === "true") ? true : false;
		}
		Clazz.com.wu.constants.URL_TAB_GO_TO_PREPAID_INTL = this.propertiesData && this.propertiesData.prepaid_link ? this.propertiesData.prepaid_link : "https://www.wuprepaid.com/wuprepaid/public/login.do";
		this.countryIsoCode = Clazz.WUNavigator.getSenderCountryFromURL();
		this.languageCode = Clazz.WUNavigator.getSenderLanguageFromURL();
		this.databaseListener = new Clazz.com.listener.GetDatabaseListener();
        	this.gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());

         // CLFE-3010 Canada specific Logo
        var differentLogoCountries = ['CA']; 
        this.data.isCountrySpecificLogo = (differentLogoCountries.indexOf(Clazz.WUNavigator.getSenderCountryFromURL()) !== -1) ? true : false;
        if(this.data.isCountrySpecificLogo) {
			this.data.logoForCountry = Clazz.WUNavigator.getSenderCountryFromURL();
            this.data.logoForLanguage = 'en'; //this.getLogoForLanguage();
        } 
		
	},

	__getLogoForLanguage : "This function returns foreign language, if specific language logo needs to be displayed.",
    getLogoForLanguage : function() {
		var language = Clazz.WUNavigator.getSenderLanguageFromURL();

        switch(language) {
            case 'fr' :
                language = 'fr';
                break;
            default :
                language = 'en'
                break;
        }
        return language;
    }, 
    // End CLFE-3010 Canada specific Logo

	preRender : function(whereToRender, renderFunction){
		this.data.isHome =false;
		var isNewUser = Clazz.WULocalStorage.getIsNewUser();
		var isOZ = Clazz.WUNavigator.getSenderCountryFromURL().toLowerCase();
		var isFromInterstitialPage=Clazz.WULocalStorage.getIsFromInterstitial();
		//Zad - Adding a blanket around below condition as this causes problems for other INTL countries.
		
        			
		if(isNewUser=="true"){
         Clazz.WULocalStorage.setIsNewUser(true);
        }
		
		var self = this;
		var countryList = null;
		var countryLanguage =  Clazz.WUNavigator.getSenderLanguageFromURL();
		var destinationCountryList = JSON.parse(Clazz.WULocalStorage.getDestinationCountryList());


	    if(this.gatewayCustomer 
	    	&& this.gatewayCustomer.name
	    	&& this.gatewayCustomer.name.firstName
	    	&& this.gatewayCustomer.name.lastName){
	       	Clazz.WULocalStorage.setFirstName(this.gatewayCustomer.name.firstName);
			Clazz.WULocalStorage.setLastName(this.gatewayCustomer.name.lastName);
	     } else if(this.gatewayCustomer 
	    	&& this.gatewayCustomer.name
	    	&& this.gatewayCustomer.name.givenName
	    	&& this.gatewayCustomer.name.maternalName) {
	    	// specific check if country is spain then use given name and maternal name
	       	Clazz.WULocalStorage.setFirstName(this.gatewayCustomer.name.givenName);
			Clazz.WULocalStorage.setLastName(this.gatewayCustomer.name.maternalName);
	    }
	    	if(Clazz.WUNavigator.isInThisWebPage("home.html"))
		{
				this.data.isHome = true;
		}

		if(destinationCountryList){
			destinationCountryList = (destinationCountryList[this.countryIsoCode] && destinationCountryList[this.countryIsoCode][countryLanguage]) ? destinationCountryList[this.countryIsoCode][countryLanguage]:destinationCountryList;
			countryList = this.getCountryList(destinationCountryList);
			languageList = this.getDataLanguageList(countryList,whereToRender,renderFunction);
		}else{
			this.setCountryFromDatabase(function(countryListResponse){
				var country = (countryListResponse[self.countryIsoCode]) ? countryListResponse[self.countryIsoCode][countryLanguage]:countryListResponse;
				countryList = self.getCountryList(country);
				languageList = self.getDataLanguageList(countryList,whereToRender,renderFunction);
			});
		}		       
	},

	getDataLanguageList : function(countryList,whereToRender,renderFunction){
        var self = this;
        var record = '{"record":[{"LANGUAGE_VALUE":"EN","LANGUAGE_NAME":"English"},{"LANGUAGE_VALUE":"SP","LANGUAGE_NAME":"Spanish"}]}';
        var languageheader  = this.propertiesData.language_value_language_name?this.propertiesData.language_value_language_name:"EN_English";
		var languageListArray1 = new Array();

        var lang_array = languageheader.split(",");

       for(var i = 0; i < lang_array.length; i++)
         {
			var languageObj1 = new Object();

          languageObj1["LANGUAGE_VALUE"] = lang_array[i].split("_")[0];
          languageObj1["LANGUAGE_NAME"] = lang_array[i].split("_")[1];
             languageListArray1.push(languageObj1);

         }

        var languageList = new Object();
        languageList["record"] = languageListArray1;

 		 if(languageList)
         {
		     languageList = this.getLanguageList(languageList);
			 this.registerHelper(countryList,languageList,whereToRender,renderFunction);

         }else{
              this.setLanguageFromDatabase(function(languageListResponse){
	    languageList = self.getLanguageList(languageListResponse);
        self.registerHelper(countryList,languageList,whereToRender,renderFunction);
   			});

         }
	},



	registerHelper : function(countryList,languageList,whereToRender,renderFunction){
		var self = this;
		this.data.countryList = countryList;
		this.data.languageList = languageList;
		renderFunction(this.data, whereToRender);

		Handlebars.registerHelper("activeCountry",function(country,options){
			if(self.countryIsoCode === country){
				return options.fn(this);
			}
		});

		Handlebars.registerHelper("activeLanguage",function(language,options){
			if(self.languageCode === language){
				return options.fn(this);
			}
		});
	},

	__getCountryList : "loop and get country from response",
	getCountryList : function(destinationCountryList){
		var countryList = new Array();
		for(i=0; i < destinationCountryList.record.length; i++){
			var countryObj = new Object();
			countryObj["name"] = destinationCountryList.record[i].COUNTRY_NAME;
			countryObj["value"] = destinationCountryList.record[i].COUNTRY_CODE;
			countryList.push(countryObj);
		}
		return countryList;
	},

	__getLanguageList : "loop and get language from response",
	getLanguageList : function(languageList){
		var languageListArray = new Array();
		for(i=0; i < languageList.record.length; i++){
			var languageObj = new Object();
			languageObj["name"] = languageList.record[i].LANGUAGE_NAME;
			languageObj["value"] = languageList.record[i].LANGUAGE_VALUE;
			languageListArray.push(languageObj);
		}
		return languageListArray;
	},

	__setCountryFromDatabase : "Set country from database.",
	setCountryFromDatabase : function(callbackFunction){
		var destination = JSON.parse(Clazz.WULocalStorage.getDestinationCountryList()); 
		if(!destination){
			this.databaseListener.onGetDestinationCountryList(this.getListDestinationCountryPostBodyRequest(),function(response){
				if(!response.error){
					destination = response.database.records;
					Clazz.WULocalStorage.setDestinationCountryList(JSON.stringify(destination));
					callbackFunction(destination);
				}
			});
		}else{
			callbackFunction(destination);
		}
	},

	__setLanguageFromDatabase : "Set language from database.",
	setLanguageFromDatabase : function(callbackFunction){
		var destination = JSON.parse(Clazz.WULocalStorage.getLanguageList()); 
		if(!destination){
			this.databaseListener.onGetLanguageList(this.getLanguageListPostBodyRequest(),function(response){
				if(!response.error){
					language = response.database.records;
					Clazz.WULocalStorage.setLanguageList(JSON.stringify(language));
					callbackFunction(language);
				}
			});
		}else{
			callbackFunction(destination);
		}
	},

	//get country list request body - START
	__getListDestinationCountryPostBodyRequest : "Get list destination country post body request.",
	getListDestinationCountryPostBodyRequest : function(){
		var postBodyObject = new Object();
		postBodyObject['security'] = this.getSecurity();
		postBodyObject["database"] = this.getDatabaseObj("DESTINATION_COUNTRY_LIST");
		postBodyObject['external_reference_no'] = "1";

		return postBodyObject;
	},

	//get language list request body - START
	__getLanguageListPostBodyRequest : "Get list destination country post body request.",
	getLanguageListPostBodyRequest : function(){
		var postBodyObject = new Object();
		postBodyObject['security'] = this.getSecurity();
		postBodyObject["database"] = this.getDatabaseObj("LANGUAGE_LIST");
		postBodyObject['external_reference_no'] = "1";

		return postBodyObject;
	},

	__getDatabaseObj : "Get database object.",
	getDatabaseObj : function(name) {
		var info = new Object();
		info["info"] = this.getInfoObj(name);
		return info;
	},

	__getInfoObj : "Get info object.",
	getInfoObj : function(name) {
		var obj = new Object();
		obj["name"] = name;
		obj["client_version"] = "0";
		return obj;
	},

	/** start drop down function */
	__listSelected : "Handler of listSelected event.",
	listSelected : function(currentList){
		var self = this;
		var dropDown = $(currentList).parent();
		var lastSelected = $(dropDown).find('.selected');
		var selectInput = $(dropDown).siblings('select');

		$(lastSelected).removeClass('selected');
		$(currentList).addClass('selected');
		if (!$(dropDown).hasClass('display-none')) {
			self.hideDropDownList(dropDown);
		}

		$(selectInput)[0].selectedIndex = currentList.index();
		$(selectInput).trigger('change');
	},

	__changeSelectedInput : "Handler of changeSelectedInput event.",
	changeSelectedInput : function(selectInput){
		var dropDown = $(selectInput).siblings('span:first');
		var selectedText = $(selectInput).find(':selected').text();
		$(dropDown).text(selectedText);
	},

	__showDropDownList : "Show drop down list.",
	showDropDownList : function(dropDown){
		var self = this;
		$(dropDown).removeClass('display-none');
		$(dropDown).slideDown('fast', function(){
			$(document).bind('mouseup', function(event){
				var dropDownId = ($(dropDown).attr("id"))? $(dropDown).attr("id") : '';
				var targetId = $(event.target).attr("id");
				if (dropDownId !== targetId) {
					self.hideDropDownList(dropDown);
				}
			});
		});
	},

	__hideDropDownList : "Hide drop down list.",
	hideDropDownList : function(dropDown){
		$(dropDown).slideUp('fast', function(){
			$(dropDown).addClass('display-none');
		});
		$(document).unbind('mouseup');
	},

	__toggleDropDownList : "Toggle show or hide drop down list.",
	toggleDropDownList : function(dropDownMask) {
		var self = this;
		var dropDown = $(dropDownMask).siblings('ul');
		var selectInput = $(dropDownMask).siblings('select');
		if(dropDown.hasClass('display-none')){
			this.showDropDownList(dropDown);
		}
		else{
			this.hideDropDownList(dropDown);
		}

		$(selectInput).change(function(){
			self.changeSelectedInput($(this))
		});
	},
	/** end drop down function */

	__goToProfileSetting : "Go to profile setting page.",
	goToProfileSetting : function(){
		if(this.countryIsoCode == Clazz.com.wu.constants.DE_COUNTRY_ISO_CODE || this.countryIsoCode == Clazz.com.wu.constants.US_COUNTRY_ISO_CODE){
			Clazz.WULocalStorage.setDefaultLandingPage(Clazz.com.wu.constants.PROFILE_PERSONAL_INFO_INTL_DE);
		}else{
			Clazz.WULocalStorage.setDefaultLandingPage(Clazz.com.wu.constants.PROFILE_PERSONAL_INFO_INTL);
		}
		Clazz.WUNavigator.goToProfilePage();
	},

	__doLogout : "Do logout.",
	doLogout : function(){
		var requestBody = this.getCustomerSignOffRequest();
		var logoutAPI = new Clazz.com.wu.api.LogoutAPI();
		logoutAPI.doLogout(requestBody, function(response){
			Clazz.WULocalStorage.clearAll();
			sessionHasCreated = false;
			Clazz.WUNavigator.goToHomePage();
		});
	},

	bindUI : function() {
		var self = this;
		//var url = window.location.href,
       //	b = url.lastIndexOf("/");
      // var pageName= url.substr(b + 1);
     //  var gatewayCustomer=JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
      // var isOZ =  url.indexOf("/au/") > -1;
       //var isOZ = Clazz.WUNavigator.getSenderLanguageFromURL() == 'AU';
       // if( pageName.indexOf("verification.html") == -1 && pageName.indexOf("interstitialPage.html") == -1 && pageName.indexOf("home.html") == -1 && pageName.indexOf("login.html") == -1 && pageName.indexOf("register.html") == -1){
		//if(isOZ && gatewayCustomer!=null && gatewayCustomer.identityVerificationStatus=='N'){
           // Clazz.WULocalStorage.setIdVerificationCount("4");
         //   Clazz.WULocalStorage.clearSessionId();
         //   Clazz.WUNavigator.goToSessionExpiredPage();
			//}
       // }
        //commented for RINTL-16290
        //else if(pageName.indexOf("home.html") > -1){
 			//Clazz.WULocalStorage.clearAccountNumber();
        //}
        var verified = Clazz.WULocalStorage.getVerifiedContact();
		var currentPath = window.location.pathname;
		var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
		if(currentcountry =='RU' && currentPath.indexOf('login.html') > -1 &&  verified == null)
		{
		Clazz.WUNavigator.goToPhoneVerificationPage();
        }
		
		$("a").click(function () {
			var addressValue = $(this).attr("href");
			if(addressValue && addressValue != 'javascript:;' && addressValue.indexOf('.html') >0 ){
				var pageStr = addressValue.toString();     
				if(pageStr.indexOf("http") === -1)
					event.preventDefault(); //Prevent the link from going anywhere
				var newUrl = pageStr.split("/");
				if (newUrl.length == 4 || newUrl.length == 7 && newUrl.indexOf('itunes.apple.com')==-1)//PBL-2367 Main/Docking  
					Clazz.WUNavigator.goToCustomUrlResolver(newUrl[newUrl.length - 1]);
				else if (newUrl.length == 5 || newUrl.length == 8)
					Clazz.WUNavigator.goToCustomUrlResolver(newUrl[newUrl.length - 2]+'/'+newUrl[newUrl.length - 1]);
				else     
					Clazz.WUNavigator.goToCustomUrlResolver(addressValue);
			}
   		});
		var receiveMoneyInPersonLearnMore=$('#wu-receive-money-in-person-learn-more');
		var receiveMoneyOnPrepaidCardLearnMore=$('#wu-receive-money-on-prepaid-card-learn-more');
		var payBillsOnlineLearnMore=$('#wu-pay-bills-online-learn-more');
		var payBillsInPersonLearnMore=$('#wu-pay-bills-in-person-learn-more');
		var payBillsByPhoneLearnMore=$('#wu-pay-bills-by-phone-learn-more');
         //RINTL-16025 
		var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
        //if(currentcountry=='MT' || currentcountry=='AU' || currentcountry == 'HU')
        if(currentcountry === 'US') { //To hide for all INTL countries.
            jQuery(".wu-header-send").mouseover(function(e){
                $("#tab-send-money-link").addClass("black-font");
                $('#tab-receive-money-id-menu').slideUp("fast");
                $('#tab-cust-support-id-menu').slideUp("fast");
                $("#tab-send-money-id-menu").slideDown("fast");
            });
            jQuery(".wu-header-send").mouseleave(function(e){
                $("#tab-send-money-id-menu").slideUp("fast");
                $('#tab-receive-money-id-menu').slideUp("fast");
                $('#tab-cust-support-id-menu').slideUp("fast");
                $("#tab-send-money-link").removeClass("black-font");
            });	
            jQuery(".wu-header-receive").mouseover(function(e){
                $("#tab-receive-money-link").addClass("black-font");
                $('#tab-send-money-id-menu').slideUp("fast");
                $('#tab-cust-support-id-menu').slideUp("fast");
                $('#tab-receive-money-id-menu').slideDown("fast");
            });	
            jQuery(".wu-header-receive").mouseleave(function(e){
                $("#tab-send-money-id-menu").slideUp("fast");
                $('#tab-receive-money-id-menu').slideUp("fast");
                $('#tab-cust-support-id-menu').slideUp("fast");
                $("#tab-receive-money-link").removeClass("black-font");
            });	
            jQuery(".wu-header-cust-support").mouseover(function(e){
                $("#tab-cust-support-link").addClass("black-font");
                $('#tab-receive-money-id-menu').slideUp("fast");
                $("#tab-send-money-id-menu").slideUp("fast");
                $("#tab-cust-support-id-menu").slideDown("fast");
            });	
            jQuery(".wu-header-cust-support").mouseleave(function(e){
                $("#tab-cust-support-id-menu").slideUp("fast");
                $('#tab-receive-money-id-menu').slideUp("fast");
                $("#tab-cust-support-id-menu").slideUp("fast");
                $("#tab-cust-support-link").removeClass("black-font");
            });	
            
            var sendmoneyTabMenu= $("#tab-send-money-id-menu");
            var sendMoneyTab = $('.wu-header-send');

            var receiveTabMenu = $('#tab-receive-money-id-menu');
            var receiveTab = $('.wu-header-receive');
    
            var customerTabMenu = $('#tab-cust-support-id-menu');
            var customerTab = $('.wu-header-cust-support');
    
            sendMoneyTab.hover(function(e){
                sendmoneyTabMenu.stop( true, true ).slideDown("slow");
            },function(){ sendmoneyTabMenu.stop( true, true ).slideUp("fast");});
    
            receiveTab.hover(function(e){
                receiveTabMenu.stop( true, true ).slideDown("slow");
            },function(){ receiveTabMenu.stop( true, true ).slideUp("fast");});
    
            customerTab.hover(function(e){
                customerTabMenu.stop( true, true ).slideDown("slow");
            },function(){ customerTabMenu.stop( true, true ).slideUp("fast");});
		}
		//RINTL-16025 END

     	//====================== END RINTL-15289 ======================


  		$(this.headerLogo).click(function(){
			var accountNbr = Clazz.WULocalStorage.getAccountNumber();
            var gatewayCustomer=JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
			if(accountNbr == null || accountNbr == undefined){
				Clazz.WULocalStorage.clearSessionId();
				Clazz.WULocalStorage.clearImgCaptcha();
     			Clazz.WULocalStorage.clearCaptchaImage();
				Clazz.WULocalStorage.clearResponse();
				Clazz.WULocalStorage.clearAmount();
				Clazz.WULocalStorage.clearZipCode();
				//
                Clazz.WULocalStorage.clearInterstitialResponse();
				Clazz.WULocalStorage.clearIsFromInterstitial();
                Clazz.WULocalStorage.clearGatewayCustomer();
                Clazz.WULocalStorage.clearCountryOfBirthList();
                Clazz.WULocalStorage.clearDestinationCountryListMobile();
			}
            var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
        if(currentcountry=='AU'){
            if(gatewayCustomer && gatewayCustomer.identityVerificationStatus === 'N'){
                var idVerificationCount=Clazz.WULocalStorage.getIdVerificationCount();
                if(idVerificationCount != null && Number(idVerificationCount)<3){
			Clazz.WULocalStorage.clearAccountNumber();
			self.toggleHeaderMenuLogin(this.profileMenuDropDown, this.loginMenuButton);
                    Clazz.WULocalStorage.clearGatewayCustomer();
                    Clazz.WULocalStorage.clearInterstitialResponse();
                    Clazz.WULocalStorage.clearIdVerificationCount();
                    Clazz.WULocalStorage.clearResponse();
                    Clazz.WULocalStorage.clearAll();
                    //localStorage.removeItem("LoginPageErrors");
                    //Clazz.WULocalStorage.clearLoginPageErrors();
                }else if(idVerificationCount != null && Number(idVerificationCount)>=3 && Clazz.WUNavigator.isInThisWebPage("send-money/start.html")){
					Clazz.WUNavigator.goToProfilePage();

                }

            }
        }
			Clazz.WUNavigator.goToHomePage();
		});

		$(this.headerRegisterButton).click(function(e){
		    //Added by HCl
		    Clazz.WULocalStorage.setIsNewUser(true);
            var currentcountry = Clazz.WUNavigator.getSenderCountryFromURL();
            if (currentcountry == 'RU') {	
                Clazz.WULocalStorage.setReturnUrlPhoneVerification('register');
                Clazz.WULocalStorage.setIsNewUser(true);
				Clazz.WUNavigator.goToPhoneVerificationPage();				
            } else {  
				Clazz.WUNavigator.goToLoginPage();
            }
		});

		$(this.headerLoginButton).click(function(e){
			Clazz.WULocalStorage.clearSessionId();
			var currentcountry = Clazz.WUNavigator.getSenderCountryFromURL();
            if (currentcountry == 'RU') {               
                Clazz.WULocalStorage.setReturnUrlPhoneVerification('login');
				Clazz.WUNavigator.goToPhoneVerificationPage();				
            } else {            			
				Clazz.WUNavigator.goToLoginPage();
            }
		});

		$(this.headerProfileMenuDropDowArrow).click(function(){
			self.toggleDropDownList(this);
		});

		$(this.goToOverviewButton).click(function() {
			if(window.history.pushState){
				window.history.pushState("overview-tab", null, ["profile.html"]);
                Clazz.WUNavigator.goToProfilePage();
            }else if(Clazz.WUNavigator.isInThisWebPage("profile.html")){

                $("#overview-tab").click();
            }else{
			Clazz.WUNavigator.goToProfilePage();
            }
		});

		$(this.goToProfileSettingsButton).click(function() {
			if(window.history.pushState){
				window.history.pushState("profile-tab#personal-information-tab", null, ["profile.html"]);
                 self.goToProfileSetting();
             }else if(Clazz.WUNavigator.isInThisWebPage("profile.html")){

                $("#profile-tab").click();
             }else{
			self.goToProfileSetting();
             }
		});

		$(this.headerSignOutButton).click(function() {
			self.doLogout();
		});

		$(this.learnMoreSendMoneyButton).click(function() {
			window.location.href = Clazz.com.wu.constants.URL_LEARN_MORE_SENDMONEY_IN_PERSON_INTL;
		});

		$(this.learnMoreReceiveMoneyButton).click(function() {
			window.location.href = Clazz.com.wu.constants.URL_LEARN_MORE_RECEIVEMONEY_IN_PERSON_INTL;
		});

		$("#wu-go-to-faqs-intl").click(function() {
			window.location.href = Clazz.com.wu.constants.URL_GO_TO_FAQS_INTL;
		});

		$(this.goToContacIntlButton).click(function() {
			window.location.href = Clazz.com.wu.constants.URL_GO_TO_CONTACT_US_INTL;
		});

		$(this.goToGoldCardIntlButton).click(function() {
			window.location.href = Clazz.com.wu.constants.URL_GO_TO_GOLD_CARD_AU_INTL;
		});
		
		$(this.getStartedSlideDownButton).click(function() {
			Clazz.WUNavigator.goToSendMoneyPage();
		});

		$(this.sendMoneyInPersonLearnMore).click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_SEND_MONEY_IN_PERSON_LEARN_MORE;
		});
		
		$(this.sendMoneyOnlineLearnMore).click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_SEND_MONEY_ONLINE_LEARN_MORE;
		});

		$(this.sendMoneyByPhoneLearnMore).click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_SEND_MONEY_BY_PHONE_LEARN_MORE;
		});
		
		receiveMoneyInPersonLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_RECEIVE_MONEY_IN_PERSON_LEARN_MORE;
		});
		receiveMoneyOnPrepaidCardLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_RECEIVE_MONEY_ON_PREPAID_CARD_LEARN_MORE;
		});
		payBillsOnlineLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PAY_BILLS_ONLINE_LEARN_MORE;
		});
		payBillsInPersonLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PAY_BILLS_IN_PERSON_LEARN_MORE;
		});
		payBillsByPhoneLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PAY_BILLS_BY_PHONE_LEARN_MORE;
		});
		
		$(this.findLocationSlideDownButton).click(function() {
			//findLocation.trigger('click');
			window.location.href = Clazz.com.wu.constants.URL_FIND_LOCATION;
		});

		$('#go-to-paybills').click(function(){
			Clazz.WUNavigator.goToPayBillsPage();
		});


/*****************16515**************/

		$('#go-to-prepaid-card').click(function(){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_GETACARD; 
		});


        /**************************************/


		$(this.countryDropDown).click(function(){
			self.toggleDropDownList(this);
		});

		$(this.languageDropDown).click(function(){
			self.toggleDropDownList(this);
		});

		$(this.countryDropDownArrow).click(function(){
			$(self.countryDropDown).trigger('click');
		});

		$(this.languageDropDownArrow).click(function(){
			$(self.languageDropDown).trigger('click');
		});
		 //RINTL-25250 start here
       $(window).keydown(function(e){ 
			if($("#wu_country_list_header").is(':visible') && e.which == 13)
            {
				$("#wu_country_list_header li").trigger('click');
            }
		});
        //RINTL-25250 end here

		$(self.countryDropDownItemList).click(function(){
			self.listSelected($(this));
			var value = $( "#wu_country_select_header option:selected" ).val();
			var pathContent = "/content/wucom/base/";
			var homePage = "home.html";
			var language = "/en/";
			var host = location.host;
			var hostName = null;
			
			Clazz.WULocalStorage.clearAll();
			Clazz.WUCookies.clearAll();

			//RINTL-7048
			/**
			 * this code for a while until review and refactor code
			 */
			 if(value!=="") {
				if(value == "GB"){
					//value = "uk";
					language = "/en/";
				}
				var lowervalue=value.toLowerCase();

                if(lowervalue == "us"){
				 host = "www.westernunion.com";
				 hostName = location.protocol + "//" + host + "/";
				 window.location.href = hostName + lowervalue + language;
				}else if(host == "www.westernunion.com"){
					hostName = location.protocol + "//" + host + "/";
					window.location.href = hostName + lowervalue + language;
				}
					//PBL-1762 start
				else if(lowervalue == "ad" || lowervalue =="sc"){
					hostName = location.protocol + "//" + host + "/";
					window.location.href = window.location.href;
				}
				//PBL-1762 end
				else{
					hostName = location.protocol + "//" + host + "/"; //+ pathContent;
					window.location.href = hostName + lowervalue + language;// + homePage;
				}
			}
		});

		$(this.languageDropDownItemList).click(function(){
			self.listSelected($(this));
			var value = $( "#wu_language_select_header option:selected" ).val();
			if(value ==="SP"){
				Clazz.WUNavigator.goToR2Home();
			}else if(value){
				Clazz.WUNavigator.goToLanguage(value);
			}
		});

		//	$(this.trackTransfer).click(function(event){
		//	event.preventDefault();
	//		Clazz.WUNavigator.goToTrackTransferPage();
	//	});

//		$(this.headerPromoLink).click(function() {
//			Clazz.WUNavigator.goToSendMoneyPage();
//		});

		$(this.headerConsumerLink).click(function(){
			Clazz.WUNavigator.goToHomePage();
		});

		/** start mega menu functionality*/
		if(this.disableMegaMenu){
			this.clickedMegaMenus();
		}else{
			this.hoveredMegaMenus();
		}

		$(this.sendMoneyTabLink).click(function(e){
			Clazz.WUNavigator.goToSendMoneyPage();
		});


		$(this.sendMoneyToInmate).click(function(e){
			Clazz.WUNavigator.goToSendMoneyInmatePage();
		});
		
		$('#wu-prepaid-card-learn-more').click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_LEARN_MORE;
		});
		$('#wu-prepaid-card-reload-learn-more').click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_RELOAD_LEARN_MORE;
		});
		$('#wu-prepaid-card-manage-learn-more').click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_MANAGE_LEARN_MORE;
		});


		/** end mega menu functionality*/

		/**
		 * RINTL-4866
		 */
//		$(this.calculatePrice).click(function(){
//			$(this).removeAttr("href");
//			Clazz.WUNavigator.goToSendMoneyPage();
//		});
	},

	__clickedMegaMenus : "Add handler for mega menu click event.",
	clickedMegaMenus : function(){
		var self = this;
		$("#tab-send-money-link").click(function(){
			window.location.href = Clazz.com.wu.constants.URL_TAB_GO_TO_SENDMONEY_INTL;
		});
		
		$("#tab-receive-money-link").click(function(){
			window.location.href = Clazz.com.wu.constants.URL_TAB_GO_TO_RECEIVEMONEY_INTL;
		});
		
		$("#tab-cust-support-link").click(function(){
			window.location.href = Clazz.com.wu.constants.URL_TAB_GO_TO_CUSTOMERCARE_INTL;
		});
		$("#tab-my-wu-link").click(function(){
				window.location.href = Clazz.com.wu.constants.URL_TAB_GO_TO_MYWU_ABOUT;
		});

		$(this.prePaidCardTab).click(function(){
			window.location.href = Clazz.com.wu.constants.URL_TAB_GO_TO_PREPAID_INTL;
		});
		
		$(this.goldTab).click(function(){
			window.location.href = Clazz.com.wu.constants.URL_TAB_GO_TO_GOLD_CARD[self.countryIsoCode];
		});
	},

	__hoveredMegaMenus : "Add handler for mega menu hover event.",
	hoveredMegaMenus : function(){
		var self = this;
		var timer = null;

		$(this.sendMoneyTab).hover(function(e){
			if(timer) {
				clearTimeout(timer);
				timer = null
			}
			timer = setTimeout(function() {
				$(self.sendMoneyTabMenu).stop( true, true ).slideDown("fast");
			}, 500);
		},function(){
			clearTimeout(timer);
			$(self.sendMoneyTabMenu).stop( true, true ).slideUp("fast");
		});
		
		$(this.receiveMoneyTab).hover(function(e){
			if(timer) {
				clearTimeout(timer);
				timer = null
			}
			timer = setTimeout(function() {
				$(self.receiveMoneyTabMenu).stop( true, true ).slideDown("fast");
			}, 500);
		},function(){
			clearTimeout(timer);
			$(self.receiveMoneyTabMenu).stop( true, true ).slideUp("fast");
		});
		
		$(this.custSupportTab).hover(function(e){
			if(timer) {
				clearTimeout(timer);
				timer = null
			}
			timer = setTimeout(function() {
				$(self.custSupportTabMenu).stop( true, true ).slideDown("fast");
			}, 500);
		},function(){
			clearTimeout(timer);
			$(self.custSupportTabMenu).stop( true, true ).slideUp("fast");
		});
		
		$(this.prePaidCardTab).hover(function(e){
			if(timer) {
				clearTimeout(timer);
				timer = null
			}
			timer = setTimeout(function() {
				$(self.prePaidCardTabMenu).stop( true, true ).slideDown("fast");
			}, 500);
		},function(){
			clearTimeout(timer);
			$(self.prePaidCardTabMenu).stop( true, true ).slideUp("fast");
		});
		
		$(this.goldTab).hover(function(e){
			if(timer) {
				clearTimeout(timer);
				timer = null
			}
			timer = setTimeout(function() {
				$(self.goldCardTabMenu).stop( true, true ).slideDown("fast");
			}, 500);
		},function(){
			clearTimeout(timer);
			$(self.goldCardTabMenu).stop( true, true ).slideUp("fast");
		});
		
		$(this.payTab).hover(function(e){
			timer = setTimeout(function() {
				$(self.payTabMenu).stop( true, true ).slideDown("fast");
			}, 500);
		},function(){
			clearTimeout(timer);
			$(self.payTabMenu).stop( true, true ).slideUp("fast");
		});

        $('#wu-prepaid-card-learn-more').click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_LEARN_MORE;
		});
        $('#wu-prepaid-card-reload-learn-more').click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_RELOAD_LEARN_MORE;
		});
		$('#wu-prepaid-card-manage-learn-more').click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_MANAGE_LEARN_MORE;
		});
	},

	__setUserName : "Set user name.",
	setUserName : function(){
		var firstName = Clazz.WULocalStorage.getFirstName()? Clazz.WULocalStorage.getFirstName().toLowerCase() : null;
		var lastName = Clazz.WULocalStorage.getLastName()? Clazz.WULocalStorage.getLastName().toLowerCase() : null;
		if(Clazz.WULocalStorage.getNameType() && Clazz.WULocalStorage.getNameType() === "M" && Clazz.WULocalStorage.getPaternalName()){
        	lastName = Clazz.WULocalStorage.getPaternalName().toLowerCase();
        }
		var fullName = firstName+" "+lastName;
		$(this.headerUserName).text(fullName);
	},

	__toggleHeaderMenuLogin : "Hide @hideMenuElement, show @showMenuElement.",
	toggleHeaderMenuLogin : function(hideMenuElement, showMenuElement){
		$(hideMenuElement).hide();
		$(showMenuElement).show();
	},

	postRender : function(){
		this.getLoginDetails();
		if(Clazz.WULocalStorage.getAccountNumber() && Clazz.WULocalStorage.getGatewayCustomer()){ 
			this.toggleHeaderMenuLogin(this.loginMenuButton, this.profileMenuDropDown);
			this.setUserName();
		}else{
            Clazz.WULocalStorage.clearAccountNumber();
			this.toggleHeaderMenuLogin(this.profileMenuDropDown, this.loginMenuButton);
		}

		if(this.enableLanguageDropdown){
			$(".wu-header-language").removeClass("display-none");
		}
        var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
        if(currentcountry=='AU'){
var idVerficationCount=Clazz.WULocalStorage.getIdVerificationCount();
        if(Clazz.WUNavigator.isInThisWebPage("verification.html") && idVerficationCount===null){
  Clazz.WULocalStorage.setIdVerificationCount("0");
        }
        }

		if(Clazz.WUNavigator.isInThisWebPage("home.html")){
			var accountNbr = Clazz.WULocalStorage.getAccountNumber();
			if(accountNbr == null || accountNbr == undefined){
				//added for intertitialPage
				Clazz.WULocalStorage.clearInterstitialResponse();
				Clazz.WULocalStorage.clearIsFromInterstitial();
				Clazz.WULocalStorage.clearGatewayCustomer();
				Clazz.WULocalStorage.clearCountryOfBirthList();
				Clazz.WULocalStorage.clearDestinationCountryListMobile();
				Clazz.WULocalStorage.clearGetLoyaltyCardsResponse();
				Clazz.WULocalStorage.clearResponse();
				Clazz.WULocalStorage.clearErrorResponse();
				Clazz.WULocalStorage.clearEmail();

				if(sessionStorage.LoginPageErrors!==undefined) {
					delete sessionStorage["LoginPageErrors"];
				}
				if(sessionStorage.txnErrorList!==undefined) {
					delete sessionStorage["txnErrorList"];
				}
				if(sessionStorage.existingUserFlag!==undefined) {
					delete sessionStorage["existingUserFlag"];
				}
				if(sessionStorage.dtm_login_success!==undefined) {
					delete sessionStorage["dtm_login_success"];
				}
				if(sessionStorage.codebase!==undefined) {
					delete sessionStorage["codebase"];
				}
			}
		}
	},

	/** get session id */
	__getSession : "Get session.",
	getSession : function() {
		var session = new Object();
		session['id'] = Clazz.WUCookies.getCookieSessionId();
		return session;
	},

	/** start post body sign off */
	__getCustomerSignOffRequest : "Get customer sign off request.",
	getCustomerSignOffRequest : function(){
		var customerSignOffBodyRequest = new Object();
		customerSignOffBodyRequest["security"] = this.getSecurity();
		return customerSignOffBodyRequest;
	},

	__getSecurity : "Get security.",
	getSecurity : function(){
		var security = {};
		security['client_ip'] = "00000000";
		security['session'] = this.getSession();
		return security;
	},
	/** end post body sign off */

	/** As part of medallia requirement */
	__getLoginDetails : "Get login details.",
	getLoginDetails : function() {   
		var emailId = (Clazz.WULocalStorage.getEmail()) ? Clazz.WULocalStorage.getEmail() : null ;
		var tltsId = this.gettltsId("TLTSID");;
		pagesLength = Clazz.com.wu.constants.URL_MEDALIA_PAGES.length;
		queryString  = Clazz.com.wu.constants.URL_MEDALIA+"TLTSID=TLTSID_"+tltsId+"_AND_UserID_"+emailId;

	if(pagesLength == 0 && tltsId){
		if(Clazz.WUNavigator.getSenderCountryFromURL().toLowerCase() == 'us'){
			$("#medalia-script").attr("src",queryString);
		}	
	} else {
			for(var index=0; index < pagesLength; index++) {
				if(Clazz.WUNavigator.isInThisWebPage(Clazz.com.wu.constants.URL_MEDALIA_PAGES[index])) {
					$("#medalia-script").removeAttr("src");
					return;
				} else {
					if(Clazz.WUNavigator.getSenderCountryFromURL().toLowerCase() == 'us'){
					$("#medalia-script").attr("src",queryString);
					}
				}
			}
	}
		
		
	},

	__gettltsId : "Get TLTS id.",
	gettltsId : function(key){
		var code = new RegExp(key,"g");
		var data = null;
		cookies = document.cookie.split(";");
		for(index=0; index<cookies.length; index++){
			var start = cookies[index].indexOf('=');
			if(code.exec(cookies[index])) {
				data = cookies[index].slice(start+1);
			} 
		}
		return data;
	},

    __doLogout : "Do logout.",
	doLogout : function(){
        var requestBody = this.getCustomerSignOffRequest();
		var logoutAPI = new Clazz.com.wu.api.LogoutAPI();
		logoutAPI.doLogout(requestBody, function(response){
			Clazz.WULocalStorage.clearAll();
			sessionHasCreated = false;
			Clazz.WUNavigator.goToHomePage();
		});
	}
});
Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.widget.module.WUHeaderNonTxIntl = Clazz.extend(Clazz.com.wu.widget.module.WUHeaderNonTxBase, {
	defaultContainer : "#header",

});
Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUCookieManagementBar = Clazz.extend(Clazz.WidgetWithTemplate, {
	__defaultContainer : "Selector of default container.",
	defaultContainer : "#cookies-management-bar-cointainer",
	__selectorCookies : "Selector of selector cookies.",
	selectorCookies : ".link-management",
	__wuMaskMain : "An instance of WUMaskMain.",
	wuMaskMain: null,
	__onManageCookiesClicked : "Signal for onManageCookiesClicked event.",
	onManageCookiesClicked : null,
	__onShowManagemenCookie : "Signal for onShowManagemenCookie event.",
	onShowManagemenCookie: null,
	
	initialize: function(config){
		this.onManageCookiesClicked = new signals.Signal();
		this.onShowManagemenCookie = new signals.Signal();
	},

	bindUI: function(){
		var self = this;
		$(this.selectorCookies).click(function(){
			clearTimeout(timeoutManageCookies);
			self.onShowManagemenCookie.dispatch();
		});
	},
	
	postRender : function() {
		var self = this;
		$(this.defaultContainer).hide();
		this.onManageCookiesClicked.dispatch();
		var cookieOpt = Clazz.WUCookies.getCookieCookieOptIn();
		var cookiecountry = dtmGetCookie('WUCountryCookie_');
		
		// Changes for PBL 1793
		var cookieId = dtmGetCookie('LU');
		
		if(cookiecountry && cookiecountry!='AU' && cookiecountry!='HK' && cookiecountry!='MY' && cookiecountry!='RU' && (!cookieOpt && !cookieId)){
			$(this.defaultContainer).slideDown('slow');
			var defaultDay = 180 * 24 * 60;
			var valueSelected = 'CKTXNL+CKPERF+CKMKTG';
			var basePath = Clazz.WUNavigator.basePath;
			var arrayBasePath = basePath.split("/");
			var subStringBasePath = "/"+arrayBasePath[1];			
			timeoutManageCookies = setTimeout(function(){
				self.slideUpBar();
				Clazz.WUCookies.setCookieCookieOptIn(valueSelected, defaultDay, subStringBasePath, null);
			},30000);
		}
	},
	
	__slideUpBar : "Slide up bar.",
	slideUpBar : function() {
		$(this.defaultContainer).slideUp('slow');
	}
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUMaskMain = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#maskmain",

	__onCloseMaskMainEvent : "Signal for onCloseMaskMainEvent",
	onCloseMaskMainEvent : null,
	__onPartialWidgetRender : "Signal for onPartialWidgetRender",
	onPartialWidgetRender : null,
	__contentMaskMain : "The content mask main.",
	contentMaskMain :  null,

	__contentMaskMainSelector : "Selector of content mask main .",
	contentMaskMainSelector : '#content-maskmain-sendmoney',

	initialize : function(config) {
		if(config){
			this.data.propertiesData = config.propertiesData;
		}

		this.onCloseMaskMainEvent = new signals.Signal();
		this.onPartialWidgetRender = new signals.Signal();
	},

	bindUI : function() {

	},

	postRender : function() {
		this.onPartialWidgetRender.dispatch(this.contentMaskMainSelector);
	},

	__setContentMaskMainSelector : "Method for set selector of MaskMain.",
	setContentMaskMainSelector : function(content){
		this.contentMaskMainSelector = content;
	},

	__setContentMaskMain : "Method to set content of MaskMain.",
	setContentMaskMain : function(content){
		this.contentMaskMain = content;
	},

	__showContentMaskMain : "Method for render MaskMain.",
	showContentMaskMain : function(){
		if(this.contentMaskMain !== null){
			this.contentMaskMain.render();
		}
	},
	
	__removeMaskMain : "Method for remove MaskMain.",
	removeMaskMain : function() {
		$('body').removeClass('noscroll');
		$('.wu-maskMain-overlay').remove();
		$('.wu-maskMain').remove();
		this.onCloseMaskMainEvent.dispatch();
	},

	__hideMaskMain : "Hide mask main.",
	hideMaskMain : function(){
		this.onCloseMaskMainEvent.dispatch();
	}

});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUCookieManagementSetting = Clazz.extend(Clazz.WidgetWithTemplate, {
	__defaultContainer : "Selector of default container.",
	defaultContainer : "#content-maskmain-cookies",
	__closeButtonEvent : "Signal for closeButtonEvent event.",
	closeButtonEvent : null,
	
	__defaultValueOptionCookies : "Default value option cookies.",
	defaultValueOptionCookies : "CKTXNL+CKPERF+CKMKTG",
	__onCookieBarSlideUp : "Signal for onCookieBarSlideUp event.",
	onCookieBarSlideUp : null,
	__marketingValue : "Marketing selected value.",
	marketingValue : "CKMKTG",
	__transactionalValue : "Transactional selected value.",
	transactionalValue : "CKTXNL",

	initialize : function() {
		this.closeButtonEvent = new signals.Signal();
		this.onCookieBarSlideUp = new signals.Signal();
	},

	bindUI: function(){
		var self = this;
		$('div[id=wu-cookies-management-close-button]').click(function() {
			self.onCookieBarSlideUp.dispatch();
			self.setCookiesOption();
			var valueSelected = $("input[name=wu-option-cookie-opt]:checked").attr("value");
			self.closeButtonEvent.dispatch(valueSelected);
		});
		$("input[name=wu-option-cookie-opt]").click(function(){
			if(!$(".wu-cookies-overlay-definition-content").is(":visible")){
				$(".wu-cookies-overlay-definition-content").slideDown('slow');
			}
			self.setCookiesOption(self.changeOption);
		});
		
	},

	postRender : function() {
		var cookieOpt = Clazz.WUCookies.getCookieCookieOptIn()?Clazz.WUCookies.getCookieCookieOptIn():this.defaultValueOptionCookies;
		$("input[name=wu-option-cookie-opt][value='"+cookieOpt+"']").prop('checked', true);
		this.changeOption(cookieOpt);
	},
	
	__setCookiesOption : "Set cookies option.",
	setCookiesOption: function(callback){
		var valueSelected = $("input[name=wu-option-cookie-opt]:checked").attr("value");
		var defaultDay = 180 * 24 * 60;
        var basePath = Clazz.WUNavigator.basePath;
        var arrayBasePath = basePath.split("/");
		var subStringBasePath = "/"+arrayBasePath[1];
		Clazz.WUCookies.setCookieCookieOptIn(valueSelected, defaultDay, subStringBasePath, null);
        this.clearCookieSetting(valueSelected);
		if(callback){
			callback(valueSelected);
		}
		
	},
	
	__changeOption : "Change option.",
	changeOption: function(valueSelected){
		var splitValue = valueSelected.split("+");
		var splitSelected = splitValue[splitValue.length-1];
		$('.wu-cookiebox-opt').each(function(){
			if($(this).hasClass(splitSelected)){
				$(this).removeClass('cookie-selected');
				$(this).addClass('cookie-selected');
			}else{
				$(this).removeClass('cookie-selected');
			}
		});

		$('.wu-cookies-desc-check').each(function(){
			if($(this).hasClass(splitSelected)){
				$(this).removeClass('unchecked');
				$(this).addClass('checked');
			}else{
				$(this).removeClass('checked');
				$(this).addClass('unchecked');
			}
		});

		$('.wu-cookies-desc-info').hide();

		for(var i=0; i< splitValue.length; i++){
			$('.wu-cookies-desc-info.'+splitValue[i]).show();
		}
	},
	
	__clearCookieSetting : "Clear cookie setting.",
	clearCookieSetting: function(valueSelected){
		var splitValue = valueSelected.split("+");
		var splitSelected = splitValue[splitValue.length-1];
		if(splitSelected !== this.marketingValue){
			
			var i, key, value, cookiesArray = document.cookie.split(";");
			for (i = 0; i < cookiesArray.length; i++) {
		        key = cookiesArray[i].substr(0, cookiesArray[i].indexOf("="));
		        value = unescape(cookiesArray[i].substr(cookiesArray[i].indexOf("=") + 1));
		        key = key.replace(/^\s+|\s+$/g, "");
		        if (key !== "CookieOptIn" && key !== "SessionId") {
		        	Clazz.WUCookies.createCookie(key, value, null, "/", null);
		        }
		    }
		}
		
	},
	
	disablePerformance: function(valueSelected){
		var splitValue = valueSelected.split("+");
		var splitSelected = splitValue[splitValue.length-1];
		if (splitSelected === this.transactionalValue){
			// disable performance
		}
	}
});

 Clazz.createPackage("com.wu.util");
 
Clazz.com.wu.util.SiteBehavior = Clazz.extend(Clazz.Base, {	
	__toggleFlag : "A flag to enable or disable siteBehavior",
    toggleFlag:true,
	__mdotStartTime : "Start time of mdot.",
    mdotStartTime : 0,

	initialize: function(args) {
		//RTHREE-3654 IE8 launch Issue
		var start = Date.now() || function() { return +new Date; };
     	sessionStorage.setItem("registerStartTime",start);
	},
	
	__mdotFocus : "Set current time as start time of mdot.",
	mdotFocus:function(){

		if(Clazz.SiteBehavior.toggleFlag){
			this.mdotStartTime=Date.now();
		}
		sessionStorage.setItem('mdotStartTime', this.mdotStartTime);
	},
		        
	__mdotBlur : "Save time spend on mdot to sessionStorage.",
	mdotBlur:function(keySection){
		if(Clazz.SiteBehavior.toggleFlag){
			var mdotEndTime = Date.now();

			timeDiff=(mdotEndTime - this.mdotStartTime)*0.001;
			setTime=parseInt(sessionStorage.getItem(keySection));
			if(setTime===null||isNaN(setTime)){
				finalTime=timeDiff;
			}
			else{
				finalTime=setTime+timeDiff;
			}
			sessionStorage.setItem(keySection,finalTime);
		}
	},  

	__addError : "Add error to sessionStorage.",
	addError:function(keySection,error){
        var val_find=false;
   		var val=JSON.parse(sessionStorage.getItem(keySection));
        if(val==null){
            val=[{error:error, count:1}];
            val_find=true;       
        }
        else{
            var string1;
            for(i=0; i<val.length; i++){
			    if(val[i].error==error){
				val[i].count=val[i].count+1;
                val_find=true;
                }
            }
        }
        if(!val_find){
            val.push({"error":error, "count":1});

        }

		sessionStorage[keySection]=JSON.stringify(val);
	},

	__timeSpentOnPage : "Save time spent on page to sessionStorage.",
	timeSpentOnPage:function(keySection,strtTime){
		var start;
		var end;
        var existingTime;
		start = sessionStorage.getItem(strtTime);
        end = Date.now();
        existingTime=parseInt(sessionStorage.getItem(keySection));
        if(start===null||isNaN(start)){
        	if(existingTime===null||isNaN(existingTime)){
        		console.log("No Data");
        	}
        	else{
        	 sessionStorage.setItem(existingTime); 
        	}
        }
        else if(existingTime===null||isNaN(existingTime)){
		sessionStorage.setItem(keySection,(end-start)*0.001);
        }
        else{
        sessionStorage.setItem(keySection,((end-start)*0.001+existingTime));  
        }    

	},
	
	__timeSpentOnPageMdot : "Save time spent on mdot page to sessionStorage.",
	timeSpentOnPageMdot:function(keySection,strtTime){
		var start;
		var end;
		start = sessionStorage.getItem(strtTime);
        end = Date.now();
        if(start===null||isNaN(start)){        	
        		console.log("No Data");
        }        
        else{
        	sessionStorage.setItem(keySection,(end-start)*0.001);
        }    

	},



	__addSectionTime : "Add time for given section.",
	addSectionTime:function(containerElement,keySection){

	      	var startTime=0;
			var endTime=0;
			var timeDiff=0;
			var finalTime;

        $(containerElement+" input").focus(function() {
				if(Clazz.SiteBehavior.toggleFlag){
				startTime=Date.now();
                }


		});

		$(containerElement+" input").blur(function() {
				if(Clazz.SiteBehavior.toggleFlag){
				endTime=Date.now();
				timeDiff=(endTime-startTime)*0.001;

				setTime=parseInt(sessionStorage.getItem(keySection));
                console.log(setTime);
				if(setTime===null||isNaN(setTime)){
						finalTime=timeDiff;
				}
				else{
						finalTime=setTime+timeDiff;
				}
				sessionStorage.setItem(keySection,finalTime);
                }

		});

        $(containerElement+" select").focus(function() {
			if(Clazz.SiteBehavior.toggleFlag){
				startTime=Date.now();
            }

		});

		$(containerElement+" select").focusout(function() {
				if(Clazz.SiteBehavior.toggleFlag){
				endTime=Date.now();
				timeDiff=(endTime-startTime)*0.001;

				setTime=parseInt(sessionStorage.getItem(keySection));
                console.log(setTime);
				if(setTime===null||isNaN(setTime)){
						finalTime=timeDiff;

				}
				else{
						finalTime=setTime+timeDiff;
				}
				sessionStorage.setItem(keySection,finalTime);
                }

		});
    },

	__invalidEmailCount : "Count invalid email.",
 invalidEmailCount:function(){
        var invalidCount;
     invalidCount=parseInt(sessionStorage.getItem('invalidEmailCount')); 
        if(isNaN(invalidCount)){
		invalidCount=1;
        }
        else{
        invalidCount=invalidCount+1;
        }    
     sessionStorage.setItem('invalidEmailCount',invalidCount);
 },

 __registerError : "Record register error.",
 registerError:function(keySection){
        var val_find=false;
   		var val=parseInt(sessionStorage.getItem(keySection));


        if(isNaN(val)){
		sessionStorage.setItem(keySection,1);
            val_find=true;

        }
        else{
           val=val+1;
           sessionStorage.setItem(keySection,val); 
        }

 },
 __makeErrorArray : "Create error array.",
 makeErrorArray:function (errorArray){
	    var errorobj2="";
	      if(errorArray){
	    for(i=0;i<errorArray.length;i++){
	    errorobj2=errorobj2+errorArray[i].error+":"+parseInt(errorArray[i].count)+",";
	    errorobj2=errorobj2+"";
	    }
	    return errorobj2.substring(errorobj2.lastIndexOf(","),"");
	      }else{
	          return null;
	      }},
 __startTime : "Save current time as start time to sessionStorage.",
 startTime:function(startTime){
	    		sessionStorage.setItem(startTime,Date.now());
 },

 __pageCount : "Count page.",
  pageCount: function(pagecount){
        if(sessionStorage.getItem(pagecount)!= null){

			var newPageCount=parseInt(sessionStorage.getItem(pagecount));
			sessionStorage.setItem(pagecount,newPageCount+1);
        }else{
			sessionStorage.setItem(pagecount,1);
		}

    },

  __transactionSuccessCount : "Count successful transaction.",
    transactionSuccessCount: function(successcount){
	if(sessionStorage.getItem(successcount)!= null){

			var newSuccessCount=parseInt(sessionStorage.getItem(successcount));
			sessionStorage.setItem(successcount,newSuccessCount+1);
        }else{
			sessionStorage.setItem(successcount,1);
		}
	},
	referrerDomain: function(){

	var referrerdomain=window.location.host;
	sessionStorage.setItem("referrerDomain",referrerdomain);
    },

	__totalTime : "Compute total session time and save to sessionStorage.",
    totalTime:function(pageTime){
    	var time=parseInt(sessionStorage.getItem(pageTime));
    	var totalSessionTime=parseInt(sessionStorage.getItem("totalSessionTime"));
         if(totalSessionTime===null||isNaN(totalSessionTime)){
    		sessionStorage.setItem("totalSessionTime",time);
         }
         else{
    		totalSessionTime=totalSessionTime+time;
            sessionStorage.setItem("totalSessionTime",totalSessionTime);
         }
    },


    __fullRequestUrl : "Save current page url to sessionStorage.",
    fullRequestUrl:function(){
    	var requesturl=window.location.href;
    	sessionStorage.setItem("fullRequestURL",requesturl);
    },

    
    __queryString : "Save query string to sessionStorage.",
    queryString: function(){
		sessionStorage.setItem("queryString","");

    },

    __wuRevision : "Save revision to sessionStorage.",
    wuRevision: function(){
		sessionStorage.setItem("wuRevision","3.0.0");
    },

    __codebase : "Save codebase to sessionStorage.",
    codebase: function(){
		sessionStorage.setItem("codebase",""); 
    },


    __lightboxFlag : "Save lightboxFlag to sessionStorage.",
    lightboxFlag: function(){
		sessionStorage.setItem("lightboxFlag","N");
    },
    __siteCatalystVersion : "Save siteCatalystVersion to sessionStorage.",
	siteCatalystVersion: function(){
		sessionStorage.setItem("siteCatalystVersion","");
    },
	__forgotUsernameFlag : "Save forgotUsernameFlag to sessionStorage.",
    forgotUsernameFlag: function(){
		sessionStorage.setItem("forgotUsernameFlag","N");
    },
    __toHHMMSS : "return time_var",
    toHHMMSS:function (time_var) {
   	 if(time_var.toString().length>7){
           time_var="60";
        
        }
       return(time_var);
   }
    
  	      
	});


if(!Clazz.SiteBehavior){
	Clazz.SiteBehavior = new Clazz.com.wu.util.SiteBehavior();
}

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUSlideshow = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#slideshow",
	
	initialize : function(){
		
    },
    
    preRender : function(whereToRender, renderFunction){
		this.data = {
				slideAttractLoop : [
				               {link : "/content/wucom/base/us/en/transfer-money-online.html", image : "/etc/designs/westernunion/stylesheet/images/send-money-for-zero-fee-anywhere.png"},
                               {link : "/content/wucom/base/us/en/send-money-to-india.html", image : "/etc/designs/westernunion/stylesheet/images/send-money-to-bank-account-in-india.png"},
                               {link : "/content/wucom/base/us/en/mobile-app.html", image : "/etc/designs/westernunion/stylesheet/images/send-money-for-zero-fee-within-the-us.png"}
				               ]
		}
		
		renderFunction(this.data, whereToRender);
	},

    bindUI : function(){
    	$("div.wu-image-slidetabs").tabs("div.wu-image-slider>li.slide", {
    		effect: 'fade',
			fadeOutSpeed: "slow",
			rotate: true
    	}).slideshow({ autoplay: true, interval: 6000});
    }

});
Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.constants.URL_SEND_OVER = "http://www.westernunion.com/us/campaigns/online-fx-info.page?src=us_en_hp_promoad_3";

Clazz.com.wu.widget.module.WUPromo = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#promo",
	
	initialize : function(config){
		if(config){
			this.data = config;
		}
		else{
			var pageUnderConstructionURL = Clazz.WUNavigator.basePath+"moreFAQs.html";
			this.data = {
		            promoNews : [{
		                    title : "Send money for $5",
		                    tagline : "Send money online in minutes<sup>1</sup> for pickup anywhere in the U.S. for just a $5 fee.",
		                    link_title : "Send money online now",
		            		link : pageUnderConstructionURL
		                },{
		                	title : "Get rewarded",
		                    tagline : "Save time, save money, earn rewards with the Western Union Gold Card.",
		                    link_title : "Sign up today for free",
		            		link : pageUnderConstructionURL
		                },{
		                	title : "Send over $3000",
		                    tagline : "Our online foreign exchange solution offers immediate $10,000 approval and competitive FX rates.",
		                    link_title : "Find out how",
		            		link : Clazz.com.wu.constants.URL_SEND_OVER
		                },{
		                	title : "Consumer protection",
		                    tagline : "We take consumer protection and online fraud issues seriously. <br><br>",
		                    link_title : "Learn how to protect yourself",
		            		link : pageUnderConstructionURL
		            }]
		    };
		}
    }

});
Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.widget.module.WUFooter = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#wu-footer",
	__response : "the variable is used to give data to footer.",
	response : null,
	__destinationCountryDropDownSelector : "destination country drop down selector.",
	destinationCountryDropDownSelector : "#select_country_dropdown",
	__destinationCountryDropDownMaskSelector : "destination country drop down mask selector.",
	destinationCountryDropDownMaskSelector :"#select_country .ui-btn-text>span",
	__destinationLangDropDownSelector : "destination lang drop down selector.",
	destinationLangDropDownSelector : "#select_lang #language",
	__destinationLangDropDownMaskSelector : "destination lang drop down mask selector.",
	destinationLangDropDownMaskSelector :"#select_lang .ui-btn-text>span",
	
	__onFooterEventClick : "Signal for onFooterEventClick event.",
	onFooterEventClick : null,
	__countryCode : "Country Parameter",
	countryCode : null,
	__accountNumber : "Variable for save account number value.",
	accountNumber : null,
	dropDownDestinationCountryListWidget : null,
	
	initialize : function(config){
		if(config){
			this.response = config.propertiesData;
		}
		var isFromResetPassword = (config.fromResetPassword)?config.fromResetPassword:null;
		var pageUnderConstructionURL = Clazz.WUNavigator.basePath+"moreFAQs.html";
		this.data = {
				isFromResetPassword : isFromResetPassword,
		};
		
		this.onFooterEventClick = new signals.Signal();
		this.countryCode = Clazz.WUNavigator.getSenderCountryFromURL();
		this.accountNumber = Clazz.WULocalStorage.getAccountNumber();
		
		if(Clazz.WUNavigator.isInMobilePage()){
			this.dropDownDestinationCountryListWidget = new Clazz.com.wu.widget.module.WUDropDownCountryList({
				defaultContainer:this.destinationCountryDropDownSelector, 
				id:"wum-nav-country-list-footer",
				defaultValue : this.countryCode
			});
			
			this.dropDownDestinationCountryListWidget.listChangedEvent.add(this.changeDestinationCountry, this);
		}
	},

	bindUI : function() {
		var self = this;
		var isAppNative = window.sessionStorage.getItem('isAppNative');
		var wuFooterQuicklink = $('.wu-footer-quicklink-content');
		if(!this.response.show_quicklink){
			//wuFooterQuicklink.hide();
		}
		var wuFooterSendMoneylink = $('.wu-footer-sendmoney-content');
		if(!this.response.show_sendmoneylink){
			wuFooterSendMoneylink.hide();
		}
		var wuFooterMenulink = $('.wu-footer-menu-content');
		if(!this.response.show_menulink){
			wuFooterMenulink.hide();
		}
		
		var securityImages = $('.wu-image-footer-security');
		if(!this.response.show_securityImage){
			securityImages.hide();
		}
		
		if(isAppNative){
			$('#wum-terms-conditions').click(function(e){
				e.preventDefault();
				var url = $(this).attr("href");
				self.showUrlInBrowser(url);
			});
			$('#wum-privacy-policy').click(function(e){
				e.preventDefault();
				var url = $(this).attr("href");
				self.showUrlInBrowser(url);
			});
		}
		
		var isLoginOrProfileMobilePage = (Clazz.WUNavigator.isInThisMobilePage("login.html") ||
				Clazz.WUNavigator.isInThisMobilePage("profile.html"));
		var isSendMoneyMobilePage = (Clazz.WUNavigator.isInThisMobilePage("sendMoney.html") ||
				Clazz.WUNavigator.isInThisMobilePage("sendMoneyPanel.html") || 
				Clazz.WUNavigator.isInThisMobilePage("sendMoneyPreLogin.html"));

		var account=$('#btn-account');
		var sendMoney = $('#btn-send-money');
		var help = $('#btn-help-account');

		if(!isLoginOrProfileMobilePage){
			account.click(function() {
				if(!Clazz.WUNavigator.isInThisMobilePage("register.html")){
					if(Clazz.WULocalStorage.getAccountNumber()!==null){
						Clazz.WUNavigator.goToProfileMobilePage();
					}else{
						Clazz.WUNavigator.goToLOginMobilePage();
					}
				}else{
					/**
					 * show pop up alert
					 */
					self.onFooterEventClick.dispatch("account");
				}
			});

		}
		if(!isSendMoneyMobilePage){
			sendMoney.click(function(){

				//check already login or not
				if(!Clazz.WUNavigator.isInThisMobilePage("register.html")){
					if(self.accountNumber != null){
						Clazz.WUNavigator.goToSendMoneyMobilePage();
					}else{
						Clazz.WUNavigator.goToSendMoneyPanelPage();
					}
				}else{
					/**
					 * show pop up alert
					 */
					self.onFooterEventClick.dispatch("sendMoney");
				}
			});
		}
		
		if(!(Clazz.WUNavigator.isInThisMobilePage("about.html"))){
			help.click(function(){
				if(!Clazz.WUNavigator.isInThisMobilePage("register.html")){
					Clazz.WUNavigator.goToAboutUsMobile();
				}else{
					/**
					 * show pop up alert
					 */
					self.onFooterEventClick.dispatch("help");
				}
			});
		}
 
		if(isLoginOrProfileMobilePage){
			account.addClass("wum-footer-selector");
		}else if(isSendMoneyMobilePage){
			sendMoney.addClass("wum-footer-selector");
		}	
		$(this.destinationCountryDropDownSelector).change(function(){
			self.changeDestinationCountryDropDownText(self.destinationCountryDropDownSelector,self.destinationCountryDropDownMaskSelector);
		});
		$(this.destinationLangDropDownSelector).change(function(){
			self.changeDestinationCountryDropDownText(self.destinationLangDropDownSelector,self.destinationLangDropDownMaskSelector);
		});
	},
	
	__changeDestinationCountryDropDownText : "Change destination country dropdown text.",
	changeDestinationCountryDropDownText : function(dropDownSelector, dropDownMaskSelector){
		var countryCode = $(dropDownSelector).val();
		var countryName = $(dropDownSelector+" > option[value="+countryCode+"]").text();

		$(dropDownMaskSelector).text(countryName);
		$(dropDownSelector).val(countryCode);
	},

	postRender : function(){
		if(Clazz.WUNavigator.isInThisMobilePage("forgotPassword/start.html")){
			$("#select_country").hide();
			$("#select_lang").hide();
		}
		if(Clazz.WUNavigator.isInMobilePage()){
			var self = this;
			if(this.countryCode != "US" && this.accountNumber == null){
				$("#dropdown-country-international").show();
				self.dropDownDestinationCountryListWidget.render();
			}else{
				$("#dropdown-country-international").hide();
			}
		}
		if(Clazz.WUNavigator.isInThisWebPage("password-recovery.html")){
	    	$('.wu-footer').addClass("set-footer-reset-pwd");
		}
		if(Clazz.WUNavigator.isInThisWebPage("register.html")){
		      $('.wu-footer-menu-content').show();
	    	}
	},

	__showUrlInBrowser : "Call native plugin to open url in browser.",
	showUrlInBrowser : function(url){
		var param = [];
		var objParam = {
				"link" : url
		};
		if(objParam != null){
			param.push(objParam);
		}
		document.addEventListener("deviceready", function(){
			cordova.exec(function(response){},function(error){},"ExternalLinkPlugin","openLink", param);
		}, false);
	},

	__changeDestinationCountry : "Change web page based on selected country for mDot",
	changeDestinationCountry : function(data){
		var originURL = window.location.origin;
		var pathName = Clazz.WUNavigator.bashPathMobile;
		pathName = pathName.replace("/"+ this.countryCode.toLowerCase() +"/", "/" + data.value.toLowerCase() + "/");

	    var newURL = originURL + pathName + Clazz.WUNavigator.HOME_PAGE_URL;

		if(this.isValidURL(newURL)){
			var isAppNative = window.sessionStorage.getItem('isAppNative');

			//Clear all cookies and local storage before redirect to selected country
			Clazz.WUCookies.clearAll();
			Clazz.WUCookies.deleteCookie("WUCountryCookie_", '/', null);
			Clazz.WUCookies.deleteCookie("WUCountryCookie_", null, null);
			Clazz.WUCookies.deleteCookie("WULanguageCookie_", '/', null);
			Clazz.WUCookies.deleteCookie("WULanguageCookie_", null, null);

			Clazz.WULocalStorage.clearAll();

			if(isAppNative){
				localStorage.setItem('isAppNative',isAppNative);
			}

			window.location.replace(newURL);
		}else{
			//Reset to previous country
			this.dropDownDestinationCountryListWidget.render();
			var data = {};
			data["message"] = "The website is not available.";
			Clazz.WUPopup.showPopUp(data);
		}
	},

	__isValidURL : "to validate or check the url is available or not",
	isValidURL : function(url){
	    var isValid = false;

	    if(Clazz.wuSpinner){
			Clazz.wuSpinner.show();
		}

	    $.ajax({
	      url: url,
	      type: "get",
	      async: false,
	      success: function(response, e, xhr) {
	        isValid = xhr != null && xhr.status == 200 ? true : false;
	      },
	      error: function(){
	        isValid = false;
	      }
	    });

	    if(Clazz.wuSpinner){
			Clazz.wuSpinner.hide();
		}

	    return isValid;
	}
});

	/* RINTL-16881 */

	$(window).load(function(){
        console.log("Inside WUFooter.js");
		$(".with-orbit-mobile .orbit-bullets").eq(1).hide();
        $(".wu-footer-quicklink") });

	$(document).ready(function(){
	if(Clazz.WUNavigator.isInThisWebPage("login/interstitialPage.html") || Clazz.WUNavigator.isInThisWebPage("send-money/interstitialPage.html")){
			  $('.footer').hide();
		} 
	});   
	/* RINTL-16881 */

    /* RINTL-16462 */


	//var currentCountry=Clazz.WULocalStorage.getCurrentCountry;
	//console.log('this.currentCountry------------'+currentCountry);
	//if(currentcountry=='GB' || currentcountry=='FR' || currentcountry=='DE' || currentcountry=='IE)
       //	 {
		//	$(".wu-image-footer-security.trustwaveSeal,wu-image-footer-security.comodoSecure,.wu-image-footer-security").removeClass("display-none");
       //  }
	/* RINTL-16462 */

Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.widget.module.WUFooterWidgetIntl = Clazz.extend(Clazz.com.wu.widget.module.WUFooter, {
	defaultContainer : "#wu-footer",

	initialize : function(config){
		var superInitialize = $.proxy(this.superClass.initialize, this);
		superInitialize(config);

		this.data = {};

		var showSecurityImages = (this.response.show_securityImage == "true")? true : false; 
		this.data = {
				show_securityImage : showSecurityImages,
				showMenuLink : this.response.show_menulink,
				sendMoneyLink : this.response.show_sendmoneylink,
				showQuickLink : this.response.show_quicklink,
				showTypeGB : this.response.show_type_GB
		};
		this.cookieManagementListener = new Clazz.com.listener.CookieManagementListener();
	},

	bindUI : function() {

        $("#email-submit-error").hide();// PBL-188 : Added
		var self = this;
		var wuFooterQuicklink = $('.wu-footer-quicklink-content');
		var wuFooterQuickLinkTypeGB = $('.type-GB');
		var wuFooterCopyWriter = $(".wu-footer-copywrite");
		if (this.response.show_type_GB) {
			wuFooterQuicklink.hide();
			wuFooterQuickLinkTypeGB.show();
			wuFooterCopyWriter.show()
		}

		$('a[class=cookie-setting]').click(function(){
			self.cookieManagementListener.showCookieSetting();
		});
		
		$("a").click(function () {
			var addressValue = $(this).attr("href");
			if(addressValue != undefined && addressValue != 'javascript:;' && addressValue.indexOf('.html') > 0 ){
				var pageStr = addressValue.toString();     
				if(pageStr.indexOf("http") === -1)
					event.preventDefault(); //Prevent the link from going anywhere
				var newUrl = pageStr.split("/");
				if (newUrl.length == 4 || newUrl.length == 7)     
					Clazz.WUNavigator.goToCustomUrlResolver(newUrl[newUrl.length - 1]);
				else if (newUrl.length == 5 || newUrl.length == 8)
					Clazz.WUNavigator.goToCustomUrlResolver(newUrl[newUrl.length - 2]+'/'+newUrl[newUrl.length - 1]);
				else     
					Clazz.WUNavigator.goToCustomUrlResolver(addressValue);
			}
   		});
	},

	/** overriding postRender WUFooter*/
	postRender : function(){
		var alias = $(".wu-footer-copywrite.wu-footer-copywrite-disclaimer").data('alias');
		if((Clazz.WUNavigator.isInThisWebPage("home.html")) || (Clazz.WUNavigator.isInThisWebPage(alias+".html"))){
			$('.wu-footer-copywrite').removeClass("wu-footer-copywrite-disclaimer");
		}
	}
});
Clazz.createPackage("com.wu.util");

Clazz.com.wu.util.WUCookies = Clazz.extend(Clazz.Base,{
	__defaultExpires : "Default expires time 1 day",
	defaultExpires : 60 * 24, //default expires time 1 day
	__sessionLocal : "SessionStorage of brwoser.",
	sessionLocal:window.sessionStorage,
	
	__keySet : "The key set used for this website.",
	keySet : [
	          "SessionId",
	          "AccountNumber",
              "Email",
	          "CookieOptIn",
	          "ITEM1",
	          "Device",
	          "PathMobile",
	          "SessionInfo",
	          "SessionDomain",
			  "WULanguageCookie ",
			  "WULanguageCookie_"
	          ],
	
	__keyCookieOption : "key cookie option",
	keyCookieOption : "CookieOptIn",
	
	initialize : function(config){
		for(var i=0;i<this.keySet.length;i++){
			var key = this.keySet[i];
			this.addSetFunction(key);
			this.addGetFunction(key);
			this.addClearFunction(key);
		};
		
	},

	__addSetFunction : "Create set function for all keys in keySet.",
	addSetFunction : function(key){
		var self = this;
		if(key==="AccountNumber")
		{
			this["setCookie"+key] = function(value){
				this.sessionLocal.setItem(key, value);
			}
		}else{
			this["setCookie"+key] = function(value, expires, path, domain){
				self.createCookie(key, value, expires, path, domain);
			}
		}
	},

	__addGetFunction : "Create get function for all keys in keySet.",
	addGetFunction : function(key){
		var self = this;
		if(key==="AccountNumber")
		{
			this["getCookie"+key] = function(){
				var value = this.sessionLocal.getItem(key); 
				return value;
			}
		}else{
			this["getCookie"+key] = function(){
				return self.getCookie(key);
			}
		}
	},

	__addClearFunction : "Create clear function for all keys in keySet.",
	addClearFunction : function(key){
		var self = this;
		if(key==="AccountNumber")
		{
			this["clear"+key] = function(){
				this.sessionLocal.removeItem(key);
			}
		}else{
			this["clearCookie"+key] = function(path, domain){
				self.deleteCookie(key, path, domain);
			}
		}
	},

	__clearAll : "Clear everything this website saved to localStorage or sessionStorage.",
	clearAll : function(){
		this.sessionLocal.clear();
		for(var i=0;i<this.keySet.length;i++){
			var key = this.keySet[i];
			if(key!=="AccountNumber"){
				this.deleteCookie(key, '/', null);
				this.deleteCookie(key, null, null);
			}
		};
		this.sessionLocal.clear();
	},


	__createCookie : "Create a cookie.",
	createCookie: function(name, value, expires, path, domain) {
    var docdomain = document.domain.split('.');
    var dom1 = "";
    if (typeof(docdomain[docdomain.length - 2]) != 'undefined') dom1 = docdomain[docdomain.length - 2] + '.';
    var domainname = dom1 + docdomain[docdomain.length - 1];
    var optionCookie = this.getCookie(this.keyCookieOption);
    
    var timeExpired = expires;
    if(optionCookie && optionCookie.indexOf("CKMKTG") === -1 && name !== this.keyCookieOption && name !== "SessionId"){
    	timeExpired = null;
    }

		if (value !== null || value !== undefined) {
            var cookie = name + "=" + escape(value) + ";";

            if (timeExpired) {
                // If it's a date
                if(timeExpired instanceof Date) {
                    // If it isn't a valid date
                    if (isNaN(timeExpired.getTime())){
                    	timeExpired = new Date();
                    }
                }else if(timeExpired === null){
                	timeExpired = new Date(new Date().getTime() + parseInt(this.defaultExpires) * 1000 * 60 )
                }
                else{

                	timeExpired = new Date(new Date().getTime() + parseInt(timeExpired) * 1000 * 60 );
                }
                cookie += "expires=" + timeExpired.toGMTString() + ";";
            }

            if (path){
            	path="/";
                cookie += "path="  + path +";";
            }
            if (domain){
                cookie += "Domain=" + domain + ";";
            }else if(domainname !== "localhost" && isNaN(parseInt(domainname.charAt(0)))){
            	// handle domain is not localhost and ip address
            	cookie += "Domain=" + domainname + ";";
            }
        	if(window.location.protocol.indexOf("https")!== -1){
        		  cookie += "secure;";
        	} 
            document.cookie = cookie;
        }
	},

	__getCookie : "Get the value of a cookie.",
	getCookie:function(name) {
		var i, key, value, cookiesArray = document.cookie.split(";");
	    for (i = 0; i < cookiesArray.length; i++) {
	        key = cookiesArray[i].substr(0, cookiesArray[i].indexOf("="));
	        value = unescape(cookiesArray[i].substr(cookiesArray[i].indexOf("=") + 1));
	        key = key.replace(/^\s+|\s+$/g, "");
	        if (key == name) {
	            return decodeURIComponent(value);
	        }
	    }
	    return null;
	},

	__deleteCookie : "Delete a cookie.",
	deleteCookie: function(name, path, domain) {
		// If the cookie exists
		if (this.getCookie(name))
			this.createCookie(name, "", -1, path, domain);
	}
});
	
if(!Clazz.WUCookies){
	Clazz.WUCookies = new Clazz.com.wu.util.WUCookies();
}


/**
*  Dont convert this code to OOJS or widget framework format.
*  Functions used  here are used by the 3rd party websites to give the response.
*/

//Accuylink code starts here
//Once we get the acculynk flag from sendMoney Validate service
//Bellow function is needs to initiated for pin pad.    
var response="";
var callback={};
function launchAcculynkPinPad(requestbody,callbackobj) {
    var acculynkGuId="";
    var responseObj={};
    var acculynkGuId="";
    var acculynkModulus="";
    var acculynkExponent="";
    var ccNumber="";
    var cc="";

    response=requestbody;
    callback=callbackobj;
    responseObj=requestbody.payment_details.credit_debit_card;
    acculynkGuId = responseObj.pin_debit.pinpad_params.guid;
    acculynkModulus = responseObj.pin_debit.pinpad_params.modulus;
    acculynkExponent = responseObj.pin_debit.pinpad_params.exponent;
    ccNumber = responseObj.card_number;
    cc = ccNumber.substring(ccNumber.length-4,ccNumber.length);
    Acculynk.createForm(acculynkGuId, cc, acculynkModulus, acculynkExponent);
    Acculynk.PINPadLoad();
}
function launchapplloAcculynkPinPad(requestbody,apolloobject,callbackobj) {
    var acculynkGuId="";
    var responseObj={};
    var acculynkGuId="";
    var acculynkModulus="";
    var acculynkExponent="";
    var accuylnkTransId="";
    var ccNumber="";
    var cc="";

    response=requestbody;
    callback=callbackobj;
    responseObj=requestbody.payment_details.credit_debit_card;
    acculynkGuId = apolloobject.creditDebitCard.pinDebit.guid;
    acculynkModulus = apolloobject.creditDebitCard.pinDebit.modulus;
    acculynkExponent = apolloobject.creditDebitCard.pinDebit.exponent;
    accuylnkTransId = apolloobject.creditDebitCard.pinDebit.transId;
    ccNumber = responseObj.card_number;
    cc = ccNumber.substring(ccNumber.length-4,ccNumber.length);
    sessionStorage.appollopinpag="yes";
    sessionStorage.acculynkGuId=acculynkGuId;
    sessionStorage.acculynkModulus=acculynkModulus;
    sessionStorage.acculynkExponent=acculynkExponent;
    sessionStorage.accuylnkTransId=accuylnkTransId;
    

    Acculynk.createForm(acculynkGuId, cc, acculynkModulus, acculynkExponent);
    Acculynk.PINPadLoad();
}
// This is the call back function used by accuylnk. 
// DONT CHANGE THE FUNMCTION NAME..
function  accu_FunctionResponse(strResponse)
{
   
   Clazz.Splunk.log("AcculynkResponse="+strResponse, "Acculynk");

    switch (strResponse) {
        case 'ACCU999':
        sessionStorage.SecureThreedsys="Enabled";
           // Pin pad screen is launched now
            break;
        case 'ACCU000':
            if(sessionStorage.SecureThreedsys!==undefined)
           {
            delete sessionStorage["SecureThreedsys"];
          }
            localStorage.accuylnkResponse=strResponse;
            Acculynk._modalHide();
            callback.initiateSendMoneyStoreCall();
            $('#acculynkResponseCode').val(strResponse);
            break;
        default:
        if(sessionStorage.SecureThreedsys!==undefined)
         {
           delete sessionStorage["SecureThreedsys"];
          }
         localStorage.accuylnkResponse=strResponse;
          Acculynk._modalHide();
          callback.initiateSendMoneyStoreCall();
           $('#acculynkResponseCode').val(strResponse);
           break;
    }
}
//function to check the accuylnk is enabled or not
function isAccuylnkValidationCheck(response)
{
  
   if(response.payment_details!=undefined)
   {
        if(response.payment_details.credit_debit_card!=undefined)
            {

            if(response.payment_details.credit_debit_card.pin_debit!=undefined)
                {
                     if(response.payment_details.credit_debit_card.pin_debit.available!=undefined)
                    {
                        if(response.payment_details.credit_debit_card.pin_debit.available=="true")
                         {

                            return false;
                         }
                    }
                }
            }
   }
    return true;
}
// This function will set the pinpad json object which needs to passed as store service call..
function getPinPadObj(){
    var responseCode="";
    var payingObj = {};
    var entryresult={};
    responseCode= localStorage.accuylnkResponse;//$("#acculynkResponseCode").val();
    if(sessionStorage.appollopinpag!==undefined && sessionStorage.appollopinpag=="yes")
    {
          
       entryresult["trans_id"]=sessionStorage.accuylnkTransId;
       entryresult["guid"]=sessionStorage.acculynkGuId;
       entryresult["modulus"]=sessionStorage.acculynkModulus;
       entryresult["exponent"]=sessionStorage.acculynkExponent;
       delete sessionStorage["appollopinpag"];
       delete sessionStorage["accuylnkTransId"];
       delete sessionStorage["acculynkGuId"];
       delete sessionStorage["acculynkModulus"];
       delete sessionStorage["acculynkExponent"];

    }else
    {
      var validateResponse = JSON.parse(Clazz.WULocalStorage.getValidationResponse());
      var objectparameters=validateResponse.payment_details.credit_debit_card.pin_debit;

       entryresult["trans_id"]=objectparameters.pinpad_params.trans_id;
       entryresult["guid"]=objectparameters.pinpad_params.guid;
       entryresult["modulus"]=objectparameters.pinpad_params.modulus;
       entryresult["exponent"]=objectparameters.pinpad_params.exponent;

    }
    if(responseCode=="NOPINPADBROWSER")
    {
      entryresult["entry_result"]=null;
    }else
    {
       entryresult["entry_result"]=responseCode;
    }
   
    payingObj["available"]="true";
     if(responseCode=="ACCU200" || responseCode=="ACCU400" || responseCode=="NOPINPADBROWSER")
    {
       entryresult["trans_id"]=null;
       entryresult["guid"]=null;
       entryresult["modulus"]=null;
       entryresult["exponent"]=null;
    }
    payingObj["pinpad_params"]=entryresult;
    delete localStorage["accuylnkResponse"];
    return payingObj;

}
//Accuylink code ends here



//3d secure code starts here
function is3DSCheck(response)
{

   var self=this;
   if(response.payment_details!=undefined)
   {
        if(response.payment_details.credit_debit_card!=undefined)
            {

            if(response.payment_details.credit_debit_card.cardinal_info!=undefined)
                {
                    if(response.payment_details.credit_debit_card.cardinal_info.available!=undefined)
                    {
                        if(response.payment_details.credit_debit_card.cardinal_info.available==="true")
                         {

                            return false;
                         }
                    }
                }
            }
   }
    return true;
}
function launchSecure3d(response)
{

        $("#wu-receiver-information-required-container").hide();
        $("#wu-receiver-information-id-verfication-container").show();

        luanch3dsecureform(response);
}

function launchSecure3dMobile(response)
{
	 $("#review").hide();
     $("#form3ds").show();

     luanch3dsecureform(response);
}

function luanch3dsecureformApollo(sendmoneyobject)
{
    $("#wu-receiver-information-required-container").hide();
    $("#wu-receiver-information-id-verfication-container").show();
    //DTM update sections name
    DTM_Trigger('DTM-3D-SECURE','3dsecure');
    //End of DTM update section name
    
    var formInner="";
    
    var actionURl=sessionStorage.apolloURL;
    var returnURL="";
    if (document.location.origin==undefined)
    {  
      returnURL = window.location.protocol+"//"+window.location.host +"/bin/westernunion/securehandler";
    }else
    {
      returnURL = location.origin+"/bin/westernunion/securehandler";
    }  
    var cardDigest=sessionStorage.cardDigestAppollo;

     formInner = "<form  action='" + actionURl + "' name='secure3d' id='secure3d' method='post'>";
     formInner +="<input type='hidden' name='TermUrl' id='TermUrl' value='" + returnURL + "' />";
     formInner +="<input type='hidden' name='PaReq' id='PaReq' value='" + cardDigest + "' />";
               
              

     formInner +="</form>";

     //PBL-2175 Changes
     var senderCountryCode = Clazz.WUNavigator.getSenderCountryFromURL(); 
     var senderLanguageCode = Clazz.WUNavigator.getSenderLanguageFromURL();
     if(senderCountryCode && senderLanguageCode)
     {
       sessionStorage.IBPSenderCountryCode=senderCountryCode;
       sessionStorage.IBPSenderLanguageCode=senderLanguageCode;
     }

  $("#secure-3d-container").html(formInner);  
  if ( document.secure3d )
  {
         document.getElementById("secure3d").target="secureiframe";
         document.secure3d.submit();
  }
  sessionStorage.SecureThreedsys="Enabled";
    
}

function luanchSofortformApollo(sendmoneyobject)
{
    $("#wu-receiver-information-required-container").hide();
    $("#wu-receiver-information-id-verfication-container").show();
    //DTM update sections name
    DTM_Trigger('DTM-3D-SECURE','3dsecure');
    //End of DTM update section name
    
    var formInner="";
    
    var actionURl=sessionStorage.apolloURL;
       
     formInner = "<form  action='" + actionURl + "' name='secure3d' id='secure3d' method='post'>";
     formInner +="</form>";

     //PBL-2070 Changes
     var senderCountryCode = Clazz.WUNavigator.getSenderCountryFromURL(); 
     var senderLanguageCode = Clazz.WUNavigator.getSenderLanguageFromURL();
     if(senderCountryCode && senderLanguageCode)
     {
       sessionStorage.IBPSenderCountryCode=senderCountryCode;
       sessionStorage.IBPSenderLanguageCode=senderLanguageCode;
     }

  $("#secure-3d-container").html(formInner);  
  if ( document.secure3d )
  {
         document.getElementById("secure3d").target="secureiframe";
         document.secure3d.submit();
  }
  sessionStorage.SecureThreedsys="Enabled";
    
}
function luanch3dsecureform(sendmoneyobject)
{
    //DTM update sections name
    DTM_Trigger('DTM-3D-SECURE','3dsecure');
    //End of DTM update section name
    
    var serverConfig = Clazz.serverServiceConfig;
    var postHandlerPath=Clazz.WUNavigator.getPostHandlerPath();
    var formInner="";
    if(sendmoneyobject.apollo_flag!==undefined && sendmoneyobject.apollo_flag==="true")
    {
        if(sessionStorage.apolloURL!==undefined && sessionStorage.apolloURL!=="")
        {
           var actionURl=sessionStorage.apolloURL;
        }else
        {
            var actionURl=serverConfig.secure3d_actionURL;
        }
        
    }else
    {
         var actionURl=sendmoneyobject.payment_details.credit_debit_card.cardinal_info.returnURL;
    }

    var currencyISOCode = '840';	//default US
    var merchantID="621864";
    var clearerID="142-01";
    // Zad - values picked from lanConfig.json
    var senderCountry = Clazz.WUNavigator.getSenderCountryFromURL(); 
    var senderData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[senderCountry] ? Clazz.langConfig.senderInfoMap[senderCountry] : null;
    
    if (senderData && senderData.merchantID) {
    	merchantID = senderData.merchantID;
    }
    if (senderData && senderData.clearerID) {
    	clearerID = senderData.clearerID;
    }
    if (senderData && senderData.currencyISOCode) {
    	currencyISOCode = senderData.currencyISOCode;
    }

    var trackingID=$.trim(getformatedtransId(sendmoneyobject.temp_transaction_id));
    var amount=(sendmoneyobject.payment_details.origination.gross_amount/100).toFixed(2);
    var digitalSig=$.trim(sendmoneyobject.payment_details.credit_debit_card.cardinal_info.signature3ds);
    var returnURL="";
    if (document.location.origin==undefined)
    {  
      returnURL = window.location.protocol+"//"+window.location.host +"/bin/westernunion/securehandler";
    }else
    {
      returnURL = location.origin+"/bin/westernunion/securehandler";
    }  
    if(sendmoneyobject.payment_details.credit_debit_card.cardinal_info.cardinal_params!==undefined)
    {
        var ccnumber_encrypted=$.trim(sendmoneyobject.payment_details.credit_debit_card.cardinal_info.cardinal_params.card_digest);
        var ccexpiry=$.trim(getexpirydateformat(sendmoneyobject.payment_details.credit_debit_card.expiration_date)); 
    }else
    {
         var ccnumber_encrypted=$.trim(sendmoneyobject.payment_details.credit_debit_card.card_number);
         var ccexpiry=$.trim(sendmoneyobject.payment_details.credit_debit_card.expiration_date);
    }
   
    var customerName = sendmoneyobject.sender.name;//PBL-1760
    
    var billingFirstName=(customerName !== undefined)?$.trim(customerName.first_name):"";
    var billingLastName=(customerName !== undefined)?$.trim(customerName.last_name):"";
    var billingAddress1=$.trim(sendmoneyobject.payment_details.credit_debit_card.address.addr_line1);
    if(sendmoneyobject.payment_details.credit_debit_card.address.addr_line2!==undefined)
    {
        var billingAddress2=$.trim(sendmoneyobject.payment_details.credit_debit_card.address.addr_line2); 
    }else
    {
          var billingAddress2='';
    }
   
    var billingCity=$.trim(sendmoneyobject.payment_details.credit_debit_card.address.city);
	var billingState;
    if(sendmoneyobject.payment_details.credit_debit_card.address.state!=undefined){
		billingState=$.trim(sendmoneyobject.payment_details.credit_debit_card.address.state.toUpperCase());
    }
    else{

    	billingState='';
    }
    //var billingState=$.trim(sendmoneyobject.payment_details.credit_debit_card.address.state.toUpperCase());//PBL-1910
    var billingZip=$.trim(sendmoneyobject.payment_details.credit_debit_card.address.postal_code);
    var billingPhone1=$.trim(sendmoneyobject.sender.contact_phone);
    var billingEmail=$.trim(sendmoneyobject.sender.email);
    var amountToPassed=(amount*100);

    formInner = "<form  action='" + actionURl + "' name='secure3d' id='secure3d' method='post'>" +
                "<input type='hidden' name='merchantID' id='merchantID' value='" + merchantID + "' />" +
                "<input type='hidden' name='clearerID' id='clearerID' value='" + clearerID + "' />" +
                "<input type='hidden' name='trackingID' id='trackingID' value='" + trackingID + "' />" +
                "<input type='hidden' name='amount' id='amount' value='" + amount + "' />" +
                "<input type='hidden' name='ccnumber_encrypted' id='ccnumber_encrypted' value='" + ccnumber_encrypted + "' />" +
                "<input type='hidden' name='ccexpiry' id='ccexpiry' value='" + ccexpiry + "' />" +
                "<input type='hidden' name='returnURL' id='returnURL' value='" + returnURL + "' />" +
                "<input type='hidden' name='billingFirstName' id='billingFirstName' value='" + billingFirstName + "' />" +
                "<input type='hidden' name='billingLastName' id='billingLastName' value='" + billingLastName + "' />" +
                "<input type='hidden' name='billingAddress1' id='billingAddress1' value='" + billingAddress1 + "' />" +
                "<input type='hidden' name='billingAddress2' id='billingAddress2' value='" + billingAddress2 + "' />" +
                "<input type='hidden' name='billingCity' id='billingCity' value='" + billingCity + "' />" +
                "<input type='hidden' name='billingState' id='billingState' value='" + billingState + "' />" +
                "<input type='hidden' name='billingZip' id='billingZip' value='" + billingZip + "' />" +
                "<input type='hidden' name='billingPhone1' id='billingPhone1' value='" + billingPhone1 + "' />" +
                "<input type='hidden' name='countryCode' id='countryCode' value='" + senderCountry + "' />" +
                "<input type='hidden' name='currencyCode' id='currencyCode' value='" + currencyISOCode + "' />" +
                "<input type='hidden' name='billingEmail' id='billingEmail' value='" + billingEmail + "' />" +
                "<input type='hidden' name='digitalSig' id='digitalSig' value='" + encodeURI(digitalSig) + "' />" ;

                if(sendmoneyobject.apollo_flag!==undefined && sendmoneyobject.apollo_flag==="true")
                {
                	var cardDigest=sessionStorage.cardDigestAppollo;
                	formInner +="<input type='hidden' name='TermUrl' id='TermUrl' value='" + returnURL + "' />";
                	formInner +="<input type='hidden' name='PaRes' id='PaRes' value='" + cardDigest + "' />";
                }
              

     formInner +="</form>";


  $("#secure-3d-container").html(formInner);  
  if ( document.secure3d )
  {
         document.getElementById("secure3d").target="secureiframe";
         document.secure3d.submit();
  }

}
function getexpirydateformat(dateformat)
{
   var datevalue=dateformat;
   var yearvalue=datevalue.substr(dateformat.length-2);
   var monthformat=datevalue.substring(0,2);
   var yearformat=yearvalue+monthformat;

   if(yearformat!==undefined & yearformat!==null)
   {
    return yearformat;
   }else
   {
    return dateformat;
   }


}
function getformatedtransId(transid)
{

  
   var yearvalue=transid.substr(transid.length - 10);
   return yearvalue;


}
function getSecureThreeDObject(responseCode)
{
    var secureObj={};
    var cardinalParams={};
    cardinalParams["status"]="";
    cardinalParams["reasonCode"]="";
    cardinalParams["acsVerificationId"]="";
    cardinalParams["eciCode"]="";
    secureObj["cardinalParams"]=cardinalParams;
    return secureObj;
  

}

function secure3d_response()
{
    callback.initiateSendMoneyStoreCall();
}
//3d secure code ends here
function luanchDocUploadform(sendmoneyobject)
{
    var serverConfig = Clazz.serverServiceConfig;
    var postHandlerPath=Clazz.WUNavigator.getPostHandlerPath();

    var kycobject=[];
    kycobject=sendmoneyobject.docUploadInfo;
    var formInner="";
    var actionURl=serverConfig.docUploadURL;
    var referenceId=kycobject.referenceId;
    var searchType=kycobject.searchType;
    var countryCode="US";
    var languageCode="en";
    var firstName=kycobject.firstName;
    var lastName=kycobject.lastName;
    var address1=kycobject.address1;
    var city=kycobject.city;
    var state=kycobject.state;
    var zipCode=kycobject.zipCode;
    var phoneNumber1=kycobject.phoneNumber1;
    var emailAddress=kycobject.emailAddress;
    var ipAddress=Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
    var returnURL=kycobject.returnURL;
    var timeStamp=kycobject.timeStamp;
    var displayAcceptedDocs=kycobject.displayAcceptedDocs;
    var encryptedData=kycobject.encryptedData;
    var signature=kycobject.signature;

    formInner          ="<form  action='"+actionURl+"' name='dulform' id='dulform' method='post'>" +
                        "<input type='hidden' name='referenceId' id='referenceId' value='"+ referenceId+"' />" +
                        "<input type='hidden' name='searchType'  id='searchType' value='"+searchType+ "' />" +
                        "<input type='hidden' name='countryCode' id='countryCode' value='"+countryCode+"' />" +
                        "<input type='hidden' name='languageCode' id='languageCode' value='"+languageCode+"' />" +
                        "<input type='hidden' name='firstName' id='firstName' value='"+firstName+"' />" +
                        "<input type='hidden' name='lastName' id='lastName' value='"+lastName+"' />" +
                        "<input type='hidden' name='address1' id='address1' value='"+address1+"' />" +
                        "<input type='hidden' name='city' id='city' value='"+city+"' />" +
                        "<input type='hidden' name='state' id='state' value='"+state+"' />" +
                        "<input type='hidden' name='zipCode' id='zipCode' value='"+zipCode+"' />" +
                        "<input type='hidden' name='phoneNumber1' id='phoneNumber1' value='"+phoneNumber1+"' />" +
                        "<input type='hidden' name='emailAddress' id='emailAddress' value='"+emailAddress +"' />" +
                        "<input type='hidden' name='ipAddress' id='ipAddress' value='"+ipAddress+"' />" +
                        "<input type='hidden' name='returnURL' id='returnURL' value='"+returnURL+"' />" +
                        "<input type='hidden' name='timeStamp' id='timeStamp' value='"+timeStamp+"' />" +
                        "<input type='hidden' name='displayAcceptedDocs' id='displayAcceptedDocs' value='"+displayAcceptedDocs+"' />" +
                        "<input type='hidden' name='encryptedData' id='encryptedData' value='"+encryptedData+"' />" +
                        "<input type='hidden' name='signature' id='signature' value='"+signature+"' />" +
                        "</form>";


      $("#wu-kyc-upload-document-container").html(formInner);  
      if ( document.dulform )
      {
        document.getElementById("dulform").target="duliframe";
        document.dulform.submit();
          
      }


}


//Black box data changes starts here
//Subscriber supplied variables for snare// Snare operation to perform
var io_operation = 'ioBegin';
var traceMessages = '';
var logMessages = '';
var io_trace_handler = '';//captureTraceMessages;
var bbdStored = false;
var globalblackboxdata="";
try {
    var io_bb_callback = function(bb, complete) {
        // globalblackboxdata=fullEscape(bb);
        globalblackboxdata=bb;
    };
} catch (err) {

}
// io_install_stm indicates whether the ActiveX object should be downloaded. The
// io_stm_cab_url
// should reference your signed local copy of the ActiveX object
var io_install_stm = false;
var io_exclude_stm = 12;
var io_install_flash = false;

  // make sure you change the cab URL to the location of your signed copy before releasing

var io_flash_needs_update_handler = "";
var io_install_flash_error_handler = "";

function fullEscape(value) {
    try {
        if (value && value.match(/[^a-z0-9]/i)) {
            var enc = '';
            for ( var i = 0; i < value.length; i++) {
                var ch = value.charAt(i);
                if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch >= '0' && ch <= '9') {
                    enc += ch;
                } else {
                    enc += '%' + ch.charCodeAt(0).toString(16).toUpperCase();
                }
            }
            return enc.toString();
        } else {
            return value;
        }
    } catch (err) {

        return value;
    }
}


function getGlobalBlackBoxData(){

    var blackBoxData = new Object();
    if(globalblackboxdata!==undefined && globalblackboxdata!=="")
    {
        blackBoxData['data'] =globalblackboxdata;
        blackBoxData["length"] = globalblackboxdata.length;    
    }else
    {
       blackBoxData=null;
    }


    return blackBoxData;
}

function PostWubs(requestedPage, returnPage) {

    //Check if log in
    var isLoggedIn = Clazz.WULocalStorage.getAccountNumber(); 
    if (isLoggedIn==null )
    {  
    	var gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
    	if (gatewayCustomer!=null && gatewayCustomer!=undefined)
    		{
    			if (gatewayCustomer.preferredCustomer!=null && gatewayCustomer.preferredCustomer!=undefined)
    			{
    				isLoggedIn = gatewayCustomer.preferredCustomer.accountNbr;  
    			}
    		}       
    }
    if(!isLoggedIn) {
        if('Pages/PaymentWizard/makePayment.aspx'===requestedPage) {
             Clazz.WULocalStorage.setIsWubs('true');
        }
       Clazz.WUNavigator.goToLoginPage();   
        return;
    } 
    
    //As part of WUBS March catch up added
    if ('Pages/PaymentWizard/makePayment.aspx'=== requestedPage && returnPage === '/price-estimator/start.html' && Clazz.WULocalStorage.getIsSWB()==="true") {
         Clazz.WULocalStorage.setIsFromWubsFlow('true');
        Clazz.WUNavigator.goToEstimatePricePage();
        return;
   }
      
    
    var returnUrl = document.location.origin + Clazz.WUNavigator.getBasePath();
    var errorUrl =  document.location.origin + Clazz.WUNavigator.getBasePath()+'online-fx-error.html';  
    
    //if document.location.origin==undefined assuming it is IE8 and above   
    if (document.location.origin==undefined)
    {  
    	returnUrl = window.location.protocol+"//"+window.location.host + Clazz.WUNavigator.getBasePath();
    	errorUrl =  window.location.protocol+"//"+window.location.host + Clazz.WUNavigator.getBasePath()+'online-fx-error.html';
    }      
    if( returnPage ) {
        returnUrl += returnPage;
    } else if('Pages/TransactionHistory.aspx'===requestedPage) {
        returnUrl += 'profile.html';
    } else if('Pages/RecipientList.aspx'===requestedPage) {
        returnUrl += 'profile.html';
    } else if('Pages/BankAccountsList.aspx'===requestedPage) {
        returnUrl += 'profile.html';
    } else if('Pages/TradeLimitSummary.aspx'===requestedPage) {
        returnUrl += 'profile.html';
    } else if('Pages/RecipetList.aspx'===requestedPage) {
        returnUrl += 'profile.html';
    } else if('Pages/PaymentWizard/makePayment.aspx'===requestedPage) {
        returnUrl += 'send-money/start.html';
    } else {
        returnUrl += 'home.html';
    }
    
    var wubsForm = 
        "<form action='action_url' name='wubsForm' id='wubsForm' method='post'>"
        +"<input type='hidden' name='AuthenticationToken' value='authentication_token' />"
        +"<input type='hidden' name='RequestedPage' value='requested_page' />"
        +"<input type='hidden' name='ReturnUrl' value='return_url' />"
        +"<input type='hidden' name='ErrorUrl' value='error_url' />"
        +"<input type='hidden' name='PreferredLocale' value='en-US' />"
        +"<input type='hidden' name='TransactionData' value='trxData' />"
        +"</form>";

    var wubsAPI = new Clazz.com.wu.api.WubsAPI();
    wubsAPI.doGetSsoPayLoad(
        function(response) {
        
            if((response.responseError && 'WUBS_UNAVAILABLE'==response.responseError.code) ||  response.responseError=='null' || !response.security) { 
                Clazz.WUNavigator.goToOnlieFXError();
            }else{
                var formFilled = wubsForm.replace('authentication_token', response.security.auth);    
                formFilled = formFilled.replace('action_url', response.actionUrl);
                formFilled = formFilled.replace('requested_page', requestedPage);
                formFilled = formFilled.replace('return_url', returnUrl); 
                formFilled = formFilled.replace('error_url', errorUrl); 

               if(returnPage && returnPage=='/price-estimator/start.html') {

                   var trxData = {};
                   var getCurrencyValue =$(".wu-ep-homescreen-estimator-input-money-content").find('a').text();
                   var originCurrency = (getCurrencyValue=='' || getCurrencyValue==null || getCurrencyValue==undefined)?Clazz.WULocalStorage.getWUBSEstimateFromCurrency():getCurrencyValue;

 				   var getDestinationCurrency =$("#wu-ep-currency-dropdown").find('option').attr('value');
                   var destinationCurrency = (getDestinationCurrency=='' || getDestinationCurrency==null || getDestinationCurrency==undefined)?Clazz.WULocalStorage.getWUBSEstimateToCurrency():getDestinationCurrency;                   
                   trxData['OriginCurrency']= originCurrency;
                   trxData['DestinationCurrency']= destinationCurrency;
                   trxData['PayIn'] = true;

                   var getAmount =Number($("#wu-ep-input-amount").text());  
                   var amount = (getAmount==0  || getAmount==null || getAmount==undefined)?Clazz.WULocalStorage.getWUBSEstimateAmount():getAmount;                   

                   trxData['Amount'] = amount;  
                   formFilled = formFilled.replace('trxData', JSON.stringify(trxData));  
                } else if('Pages/PaymentWizard/makePayment.aspx'===requestedPage) {
					var trxData = {};
	                   var getCurrencyValue =$("#currency-transfer").text();
	                   var originCurrency = (getCurrencyValue=='' || getCurrencyValue==null || getCurrencyValue==undefined)?Clazz.WULocalStorage.getWUBSEstimateFromCurrency():getCurrencyValue;

	 				   var getDestinationCurrency =$("#currency-receiver").text();
	                   var destinationCurrency = (getDestinationCurrency=='' || getDestinationCurrency==null || getDestinationCurrency==undefined)?Clazz.WULocalStorage.getWUBSEstimateToCurrency():getDestinationCurrency;                   
	                   trxData['OriginCurrency']= originCurrency;
	                   trxData['DestinationCurrency']= destinationCurrency;
	                   trxData['PayIn'] = true;

	                   var getAmount =Number($("#transferAmount").text());    
	                   var amount = (getAmount==null || getAmount==undefined || getAmount==0)?Clazz.WULocalStorage.getWUBSEstimateAmount():getAmount;                   

	                   trxData['Amount'] = amount;      
	                   formFilled = formFilled.replace('trxData', JSON.stringify(trxData));  
                } else if(sessionStorage.wubs_amount!==undefined && sessionStorage.wubs_amount!==null && sessionStorage.wubs_amount!==""){
                        var trxData = {};
                       var originCurrency = "USD";
                       var validateionResponset=JSON.parse(Clazz.WULocalStorage.getValidationResponse());
                       var destinationCurrency="";
                       if(validateionResponset!==undefined && validateionResponset.payment_details!==undefined && validateionResponset.payment_details.destination!==undefined) 
                       {
                         if(validateionResponset.payment_details.destination.currency_iso_code!==undefined) 
                         {
                              destinationCurrency=validateionResponset.payment_details.destination.currency_iso_code;
                         }
                       }                
                       trxData['OriginCurrency']= originCurrency;
                       trxData['DestinationCurrency']= destinationCurrency;
                       trxData['PayIn'] = true;

                       var getAmount =sessionStorage.wubs_amount;                   

                       trxData['Amount'] = amount;      
                       formFilled = formFilled.replace('trxData', JSON.stringify(trxData));  
                       delete sessionStorage["wubs_amount"];
                }else {
                   formFilled = formFilled.replace('trxData', ''); 
                }
                console.log('updated:'+formFilled);
                document.body.innerHTML += formFilled;
                document.getElementById("wubsForm").submit();
            }
        }, 
        function(error){
            Clazz.WUNavigator.goToOnlieFXError();
        }
    );

}


//Black box data changes ends here
Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUHome = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#home",
	__resourcePath : "Resource path.",
	resourcePath: null,
	__slideshow : "An instance of WUSlideshow.",
	slideshow: null,
	__promo : "An instance of WUPromo.",
	promo: null,
	__sendMoneyMini : "An instance of WUSendMoneyMini.",
	sendMoneyMini : null,
	__propertiesData : "Properties data.",
	propertiesData : null,
     
    initialize : function(config) {
		var IsLogOff = Clazz.WULocalStorage.getDoLogout();
        if(IsLogOff){
        	Clazz.WULocalStorage.clearAll();
        }
    	this.propertiesData = (config)?config.propertiesData:null;
    	this.slideshow =(config && config.sendMoneyMini)? config.slideshow : new Clazz.com.wu.widget.module.WUSlideshow();
    	this.sendMoneyMini = (config && config.sendMoneyMini)?config.sendMoneyMini:new Clazz.com.wu.widget.module.WUSendMoneyMini({
    		"propertiesData":this.propertiesData
    	});
    	this.promo = (config && config.promo)? config.promo : new Clazz.com.wu.widget.module.WUPromo();
    },

    postRender : function() {
    	this.sendMoneyMini.resourcePath = this.resourcePath;
    	this.slideshow.render();
    	this.promo.render();
    	this.sendMoneyMini.render();
    	Clazz.WULocalStorage.clearErrorResponse();
    	Clazz.WULocalStorage.clearDataInputField();
    	Clazz.WULocalStorage.clearSummaryObjects();
    	Clazz.WULocalStorage.clearIdentityData();
    	Clazz.WULocalStorage.clearVerificationData();
    	Clazz.WULocalStorage.clearValidationResponse();
    	Clazz.WULocalStorage.clearValidationRequest();
    	Clazz.WULocalStorage.clearSendMoneyObjects();
    	Clazz.WULocalStorage.clearSendMoneyInmate();
    	Clazz.WULocalStorage.clearReceiverInformation();
    	Clazz.WULocalStorage.clearFeeInqueryOptionData();
    	Clazz.WULocalStorage.clearKycObject();
    	Clazz.WULocalStorage.clearMtcObject();
    	Clazz.WULocalStorage.clearBankName();
    	Clazz.WULocalStorage.clearFreeInquiryRequest();
    	Clazz.WULocalStorage.clearTrackTransactionData();
		if(sessionStorage.AccountNumber)
          {
			Clazz.WULocalStorage.setlogin_status(true);
          }
          else
           {
                Clazz.WULocalStorage.setlogin_status(false);
           }
    	var sessionId = Clazz.WUCookies.getCookieSessionId();
    	if(sessionId){
    		this.onVerifiySession(sessionId);
    	}
    },
    
    __onVerifiySession : "Call verifiySession and handle error response.",
    onVerifiySession : function(sessionId){
    	var self = this;
    	var sessionAPI = new Clazz.com.wu.api.SessionAPI();
    	sessionAPI.verifiySession(this.getPostBodyVerifySession(sessionId), function(response){
    		if(response.error){
    			Clazz.WULocalStorage.clearAll();
    			Clazz.WUCookies.clearAll();
    			self.onCreateSessionId();
    		}
    	});
    },
    
    __onCreateSessionId : "Call createSession and show alert for error message.",
    onCreateSessionId : function(){
    	var self = this;
    	var sessionAPI = new Clazz.com.wu.api.SessionAPI();
    	sessionAPI.createSession(function(response){
    		if(response.error){
    			alert(response.error.message);
    		}
    	});
    },
    
    /*
	 * request body for verifiySession
	 */	
    __getPostBodyVerifySession : "request body for verifiySession ",
    getPostBodyVerifySession : function(sessionId){
    	var verifiySession = {};
    	var security = {};
    	var session = {};
    	session['id'] = sessionId;
    	security['session'] = session;
	security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
    	verifiySession['security'] = security;
    	return verifiySession;
    },
    
    __getSessionId : "Get session ID.",
	getSessionId : function(response){
		var session = response.security.session.id;
		return session;
	}
});

Clazz.createPackage('com.listener');

Clazz.com.listener.CookieManagementListener = Clazz.extend(Clazz.Base, {
	__wuMaskMain : "An instance of WuMaskMain.",
	wuMaskMain : null,
	managementCookies : null,
	__cookieManagementBar : "An instance of WUCookieManagementBar.",
	cookieManagementBar : null,
	__contentRenderMaskMain : "Selector of content render mask main.",
	contentRenderMaskMain : "#content-maskmain-cookies",
	__resourcePath : "Base path of templates.",
	resourcePath : null,
	__maskMainRender : "Selector of mask main render.",
	maskMainRender : "#frame-maskMain-cookies",

	initialize : function(config){
		this.resourcePath = (config)? config.resourcePath:null;
		this.cookieManagementBar = new Clazz.com.wu.widget.module.WUCookieManagementBar();
		this.wuMaskMain = new Clazz.com.wu.widget.module.WUMaskMain();
		this.cookieManagementSetting = new Clazz.com.wu.widget.module.WUCookieManagementSetting();
	},
	
	__managementBarRender : "Management bar render function.",
	managementBarRender : function() {
		this.cookieManagementBar.onManageCookiesClicked.add(this.settingCookies, this);
		this.cookieManagementBar.onShowManagemenCookie.add(this.showCookieSetting, this);
		this.cookieManagementBar.render("#cookies-management-bar-cointainer");
		this.hideCookieSetting();
	},
	
	__hideCookieSetting : "Hide cookie setting.",
	hideCookieSetting : function() {
		$(this.maskMainRender).hide();
	},
	
	__showCookieSetting : "Show cookie setting.",
	showCookieSetting : function() {
		$(this.maskMainRender).show();
		// go to the top page
		 $('body').scrollTop(0);
	},
	
	__settingCookies : "Setting cookies.",
	settingCookies: function(){
		this.cookieManagementSetting.closeButtonEvent.add(this.hideCookieSetting, this);
		this.cookieManagementSetting.closeButtonEvent.add(this.cookieManagementSetting.disablePerformance, this.cookieManagementSetting);
		this.cookieManagementSetting.onCookieBarSlideUp.add(this.cookieManagementBar.slideUpBar, this.cookieManagementBar);
		this.wuMaskMain.onPartialWidgetRender.removeAll();
		this.wuMaskMain.onPartialWidgetRender.add(this.cookieManagementSetting.render, this.cookieManagementSetting);
		this.wuMaskMain.setContentMaskMainSelector(this.contentRenderMaskMain);
		this.wuMaskMain.render(this.maskMainRender);

	},

});

Clazz.createPackage('com.listener');

Clazz.com.listener.GetDatabaseListener = Clazz.extend(Clazz.Base, {
	__databaseAPI : "An instance of DatabaseAPI.",
	databaseAPI : null,
	__nameDestinationCountryList : "Constant variable. The name of destination country list.",
	nameDestinationCountryList : "DESTINATION_COUNTRY_LIST",
	__clientVersionDestinationCountryList : "Constant variable.",
	clientVersionDestinationCountryList : "0",
	__extRefNo : "Constant variable.",
	extRefNo : "1",
	__nameDatabase : "Name of database.",
	nameDatabase : "",
	__clientVersion : "Client version.",
	clientVersion : "",

	initialize : function(config) {
		this.databaseAPI = new Clazz.com.wu.api.DatabaseAPI();
	},

	__onGetDestinationCountryList : "Handler of onGetDestinationCountryList.",
	onGetDestinationCountryList : function(requestBody, callbackFunction, errorCallback) {
		var sessionId = Clazz.WUCookies.getCookieSessionId();
		if(sessionId == null){
			this.executeToCreateSession(requestBody, callbackFunction, errorCallback);
		}
		else{
			var security = requestBody.security;
			security.session.id = sessionId;
			this.databaseAPI.doGetDatabase(requestBody, function(response) {
				if (response.error){
					if (response.error.code === "C5000"){
						self.executeToCreateSession(requestBody, callbackFunction, errorCallback);
					}
					else{
						callbackFunction(response);
					}
				} else {
					callbackFunction(response);
				}
			}, function(error){
				if(errorCallback){
					errorCallback(error);
				}
			});
		}
	},
	
	onGetLanguageList : function(requestBody, callbackFunction, errorCallback) {
		this.databaseAPI.doGetDatabase(requestBody, function(response) {
			if (response.error){
				if (response.error.code === "C5000"){
					self.executeToCreateSession(requestBody, callbackFunction, errorCallback);
				}
				else{
					callbackFunction(response);
				}
			} else {
				callbackFunction(response);
			}
		}, function(error){
			if(errorCallback){
				errorCallback(error);
			}
		});
	},

	__onGetCountryPhoneCode : "Handler of onGetCountryPhoneCode.",
	onGetCountryPhoneCode : function(requestBody, callbackFunction, errorCallback) {
		var countryPhoneList = JSON.parse(Clazz.WULocalStorage.getCountryPhoneCode());
		if(countryPhoneList){
			callbackFunction(countryPhoneList);
		}else{
			var self = this;
			this.nameDatabase = "INTL_DIALING_PREF_LIST";
			var postBody = this.getDatabasePostBodyRequest();
			this.databaseAPI.doGetDatabase(postBody, function(response) {
				if (response.error){
					callbackFunction(null);
				} else {
					var countryPhoneCodeData = self.filterCountryPhoneCode(response.database.records.record);
					Clazz.WULocalStorage.setCountryPhoneCode(JSON.stringify(countryPhoneCodeData));
					callbackFunction(countryPhoneCodeData);
				}
			}, function(error){
				if(errorCallback){
					errorCallback(error);
				}
			});
		}

	},
	
	__filterCountryPhoneCode : "Filtering Country Phone Code to Europe & Universal.",
	filterCountryPhoneCode : function(data) {
		var resultUniversal = [];
		var resultEurope = [];
		for(var i=0;i<data.length;i++) {
			resultUniversal.push(data[i]);
			var isEuropeRegion = data[i] && data[i].CONTINENT_CODE && data[i].CONTINENT_CODE.toLowerCase() === "eu";
			if(isEuropeRegion) {
				resultEurope.push(data[i]);
			}
		}
		
        return {
			"EU" : { 
				"record" : resultEurope
			},
			"universal" : { 
				"record" : resultUniversal
			},
		};
	},

	__onGetDatabase : "Handler of onGetDatabase.",
	onGetDatabase : function(data, callbackFunction, errorCallback) {
		this.nameDatabase = data.nameDatabase;
		this.clientVersion = data.clientVersion;
		this.extRefNo = (data.extRefNo)?data.extRefNo:this.extRefNo;
		var requestBody = this.getDatabasePostBodyRequest();
		var sessionId = Clazz.WUCookies.getCookieSessionId();
		if(sessionId == null){
			this.executeToCreateSession(requestBody, callbackFunction, errorCallback);
		}
		else{
			this.databaseAPI.doGetDatabase(requestBody, function(response) {
				if (response.error){
					if (response.error.code === "C5000"){
						self.executeToCreateSession(requestBody, callbackFunction);
					} else {
						callbackFunction(response);
					}
				} else {
					callbackFunction(response);
				}
			}, function(error){
				if(errorCallback){
					errorCallback(error);
				}
			});
		}
	},
	
	__executeToCreateSession : "To create session",
	executeToCreateSession : function(postbody, callbackFunction, errorCallback){
		var self = this;
		var sessionAPI = new Clazz.com.wu.api.SessionAPI();
		sessionAPI.createSession(function(response) {
			if(response.security){
				//update session id for request body of get currency service
				var sessionId = self.getSessionId(response);
				var security = postbody.security;
				security.session.id = sessionId;
				self.databaseAPI.doGetDatabase(postbody, function(response) {
					callbackFunction(response);
				}, function(error){
					if(errorCallback){
						errorCallback(error);
					}
				});
			}else{
				callbackFunction(response);
			}
		}, function(error){
			if(errorCallback){
				errorCallback(error);
			}
		});
	},

	/** start get database post body request **/
	__getDatabasePostBodyRequest : "Get database post body request. Including security, database, external_reference_no.",
	getDatabasePostBodyRequest : function(){
		var postBodyDatabase = {};
		postBodyDatabase['security'] = this.getSecurityDatabase();
		postBodyDatabase["database"] = this.getDatabase();
		postBodyDatabase['external_reference_no'] = this.extRefNo;
		return postBodyDatabase;
	},

	__getSecurityDatabase : "Get security database. Including session, client_ip.",
	getSecurityDatabase : function(){
		var security = {};
		security["session"] = this.getSecurityIdDatabase();
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		return security;
	},

	__getSecurityIdDatabase : "Get security id database. Including id.",
	getSecurityIdDatabase : function() {
		var id = {};
		id["id"] = Clazz.WUCookies.getCookieSessionId();
		return id;
	},

	__getDatabase : "Get database. Including info.",
	getDatabase : function() {
		var database = {};
		database["info"] = this.getInfoDatabase();
		return database;
	},

	__getInfoDatabase : "Get info database. Including name, client_version.",
	getInfoDatabase : function() {
		var info = {};
		info["name"] = (this.nameDatabase)? this.nameDatabase : '';
		info["client_version"] = (this.clientVersion)? this.clientVersion : '';
		return info;
	},
	/** end get database post body request **/

	__getSessionId : "Get session id.",
	getSessionId : function(response){
		var session = response.security.session.id;
		return session;
	}
});

Clazz.createPackage('com.listener');

Clazz.com.listener.LoginListener = Clazz.extend(Clazz.Base, { 
	__sessionAPI : "An instance of SessionAPI.",
	sessionAPI : null,
	__loginAPI : "An instance of LoginAPI.", 
	loginAPI : null,
	__sessionId : "Session id.",
	sessionId : null,
	__loginRequestBody : "Request body of login.",
	loginRequestBody : null,
	__login : "An instance of WULogin.",
	login : null,
	__onGetDatabaseEvent : "Signal for onGetDatabaseEvent event.",
	onGetDatabaseEvent : null,
	__resourcePath : "Resource path.",
	resourcePath : null,
	__propertiesData : "Properties data.",
	propertiesData : null,
	__onSendAgainPageEvent : "Signal for onSendAgainPageEvent event.",
	onSendAgainPageEvent : null,
	__siteBehavior : "An instance of SiteBehavior.",
	siteBehavior: null,//sitebehavior
	
	__pageSendMoneyName : "Name of send money page.",
	pageSendMoneyName : 'sending_money',
	__pagePaybillsName : "Name of pay bills page.",
	pagePaybillsName : 'pay_bills',
	__pagePaybillsInmateName : "Name of pay bills inmate page.",
    pagePaybillsInmateName : 'pay_bills_inmate',
    __pageInmateName : "Name of inmate page.",
	pageInmateName : 'inmate',
	__propertiesData: "Properties Data",
	propertiesData : null,

	//Added by HCL for Register Infosec PCF Start
	__captchaAPI : "An instance of SessionAPI.",
	captchaAPI : null,
	//Added by HCL for Register Infosec PCF End


	initialize : function(config){
		if(config){
			this.login = config.login;
			this.propertiesData = config.propertiesData;
		}
		this.sessionAPI = new Clazz.com.wu.api.SessionAPI();
		this.onGetDatabaseEvent = new signals.Signal();
		this.onSendAgainPageEvent = new signals.Signal();
		this.siteBehavior = new Clazz.com.wu.util.SiteBehavior();//sitebehavior
		this.resourcePath = config.resourcePath;
	},

	__onRegisterEvent : "Handler of onRegisterEvent.",
	onRegisterEvent : function(){
		var self = this;
		if (Clazz.WUCookies.getCookieSessionId() === null){
			this.sessionAPI.createSession(function(response){
				if(response.error){
					var alertData = {"error":{"message":response.error.message, "code": ""}};
					var data = {
							response: alertData.error
					};
					
					self.setErrorMessageAlert(data);
				}
				else if(response.security){
					Clazz.WUNavigator.goToRegisterPage();
				}
			});
		}
		else{
			Clazz.WUNavigator.goToRegisterPage();
		}
	},

	__onLoginClicked : "Handler of onLoginClicked.",
	onLoginClicked : function(credential,container,captcha,captchaContainer, callback){
		var self = this;


	//Added by HCL for Register Infosec PCF Start			

        if($('#radioButton1').is(':checked')){

            if($("#error-msg-username").is(':visible')){

				this.disableContinueButton();
                $("#wu_register_captcha_text").val("");
                captchaWidget.refreshCaptcha();
            }
            else{ 
            	
            /*commented for HQW-2784
              //  To validate captcha
            var sessionId = Clazz.WUCookies.getCookieSessionId();
            var captchaWidget = new Clazz.com.wu.widget.module.WUCaptcha({isRequest:false});
            var captchaAPI = new Clazz.com.wu.api.CaptchaAPI();
            var captchaPostBody = {security:{session:{id:sessionId}, captcha:{image:captchaWidget.imageBinary, answer:captchaWidget.getAnswer()}}};

            captchaAPI.doValidateCaptcha(captchaPostBody, function(validateCaptchaResponse){
				if(validateCaptchaResponse.error){
					   //Added by HCL for RINTL-18564
                	   Clazz.WULocalStorage.clearEmail();
				       if(validateCaptchaResponse.security){
						var imgCaptcha = validateCaptchaResponse.security.captcha.image;
						var soundCaptcha = validateCaptchaResponse.security.captcha.sound;
						Clazz.WULocalStorage.setCaptchaImage(imgCaptcha);
						Clazz.WULocalStorage.setCaptchaAudio(soundCaptcha);
						captcha.updateCaptchaImage(imgCaptcha);
						captcha.updateCaptchaAudio(soundCaptcha);
						captcha.setErrorAnswer();
                        $('#captcha-div').show();
						var data = {
							response: validateCaptchaResponse.error
					  }

					self.setErrorMessageAlert(data);
                    Clazz.SiteBehavior.toggleFlag=false;
					captchaWidget.setErrorAnswer();
                    }
					captchaWidget.refreshCaptcha();
				} else if (validateCaptchaResponse.captcha){

                    $("#wu_register_captcha_text_error").removeClass("display-none");
                    $("#wu_register_captcha_text").addClass("error");
                    $("#wu-captcha").parent().eq(0).find('label span').css('color', '#cc1b21');

                    captcha.setErrorAnswer();
                    captchaWidget.updateCaptchaImage(validateCaptchaResponse.captcha.image);
					var captcha_error=self.propertiesData && self.propertiesData.captcha_error_tittle?	self.propertiesData.captcha_error_tittle:"Please re-enter the security code exactly as it appears in the box.";
					var data = {"response":{"code":"C5127","message":captcha_error,"cqErrorCode":"CQW1583"}}; 
					self.setErrorMessageAlert(data);

					// if email label shows error, remove error label
                    $('.wu-login-textbox').removeClass("wu-error-login-box");
                    $('.wu-login-label').removeClass("error");


				} else if (validateCaptchaResponse.validateCaptha && validateCaptchaResponse.validateCaptha.isSuccess) {
*/

                    // validate email
                    self.loginAPI = new Clazz.com.wu.api.LoginAPI();
                    var captchaWidget = new Clazz.com.wu.widget.module.WUCaptcha({isRequest:false});

                    var requestBody = {};
                    var session = {};
                    var security = {};

                    var email1 = $("#wu-username-textbox").val();
                    session["id"] = Clazz.WUCookies.getCookieSessionId();
                    security["session"] = session;
                    
                    // HQW-2784
                    security["captcha"] = {answer:captchaWidget.getAnswer()};
                    //RR-4794
                    security["version"] = "2";
                    requestBody["email"] = email1;
                    requestBody["security"] = security;
                    self.loginAPI.doEmailCheck(requestBody,function(responseValidation){	
                        // Email doesn't exist in DB.
                        if(responseValidation.error.code === "C6017"){
                            // Redirect to Register Page
                            if(Clazz.WULocalStorage.getLastPage() === "sendMoneyLogin.html"){
	                           Clazz.WUNavigator.goToSendMoneyRegister();
                            }
                            else{
                               Clazz.WUNavigator.goToRegisterPage();
                            }
                        }

                        // Email already exist in DB.
                        else if(responseValidation.error.code === "C1052"){
                        	//Added by HCL for RINTL-18564
                        	Clazz.WULocalStorage.clearEmail();
                            captchaWidget.refreshCaptcha();
                            $("#wu_register_captcha_text").val("");

        						var alertData = {
									"response" : {
										message : responseValidation.error.message,
										code : "C1052 "
									}
								};
       		 					var wuAlert = new Clazz.com.wu.widget.module.WUAlert({
									resourcePath: self.resourcePath,
									data: alertData
								});
                            	self.setErrorMessageAlert(alertData);

                            $('.wu-login-textbox').addClass("wu-error-login-box");
                            $('.wu-login-label').addClass("error");

                            wuAlert.templateUrl = self.resourcePath + ".alert-template.html";
                            wuAlert.render();                            
                        }
						else if(responseValidation.error.code === "C1011"){
							//Added by HCL for RINTL-18564
                        	Clazz.WULocalStorage.clearEmail();
                            captchaWidget.refreshCaptcha();
                            $("#wu_register_captcha_text").val("");

                            var data = {"response":{"code":"C1011","message":"Please check your email address or username and password and try logging in again. If you have forgotten your password, click Forgot your password?.","cqErrorCode":"CQW1583"}}; 
                            self.setErrorMessageAlert(data);

                            $('.wu-login-textbox').addClass("wu-error-login-box");
                            $('.wu-login-label').addClass("error");
                        }
                        //added for HQW-2784
						else if(responseValidation.error.code === "C5127"){
                        	
                        	  $("#wu_register_captcha_text_error").removeClass("display-none");
                              $("#wu_register_captcha_text").addClass("error");
                              $("#wu-captcha").parent().eq(0).find('label span').css('color', '#cc1b21');
                              Clazz.WULocalStorage.clearEmail();
                              captcha.setErrorAnswer();
                              captcha.updateCaptchaImage(responseValidation.security.captcha.image);
                              captcha.updateCaptchaAudio(responseValidation.security.captcha.sound);
          						var captcha_error=self.propertiesData && self.propertiesData.captcha_error_tittle?	self.propertiesData.captcha_error_tittle:"Please re-enter the security code exactly as it appears in the box.";
          						var data = {"response":{"code":"C5127","message":captcha_error,"cqErrorCode":"CQW1583"}}; 
          						self.setErrorMessageAlert(data);

          						// if email label shows error, remove error label
                              $('.wu-login-textbox').removeClass("wu-error-login-box");
                              $('.wu-login-label').removeClass("error");                     	
                        }
                    });
				//}
			//});
          }
        }else{

	    // Added by HCL for Register Infosec PCF End			


            this.sessionId = credential.security.session.id;
            if (Clazz.WUCookies.getCookieSessionId() === null){
                this.sessionAPI.createSession(function(response){
                    if(response.error){
                        var data = {
                                response: response.error
                        };
                        
                        self.setErrorMessageAlert(data);
                    }
                    else if (response.security){
                        self.sessionId = self.getSessionId(response);
                        self.requestLogin(credential, container, self.sessionId, captcha, captchaContainer);              
                    }
                });
            }else{
                this.requestLogin(credential, container, this.sessionId, captcha, captchaContainer, callback);
                
            }
      }
	},
	
	__setErrorMessageAlert : "Show alert for error response.",
	setErrorMessageAlert : function(data, emailVerificationData, propertiesData, renderContainer){
		var wuAlert = new Clazz.com.wu.widget.module.WUAlert({
			resourcePath: this.resourcePath,
			data : data,
			propertiesData : this.propertiesData
		});
		
		wuAlert.templateUrl = this.resourcePath + ".alert-template.html";
		
		if(emailVerificationData){
			wuAlert.emailVerificationData = emailVerificationData;
		}
		
		if(propertiesData){
			wuAlert.propertiesData = propertiesData;
		}
		
		if(renderContainer){
			wuAlert.render(renderContainer);
		}else{
			wuAlert.render();
		}
	},

	__requestLogin : "Call doLogin and handle response.",
	requestLogin : function(credential, container, sessionId, captcha, captchaContainer, callback){
		var self = this;
		self.loginRequestBody = credential;
		self.loginRequestBody.security.session.id = sessionId;
		self.loginAPI = new Clazz.com.wu.api.LoginAPI();
		self.loginAPI.doLogin(self.loginRequestBody, function(response){
			if(response.error){
				 if(Clazz.WUNavigator.isInMobilePage()){

						$('.wum-eye-button').removeClass('show-eye');
						document.getElementById("wu-password-textbox").setAttribute('type','password');
						this.isClickEye = true;

		             }

				//DTM call - start
				DTM_Trigger("DTM-LOGIN-FAIL",response.error.code);
				 //DTM call end
				self.siteBehavior.addError("LoginPageErrors", response.error.code); //sitebehavior
				self.login.clearPassword();
				Clazz.WULocalStorage.setResponse(JSON.stringify(response));
				if(response.error.code === "C1124"){
					sessionStorage.setItem("dtm_login_activate_success", 'true');
					var emailAddress = response.gatewayCustomer.email;
					var password = self.loginRequestBody.gateway_customer.identities.identity[0].data;
					if(container === "#login"){
						var data = {
							response: response.error
						};
						
						/** check the container for otp */
						var summaryObjects = (Clazz.WULocalStorage.getSummaryObjects())?JSON.parse(Clazz.WULocalStorage.getSummaryObjects()) : "";
						var currentContainer = summaryObjects? '#wu-login-sendmoney-content' : '#login-container' ;
						if(Clazz.WUNavigator.isInMobilePage()){
							currentContainer = '#login-page' ;
						}
						
						var emailVerificationData = {
								emailAddress: emailAddress,
								password: password,
								container: currentContainer
						};
						var emailVerificationResponseData = {
								data : data,
								emailVerificationData : emailVerificationData
						};
						Clazz.WULocalStorage.setEmailVerificationData(JSON.stringify(emailVerificationResponseData));
						
						Clazz.WULocalStorage.clearAccountNumber();
						self.setErrorMessageAlert(data, emailVerificationData, self.propertiesData,"#alert-container");
						
						$("#summary_edit_smo").hide();
					}
					else if (container === "#content-maskmain"){
						Clazz.WULocalStorage.setEmail(emailAddress);
						Clazz.WULocalStorage.setPassword(password);
						Clazz.WUNavigator.goToLoginPage();
					}
				}
				else if(response.error.code === "C1131"){
					if(container === "#login"){
						if(response.security && response.security.captcha !== null){
							var imgCaptcha = response.security.captcha.image;
							var soundCaptcha = response.security.captcha.sound;
							captcha.updateCaptchaImage(imgCaptcha);
							captcha.updateCaptchaAudio(soundCaptcha);
							Clazz.WULocalStorage.setCaptchaImage(imgCaptcha);
							Clazz.WULocalStorage.setCaptchaAudio(soundCaptcha);
							captcha.render();
							$(captchaContainer).show();

					        // Added by HCL for Register Infosec PCF Start			
                            $('#captcha-div').show();
	         			   // Added by HCL for Register Infosec PCF End		

						}
						var data = {
								response: response.error
						}
						
						self.setErrorMessageAlert(data);
					}
					else if (container === "#content-maskmain"){
						Clazz.WULocalStorage.setEmail(self.loginRequestBody.gateway_customer.email);
						if(response.security && response.security.captcha !== null){
							Clazz.WULocalStorage.setImgCaptcha(response.security.captcha.image);
						} else {
							Clazz.WULocalStorage.setEmail(self.loginRequestBody.gateway_customer.email);
						}
						Clazz.WUNavigator.goToLoginPage();
					}
				} else if(response.error.code === "C1133" || response.error.code === "C1139"){
					Clazz.WULocalStorage.setErrorResponse(JSON.stringify(response.error));
					if(Clazz.WUNavigator.isInMobilePage()){
						Clazz.WULocalStorage.setAccountNumber(response.gatewayCustomer.preferredCustomer.accountNbr);
						var gatewayCustomer = response.gatewayCustomer;
						Clazz.WULocalStorage.setGatewayCustomer(JSON.stringify(gatewayCustomer));
						self.renderMobileInterstitialPage(response);
					}else{
						self.successLogin(response, $.proxy(Clazz.WUNavigator.goToInterstitialPage, Clazz.WUNavigator));
					}
				} else if(response.error.code === "C5127"){ 
					if(response.security && response.security.captcha !== null){
						var imgCaptcha = response.security.captcha.image;
						var soundCaptcha = response.security.captcha.sound;
						Clazz.WULocalStorage.setCaptchaImage(imgCaptcha);
						Clazz.WULocalStorage.setCaptchaAudio(soundCaptcha);
						captcha.updateCaptchaImage(imgCaptcha);
						captcha.updateCaptchaAudio(soundCaptcha);
						captcha.setErrorAnswer();
						//RTHREE-5637


	    // Added by HCL for Register Infosec PCF Start			
						$(captchaContainer).show();
                        $("#wu_register_captcha_text").addClass("error");
                        $('#captcha-div').show();
	    // Added by HCL for Register Infosec PCF End			


					}
					var data = {
							response: response.error
					}
					
					self.setErrorMessageAlert(data);
				}else if(response.error.code === "C1142"){
					//RINTL-5351
					//this condition will handle the cross country redirection
				     var data = {
								response: response.error
						}
						
						self.setErrorMessageAlert(data);
                 if(response.gatewayCustomer!==undefined && response.gatewayCustomer.address!==undefined  && response.gatewayCustomer.address.countryIsoCode!==undefined)
                    {
                     	Clazz.wuSpinner.show();
                     	var userCountryIsoCode=response.gatewayCustomer.address.countryIsoCode;
                    	//redirect the user to the appropriate country
                        //var cvvi_code= sessionStorage.getItem("cvvCode");
                         setInterval(function(){
                         	localStorage.clear();
                        	sessionStorage.clear();
                            Clazz.WUCookies.clearAll();
    	                 	Clazz.WUNavigator.goToCrossCountryRedirection(userCountryIsoCode,null);
                          }, 5000);
						
                    } 
				} else {
					if(response.error.code === "C5000"){
						var basePath = Clazz.WUNavigator.basePath;
						basePath = basePath.substring(0, basePath.length - 1);
						Clazz.WUCookie.clearCookieSessionId(basePath, null);
					}
					if(container === "#login"){
						$("#wu_register_captcha_text").val("");
						var data = {
								response: response.error
						}
						
						self.setErrorMessageAlert(data);
					}
					else if (container === "#content-maskmain"){
						Clazz.WULocalStorage.setEmail(self.loginRequestBody.gateway_customer.email);
						Clazz.WUNavigator.goToLoginPage();
					}
				}
				if(Clazz.WUNavigator.isInMobilePage()){
					callback(response);
				}
			}else{
				self.successLogin(response);
			}
		}, function(error){
			if(Clazz.WUNavigator.isInMobilePage()){
				var data = {};
				data.message = error;
				Clazz.WUPopup.showPopUp(data);	
			} else {
				if(error){
				var data = {
								response: error
					}
					self.setErrorMessageAlert(data)
					
				}				
			}
		});
		if(!Clazz.WUNavigator.isInMobilePage()){
			$("#wu_register_captcha_text").val("");
		}
	},
	
	//abstract class for mdot override this to use it in mdot
	//method to render migration page in mdot
	__renderMobileInterstitialPage : "Abstract class for mdot override this to use it in mdot. Method to render migration page in mdot.",
	renderMobileInterstitialPage : function(response){},

	__successLogin : "Handler of success login.",
	successLogin : function(response, callback){
        var self = this;				
		//DTM call when login success - start
		DTM_Trigger("DTM-LOGIN-SUCCESS",true);
		//DTM call - end
		sessionStorage.setItem("existingUserFlag","Y");
		 this.siteBehavior.referrerDomain();
         this.siteBehavior.fullRequestUrl();   
		var imgCaptcha = Clazz.WULocalStorage.getImgCaptcha()? Clazz.WULocalStorage.getImgCaptcha() : "";
		if (imgCaptcha){
			Clazz.WULocalStorage.clearImgCaptcha();
		}
		if(response && response.gatewayCustomer && response.gatewayCustomer.name){
		Clazz.WULocalStorage.setFirstName(response.gatewayCustomer.name.firstName);
		Clazz.WULocalStorage.setLastName(response.gatewayCustomer.name.lastName);
		}
		var gatewayCustomer = response.gatewayCustomer;
		Clazz.WULocalStorage.setGatewayCustomer(JSON.stringify(gatewayCustomer));
		if(response && response.gatewayCustomer && response.gatewayCustomer.preferredCustomer){
		Clazz.WULocalStorage.setAccountNumber(response.gatewayCustomer.preferredCustomer.accountNbr);
		}
		Clazz.WULocalStorage.setEmail(response.gatewayCustomer.email);
		Clazz.WULocalStorage.setIsSWB(response.isSWB);
		
		//set customer message used for mobile overview intl
		if(Clazz.WUNavigator.isInMobilePage()){
        	var countryCode = Clazz.WUNavigator.getSenderCountryFromURL();
        	if(countryCode.toUpperCase() != "US"){
        		 var message = (response.message)?response.message:null;
        	     Clazz.WULocalStorage.setCustomerMessage(JSON.stringify(message));
        	}
        }
		
		if(Clazz.WUNavigator.isInMobilePage() && !response.gatewayCustomer.mobilePhone){
			this.renderMobileInterstitialPage(response);
			//DTM Mdot Event call - start
			DTM_Trigger('DTM-ENTER-MOBILE','enter-mobile'); 
			//DTM Event call - end
		}else{
			/** check termsConditionFlag & firstLoginFlag - navigate to interstitial page*/
			var termsandconditionobjects = (Clazz.WULocalStorage.getGatewayCustomer())?JSON.parse(Clazz.WULocalStorage.getGatewayCustomer()) : "";	
			if(!Clazz.WUNavigator.isInMobilePage() && (termsandconditionobjects.termsConditionFlag == 0 || termsandconditionobjects.termsConditionFlag == "null") && (termsandconditionobjects.r3Login ==0 || termsandconditionobjects.r3Login == "null")) 		
	        {
	        	if(termsandconditionobjects.r3Login == "null"){
					termsandconditionobjects.r3Login ="0";
	                Clazz.WULocalStorage.setGatewayCustomer(JSON.stringify(termsandconditionobjects));
	            }
	            Clazz.WUNavigator.goToTermsAndConditions();
	            return;
	        }



			var countryIsoCode = gatewayCustomer && gatewayCustomer.address && gatewayCustomer.address.countryIsoCode ? 
					gatewayCustomer.address.countryIsoCode : null;
			Clazz.WULocalStorage.setCountryIsoCode(countryIsoCode);

			
			/** get response from send money flow */
			var summaryObjects = (Clazz.WULocalStorage.getSummaryObjects())?JSON.parse(Clazz.WULocalStorage.getSummaryObjects()) : "";
			
			var GetGatewayCustomerObj= (Clazz.WULocalStorage.getGatewayCustomer())?JSON.parse(Clazz.WULocalStorage.getGatewayCustomer()) : "";
			var goldCardAPI = new Clazz.com.wu.api.GoldCardAPI();
			/*Commented for Multiple time GetLoyalty Call made*/
			goldCardAPI.doGetLoyaltyCardsmodule(this.getGoldCardRequestBody(GetGatewayCustomerObj), function(response) {
				if(!$.isEmptyObject(response) && !response.error){
						Clazz.WULocalStorage.setGetLoyaltyCardsResponse(JSON.stringify(response));
				}
				/** set countryList to Local Storage */
				if(!(Clazz.WULocalStorage.getDestinationCountryListMobile())){
					if(!callback){
						callback = function(){
							self.goToNextPage(summaryObjects);
						};
					}
					self.setCountryListFromDatabase(callback);
				}else{
					self.goToNextPage(summaryObjects);
				}
			/*Commented for Multiple time GetLoyalty Call made*/
			});
			/** set countryList to Local Storage */
		}
	},

	__onForgotPasswordClicked : "Handler of onForgotPasswordClicked.",
	onForgotPasswordClicked : function(container){
		if (Clazz.WUNavigator.isInMobilePage()) {
			sessionStorage.setItem("forgotPasswordFlag", "Y");
			Clazz.WUNavigator.goToForgotPasswordPage();
		}else{
            sessionStorage.setItem("forgotPasswordFlag", "Y");
            Clazz.WULocalStorage.setForgotloginflow('true');
            Clazz.WUNavigator.goToResetPasswordPage();
		}
	},
	
	__getGoldCardRequestBody : "Get gold card request body. Including security, gateway_customer.",
	getGoldCardRequestBody : function(CustomerObj){
		var goldCardrequestBody = {};
		goldCardrequestBody['security']= this.getSecurity();
        goldCardrequestBody["gateway_customer"] = this.getGatewayCustomerRequestBody(CustomerObj);          
		return goldCardrequestBody;
	},
	__getGatewayCustomerRequestBody : "Get gateway customer request body. Including preferred_customer.",
    getGatewayCustomerRequestBody:function(res){
         	var self=this;
	        var requestBody={};
          	requestBody["preferred_customer"] = {};            
			requestBody["preferred_customer"]['account_nbr'] =res.preferredCustomer.accountNbr;
        	return requestBody;
    },

    __getSecurity : "Get security. Including id, session, client_ip.",
	getSecurity : function(){
		var security = {};
		var session = {};
		session['id'] = Clazz.WUCookies.getCookieSessionId();
		security['session'] = session;
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		return security;
	},
	
	__goToNextPage : "Go to next page.",
	goToNextPage : function(summaryObjects){
		var self = this;
		var overviewListener = new Clazz.com.listener.OverviewListener();
		Clazz.WULocalStorage.clearIsFromTrackTransferSendAgain();
		//As part of March catchup added.
		var forwubs = (summaryObjects && summaryObjects.hasOwnProperty("isWUBSExchange") && summaryObjects.isWUBSExchange);
	     if(!forwubs) {
	          forwubs = (Clazz.WULocalStorage.getIsWubs() === "true");
	     }
	     
	     Clazz.WULocalStorage.setIsWubs('false');//reset flag

	     if(Clazz.WULocalStorage.getIsSWB()==="true" && (forwubs || Clazz.WULocalStorage.getIsFromEstimatePriceAndSwb())){
	            //TODO : add alert or go to appropriate page
	            //Clazz.WUNavigator.goToOnlieFXError();
	            Clazz.WULocalStorage.setIsFromWubsFlow('true');
	            if(!summaryObjects) {
	                Clazz.WUNavigator.goToEstimatePricePage();
	                return;
	            }

		}
		if(forwubs) {
	         PostWubs('Pages/PaymentWizard/makePayment.aspx');
	         return;
		}
		
		if(!summaryObjects){
			var trackTransactionData = (Clazz.WULocalStorage.getTrackTransactionData())?JSON.parse(Clazz.WULocalStorage.getTrackTransactionData()) : "";
			var storedResponse=Clazz.WULocalStorage.getErrorResponse();
			var navResponse = null;
			if(storedResponse){
				navResponse = JSON.parse(storedResponse);
			}
			if(Clazz.WUNavigator.isInThisMobilePage("login.html") || Clazz.WUNavigator.isInThisMobilePage("home.html")){
				overviewListener.getCustomerVerificationStatusEvent(function(response) {
					Clazz.WULocalStorage.setCustomerVerificationStatus(JSON.stringify(response));
					if (!response.message){
						Clazz.WUNavigator.goToProfileMobilePage();
					}else{
						var deliveryOptionMobile = Clazz.WULocalStorage.getDeliveryOptionMobile();
						var sendmoneyOptionMobile = Clazz.WULocalStorage.getIsFromSendMoneyOption();
						var payBillMobile = Clazz.WULocalStorage.getIsFromPayBillMobile();
						var inmateMobile = Clazz.WULocalStorage.getIsFromInmateMobile();
						var optionStatus = Clazz.WULocalStorage.getOptionStatus();
						
						sendmoneyOptionMobile = sendmoneyOptionMobile == "true"? true : false;
						if(deliveryOptionMobile){
							Clazz.WUNavigator.goToSendMoneyReceiverPage();
						}else if(sendmoneyOptionMobile){
							Clazz.WULocalStorage.setMobileLastPage("sendAgentLocation");
							Clazz.WUNavigator.goToSendMoneyAgentLocationMobilePage();
						}else if(payBillMobile){
							Clazz.WUNavigator.goToSendMoneySaveBillerMobile();
						}else if(inmateMobile){
							Clazz.WUNavigator.goToInmateSaveFacilityMobile();
						}else if(optionStatus == "estimatePayBill"){
							Clazz.WUNavigator.goToPayBillLandingMobile();
						}else if(optionStatus == "estimateInMate"){
							Clazz.WUNavigator.goToInmateLandingMobile();
						}else{
							Clazz.WUNavigator.goToProfileMobilePage();
						}
					}
				});
				
			}
			else if(trackTransactionData || trackTransactionData !== ""){
				this.onSendAgainPageEvent.dispatch();
			}
			else if(navResponse && navResponse.code === "C1133"){
				Clazz.WUNavigator.goToInterstitialPage();
			}else{
				Clazz.WUNavigator.goToProfilePage();
			}
		}else{
			/* check whether the user have a pending transaction */
			overviewListener.getCustomerVerificationStatusEvent(function(response) {
				Clazz.WULocalStorage.setCustomerVerificationStatus(JSON.stringify(response));
				if (!response.message){
					if(Clazz.WUNavigator.isInThisMobilePage("login.html") || Clazz.WUNavigator.isInThisMobilePage("home.html")){
						Clazz.WUNavigator.goToProfileMobilePage();
					} else {
						//RINTL-2377 save send money summary data to local storage if user hasn't pending transaction
						Clazz.WULocalStorage.clearSummaryObjects();
						Clazz.WUNavigator.goToProfilePage();
					}
				} else {
					// go to next page by page name access
					if(summaryObjects.type == self.pageSendMoneyName){
						if(summaryObjects.hasOwnProperty("isWUBSExchange") && summaryObjects.isWUBSExchange){
							PostWubs('Pages/PaymentWizard/makePayment.aspx');
						}else{
							self.checkUserPayoutAvailable(summaryObjects);
						}
					}else if(summaryObjects.type == self.pagePaybillsName) {
						Clazz.WUNavigator.goToRequiredBillerInformationPage();
					}else if(summaryObjects.type == self.pageInmateName){
						Clazz.WUNavigator.goToSendMoneyInmateReceiverInfo();
					}else if(summaryObjects.type == self.pagePaybillsInmateName){
						Clazz.WUNavigator.goToSendMoneyInmateReceiverInfo();
					}
				}
			});
		}
	},
	
	__onForgotPasswordClickedMobile : "Handler of onForgotPasswordClickedMobile.",
	onForgotPasswordClickedMobile : function() {
		Clazz.WUNavigator.goToForgotPasswordPage();
	},
	
	__setCountryListFromDatabase : "Set country list from database.",
	setCountryListFromDatabase : function(callback) {
		var self=this;
		var data = {
				nameDatabase : "DESTINATION_COUNTRY_LIST",
				clientVersion : "0",
		};
		this.onGetDatabaseEvent.dispatch(data,function(response){
			if(response){
				if(!response.error){
					Clazz.WULocalStorage.setDestinationCountryListMobile(JSON.stringify(response.database));
				}else{
					var MYdata = {
								response: response.error.message
					}
					self.setErrorMessageAlert(MYdata)
					
				}
				callback();
			}
		});
	},

	__getSessionId : "Get session id.",
	getSessionId : function(response){
		var session = response.security.session.id;
		return session;
	},
	
	__getAvailableFreeInquiry : "Get available free inquiry.",
	getAvailableFreeInquiry : function(freeInquiryResponse, deliveryMethod){
		var serviceOptions = freeInquiryResponse.serviceOptions.serviceOption;
		var web = (serviceOptions.WEB)?serviceOptions.WEB : null;
		var categoryItem = null;
		
		if(web !== null){
			var codeDeliveryMethod = "";
			var bankAccount = this.propertiesData && this.propertiesData.bankAccount_BA ? this.propertiesData.bankAccount_BA : "Bank account";
			var cash = this.propertiesData && this.propertiesData.cash_AG ? this.propertiesData.cash_AG : "Cash at agent location";
			var wallet = this.propertiesData && this.propertiesData.M_wallet ? this.propertiesData.M_wallet : "Mobile wallet";
	        if(deliveryMethod === bankAccount || deliveryMethod === this.WUBS_DELIVERY_METHOD){
	        	codeDeliveryMethod = "BA";
			}else if(deliveryMethod === cash){
				codeDeliveryMethod = "AG";
			}else if(deliveryMethod === wallet){
				codeDeliveryMethod = "MT";
			}
	        
			if(web[codeDeliveryMethod]){
				categoryItem = web[codeDeliveryMethod];
			}
		}
		
		return categoryItem;
	},
	
	__checkUserPayoutAvailable : "Get required data before go to receiver information page.",
	checkUserPayoutAvailable : function(summaryObjects){
		var self = this;
		var customerObj = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
		var userZipCode = customerObj.address.postalCode;
		var tempZipcode = summaryObjects.temp_zipcode;
		var pathname = window.location.pathname;
		
		var customerVerOptions = JSON.parse(Clazz.WULocalStorage.getCustomerVerificationStatus());
		var inProgress = ['R','I','U','P','M'];
		
		var attemptsExhausted = (customerVerOptions && (customerVerOptions.noOfAttempts >= 2 || customerVerOptions.noOfAuthErrors >= 2)) ? true : false;
		var availablePaymentOptions;
        if(customerVerOptions && customerVerOptions.paymentType)
             availablePaymentOptions= customerVerOptions.paymentType.split(",");
   		var isAllowedPaymentMethod=$.inArray(summaryObjects.paying_method,availablePaymentOptions);
		var index = $.inArray(customerObj.identityVerificationStatus, inProgress);
		var isEligibleToTransact = customerVerOptions.isEligibleToTransact;
		if((attemptsExhausted && customerObj.identityVerificationStatus === 'N') || index != -1 || isAllowedPaymentMethod === -1 ) {
			Clazz.WUNavigator.goToSendMoneyPage();
		} else if(tempZipcode && (userZipCode !== tempZipcode)) {
			var estimatePriceSendmoneyAPI = new Clazz.com.wu.api.EstimatePriceSendmoneyAPI();
			var freeInquiryObj = JSON.parse(Clazz.WULocalStorage.getFreeInquiryRequest());
			if(freeInquiryObj){
				freeInquiryObj.sender.address.postal_code = customerObj.address.postalCode;
				freeInquiryObj.reference_location.address.postal_code = customerObj.address.postalCode;
			}
			estimatePriceSendmoneyAPI.doGetFeeInqueryEstimated(freeInquiryObj, function(responseFeeInquiry) {
				Clazz.WULocalStorage.clearFreeInquiryRequest();
				if(responseFeeInquiry.error == null){
					var categoryItem = self.getAvailableFreeInquiry(responseFeeInquiry, summaryObjects.payout_method);
					if(categoryItem === null || categoryItem === undefined) {
						summaryObjects["isServiceUnAvailable"] = true;
						Clazz.WULocalStorage.setSummaryObjects(JSON.stringify(summaryObjects));
						if(Clazz.WUNavigator.isInMobilePage()){
							Clazz.WUNavigator.goToSendMoneyPanelPage();
						}else{
							Clazz.WUNavigator.goToSendMoneyPage();
						}
					}else{
						self.goToReceiverInformation();
					}
				}else{
					self.goToReceiverInformation();
				}
			}, function(errorHandler){
				Clazz.WULocalStorage.clearFreeInquiryRequest();
				self.goToReceiverInformation();
			});
		}else{
			Clazz.WULocalStorage.clearFreeInquiryRequest();

			if(pathname.indexOf("uk") !== -1 && Clazz.WUNavigator.isInMobilePage()){
				self.goToSummaryPage();
			}else{
				self.goToReceiverInformation();
			}
		}
	},
	__goToReceiverInformation : "Go to receiver information.",
	goToReceiverInformation : function() {
		Clazz.WUNavigator.goToReceiverInformation();
	},
	
	__goToSummaryPage : "go to summary page for mdot international",
	goToSummaryPage : function(){
		Clazz.WUNavigator.goToSummarySendMoneyMobilePage();
	},
	
    	//Added by HCL for Register Infosec PCF Start

     __disableContinueButton : "Disable continue button.",
    disableContinueButton : function(){
       	$(".wu-button-login").removeClass("wu-blue-button ui-cursor-pointer");
		$(".wu-button-login").addClass("wu-blue-button-continue-disable ui-cursor-pointer");
    },

    __showContinueButton : "Show continue button.",
    showContinueButton : function(){
		$(".wu-button-login").removeClass("wu-blue-button-continue-disable ui-cursor-pointer");
		$(".wu-button-login").addClass("wu-blue-button ui-cursor-pointer");	
    }
	//Added by HCL for Register Infosec PCF End
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUSendMoneyMini = Clazz.extend(Clazz.WidgetWithTemplate, {

    TO_SEND : "send",
	TO_RECEIVE : "receive",
    defaultContainer : "#sendMoney-mini",
	__resourcePath : "Resource path.",
    resourcePath: null,
	__dropDownDestinationCountryListWidget : "An instance of WUDropDownCountryList.",
    dropDownDestinationCountryListWidget : null,
    sendmoneyminiElement: {},
	__getStarted : "Selector",
    getStarted: "#wu_sendmoneymini_getStarted",
    __dropDownCountryList : "Selector",
	dropDownCountryList : "#wu_smm_sendingto_dd_list",
	__enter : "Code of enter key.",
    enter : '13',
	__defaultCountry : "Default country.",
    defaultCountry : "US",
    receiveAmount : "",

    initialize : function(config) {
        this.data.propertiesData = (config)?config.propertiesData:null;
        this.dropDownDestinationCountryListWidget = new Clazz.com.wu.widget.module.WUDropDownCountryList({defaultContainer:"#wu-homescreen-dropdown-destination-list-content", id:"wu-country-list"});
        this.dropDownDestinationCountryListWidget.isTopCountryShown = true;
        this.sendmoneyminiElement = {
                zip : {
                    inputElement: "#wu_sendmoneymini_zip"
                },
                amount : {
                    inputElement: "#wu_sendmoneymini_amount"
                }
        }
        this.defaultCountry = Clazz.WUNavigator.getSenderCountryFromURL();
    },

    __filteringNumber : "Bind input, keyup handler for @inputSelector. The handler will remove non numeric characters.",
    filteringNumber : function (inputSelector,zipCode){
        var self = this;
        $(inputSelector).bind('input keyup',function(){
            if (!self.isNumber($(this).val(),zipCode)) {
                $(this).val($(this).val().replace(/[^0-9]/g, ''));
            }
        });
    },

    __getConvertedReceiveAmount : "Get converted receive amount.",
	getConvertedReceiveAmount : function(sendAmount){
		var exchangeRate = this.exchangeRate? this.exchangeRate : 1.0; 
		var receiveAmount = sendAmount * exchangeRate;
		receiveAmount = Math.round(receiveAmount * 100) / 100;
		receiveAmount = this.convertTwoDecimal(receiveAmount);
		return receiveAmount;
	},

    __convertTwoDecimal : "Convert @value to two decimal.",
    convertTwoDecimal : function(value){
		var amount = Number(value);
		return (amount).toFixed(2);
	},
    
    __isNumber : "If @zipCode is true, return if @value is number. Else return if @value is amount.",
    isNumber : function(value,zipCode) {
        var num_regex = Clazz.WURegex.number;
        var amount_regex = /^\d{0,15}(\.\d{0,15}){0,1}$/;
        if(zipCode){
            return (value.match(num_regex));
        }else{
            return (value.match(amount_regex));
        }
    },

    bindUI : function() {
        var self = this;
        var zipCode = true;
        this.filteringNumber(this.sendmoneyminiElement.amount.inputElement,null);
        
        $(this.getStarted).click(function(){
            var amount = $(self.sendmoneyminiElement.amount.inputElement).val();
            var isValidZipCode = true;
            
            if(amount !== ""){
                Clazz.WULocalStorage.setAmount(amount);
            }



            if(isValidZipCode){
                var country = {
                        "countryName" : self.dropDownDestinationCountryListWidget.text,
                        "countryCode" : self.dropDownDestinationCountryListWidget.value
                };
                
                Clazz.WULocalStorage.setSelectCountry(JSON.stringify(country));
                /**DTM Required localstorage. */
                localStorage.DTMZipcode="";
                localStorage.DTMAmount=amount;
                localStorage.DTMcountry=JSON.stringify(country);
                 /**DTM Required localstorage. */
                Clazz.wuSpinner.show();
				Clazz.WULocalStorage.setLastPage("home.html");


            var amountOptions = self.selectedAmountOption? self.selectedAmountOption : self.TO_SEND;
            var receiveAmount = self.getConvertedReceiveAmount(amount);
            var receiverCurrency = self.receiverCurrency;
            var exchangeRate = self.exchangeRate? self.exchangeRate : 1.0;

            var sendMoneyMiniData = {
                    country : country,
                    zipCode : zipCode,
                    amount : amount,
                    amountOptions : amountOptions,
                    receiveAmount : receiveAmount,
                    receiverCurrency : receiverCurrency,
                    exchangeRate : exchangeRate
            };
    
            Clazz.WULocalStorage.setSendMoneyMiniData(JSON.stringify(sendMoneyMiniData));

            if(Clazz.WULocalStorage.getSelectCountry())
                {
                    var selectedCountryList = Clazz.WULocalStorage.getSelectCountry();
                    if(selectedCountryList!==undefined && selectedCountryList.countryCode!==undefined && selectedCountryList.countryName!==undefined)
                    {
                        Clazz.WUNavigator.goToSendMoneyPage();
                    }else
                    {
                        Clazz.WULocalStorage.setSelectCountry(JSON.stringify(country));
                        Clazz.WUNavigator.goToSendMoneyPage();
                    }
                }else
                {
                    Clazz.WUNavigator.goToSendMoneyPage();
                }
            }
            //MYWU-1689 
            //Clazz.WUNavigator.goToSendMoneyPage();
        });
        $(this.getStarted).focus(function(){
            $(document).keyup(function(event){
                if(event.keyCode == self.enter){
                    $(document).unbind("keyup");
                    $(self.getStarted).trigger("click");
                }
            });
        });
        $(this.getStarted).blur(function(){
            $(document).unbind("keyup");
        });
    },
    
    __validZipCode : "Valid zip code.",
    validZipCode : function(){
        var isValidZip = false;
        var zipCode = $(this.sendmoneyminiElement.zip.inputElement).val();
        $('.wu-sendmoneymini-error-zipcode').hide();
        if (zipCode !== "" && zipCode.length == 5){
            isValidZip = true;
            Clazz.WULocalStorage.setZipCode(zipCode);
        }else{
            //Removed Zip code validation
            //$('.wu-sendmoneymini-error-zipcode').show();
        }
        return isValidZip;
    },

    postRender : function() {
       var self=this;

        var defaultvalue=$("#default_country").val();

        // ----- RINTL-15673 - Send Money to Pakistan ----- start -----
        localStorage.setItem("defaultCountryValue",defaultvalue);
        // ----- RINTL-15673 - Send Money to Pakistan ----- end -----


        if(this.data.propertiesData==null)
        {
          this.dropDownDestinationCountryListWidget.defaultValue = defaultvalue;
        }else
        {
           this.dropDownDestinationCountryListWidget.defaultValue = this.data.propertiesData.default_country; 
        }
        if(defaultvalue!==undefined && defaultvalue!="" && defaultvalue!==null && defaultvalue!="null")
        {
            this.dropDownDestinationCountryListWidget.defaultValue=defaultvalue;
        }       

        this.dropDownDestinationCountryListWidget.templateUrl = this.resourcePath + ".dropDownMenu-template.html";
        this.dropDownDestinationCountryListWidget.render();
    }
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUSendMoneyMiniBase = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#sendMoney-mini",
	__resourcePath : "Resource path.",
	resourcePath: null,
	
	KEYCODE_ENTER : "13",
	
	senderCountry : null,
	senderCurrency : null,
	zipCode : null,
	amount : null,
	
	dropDownDestinationCountryListWidget : null,
	
	__zipCodeChangedEvent : "Signal",
	zipCodeChangedEvent : null,
	__amountSendChangedEvent : "Signal",
	amountSendChangedEvent : null,
	__sendMoneyStartedEvent : "Signal",
	sendMoneyStartedEvent : null,
	
	__inputZipCode : "Selector",
	inputZipCode : "#wu_sendmoneymini_zip",
	__inputAmount : "Selector",
	inputAmount : "#wu_sendmoneymini_amount",
	__getStarted : "Selector",
	getStarted: "#wu_sendmoneymini_getStarted",
	
    initialize : function(config) {
    	this.resourcePath = config && config.resourcePath? config.resourcePath : this.resourcePath;
        this.data.propertiesData = config && config.propertiesData? config.propertiesData : null;
    	
        this.dropDownDestinationCountryListWidget = new Clazz.com.wu.widget.module.WUDropDownCountryList({
    		defaultContainer:"#wu-homescreen-dropdown-destination-list-content",
    		id:"wu-country-list",
    		isTopCountryShown : true,
    		defaultValue : this.data.propertiesData && this.data.propertiesData.default_country ? this.data.propertiesData.default_country : Clazz.WUNavigator.getSenderCountryFromURL()
    	});
        
        this.zipCodeChangedEvent = new signals.Signal();
        this.amountSendChangedEvent = new signals.Signal();
        this.sendMoneyStartedEvent = new signals.Signal();
        this.sendMoneyStartedEvent.add(this.onSendMoneyStarted, this);
    },

    __onSendMoneyStarted : "Handler of onSendMoneyStarted.",
    onSendMoneyStarted : function(){},

	filteringNumber : function (inputSelector, callback){
		var self = this;
		$(inputSelector).keyup(function(e){
			var value = $(this).val(); 

        	if (!self.isNumber(value)) { 
        		var comma = value.match(/[0-9]\./g);
                if(comma){
                    	if(comma.length > 0){
                    	value = value.match(/[0-9]+(\.[0-9]{0,2})?/);
						$(this).val(value[0]);
                    }
				}else{
					$(this).val(value.replace(/[^0-9]/g, ''));
				}
        	}

        	if(callback){
    			callback(e);
    		}
        });
	},
	
	__isNumber : "Return if @value is number.",
	isNumber : function(value) {
    	var num_regex = /^[0-9]+$/;
    	return (value.match(num_regex));
    },
    
	__convertTwoDecimal : "Convert @value to two decimal.",
    convertTwoDecimal : function(value){
		var amount = Number(value);
		return (amount).toFixed(2);
	},
	
    __convertTransferFee : "Convert @fee to two decimals.",
	convertTransferFee : function(fee){
		var amount = Number(fee);
		return (amount/100).toFixed(2);
	},

    bindUI : function() {
    	var self = this;
    	
    	this.filteringNumber(this.inputZipCode, function(e){
    		var zipCode = $(self.inputZipCode).val();
    		if(zipCode.length == 5){
    			self.zipCode = zipCode;
    			self.zipCodeChangedEvent.dispatch(zipCode);
    		}
    	});
    	
    	this.filteringNumber(this.inputAmount, function(e){
    		var amount = $(self.inputAmount).val();
    		self.amount = amount;
    		// CLFE-554
    		//self.amountSendChangedEvent.dispatch(amount);
    	});
    	
    	$(this.getStarted).click(function(){
    		self.sendMoneyStartedEvent.dispatch();
    	});
    	
    	$(this.getStarted).focus(function(){
    		$(document).keyup(function(event){
    			if(event.keyCode == self.KEYCODE_ENTER){
    				$(document).unbind("keyup");
    				$(self.getStarted).trigger("click");
    			}
    		});
    	});
    	$(this.getStarted).blur(function(){
    		$(document).unbind("keyup");
    	});
    },
    
    postRender : function() {
    	this.dropDownDestinationCountryListWidget.templateUrl = this.resourcePath + ".dropDownMenu-template.html";
    	this.dropDownDestinationCountryListWidget.render();
    }
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.constants.SM_SEND_AMOUNT_ERROR_MESSAGE="The minimum amount is â‚¬ 1.00";
Clazz.com.wu.constants.SM_RECEIVE_AMOUNT_ERROR_MESSAGE="Please enter a larger amount.";

Clazz.com.wu.widget.module.WUSendMoneyMiniInternational = Clazz.extend(Clazz.com.wu.widget.module.WUSendMoneyMiniBase, {
	
	TO_SEND : "send",
	TO_RECEIVE : "receive",
	
	senderCountry : "",
	senderCountryName : null,
	senderCurrency : "",
	senderCurrencyName : null,
	destinationCountry : "",
	destinationCountryName : "",
	selectedAmountOption : null,
	receiveAmount : "",
	currencyList : null,
	currencyObject : null,
	receiverCurrency : null,
	exchangeRate : null,
	amount : "",
	
	__amountReceiveChangedEvent : "Signal for amountReceiveChangedEvent event.",
	amountReceiveChangedEvent : null,
	__amountOptionsChangedEvent : "Signal for amountOptionsChangedEvent event.",
	amountOptionsChangedEvent : null,
	
	currenciesDropDown : null,

	currenciesAPI : null,

	currencyResponse : null,
	
	__inputAmountOptions : "Selector",
	inputAmountOptions : "input:radio[name=amount-options]",
	__inputAmountOptionsContainer : "Selector",
	inputAmountOptionsContainer : ".wu-amount-options",
	__inputAmountContainer : "Selector",
	inputAmountContainer : ".wu-amount-original-home",
	__inputConvertionContainer : "Selector",
	inputConvertionContainer : ".wu-amount-convertion-home",
	__inputConvertion : "Selector",
	inputConvertion : "#wu_sendmoneymini_amount_convert",
	__inputAmount : "Selector",
	inputAmount : "#wu_sendmoneymini_amount",
	__senderCurrencyText : "Selector",
	senderCurrencyText : "#sender-currency",
	__currencyDropdownContainer : "Selector",
	currencyDropdownContainer : "#wu-currency-dropdown-container",
	__receiverCurrencyText : "Selector",
	receiverCurrencyText : "#receiver-currency",

	initialize : function(config){
		var superInitialize = $.proxy(this.superClass.initialize, this);
		superInitialize(config);
		
		var senderCountry = Clazz.WUNavigator.getSenderCountryFromURL();
		var senderData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[senderCountry]? Clazz.langConfig.senderInfoMap[senderCountry] : null;
		if(senderData){
			this.senderCountry = senderCountry;
			this.senderCountryName = senderData.countryName;
			this.senderCurrency = senderData.currency;
			this.senderCurrencyName = senderData.currencyName;
		}	
				
		this.currenciesDropDown = new Clazz.com.wu.widget.module.WUDropDownMenu({
			defaultContainer : "#wu-currency-dropdown-container",
			id : "wu-currency-dropdown",
			options : [{value: "0", text: " "}]
		});
		
		this.amountReceiveChangedEvent = new signals.Signal();
		this.amountOptionsChangedEvent = new signals.Signal();
		
		this.dropDownDestinationCountryListWidget.setPreOption(true, "0", "Select country");
		this.dropDownDestinationCountryListWidget.listChangedEvent.add(this.onDestinationCountryChanged, this);
		this.currenciesDropDown.listChangedEvent.add(this.onCurrenciesChanged, this);
		this.amountSendChangedEvent.add(this.onAmountSendChanged, this);
		this.amountReceiveChangedEvent.add(this.onAmountReceiveChanged, this);
		this.amountOptionsChangedEvent.add(this.onAmountOptionsChanged, this);
		
		this.currenciesAPI = new Clazz.com.wu.api.CurrenciesAPI();
	},
	
	__onDestinationCountryChanged : "Called when destination country is changed.",
	onDestinationCountryChanged : function(destinationCountry){
		this.destinationCountry = destinationCountry.value;
		this.destinationCountryName = destinationCountry.text;

		this.resetAmountOptions(destinationCountry.value);
		this.resetAmount();
		this.getCurrencies();
	},
	
	__onAmountSendChanged : "Called when amount send is changed.",
	onAmountSendChanged : function(sendAmount){
		this.setConvertedReceiveAmount();
	},

	__onAmountReceiveChanged : "Called when receive amount is changed.",
	onAmountReceiveChanged : function(receiveAmount){
		this.setConvertedSendAmount();
	},

	__getConvertedSendAmount : "Get converted send amount.",
	getConvertedSendAmount : function(receiveAmount){
		var exchangeRate = this.exchangeRate? this.exchangeRate : 1.0;
		var sendAmount = receiveAmount / exchangeRate;
		sendAmount = Math.round(sendAmount * 1000000) / 1000000;
		//sendAmount = this.convertTwoDecimal(sendAmount);
		return Number(sendAmount).toFixed(6);
	},

	__getConvertedReceiveAmount : "Get converted receive amount.",
	getConvertedReceiveAmount : function(sendAmount){
		var exchangeRate = this.exchangeRate? this.exchangeRate : 1.0; 
		var receiveAmount = sendAmount * exchangeRate;
		receiveAmount = Math.round(receiveAmount * 1000000) / 1000000;
		//receiveAmount = this.convertTwoDecimal(receiveAmount);
		return Number(receiveAmount).toFixed(6);
	},

	__setConvertedSendAmount : "Set converted send amount.",
	setConvertedSendAmount : function(){
		if (!this.isNumber(this.receiveAmount)) { 
    		this.receiveAmount = this.receiveAmount.replace(/[^0-9.]/g, '');
    	}
		var sendAmount = this.receiveAmount? this.getConvertedSendAmount(this.receiveAmount) : this.receiveAmount;
		this.amount = sendAmount;
		$(this.inputAmount).val((sendAmount == '')?'':Number(sendAmount).toFixed(2));
	},
	
	__setConvertedReceiveAmount : "Set converted receive amount.",
	setConvertedReceiveAmount : function(){
		if (!this.isNumber(this.amount)) { 
    		this.amount = this.amount.replace(/[^0-9.]/g, '');
    	}
		var receiveAmount = this.amount? this.getConvertedReceiveAmount(this.amount) : this.amount;
		this.receiveAmount = receiveAmount;
		$(this.inputConvertion).val((receiveAmount == '')?'':Number(receiveAmount).toFixed(2));
	},
	
	__onGetCurrencies : "Called when get is currencies.",
	onGetCurrencies : function(firstCurrencyObject, currencyList, responseCurrencies){
		this.setSelectedCurrency(firstCurrencyObject);
		this.currencyList = currencyList;
		this.currencyResponse = responseCurrencies;
		
		var dropDownCurrenciesData = this.mapCurrenciesResponse(currencyList);
		this.currenciesDropDown.updateList(dropDownCurrenciesData, firstCurrencyObject.currencyIsoCode);
		this.setReceiverCurrencyUI(currencyList);
		var dropDownDestCountry = "#" + this.dropDownDestinationCountryListWidget.id;
		this.currenciesDropDown.doMore = function() {
			$(dropDownDestCountry).focus();
		};
	},
	
	__onCurrenciesChanged : "Called when currencies is changed.",
	onCurrenciesChanged : function(selectedCurrency){
		var currencyObject = this.getSelectedCurrencyObject(selectedCurrency.value);
		this.setSelectedCurrency(currencyObject);
		// CLFE-554
		//this.setConvertedReceiveAmount();
	},
	
	__onAmountOptionsChanged : "Called when amount options is changed.",
	onAmountOptionsChanged : function(selectedAmountOption){
		this.toggleAmountOptions(selectedAmountOption);
	},
	
	__onSendMoneyStarted : "Save data to local storage, go to send money page.",
	onSendMoneyStarted : function(){
		this.hideAlertAmount();
		var country = {
				"countryName" : this.dropDownDestinationCountryListWidget.text,
				"countryCode" : this.dropDownDestinationCountryListWidget.value
		};
    	var zipCode = this.zipCode;
    	var amount = this.amount;
    	var amountOptions = this.selectedAmountOption? this.selectedAmountOption : this.TO_SEND;
    	var receiveAmount = this.receiveAmount;
    	var receiverCurrency = this.receiverCurrency;
    	var exchangeRate = this.exchangeRate? this.exchangeRate : 1.0;

    	var sendMoneyMiniData = {
    			country : country,
    			zipCode : zipCode,
    			amount : amount,
    			amountOptions : amountOptions,
    			receiveAmount : receiveAmount,
    			receiverCurrency : receiverCurrency,
    			exchangeRate : exchangeRate
    	};

    	Clazz.WULocalStorage.setSendMoneyMiniData(JSON.stringify(sendMoneyMiniData));

    	/**DTM Required localstorage. */
    	localStorage.DTMZipcode=zipCode;
    	localStorage.DTMAmount=amount;
    	localStorage.DTMcountry=JSON.stringify(country);
    	/**DTM Required localstorage. */
	//changes for RINTL-29324:START
		
		if(this.data.propertiesData && this.data.propertiesData.URL){
		var link=this.data.propertiesData.URL;
		window.location.href=link;
		}
		else{
    	Clazz.WUNavigator.goToSendMoneyPage();
		}
	//changes for RINTL-29324:END		

		
    },
    
	__mapCurrenciesResponse : "Map currencies response.",
    mapCurrenciesResponse : function(currency) {
		var options = [];
		for (var i=0; i<currency.length; i++) {
			var option = {};
			option["value"] = currency[i].currencyIsoCode;
			option["text"] = currency[i].currencyIsoCode;
			options.push(option);
		}
		return options;
	},
    
	__getSelectedCurrencyObject : "Get selected currency object.",
    getSelectedCurrencyObject : function(currencyIsoCode) {
		var currencyArray = this.currencyList;
		for (var i = 0; i < currencyArray.length; i++) {
			var currencyObject = currencyArray[i];
			if (currencyObject.currencyIsoCode == currencyIsoCode){
				return currencyObject;
			}
		}
		return null;
	},
    
    __setSelectedCurrency : "Set selected currency.",
	setSelectedCurrency : function(currencyObject) {
		var currency = currencyObject.currencyIsoCode;
		var exchangeRate = currencyObject.exchangeRate;

		this.currencyObject = currencyObject;
		this.receiverCurrency = currency;
		this.exchangeRate = exchangeRate;
	},

	__setReceiverCurrencyUI : "Set receiver currency UI.",
	setReceiverCurrencyUI : function(currencyList){
		if (currencyList){
			if(currencyList.length > 1){
				$(this.currencyDropdownContainer).show();
				$(this.receiverCurrencyText).hide();
                 $("#wu-default-currency-dropdown").hide();
			} else {
				$(this.currencyDropdownContainer).hide();
				$(this.receiverCurrencyText).text(currencyList[0].currencyIsoCode);
                $("#wu-default-currency-dropdown").text(currencyList[0].currencyIsoCode);
                $("#wu-default-currency-dropdown").show();
				$(this.receiverCurrencyText).show();
			}
		}else{
			$(this.currencyDropdownContainer).hide();
			$(this.receiverCurrencyText).hide();
		}
	},

	__getCurrencies : "Get currencies. Call currenciesAPI.doGetCurrency and handle response.",
	getCurrencies : function(){
		var self = this;
		
		var currenciesData = {
				senderCountry : this.senderCountry,
				senderCurrency : this.senderCurrency,
				destinationCountry : this.dropDownDestinationCountryListWidget.value
		};

		var currenciesPostBody = this.getCurrenciesPostBody(currenciesData);
		this.currenciesAPI.doGetCurrency(currenciesPostBody, function(responseCurrencies) {
			if(!responseCurrencies.error){
				var currencyList = responseCurrencies.currencies.currency;
				var countryCode = currenciesPostBody.destination.country_iso_code;
				var firstCurrencyObject = self.getCountryCurrencyObj(currencyList,countryCode);
				//Changes for RR-7762:START
				if(currenciesPostBody.origination.currency_iso_code ==firstCurrencyObject.currencyIsoCode){

						$(self.inputAmountOptionsContainer).hide();
				}
				//Changes for RR-7762:END
				
				self.onGetCurrencies(firstCurrencyObject, currencyList, responseCurrencies);
			}
		});
	},
	
	getCountryCurrencyObj : function(currencyList,countryCode){
		var currencyObj;
		if(currencyList.length > 1){
			var currency;
			var record;

			var destinationCountryList = JSON.parse(Clazz.WULocalStorage.getDestinationCountryList());
			var senderCountry = Clazz.WUNavigator.getSenderCountryFromURL();
			var senderLanguage = Clazz.WUNavigator.getSenderLanguageFromURL();
			if(destinationCountryList.record){
				record = destinationCountryList.record;
			}else{
				record = destinationCountryList[senderCountry][senderLanguage].record;
			}
			
			for(var j in record){
				var countryIsoCode = record[j].COUNTRY_CODE;
				if(countryIsoCode === countryCode){
					currency = record[j].COUNTRY_CURRENCY;
					for(var i in currencyList){
						if(currencyList[i].currencyIsoCode === currency){
							currencyObj = currencyList[i];
							break;
						}
					}
					break;
				}
			}
		}else{
			currencyObj = currencyList[0];
		}

		return currencyObj;
	},

	__toggleAmountOptions : "Toggle amount options.",
    toggleAmountOptions : function(selectedAmountOption) {
    	if (selectedAmountOption === this.TO_SEND){
			$(this.inputConvertionContainer).hide();
			$(this.inputAmountContainer).css('display', 'inline-block');
			$('#principal_minimum_amount_error').text(Clazz.com.wu.constants.SM_SEND_AMOUNT_ERROR_MESSAGE);
		} else if (selectedAmountOption === this.TO_RECEIVE){
			$(this.inputConvertionContainer).css('display', 'inline-block');
			$('#principal_minimum_amount_error').text(Clazz.com.wu.constants.SM_RECEIVE_AMOUNT_ERROR_MESSAGE);
			$(this.inputAmountContainer).hide();
		}
	},

    __resetAmount : "Reset amount.",
	resetAmount : function() {
		$(this.inputAmount).val("");
		this.amount = null;

		$(this.inputConvertion).val("");
		this.receiveAmount = null;

		this.receiverCurrency = null;
		this.exchangeRate = null;
		this.currencyList = null;
		this.currencyObject = null;
	},

	__resetAmountOptions : "Reset amount options.",
	resetAmountOptions : function(destinationCountry) {
		this.selectedAmountOption = null;
		$(this.inputAmountOptions).prop("checked", false);
		/**		  start RINTL-19634		 */
		$(this.inputAmountOptions).parent().eq(1).removeClass('checked');
		$(this.inputAmountOptions).parent().eq(0).addClass('checked');
		/**	  End RINTL-19634		 */
		this.toggleAmountOptions(this.TO_SEND);

		if (destinationCountry === this.senderCountry){
			$(this.inputAmountOptionsContainer).hide();
		}else{
			$(this.inputAmountOptionsContainer).show();
		}
	},
	
	__replaceNANOnKeyUp : "Call on keyup. Remove non digital characters.",
	replaceNANOnKeyUp : function(selector, regex){
		var self = this;
		$(selector).keyup(function(e){
			if(e.keyCode != Clazz.com.wu.constants.KEYCODE_ENTER){
				var inputValue = $(this).val();
				if(!self.isNumber(inputValue)){
					$(this).val(inputValue.replace(regex, ''));
					inputValue = $(this).val();
				}
				var comma = inputValue.match(/[0-9]\./g);
                if(comma){
                    	if(comma.length > 0){
                    	inputValue = inputValue.match(/[0-9]+(\.[0-9]{0,2})?/);
						$(this).val(inputValue[0]);
                    }
				}else{
					$(this).val(inputValue.replace(/[^0-9]/g, ''));
				}
			}
		});
	},

    bindUI : function(){
    	var superBindUI = $.proxy(this.superClass.bindUI, this);
    	superBindUI();
    	
    	var self = this;
    	
    	this.replaceNANOnKeyUp(this.inputAmount, Clazz.WURegex.negatedAmountNumber);
    	this.replaceNANOnKeyUp(this.receiveAmount, Clazz.WURegex.negatedAmountNumber);
    	
    	this.filteringNumber(this.inputConvertion, function(e){
    		var receiveAmount = $(self.inputConvertion).val();
    		self.receiveAmount = receiveAmount;
    		// CLFE-554
    		//self.amountReceiveChangedEvent.dispatch(receiveAmount);
    	});
    	
    	$(this.inputAmountOptions).change(function(){

			// CLFE-554 start
            $(self.inputAmount).val(self.defaultAmount);
            $(self.inputConvertion).val(self.defaultAmount);
            self.amount = self.defaultAmount;
            self.receiveAmount = self.defaultAmount;
            self.exchangeRate = null;
            // CLFE-554 end

			$(this).parents(self.inputAmountOptionsContainer).find('span.checker').removeClass('checked');
			$(this).parent().addClass('checked');
			var selectedAmountOption = $(this).val();
			self.selectedAmountOption = selectedAmountOption;
			self.amountOptionsChangedEvent.dispatch(selectedAmountOption);
			//Added by HCL for RINTL-18041
			if (this.currencyList){
			if(this.currencyList.length > 0){
				$(this.currencyDropdownContainer).hide();
				$(this.receiverCurrencyText).text(this.currencyList[0].currencyIsoCode);
				$(this.receiverCurrencyText).show();
			  } 
			}else {
				if(Clazz.WUNavigator.isInThisWebPage("send-money-to-india.html")){    
				self.getCurrencies();
				}
			}
		});
    },
    
    postRender : function(){
//    	this.dropDownDestinationCountryListWidget.defaultValue = this.senderCountry;
    	var superPostRender = $.proxy(this.superClass.postRender, this);
    	superPostRender();
    	
    	this.currenciesDropDown.templateUrl = this.resourcePath + ".dropDownMenu-template.html";
    	this.currenciesDropDown.render();
    	$(this.senderCurrencyText).text(this.senderCurrency);
		var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
		if(currentcountry=='GB'){ 
			$("#gbVisible").css("display", "inline-block");
		}
		
		//for RINTL-16457
		if(currentcountry=='DE'){ 
			$("#deVisible").css("display", "inline-block");
		}
		
		//added for RINTL-19288
        if(currentcountry=='AU' || currentcountry=='DE'){
			$(".visa2").hide(); //PBL-2017
			$(".maestro").hide();
        }
        
        //Added by HCL for RINTL-18041
       // if(Clazz.WUNavigator.isInThisWebPage("send-money-to-india.html")){
       //    this.getCurrencies();
       // }
        $(this.currencyDropdownContainer).hide();
        //added for RINTL-18678
        $(this.inputAmountOptionsContainer).hide();
    },
    
    /**
     * for inline alert function
     * 
     */
    
    __hideAlertAmount : "Hide alert amount.",
    hideAlertAmount : function(){
		$('#principal_minimum_amount_error').hide();
	},
	
    __showAlertAmount : "Show alert amount.",
	showAlertAmount : function(){
		$('#principal_minimum_amount_error').show();
	},
	
	/**
	 * end alert function
	 */
    
	__getSecurity : "Get security. Including session.",
    getSecurity : function(){
		var security = new Object();
		security["session"] = this.getId();
		return security;
	},

	__getId : "Get id. Including id.",
	getId : function() {
		var id = new Object();
		this.sessionId = Clazz.WUCookies.getCookieSessionId();
		id["id"] = this.sessionId;
		return id;

	},

	__getOrigination : "Get origination. Including currency_iso_code, country_iso_code.",
	getOrigination : function(currencyIsoCode, countryIsoCode) {
		var origination = new Object();
		origination["currency_iso_code"] = currencyIsoCode;
		origination["country_iso_code"] = countryIsoCode;
		return origination;
	},

	__getDestination : "Get destination. Including country_iso_code.",
	getDestination : function(countryIsoCode) {
		var origination = new Object();
		origination["country_iso_code"] = countryIsoCode;
		return origination;
	},
	
    /**
	 * get currencies request body - START
	 */
	__getCurrenciesPostBody : "Get currencies post body. Including security, origination, destination.",
	getCurrenciesPostBody : function(data){
		var currenciesPostBody = new Object();
		currenciesPostBody["security"] = this.getSecurity();
		currenciesPostBody["origination"] = this.getOrigination(data.senderCurrency, data.senderCountry);
		currenciesPostBody["destination"] = this.getDestination(data.destinationCountry);
		return currenciesPostBody;
	}
	/**
	 * get currencies request body - END
	 */
	
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUSendMoneyMiniUS = Clazz.extend(Clazz.com.wu.widget.module.WUSendMoneyMiniBase, {
	
	senderCountry : "US",
	senderCurrency : "USD",
	
	__onSendMoneyStarted : "Handler of onSendMoneyStarted.",
	onSendMoneyStarted : function(){
		var country = {
				"countryName" : this.dropDownDestinationCountryListWidget.text,
				"countryCode" : this.dropDownDestinationCountryListWidget.value
		};
    	var zipCode = this.zipCode;
    	var amount = this.amount;
		
		var sendMoneyMiniData = {
			country : country,
			zipCode : zipCode,
			amount : amount
		};
		
		Clazz.WULocalStorage.setSendMoneyMiniData(JSON.stringify(sendMoneyMiniData))
		
        /**DTM Required localstorage. */
        localStorage.DTMZipcode=zipCode;
        localStorage.DTMAmount=amount;
        localStorage.DTMcountry=JSON.stringify(country);
         /**DTM Required localstorage. */

		Clazz.WUNavigator.goToSendMoneyPage();
    }
	
});

Clazz.createPackage("com.wu.widget.module");

//abstract class
Clazz.com.wu.widget.module.WUDropDownMenu = Clazz.extend(Clazz.WidgetWithTemplate, {

      /**
      * key list for binding data to template
      */
      __ID_KEY : "id key for binding data to template",
      ID_KEY : "id",
      __OPTIONS_KEY : "options key for binding data to template",
      OPTIONS_KEY : "options",
      __VALUE_KEY : "value key for binding data to template",
      VALUE_KEY : "value",
      __TEXT_KEY : "text key for binding data to template",
      TEXT_KEY : "text",
      __SHOW_PRE_OPTION_KEY : "show pre option key for binding data to template",
      SHOW_PRE_OPTION_KEY : "showPreOption",
      __PRE_OPTION_VALUE_KEY : "pre option value key for binding data to template",
      PRE_OPTION_VALUE_KEY : "preOptionValue",
      __PRE_OPTION_TEXT_KEY : "pre option text key for binding data to template",
      PRE_OPTION_TEXT_KEY : "preOptionText",

      /**
      * id of this drop down
      */
      __id : "id of this drop down.",
      id : null,

      /**
      * drop down default value to be selected for first time
      * based on value of select option
      * should be set before rendering
      */
      __defaultValue : "drop down default value to be selected for first time based on value of select option should be set before rendering.",
      defaultValue : null,

      /**
      * drop down data in String
      */
      __value : "drop down data in String.",
      value : null,
      __text : "drop down data in String.",
      text : null,
      
      /**
      * list of dropdown
      * should be in this form : [{value:"", text:""}]
      */
      __options : 'list of dropdown, should be in this form : [{value:"", text:""}]',
      options : null,

      /**
      * event that dispatched on list changed
      */
      __listChangedEvent : "event that dispatched on list changed.",
      listChangedEvent : null,

      /**
      * is using pre-option
      */
      __showPreOption : "Toggle whether show pre-option",
      showPreOption : false,
      __preOptionValue : "Value of pre-option.",
      preOptionValue : "0",
      __preOptionText : "Text of pre-option.",
      preOptionText : "- Choose -",

      __focusClass : "Class name of focus class.",
      focusClass : "focus",
      
      __isDisableDropDown : "Toggle if disable dropdown.",
      isDisableDropDown : false,

      initialize : function(config){
            if(config){
                  this.setData(config);
            }
            this.listChangedEvent = new signals.Signal();
            this.listChangedEvent.add(this.onListChanged, this);
      },

      __setData : "Set data.",
      setData : function(config) {
            this.defaultContainer = config && config.defaultContainer? config.defaultContainer : function(){throw new Error("default container is undefined")}();//mandatory
            this.id = config && config.id? config.id : function(){throw new Error("drop down id is undefined")}();//mandatory
            this.defaultValue = config && config.defaultValue? config.defaultValue : this.defaultValue;
            this.options = config && config.options? config.options : this.options;
            this.animate = config && config.animate !== undefined? config.animate : this.animate;
            this.showPreOption = config && config.showPreOption !== undefined? config.showPreOption : this.showPreOption;
            this.preOptionValue = config && config.preOptionValue? config.preOptionValue : this.preOptionValue;
            this.preOptionText = config && config.preOptionText? config.preOptionText : this.preOptionText;
            this.isDisableDropDown = config && config.isDisableDropDown? config.isDisableDropDown : false;

            this.data = {};
            this.data[this.ID_KEY] = this.id;
            this.data[this.OPTIONS_KEY] = this.options? this.options : null;
            this.data[this.SHOW_PRE_OPTION_KEY] = this.showPreOption;
            this.data[this.PRE_OPTION_VALUE_KEY] = this.preOptionValue;
            this.data[this.PRE_OPTION_TEXT_KEY] = this.preOptionText;
            this.setPreOption(this.showPreOption, this.preOptionValue, this.preOptionText);
      },
      
      /**
      * override this to handle on list changed event
      * @param data.value and data.text
      */
      __onListChanged : " override this to handle on list changed event <br>@param data.value and data.text.",
      onListChanged : function(data){

      },
      
      /**
      * to set drop down value
      * @param value: value for drop down. text: display text for drop down
      */
      __setValue : "to set drop down value <br>@param value: value for drop down. text: display text for drop down ",
      setValue : function(value, text){
            this.value = value;
            this.text = text;
      },
      
      /**
      * to set value from current selected value of drop down
      */
      __updateValue : "to set value from current selected value of drop down",
      updateValue : function(){
            var value = $("#"+this.id).val();
            var text = $("#"+this.id+" > option:selected").text();
            this.setValue(value, text);
            this.changeTitle(text);
      },

      /**
      * to change the mask title
      */
      __changeTitle : "to change the mask title",
      changeTitle : function(text) {
            $("#"+this.id+"-title").text(text);
      },

      bindUI : function(){
            this.createDropDown();
            
            //updates options
            this.options = this.data[this.OPTIONS_KEY];
            
            if(this.isDisableDropDown){
                  this.disabledDropDown();
            }
            
            //RINTL-12666 IE8 for auto fit select option
            if(!$.support.leadingWhitespace) { // if IE6/7/8
                  $('select.wide')
              .bind('focus mouseover', function() { $(this).addClass('expand').removeClass('clicked'); })
              .bind('click', function() { $(this).toggleClass('clicked'); })
              .bind('mouseout', function() { if (!$(this).hasClass('clicked')) { $(this).removeClass('expand'); }})
              .bind('blur', function() { $(this).removeClass('expand clicked'); });
            }
      },

      /**
      * construct the drop down based on select option with id
      */
      __createDropDown : "construct the drop down based on select option with id",
      createDropDown : function(){
            var self = this;
            var dropDownMouseClicked=false; // For firefox dropdown fix
            //set default value before on change dispatched
            if(this.defaultValue){
                  this.changeValue(this.defaultValue);
            } else if (this.showPreOption){
                  this.changeValue(this.preOptionValue);
            }

            //set initial value
            this.updateValue();

            
            // Fixed RINTL-2565 : Send Money: Getting C1562 error if we try to change the country from Send money start page
            // Fixed RINTL-2634 : When the drop down is clicked and a particular alphabet is keyed in, the system starts validating the first country of that alphabet
            // Changing the function of bind key up on select element to change function
            $("#"+this.id).change(function() {
                  //event only dispatched if the value is changed
                  var value = $(this).val();
                  /*PBL-1519 Start*/
                  if(this.id=='wu-country-list'){
                        $('#input-amount-fea').val(0);
						$("#id_online_fx").hide();
						$("#italy_cash_payout").hide();//PBL-2196
                         $('#input-convertion-fea').val(0); //PBL-1686
                  }
                  /*PBL-1519 End*/

            //PBL-1690 Start
            if(this.id=="wu-state" && self.country=="AU" && value=="NSW"){
                  $('.wu-iv-picture').removeClass("driver");
                  $('.wu-iv-picture').addClass("driver-NSW");
            }
            if(this.id=="wu-state" && self.country=="AU" && value!="NSW"){    
                  $('.wu-iv-picture').removeClass("driver-NSW");
                  $('.wu-iv-picture').addClass("driver");
            }
            //PBL-1690 End
                  if(value !== self.value){
                        self.updateValue();
                        //produces value and text
                        self.listChangedEvent.dispatch({value:self.value, text:self.text});
                        if(Clazz.WUNavigator.isInMobilePage())
                        $(this).blur();
                  }
            });
            //MYWU-1227
        $("#"+this.id).mousedown(function(){
            var isFirefox = typeof InstallTrigger !== 'undefined' || Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                  if(isFirefox==true){
                this.dropDownMouseClicked=true;
                var attr = $(this).attr('size');
                if(typeof attr !== 'undefined' && attr !== false){
                    $(this).removeAttr('size');
                }
            }
        });
            $("#"+this.id).focus(function(event) {
                //Commented for the MYWU-1649
            if(!this.dropDownMouseClicked){
                  var isFirefox = typeof InstallTrigger !== 'undefined' || Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                  if(isFirefox==true){

                        $(this).attr('size','10');
                        $(this).on('click',function(){
                              var attr = $(this).attr('size');
                              if(typeof attr !== 'undefined' && attr !== false){
                                    $(this).removeAttr('size');
                              }
                        });
                        $(this).focusout(function(){
                              var attr = $(this).attr('size');
                              if(typeof attr !== 'undefined' && attr !== false){
                                    $(this).removeAttr('size');
                              }
                        });

            }}
                  $(self.defaultContainer).find(".wu-dropdown-mask-container").addClass(self.focusClass);
            this.dropDownMouseClicked=false;
            });


            $("#"+this.id).blur(function() {
                  $(self.defaultContainer).find(".wu-dropdown-mask-container").removeClass(self.focusClass);
            var isFirefox = typeof InstallTrigger !== 'undefined' || Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                  if(isFirefox==true){
                $(this).removeAttr('size');
                this.dropDownMouseClicked=false;
            }
            });
      },
      
      /**
      * to change drop down value after rendered
      */
      __changeValue : "to change drop down value after rendered",
      changeValue : function(value){
            $("#"+this.id).val(value);
      },

      /**
      * to update pre option configuration
     * @param showPreOption : true/false; preOptionValue : 0; preoptionText : - Select -
     */
      __setPreOption : 'list of dropdown, should be in this form : [{value:"", text:""}] ',
    setPreOption : function(showPreOption, preOptionValue, preOptionText){
        this.showPreOption = showPreOption? showPreOption : this.showPreOption;
        this.preOptionValue = preOptionValue? preOptionValue : this.preOptionValue;
        this.preOptionText = preOptionText? preOptionText : this.preOptionText;
        
        this.data[this.SHOW_PRE_OPTION_KEY] = this.showPreOption;
        this.data[this.PRE_OPTION_VALUE_KEY] = this.preOptionValue;
        this.data[this.PRE_OPTION_TEXT_KEY] = this.preOptionText;
    },

    /**
      * to update option list
      * @param options : [{value:"", text:""}]
      */
    __setOptions : 'to update option list<br>  @param options : [{value:"", text:""}]',
      setOptions : function(options){
            this.options = options;
            this.data[this.OPTIONS_KEY] = this.options;
      },

      /**
      * update list with new options
      * @param options : [{value:"", text:""}], defaultValue : value in String, showPreOption: flag to show pre option
      */
      __updateList : ' update list with new options<br> @param options : [{value:"", text:""}], defaultValue : value in String, showPreOption: flag to show pre option',
      updateList : function(options, defaultValue, showPreOption){
            this.setOptions(options);
            
            this.showPreOption = showPreOption !== undefined? showPreOption : this.showPreOption;
            this.data[this.SHOW_PRE_OPTION_KEY] = this.showPreOption;
            if(showPreOption){
                  this.data[this.PRE_OPTION_VALUE_KEY] = this.preOptionValue;
                  this.data[this.PRE_OPTION_TEXT_KEY] = this.preOptionText;
            }
            
            this.defaultValue = defaultValue? defaultValue : this.defaultValue;

            //re-render drop down without calling preRender
            this.renderTemplate(this.data, this.defaultContainer);
      },

      /**
      * main function of sort. only works for array of object.
      * will updating the array in reference.
      * @param dropDownList:[] array to be sorted,
      * sortBy:"String" key of which the value getting from,
      * order:(1/-1) to determine sorting behavior (asc/desc)
      */
      __sortList : "main function of sort. only works for array of object.  will updating the array in reference.<br>"
      +  "@param dropDownList:[] array to be sorted,<br>"
      +  '@sortBy:"String" key of which the value getting from,<br>'
      +  "@order:(1/-1) to determine sorting behavior (asc/desc)<br>",
      sortList : function(dropDownList, sortBy, order){
            dropDownList.sort(function sort(x,y) {
                  /**
                  * return
                  * 0: keep order of x and y
                  * 1: x should be swapped to the right
                  * -1: x should be swapped to the left
                  */
                  return ((x[sortBy] == y[sortBy]) ? 0 : ((x[sortBy] > y[sortBy]) ? order : (order * -1) ));
            });
      },

      /**
      * sort list ascending
      */
      __sortListAsc : "sort list ascending",
      sortListAsc : function(dropDownList, sortBy){
            var ascending = 1;
            this.sortList(dropDownList, sortBy, ascending);
      },

      /**
      * sort list descending
      */
      __sortListDesc : "sort list descending",
            sortListDesc : function(dropDownList, sortBy){
            var descending = -1;
            this.sortList(dropDownList, sortBy, descending);
      },

      /**
      * override this function to map response to template then set this as data
      * data should be returned in this form : [{value:"", text:""}]
      * <option value="value">text</option>
      */
      __mapResponse : 'override this function to map response to template then set this as data data should be returned in this form : [{value:"", text:""}] ',
      mapResponse : function(response){
            var options = [];

            return options;
      },
      
      __disabledDropDown : "Disabled drop down.",
      disabledDropDown : function(){
            $("#"+this.id).attr('disabled', 'disabled');
            $("#"+this.id).addClass('disabled');
            $("#"+this.id).parent().addClass("dropdown-disabled");
      },
      
      __enabledDropDown : "Enabled drop down.",
      enabledDropDown : function(){
            $("#"+this.id).removeAttr('disabled');
            $("#"+this.id).removeClass('disabled');
            $("#"+this.id).parent().removeClass("dropdown-disabled");
      }
});
Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUDropDownCountryList = Clazz.extend(Clazz.com.wu.widget.module.WUDropDownMenu, {

	/**
	 * flag to show top country. set this before rendering
	 */
	__isTopCountryShown : " flag to show top country. set this before rendering",
	isTopCountryShown : false,

	/**
	 * top country list
	 */
	__topCountryRecord : " top country list ",
	topCountryRecord : null,

	/**
	 * flag to show military base. set this before rendering
	 */
	__isMilitaryBaseShown : " flag to show military base. set this before rendering ",
	isMilitaryBaseShown : true,

	//country list api
	__databaseListener : "An instance listener of GetDatabaseListener.",
	databaseListener : null,
	__callback : "Variable which stores the value of a method that will be executed.",
    callback:null,	
    __currentObj : "variable containing the widget class.",
	currentObj:null, 

	initialize : function(config){
		if(config){
			this.setData(config);
		}
		
		this.listChangedEvent = new signals.Signal();
		this.listChangedEvent.add(this.onListChanged, this);
		
		this.isTopCountryShown = config && config.isTopCountryShown !== undefined? config.isTopCountryShown : this.isTopCountryShown;
		this.isMilitaryBaseShown = config && config.isMilitaryBaseShown !== undefined? config.isMilitaryBaseShown : this.isMilitaryBaseShown;
		this.callback=config.callback;	 
		this.currentObj = config.currentObj ;
		this.databaseListener = new Clazz.com.listener.GetDatabaseListener();
		this.senderCountry = Clazz.WUNavigator.getSenderCountryFromURL();
		this.senderLanguage = Clazz.WUNavigator.getSenderLanguageFromURL();
	},

	preRender : function(whereToRender, renderFunction){
		var options = [];
		this.setOptions(options);
		
		var destinationCountryList = Clazz.WULocalStorage.getDestinationCountryList()? JSON.parse(Clazz.WULocalStorage.getDestinationCountryList()) : null;
		var destinationCountry = destinationCountryList && destinationCountryList[this.senderCountry]? destinationCountryList[this.senderCountry] : null;
		var destinationLocalStorageList = destinationCountry && destinationCountry[this.senderLanguage]? destinationCountry[this.senderLanguage] : null;
		
		var sortBy = "COUNTRY_NAME";

		if(destinationLocalStorageList){
			if(destinationLocalStorageList.record == null || destinationLocalStorageList.record == undefined){
				if(destinationLocalStorageList.records && destinationLocalStorageList.records.record){
					//this.sortListAsc(destinationLocalStorageList.records.record, sortBy);		//comment for PBL-1643
				}
			}else{
				//this.sortListAsc(destinationLocalStorageList.record, sortBy);			//comment for PBL-1643
			}

			var destinationCountryList = this.isTopCountryShown? this.concatTopCountry(destinationLocalStorageList) : destinationLocalStorageList;
			options = this.mapResponse(destinationCountryList);
			this.setOptions(options);

			renderFunction(this.data, whereToRender);
		}else{
			var self = this;
			this.databaseListener.onGetDestinationCountryList(this.getListDestinationCountryPostBodyRequest(),function(response){
				if(response){
					if(!response.error){
						localStorage.currentCountry=Clazz.WUNavigator.getSenderCountryFromURL();
						//self.sortListAsc(response.database.records.record, sortBy);		//comment for PBL-1643
						destinationLocalStorageList = Clazz.WULocalStorage.getDestinationCountryList()? JSON.parse(Clazz.WULocalStorage.getDestinationCountryList()) : {};
						destinationLocalStorageList[self.senderCountry] = destinationLocalStorageList[self.senderCountry]? destinationLocalStorageList[self.senderCountry] : {};
						destinationLocalStorageList[self.senderCountry][self.senderLanguage] = response.database.records;
						Clazz.WULocalStorage.setDestinationCountryList(JSON.stringify(destinationLocalStorageList));

						var destinationCountryList = self.isTopCountryShown? self.concatTopCountry(response.database.records) : response.database.records;
						options = self.mapResponse(destinationCountryList);
						self.setOptions(options);
					}else{
						//alert(response.error.message); //MYWU-628- Unwanted Error MEssage removed
					}
				}
				renderFunction(self.data, whereToRender);
			}, function(error){
				renderFunction(self.data, whereToRender);
			});
		}
	},

	/**
	 * concatenate top country list with destination country list
	 */
	__concatTopCountry : " concatenate top country list with destination country list ",
	concatTopCountry : function(destinationCountryListResponse){
		if(destinationCountryListResponse.topCountryRecord && destinationCountryListResponse.topCountryRecord.length > 0){
			var record = destinationCountryListResponse.record;
			var topCountry = destinationCountryListResponse.topCountryRecord;
			this.topCountryRecord = topCountry;
			destinationCountryListResponse.record = topCountry.concat(record);
		}else
        {

            if(Clazz.WUNavigator.getSenderCountryFromURL()==="IE")
            {
                var record = destinationCountryListResponse.record;
				var topCountry = this.tempTopCountryies("IE");
				this.topCountryRecord = topCountry;
				destinationCountryListResponse.record = topCountry.concat(record);
            }

        }

		return destinationCountryListResponse;
	},
    /**
    * Temperory fix until top country error is fixed for International in Ps layer
    * Need to removed. Once the top country is availble on GetDatabase response for IE
    */
    tempTopCountryies:function(countryCode)
    {
        var topcountry=new Array();
        if(countryCode==="IE")
        {
            var temp_Object=new Object();
            temp_Object["SENDER"]="IE";
            temp_Object["COUNTRY_NAME"]="India";
            temp_Object["COUNTRY_CODE"]="IN";
            topcountry.push(temp_Object);
            temp_Object=new Object();
            temp_Object["SENDER"]="IE";
            temp_Object["COUNTRY_NAME"]="Pakistan";
            temp_Object["COUNTRY_CODE"]="PK";
            topcountry.push(temp_Object);
            temp_Object=new Object();
            temp_Object["SENDER"]="IE";
            temp_Object["COUNTRY_NAME"]="Philippines";
            temp_Object["COUNTRY_CODE"]="PH";
            topcountry.push(temp_Object);
            temp_Object=new Object();
            temp_Object["SENDER"]="IE";
            temp_Object["COUNTRY_NAME"]="Poland";
            temp_Object["COUNTRY_CODE"]="PL";
            topcountry.push(temp_Object);
            temp_Object=new Object();
            temp_Object["SENDER"]="IE";
            temp_Object["COUNTRY_NAME"]="United Kingdom";
            temp_Object["COUNTRY_CODE"]="GB";
            topcountry.push(temp_Object);



        }

        return topcountry;
    },

	/**
	 * append separator after top country
	 */
	__appendSeparator : " append separator after top country ",
	appendSeparator : function(){
		if(this.isTopCountryShown && this.topCountryRecord){
			//insert tag span and tag option for a drop down list after top 5 country
			var topCountryLength = this.topCountryRecord.length;
			var indexToInsert = this.showPreOption? topCountryLength : topCountryLength-1;
			var lastTopCountryOption = $("#"+this.id+" > option").eq(indexToInsert);

			//RINTL-28728
			$("<option disabled style='display: block; visibility:visible' value='-1'>--------------------------------</option>").insertAfter(lastTopCountryOption);

			//calling this method because the list is updated
			this.updateValue();
		}
	},
	__mapResponse : "Mapping response by category value_key and text_key for country code and country name.",
	mapResponse : function(records){
		var options = [];
		var countryList = null;

		if(records && records.record){
			countryList = records.record;
		}else if(records && records.records && records.records.record){
			countryList = records.records.record;
		}

		if(countryList){
			for(var i=0;i<countryList.length;i++){
				var currentCountry = countryList[i];
				var country = {};
				country[this.VALUE_KEY] = currentCountry["COUNTRY_CODE"];
				country[this.TEXT_KEY] = currentCountry["COUNTRY_NAME"];

				var militaryBase = currentCountry["IS_MILITARY_BASE"];
				var isMilitaryBase = militaryBase != undefined && militaryBase == "y";

                // RINTL-15602 - US Military Base countries must not be listed in R3 Australia.                
                if(this.isMilitaryBaseShown || !isMilitaryBase){
					options.push(country);
				}
			}
		}

		return options;
	},

	__getCountryName : "Get country name from country code.",
	getCountryName : function(code){
		var countryName;
		for(var i in this.data[this.OPTIONS_KEY]){
			var country = this.data.options[i];
			var countryCode = country[this.VALUE_KEY];
			if(code == countryCode){
				countryName = country[this.TEXT_KEY];
				break;
			}
		}
		return countryName;
	},

	postRender : function() {
		this.appendSeparator();
        if(this.callback)this.callback(this.currentObj);
	},

	//get country list request body - START
	__getListDestinationCountryPostBodyRequest : "Get list destination country post body request.",
	getListDestinationCountryPostBodyRequest : function(){
		var postBodyObject = new Object();
		postBodyObject['security'] = this.getSecurityObj();
		postBodyObject["database"] = this.getDatabaseObj();
		postBodyObject['external_reference_no'] = "1";

		return postBodyObject;
	},

	__getSecurityObj : "Get security object.",
	getSecurityObj : function(){
		var security = new Object();
		security["session"] = this.getIdObj();
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		return security;
	},

	__getIdObj : "Get id object.",
	getIdObj : function() {
		var id = new Object();
		id["id"] = this.sessionId;
		return id;

	},

	__getDatabaseObj : "Get database object.",
	getDatabaseObj : function() {
		var info = new Object();
		info["info"] = this.getInfoObj();
		return info;
	},

	__getInfoObj : "Get info object.",
	getInfoObj : function() {
		var obj = new Object();
		obj["name"] = "DESTINATION_COUNTRY_LIST";
		obj["client_version"] = "0";
		return obj;
	}
	//get country list request body - END

});
