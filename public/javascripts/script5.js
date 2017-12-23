(function(a,b){if(typeof exports=="object"){module.exports=b()}else{a.Spinner=b()}}(this,function(){var e=["webkit","Moz","ms","O"],o={},n;function g(p,s){var q=document.createElement(p||"div"),r;for(r in s){q[r]=s[r]}return q}function h(q){for(var p=1,r=arguments.length;p<r;p++){q.appendChild(arguments[p])}return q}var i=(function(){var p=g("style",{type:"text/css"});h(document.getElementsByTagName("head")[0],p);return p.sheet||p.styleSheet}());function c(t,p,u,x){var q=["opacity",p,~~(t*100),u,x].join("-"),r=0.01+u/x*100,w=Math.max(1-(1-t)/p*(100-r),t),v=n.substring(0,n.indexOf("Animation")).toLowerCase(),s=v&&"-"+v+"-"||"";if(!o[q]){i.insertRule("@"+s+"keyframes "+q+"{0%{opacity:"+w+"}"+r+"%{opacity:"+t+"}"+(r+0.01)+"%{opacity:1}"+(r+p)%100+"%{opacity:"+t+"}100%{opacity:"+w+"}}",i.cssRules.length);o[q]=1}return q}function m(t,u){var r=t.style,p,q;if(r[u]!==undefined){return u}u=u.charAt(0).toUpperCase()+u.slice(1);for(q=0;q<e.length;q++){p=e[q]+u;if(r[p]!==undefined){return p}}}function f(p,r){for(var q in r){p.style[m(p,q)||q]=r[q]}return p}function k(r){for(var p=1;p<arguments.length;p++){var q=arguments[p];for(var s in q){if(r[s]===undefined){r[s]=q[s]}}}return r}function j(p){var q={x:p.offsetLeft,y:p.offsetTop};while((p=p.offsetParent)){q.x+=p.offsetLeft,q.y+=p.offsetTop}return q}var d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};function b(p){if(typeof this=="undefined"){return new b(p)}this.opts=k(p||{},b.defaults,d)}b.defaults={};k(b.prototype,{spin:function(y){this.stop();var C=this,q=C.opts,r=C.el=f(g(0,{className:q.className}),{position:q.position,width:0,zIndex:q.zIndex}),B=q.radius+q.length+q.width,D,A;if(y){y.insertBefore(r,y.firstChild||null);A=j(y);D=j(r);f(r,{left:(q.left=="auto"?A.x-D.x+(y.offsetWidth>>1):parseInt(q.left,10)+B)+"px",top:(q.top=="auto"?A.y-D.y+(y.offsetHeight>>1):parseInt(q.top,10)+B)+"px"})}r.setAttribute("role","progressbar");C.lines(r,C.opts);if(!n){var v=0,p=(q.lines-1)*(1-q.direction)/2,u,s=q.fps,x=s/q.speed,w=(1-q.opacity)/(x*q.trail/100),z=x/q.lines;(function t(){v++;for(var E=0;E<q.lines;E++){u=Math.max(1-(v+(q.lines-E)*z)%x*w,q.opacity);C.opacity(r,E*q.direction+p,u,q)}C.timeout=C.el&&setTimeout(t,~~(1000/s))})()}return C},stop:function(){var p=this.el;if(p){clearTimeout(this.timeout);if(p.parentNode){p.parentNode.removeChild(p)}this.el=undefined}return this},lines:function(r,t){var q=0,u=(t.lines-1)*(1-t.direction)/2,p;function s(v,w){return f(g(),{position:"absolute",width:(t.length+t.width)+"px",height:t.width+"px",background:v,boxShadow:w,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*q+t.rotate)+"deg) translate("+t.radius+"px,0)",borderRadius:(t.corners*t.width>>1)+"px"})}for(;q<t.lines;q++){p=f(g(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:n&&c(t.opacity,t.trail,u+q*t.direction,t.lines)+" "+1/t.speed+"s linear infinite"});if(t.shadow){h(p,f(s("#000","0 0 4px #000"),{top:2+"px"}))}h(r,h(p,s(t.color,"0 0 1px rgba(0,0,0,.1)")))}return r},opacity:function(q,p,r){if(p<q.childNodes.length){q.childNodes[p].style.opacity=r}}});function l(){function p(r,q){return g("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',q)}i.addRule(".spin-vml","behavior:url(#default#VML)");b.prototype.lines=function(u,t){var q=t.length+t.width,A=2*q;function z(){return f(p("group",{coordsize:A+" "+A,coordorigin:-q+" "+-q}),{width:A,height:A})}var v=-(t.width+t.length)*2+"px",y=f(z(),{position:"absolute",top:v,left:v}),x;function w(s,r,B){h(y,h(f(z(),{rotation:360/t.lines*s+"deg",left:~~r}),h(f(p("roundrect",{arcsize:t.corners}),{width:q,height:t.width,left:t.radius,top:-t.width>>1,filter:B}),p("fill",{color:t.color,opacity:t.opacity}),p("stroke",{opacity:0}))))}if(t.shadow){for(x=1;x<=t.lines;x++){w(x,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(x=1;x<=t.lines;x++){w(x)}return h(u,y)};b.prototype.opacity=function(r,q,t,s){var u=r.firstChild;s=s.shadow&&s.lines||0;if(u&&q+s<u.childNodes.length){u=u.childNodes[q+s];u=u&&u.firstChild;u=u&&u.firstChild;if(u){u.opacity=t}}}}var a=f(g("group"),{behavior:"url(#default#VML)"});if(!m(a,"transform")&&a.adj){l()}else{n=m(a,"animation")}return b}));
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

Clazz.createPackage("com.wu.util");

Clazz.com.wu.util.WURegex = {
				IN : {
                                zipCode : /^\d{6}$/,
				},
                BY : {
                                zipCode : /^\d{6}$/, //PBL-1645
                },
                CN : {
                                zipCode : /^\d{6}$/, //PBL-2000
                },
                LR : {
                                zipCode : /(^\d{4}$)|(^\d{4}-\d{2}$)/, //PBL-1946
                },              
                IE : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |-|')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                //address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                    			//address2 : /(?!(.)\0+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{0})(?=.*[a-zA-Z]{0})(?=(.*[a-zA-Z\d]){1}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{1,40}$/,
								address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,//PBL-2488
								address2 :/(?!(.)\0+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{0})(?=.*[a-zA-Z]{0})(?=(.*[a-zA-Z\d]){1}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,//PBL-2488
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : undefined,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                GB : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-|\.)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,40}$/i,
                                lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^[a-zA-Z0-9 ]{5,10}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
                                sortCode : /^\d{6}$/,
                                zipCodeKeyup : /^[a-zA-Z0-9 ]+$/,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                zipCodeReplace : /[^0-9a-zA-Z ]/g,
                                securityAnswer : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-.)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{3,25}$/
                                
                },
                
                FR : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },
                
                DE : {
                                firstName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[\sa-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                AU : {
                                firstName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{2})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,40}$/i,
                                lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                               // address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
								address : /(?!(.)\0+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{3})(?!.*([ \*\"\(:,\/\.\\;&\)\[\]_\+#'-])\3{2})(?!.*( |'|-)\4{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/i,
                                //Start PBL-1493:
								//city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
								city : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
								// End PBL-1493:
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{4}$/,
                                contactPhone : /^(?!(.)\1+$)^(^0\d{9,9})$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
        bankName :  /[a-zA-Z0-9 ]+[\.]{0,1}$/,


                },

                CA : {
								firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-|\.)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,40}$/i,
                                lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address :/(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-|,)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /([a-zA-Z][0-9][a-zA-Z]( )?[0-9][a-zA-Z][0-9])$/,
                                contactPhone :  /^(?!(.)\1+$)(?:[0-9]{3})(?!(\d)\2+$)[0-9]{7}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
                                zipCodeKeyup : /^[a-zA-Z0-9]+$/,
                                zipCodeReplace : /[^0-9a-zA-Z]/g
                },
                
                US : {
                                contactPhone : /^(?:[2-9][0-8][0-9])(?!(\d)\1+$)([2-9])(?!11)([0-9]{6})$/
                },

                HU : {
                                firstName : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]){2,25}$/i,
                                middleName : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]){1,25}$/i,
                                lastName : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]){2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^[a-zA-Z0-9 ]{4,10}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
                                sortCode : /^\d{6}$/,
                                zipCodeKeyup : /^[a-zA-Z0-9 ]+$/,
                                zipCodeReplace : /[^0-9a-zA-Z ]/g
                },

     MT : {
								//Start PBL-1739-updated for PBL-1956

								firstName :  /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |-|')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ '-.]{2,25}$/i,
                                middleName : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ '-.]){1,25}$/,                              
								lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |-|')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ '-.]{2,25}$/i,
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§])\2{3})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*('|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ \.'-]{2,24}$/,
								//End PBL-1739
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§ \.'-]/g,
                                zipCode : /^[a-zA-Z0-9 ]{5,10}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ÄŠÄ‹Ä Ä¡Ä§Ä§Å»Å¼Ä¦Ä§0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
                                sortCode : /^\d{6}$/,
                                zipCodeKeyup : /^[a-zA-Z0-9 ]+$/,
                                zipCodeReplace : /[^0-9a-zA-Z ]/g
                },




                BG : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{4}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                LT : {
                                //Start PBL-2140
								firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾ '-.]{2,25}$/,
                                //firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
								//End PBL-2140
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                //Start PBL-2140
								lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä„ÄŒÄ˜Ä–Ä®Å Å²ÅªÅ½Ä…ÄÄ™Ä—Ä¯Å¡Å³Å«Å¾ '-.]{2,40}$/i,
								//End PBL-2140
								// lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^LT\s{0,1}\d{5}$/i,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

				LI : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{4}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

				IS : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{3}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                SK : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{3}\s{0,1}\d{2}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                SI : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^SI\s{0,1}\d{4}$/i,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                CZ : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{3}\s{0,1}\d{2}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                RO : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{6}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                CY : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{4}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                LV : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^LV\s{0,1}\d{4}$/i,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },

                HR : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/,
                               middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/,
                                // lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!.*(.)\1{2})^(?! )((?!\'\')(?!  )(?! $)[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]){2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{3}\s{0,1}\d{2}$/,
                                county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/
                },
                BE : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{4}$/,
                },
				CH : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{4}$/,
                },
				LU : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^(?=[a-zA-Z_\+\[\]\:\;\'\,\/.\-"!@#$%^&*()\d]{4,7}$)[a-zA-Z_\+\[\]\:\;\'\,\/.\-"!@#$%^&*()]*\d{4}[a-zA-Z_\+\[\]\:\;\'\,\/.\-"!@#$%^&*()]*$/,
                },
				IT : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{5}$/,
                },
				AT : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{6,17}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{6,17})$/,
								zipCode : /^\d{4}$/,
                },
				PT : { //PBL-2483 maxlength for first,middle and lastname 50 for PT
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,50}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,50}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,50}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{4}[ _\+\[\]\:\;\'\,\/.\-"!@#$%^&*()\s]{0,1}\d{3,4}$/,
                },
				GR : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^[_\+\[\]\:\;\'\s\,\/.\-"!#$&*()\d]{5,6}$/,
                },
				EE : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{5}$/,
                },
				PL : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÃ½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÅ›Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÃ½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÅ›Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÃ½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÅ›Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼ÅÄ…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÃ½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{2}[_\+\[\]\:\;\'\,\/.\-"!@#$%^&*()\s]{0,1}\d{3,4}$/,
                },
				ES : { //PBL-2483 maxlength for first,middle and lastname 50 for ES
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,50}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,50}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,50}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^([0-4][0-9]|5[0-2])\d{3}$/,
                },
                NZ : {
                                firstName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{2})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,40}$/i,
                                lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                               // address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
								address : /(?!(.)\0+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{3})(?!.*([ \*\"\(:,\/\.\\;&\)\[\]_\+#'-])\3{2})(?!.*( |'|-)\4{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/i,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                zipCode : /^\d{4}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
        bankName :  /[a-zA-Z0-9 ]+[\.]{0,1}$/,


                },
				NL : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{4}[ _\+\[\]\:\;\'\,\/.\-"!@#$%^&*()\s]{0,2}[a-zA-Z]{2}$/,
                },
				FI : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{5}$/,
                },
				SE : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{5,6}$/,
                                idNumber : /^[\d]{10}$|^[\d]{12}$/
                },
				NO : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{4}$/,
                                idNumber : /^\d{11}$/,
                },
				DK : {
                                firstName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
                                lastName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                /*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b][O|o|0][X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
								county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
                                cityInputKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]/g,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9\s\.'-]{3,20}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{7,15})$/,
								zipCode : /^\d{4}$/,
                                idNumber : /^\d{10}$/,
                },
				RU : {
					firstName :  /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |-|')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½Ðž Ð¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃ†Ã‡Ð‘ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
					middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{1,25}$/i,
					lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |-|')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½Ðž Ð¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃ†Ã‡Ð‘ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
					/*password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789#!$%]).{8,20})/,*/
					address : /^(?!(?:[ \d]+|[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿ ]+)$)(?!(.)\1+$)(?!.*([a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9])\2{3})(?!.*[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\n]{2})(?=(?:[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\n]*[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9]){3})(?!.*[Pp]+(OST|ost)*\.*\s*[Oo0]*(FFICE|ffice)*\.*\s*[Bb]*\.*\s*[Oo0]*\.*\s*[Xx].*)[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\ *"(:,\/.\\;&)\[\]_+#'-]{3,40}$/,
					address2 : /^(?!(?:[ \d]+|[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿ ]+)$)(?!(.)\1+$)(?!.*([a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9])\2{3})(?!.*[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\n]{2})(?=(?:[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\n]*[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9]){3})(?!.*[Pp]+(OST|ost)*\.*\s*[Oo0]*(FFICE|ffice)*\.*\s*[Bb]*\.*\s*[Oo0]*\.*\s*[Xx].*)[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\ *"(:,\/.\\;&)\[\]_+#'-]{1,40}$/,
					combAdd : /^(?!(?:[ \d]+|[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿ ]+)$)(?!(.)\1+$)(?!.*([a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9])\2{3})(?!.*[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\n]{2})(?=(?:[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\n]*[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9]){3})(?!.*[Pp]+(OST|ost)*\.*\s*[Oo0]*(FFICE|ffice)*\.*\s*[Bb]*\.*\s*[Oo0]*\.*\s*[Xx].*)[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿0-9\ *"(:,\/.\\;&)\[\]_+#'-]{3,80}$/,
					city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿]){1}.*$)^[a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿ \.'-]{2,24}$/i,
					cityInputKeyup : /[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿ \.'-]/g,
					zipCode : /^[0-9]{5,15}$/,
					county : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=([^ ].*[a-zA-ZÐ°-ÑÐ-Ð¯Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){1}.*$)^[a-zA-ZÐ°-ÑÐ-Ð¯Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ \.'-]{2,24}$/i,
					contactPhone : /^(?!(\d)\1+$|\d*(\d)\2{6}$)\d{7,15}$/,
					answerTest : /^[a-zA-ZÐ°-ÑÐ-Ð¯Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \.'-]{3,20}$/,
					mobileNumber : /^(?!(\d)\1+$|\d*(\d)\2{6}$)\d{7,15}$/,
					idnumber	: /(?!(.)\1+$)(?!.*([a-zA-Z])\2{2})(?!.*( |'|-|")\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃ¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃ¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§ÐÐ°Ð‘Ð±Ð’Ð²Ð“ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃ¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{1,12}$/,
					idissuer	: /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |-|')\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½ÐžÐ¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„ÐÐ°Ð‘Ð±Ð’Ð²Ð“Ð³Ð”Ð´Ð•ÐµÐ–Ð¶Ð—Ð·Ð˜Ð¸Ð™Ð¹ÐšÐºÐ›Ð»ÐœÐ¼ÐÐ½Ðž Ð¾ÐŸÐ¿Ð Ñ€Ð¡ÑÐ¢Ñ‚Ð£ÑƒÐ¤Ñ„Ð¥Ñ…Ð¦Ñ†Ð§Ñ‡Ð¨ÑˆÐ©Ñ‰ÐªÑŠÐ«Ñ‹Ð¬ÑŒÐ­ÑÐ®ÑŽÐ¯ÑÃ†Ã‡Ð‘ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,50}$/i,
					alphaCodeKeyup : /[^a-zA-ZÃ€-Ã–Ã˜-ÃŸÅ¸Ã -Ã§Ð°-ÑÐ-Ð¯ÐÑ‘Ã¨-Ã¿Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9_ #&()+*",';:.\\\/\-\[\]]+$/
                },
                EDI : {
                        ES : {
                                firstName :/[^]*/,
                                middleName : /[^]*/,
                                lastName : /[^]*/,
                                password : /[^]*/,
                                currentPassword : /[^]*/,
                                address : /[^]*/,
                                address2 : /[^]*/,
                                city : /[^~,][^~,]*/,
                                cityInputKeyup : /[0-9A-Za-z!@#$%^&*()_+}{|[]\;':"<?>,.]/,
                                zipCode : /[^]*/,
                                contactPhone : /[^]*/,
                                mobileNumber : /[^]*/,
                                /* Contact Phone Receiver use for edit contact, add contact and receiver information*/
                                contactPhoneReceiver : /[^]*/,
                                postalCode : /[^]*/,
                                senderPhoneNumber : /[^]*/,
                                zipCodeKeyup : /[0-9A-Za-z!@#$%^&*()_+}{|[]\;':"<?>,.]/,
                                zipCodeReplace : /[0-9A-Za-z!@#$%^&*()_+}{|[]\;':"<?>,.]/
                        }
                },
                global : {
                                firstName :/(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-|\.)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,25}$/i,
                                middleName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{2})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .-]*){0,1}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.-]){1}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{0,40}$/i,
                                lastName : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿.]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{2,40}$/i,
                                password : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789@!&$%]).{8,20})/,
                                currentPassword : /((?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789@!&$%]).{7,20})/,
                                address : /(?!(.)\1+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{2})(?!.*( |'|-|"|\.|\_|\*|\&|\(|\))\3{1})(?=.*\d{1})(?=.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿\d]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,40}$/,
                    			address2 : /(?!(.)\0+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-])\2{2})(?!.*( |'|-)\3{1})(?=.*\d{0})(?=.*[a-zA-Z]{0})(?=(.*[a-zA-Z\d]){1}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{1,40}$/,
								combAdd : /(?!(.)\0+$)(?!.*([a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ä…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÃ¹ÃºÃ»Ã¼Ã½Ã¾Ã¿])\2{3})(?!.*([ \*\"\(:,\/\.\\;&\)\[\]_\+#'-])\3{2})(?!.*( |'|-)\4{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9]){3}.*$)(?!.*[P|p]+(OST|ost)*\.*\s*[O|o|0]*(FFICE|ffice)*\.*\s*[B|b]*\.*\s*[O|o|0]*\.*\s*[X|x].*)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ä…Å›Ä…Ä‡Ä™Å‚Å„Ã³Å›Ã½Ã¾Ã¿0-9 \*\"\(:,\/\.\\;&\)\[\]_\+#'-]{3,80}$/i,
								splCharRep : /([;._\'\(\)#&\*\"+\/\[\]\:\\-]{2}.*)$/,
                                city : /(?!(.)\1+$)(?!.*( |'|-)\2{1})(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿]){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼ÅÄ…Ä‡Ä™Å‚Å„Ã³Å›Å¼ÅºÃ½Ã¾Ã¿ \.'-]{2,24}$/i,
                                zipCode : /^\d{5}$/,
                                contactPhone : /^[0-9]{7,15}$/,
                                answerTest : /(?!(.)\1+$)(?!.*(.)\2{2})(?!.*( |'|-)\3{1})(?=\S*(\s\S*){0,4}$)(?=[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*(['-][a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ .]*){0,2}$)(?=(.*[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿].){2}.*$)^[a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿ '-.]{3,40}$/,
                                mobileNumber : /^(?!(.)\1+$)^(|[0-9]{9,15})$/,
                                addBankRoutingNumber : /^\d{9}$/,
                                addBankAccountNumber : /^\d{1,25}$$/,
                                addBillerAccountNumber : /^[A-Za-z0-9]{1,20}$/,
                                phoneNumberTrackTransfer : /^[0-9]{10}$/,
                                addContactInfoIbanBic : /[^\w\s]/,
                                addChar : /^[a-zA-Z0-9\b \#\(\{\}\&\)\[\]\_\+\:\;\'\,\/.\-\"\*\\]+$/,
                                customCharAddress : /^[a-zA-Z0-9\b \#\(\{\}\&\)\[\]\_\+\:\;\'\,\/.\-\"\*\\]+$/,
                                state : /[^00]/,
                                county : undefined,
                                /* Contact Phone Receiver use for edit contact, add contact and receiver information*/
                                contactPhoneReceiver : /^[0-9]{7,15}$/,
                                alphabet : /[a-zA-Z\-]/,
                                postalCode : /^\d{5}$/,
                                negatedAlphabetWithSpace : /[^a-zA-Z \s]/gi,
                                email : /(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/,//PBL-1790
                                lastSevenDigitContactPhone : /^(?!.*(\d)\1{6}\b)^[0-9]{0,15}$/,
                                number : /^[0-9]+$/,
                                matchSpace : /\s \.+/g,
                                alphaNumeric : /(?!.*( )\1{1})^[0-9a-zA-Z ]+$/,
        alphaNumericWthDot : /(?!.*( )\1{1})^[0-9a-zA-Z. ]+$/,
                                alphaNumericRut : /^[0-9]{2}.?[0-9]{3}.?[0-9]{3}-?[0-9k]$/, 
                                notAlphaNumeric : /[^0-9a-zA-Z]/gi,
                                alphaNumericWithSpace : /(?!.*( )\1{1})^(?![0-9]*$)[a-zA-Z0-9 ]+$/,
                                notAlphaNumericWithSpace : /[^0-9a-zA-Z ]/gi,
                                negatedNumber : /[^0-9]/g,
                                nationalId : /[^0-9a-z]/g,
                                amount : /^([0-9]{0,14}(\.\d{0,2})?)?$/,//Updating length per PBL-1831
                                sendMoneyAmount : /^(?=.)([1-9][0-9]{0,2}(,[0-9]{0,3})|[0-9]{0,14})?(\.[0-9]{0,2})?$/,
                                zeroAmount : /^[0]+\.?[0]?[0]?$/,
                                usPromoCode : /^[A-Za-z0-9\-]{0,20}$/,
                                trackingNumber : /^[0-9]{0,10}$/,
                                validatePromocode : /[^A-Za-z0-9\-]{0,20}$/,
                                promoCode : /^[A-Za-z0-9\-]{0,20}(\s[A-Za-z0-9\-]{1,20})*?$/,
                                negatedAmountNumber : /[^0-9.,]/g,
                                cnMobileNumber : /^(?:1[1-9][0-9][0-9])(?!(\d)\2+$)([0-9])([0-9]{6})$/,//PBL-1955
                                mobileNumberAnyDigit : /^[\d+$]{10,10}/,
                                charRestricted : /^[^\"$%&()*+;@*_~>?<[\]^`{|}!#]+$/g,
                                masterCard : /^5[1-5]\d{14}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))\d{12}$/,
                                electronCard : /^(4026|417500|4508|4844|491|4913|4917)/,
                                visaCard1 : /^4\d{15}/,
                                visaCard2 : /^4\d{12}/,
                                maestroCard : /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,18}/,
                                discoverCard : /^6011\d{12}/,
                                BillerAccountNumber : /^[A-Za-z0-9]{0,20}$/,
                                notRepeatedText : /\b(\w)\1+\b/,
                                senderPhoneNumber : /^[0-9]{0,15}$/,
                                reward : /^\d{9}$/,
                                sortCode : /^\d+$/,
                                cityInputKeyup : /[^a-zA-Z \.'-]/g,
                                zipCodeKeyup : /^[0-9]+$/,
                                zipCodeReplace : /[^a-zA-Z0-9 ]/g,
                                accountNumericRegex : /(?=([X]{2,})|(\d{1,}))(?![X]{2,}\d{1,}[X]{1,})(?!\d{1,}[X]{1,}\d{1,})^[0-9X]+$/g,
                                bankName : /^(?=.*[a-zA-Z].*)[a-zA-Z0-9 ]+[\.]{0,1}$/,
                                branchName : /^(?=.*[a-zA-Z].*)[a-zA-Z0-9- ]+[\.]{0,1}$/, //PBL-2258
                                captcha : /[^\\ ]{6}/,
                                idNumber : /^\d{10}$/,
        alphaCodeKeyup : /[^a-zA-ZÃ€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÅ¸Ã Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿0-9_ #&()+*",';:.\\\/\-\[\]]+$/
                }

};

Clazz.WURegex = {};
function generateWURegex() {
                Clazz.WURegex = Clazz.com.wu.util.WURegex.global;
                var selectedCountryIsoCode = Clazz.WUNavigator.getSenderCountryFromURL();
                var spesificCountryRegex = Clazz.com.wu.util.WURegex[selectedCountryIsoCode];
                if(spesificCountryRegex && !($.isEmptyObject(spesificCountryRegex))) {
                                for(var key in Clazz.WURegex) {
                                                if(spesificCountryRegex[key]) {
                                                                Clazz.WURegex[key] = Clazz.com.wu.util.WURegex[selectedCountryIsoCode][key];
                                                }
                                }
                }
                var ediFlag = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()] && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].triggerEDI ? Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].triggerEDI : null;
                var ediLiveMode = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()] && Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].liveEDI ? Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].liveEDI : null;
                if(ediFlag == "true" && ediLiveMode== "true"){
                    var ediRegex = Clazz.com.wu.util.WURegex.EDI;
                    var ediSpecificRegex = Clazz.com.wu.util.WURegex.EDI[selectedCountryIsoCode]; 
                    if(ediSpecificRegex && !($.isEmptyObject(ediSpecificRegex))){
                        for(var key in Clazz.WURegex) {
                            if(ediSpecificRegex[key]) {
                                Clazz.WURegex[key] = ediSpecificRegex[key];
                            }
                        }
                    }
                }
}
generateWURegex(); 

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

Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.constants.URL_BUSINEES = "http://business.westernunion.com/";
Clazz.com.wu.constants.URL_PATNER = "https://agentportal.westernunion.com/ap/loginap.do";
Clazz.com.wu.constants.URL_ABOUT_US = "http://corporate.westernunion.com/";
Clazz.com.wu.constants.URL_FIND_LOCATION = Clazz.WUNavigator.basePath + "agent-locator.html";
Clazz.com.wu.constants.URL_CUSTOMER_CARE = "https://thewesternunion.custhelp.com/app/home/";
Clazz.com.wu.constants.URL_CONSUMER = "http://westernunion.com/";
Clazz.com.wu.constants.URL_SEND_MONEY_TO_INMATE=Clazz.WUNavigator.basePath+"send-inmate/start.html";
Clazz.com.wu.constants.URL_SEND_MONEY_ONLINE_LEARN_MORE=Clazz.WUNavigator.basePath+"send-money-online.html";
Clazz.com.wu.constants.URL_SEND_MONEY_IN_PERSON_LEARN_MORE=Clazz.WUNavigator.basePath+"send-money-in-person.html";
Clazz.com.wu.constants.URL_SEND_MONEY_BY_PHONE_LEARN_MORE=Clazz.WUNavigator.basePath+"send-money-by-phone.html";
Clazz.com.wu.constants.URL_RECEIVE_MONEY_IN_PERSON_LEARN_MORE=Clazz.WUNavigator.basePath+"receive-money.html";
Clazz.com.wu.constants.URL_RECEIVE_MONEY_ON_PREPAID_CARD_LEARN_MORE=Clazz.WUNavigator.basePath+"receive-money-prepaid.html";
Clazz.com.wu.constants.URL_PAY_BILLS_ONLINE_LEARN_MORE=Clazz.WUNavigator.basePath+"pay-bills-online.html";
Clazz.com.wu.constants.URL_PAY_BILLS_IN_PERSON_LEARN_MORE=Clazz.WUNavigator.basePath+"pay-bills-in-person.html";
Clazz.com.wu.constants.URL_PAY_BILLS_BY_PHONE_LEARN_MORE=Clazz.WUNavigator.basePath+"pay-bills-by-phone.html";
Clazz.com.wu.constants.URL_PREPAID_CARD_GETACARD="https://www.wunetspendprepaid.com/prepaid-debit-card/applyNow.m?AID=w_corp&SITEID=home_tab";
Clazz.com.wu.constants.URL_PREPAID_CARD_LEARN_MORE="https://www.wunetspendprepaid.com";
Clazz.com.wu.constants.URL_PREPAID_CARD_RELAOD_LEARN_MORE=Clazz.WUNavigator.basePath+"reload.html";
Clazz.com.wu.constants.URL_PREPAID_CARD_MANAGE_LEARN_MORE="https://www.wuprepaid.com/wuprepaid/public/login.do?login";
Clazz.com.wu.constants.URL_PREPAID_CARD_RELOAD_LEARN_MORE = Clazz.WUNavigator.basePath + "reload.html";
//As part of Medallia requirement script including into pages
Clazz.com.wu.constants.URL_MEDALIA = "https://amch.questionmarket.com/adsc/d871029/5/884239/randm.js?";

Clazz.com.wu.constants.URL_MEDALIA_PAGES = []; //Specify the pages those don't need medallia script loading

//RTHREE-3425 begin
Clazz.com.wu.constants.URL_MEGA_MENU_SEND_MONEY = Clazz.WUNavigator.basePath + "send-money/start.html";
Clazz.com.wu.constants.URL_MEGA_MENU_RECEIVE_MONEY = Clazz.WUNavigator.basePath + "receive-money.html";
Clazz.com.wu.constants.URL_MEGA_MENU_PAY_BILLS = Clazz.WUNavigator.basePath + "pay-bills.html";
Clazz.com.wu.constants.URL_MEGA_MENU_PREPAID_CARDS = "http://www.wuprepaid.com/wuprepaid/public/get.do?view=/public/whyPrepaid";

Clazz.com.wu.constants.PROFILE_PERSONAL_INFO = 4;

//RTHREE-3425 end 
Clazz.com.wu.widget.module.WUHeader = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#header",
	templateUrl : "/content/westernunion/header.header.html",
	__content: "To store url content",
	content:null,
	__response : "Variable for response/properties data",
	response : null,
	__hasAccountNumber : "A flag to indicate if Has account number.",
	hasAccountNumber : false,
	__isAccountNumber : "A flag to indicate if its account number.",
	isAccountNumber : false,
	__onClickLoginMobile : "A signal for login mobile clicked event.",
	onClickLoginMobile : null,

	initialize : function(config){
		if(config){
			this.response = config.propertiesDataHeader;
			this.propertiesData = config ? config.propertiesData : null;
		}
		this.onClickLoginMobile = new signals.Signal();
	},
	
	preRender : function(whereToRender, renderFunction){
		this.data = {
				propertiesDataHeader : this.response
		}
		renderFunction(this.data, whereToRender);
	},
	

	__getSession : "Get session.",
	getSession : function() {
		var session = new Object();
		session['id'] = Clazz.WUCookies.getCookieSessionId();
		return session;
	},

	__getCustomerSignOffRequest : "Get customer sign off request.",
	getCustomerSignOffRequest : function(){
		var customerSignOffBodyRequest = new Object();
		customerSignOffBodyRequest["security"] = this.getSecurity();
		return customerSignOffBodyRequest;
	},

	/** start post body personal information */
	__getCustomerProfileBodyRequest : "Get customer profile body request.",
	getCustomerProfileBodyRequest : function(){
		var customerProfileBodyRequest = {};
		customerProfileBodyRequest["gateway_customer"] = this.getGatewayCustomer();
		customerProfileBodyRequest["security"] = this.getSecurity();
		return customerProfileBodyRequest;
	},

	__getGatewayCustomer : "Get gateway customer.",
	getGatewayCustomer : function(){
		var gatewayCustomer = {};
		gatewayCustomer['preferred_customer'] = this.getPreferedCustomer();
		return gatewayCustomer;
	},

	__getSecurity : "Get security.",
	getSecurity : function(){
		var security = {};
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		security['session'] = this.getSession();
		return security;
	},

	__getPreferedCustomer : "Get prefered customer.",
	getPreferedCustomer : function(){
		var accountNbr = Clazz.WULocalStorage.getAccountNumber();
		var preferedCustomer = {};
		preferedCustomer["account_nbr"] = accountNbr;
		return preferedCustomer;
	},
	/** end post body personal information */

	__listSelected : "Handler of country list.",
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

	__changeSelectedInput : "Change selected input.",
	changeSelectedInput : function(selectInput){
		var dropDown = $(selectInput).siblings('span:first');
		var selectedText = $(selectInput).find(':selected').text();
		$(dropDown).text(selectedText);
	},

	__showDropDownList : "Show dropdown list.",
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

	__hideDropDownList : "Hide dropdown list.",
	hideDropDownList : function(dropDown){
		$(dropDown).slideUp('fast', function(){
			$(dropDown).addClass('display-none');
		});
		$(document).unbind('mouseup');
	},

	__toggleDropDownList : "Toggle dropdown list.",
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

	__clearDefaultMenu : "Clear default menu.",
	clearDefaultMenu : function() {
		var sendmoneyTabMenu= $("#tab-send-money-id-menu");
		var receiveTabMenu = $('#tab-receive-money-id-menu');
		var payTabMenu=$("#tab-pay-bills-id-menu");
		var prepaidTabMenu=$("#tab-prepaid-card-id-menu");
		sendmoneyTabMenu.slideUp("fast");
		receiveTabMenu.slideUp("fast");
		payTabMenu.slideUp("fast");
		prepaidTabMenu.slideUp("fast");
	},

	bindUI : function() {
		var self = this;
		var consumer = $('.wu-header-cons');
		var headerCountryMenu = $('.wu-header-country');
		var headerLanguageMenu = $('.wu-header-language');
		var consumerMenu = $('.wu-header-cons');
		var businessMenu = $('.wu-header-bus');
		var agentMenu = $('.wu-header-agent');
		var findLocation = $('.wu-header-find-loc');
		var trackTransfer = $('.wu-header-track-transfer');
		var estimatedPrice = $('.wu-header-estimated-price');
		var customerSupport = $('.wu-header-customer-care');
		var sendMoneyTab = $('.wu-header-send');
		var receiveTab = $('.wu-header-receive');
		var payTab = $('.wu-header-pay');
		var prepaidTab = $('.wu-header-pre');
		var searchTab = $('.wu-header-search');
		var containerHeaderTop = $('.wu-header-top');
		var loginMobile = $('.wu-mobile-button-login');
		var headerLogo = $('.wu-header-logo');
		var business = $('.wu-header-bus');
		var patner = $('.wu-header-partners');
		var aboutUs = $('.wu-header-about-us');
		var agent = $('.wu-header-agent');
		var loginMenu = $('.wu-header-login');
		var sendmoneyTabMenu= $("#tab-send-money-id-menu");
		var receiveTabMenu = $('#tab-receive-money-id-menu');
		var payTabMenu=$("#tab-pay-bills-id-menu"); 
		var prepaidTabMenu=$("#tab-prepaid-card-id-menu");
		var sendMoneyToInmate=$('.sending-money-inmate');
		var sendMoneyOnlineLearnMore=$("#wu-send-money-online-learn-more");
		var sendMoneyInPersonLearnMore=$("#wu-send-money-in-person-learn-more");
		var sendMoneyByPhoneLearnMore=$("#wu-send-money-by-phone-learn-more");
		var receiveMoneyInPersonLearnMore=$('#wu-receive-money-in-person-learn-more');
		var receiveMoneyOnPrepaidCardLearnMore=$('#wu-receive-money-on-prepaid-card-learn-more');
		var payBillsOnlineLearnMore=$('#wu-pay-bills-online-learn-more');
		var payBillsInPersonLearnMore=$('#wu-pay-bills-in-person-learn-more');
		var payBillsByPhoneLearnMore=$('#wu-pay-bills-by-phone-learn-more');
		var prepaidCardLearnMore=$('#wu-prepaid-card-learn-more');
		var prepaidCardReloadLearnMore=$('#wu-prepaid-card-reload-learn-more');
		var prepaidCardManageLearnMore=$('#wu-prepaid-card-manage-learn-more');
		var getStartedSlideDownButton = $('#go-to-sendmoney');
		var getPrepaidCardSlideDownButton = $('#go-to-prepaid-card');
		var findLocationSlideDownButton = $('#go-to-find-location');
		var menuLoginRegister = $('.wu-header-menulogin');
		var sendMoneyEndingTransaction = $('.wu-header-sendmoney-flow-end-container');
		var sendMoneyTransaction = $('.wu-header-send-money-flow-container');
		var dropDownLoginMenu = $('.header-drop-down');
		var aboutUsMenuCheck = $('.wu-header-about-us');
		
		//DTM Event call - start
		//DTM Event call - start
		$('#overlayQuery').keydown(function(e){
			if(e.keyCode ==13 || e.which == 13){
				DTM_Trigger("searchcall",$('#overlayQuery').val(), $('#overlayQuery').attr('placeholder'));
			}
		});
         //alert("inside submitlink");
		$('#submitlink').click(function(e) {
            //alert("inside submitlink");
			DTM_Trigger("searchcall",$('#overlayQuery').val(), $('#overlayQuery').attr('placeholder'));
		});
		//DTM Event call - end
		//DTM Event call - end

		if(!this.response.drop_down_menu_check){
			headerCountryMenu.hide();    
			headerLanguageMenu.hide(); 
		}
		if(!this.response.consumer_menu_check){
			consumerMenu.hide();
		}
		if(!this.response.business_menu_check){
			businessMenu.hide();
		}
		if(!this.response.agentMenuCheck){
			agentMenu.hide();
		}
		if(!this.response.agentMenuCheck && !this.response.drop_down_menu_check && !this.response.consumer_menu_check && !this.response.business_menu_check){
			containerHeaderTop.hide();
		}
		if(!this.response.findLoc_menu_check){
			findLocation.hide();
		}
		if(!this.response.transfer_menu_check){
			trackTransfer.hide();
		}
		if(!this.response.estimatePrice_menu_check){
			estimatedPrice.hide();
		}
		if(!this.response.customSup_menu_check){
			customerSupport.hide();
		}
		if(!this.response.sendMoney_tab_check){
			sendMoneyTab.hide();
		}
		if(!this.response.receive_tab_check){
			receiveTab.hide();
		}
		if(!this.response.pay_tab_check){
			payTab.hide();
		}
		if(!this.response.prepaid_tab_card_check){
			prepaidTab.hide();
		}
		if(!this.response.askQues_menu_check){
			searchTab.hide();
		}
		if(!this.response.menu_login_register){
			menuLoginRegister.hide();
		}
		
		if(!this.response.send_money_ending_transaction){
			sendMoneyEndingTransaction.hide();
		}
		
		if(!this.response.send_money_transaction){
			sendMoneyTransaction.hide();
		}
		
		if(!this.response.drop_down_login_menu){
			dropDownLoginMenu.hide();
		}
		
		if(!this.response.aboutUs_menu_check){
			aboutUsMenuCheck.hide();
		}
		consumer.click(function(e){
			//window.location.href = Clazz.com.wu.constants.URL_CONSUMER;
			Clazz.WUNavigator.goToHomePage();

		});

		customerSupport.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_CUSTOMER_CARE;
		});

		loginMobile.click(function(e){
			Clazz.WUNavigator.goToLOginMobilePage();
		});
		
		trackTransfer.click(function(e){
			Clazz.WUNavigator.goToTrackTransferPage();
		});

		headerLogo.click(function(e){
			var accountNbr = Clazz.WULocalStorage.getAccountNumber();
			if(accountNbr == null || accountNbr == undefined){
				Clazz.WULocalStorage.clearSessionId();
				Clazz.WULocalStorage.clearImgCaptcha();
     			Clazz.WULocalStorage.clearCaptchaImage();
				Clazz.WULocalStorage.clearResponse();
				Clazz.WULocalStorage.clearAmount();
				Clazz.WULocalStorage.clearZipCode();
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
			Clazz.WUNavigator.goToHomePage();
		});

		business.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_BUSINEES;
		});

		patner.click(function(){
			window.location.href = Clazz.com.wu.constants.URL_PATNER;
		});

		aboutUs.click(function(){
			window.location.href = Clazz.com.wu.constants.URL_ABOUT_US;
		});

		agent.click(function(e){
			if(self.content && self.content.url_agent){
				window.location.href = self.content.url_agent;
			}
		});

		sendMoneyToInmate.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_SEND_MONEY_TO_INMATE;

		});
		sendMoneyOnlineLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_SEND_MONEY_ONLINE_LEARN_MORE;
		});
		sendMoneyInPersonLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_SEND_MONEY_IN_PERSON_LEARN_MORE;
		});
		sendMoneyByPhoneLearnMore.click(function(e){
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

		prepaidCardLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_LEARN_MORE;
		});
		prepaidCardReloadLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_RELOAD_LEARN_MORE;
		});
		prepaidCardManageLearnMore.click(function(e){
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_MANAGE_LEARN_MORE;

		});



		loginMenu.click(function(e){
			Clazz.WULocalStorage.clearSessionId(); //using WULocalStorage to clear session id
			Clazz.WUNavigator.goToLoginPage();
		});

		estimatedPrice.click(function(e){
			self.goToEstimatePrice();
		});

		getStartedSlideDownButton.click(function() {
			Clazz.WUNavigator.goToSendMoneyPage();
		});

		getPrepaidCardSlideDownButton.click(function() {
			window.location.href = Clazz.com.wu.constants.URL_PREPAID_CARD_GETACARD; 
		});

		findLocationSlideDownButton.click(function() {
			//findLocation.trigger('click');
			window.location.href = Clazz.com.wu.constants.URL_FIND_LOCATION;
		});

		sendMoneyTab.click(function(e){
			Clazz.WULocalStorage.clearSummaryObjects();
			Clazz.WULocalStorage.clearReceiverInformation();
			Clazz.WULocalStorage.clearDataInputField();
			Clazz.WULocalStorage.clearAmount();
			Clazz.WULocalStorage.clearZipCode();
		});
		sendMoneyTab.mouseover(function(e){
			$("#tab-send-money-link").addClass("black-font");
			receiveTabMenu.slideUp("fast");
			sendmoneyTabMenu.slideDown("fast");
			payTabMenu.slideUp("fast");
			prepaidTabMenu.slideUp("fast");


		});

		/*RTHREE-783 - Mouseover issue fix - start*/
		$(".wu-frame-home,.wu-header-logo,.wu-header-quicklink,.wu-header-menulogin,.wu-homepage-frame,.wu-option-container,.home-container,.wu-header-search,.wu-main-frame,.header-drop-down,.header-drop-down-arrow,.wu-header-top").mouseover(function(e){
			self.clearDefaultMenu();

		});

		sendMoneyTab.mouseleave(function(e){
			self.clearDefaultMenu();
			$("#tab-send-money-link").removeClass("black-font");
		});
		receiveTab.mouseleave(function(e){
			self.clearDefaultMenu();
			$("#tab-receive-money-link").removeClass("black-font");
		});
		payTab.mouseleave(function(e){
			self.clearDefaultMenu();
			$("#tab-pay-bills-link").removeClass("black-font");
		});
		prepaidTab.mouseleave(function(e){
			self.clearDefaultMenu();
			$("#tab-prepaid-card-link").removeClass("black-font");
		});

		/*RTHREE-783 - Mouseover issue fix - end*/
		receiveTab.mouseover(function(e){
			// self.clearDefaultMenu();
			$("#tab-receive-money-link").addClass("black-font");
			sendmoneyTabMenu.slideUp("fast");
			receiveTabMenu.slideDown("fast");
			payTabMenu.slideUp("fast");
			prepaidTabMenu.slideUp("fast");
		});

		payTab.mouseover(function(e){
			// self.clearDefaultMenu();
			$("#tab-pay-bills-link").addClass("black-font");
			sendmoneyTabMenu.slideUp("fast");
			receiveTabMenu.slideUp("fast");
			payTabMenu.slideDown("fast");
			prepaidTabMenu.slideUp("fast");
		});
		prepaidTab.mouseover(function(e){
			// self.clearDefaultMenu();
			$("#tab-prepaid-card-link").addClass("black-font");
			sendmoneyTabMenu.slideUp("fast");
			receiveTabMenu.slideUp("fast");
			payTabMenu.slideUp("fast");
			prepaidTabMenu.slideDown("fast");
		});

		$('#go-to-paybills').click(function(){
			Clazz.WUNavigator.goToPayBillsPage();
		});

		var register = $('.wu-header-register');
		register.click(function(e){
			Clazz.WUNavigator.goToRegisterPage();
		});

		//aldi
		//fixing for RINTL-7903
		/*findLocation.click(function(){
			window.open(Clazz.com.wu.constants.URL_FIND_LOCATION ,"_blank");		
		});*/

		trackTransfer.click(function(e){
			Clazz.WUNavigator.goToTrackTransferPage();
		});

		$('#wu_country_header').click(function(){
			self.toggleDropDownList($(this));
		});

		$('#wu_language_header').click(function(){
			self.toggleDropDownList($(this));
		});

		$('#wu_language_header_arrow').click(function(){
			self.toggleDropDownList($(this));
		});

		$('#wu_country_arrow_header').click(function(){
			$('#wu_country_header').trigger('click');
		});

	    $('#wu_country_list_header li').click(function(){
	    	$("#wu_country_list_header").hide();

	    	/*fixing bugs for subject email "US Preview- Country drop down issue"*/
			self.listSelected($(this));
			var value = $( "#wu_country_select_header option:selected" ).val();


			var language = "/en";
			var host = location.host;
			var hostName = null;

			//RINTL-7048 
			/**
			 * this code for a while until review and refactor code
			 */
			if(value!=="") {
				var lowervalue=value.toLowerCase();
				hostName = location.protocol + "//" + host + "/";
				window.location.href = hostName + lowervalue + language;


			}
		});


		$('#wu_language_list_header li').click(function(){
			self.listSelected($(this));
			var value = $( "#wu_language_select_header option:selected" ).val();
			if(value ==="SP"){
				 dtmSetCookie('WULanguageCookie_', 'sp', '/', null, '365','.westernunion.com');
				// dtmSetCookie('SERVER_COOKIE', 'R2', '/', null, '365','.westernunion.com');

				// Clazz.WUNavigator.goToR2Home();
				window.location.href = "http://www.westernunion.com/us/sp/home.html";
			}else
			{ 
                window.location.href = "https://www.westernunion.com/us/en";
                //dtmSetCookie('WULanguageCookie_', 'en', '/', null, '365','.westernunion.com');
				 // window.location.reload(); 
			}
		});
		$('.header-drop-down-arrow').click(function(){
			self.toggleDropDownList($(this));
		});

		$('#wu_account_overview').click(function() {

		    Clazz.WULocalStorage.setRewardCurrentTab("overview");
            localStorage.tabIndex="0";
		    //MYWU-1475 Profile page | Account overview and Profile Settings links in top right dropdown are not working
			//window.history.pushState("overview-tab", null, ["profile.html"]);
			//Clazz.WUNavigator.goToProfilePage();
			if (window.history.pushState) {
				window.history.pushState("overview-tab", null, ["profile.html"]);
				
				Clazz.WUNavigator.goToProfilePage();
            } else {
				Clazz.WUNavigator.goToProfilePage();
            }
		});

		$('#wu_profile_settings').click(function() {
			//MYWU-1475 Profile page | Account overview and Profile Settings links in top right dropdown are not working
			//window.history.pushState("profile-tab#personal-information-tab", null, ["profile.html"]);
            if (window.history.pushState) {
                window.history.pushState("profile-tab#personal-information-tab", null, ["profile.html"]);
				
                Clazz.WUNavigator.goToProfilePage();
            } else {
				Clazz.WUNavigator.goToProfilePage();
                $("#profile-tab").click();
            }

			Clazz.WULocalStorage.setDefaultLandingPage(Clazz.com.wu.constants.PROFILE_PERSONAL_INFO);
			Clazz.WUNavigator.goToProfilePage();
		});

		$('#wu_sign_out').click(function() {
			self.doLogout();
		});

		$('.sending-money-inmate').click(function() {
			Clazz.WUNavigator.goToSendMoneyInmatePage();
		});

		$('.step-flow-home').click(function(){
			Clazz.WUNavigator.goToHomePage();
		});

		$('.step-flow-profile').click(function(){
			Clazz.WUNavigator.goToProfilePage();
		});

		$('.step-flow-logout').click(function(){
			self.doLogout();
		});

		$('input.wu-header-searchcontent').each(function(){
			var $this = $(this);
			$this.data('placeholder', $this.attr('placeholder'))
			.focus(function(){$this.removeAttr('placeholder');})
			.blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
		});

		/* artf905540 : The overview to sensitive when user hover to the Send Money, Receive money or the other option
		 */	

		sendMoneyTab.hover(function(e){
			sendmoneyTabMenu.stop( true, true ).slideDown("slow");
		},function(){ sendmoneyTabMenu.stop( true, true ).slideUp("fast");});

		receiveTab.hover(function(e){
			receiveTabMenu.stop( true, true ).slideDown("slow");
		},function(){ receiveTabMenu.stop( true, true ).slideUp("fast");});

		payTab.hover(function(e){
			payTabMenu.stop( true, true ).slideDown("slow");
		},function(){ payTabMenu.stop( true, true ).slideUp("fast");});

		prepaidTab.hover(function(e){
			prepaidTabMenu.stop( true, true ).slideDown("slow");
		},function(){ prepaidTabMenu.stop( true, true ).slideUp("fast");});


		$("#wu_language_list_header>li").click(function () {
			$(this).siblings().find(".selected").removeClass("selected");
			$(this).addClass("selected");
		});
		
		/* ASk question textbox placeholder changes */
       // alert("Inside ask placeholder");
	   var ask_question_text=this.propertiesData && this.propertiesData.ask_question_text ? this.propertiesData.ask_question_text:"Ask a question...";
		if (jQuery.browser.msie && jQuery.browser.version == '8.0') {
            var placeholderText = ask_question_text;
            $('#overlayQuery').val(placeholderText).css("color","#999");
            $('#overlayQuery').blur(function(){
                    $(this).val() == '' ? $(this).val(placeholderText).css("color","#999") : false;

            });
            $('#overlayQuery').focus(function(){
                       $(this).val() == placeholderText ? $(this).val('').css("color","") : false;

            });
		}

	},

	__doLogout : "Log out",
	doLogout : function(){ 
		var requestBody = this.getCustomerSignOffRequest();
		var logoutAPI = new Clazz.com.wu.api.LogoutAPI();
		logoutAPI.doLogout(requestBody, function(response){
			Clazz.WULocalStorage.clearAll();
			Clazz.WULocalStorage.setDoLogout(true);
			Clazz.WUNavigator.goToHomePage();
		});
	},

	__getSessionId : "Get session id.",
	getSessionId : function(response){
		var session = response.security.session.id;
		return session;
	},

	__setUserName : "Set user name.",
	setUserName : function(){
		var firstName ="";
		var lastName ="";
		var fullName ="";

		var firtsNameFromLocalStorage = Clazz.WULocalStorage.getFirstName();
		var lastNameFromLocalStorage = Clazz.WULocalStorage.getLastName();
		
		if(firtsNameFromLocalStorage != null && firtsNameFromLocalStorage != undefined){
			firstName = firtsNameFromLocalStorage.toLowerCase();
		}
		if(lastNameFromLocalStorage !=null && lastNameFromLocalStorage != undefined){
			lastName = lastNameFromLocalStorage.toLowerCase();
		}
		fullName = firstName+" "+lastName;
		if(fullName.trim() !== ""){
			$('#header-name').text(fullName);
		}
	},

	__setHeaderSendMoneyFlow : "Set header for send money flow.",
	setHeaderSendMoneyFlow : function(){
		if(Clazz.WUNavigator.isInThisWebPage("send-money/receiverInformation.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/requiredBillerInformation.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/multipleBillerInformation.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReceiverInformation.html")){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-receiver').addClass("header-send-money-active");
			if(Clazz.WUNavigator.isInThisWebPage("bill-pay/requiredBillerInformation.html") || 
					Clazz.WUNavigator.isInThisWebPage("bill-pay/multipleBillerInformation.html")){
				$('.step-flow-receiver').text(this.response.header_send_money_flow_biller_text);
			}
		}else if(Clazz.WUNavigator.isInThisWebPage("send-money/paymentInformation.html")||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/confirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/paymentInformation.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-money/confirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/inmatePaymentInformation.html")){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-payment').addClass("header-send-money-active");
			if(Clazz.WUNavigator.isInThisWebPage("bill-pay/confirmIdentity.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/paymentInformation.html")){
				$('.step-flow-receiver').text(this.response.header_send_money_flow_biller_text);
			}
		}else if(Clazz.WUNavigator.isInThisWebPage("send-money/review.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/review.html") || 
				Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReview.html")){

			$('.current').removeClass("header-send-money-active");
			$('.step-flow-place').addClass("header-send-money-active");
			if(Clazz.WUNavigator.isInThisWebPage("bill-pay/review.html")){
				$('.step-flow-receiver').text(this.response.header_send_money_flow_biller_text);
			}
			if(!Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReview.html")){
				$('.step-flow-place').text(this.response.header_send_money_flow_review_text);
			}
		}else if(Clazz.WUNavigator.isInThisWebPage("send-money/kycConfirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-money/kycVerificationOptions.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/kycConfirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/kycVerificationOptions.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/kycConfirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/kycVerificationOptions.html") 
		){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-place').addClass("header-send-money-active");
			if(Clazz.WUNavigator.isInThisWebPage("bill-pay/kycConfirmIdentity.html") || 
					Clazz.WUNavigator.isInThisWebPage("bill-pay/kycVerificationOptions.html")){
				$('.step-flow-receiver').text(this.response.header_send_money_flow_biller_text);
			}
		}else{
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-login').addClass("header-send-money-active");
		}
	},
	
	__setHeaderHasAccNumber : "Set header style if has account number (logged in). ",
	setHeaderHasAccNumber : function(){
		var accountNumber = Clazz.WULocalStorage.getAccountNumber();
		this.hasAccountNumber = accountNumber? true:false;
		if(this.hasAccountNumber){	
			if(Clazz.WUNavigator.isInThisWebPage("send-money/start.html")||
				    Clazz.WUNavigator.isInThisWebPage("send-money-online.html")||
					Clazz.WUNavigator.isInThisWebPage("profile.html")||
					Clazz.WUNavigator.isInThisWebPage("price-estimator/start.html")||
					Clazz.WUNavigator.isInThisWebPage("price-estimator/continue.html")||
					Clazz.WUNavigator.isInThisWebPage("track-transfer.html")||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/start.html")||
					Clazz.WUNavigator.isInThisWebPage("price-estimator/performEstimatedFeeInquiry.html")||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/start.html")||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/performEstimatedInmateFeeInquiry.html")||
					Clazz.WUNavigator.isInThisWebPage("home.html")){
				this.setUserName();
				$('.header-drop-down').show();
				$('.wu-header-menulogin').hide();
			}
		}
	},

	postRender : function(){
		this.getLoginDetails();
		this.setHeaderHasAccNumber();
		this.setHeaderSendMoneyFlow();
		if(Clazz.WUNavigator.isInThisMobilePage("login.html")){
			$('.wu-mobile-header-login').css("display","none");
			$('.wu-mobile-header').css("display","block");
		}
		if(Clazz.WUNavigator.isInThisMobilePage("login.html") ||
				Clazz.WUNavigator.isInThisMobilePage("home.html") ||
				Clazz.WUNavigator.isInThisMobilePage("register.html")){

			$('.wu-mobile-header-login').css("display","none");
			$('.wu-mobile-header').css("display","block");
		}
		
		if(Clazz.WUNavigator.isInThisWebPage("send-money/receiverInformation.html") ||
			Clazz.WUNavigator.isInThisWebPage("send-money/paymentInformation")||
			Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReceiverInformation")||
			Clazz.WUNavigator.isInThisWebPage("send-inmate/inmatePaymentInformation")){
			//$(".wu-header-logo").css("margin","10px 20px 24px 65px");
			$(".wu-header-logo").css("margin-left","80px");
			$(".wu-header-send-money-flow-container").css("margin-right","25px");
		}
		
		if(Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReview.html")){
			$('.wu-header-center').css('width','920px');
		}
		if(Clazz.WUNavigator.isInThisWebPage("password-recovery.html")){
	    	$('.wu-header-center').addClass("set-header-reset-pwd");
		}
		if(Clazz.WUNavigator.isInThisWebPage("register.html") || 
			Clazz.WUNavigator.isInThisWebPage("mywuregister.html")	){
	    	$('.wu-header-center').addClass("set-header-reset-reg");
		}
		if(Clazz.WUNavigator.isInThisWebPage("login/interstitialPage.html")){
			$(".wu-header-register").hide();
			$(".wu-header-login").hide();
		}



		// RTHREE-3425 begin
		$("#tab-send-money-link").attr("href", Clazz.com.wu.constants.URL_MEGA_MENU_SEND_MONEY); 
		$("#tab-receive-money-link").attr("href", Clazz.com.wu.constants.URL_MEGA_MENU_RECEIVE_MONEY); 
		$("#tab-pay-bills-link").attr("href", Clazz.com.wu.constants.URL_MEGA_MENU_PAY_BILLS); 
		$("#tab-prepaid-card-link").attr("href", Clazz.com.wu.constants.URL_MEGA_MENU_PREPAID_CARDS); 
		// RTHREE-3425 end

		//RTHREE-3197
		$("#find-location-link").attr("href", Clazz.com.wu.constants.URL_FIND_LOCATION);
		// $("#find-location-link").attr("href", "http://locations.westernunion.com/?iframe=false");
		//RTHREE-4337
		//$("#find-location-link").attr("target", "_blank");
		$("#track-transfer-link").attr("href", Clazz.com.wu.constants.URL_TRACK_A_TRANSFER);
		$("#estimate-price-link").attr("href", Clazz.com.wu.constants.URL_ESTIMATE_PRICE);
		$("#customer-care-link").attr("href", Clazz.com.wu.constants.URL_CUSTOMER_CARE);

	},

	//As part of medallia requirement
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

	__gettltsId : "Get tlts id.",
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
	
	__goToProfileSetting : "Go to profile setting.",
	goToProfileSetting : function(){
		Clazz.WULocalStorage.setDefaultLandingPage(Clazz.com.wu.constants.PROFILE_PERSONAL_INFO);
		Clazz.WUNavigator.goToProfilePage();
	},
	
	__goToEstimatePrice : "Go to estimate price.",
	goToEstimatePrice : function(){
		var profileApi = new Clazz.com.wu.api.ProfileAPI();
		var accountNbr = Clazz.WULocalStorage.getAccountNumber();
		if(accountNbr != null){
			var requestBody = this.getCustomerProfileBodyRequest();
			profileApi.getProfile(requestBody, function(response){
				if(response.error){
					//alert(response.error.message);
				}
				else{
					var zipCode = response.gatewayCustomer.address.postalCode;
					Clazz.WULocalStorage.setZipCode(zipCode)
					Clazz.WUNavigator.goToEstimatePricePage();
				}
			});
		}else{
			Clazz.WUNavigator.goToEstimatePricePage();
		}
	}
});

Clazz.createPackage("com.wu.widget.module");

	Clazz.com.wu.widget.module.WUHeaderContainer = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#header-container",
	templateUrl : null,
	__wuHeader : "An instance of WUHeaer",
	wuHeader : null,
	__wuMaskMain : "An instance of WuMaskMain",
	wuMaskMain: null,
	__loginOverlay : "An instance of WULoginOverlay",
	loginOverlay:null,
	__headerListener : "An instance of HeaderListener",
	headerListener : null,
	propertiesDataHeader : null,

	initialize: function(config){
		if(config){
			this.propertiesDataHeader = config.propertiesDataHeader;
		}
		this.wuHeader = new Clazz.com.wu.widget.module.WUHeader({"propertiesDataHeader":this.propertiesDataHeader});
		this.wuMaskMain = new Clazz.com.wu.widget.module.WUMaskMain();
		this.loginOverlay = new Clazz.com.wu.widget.login.WULoginOverlay(config);
	},	

	postRender: function(){
		var self = this;
        //RTHREE-4370     
		if (Clazz.WULocalStorage.getIsWUbsReviewTriggered()=='true')   
		{
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
	    	Clazz.WULocalStorage.clearIsWUbsReviewTriggered();   
		}      
		var loginListener = new Clazz.com.listener.LoginListener({login : this.loginOverlay});
		
		if (Clazz.com.wu.api){
			var getDatabaseListener = new Clazz.com.listener.GetDatabaseListener();
			loginListener.onGetDatabaseEvent.add(getDatabaseListener.onGetDatabase, getDatabaseListener);
		}
		this.loginOverlay.onLoginClicked.add(loginListener.onLoginClicked,loginListener);
		var registerListener = new Clazz.com.listener.LoginListener({login : this.loginOverlay});
		this.loginOverlay.onForgotPasswordClicked.add(loginListener.onForgotPasswordClicked,loginListener);
		this.headerListener = new Clazz.com.listener.HeaderListener({"loginOverlay":self.loginOverlay,"wuMaskMain":self.wuMaskMain});
		this.wuHeader.render();
		this.wuMaskMain.render();
		
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
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.constants.SESSION_EXPIRED_MESSAGE = "We didn't see any activity for a while, so we logged you out for your security.";

Clazz.com.wu.widget.module.WUAlert = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer: "#alert-container",
	__alertContainer: "Selector of alert container.",
	alertContainer: '.wu-alert',
	__successClass: "Css class.",
	successClass: 'green',
	__infoClass: "Css class.",
	infoClass: 'yellow',
	__errorClass: "Css class.",
	errorClass: 'red',
	__sessionExpiredClass: "Css class.",
	sessionExpiredClass: 'blue',
	__infoUpdateEmailClass: "Css class.",
	infoUpdateEmailClass: 'update',
	__constantsEmailAlreadyRegistered: "Constant variable for error code.",
	constantsEmailAlreadyRegistered: 'C1052', /* RTHREE-2635  data changed   C1068  */
	__constantsAccountAlreadyRegistered: "Constant variable for error code.",
	constantsAccountAlreadyRegistered: 'C1067', /* RTHREE-3373 */
	__constantsInvalidCredentials: "Constant variable for error code.",
	constantsInvalidCredentials: 'C1131',
	__constantsErrorMigrationDOB: "Constant variable for error code.",
	constantsErrorMigrationDOB: 'C1133',
	__constantsEmailVerificationRegister: "Constant variable for error code.",
	constantsEmailVerificationRegister: 'C6006',
	__constantsEmailVerificationLogin: "Constant variable for error code.",
	constantsEmailVerificationLogin: 'C1124',
	__constantsEmailVerificationLoginCQ: "Constant variable for error code.",
	constantsEmailVerificationLoginCQ: 'CQW1065',
	__constantsExceedTransactionLimit: "Constant variable for error code.",
	constantsExceedTransactionLimit: 'C1547',
	__constantsWrongAccountNumber: "Constant variable for error code.",
	constantsWrongAccountNumber: 'C1807',
	__constantsCurrentAndNewPasswordSame: "Constant variable for error code.",
	constantsCurrentAndNewPasswordSame: 'W00011',
	__constantsPhoneNumberError: "Constant variable for error code.",
	constantsPhoneNumberError: "C1434",
	__constantsD2BError: "Constant variable for error code.",
	constantsD2BError: "C1777",
	__constantsIFSCCodeError: "Constant variable for error code.",
	constantsIFSCCodeError: "C2389",
	__constantsZipCodeError: "Constant variable for error code.",
	constantsZipCodeError: "C1585",
	__constantsSuccessEmailProof: "Constant variable for response code.",
	constantsSuccessEmailProof: 'emailSuccess',
	__constantsMultipleSender: "Constant variable for response code.",
	constantsMultipleSender: 'senderError',
	__constantsMultipleReceiver: "Constant variable for response code.",
	constantsMultipleReceiver: 'receiverError',
	__constantsHigherAmount: "Constant variable for error code.",
	constantsHigherAmount: 'W00405',
	__constantsMaxLimit: "Constant variable for error code.",
	constantsMaxLimit: 'W00306',
	__constantsUpdateEmailAlreadyExist: "Constant variable for error code.",
	constantsUpdateEmailAlreadyExist: 'C1203',
	__constantsUpdatePhoneAlreadyExist: "Constant variable for error code.",
	constantsUpdatePhoneAlreadyExist: 'C1204',
	__constantsInitAfterVerifyEmail: "Constant variable for response code.",
	constantsInitAfterVerifyEmail: 'emailVerified',
	__constantsSuccessResendOTP: "Constant variable for response code.",
	constantsSuccessResendOTP: 'successResendOTP',
	__constantsSuccessSendTempPass: "Constant variable for response code.",
	constantsSuccessSendTempPass: 'successSendTempPass',
	__constantsSessionExpired: "Constant variable for response code.",
	constantsSessionExpired: 'sessionExpired',
	__contantsWarningReceiver: "Constant variable for response code.",
	contantsWarningReceiver: 'warningReceiver',
	__contantsWarningWUpay: "Constant variable for response code.",
	contantsWarningWUpay: 'warningWUPay',
	__constantsSuccessUpdateEmail: "Constant variable for response code.",
	constantsSuccessUpdateEmail: 'successUpdateEmail',
	__constantsKycSuccess: "Constant variable for response code.",
	constantsKycSuccess: 'kycSuccess',
	__constantKycText: "Constant variable for response code.",
	constantKycText: 'text-me',
	__constantKycEmail: "Constant variable for response code.",
	constantKycEmail: 'email-me',
	__constantKycPhone: "Constant variable for response code.",
	constantKycPhone: 'call-me',
	__constantsPendingTrx: "Constant variable for response code.",
	constantsPendingTrx: 'pending_trx',
	__constantsWrongZipCode: "Constant variable for error code.",
	constantsWrongZipCode: 'C1053',
	__whereToRender: "Place to render widget.",
	whereToRender: null,
	__statusWarning: "Constant variable for warning status.",
	statusWarning: false,
	__statusWarningWUPay: "Constant variable for WUPay warning status.",
	statusWarningWUPay: false,
	__resourcePath: "Base path of template.",
	resourcePath: null,
	__emailVerificationData: "Store data for verification email.",
	emailVerificationData: null,
	__propertiesData: "Store all properties data.",
	propertiesData: null,
	__code: "Error code.",
	code: '',
	__message: "Error message.",
	message: '',
	__gatewayCustomerObj: "Error message.",
	gatewayCustomerObj: '',
	__hideAlert: "Status for show or hide alert.",
	hideAlert: false,
	__constantWUBSmaxlimit: "Constant variable for error code.",
	constantWUBSmaxlimit: 'C1551', // WUBS March Catch up changes
	__constantMyWuAlert: "Constant variable.",
	constantMyWuAlert: 'success',
	gatewayCustomer: null,
	wuoptionContainer: null,
	setErrorMessage: null,
	dropDownIDType : null,
	onCloseOverlayEvent:null,
	initialize: function (config) {
		this.data.showLegal = false;
		
		if (config) {
			this.sendMoneyWidget = (config.sendMoneyWidget) ? config.sendMoneyWidget : null;
			this.resourcePath = (config.resourcePath) ? config.resourcePath : null;
			this.emailVerificationData = (config.emailVerificationData) ? config.emailVerificationData : null;
			this.propertiesData = (config.propertiesData) ? config.propertiesData : null;

			if (config.data) {
				this.data = config.data;
				this.setDefaultCodeAndMessage();
			}

			this.data["message"] = config.message;
			this.data["code"] = config.code;
			if (this.propertiesData) {
				this.data["propertiesData"] = this.propertiesData;
				this.data.showLegal = this.propertiesData['ukkyc_legal_status'] ? true : false;
			}
		}

		this.onCloseOverlayEvent = new signals.Signal();

        this.fields = {
            "firstName" : {
                    "containerElement": "#first-name-container",
                    "inputElement" : "#first-name",
                    "errorElement" : "#first-name-error",
                    "validation": "isName",
                    "regex" : "firstName",
                    "optional": false,
                },
            "middleName" : {
                    "containerElement": "#middle-name-container",
                    "inputElement" : "#middle-name",
                    "errorElement" : "#middle-name-error",
                    "validation": "isName",
                    "regex" : "middleName",
                    "optional": true,
                },
            "lastName" : {
                    "containerElement": "#last-name-container",
                    "inputElement" : "#last-name",
                    "errorElement" : "#last-name-error",
                    "validation": "isName",
                    "regex" : "lastName",
                    "optional": false,
                },
            "idType" : {
                    "containerElement": "#id-type-container",
                    "inputElement" : "#id-type",
                    "errorElement" : "#id-type-error",
                    "optional": false,
                },
            "idNumber" : {
                    "containerElement": "#id-num-container",
                    "inputElement" : "#id-num",
                    "errorElement" : "#id-num-error",
                    "optional": false,
                }
            };
		
	},

	preRender: function (whereToRender, renderFunction) {
		this.setAlertMessage();
		this.whereToRender = whereToRender;
		//CLFE-1854
		if (Clazz.WUNavigator.getSenderCountryFromURL() === "NO") {
			this.data.isNorway = true;
		} else {
			this.data.isNorway = false;
		}
		if (Clazz.WUNavigator.getSenderCountryFromURL() === "SE") {
			this.data.isSweden = true;
		} else {
			this.data.isSweden = false;
		}
		if (Clazz.WUNavigator.getSenderCountryFromURL() === "DK") {
			this.data.isDenmark = true;
		} else {
			this.data.isDenmark = false;
		}
		
		if (Clazz.WUNavigator.getSenderCountryFromURL() === "GB") {
			this.data.isGB = true;
			this.data.offline = false;
		} else {
			this.data.isGB = false;
			this.data.showLegal = false;
		}

		//IFEOEU-181 start
		this.gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
		if (this.gatewayCustomer){
			this.firstName = this.gatewayCustomer.name.firstName;
			this.lastName = this.gatewayCustomer.name.lastName;
	        this.middleName = this.gatewayCustomer.name.middleName;
	        if (this.middleName){
	            this.data.middleName = this.middleName.toLowerCase();
	        }
	        if (this.firstName){
	            this.data.firstName = this.firstName.toLowerCase();
	        }
	        if (this.lastName){
	            this.data.lastName = this.lastName.toLowerCase();
	        }
		}

        var getLocalStorageGenIIIStatus = $.proxy(Clazz.WULocalStorage["getGenIIIVerificationStatus"], Clazz.WULocalStorage);
        var status = getLocalStorageGenIIIStatus ? getLocalStorageGenIIIStatus() : null;
        var showGenIII = ((status != "C6621") && (Clazz.langConfig.senderInfoMap[Clazz.WUNavigator.getSenderCountryFromURL()].online_options === "genIII"));
        this.data.genIIIStart = showGenIII;
        //IFEOEU-181 end

		renderFunction(this.data, whereToRender);
	},

	__getCountryName: "Get Country name",
	getCountryName: function (codeIsoCode) {
		var countryName = "";
		var destinationCountryList = JSON.parse(Clazz.WULocalStorage.getDestinationCountryListMobile());
		if (destinationCountryList == null || destinationCountryList == "null") {

			destinationCountryList = JSON.parse(Clazz.WULocalStorage.getDestinationCountryList());

			for (i = 0; i < destinationCountryList.record.length; i++) {
				var code = destinationCountryList.record[i].COUNTRY_CODE;
				var tempName = destinationCountryList.record[i].COUNTRY_NAME;
				if (code === codeIsoCode) {
					countryName = tempName;
					break;
				}
			}
		} else {
			for (i = 0; i < destinationCountryList.records.record.length; i++) {
				var code = destinationCountryList.records.record[i].COUNTRY_CODE;
				var tempName = destinationCountryList.records.record[i].COUNTRY_NAME;
				if (code === codeIsoCode) {
					countryName = tempName;
					break;
				}
			}
		}
		return countryName.toUpperCase();
	},

	__editProfileRequest: "Call updateProfile and handle result.",
	editProfileRequest: function () {
		var self = this;
		this.gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
		var requestBody = this.getUpdateProfileRequestBody();
		var profileAPI = new Clazz.com.wu.api.EstimatePriceSendmoneyAPI();
		profileAPI.updateProfile(requestBody, function (response) {
			if (response.error) {
				//add function after document is completed
				self.onCloseOverlayEvent.dispatch();
				self.showAlertError(response.error.code, response.error.message);
			} else {
				self.gatewayCustomer["identityVerificationStatus"] = "R";
				Clazz.WULocalStorage.setGatewayCustomer(JSON.stringify(self.gatewayCustomer));
                $("#verification-3").hide();
			    $("#verification-2").hide();
                $("#verification-1").hide();

                localStorage.setItem('verificationLetterSent', true);
                //AFEO-5687: start
				if(Clazz.WUNavigator.isNewFMACountry()) {
					$("#verification-1").show();
					$("#newfmaflow-verificationstarted").show();
					var getLimitResp = JSON.parse(Clazz.WULocalStorage.getLimits());
					var availableTxnLimit = getLimitResp && getLimitResp.transactionLimit && getLimitResp.transactionLimit[4] ? (getLimitResp.transactionLimit[4].limit)/100 : 0;
					$("#newfmaflow-verificationstarted-limit").html(availableTxnLimit);
				} else {
					Clazz.WUNavigator.goToProfilePage();//PCF-50 4.3.2015
				}
                //AFEO-5687: end
			}
		});
	},

	 __initiateCustomerVerification: "Call updateProfile and handle result.",
	initiateCustomerVerification: function (complianceDetails, customerName, onSuccess) {
		var self = this;
		this.gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
		var sendMoneyAPI = new Clazz.com.wu.api.SendMoneyAPI();
		sendMoneyAPI.doInitiateCustomerVerification(sendMoneyAPI.getRequestBody(complianceDetails, customerName), onSuccess);
	},

	/** Start request body for update profile */
	__getUpdateProfileRequestBody: "Get update profile request body.",
	getUpdateProfileRequestBody: function () {
		var requestBody = {};
		requestBody['security'] = this.getSecurity();
		requestBody['external_reference_no'] = 1;
		requestBody['gateway_customer'] = this.getGatewayCustomer();
		return requestBody;
	},

	/** Start request body for initiate customer verification */
	__getInitiateCustomerVerificaitonRequestBody: "Get update profile request body.",
	getInitiateCustomerVerificaitonRequestBody: function () {
		var request = this.validationResponse;
		var serverConfig = Clazz.serverServiceConfig;
		var postHandlerPath = Clazz.WUNavigator.getPostHandlerPath();

		request["security"] = this.getSecurity();
		request["sender"] = this.getSender();
		request["pcpNumber"] = this.getAccountNumber();
		request["currencies"] = null;
		request["countryCode"] = Clazz.WUNavigator.getSenderCountryFromURL();
		request["languageCode"] = Clazz.WUNavigator.getSenderLanguageFromURL();

		request["ipAddress"] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		var returnURL = "";
		if (document.location.origin == undefined) {
			returnURL = window.location.protocol + "//" + window.location.host + "/bin/westernunion/securehandler";
		} else {
			returnURL = location.origin + "/bin/westernunion/securehandler";
		}
		request["returnURL"] = returnURL;
		if (request['money_transfer_control'] != undefined) {
			delete request['money_transfer_control'];
		}
		if (request['payment_details'] !== undefined && request['payment_details']['credit_debit_card'] !== undefined && request['payment_details']['credit_debit_card']['cardinal_info'] !== undefined) {
			if (request['payment_details']['credit_debit_card']['cardinal_info']['signature3ds'] != undefined) {
				delete request['payment_details']['credit_debit_card']['cardinal_info']['signature3ds'];
			}
			if (request['payment_details']['credit_debit_card']['cardinal_info']['merchantID'] != undefined) {
				delete request['payment_details']['credit_debit_card']['cardinal_info']['merchantID'];
			}
			if (request['payment_details']['credit_debit_card']['cardinal_info']['clearerID'] != undefined) {
				delete request['payment_details']['credit_debit_card']['cardinal_info']['clearerID'];
			}
			if (request['payment_details']['credit_debit_card']['cardinal_info']['returnURL'] != undefined) {
				delete request['payment_details']['credit_debit_card']['cardinal_info']['returnURL'];
			}
		}

		if (request['apollo_flag'] != undefined) {
			delete request['apollo_flag'];
		}
		delete request['wupay_conv_transaction_id'];
		delete request['wupay_conv_type'];

		return request;
	},

	__getGatewayCustomer: "Get gateway customer.",
	getGatewayCustomer: function () {
		var gatewayCustomer = {};

		gatewayCustomer['name'] = this.getName();
		gatewayCustomer['address'] = this.getAddress();
		gatewayCustomer['preferred_customer'] = this.getPreferredCustomer();
		gatewayCustomer['email'] = this.gatewayCustomer.email;
		gatewayCustomer['contact_phone_country_prefix'] = this.gatewayCustomer.contactPhoneCountryPrefix;
		gatewayCustomer['contact_phone'] = this.gatewayCustomer.contactPhone;
		gatewayCustomer['mobile_phone'] = this.getMobilePhone();
		gatewayCustomer['gender'] = this.getGenderBody();
		gatewayCustomer['nationality'] = this.getNationalityBody();
		gatewayCustomer['identity_verification_status'] = "R";
		return gatewayCustomer;
	},

	__getName: "Get name.",
	getName: function () {
		var name = {};
		name['first_name'] = this.gatewayCustomer.name.firstName;
		name['last_name'] = this.gatewayCustomer.name.lastName;
		return name;
	},

	__getAddress: "Get address.",
	getAddress: function () {
		var address = {};
		address['city'] = this.gatewayCustomer.address.city;
		address['state'] = this.gatewayCustomer.address.state;
		address['addr_line1'] = this.gatewayCustomer.address.addressLine1;
		address['addr_line2'] = this.gatewayCustomer.address.addrLine2 ? this.gatewayCustomer.address.addrLine2 : "";
		address['postal_code'] = this.gatewayCustomer.address.postalCode ? this.gatewayCustomer.address.postalCode : "";
		address['country_iso_code'] = this.gatewayCustomer.address.country;
		return address;
	},

	__getPreferredCustomer: "Get preferred customer.",
	getPreferredCustomer: function () {
		var preferredCustomer = {};
		preferredCustomer['account_nbr'] = this.gatewayCustomer.preferredCustomer.accountNbr;
		return preferredCustomer;
	},

	__getMobilePhone: "Get mobile phone.",
	getMobilePhone: function () {
		var mobilePhone = {};
		var phoneNumber = {};
		phoneNumber['national_number'] = this.gatewayCustomer.mobilePhone ? this.gatewayCustomer.mobilePhone.phoneNumber.nationalNumber : "";
		phoneNumber['country_code'] = this.gatewayCustomer.mobilePhone ? this.gatewayCustomer.mobilePhone.phoneNumber.countryCode : "";
		mobilePhone['phone_number'] = phoneNumber;
		return mobilePhone;
	},

	__getGenderBody: "Get gender body.",
	getGenderBody: function () {
		var genderBody = "";
		genderBody = this.gatewayCustomer.gender;
		return genderBody;
	},

	__getNationalityBody: "Get nationality body.",
	getNationalityBody: function () {
		var nationality = "";
		nationality = this.gatewayCustomer.nationality;
		return nationality;
	},

	__getSecurity: "Get security.",
	getSecurity: function () {
		var security = {};
		security["session"] = this.getSessionId();
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		return security;
	},

	__getSessionId: "Get session id.",
	getSessionId: function () {
		var sessionId = Clazz.WUCookies.getCookieSessionId();
		var session = {};
		session['id'] = sessionId;
		return session;
	},

	setErrorMessageDetails: function () {
		var data = {};
		var gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
		if (gatewayCustomer) {
			if (gatewayCustomer.name) {
				var firstName = gatewayCustomer.name.firstName;
				var lastName = gatewayCustomer.name.lastName;
				data["name"] = firstName + " " + lastName;
			}
			if (gatewayCustomer.address) {
				var city = gatewayCustomer.address.city;
				var address = gatewayCustomer.address.addrLine1;
				var secondAddress = gatewayCustomer.address.addrLine2 ? ", " + gatewayCustomer.address.addrLine2 : "";
				var state = gatewayCustomer.address.state ? ", " + gatewayCustomer.address.state.toUpperCase() : "";
				var country = gatewayCustomer.address.countryIsoCode;
				var postalCode = gatewayCustomer.address.postalCode ? ", " + gatewayCustomer.address.postalCode.toUpperCase() : "";
				data["address"] = address + secondAddress + ", " + city + state + postalCode;
			}
			data["country"] = this.getCountryName(country);

			// added for FR verification PCF
			data["email"] = gatewayCustomer.email;
			if (Clazz.WUNavigator.getSenderCountryFromURL() === "FR") {
				data["isFrance"] = true;
			} else {
				data["isFrance"] = false;
			}
		}
		this.data = data;
	},
	bindUI: function () {
		var self = this;
		/* RTHREE - 2799 Reset password link is getting displayed, if user enters wrong password twice on Edit email page. Fix*/
		$("#email_change_reset_password").click(function () {
			var header = new Clazz.com.wu.widget.module.WUHeader();
			var requestBody = header.getCustomerSignOffRequest();
			var logoutAPI = new Clazz.com.wu.api.LogoutAPI();
			logoutAPI.doLogout(requestBody, function (response) {
				Clazz.WULocalStorage.clearAll();
				Clazz.WUNavigator.goToResetPasswordPage();
			});

		});


		$("#gotoProfile").click(function () {
			var countryIsoCode = Clazz.WUNavigator.getSenderCountryFromURL();
			if (countryIsoCode == Clazz.com.wu.constants.DE_COUNTRY_ISO_CODE || countryIsoCode == Clazz.com.wu.constants.US_COUNTRY_ISO_CODE) {
				Clazz.WULocalStorage.setDefaultLandingPage(Clazz.com.wu.constants.PROFILE_PERSONAL_INFO_INTL_DE);
			} else {
				Clazz.WULocalStorage.setDefaultLandingPage(Clazz.com.wu.constants.PROFILE_PERSONAL_INFO_INTL);
			}
			Clazz.WUNavigator.goToProfilePage();
		});

		$("#wu-sendmoney-review-verify-1-apply-button").click(function () {
			if (self.data.isGB) {	
				self.initiateCustomerVerification(null, null, function(response) {
					var idStatus = 'Y';
					if (response.error) {
						idStatus = 'R';
					}

					self.gatewayCustomer["identityVerificationStatus"] = idStatus;
					Clazz.WULocalStorage.setGatewayCustomer(JSON.stringify(self.gatewayCustomer));

					if (response.error) {
						Clazz.WUNavigator.goToProfilePage();
					} else {
						self.setSuccessContainer();
						$('#ukkyc-success').show();
					}
				});
			} else {
				DTM_Trigger('dtm-letter-sent-fma', "euid-lettersent");
				window.sessionStorage.setItem("verificationLetterSent", 'true');
				self.editProfileRequest();
			}
			$("#verification-3").hide();
			$("#verification-2").hide();
			$("#verification-1").hide();
		});

        //AFEO-5687: start
        $("#newfmaflow-verstartedsuccess_smbtn").click(function() {
            $("#verification-1").hide();
            $("#newfmaflow-verificationstarted").hide();
            $("input[name=amount-options]").eq(0).click();
            var getLimitResp = JSON.parse(Clazz.WULocalStorage.getLimits());
            var availableTxnLimit = getLimitResp && getLimitResp.transactionLimit && getLimitResp.transactionLimit[4] ? (getLimitResp.transactionLimit[4].limit)/100 : 0;
            if(availableTxnLimit > 0) {
				sessionStorage.setItem('newfmaflowVerificationStartedSucess','true');
                $("#input-amount-fea").val(availableTxnLimit);
                $("#input-amount-fea").trigger('keyup');
                $("#newfma_txneligible_msg").show();
            }
        });
        //AFEO-5687: end
		
		//added for CLFE-249
		$("#wu-sendmoney-review-verify-1-lower-amount-button").click(function () {
			var amount = $('.wu-input-amt').val();
			Clazz.WULocalStorage.setpopupamount(amount);
			$("#popup").hide();
			$("#verification-1").hide();
			var sendingOptionsBase = new Clazz.com.wu.widget.module.WUSendingOptionsBase({
				propertiesData: self.propertiesData
			});
			sendingOptionsBase.resetAmount();
			Clazz.WULocalStorage.clearpopupamount();
		});

		$("#wu-sendmoney-payment-verify-1-lower-amount-button").click(function () {
			var amount = $('.wu-input-amt').val();
			Clazz.WULocalStorage.setloweramount(amount);
			Clazz.WULocalStorage.clearSummaryObjects();
			Clazz.WUNavigator.goToSendMoneyPage();


			var sendMoneycontrollerinternational = new Clazz.com.wu.widget.module.WUSendMoneyPaymentControllerInternational({
				propertiesData: self.propertiesData
			});

		});
		//need to replace id with start_verification for eID analytics
		$("#wu-sendmoney-review-verify-1-verify-post-button").click(function () {
			this.wuoptionContainer = new Clazz.com.wu.widget.module.WUOptionContainerBase({
				propertiesData: self.propertiesData
			});
			//self.setErrorMessageDetails();
			this.wuoptionContainer.showverifypopup();
			DTM_Trigger('dtm-confirm-address-fma', "euid-confirmaddress");

		});

		$("#start_verification").click(function () {
			this.wuoptionContainer = new Clazz.com.wu.widget.module.WUOptionContainerBase({
				propertiesData: self.propertiesData
			});
			//self.setErrorMessageDetails();
			this.wuoptionContainer.showverifypopup();
			//DTM_Trigger('dtm-confirm-address-fma',"euid-confirmaddress");
			DTM_Trigger('start-verification'); //[CLFE-1855 eID Analytics] 
		});
		$("#wu-sendmoney-payment-verify-1-verify-post-button").click(function () {
			//this.sendmoneypaymentControl = new Clazz.com.wu.widget.module.WUSendMoneyPaymentControllerInternational();
			//self.setErrorMessageDetails();
			//this.sendmoneypaymentControl.showverifypopup();
			$("#popup").hide();
			//$("#verifypopup1").show();
			$("#verificationpayment").show();
			DTM_Trigger('dtm-confirm-address-fma', "euid-confirmaddress");

		});




		$("#wu-sendmoney-review-verify-1-verify-payment-button").click(function () {
			var wuAlert = new Clazz.com.wu.widget.module.WUAlertIntl();
			self.wusendmoneypaymentcontroller = new Clazz.com.wu.widget.module.WUSendMoneyPaymentControllerInternational({
				wuAlert: wuAlert
			});
			//self.setErrorMessageDetails();
			self.wusendmoneypaymentcontroller.showverifypopup();
			DTM_Trigger('dtm-confirm-address-fma', "euid-confirmaddress");

		});

		// added for FR verification PCF
		$("#return_to_options_link").click(function () {
			$("#verification-3").hide();
			$("#verification-2").hide();
			$("#verification-1").hide();
		});

		$("#profile_fma").click(function () {
			Clazz.WULocalStorage.setProfile_tab_fma("true");
		});

		$("#wu-payment-method-overlay-close-button").click(function () {
			$("#verificationpayment1").hide();
			$("#verificationpayment").hide();
			$("#verifypopup1").hide();
			$("#verification").hide();
		});


		$("#wu-delete-payment-method-overlay-close-button").click(function () {
			$("#verification-3").hide();
			$("#verification-2").hide();
			$("#verification-1").hide();
			$("#input-amount-fea").val("");
			$('body').removeClass('noscroll');
			$('.wu-maskMain-overlay').remove();
			$('.wu-maskMain').remove();
			DTM_Trigger('closed-verification-process', 'send-money', 'start');  //[CLFE-1855] eId Analytics
		});

		$(".button-cancel").click(function () {
			$('.wu-maskMain-overlay').remove();
			$('.wu-maskMain').remove();
			$("#input-amount-fea").val("");
			DTM_Trigger('closed-verification-process', 'profile', 'overview-tab');  //[CLFE-1855] eId Analytics
		});

		//Adding some online verification options
		$(".wu-personal-info-button-edit").click(function() {
            var verificationType = $(this).attr('id');
            var onlineVerData = new Object();
            onlineVerData["ver_type"] = verificationType;
            Clazz.WULocalStorage.setOnlineVerObject(JSON.stringify(onlineVerData));
            $("#stepOne").hide();
            $("#stepTwo").show();
            if(verificationType != 'offline') {
            	DTM_Trigger('online-verification-attempt1','euid-additionalinfo');
            }
		});
		//Replaced continue button id 'wu-datacollect-continue' with 'continue_thirdparty' for eID analytics
		$("#wu-datacollect-continue").click(function () {
			var value = $("#eid-datacollect").val();
			if (!Clazz.WURegex.idNumber.test(value)) {
				$("#wu-datacollect-error").removeClass("display-none");
				return;
			}
			var verificationData = JSON.parse(Clazz.WULocalStorage.getOnlineVerObject());
			verificationData['ver_data'] = value;
			//verificationData['ver_return'] = window.location.href;
			Clazz.WULocalStorage.setOnlineVerObject(JSON.stringify(verificationData));

			$('.wu-notif-overlay-header-content').find(".popup-header").hide();
			$('#header-confirm-verification').show();
			$(".verification-result-error").hide();

			$("#stepOne").hide();
			$("#stepTwo").hide();
			$("#stepThree").show();
		});

		$("#continue_genIII").click(function () {
            var firstName = $("#first-name").val();
            var middleName = $("#middle-name").val();
            var lastName = $("#last-name").val();
            var nationalIdType = $("#id-type").val();
			var nationalIdNumber = $("#id-num").val();

            if(!self.validateForm()){
                return;
            }
            
			var customerName = {
				firstName: firstName,
				middleName: middleName,
				lastName: lastName
			};
			
			var idDocument = {
				"type": nationalIdType,
				"data": nationalIdNumber,
				"isPrimary": "true"
			};
			var complianceDetals = {"id_documents": {
				"id_document": [idDocument]
			}};
			var onSuccess = function(response){
				var setLocalStorageGenIIIStatus = $.proxy(Clazz.WULocalStorage["setGenIIIVerificationStatus"], Clazz.WULocalStorage); 
                if(response.error){
                    var responseCode = response.error.code;
                    // failed for the first two times
                    if(responseCode === "C1145"){
                        $('.wu-notif-overlay-header-content').find(".popup-header").hide();
                        $('#header-confirm-verification').show();

                        $(".verification-result-alert").show();
                    }
                    // account locked
                    else if(responseCode === "C6621"){
                        $('.wu-notif-overlay-header-content').find(".popup-header").hide();
                        $('#header-verificaiton-failed').show();

                        $('#stepTwo').hide();
                        $("#verification-success").hide();
                        $('#verification-fail').show();
						setLocalStorageGenIIIStatus(responseCode);
                    }
					else{
						$(".verification-result-error").show();
					}
                }
                else{
					$('.wu-notif-overlay-header-content').find(".popup-header").hide();
					$('#header-verificaiton-success').show();
                    
                    $("#stepTwo").hide();
                    
                    $("#verification-success").hide();
                    $("#verification-fail").hide();
					$('#verification-success').show();
                    $("#getVerified-tab").hide();
                    
                    // update customer details in local storage
                    var gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
                    gatewayCustomer.name = response.sender.name;
                    gatewayCustomer.complianceDetails = response.sender.complianceDetails;
                    gatewayCustomer.identityVerificationStatus = response.verificationStatus;

                    Clazz.WULocalStorage.setGatewayCustomer(JSON.stringify(gatewayCustomer));
				}
			};
			self.initiateCustomerVerification(complianceDetals, customerName, onSuccess);
		});

		$("#return_genIII").click(function(){
			this.wuoptionContainer = new Clazz.com.wu.widget.module.WUOptionContainerBase({
				propertiesData: self.propertiesData
			});
			this.wuoptionContainer.showverifypopup();
        });

        $("#try_again_genIII").click(function(){
            $("#start_verification").click();
			this.wuoptionContainer = new Clazz.com.wu.widget.module.WUOptionContainerBase({
				propertiesData: self.propertiesData
			});
			this.wuoptionContainer.showverifypopup();
        });

        $("#continue_genIII_success").click(function(){
            self.onCloseOverlayEvent.dispatch();
            Clazz.WUNavigator.goToSendMoneyPage();
        });

		$("#continue_thirdparty").click(function () {
			var value = $("#eid-datacollect").val();
			if (!Clazz.WURegex.idNumber.test(value)) {
				$("#wu-datacollect-error").removeClass("display-none");
				return;
			}
			var verificationData = JSON.parse(Clazz.WULocalStorage.getOnlineVerObject());
			verificationData['ver_data'] = value;
			//verificationData['ver_return'] = window.location.href;
			verificationData['ver_return'] = window.location.protocol + "//" + window.location.hostname + "/dk/en/profile.html";
			console.log("verificationData WUAlert\n\n\n\n" + JSON.stringify(verificationData));
			verificationData['ver_return'] = window.location.href;
			Clazz.WULocalStorage.setOnlineVerObject(JSON.stringify(verificationData));
			$("#stepOne").hide();
			//*****SIGNICAT - begins*****
			if (Clazz.wuSpinner) {
				Clazz.wuSpinner.show();
			}
			var isAppNative = window.sessionStorage.getItem('isAppNative');
			var psConfig = isAppNative ? Clazz.synchingPresentationServiceConfig : Clazz.presentationServiceConfig;
			var signicatReturnUrl = encodeURIComponent(window.location.href);
			var verType = verificationData['ver_type'];
			var signicatReturnHostName = location.hostname;
			var currentUrl = window.location.host;
			var isProduction =
				!(
					currentUrl.indexOf('dev') > -1 ||
					currentUrl.indexOf('qa') > -1 ||
					currentUrl.indexOf('localhost') > -1 ||
					currentUrl.indexOf('uat') > -1 ||
					currentUrl.indexOf('cms') > -1
				);

			var signicatHostName = psConfig.signicat_protocol + "://" +
				(isProduction ? psConfig.signicat_host_prod : psConfig.signicat_host_non_prod)
				+ "/" + psConfig.signicat_context;

			var signicatRedirect = function (id) {
				//bypass and telia won't work with the ":[LANG]" suffix
				var language = (id == "bypass" || id == "telia") ? undefined : Clazz.WUCookies.getCookieWULanguageCookie_();
				console.log("signicatRedirect URL: \n\n" + signicatHostName + "?id=" + id + "&target=https%3A%2F%2F" + signicatReturnHostName + "%2Fbin%2Fwesternunion%2Fsecurehandler\n\n");
				window.location.href = signicatHostName + "?id=" + id + (language ? ":" + language : "")
					+ "&target=https%3A%2F%2F" + signicatReturnHostName + "%2Fbin%2Fwesternunion%2Fsecurehandler";
			};
			//Denmark
			if (self.data.isDenmark && self.data.nemID) {
				//Redirect the user to the Signicat's NemID flow
				console.log("trigger nemID");
				//go to the secure handler
				signicatRedirect("nemid-limited:plain");

			}
			//Norway
			else if (self.data.isNorway) {
				if (verType === 'bankID') {
					//Redirect the user to the Signicat's NemID flow
					console.log("trigger bankID");
					//go to the secure handler
					signicatRedirect("nbid-fullscreen:plain");
				}
				else if (verType === 'mobileBankID') {
					//Redirect the user to the Signicat's mobileBankID flow
					console.log("trigger mobileBankID");
					//go to the secure handler
					signicatRedirect("nbid2-mobil-fullscreen:plain");
				}
				else if (verType === 'buypass') {
					//Redirect the user to the Signicat's NemID flow
					console.log("trigger buypass");
					//go to the secure handler
					//window.location.href = "https://preprod.signicat.com/std/method/demo?id=buypass&target=https%3A%2F%2Fwudispatcher-qa51.wucloud.net%2Fbin%2Fwesternunion%2Fsecurehandler";
					signicatRedirect("buypass");
				}
			}
			//Sweden
			else if (self.data.isSweden) {
				if (verType === 'bankID') {
					//Redirect the user to the Signicat's NemID flow
					console.log("trigger bankID");
					//go to the secure handler
					signicatRedirect("sbid:plain");
				}
				else if (verType === 'mobileBankID') {
					//Redirect the user to the Signicat's mobileBankID flow
					console.log("trigger mobileBankID");
					//go to the secure handler
					signicatRedirect("sbid-mobil:plain");
				}
				else if (verType === 'telia') {
					//Redirect the user to the Signicat's NemID flow
					console.log("trigger telia");
					//go to the secure handler
					//window.location.href = "https://preprod.signicat.com/std/method/westernunion/?id=telia:default&target=https%3A%2F%2Fwudispatcher-qa51.wucloud.net%2Fbin%2Fwesternunion%2Fsecurehandler";
					signicatRedirect("telia");
				}
			}
			//******SIGNICAT - ends******
		});

		$("#eid-datacollect").blur(function () {
			var value = $("#eid-datacollect").val();
			if (!Clazz.WURegex.idNumber.test(value)) {
				$("#wu-datacollect-error").removeClass("display-none");
			}
			else {
				$("#wu-datacollect-error").addClass("display-none");
			}
		});

		$("#offline, #uk-kyc").click(function () {
			if (Clazz.WUNavigator.isInThisWebPage("send-money/receipt.html")) {
				DTM_Trigger('dtm-confirm-address-fma', "euid-confirmaddress");
			} else {
				DTM_Trigger('dtm-confirm-address', "euid-confirmaddress");
			}
			var onlineVerData = new Object();
			onlineVerData["ver_type"] = $(this).attr('id');
			Clazz.WULocalStorage.setOnlineVerObject(JSON.stringify(onlineVerData));
			$("#stepOne").hide();
			self.wuoptionContainer = new Clazz.com.wu.widget.module.WUOptionContainerBase({
				propertiesData: self.propertiesData
			});
			//self.setErrorMessageDetails();
			self.wuoptionContainer.showverifypopupold();
			DTM_Trigger('dtm-confirm-address-fma', "euid-confirmaddress");
		});

		$("#wu-delete-payment-method-overlay-close-button-1").click(function () {

			$("#verification-3").hide();
			$("#verification-2").hide();
			$("#verification-1").hide();


		});
		$("#wu-delete-payment-method-overlay-close-button-popup").click(function () {
			if (window.sessionStorage.getItem("selectOption") == "receive") {
				$(".wu-input-convertion").val("");
				$("#verification-1").hide();
				$("#popup").hide();
			} else {
				$("#input-amount-fea").val("");
				$("#verification-1").hide();
				$("#popup").hide();
			}
		});
		$("#wu-sendmoney-review-verify-1-verify-cancel-button").click(function () {
			if (window.sessionStorage.getItem("selectOption") == "receive") {
				$(".wu-input-convertion").val("");
				$("#verification-1").hide();
				$("#popup").hide();
				$("#verification").hide();

			} else {
				$("#input-amount-fea").val("");
				$("#verification-1").hide();
				$("#popup").hide();
				$("#verification").hide();

			}
		});
		$("#wu-payment-method-overlay-close-button-popup").click(function () {
			if (window.sessionStorage.getItem("selectOption") == "receive") {

				$("#verification").hide();
				$("#popup").hide();
			} else {

				$("#verification").hide();
				$("#popup").hide();
			}
		});

		$("#wu-sendmoney-review-verify-2-apply-button").click(function () {

			self.editProfileRequest();
			$("#verification-3").hide();
			$("#verification-2").hide();
			$("#verification-1").hide();


		});


		$("#link-change-payment-method-fea").click(function () {
			DTM_Trigger('dtm-confirm-address-fma', "euid-confirmaddress");
			$("#verification-1").show();
			$("#verification-2").show();
		});

		$("#start_verification").click(function () {
			//DTM_Trigger('dtm-confirm-address-fma',"euid-confirmaddress");
			$("#verification-1").show();
			$("#verification-2").show();
			DTM_Trigger('start-verification');
		});



		if (this.data.response) {
			if (this.data.response.code) {
				this.setAlertContainer();
			}
		} else {
			if (this.statusWarning || this.statusWarningWUPay) {
				this.setWarningContainer();
			} else {
				if (this.data.message && this.data.message == this.propertiesData.session_expired_message) {
					this.setSessionExpiredContainer();
				}
				else {
					this.setErrorContainer();
				}
			}

		}
		// My WU sucess alert message
		if ((this.data.code === this.constantMyWuAlert)) {

			this.setSuccessContainer();
			$("#wu-alert-code").text('');
		}

        // IFEOEU-181: validation start

        
        $(this.fields.firstName.inputElement).bind('focusout', function() {
            self.validateName('firstName', this, false);
        });

        $(this.fields.middleName.inputElement).bind('focusout', function() {
            self.validateName('middleName', this, false);
        });

        $(this.fields.lastName.inputElement).bind('focusout', function() {
            self.validateName('lastName', this, false);
        });

        $(this.fields.idNumber.inputElement).on('input', function (event) { 
            this.value = this.value.replace(/[^0-9A-Za-z]/g, '');
        });

        $(this.fields.idNumber.inputElement).bind('focusout', function() {
            self.validateIdNumber(this, false);
        });
        $(this.fields.idType.containerElement).on('change', function() {
            self.validateIdType(this, false);
        });

    },

    __validateName : "Validate a name and put error classes if invalid",
    validateName : function(nameType, element, submitting) {
            var value = "";
            var isError = false;
            if (Clazz.WUNavigator.isEuropeanCountry()) {
                value = this.removeExtraSpaces($(element).val().trim());
                $(element).val(value);
            } else{
                value = $(element).val(); 
            }
            if (value !== ""){
                var nameRegEx = new RegExp(Clazz.WURegex[nameType]);
                var isValidName = nameRegEx.test(value);
                if(isValidName){
                    this.removeErrorFieldClass(this.fields[nameType]);
                }else{
                    isError = true;
                    this.addErrorFieldClass(this.fields[nameType]);
                }
            } else {
                if (!submitting || this.fields[nameType].optional){
                    this.removeErrorFieldClass(this.fields[nameType]);
                } else{
                    isError = true;
                    this.addErrorFieldClass(this.fields[nameType]);
                }
            }
            return !isError;
    },

    __validateIdNumber : "Validate a name and put error classes if invalid",
    validateIdNumber : function(element, submitting) {
            var isError = false;
            length = $(element).val().length; 
            if (length < 4){
                isError = true;
                this.addErrorFieldClass(this.fields.idNumber);
                if (length ==0 && !submitting){
                    this.removeErrorFieldClass(this.fields.idNumber);
                    isError = false;
                }
            }else if (length < 26){
                this.removeErrorFieldClass(this.fields.idNumber);
            }
            return !isError;
    },

    __validateIdType : "Validates that id type is chosen",
    validateIdType : function(element, submitting) {
            var isError = false;
            value = $(element).val(); 
            if (value=="0"){
                isError = true;
                this.addErrorFieldClass(this.fields.idType);
            }else {
                this.removeErrorFieldClass(this.fields.idType);
            }
            return !isError;
    },

    removeExtraSpaces : function (input){   
        return input.replace(/\s{2,}/g, ' ');   
    },

    __addErrorFieldClass : "Make @objectKey field has red color and display error message.",
    addErrorFieldClass : function(objectValue) {
        $(objectValue.errorElement).removeClass('display-none');
        $(objectValue.errorElement).show();
        $(objectValue.inputElement).addClass('error');
        $(objectValue.containerElement).addClass('error');
    },

    __removeErrorFieldClass : "Clear @objectKey field from red color and hide error message.",
    removeErrorFieldClass : function(objectValue) {
        $(objectValue.errorElement).addClass('display-none');
        $(objectValue.inputElement).removeClass('error');
        $(objectValue.containerElement).removeClass('error');
    },

    __validateForm : "Validate form on submitting.",
    validateForm : function() {
        var firstNameElementValid = this.validateName('firstName', $(this.fields.firstName.inputElement), true);
        var middleNameElementValid = this.validateName('middleName', $(this.fields.middleName.inputElement), true);
        var lastNameElementValid = this.validateName('lastName', $(this.fields.lastName.inputElement), true);
        var idNumberlementValid = this.validateIdNumber($(this.fields.idNumber.inputElement), true);
        var idTypelementValid = this.validateIdType($(this.fields.idType.inputElement), true);

        var valid = firstNameElementValid &&middleNameElementValid && lastNameElementValid && idNumberlementValid && idTypelementValid;
        
        return valid

    },

        // IFEOEU-181 end

	__noFma: "Check if Country is FMA disabled.",
	noFma: function () {
		//$("#wu-sendmoney-review-verify-1-verify-post-button").hide();  replcaed id with start_verification for eID analytics
		$("#start_verification").hide();
		$("#wu-sendmoney-review-verify-1-verify-cancel-button").hide();
	},

	postRender: function () {
		 //PBL-2355 Start
        if(this.gatewayCustomer && this.gatewayCustomer.address && this.gatewayCustomer.address.countryIsoCode=='NZ'){
        	$('#identification-content-container-first :first-child').addClass('yellow'); 
			$('#identification-content-container-first :first-child').removeClass('red');
        }
        //PBL-2355 End
		//IFEOEU 181 start. Displaying dropdown for ID type
		if ($(this.fields.idType.containerElement).length>0){
        this.dropDownIDType = new Clazz.com.wu.widget.module.WUDropDownIDType({
            defaultContainer : "#wu-id-type-dropdown",
            id : "id-type",
            showPreOption : true,
            preOptionText : (this.propertiesData && this.propertiesData.choose_1_text) ? this.propertiesData.choose_1_text : "- Choose -"
        });
        this.dropDownIDType.templateUrl = "/content/wucom/base/it/en/profile/jcr:content/parLeft/profile.dropDownMenu-template.html";
			this.dropDownIDType.render();
		} 
        //IFEOEU 181 end

		if (this.whereToRender && !Clazz.WUNavigator.isInMobilePage()) {
			if ($(this.whereToRender).length > 0) {
				$('html,body').animate({ scrollTop: $(this.whereToRender).offset().top }, 'slow');
			}
		}
		if (this.data.response) {
			if ((this.data.response.code === "onhold") || (this.data.code === this.constantsPendingTrx) ||
				(this.data.code === this.constantsInitAfterVerifyEmail) || (this.data.code === this.constantsSuccessResendOTP) ||
				(this.data.code === this.constantsSuccessSendTempPass) || (this.data.code === this.constantsSessionExpired) ||
				(this.data.code === this.contantsWarningReceiver) || (this.data.code === this.contantsWarningWUpay) || (this.data.code === this.constantsSuccessUpdateEmail) ||
				(this.data.code === this.constantsKycSuccess) || (this.data.code === this.constantKycText) ||
				(this.data.code === this.constantKycEmail) || (this.data.code === this.constantKycPhone) || (this.data.code === this.constantsWrongZipCode) ||
				(this.data.code === this.constantsSuccessEmailProof) || (this.data.code === this.constantsMultipleSender) || (this.data.code === this.constantsMultipleReceiver)) {
				$(".wu-alert-code").hide();
			}
			if (this.data.code === this.constantsWrongZipCode) {
				$(".wu-alert-code").show();
			}
		}
		/* CLFE-1431-Start */
		var senderCountry = Clazz.WUNavigator.getSenderCountryFromURL();
		var jsonData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[senderCountry] ? Clazz.langConfig.senderInfoMap[senderCountry] : null;
		if (jsonData.noFma === "true") {
			this.noFma();
		}
		/* CLFE-1431-End */
		// added for FR verification PCF
		if (Clazz.WUNavigator.getSenderCountryFromURL() === "FR") {
			$(".wu-maskMain-overlay").css("top", "1%");
		}

		$(".wu-notif-overlay-header-content").find(".popup-header").hide();
        $("#header-choose-verification-type").show();
        $("#verification-success").hide();
        $("#verification-fail").hide();
        $(".verification-result-error").hide();
        $(".verification-result-alert").hide();
	},

	__clearAlert: "Clear alert.",
	clearAlert: function () {
		$(this.whereToRender).html("");
	},

	__setDefaultCodeAndMessage: "Set default alert code and message.",
	setDefaultCodeAndMessage: function () {
		if (this.data) {
			if (this.data.response) {
				this.code = this.data.response.code;
				if (this.data.response.message) {
					this.data.response.message = this.data.response.message.replace("<![CDATA[", "").replace("]]>", "");
					this.message = this.data.response.message;
				}
			}
		}
	},

	__setResponseData: "Set alert data according to response.",
	setResponseData: function (data) {
		this.data = data;
		this.setDefaultCodeAndMessage();
	},

	__setEmailVerificationData: "Set email verification data for alert.",
	setEmailVerificationData: function (emailVerificationData) {
		this.emailVerificationData = emailVerificationData;
	},

	__setPhoneVerificationData: "Set phone verification data for alert.",
	setPhoneVerificationData: function (phoneVerificationData) {
		this.phoneVerificationData = phoneVerificationData;
	},

	__setAlertContainer: "Set the type of alert container according to error code",
	setAlertContainer: function () {
		var code;

		if (this.data.response) {
			code = this.data.response.code;
		}
		constantsPhoneNumberError: "C1434";
		constantsD2BError: "C1777";
		constantsIFSCCodeError = "C2389";
		if ((code === this.constantsAccountAlreadyRegistered) ||
			(code === this.constantsEmailAlreadyRegistered) ||
			(code === this.constantsInvalidCredentials) ||
			(code === this.constantsCurrentAndNewPasswordSame) ||
			(code === this.constantsExceedTransactionLimit) ||
			(code === this.constantsPhoneNumberError) ||
			(code === this.constantsD2BError) ||
			(code === this.constantsIFSCCodeError)
		) {
			this.setErrorContainer();
		} else if ((code === this.constantsEmailVerificationLogin) || (code === this.constantsEmailVerificationLoginCQ)) {
			this.setInfoUpdateEmailContainer();
		} else if ((code === this.constantsEmailVerificationRegister) ||
			(code === this.constantsSuccessResendOTP) ||
			(code === this.constantsSuccessSendTempPass) ||
			(code === this.constantsKycSuccess) ||
			(code === this.constantsPendingTrx)) {
			if (this.data.response.container) {
				this.setInfoUpdateEmailContainer();
			} else {
				this.setSuccessContainer();
			}
		} else if (code === this.constantsSuccessUpdateEmail) {
			this.setInfoUpdateEmailContainer();
		} else if ((code === "onhold") || (code === this.constantsErrorMigrationDOB) || (code === this.constantsSuccessEmailProof)) {
			this.setSuccessContainer();
		}

		else {
			this.setErrorContainer();
		}
	},

	__setSuccessContainer: "Set container type as success.",
	setSuccessContainer: function () {
		$(this.whereToRender).find(this.alertContainer).addClass(this.successClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.errorClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoUpdateEmailClass);
	},

	__setInfoContainer: "Set container type as info.",
	setInfoContainer: function () {
		$(this.whereToRender).find(this.alertContainer).removeClass(this.successClass);
		$(this.whereToRender).find(this.alertContainer).addClass(this.infoClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.errorClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoUpdateEmailClass);
	},
	/**
	 * set background color, border, and icon for alert update email verification
	 */
	__setInfoUpdateEmailContainer: "Set background color, border, and icon for alert update email verification",
	setInfoUpdateEmailContainer: function () {
		$(this.whereToRender).find(this.alertContainer).addClass(this.infoUpdateEmailClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.successClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.errorClass);
	},

	__setErrorContainer: "Set container type as error.",
	setErrorContainer: function () {
		$(this.whereToRender).find(this.alertContainer).removeClass(this.successClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoClass);
		$(this.whereToRender).find(this.alertContainer).addClass(this.errorClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoUpdateEmailClass);
	},

	__setWarningContainer: "Set container type as warning.",
	setWarningContainer: function () {
		$(this.whereToRender).find(this.alertContainer).addClass(this.infoClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.successClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.errorClass);
	},

	__setSessionExpiredContainer: "Set container type as session expire.",
	setSessionExpiredContainer: function () {
		$(this.whereToRender).find(this.alertContainer).removeClass(this.successClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.infoClass);
		$(this.whereToRender).find(this.alertContainer).removeClass(this.errorClass);
		$(this.whereToRender).find(this.alertContainer).addClass(this.sessionExpiredClass);
	},

	__setAlertMessage: "Set alert message according to error code.",
	setAlertMessage: function () {
		var code, type;
		if (this.data.response) {
			code = this.data.response.code;
			type = this.data.response.type;
		} else {
			if (this.statusWarning) {
				code = this.contantsWarningReceiver;
			} else if (this.statusWarningWUPay) {
				code = this.contantsWarningWUpay;
			} else {
				if (!this.data.message) {
					code = this.constantsSessionExpired;
				}
			}

		}
		var mangled = false;
		var email = this.emailVerificationData ? this.emailVerificationData.emailAddress : Clazz.WULocalStorage.getEmail();
		if (email !== null && email !== undefined) {
			mangled = this.checkMangledEmail(email);
		}


		if (code === this.constantsEmailAlreadyRegistered) {
			this.setErrorMessage(this.getEmailAlreadyRegisteredMessage);
		}
		/* for email verification or otp */
		else if ((code === this.constantsEmailVerificationRegister)
			|| (code === this.constantsEmailVerificationLogin)
			|| (code === this.constantsEmailVerificationLoginCQ)) {
			var data = {};
			if (this.emailVerificationData) {
				data['emailAddress'] = this.emailVerificationData.emailAddress;
				data['password'] = this.emailVerificationData.password;
				data['container'] = this.emailVerificationData.container;
				data['resourcePath'] = this.resourcePath;


			}
			if (code === this.constantsEmailVerificationRegister) {
				var registerStep2 = this.propertiesData && this.propertiesData.registerStep2 ? this.propertiesData.registerStep2 : "Register: Step 2 of 2.";
				this.setSuccessMessage(this.getEmailVerificationRegisterMessage);
				data['title'] = registerStep2;
				this.goToEmailVerification(data);
			} else if ((code === this.constantsEmailVerificationLogin && !mangled) || (code === this.constantsEmailVerificationLoginCQ && !mangled)) {
				this.setInfoMessage($.proxy(this.getEmailVerificationLoginMessage, this));
				this.goToUpdateEmailVerification(data);
			} else if ((code === this.constantsEmailVerificationLogin && mangled) || (code === this.constantsEmailVerificationLoginCQ && mangled)) {
				//RTHREE-1684
				//this.setInfoMessage(this.getEmailVerificationLoginMessage);
				this.goToChangeEmail(data);
				this.hideAlert = true;
			}
		}
		/* end for email verification or otp */

		else if (code === this.constantsSuccessResendOTP) {
			this.setSuccessMessage($.proxy(this.getSuccessResendOTPMessage, this));
		}
		else if (code === this.constantsCurrentAndNewPasswordSame) {
			this.setErrorMessage(this.getCurrentAndNewPasswordSameMessage);
		}
		else if (code === this.constantsExceedTransactionLimit) {
			this.setErrorMessage(this.getExceedTransactionLimitMessage);
		}
		else if (code === this.constantsSuccessSendTempPass) {
			this.setSuccessMessage(this.getSuccessResendTempPass);
		} else if (code === this.constantsSuccessUpdateEmail) {
			this.setSuccessMessage($.proxy(this.getSuccessUpdateEmail, this));
		}
		else if (type === this.constantKycText) {
			this.setSuccessMessage($.proxy(this.getInfoKycText, this));
		}
		else if (type === this.constantKycEmail) {
			this.setSuccessMessage($.proxy(this.getInfoKycEmail, this));
		}
		else if (type === this.constantKycPhone) {
			this.setSuccessMessage($.proxy(this.getInfoKycPhone, this));
		}
		else if (code === this.constantsSessionExpired) {
			this.setSessionExpiredMessage();
		} else if (code === this.contantsWarningReceiver) {
			this.setWarningReceiver();
		} else if (code === this.contantsWarningWUpay) {
			this.setWarningWUPay();
		} else if (code === this.constantsHigherAmount) {
			this.setErrorMessage($.proxy(this.getErrorHigherAmount, this));
		} else if (code === this.constantsMaxLimit) {
			this.setErrorMessage($.proxy(this.getErrorMaxLimit, this));
		} else if (code === this.constantsWrongAccountNumber) {
			this.setErrorMessage($.proxy(this.getErrorWrongInmateAccountNumber, this));
		} else if (code === this.constantsUpdateEmailAlreadyExist) {
			this.setErrorMessage($.proxy(this.getErrorUpdateEmailAlreadyExist, this));
		} else if (code === this.constantsUpdatePhoneAlreadyExist) {
			this.setErrorMessage($.proxy(this.getErrorUpdatePhoneAlreadyExist, this));
		} else if (code === this.constantsWrongZipCode || code === this.constantsZipCodeError) {
			this.setErrorMessage($.proxy(this.getErrorZipCode, this));
		}
		//As part of WUBs march catch up requirement implementation.
		else if (code === this.constantWUBSmaxlimit) {
			//this.setErrorMessage();
			this.setErrorMessage($.proxy(this.getErrorWUBSMaxlimit, this));
		}
		else if (code === this.constantsAccountAlreadyRegistered) {
			this.setErrorMessage($.proxy(this.getAccountAlreadyRegisteredMessage, this));
		}
		else {
			this.setErrorMessage();
		}
	},

	__checkMangledEmail: "Check if email is mangled email.",
	checkMangledEmail: function (email) {
		var regex = /^change_me_/;
		return regex.test(email.toLowerCase());
	},

	/**
	 * email verification from login
	 */
	__goToChangeEmail: "email verification from login",
	goToChangeEmail: function (data) {
		var updateEmail = new Clazz.com.wu.widget.module.WUUpdateEmail();

		self.updateEmailListener = new Clazz.com.listener.UpdateEmailListener({ data: data, isFromChangeEmail: true });
		updateEmail.onContinueButtonEvent.add(self.updateEmailListener.editProfileRequest, self.updateEmailListener);
		updateEmail.templateUrl = this.resourcePath + ".updateEmail-template.html";
		updateEmail.render(this.emailVerificationData.container);
		//RTHREE-1684
		$("#alert-container").hide();
	},

	/**
	 * email verification from login
	 */
	__goToUpdateEmailVerification: "email verification from login",
	goToUpdateEmailVerification: function (data) {
		if (this.emailVerificationData) {
			data["propertiesData"] = this.propertiesData;

			var updateEmailVerify = new Clazz.com.wu.widget.module.WUUpdateEmailVerify({
				data: data
			});
			var emailVerificationListener = new Clazz.com.listener.EmailVerificationListener({
				data: data,
				propertiesData: this.propertiesData
			});
			emailVerificationListener.resourcePath = this.resourcePath;
			if (this.emailVerificationData.container != "#dashboard") {
				this.addedHeaderFlow(updateEmailVerify);
			}
			var getDatabaseListener = new Clazz.com.listener.GetDatabaseListener();
			emailVerificationListener.onGetDatabaseEvent.add(getDatabaseListener.onGetDatabase, getDatabaseListener);

			updateEmailVerify.onCompleteVerificationEvent.add(emailVerificationListener.onCompleteVerificationEvent, emailVerificationListener);
			updateEmailVerify.onResendOTPEvent.add(emailVerificationListener.onResendOTPEvent, emailVerificationListener);
			updateEmailVerify.templateUrl = this.resourcePath + '.updateEmailVerify-template.html';
			updateEmailVerify.render(this.emailVerificationData.container);

			if (this.emailVerificationData.container === "#login-container") {
				$('.wu-header-top').hide();
				$('.wu-header-quicklink').hide();
				$('.wu-header-dorp-down').hide();
				$('.wu-header-menulogin').hide();
				$('.wu-header-tabmenu').hide();
				//RTHREE-971 Update Email - Email verification page is not as expected
				var supportTips = new Clazz.com.wu.widget.module.WUSupportTips({ "propertiesData": this.propertiesData });
				supportTips.templateUrl = this.resourcePath + ".support-tips-template.html";
				supportTips.render("#support-tips");
				//var contact = new Clazz.com.wu.widget.module.WUContact({data: data});
				//contact.templateUrl = this.resourcePath + ".contact-template.html";
				//contact.render("#support-tips");
			} else if (this.emailVerificationData.container === "#dashboard") {
				if ($('.nt-right-col')) {
					$('.nt-right-col').append('<div id="contact"><div class="wu-contact-container"><div class="wu-contact canyouHelp"><div class="wu-module-content">'
						+ '<p class="title">Can we help?</p>' + '<div class="chat">' + '<div class="icon-chat">&nbsp;</div>' +
						'<p><a class="chat-online" href="https://thewesternunion.custhelp.com/app/chat/chat_launch_popup"> Chat online</a> or</p>' +
						'</div>' + '<div class="phone">' + '<div class="icon-phone">' + '&nbsp;' + '</div>' +
						'<p>Call us toll-free, 24/7:<br>1-877-989-3268</p>' + '</div>' + '</div>' + '</div>' + '</div></div>');
				}
				$('.wu-header-top').hide();
				$('.wu-header-quicklink').hide();
				$('.wu-header-dorp-down').hide();
				$('.wu-header-menulogin').hide();
				$('.wu-header-tabmenu').hide();
				//RTHREE-971 Update Email - Email verification page is not as expected
				$('.module-content,#introduce-bank,#support-tips').hide();
			}
			else if (this.emailVerificationData.container === "#wu-login-sendmoney-content") {
				//RTHREE-2694 Inline transaction _email verification page:-R3 Email verification page not displayed as per R2 email verification page during inline transaction.
				if ($('.wu-login-right-content')) {
					$('.wu-login-right-content').append('<div id="contact"><div class="wu-contact-container"><div class="wu-contact canyouHelp"><div class="wu-module-content">'
						+ '<p class="title">Can we help?</p>' + '<div class="chat">' + '<div class="icon-chat">&nbsp;</div>' +
						'<p><a class="chat-online" href="https://thewesternunion.custhelp.com/app/chat/chat_launch_popup"> Chat online</a> or</p>' +
						'</div>' + '<div class="phone">' + '<div class="icon-phone">' + '&nbsp;' + '</div>' +
						'<p>Call us toll-free, 24/7:<br>1-877-989-3268</p>' + '</div>' + '</div>' + '</div>' + '</div></div>');
				}
				$('.wu-header-top').hide();
				$('.wu-header-quicklink').hide();
				$('.wu-header-dorp-down').hide();
				$('.wu-header-menulogin').hide();
				$('.wu-header-tabmenu').hide();
				$('.module-content,#introduce-bank,#support-tips').hide();

			}
		}
	},

	/**
	 * email verification from register
	 */
	__goToEmailVerification: "email verification from register",
	goToEmailVerification: function (data) {

		var emailVerificationListener = new Clazz.com.listener.EmailVerificationListener({
			data: data,
			propertiesData: this.propertiesData
		});
		emailVerificationListener.resourcePath = this.resourcePath;
		var getDatabaseListener = new Clazz.com.listener.GetDatabaseListener();

		if (this.emailVerificationData) {
			var emailVerification = new Clazz.com.wu.widget.module.WUEmailVerification({ data: data });
			this.isFromOtherFlow(emailVerification);
			emailVerificationListener.onGetDatabaseEvent.add(getDatabaseListener.onGetDatabase, getDatabaseListener);
			emailVerification.onCompleteVerificationEvent.add(emailVerificationListener.onCompleteVerificationEvent, emailVerificationListener);
			emailVerification.onResendOTPEvent.add(emailVerificationListener.onResendOTPEvent, emailVerificationListener);
			emailVerification.onChangeEmailEvent.add(emailVerificationListener.onChangeEmailEvent, emailVerificationListener);
			emailVerification.templateUrl = this.resourcePath + '.emailVerification-template.html';
			emailVerification.render(this.emailVerificationData.container);
		}
	},

	__isFromOtherFlow: "Change header.",
	isFromOtherFlow: function (emailVerification) {
		var summaryObjectsSendMoney = Clazz.WULocalStorage.getSummaryObjects();
		//RTHREE-2553 fix
		//if (summaryObjectsSendMoney){
		this.addedHeaderFlow(emailVerification);
		//}
	},
	__addedHeaderFlow: "Change header.",
	addedHeaderFlow: function (emailVerification) {
		var self = this;
		emailVerification.postRender = function () {
			$(emailVerification.headerFlowContainer).show();
			$(emailVerification.headerFlowContainer).find("li.step-flow-login").addClass("header-send-money-active");
			//RTHREE-2694 Inline transaction email verification page:-R3 Email verification page not displayed as per R2 email verification page during inline transaction.
			// $('#support-tips').remove();
			$('.wu-footer-menu-content').hide();
			$('.wu-footer-sendmoney-content').hide();
			$('.wu-header-send-money-flow-container .step-flow-place').html(self.propertiesData.review);

			// Single line Added for RINTL-16040
			$('.wu-footer-sendmoney-content-intl').hide();

			//RTHREE- 2665 Fix
			$("#header-container").removeClass("wu-sendmoney-header-container");
			$(".wu-header-logo").removeClass("wu-sendmoney-header-logo");
			$(".wu-header-send-money-flow-container").removeClass("wu-header-send-money-flow-step");
			$(".legalnotice").hide();


			// RTHREE-3323 begin
			if (Clazz.WUNavigator.isInThisWebPage("session-expired.html")) {
				var alertMessage = $("#wu-alert-message").text();
				if (alertMessage == self.propertiesData.message_email_verification_login_message) {
					$("#alert-container").addClass("alert-container-session-expire-verify-email");
				}
			}
			// RTHREE-3323 end

		};
	},

	__setSuccessMessage: "Set title and message.",
	setSuccessMessage: function (getMessageFunction) {
		if (getMessageFunction) {
			var temp = getMessageFunction(this.propertiesData);
			this.data['title'] = temp.title;
			this.data['message'] = temp.message;
		}
	},

	__setInfoMessage: "Set message.",
	setInfoMessage: function (getMessageFunction) {
		this.data['message'] = getMessageFunction(this.propertiesData);
	},

	__setErrorMessage: "Set message and code.",
	setErrorMessage: function (getMessageFunction) {

		if (this.data.response) {
			this.data['message'] = (getMessageFunction) ? getMessageFunction() : this.data.response.message;

			this.data['code'] = this.data.response.code;

			this.gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
			this.data["gatewayCustomerObj"] = this.gatewayCustomer;

			//added for RINTL-18324
			var gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
			if (gatewayCustomer) {
				if (gatewayCustomer.name) {
					var firstName = gatewayCustomer.name.firstName;
					var lastName = gatewayCustomer.name.lastName;
					this.data["name"] = firstName + " " + lastName;
				}
				if (gatewayCustomer.address) {
					var city = gatewayCustomer.address.city;
					var address = gatewayCustomer.address.addrLine1;
					var secondAddress = gatewayCustomer.address.addrLine2 ? ", " + gatewayCustomer.address.addrLine2 : "";
					var state = gatewayCustomer.address.state ? ", " + gatewayCustomer.address.state.toUpperCase() : "";
					var country = gatewayCustomer.address.countryIsoCode;
					var postalCode = gatewayCustomer.address.postalCode ? ", " + gatewayCustomer.address.postalCode.toUpperCase() : "";
					this.data["address"] = address + secondAddress + ", " + city + state + postalCode;
				}
				this.data["country"] = this.getCountryName(country);

				// added for FR verification PCF
				this.data["email"] = gatewayCustomer.email;
				if (Clazz.WUNavigator.getSenderCountryFromURL() === "FR") {
					this.data["isFrance"] = true;
				} else {
					this.data["isFrance"] = false;
				}
			}

		}
	},

	__setSessionExpiredMessage: "Set message.",
	setSessionExpiredMessage: function () {
		this.data['message'] = (this.propertiesData && this.propertiesData.session_expired_message) ? this.propertiesData.session_expired_message : "";
	},

	__setWarningReceiver: "Set message as Know your receiver. \"After your money's been picked up or deposited, it canâ€™t be refunded.\"",
	setWarningReceiver: function () {
		//Fix for ::::: RTHREE-615 In Send Money flow, notification displayed on Receiver's Information page is not in sync with R2.
		this.data['message'] = (this.propertiesData.message_warning_receiver) ? this.propertiesData.message_warning_receiver : "";
	},

	__setWarningWUPay: "Set alert message for WUPay",
	setWarningWUPay: function () {
		this.data['message'] = (this.propertiesData.message_warning_wupay) ? this.propertiesData.message_warning_wupay : "";
	},

	__getEmailAlreadyRegisteredMessage: "Get message for Email already registered error.",
	getEmailAlreadyRegisteredMessage: function () {
		var loginPath = "http://" + window.location.host + '/content/wucom/base/us/en/login.html'; /* RTHREE-2635  add http://  */
		var message = '';
		var message_email_already_register_1 = (this.propertiesData.message_email_already_register_1) ? this.propertiesData.message_email_already_register_1 : "";
		var message_email_already_register_2 = (this.propertiesData.message_email_already_register_2) ? this.propertiesData.message_email_already_register_2 : "";
		var message_email_already_register_3 = (this.propertiesData.message_email_already_register_3) ? this.propertiesData.message_email_already_register_3 : "";
		message = message_email_already_register_1 + " <a href='";
		message = message + loginPath;
		message = message + "'>" + message_email_already_register_2 + "</a> " + message_email_already_register_3;
		return message;
	},

	__getAccountAlreadyRegisteredMessage: "Get message for account already registered error.",
	getAccountAlreadyRegisteredMessage: function () {
		var loginPath = "http://" + window.location.host + '/content/wucom/base/us/en/login.html'; /* RTHREE-3373  add http://  */
		var message = '';
		var message_account_already_regiser_1 = (this.propertiesData.message_account_already_regiser_1) ? this.propertiesData.message_account_already_regiser_1 : "";
		var message_account_already_regiser_2 = (this.propertiesData.message_account_already_regiser_2) ? this.propertiesData.message_account_already_regiser_2 : "";
		var message_account_already_regiser_3 = (this.propertiesData.message_account_already_regiser_3) ? this.propertiesData.message_account_already_regiser_3 : "";
		message = message_account_already_regiser_1 + " <a href='";
		message = message + loginPath;
		message = message + "'>" + message_account_already_regiser_2 + "</a> " + message_account_already_regiser_3;
		return message;
	},

	__getEmailVerificationRegisterMessage: "Get message for email verification in register flow.",
	getEmailVerificationRegisterMessage: function (propertiesData) {
		var temp = {};
		if (propertiesData) {
			if (propertiesData.please_check_your_email_now) {
				var string = propertiesData.thank_you_for_registering;
				temp['title'] = string.replace(/<[\/]{0,1}(p)[^><]*>/ig, "");
				temp['message'] = propertiesData.please_check_your_email_now;
			} else {
				var string = propertiesData.thank_you_for_registering;
				temp['message'] = string.replace(/<[\/]{0,1}(p)[^><]*>/ig, "");
			}
		}
		else {
			temp['title'] = (this.propertiesData.email_verification_register_message_title) ? this.propertiesData.email_verification_register_message_title : "";
			temp['message'] = (this.propertiesData.email_verification_register_message) ? this.propertiesData.email_verification_register_message : "";
		}

		return temp;
	},

	__getEmailVerificationLoginMessage: "Get message for email verification in login flow.",
	getEmailVerificationLoginMessage: function (propertiesData) {
		var message = '';
		if (propertiesData && propertiesData.to_help_protect_your_account) {
			message = propertiesData.to_help_protect_your_account;
		} else {
			message = (propertiesData && propertiesData.email_verification_login_message) ? propertiesData.email_verification_login_message : "";
		}
		return message;
	},

	__getSuccessResendOTPMessage: "Get message for OTP resend successful.",
	getSuccessResendOTPMessage: function () {
		var temp = {};
		temp['title'] = "";
		if (this.data.response.container) {
			/**
			 * set message for verify message from login
			 */
			temp['message'] = (this.propertiesData.success_resend_otp_message) ? this.propertiesData.success_resend_otp_message : "";
		} else {
			temp['message'] = (this.propertiesData.success_resend_otp_message) ? this.propertiesData.success_resend_otp_message : "";
		}

		return temp;
	},
	__getSuccessUpdateEmail: "Get message for email updated.",
	getSuccessUpdateEmail: function () {
		var temp = {};
		temp['title'] = "";
		temp['message'] = (this.propertiesData.you_updated_your_email_address) ? this.propertiesData.you_updated_your_email_address : "";
		return temp;
	},

	__getSuccessResendTempPass: "Get message for temporary password sent.",
	getSuccessResendTempPass: function () {
		var temp = {};
		temp['title'] = "";
		temp['message'] = (this.propertiesData.success_resend_temp_pass) ? this.propertiesData.success_resend_temp_pass : "";
		return temp;
	},

	__getCurrentAndNewPasswordSameMessage: "Get message for warning new password is the same as old password.",
	getCurrentAndNewPasswordSameMessage: function () {
		var message = (this.propertiesData.current_and_new_password_same_message) ? this.propertiesData.current_and_new_password_same_message : "";
		return message;
	},

	__getExceedTransactionLimitMessage: "Get message for transaction amount exceeds limits for correctional institution.",
	getExceedTransactionLimitMessage: function () {
		var message = '';
		message = (this.propertiesData.exceed_transaction_limit_message) ? this.propertiesData.exceed_transaction_limit_message : "";
		return message;
	},

	__getErrorHigherAmount: "Get message for transaction amount exceeds limits for correctional institution",
	getErrorHigherAmount: function () {
		var message = '';
		message = (this.propertiesData.error_higher_amount) ? this.propertiesData.error_higher_amount : "";
		return message;
	},

	__getErrorMaxLimit: "Get message for transaction amount exceeds maximum limit.",
	getErrorMaxLimit: function () {
		var message = '';
		message = (this.propertiesData.error_max_limit) ? this.propertiesData.error_max_limit : "";
		return message;
	},

	__getErrorZipCode: "Get message for wrong zip code.",
	getErrorZipCode: function () {
		var message = '';
		message = (this.propertiesData.error_zip_code) ? this.propertiesData.error_zip_code : "";
		return message;
	},

	__getErrorWrongInmateAccountNumber: "Get message for wrong inmate account number.",
	getErrorWrongInmateAccountNumber: function () {
		var message = (this.propertiesData.error_wrong_inmate_account_number) ? this.propertiesData.error_wrong_inmate_account_number : "";
		return message;
	},

	__getErrorUpdateEmailAlreadyExist: "Get message for update email to an existing email address.",
	getErrorUpdateEmailAlreadyExist: function () {
		//RTHREE - 2794 incorrect message if email already exist - Fix
		var message = (this.propertiesData.error_update_email_already_exist) ? this.propertiesData.error_update_email_already_exist : "";
		return message;
	},

	__getErrorUpdatePhoneAlreadyExist: "Get message for update phone to an existing account.",
	getErrorUpdatePhoneAlreadyExist: function () {
		var message = (this.propertiesData.error_update_phone_already_exist) ? this.propertiesData.error_update_phone_already_exist : "";
		return message;
	},

	__getInfoKycText: "Get message for kyc text.",
	getInfoKycText: function (propertiesData) {
		var temp = {};
		temp['title'] = "";
		var msg1 = (propertiesData && propertiesData.text_me_alert1) ? propertiesData.text_me_alert1 : "We sent a text message to ";
		var msg2 = (propertiesData && propertiesData.text_me_alert2) ? propertiesData.text_me_alert2 : ". Please check your mobile phone.";
		temp['message'] = msg1 + this.data.response.message + msg2;
		return temp;
	},

	__getInfoKycEmail: "Get message for kyc email.",
	getInfoKycEmail: function (propertiesData) {
		var temp = {};
		temp['title'] = "";
		var msg1 = (propertiesData && propertiesData.email_me_alert1) ? propertiesData.email_me_alert1 : "We sent your verification code to ";
		var msg2 = (propertiesData && propertiesData.email_me_alert2) ? propertiesData.email_me_alert2 : ". Please check your email. It will only be saved for 30 minutes.";
		temp['message'] = msg1 + this.data.response.message + msg2;
		return temp;
	},

	__getInfoKycPhone: "Get message for phone.",
	getInfoKycPhone: function (propertiesData) {
		var temp = {};
		temp['title'] = "";
		var msg1 = (propertiesData && propertiesData.call_me_alert1) ? propertiesData.call_me_alert1 : "We called you at ";
		var msg2 = (propertiesData && propertiesData.call_me_alert2) ? propertiesData.call_me_alert2 : " with a verification code.";
		temp['message'] = msg1 + this.data.response.message + msg2;
		return temp;
	},
	//As part of WUBs March catch up added
	__getErrorWUBSMaxlimit: "Get message for WUBS maximum limit.",
	getErrorWUBSMaxlimit: function () {
		//var error_wubs_max_limit_1 = (this.propertiesData.error_wubs_max_limit_1)?this.propertiesData.error_wubs_max_limit_1:"";
		//var error_wubs_max_limit_2 = (this.propertiesData.error_wubs_max_limit_2)?this.propertiesData.error_wubs_max_limit_2:"";
		//var message = error_wubs_max_limit_1+error_wubs_max_limit_2;
		//if (message == '') {
		//message = error_wubs_max_limit_1+this.data.response.message+error_wubs_max_limit_2;
		//}
		var message;
		var gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
		if (gatewayCustomer.identityVerificationStatus == "N") {
			var unverified_msg = (this.propertiesData.unverified_msg) ? this.propertiesData.unverified_msg : "The amount is greater than the maximum allowed: 999 EUR. Please check and lower the amount. If you want to send more than 999 EUR (up to 5,000 EUR), please verify your identity first";
			message = unverified_msg;
		}
		else if (gatewayCustomer.identityVerificationStatus == "Y") {
			var verified_msg = (this.propertiesData.verified_msg) ? this.propertiesData.verified_msg : "This transfer may have exceeded your limit. If you're an existing customer, see your current transaction limit.";
			message = verified_msg;
		}
		//var message = error_wubs_max_limit_1+this.data.response.message+error_wubs_max_limit_2;
		//var message = "In most cases, you can send up to $2999.00 on westernunion.com. But you may be able to send more through a Western Union agent location or 1-800-CALL-CASH. Learn about <a href='https://thewesternunion.custhelp.com/app/answers/detail/a_id/33/kw/limits' target='_blank'> <u>transaction limits</u>.</a>";
		return message;
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

Clazz.createPackage('com.wu.constants');

Clazz.com.wu.constants.LEGAL_NOTICE_ONLINE_MONEY_TRANSFER = "0"
Clazz.com.wu.constants.LEGAL_NOTICE_GENERAL = "1";
Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD = "2";
Clazz.com.wu.constants.LEGAL_NOTICE_EXCHANGE_RATE = "3";
Clazz.com.wu.constants.LEGAL_NOTICE_BANK_ACCOUNT = "4";
Clazz.com.wu.constants.LEGAL_NOTICE_MOBILE_WALLET = "6";
Clazz.com.wu.constants.LEGAL_NOTICE_PAY_OUT_BANK_ACCOUNT = "8";
Clazz.com.wu.constants.LEGAL_NOTICE_FIXED_ON_RECEIVE = "9";
Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_EXCHANGE_RATE = "10";
Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_GENERAL = "11";
Clazz.com.wu.constants.LEGAL_NOTICE_PROMO_DISCOUNT = "12";

Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN = "-1";

Clazz.com.wu.constants.FIXED_ON_RECEIVE_COUNTRIES = "LS,BR,ET,NA,ZA,NG,VE,CN"; //PBL-2035


Clazz.com.wu.widget.module.WULegalNotice = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#legal-notice-container",
	__response : "Variable for response.",
	response : null,
	__staticObject : "Object variable for static data.",
	staticObject : {count:0},

	__legalNoticeNumber : "Variable to hold data of legal notice number.",
	legalNoticeNumber : null,
	__legalNoticeText : "Variable to hold data of legal notice text.",
	legalNoticeText : null,
	__PAYIN_CREDIT_CARD : "Text of payin method credit card.",
	PAYIN_CREDIT_CARD : "CreditCard",
	__PAYIN_BANK_ACCOUNT : "Text of payin method bank account.",
	PAYIN_BANK_ACCOUNT : "ACH",
	__PAYIN_WUPAY : "Text of payin method WUPay.",
	PAYIN_WUPAY : "WUPay",
	__PAYOUT_MOBILE_WALLET : "Code of payout method mobile",
    PAYOUT_MOBILE_WALLET : "600",
	__PAYOUT_BANK_ACCOUNT : "Code of payout method bank account.",
    PAYOUT_BANK_ACCOUNT : "500",
	__PAYOUT_WUBS : "Text of payout method WUBS.",
    PAYOUT_WUBS : "WUBS",
    postRender:"",
	__srcCurrrencyIsoCode : "Source currrency iso code.",
    srcCurrrencyIsoCode : "USD",

    __sendMoneyEvent : "Variable condition of send money.",
    sendMoneyEvent : "no",
    __destDateAvailable : "To indicate if destination date available.",
    destDateAvailable : false,

	initialize : function(config){

		if (config && config.objectEditText)
        {
        	this.staticObject.count++;
            $(this.defaultContainer).attr("id","legal-notice-container-id"+this.staticObject.count);
            this.defaultContainer = this.defaultContainer+"-id"+this.staticObject.count;
            this.response = config.objectEditText;
        }
    },

	preRender : function(whereToRender, renderFunction){
		this.legalNoticeNumber = this.response.legalNoticeNumber? this.response.legalNoticeNumber:"";
		this.legalNoticeText = this.response.legalNoticeText? this.response.legalNoticeText:"";

		this.data = {
				legalNoticeNumber : this.legalNoticeNumber,
				legalNoticeText : this.legalNoticeText
		};

		renderFunction(this.data, whereToRender);
	},

	__hiddenDynamicLegalNotice : "Hide dynamic legal notice.",
	hiddenDynamicLegalNotice : function(){

        $("#legal-notice-container-id2").hide();
		$("#legal-notice-container-id3").hide();
		$("#legal-notice-container-id4").hide();
		$("#legal-notice-container-id5").hide();
		$("#legal-notice-container-id6").hide();
		$("#legal-notice-container-id7").hide();
        $("#legal-notice-container-id8").hide();
		$("#legal-notice-container-id9").hide();

	},

	postRender : function(){
		//Ibnu : comment this code for WUBS
		/*if(Clazz.WUNavigator.isInThisWebPage("estimatePrice.html")){
			$(".wu-legal-notice").hide();
		}*/
        var disclaimerCount= Clazz.WULocalStorage.getLegalNoticeCount();

                                if(disclaimerCount){
                               	 disclaimerCount=Number(disclaimerCount) + 1;
                               	 Clazz.WULocalStorage.setLegalNoticeCount(disclaimerCount);
                                }else{
                               	 Clazz.WULocalStorage.setLegalNoticeCount("1");
                                }
                   if(disclaimerCount===Clazz.WULegalNoticeArray.length){
            			this.showDynamicLegalDisclaimer();
						Clazz.WULocalStorage.clearLegalNoticeCount();
						this.postRender="true";
                    }else{
                    	this.hideDynamicLegalDisclaimer();
                    }
		        
        // RTHREE-2954 begin
		if(Clazz.WUNavigator.isInThisWebPage("price-estimator/continue.html")){
			$(".wu-legal-notice li").css("width", "auto");
		}
	},


	__hideDynamicLegalDisclaimer : "Hide dynamic legal disclaimer.",
	hideDynamicLegalDisclaimer : function(){
        // TODO - fixed on receive, Philipines and WUBS disclaimers
		
		Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_ONLINE_MONEY_TRANSFER);
		Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_EXCHANGE_RATE);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_BANK_ACCOUNT);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_MOBILE_WALLET);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PAY_OUT_BANK_ACCOUNT);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_FIXED_ON_RECEIVE);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PROMO_DISCOUNT);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_EXCHANGE_RATE);
        Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_GENERAL);

        // disclaimer number 1 is shown always
		Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_GENERAL);
        // if profile page hide below
        if(Clazz.WUNavigator.isInThisWebPage("profile.html"))
        {
            Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_GENERAL);
            Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN);
        }


        // Californai txn dislcaimer is assigned superscript (legal_notice_number) as -1. Below line hides the <sup>-1</sup>.
        $('sup:contains(-1)').text('');

	},


	__showDynamicLegalDisclaimer : "Show dynamic legal disclaimer.",
    showDynamicLegalDisclaimer : function() {
		var disclaimerCount= Clazz.WULocalStorage.getLegalNoticeCount();     
        if(disclaimerCount!=Clazz.WULegalNoticeArray.length && this.postRender !=""){
        	return;
        }

        if ( this.hideDisclaimers() == "return" )
        {
            return;
        }

        var summaryObj = (Clazz.WULocalStorage.getSummaryObjects())?JSON.parse(Clazz.WULocalStorage.getSummaryObjects()) : "";
        // sendMoneyEvent flag is set in LegalDisclaimerListener.toggleDisclaimer() method. For events like country change, payout/payin radio 
        // selection on sendmoney options page, getLegalDisclaimerObject is used. 
        if (this.sendMoneyEvent == "yes") {
        	summaryObj = (Clazz.WULocalStorage.getLegalDisclaimerObject())?JSON.parse(Clazz.WULocalStorage.getLegalDisclaimerObject()) : "";
        }

	if(Clazz.WUNavigator.isInThisWebPage("send-money/kycVerificationOptions.html")){
		if(Clazz.WULocalStorage.getHasPendingTransaction() == "true"){
        	summaryObj = (Clazz.WULocalStorage.getLegalDisclaimerObject())?JSON.parse(Clazz.WULocalStorage.getLegalDisclaimerObject()) : "";
		}
	}

		  //RINTL-16582

		if(summaryObj){

			if(Clazz.WUNavigator.isInThisWebPage("send-money/review.html") ){
				//$("#legal-notice-container-id1 sup").text('');
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_ONLINE_MONEY_TRANSFER);
			}

           var transferFee = $("#service-fee-lbl-id").text();
		   if(transferFee && transferFee !=""){

		     	Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PROMO_DISCOUNT);

		         //For disclaimer no 12. It is displayed if summary-widget is present


	       }else{
		       	Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PROMO_DISCOUNT);
		   }
            // if profile page hide below
            if(Clazz.WUNavigator.isInThisWebPage("profile.html"))
            {
                Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_GENERAL);
                Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN);
            }

            // if Dest country is not US ... For international rollout check that source country and dest country are not same..
            if(summaryObj.flag_position && summaryObj.flag_position != "US" )
            {
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_EXCHANGE_RATE);
            }
            /*
            else if(summaryObj.exchangeRate !== "1.0") {
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_EXCHANGE_RATE);
			}
            */

            if(summaryObj.payout_method_code == this.PAYOUT_MOBILE_WALLET){
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_MOBILE_WALLET);
			}
			if(summaryObj.payout_method_code == this.PAYOUT_BANK_ACCOUNT){
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_BANK_ACCOUNT);
			}
			if(summaryObj.paying_method == this.PAYIN_CREDIT_CARD){
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD);
			}

            // TODO need to use disclaimerMap
            if(summaryObj.payout_method_code == this.PAYOUT_BANK_ACCOUNT && Clazz.WUNavigator.isInThisWebPage("send-money/review.html") ){
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PAY_OUT_BANK_ACCOUNT);
			}

			// hide 'California txn' disclaimer for receipt page.
	        if(Clazz.WUNavigator.isInThisWebPage("send-money/receipt.html") || Clazz.WUNavigator.isInThisWebPage("send-money/sendMoneyWUPayReceipt.html") ){
                //Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN);
            }

	        //this.showFixonReceiveDisclaimer(summaryObj);

            // China D2b is not Fixed on receive RTOPT-1066
            if ( ( summaryObj.flag_position == "CN" && summaryObj.payout_method_code != this.PAYOUT_BANK_ACCOUNT ) 
                || (Clazz.com.wu.constants.FIXED_ON_RECEIVE_COUNTRIES.indexOf(summaryObj.flag_position) != -1) )
            {
                Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_FIXED_ON_RECEIVE);
            }


            if(summaryObj.payout_method_code == this.PAYOUT_WUBS)
            {
				Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_GENERAL);

    	        if(summaryObj.flag_position && summaryObj.flag_position != "US" )
                {
					Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_EXCHANGE_RATE);
                }
                Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_EXCHANGE_RATE);
            }

            //summaryBlockCalled = true;
		}


        // for priceestimator start page show exhange_rate disclamer for Intl country..
        // if summary object is not null and it is international country so if user comes to price-estimator by clicking back button
        // then also disclaimer shud be shown.. if user comes for first time then this block is redundant..
        if(Clazz.WUNavigator.isInThisWebPage("price-estimator/start"))
        {
            for(i=1; i<11; i++)
            {
                // exchange rate disclaimer will be displayed for international country 
                if( i != 3)
                {
					Clazz.hideLegalNoticeByNumber(""+i);
                }
            }
            Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN);
        }

		// for BillPay/inmate priceestimator page show CC disclaimer
		if(Clazz.WUNavigator.isInThisWebPage("price-estimator/performEstimatedFeeInquiry") || 
						Clazz.WUNavigator.isInThisWebPage("send-inmate/performEstimatedInmateFeeInquiry") )
        {
			Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD);
        } 

		

	},



    /**
		Show SuperScripts for disclaimers next to "Service" label in Summary widget and Payment Method/Delivery Method on review and receipt page.
    */
    __showDisclaimerSuperScript : 'Show SuperScripts for disclaimers next to "Service" label in Summary widget and Payment Method/Delivery Method on review and receipt page.',
    showDisclaimerSuperScript : function(pageName) {
    	if(this.postRender ===""){
			//this.hideDynamicLegalDisclaimer();
		}else{
			this.postRender ="";
		}
        var summaryObj = (Clazz.WULocalStorage.getSummaryObjects())?JSON.parse(Clazz.WULocalStorage.getSummaryObjects()) : "";
        var transferFee = $("#service-fee-lbl-id").text();
        if(transferFee && transferFee !=""){
        	
        	Clazz.showLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PROMO_DISCOUNT);

            //For disclaimer no 12. It is displayed if summary-widget is present
          
         
        }else{
        	Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_PROMO_DISCOUNT);
        }
        // sendMoneyEvent flag is set in LegalDisclaimerListener.toggleDisclaimer() method. For events like country change, payout/payin radio 
        // selection on sendmoney options page, getLegalDisclaimerObject is used. 
        if (this.sendMoneyEvent == "yes") {
            summaryObj = (Clazz.WULocalStorage.getLegalDisclaimerObject())?JSON.parse(Clazz.WULocalStorage.getLegalDisclaimerObject()) : "";
        }

        // below code shud be called for pages embedding Summary widget.. it shud not be called for review/receipt page.
		//if ($('#summary').length)
        if (pageName != null && pageName == "summary-widget")
        {

			//$("#payingWithDesc sup").remove(); //RTHREE-2687
			$("#payoutMethodDesc sup").remove();
			$('#service_sup_id').text('');

            if(summaryObj.paying_method == this.PAYIN_CREDIT_CARD){
                $("#payingWithDesc sup").remove();
                $("#payingWithDesc").append("<sup>" + Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD  + "</sup>");
			}

            if(summaryObj.payout_method_code == this.PAYOUT_MOBILE_WALLET){
				$("#payoutMethodDesc").append("<sup>" + Clazz.com.wu.constants.LEGAL_NOTICE_MOBILE_WALLET + "</sup>");
			}

            var serviceSuperscriptValue = this.getPayoutDisclaimerSuperScript(summaryObj);
           	$('#service_sup_id').text(serviceSuperscriptValue);
        }
        else if (pageName != null && pageName == "quick-resend-widget")
        {

            $('#service_sup_id').text('');
            $('#quickresend_paying_sup_id').text('');    
            $('#quickresend_payout_sup_id').text('');    

            if(summaryObj.paying_method == this.PAYIN_CREDIT_CARD){
                $('#quickresend_paying_sup_id').text(Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD);    
            }

            if(summaryObj.payout_method_code == this.PAYOUT_MOBILE_WALLET){
                $('#quickresend_payout_sup_id').text(Clazz.com.wu.constants.LEGAL_NOTICE_MOBILE_WALLET);    
            }

            var serviceSuperscriptValue = this.getPayoutDisclaimerSuperScript(summaryObj);
               $('#service_sup_id').text(serviceSuperscriptValue);
        }
        else
        {

			// if review page..
			$('#paying_sup_id').text('');
			$('#payout_sup_id').text('');
            $('#receiver_payout_sup_id').text('');

			$('#payout_service_sup_id').text('');
			$('#payout_dest_date_avbl_sup_id').text('');

			if(summaryObj.paying_method == this.PAYIN_CREDIT_CARD ){
                $('#paying_sup_id').text(Clazz.com.wu.constants.LEGAL_NOTICE_CREDIT_CARD);
            }

            // if sendmoney-review
            if(summaryObj.payout_method_code == this.PAYOUT_BANK_ACCOUNT && Clazz.WUNavigator.isInThisWebPage("send-money/review.html") ){
				$('#payout_sup_id').text(Clazz.com.wu.constants.LEGAL_NOTICE_PAY_OUT_BANK_ACCOUNT);
			}

			if(summaryObj.payout_method_code == this.PAYOUT_MOBILE_WALLET){
				$('#receiver_payout_sup_id').text(Clazz.com.wu.constants.LEGAL_NOTICE_MOBILE_WALLET);
			}

            // show disclaimer 1,4 for expected payout location ...div class-wu-sendmoney-review-pay-receiver-location
			// destination_available_date and wupay and ( combined_pds = Y or fix_on_receive = Y )
			//if(summaryObj.isWupay && summaryObj.isWupay == true && summaryObj.destinationAvailableDate && summaryObj.destinationAvailableDate != "" &&
            	//	( (summaryObj.fixedOnReceive && summaryObj.fixedOnReceive == true ) || ( summaryObj.combinedPDS && summaryObj.combinedPDS == true  ) ) )

			var payoutDisclaimer = this.getPayoutDisclaimerSuperScript(summaryObj);

			$('#payout_service_sup_id').text(payoutDisclaimer);

            //if ( $('#wupay_dest_avail_date_section').is(':visible') )
			// we will get destinationDate for international DF txn 
            if(this.destDateAvailable == true)
            {
				$('#payout_dest_date_avbl_sup_id').text(payoutDisclaimer);
                $('#payout_service_sup_id').text('');
            }

			//receipt
            // speed_section -- isNotBlank(#fd.getData('speed') , isBlank(#fd.getData('destination_available_date')) 
			// destination_available_date_section for international countries..

            // receipt page
			/* if ($('#speed_section') || $('#destination_available_date_section') ) 
            {
				var serviceSuperscriptValue = this.getPayoutDisclaimerSuperScript(summaryObj);
				$('#payout_service_sup_id').text(serviceSuperscriptValue);
            }
            */




        }

        this.setExchangeRateDisclaimerSuperScript(summaryObj);


    },

    /**
		Show SuperScripts for disclaimers next to "Service" label in Summary widget and Payment Method/Delivery Method on review and receipt page.
    */
    __getPayoutDisclaimerSuperScript : ' Show SuperScripts for disclaimers next to "Service" label in Summary widget and Payment Method/Delivery Method on review and receipt page.',
    getPayoutDisclaimerSuperScript : function(summaryObj) {

        var serviceSuperscriptValue = Clazz.com.wu.constants.LEGAL_NOTICE_GENERAL;
		$('#sending_money_service_sup_id').text(serviceSuperscriptValue);

        if(summaryObj){
            if(summaryObj.payout_method_code == this.PAYOUT_BANK_ACCOUNT){
                serviceSuperscriptValue = serviceSuperscriptValue + "," + Clazz.com.wu.constants.LEGAL_NOTICE_BANK_ACCOUNT;
            }
            else if(summaryObj.payout_method_code == this.PAYOUT_WUBS)
            {
				serviceSuperscriptValue = serviceSuperscriptValue + "," + Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_GENERAL;
				$('#sending_money_service_sup_id').text(serviceSuperscriptValue);
            }
        }

        return serviceSuperscriptValue;
	},

    __setExchangeRateDisclaimerSuperScript : "Set exchange rate disclaimer superscript.",
    setExchangeRateDisclaimerSuperScript : function(summaryObj) {

		$('#target_currency_summary_sup_id').text('');
        var exchangeRateSuperscriptValue = "";

        // if Dest country is not US ... For international rollout check that source country and dest country are not same..
        if(summaryObj.flag_position && summaryObj.flag_position != "US" && summaryObj.payout_method_code != this.PAYOUT_WUBS)
        {
            exchangeRateSuperscriptValue = Clazz.com.wu.constants.LEGAL_NOTICE_EXCHANGE_RATE;
        }

        // if fix on receive country
        //if (Clazz.com.wu.constants.FIXED_ON_RECEIVE_COUNTRIES.indexOf(summaryObj.flag_position) != -1)
        // China D2b is not Fixed on receive RTOPT-1066
        if ( ( summaryObj.flag_position == "CN" && summaryObj.payout_method_code != this.PAYOUT_BANK_ACCOUNT ) 
            || (Clazz.com.wu.constants.FIXED_ON_RECEIVE_COUNTRIES.indexOf(summaryObj.flag_position) != -1) )
        {
            exchangeRateSuperscriptValue = exchangeRateSuperscriptValue + "," + Clazz.com.wu.constants.LEGAL_NOTICE_FIXED_ON_RECEIVE;
			// target_currency_summary_sup_id is on summary-widget where disclaimer 9 is diaplyaed next to destcurrecnycode.
            //$('#target_currency_summary_sup_id').text(Clazz.com.wu.constants.LEGAL_NOTICE_FIXED_ON_RECEIVE);
        }

		// Intl WUBS txn
        if(summaryObj.flag_position && summaryObj.flag_position != "US" && summaryObj.payout_method_code == this.PAYOUT_WUBS)
        {
            exchangeRateSuperscriptValue = exchangeRateSuperscriptValue + "," + Clazz.com.wu.constants.LEGAL_NOTICE_WUBS_EXCHANGE_RATE;
        }

        // remove begining or trailing comma...
        exchangeRateSuperscriptValue = exchangeRateSuperscriptValue.replace(/^,|,$/g, '');
        $("sup[id=exchange_rate_summary_sup_id]").each(function(){     
        	$(this).text(exchangeRateSuperscriptValue);
        });


    },

    __hideDisclaimers : "Hide disclaimers.",
    hideDisclaimers : function() {

        this.hideDynamicLegalDisclaimer();

        if(Clazz.WUNavigator.isInThisWebPage("price-estimator/continue.html") || Clazz.WUNavigator.isInThisWebPage("send-money/kycWUTransactionNumber.html") 
            	|| Clazz.WUNavigator.isInThisWebPage("send-money/kycUploadIdScreen.html") 	|| Clazz.WUNavigator.isInThisWebPage("send-money/kycWUTransactionNumber.html") ||  
            	Clazz.WUNavigator.isInThisWebPage("bill-pay/kycConfirmIdentity.html") ){
            Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN);
        }

        var hideAllDisclaimersPages = [ "send-money/declineOptions", "send-inmate/start", "send-money/confirmationScreen", "send-money/kycSuccessDocUpload", 
                                  "send-money/kycUploadDocuments", "send-money/sendMoneyCashReceipt" ];

		for (var i=0; i<hideAllDisclaimersPages.length; i++)
        {
            var pageName = hideAllDisclaimersPages[i] + ".html";                    

			if ( Clazz.WUNavigator.isInThisWebPage (pageName) )
            {
                Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_GENERAL);
                Clazz.hideLegalNoticeByNumber(Clazz.com.wu.constants.LEGAL_NOTICE_CALIFORNIA_TXN);
                return "return";
            }
        }
	  },



});

Clazz.WULegalNoticeArray = [];
Clazz.showLegalNoticeByNumber = function(legalNoticeNumberType){
     if(!legalNoticeNumberType){
        return;
    }
	var legalNoticeNumber = legalNoticeNumberType.match(/[0-9]+/);
	var legalNoticeType = legalNoticeNumberType.match(/[a-zA-Z]+/);
	legalNoticeNumber = legalNoticeNumber[0];
	legalNoticeType = (legalNoticeType)? legalNoticeType[0] : legalNoticeType;
	for(var i=0;i<Clazz.WULegalNoticeArray.length;i++){
		var legalNotice = Clazz.WULegalNoticeArray[i];

		var number = legalNotice.legalNoticeNumber;
		if(legalNoticeType){
			if((legalNotice.legalNoticeType === legalNoticeType) && (legalNotice.legalNoticeNumber === legalNoticeNumber)){
            var show = $(legalNotice.defaultContainer).css( "display" );
            	if(show==='none'){
				$(legalNotice.defaultContainer).show();
                }
                break;
			}
		}else if(number === legalNoticeNumber){
			$(legalNotice.defaultContainer).show();
            break;
		}
	}
}
Clazz.hideLegalNoticeByNumber = function(legalNoticeNumberType){
    if(!legalNoticeNumberType){
        return;
    }
    var legalNoticeNumber = legalNoticeNumberType.match(/[0-9]+/);
	legalNoticeNumber = legalNoticeNumber[0];
	for(var i=0;i<Clazz.WULegalNoticeArray.length;i++){
		var legalNotice = Clazz.WULegalNoticeArray[i];

		var number = legalNotice.legalNoticeNumber;

		if(number === legalNoticeNumber){
			$(legalNotice.defaultContainer).hide();
		}
	}
}

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUSupportTips = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#support-tips",
	
	initialize : function(config){
		var howToSendMoneyOnlineURL = "https://thewesternunion.custhelp.com/app/answers/detail/a_id/89/kw/sendmoneyonline";
		var howToTrackYourMoneyTransferURL = "https://thewesternunion.custhelp.com/app/answers/detail/a_id/308/session/L3RpbWUvMTM1NDA0NjY0NS9zaWQvcVNsS3RsY2w%3D";
		var moreFAQsURL = "https://thewesternunion.custhelp.com/app/home";
		this.data = {
            supportTips : [
                {
                    link : howToSendMoneyOnlineURL,
                    text : "How to send money online"
                },
                {
                    link : howToTrackYourMoneyTransferURL,
                    text : "How to track your money transfer"
                },
                {
                    link : moreFAQsURL,
                    text : "More FAQs"
                }
            ]
        }
        if(config){
			this.data.propertiesData = config.propertiesData;
        }
    }
});

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

Clazz.com.wu.widget.module.WUAutoComplete = Clazz.extend(Clazz.Base, {
	__interval : "Time interval",
	interval : 1000,
	__searchTimeOut : "Time out for search",
	searchTimeOut : 0,
	__currentSearchKey : "Current key search",
	currentSearchKey : '',
	__lastSearchKey : "Last key search",
	lastSearchKey : '',
	__alertError : "Instance for alert widget",
	alertError: null,
	__autoCompleteData : "Auto complete data",
	autoCompleteData : null,
	__autocompleteName : "Selector of autocomplete name.",
	autocompleteName : '#billers-autocomplete',
	__autocompleteWrapperId : "Selector of autocomplete wrapper id.",
	autocompleteWrapperId : 'autocomplete-wrapper',
	__autoCompleteContainer : "Selector of autocomplete container.",
	autoCompleteContainer : null,
	__autoCompleteErrorField : "Selector of autocomplete error field.",
	autoCompleteErrorField : null,
	__autoCompleteInput : "Selector of autocomplete input.",
	autoCompleteInput : null,
	__hideClass : "Css class",
	hideClass : 'display-none',
	__onRequestBodyEvent : "Signal for onRequestBodyEvent event.",
	onRequestBodyEvent : null,
	__onGetAutoCompleteEvent : "Signal for onGetAutoCompleteEvent event.",
	onGetAutoCompleteEvent : null,
	__onAutoCompleteSelected : "Signal for onAutoCompleteSelected event.",
	onAutoCompleteSelected : null,
	__MESSAGE_ALERT_W00407 : "Constant variable for message alert",
	MESSAGE_ALERT_W00407 : "We're sorry, but either you entered is not exist",
	__propertiesData: "Properties Data",
	propertiesData : null,
	initialize : function(config){
		if(config){
			this.autoCompleteContainer = config.autoCompleteContainer;
			this.autoCompleteErrorField = config.autoCompleteErrorField;
			this.autoCompleteInput = config.autoCompleteInput;
			this.propertiesData = config.propertiesData;
		}
		
		if(!Clazz.WUNavigator.isInMobilePage()){
			this.alertError = new Clazz.com.wu.widget.module.WUAlert({
				propertiesData : this.propertiesData
			});
		};
		this.onGetAutoCompleteEvent = new signals.Signal();
		this.onRequestBodyEvent = new signals.Signal();
		this.onAutoCompleteSelected = new signals.Signal();
	},
	
	__autoCompleteKeyup : "Handler of autoCompleteKeyup.",
	autoCompleteKeyup : function(autoCompleteField) {
		var self = this;
		$(autoCompleteField).keyup(function(){
			var keyword = $.trim($(this).val());
			if (self.searchTimeOut > 0)
			{
				clearTimeout(self.searchTimeOut);
				self.searchTimeOut = 0;
			}
			if (self.currentSearchKey !== keyword) {
				self.searchTimeOut = setTimeout(function(){
					if (self.lastSearchKey === keyword) {
						if (self.autoCompleteData.length > 0) {
							self.setAutocomplete(self.autoCompleteData);
						}
					} else {
						self.currentSearchKey = keyword;
						if (keyword === "") {
							self.hideAutocomplete(self.autocompleteName);
						} else {
							self.onRequestBodyEvent.dispatch(function(requestBody){
								self.onGetAutoCompleteEvent.dispatch(requestBody, $.proxy(self.setAutocomplete, self));
							});
						}
					}
				}, self.interval);
			} else {
				if (self.autoCompleteData.length > 0) {
					self.setAutocomplete(self.autoCompleteData);
				}
			}
		});		
	},

	__setAutocomplete : "Set billers",
	setAutocomplete : function(billers) {
		var autocompleteElement = "";
		var autocompleteWrapperString = "";
		var autocompleteWrapper = null;
		var billersShowed = 0;
		if (billers && billers.length > 0) {
			this.autoCompleteData = billers;
			autocompleteElement += "<ul>";

			var isNotLogin = !Clazz.WULocalStorage.getAccountNumber();
			if (isNotLogin) {
				for (var i=0; i < billers.length; i++) {
					if (billers[i].accountRequired === 'N') {
						billersShowed++;
						autocompleteElement += "<li>"+billers[i].companyName+"</li>";
					}
				}
			} else {
				for (var i=0; i < billers.length; i++) {
					billersShowed++;
					autocompleteElement += "<li>"+billers[i].companyName+"</li>";
				}
			}

			autocompleteElement += "</ul>";
			if (billersShowed > 0) {
				$(this.autocompleteName).html(autocompleteElement);

				autocompleteWrapperString = '<div id="' + this.autocompleteWrapperId + '" class="' + this.autocompleteWrapperId + '" style="display: inline-block;"></div>';
				autocompleteWrapper = $(autocompleteWrapperString);
				autocompleteWrapper.append($(this.autoCompleteInput));
				autocompleteWrapper.append($(this.autocompleteName));
				$(this.autoCompleteContainer).append(autocompleteWrapper);
				$(this.autoCompleteContainer).append($(this.autoCompleteErrorField));

				this.initializeAutocomplete({
					input: this.autoCompleteInput,
					autocomplete: this.autocompleteName,
					billerCount : billersShowed
				});
			}
		}else{
			this.showAlertError("W00407",this.propertiesData?this.propertiesData.alert_biller_error_message:"");
		}
	},
	
	__initializeAutocomplete : "Initialize autocomplete.",
	initializeAutocomplete : function(config){
		this.setAutocompleteStyle(config);
		this.showAutocomplete(config.autocomplete);
		this.bindAutocompleteList(config);
		$(this.autoCompleteInput).focus();
	},
	
	__setAutocompleteStyle : "Set autocomplete element style.",
	setAutocompleteStyle : function(config) {
		var width = $(config.input).outerWidth();
		var height = $(config.autocomplete).height();
		
		if(config.billerCount < 6){
			height = 'auto';
		}else if(height === 0){
			height = 263
		}
		
		$(config.autocomplete).css({
			'width': width,
			'height' : height
		});
	},
	
	__showAutocomplete : "Show autocomplete.",
	showAutocomplete : function(autocomplete) {
		var self = this;
		$(autocomplete).removeClass(this.hideClass);
		$(document).bind('mouseup', function(event){
			var isNotAutocompleteList = $(event.target).parents(autocomplete).length === 0;
			if (isNotAutocompleteList) {
				self.hideAutocomplete(autocomplete);
			}
		});
	},
	
	__hideAutocomplete : "Hide autocomplete.",
	hideAutocomplete : function(autocomplete) {
		$(autocomplete).addClass(this.hideClass);
		$(document).unbind('mouseup');

		$(this.autoCompleteContainer).append($(this.autoCompleteInput));
		$(this.autoCompleteContainer).append($(this.autocompleteName));
		$(this.autoCompleteContainer).append($(this.autoCompleteErrorField));
		$('#'+this.autocompleteWrapperId).remove();
	},
	
	__bindAutocompleteList : "Bind autocomplete list.",
	bindAutocompleteList : function(config) {
		var self = this;
		$(config.autocomplete).find('li').each(function(index){
			$(this).click(function(){
				self.autocompleteListSelected($(this).text(), index, config);
			});
		});
	},
	
	__autocompleteListSelected : "Handler of autocompleteListSelected.",
	autocompleteListSelected : function(autoCompleteValue, index, config) {
		this.lastSearchKey = this.currentSearchKey;
		var selectedValue = {};
		selectedValue['value'] = autoCompleteValue;
		selectedValue['index'] = index;
		selectedValue['setectedObject'] = this.autoCompleteData[index];
		
		$(config.input).val(autoCompleteValue);
		this.hideAutocomplete(config.autocomplete);
		this.onAutoCompleteSelected.dispatch(selectedValue);
	},
	
	__showAlertError : "Show alert error.",
	showAlertError : function(code,message){
		var error = {code : code, message : message};
		this.alertError.setResponseData({response : error});
		this.alertError.render();
	}

});

Clazz.createPackage("com.wu.widget.module");

//Abstract class to display pop up alert
Clazz.com.wu.widget.module.WUPopUpAlert = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#main-alert",
	templateUrl : "",
	__negativeCallbacks : "Callback function for pop up alert button",
	negativeCallbacks: null,
	__positiveCalbacks : "Callback function for pop up alert button",
	positiveCalbacks: null,
	__buttonLabels : "Label for button",
	buttonLabels: null,
	__ERROR_TYPE : "Constant variable for error",
	ERROR_TYPE : "error",
	__CONFIRMATION_TYPE : "Constant variable",
	CONFIRMATION_TYPE : "confirmation",
	__MARKETING_TYPE : "Constant variable",
	MARKETING_TYPE : "marketing",
	__INSIGHT_TYPE : "Constant variable",
	INSIGHT_TYPE : "insight",
	__errorReportObject : "Global variable for object error report",
	errorReportObject : null,
	__isReportSingleButton : "Flag that indicated if the report will only show single button",
	isReportSingleButton : false,
	__isCookieSetting : "Flag that for cookie notification alert",
	isCookieSetting : false,
	
	//month list to show in drop down
	__monthList : "Month list to show in drop down.",
	monthList : ["Jan", "Feb", "Mar",
	             "Apr", "May", "Jun",
	             "Jul", "Aug", "Sep",
	             "Oct", "Nov", "Dec"],
	
	initialize : function(config){
		this.errorReportObject = {};
		if (config){
			this.data.propertiesData = config.propertiesData;
		}
        if(this.data.propertiesData && this.data.propertiesData.monthList) {
			this.monthList = this.data.propertiesData.monthList.split(',');
        }			
	},

	//Assign each button to a callback action 
	__setResponseButton : "Assign each button to a callback action .",
	setResponseButton: function(callbacks, buttonLabels){
		
		if(callbacks !== null){
			this.negativeCallbacks = callbacks[0];
			
			if(callbacks.length > 1){
				this.positiveCalbacks = callbacks[1];
			}
		}
		
		this.buttonLabels = buttonLabels;
	},
	
	//Assign each button to a callback action 
	__setButtonAction : "Assign each button to a callback action .",
	setButtonAction: function(negativeCallbacks, positiveCalbacks){
		if(negativeCallbacks != null){
			this.negativeCallbacks = negativeCallbacks;
		}
		
		if(positiveCalbacks != null){
			this.positiveCalbacks = positiveCalbacks;
		}
	},
	
	__setContainerData : "Set container data from @data.",
	setContainerData : function(data){
		var containerData = {};
		this.isReportSingleButton = false;
		
		containerData["type"] = data.type ? data.type : this.INSIGHT_TYPE;
		containerData["title"] = data.title ? data.title : "";
		containerData["isDisplayButton"] = data.isDisplayButton ? data.isDisplayButton : false;
		containerData["message"] = data.message ? data.message : "";
		containerData["negativeBtnTxt"] = data.negativeBtnTxt ? data.negativeBtnTxt : "";
		containerData["positiveBtnTxt"] = data.positiveBtnTxt ? data.positiveBtnTxt : "";
		containerData["code"] = data.code ? data.code : "";
		containerData["isDisplayReportBtn"] = this.isErrorForReport(containerData);
		
		if(containerData.isDisplayReportBtn && !containerData.isDisplayButton){
			containerData.isDisplayButton = true;
			this.isReportSingleButton = true;
		}
		
		if(containerData["type"] === this.CONFIRMATION_TYPE){
			this.errorReportObject = {};
		}
		
		this.isCookieSetting = data.isCookieSetting;
		this.data = containerData;
	},

	__removePopUp : "Remove pop up.",
	removePopUp : function(){
		this.isCookieSetting = false;
		$('#main-alert').css("display","none");
		$('.popup-custom-mask').remove();
		$('.popup-custom-container').remove();
	},

	bindUI : function(){
		var self =  this;
		$('html,body').animate({scrollTop: $("body").offset().top},'slow');

		var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		var maxScrollHight = 100;

		//Set timeout to display alert when is scroll down
		if(scrollTop > maxScrollHight){
			setTimeout(function(){
				$('#main-alert').css("display","block");
			}, 550);
		}else{
			$('#main-alert').css("display","block");
		}
		
		if(this.isReportSingleButton){
			$('.wum-popup-button-left').hide();
			$('.wum-popup-button-right').hide();
			if(self.data.code == "C5062"){
				$('.wum-popup-button-report').hide();
			}
		}
		
		$('.wum-popup-button-left').click(function(){
			self.removePopUp();
			
			if(self.negativeCallbacks !== null){
				self.negativeCallbacks();
				localStorage.removeItem("IsFromSendMoneyMobile");
			}
		});

		$('.wum-popup-button-right').click(function(){
			self.removePopUp();
			
			if(self.positiveCalbacks !== null){
				self.positiveCalbacks();
			}	
		});
		
		$('.wum-popup-button-report').click(function(){
			self.removePopUp();
			//Clear error report object
			self.errorReportObject = {};
			self.sendReportEmail();	
		});
		
		$('.icon-close-popup, .container-close-popup').click(function() {
			if(self.isCookieSetting){
				Clazz.WUCookieSettingsMobile.saveDefaultCookieOpt();
			}
			self.removePopUp();
			if(self.data.code == "" +
					"C5067"){
				Clazz.WUNavigator.goToLOginMobilePage();
			}
		});
		if(this.isCookieSetting){
			$('.popup-message-mobile a').click(function(e){
				e.preventDefault();
				Clazz.WUCookieSettingsMobile.openCookieSettings();
			});
		}else{
			this.disabledNavigatorMenu();	
		}
	},
	
	postRender : function() {
		if($.browser.webkit){
			$('.popup-custom-content-container').wrap('<tr style="height: 100%;">')
		}
		
		//check show hide X button
		if(this.data.positiveBtnTxt || this.data.negativeBtnTxt){
			$('.icon-close-popup, .container-close-popup').hide();
		}
		
		if(!this.data.positiveBtnTxt && this.data.isDisplayButton){
			$('.wum-popup-button-right').hide();
			if(!this.data.isDisplayReportBtn){
				$('.wum-popup-alert-button').css('width','45');
			}
			
		}
		
		if(!this.data.negativeBtnTxt && this.data.isDisplayButton){
			$('.wum-popup-button-left').hide();
			if(!this.data.isDisplayReportBtn){
				$('.wum-popup-alert-button').css('width','50%');
				if(this.data.positiveBtnTxt == "Ok"){
					$('.wum-popup-alert-button').css('background-color','#DFB029');
					$('.positive-font-insight-msg').css('color','white');
				}
			}
		}
		if(this.isCookieSetting){
			$('.popup-mobile-custom-container').height(0);
		}
	},
	
	__isErrorForReport : "Judge if display report for @errorData.",
	isErrorForReport : function(errorData){
		var isDisplayReport = false;
		if(errorData.type === this.INSIGHT_TYPE && errorData.code !== ""){
			if(!jQuery.isEmptyObject(this.errorReportObject)){
				for(var key in this.errorReportObject){
					if(this.errorReportObject.hasOwnProperty(errorData.code) && this.errorReportObject[errorData.code] > 3){
						isDisplayReport = true;
					}else if(this.errorReportObject.hasOwnProperty(errorData.code)){
						this.errorReportObject[errorData.code] = (this.errorReportObject[errorData.code] + 1);	
					}
					else{
						this.errorReportObject[errorData.code] = 1;	
					}
				}
			}else{
				this.errorReportObject[errorData.code] = 1;	
			}
		}
		
		return isDisplayReport;
	},
	
	/**
	 * Collection data and send report email to app.feedback@westernunion.com after 4 tries
	 */
	__sendReportEmail : "Collection data and send report email to app.feedback@westernunion.com after 4 tries ",
	sendReportEmail : function(){
		var reportObject = {};
		var name = "";
		var phone = "";
		var email = "";
		
		if(Clazz.WULocalStorage.getGatewayCustomer()){
			var gatewayCustomer = JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());
			
			var nameObj = gatewayCustomer.name; 
			name = nameObj.firstName + " " + nameObj.lastName;
			phone = gatewayCustomer.contactPhoneCountryPrefix + gatewayCustomer.contactPhone;
			email = gatewayCustomer.email;
		}
		
		reportObject['user'] = name;
		reportObject['phone'] = phone;
		reportObject['profileEmail'] = email;
		reportObject['device'] = navigator.userAgent;
		reportObject['sessionId'] = Clazz.WUCookies.getCookieSessionId();
		reportObject['appVersion'] = "[140] - [2014-04-01_07-01-21]";
		
		var now = new Date();
		var timeNow = [ now.getHours(),
		                now.getMinutes(),
		                now.getSeconds()].join(':');
		
		var day = now.getUTCDate() < 9 ? "0" + now.getUTCDate() : now.getUTCDate();
		reportObject['timeOfSubmission'] = this.monthList[now.getUTCMonth()] + " " + day + ", " + now.getUTCFullYear() + " " + timeNow;
		reportObject['errorCode'] = this.data.code;
		reportObject['errorMessage'] = this.data.message;
		var screenshot = "";
		
		var body = "User : " + reportObject.user + "\n" + 
		"Phone : " + reportObject.phone + "\n" + 
		"Profile email : " + reportObject.profileEmail + "\n" + 
		"Device : " + reportObject.device + "\n" + 
		"Session : " + reportObject.sessionId + "\n" +
		"App Version : " + reportObject.appVersion + "\n" +
		"Time of submission : " + reportObject.timeOfSubmission + "\n" + 
		"Error code and message : " + reportObject.errorCode + " " + reportObject.errorMessage + "\n";
		
		var link = "mailto:mdot.feedback@westernunion.com"
            + "?subject=" + escape("Error Report after 4 tries")
            + "&body=" + escape(body);

		window.location.href = link;
	},
	
	//disable menu navigator
	__disabledNavigatorMenu : "Disable menu navigator.",
	disabledNavigatorMenu : function() {
		$(".send-money").addClass("disabled-click");
		$('.wum-main-nav-container .profile').addClass("disabled-click");
		$('.wum-main-nav-container .track-transfer').addClass("disabled-click");
		$('.wum-main-nav-container .find-agent').addClass("disabled-click");
	},
	
	__isCookieMessage : "Is this alert for cookie popup or not",
	isCookieMessage : function(){
		return this.isCookieSetting;
	}
});

Clazz.createPackage("com.wu.widget.module");

Clazz.com.wu.widget.module.WUContact = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#contact",
	templateUrl : "/apps/westernunion/templates/sendMoneyPage/contact-template.tmp",
	__chatOnline : "Selector of chat online.",
	chatOnline : ".chat-online",
	__iconChat : "Selector of icon chat.",
	iconChat : ".icon-chat",
	
	__propertiesData : "Properties data.",
	propertiesData : null,
	
	initialize : function(config){
		if(config){
			this.propertiesData = (config.data)? config.data.propertiesData : config.propertiesData;
		}
		this.data.propertiesData = this.propertiesData;
	},
	
	bindUI : function(){
		var self = this;
		$(this.iconChat).click(function(){
			self.showPopUpChatOnline();
		});
		$(this.chatOnline).click(function(){
			self.showPopUpChatOnline();
		});
	},
	
	__showPopUpChatOnline : "Show pop up chat online.",
	showPopUpChatOnline : function(){
		var popupURL = (this.data.propertiesData)?this.data.propertiesData.chatOnline_Url:"https://thewesternunion.custhelp.com/app/chat/chat_launch_popup";//TE-14
		window.open(popupURL,
	            "mywindow",
	            "width=800,height=500,left=100,fullscreen=no, top=10");
	}
});

Clazz.createPackage("com.wu.constants");
Clazz.createPackage("com.wu.widget.login");
//Clazz.com.wu.constants.LOGIN_EMAIL_REGEX = /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,6}/;
//RINTL-896
//Clazz.com.wu.constants.LOGIN_EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/
//RTHREE-4854

Clazz.com.wu.constants.LOGIN_EMAIL_REGEX = /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,6}/;
Clazz.com.wu.constants.LOGIN_EMAIL_MAX_RANGE = 80;
Clazz.com.wu.constants.LOGIN_EMAIL_ERROR_MESSAGE = "Email or Username entered is not in valid format.";
//Clazz.com.wu.constants.MOBILE_LOGIN_EMAIL_ERROR_MESSAGE = "Email entered is not in valid format.";

Clazz.com.wu.constants.LOGIN_PWD_ERROR_MESSAGE ="Please re-enter your Password."
	Clazz.com.wu.constants.SESSIONEXPIRED_PWD_ERROR_MESSAGE ="Please re-enter your password."; // RTHREE-3175 "Passwords should be 8 to 16 characters long, and include at least one capital letter, one lower-case letter, and one number."
Clazz.com.wu.constants.LOGIN_PWD_MAX_RANGE = 50;

Clazz.com.wu.widget.login.WULoginOverlay = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#content-maskmain",
	__username : "Selector of username.",
	username : "#wu-username-overlay-textbox",
	__usernameLabel : "Selector of username label.",
	usernameLabel : "#wu-username-overlay-label",
	__usernameErrorMessage : "Selector of username error message.",
	usernameErrorMessage : "#error-msg-username-overlay",
	__password : "Selector of password.",
	password : "#wu-password-overlay-textbox",
	__passwordLabel : "Selector of password label.",
	passwordLabel : "#wu-password-overlay-label",
	__passwordErrorMessage : "Selector of password error message.",
	passwordErrorMessage : "#error-msg-password-overlay",
	__loginButton : "Selector of login button.",
	loginButton : "#btn-do-login",
	__closeOverlay : "Selector of close overlay.",
	closeOverlay : ".wu-close-overlay",
	__forgotPassButton : "Selector of forgot password button.",
	forgotPassButton : "#forgot-password",
	__troubleAccess : "Selector of trouble access.",
	troubleAccess : ".trouble-access",
	__maskMain : "Selector of mask main.",
	maskMain : ".frame-maskMain",
	__captchaContainer : "Selector of captcha container.",
	captchaContainer : "#wu-captcha",
	__captchaWidget : "An instance of capthca widget.",
	captchaWidget : null,
	__onLoginClicked : "A signal.",
	onLoginClicked : null,
	__onForgotPasswordClicked : "A signal.",
	onForgotPasswordClicked : null,
	__enter : "Code or enter key.",
	enter : '13',
	__onRegisterEvent : "A signal.",
	onRegisterEvent : null,
	__esc : "Code of esc key.",
	esc : '27',
	__isEmailInput : "A flag to indicate if the value of email input is valid.",
	isEmailInput: false,

	__siteBehavior : "An instance of SiteBehavior",
	siteBehavior: null,//sitebehavior,
	__passTryCount : "Count has tried password how many times.",
	passTryCount : 0, // RTHREE-1729
	__isRequest : "variable boolean",
	isRequest : false,
	__propertiesData: "Properties Data",
	propertiesData : null,
	isClickEye : true,
	isEyePassword : true,

	initialize : function(config){
        this.baseConfig(config);
        this.senderCountryIsoCode = Clazz.WUNavigator.getSenderCountryFromURL();
    },


	__baseConfig : "initialize",
	baseConfig : function(config){
		if(config){
			this.isRequest = config.isRequest != undefined ? config.isRequest : this.isRequest;
			this.data.propertiesDataHeader = config.propertiesDataHeader;
			this.data.propertiesData = config.propertiesData;
			this.propertiesData = config.propertiesData;
			if(config.propertiesData){
				this.data.isMobileIntl = config.propertiesData.isMobileIntl;
			}
		}
		this.onLoginClicked = new signals.Signal();
		this.onForgotPasswordClicked = new signals.Signal();
		this.onRegisterEvent = new signals.Signal();
		this.siteBehavior = new Clazz.com.wu.util.SiteBehavior();//sitebehavior
	},

	__overideFunctionBindUI : "overide function bind UI",
	overideFunctionBindUI : function() {},

	preRender: function(whereToRender,renderFunction){
		var self = this;
		var sessionId = Clazz.WUCookies.getCookieSessionId();
		if(!sessionId && this.isRequest){
			var sessionAPI = new Clazz.com.wu.api.SessionAPI();
			renderFunction(self.data, whereToRender);
			sessionAPI.createSession(function(response){
			});
		}else{
			renderFunction(this.data, whereToRender);
		}
	},

	bindUI : function(){
		var self = this;

		this.overideFunctionBindUI();
		self.toggleLoginButton(); // MYWU-1752 
		var registerMobile = $('#btn-register');
		registerMobile.click(function(e){
			self.onRegisterEvent.dispatch();
		});

		$(this.loginButton).click(function(){
			if(!($(this).hasClass("disabled"))){
				if(!Clazz.WUNavigator.isInMobilePage()){
					document.activeElement.blur();
				}
				self.doSubmit();
			}
		});

		 //Added by HCl for Register Infosec PCF
		 $(this.username).bind("focusout", function(){
			var userNameValue = $(self.username).val();
			if (userNameValue.length) {
				var isValidUserMail=self.validateUsermail(userNameValue);
				if($('#radioButton1').is(':checked')){
				 var captchaValue = $("#wu_register_captcha_text").val();
				  if(isValidUserMail && captchaValue.length ==6 ){
		           self.showContinueButton();
		         }else{
				   self.disableContinueButton();
				 }
				}else{
				   var userPassword = $(self.password).val();
			         if(isValidUserMail && userPassword.length>0) {
					 //if(isValidUserMail && self.validatePassword(userPassword)) {
					   self.showContinueButton();
					 }else{
					   self.disableContinueButton();
					 }
				}
			}else{
			  self.disableContinueButton();
			}
		});
		
		$(this.password).bind("focusout", function(){
			var userNameValue = $(self.username).val();
			if (userNameValue.length) {
				var isValidUserMail=self.validateUsermail(userNameValue);
				if($('#radioButton1').is(':checked')){
				 var captchaValue = $("#wu_register_captcha_text").val();
				  if(isValidUserMail && captchaValue.length ==6 ){
		           self.showContinueButton();
		         }else{
				   self.disableContinueButton();
				 }
				}else{
				   var userPassword = $(self.password).val();
			         if(isValidUserMail && userPassword.length>0) {
					 //if(isValidUserMail && self.validatePassword(userPassword)) {
                        $('#btn-do-login').attr('disabled',false);
					   self.showContinueButton();
					 }else{
					   self.disableContinueButton();
					 }
				}
			}else{
			  self.disableContinueButton();
			}
		});
		
		$(this.password).bind("keyup", function(){
		   //$("#wu-password-label").addClass("display-none");
           $("#wu-password-label").removeClass("error");
		   $("#wu-password-label").removeClass("wu-error-login-label");
           $("#error-msg-password").addClass("display-none");
           $("#error-msg-password").removeClass("error");
			var userPassword = $(self.password).val();
			if(userPassword.length>0) {
			//if(self.validatePassword(userPassword)) {
			    var userNameValue = $(self.username).val();
			    if (userNameValue.length) {
				var isValidUserMail=self.validateUsermail(userNameValue);
				  if(isValidUserMail){
				     self.showContinueButton();
		         }else{
				   self.disableContinueButton();
				 }
			  }
			}else{
			  self.disableContinueButton();
			}
		});

        //zad
        $("#wu_register_captcha_text").bind("focusout", function(){
			var userNameValue = $(self.username).val();
			if (userNameValue.length) {
				var isValidUserMail=self.validateUsermail(userNameValue);
				if($('#radioButton1').is(':checked')){
				 var captchaValue = $("#wu_register_captcha_text").val();
				  if(isValidUserMail && captchaValue && captchaValue.length ==6 ){
		           self.showContinueButton();
		         }else{
				   self.disableContinueButton();
				 }
				}else{
				   var userPassword = $(self.password).val();
			         if(isValidUserMail && userPassword.length>0) {
					 //if(isValidUserMail && self.validatePassword(userPassword)) {
					   self.showContinueButton();
					 }else{
					   self.disableContinueButton();
					 }
				}
			}else{
			  self.disableContinueButton();
			}
		});

        $("#wu_register_captcha_text").bind("keyup", function(){
			var userNameValue = $(self.username).val();
			if (userNameValue.length) {
				var isValidUserMail=self.validateUsermail(userNameValue);
				if($('#radioButton1').is(':checked')){
				 var captchaValue = $("#wu_register_captcha_text").val();
				  if(isValidUserMail && captchaValue && captchaValue.length ==6 ){
		           self.showContinueButton();
		         }else{
				   self.disableContinueButton();
				 }
				}else{
				   var userPassword = $(self.password).val();
			         if(isValidUserMail && userPassword.length>0) {
					 //if(isValidUserMail && self.validatePassword(userPassword)) {
					   self.showContinueButton();
					 }else{
					   self.disableContinueButton();
					 }
				}
			}else{
			  self.disableContinueButton();
			}
		});
		 
		$(this.username).keyup(function(event){
			self.keycodeEnter(event);
		});

		$(this.password).keyup(function(event){
			self.keycodeEnter(event);
		});

		$(this.loginButton).keypress(function(event){
			self.keycodeEnter(event);
		});

		$(this.forgotPassButton).keypress(function(event){
			if(event.keyCode == self.enter){
				self.clearUsername();
				self.onForgotPasswordClicked.dispatch(self.defaultContainer);
			}
		});

		$(this.forgotPassButton).click(function(){
			self.clearUsername();
			self.onForgotPasswordClicked.dispatch(self.defaultContainer);
		});

		$(this.troubleAccess).click(function(){
			self.onForgotPasswordClicked.dispatch(self.defaultContainer);
		});

		$(this.closeOverlay).click(function(){
			$(self.maskMain).hide();
		});

		$("#wu-password-textbox").keyup(function() {
			self.toggleLoginButton();
		});

		$("#wu-username-textbox").keyup(function() {
			self.toggleLoginButton();
		});

		//PBL-1702 Start
$('#wu-username-textbox').on("keyup paste input", function(){
           $("#wu-password-textbox").trigger("keyup");
        });
 $('#wu-password-textbox').on("keyup paste input", function(){
    var username = $("#wu-username-textbox").val();
         if(username !== ""){
			$("#btn-do-login").removeClass("disabled");
			$("#btn-do-login").removeClass("wu-button-disabled");
		}else{
			$("#btn-do-login").addClass("disabled");
			$("#btn-do-login").addClass("wu-button-disabled");
			}
    });
//PBL-1702 End
		$(document).keyup(function (event) {
			//ESC button
			if (event.which == self.esc) {
				$(self.maskMain).hide();
			}
		});

		if(Clazz.WUNavigator.isInMobilePage()){
			$('#wu-username-textbox').keyup(function() {
				var usernameValue = $(this).val();
				if(usernameValue.length != 0){
					$('.wum-x-button-click-container-login').css('display','inline-block');
					$(this).removeClass("wu-login-input-error");
				}else{
					$('.wum-x-button-click-container-login').css('display','none');
				}
			});

			$('#wu-username-textbox').focus(function() {
				self.toggleErrorInput({
					isNotValid : false,
					label : ($(self.usernameLabel)),
					field : ($(self.username)),
					errorMessageField : ($(self.usernameErrorMessage))
				});
			});

			$('#wu-password-textbox').keyup(function() {
				var usernameValue = $(this).val();
				if(usernameValue.length != 0){
					$('.wum-x-button-click-container-password').css('display','inline-block');
					$(this).removeClass("wu-login-input-error");
				}else{
					$('.wum-x-button-click-container-password').css('display','none');
				}
			});

			$('#wu-password-textbox').focus(function() {
				self.toggleErrorInput({
					isNotValid : false,
					label : ($(self.passwordLabel)),
					field : ($(self.password)),
					errorMessageField : ($(self.passwordErrorMessage))
				});
			});

			$('.wum-x-button-click-container-login').click(function() {
				$('#wu-username-textbox').val('');
				$(this).css('display','none');
				$('#wu-username-textbox').removeClass("wu-login-input-error");
				$('#error-msg-username').hide();
			});

			$('.wum-x-button-click-container-password').click(function() {
				$('#wu-password-textbox').val('');
				$(this).css('display','none');
				$('#wu-password-textbox').removeClass("wu-login-input-error");
			});

			if(this.data.isMobileIntl == false){
				$('.wum-eye-button-click-container-password').click(function() {
					self.showPassword();
				});
			}
		}
	},

	//Added by HCl for Register Infosec PCF
__isEmailIDValidOLD : "Return if @value is email.",
	isEmailIDValidOLD : function(value) {
		var dotRegex = /\./g;
		var maxDotEmail = 4;
		var maxSingleCharDomain = 4;
		var maxDomain = 4;
		//RINTL-20166-OLD
		var emailRegex = new RegExp(Clazz.WURegex.email);
		var isValid = emailRegex.test(value);
		var lastChar = value[value.length - 1];
        //RINTL-652
        if(isValid){
            var emailFormat = value.substr(value.indexOf("@") + 1);
            var domainArray = emailFormat.split(".");
            //RINTL-4272
            var isSingleDomain = (domainArray[1].length < maxSingleCharDomain) ? false : (domainArray[1].length > maxSingleCharDomain) ? false : true;
            var domainFormater = isSingleDomain? (lastChar !=".") : ((domainArray.length < maxDomain) && (domainArray[2]? (domainArray[2] != domainArray[1] && domainArray[2] != "" && domainArray[2].length < maxSingleCharDomain + 1) : (domainArray[2] != "")));
            emailFormat = emailFormat.match(dotRegex);
 
            isValid = (emailFormat.length >= maxDotEmail) ? false : domainFormater;
        }
 
        return (value.length > Clazz.com.wu.constants.LOGIN_EMAIL_MAX_RANGE)? false : isValid;
    },
    __isEmailIDValid : "Return if @value is email.",
	isEmailIDValid : function(value) {
    	//RINTL-20166
		var emailRegex = new RegExp(Clazz.WURegex.email);
		var isValid = emailRegex.test(value);
        return isValid;
    },
     __disableContinueButton : "Disable continue button.",
    disableContinueButton : function(){
       	$(".wu-button-login").removeClass("wu-blue-button ui-cursor-pointer");
		$(".wu-button-login").addClass("wu-blue-button-continue-disable ui-cursor-pointer");
		$('#btn-do-login').addClass("wu-button-disabled");
        $('#btn-do-login').addClass("disabled");
    },
	__showContinueButton : "Show continue button.",
    showContinueButton : function(){
		$(".wu-button-login").removeClass("wu-blue-button-continue-disable ui-cursor-pointer");
		$(".wu-button-login").addClass("wu-blue-button ui-cursor-pointer");
    	$('#btn-do-login').removeClass("wu-button-disabled");
        $('#btn-do-login').removeClass("disabled");
    },
    __validateUsermail : "Validate @username.",
	validateUsermail : function(username){
		var isNotValid = false;
		this.isEmailInput = this.isEmailIDValid(username);
		if (!this.isEmailInput) {
			isNotValid = true;
		}
		if(username.length > Clazz.com.wu.constants.LOGIN_EMAIL_MAX_RANGE || username == ""){
			isNotValid = true;
		}
		if(!Clazz.WUNavigator.isInMobilePage()){
			($(this.usernameErrorMessage).html() !== "")? null : $(this.usernameErrorMessage).text(this.invalidEmailErrorMessage);/* temporary by ayu */
			this.toggleErrorInput({
				isNotValid : isNotValid,
				label : ($(this.usernameLabel)),
				field : ($(this.username)),
				errorMessageField : ($(this.usernameErrorMessage))
			});
		}
		return !isNotValid;
	},
	
	__showPassword : "show password",
	showPassword : function(){
		if($('#wu-password-textbox').val() != ""){
			if(this.isClickEye){
				$('.wum-eye-button').addClass('show-eye');
				document.getElementById("wu-password-textbox").setAttribute('type','text');
				this.isClickEye = false;
			}else{
				$('.wum-eye-button').removeClass('show-eye');
				document.getElementById("wu-password-textbox").setAttribute('type','password');
				this.isClickEye = true;
			}
		}
	},

	__keycodeEnter : "key code that user is entering",
	keycodeEnter : function(event){
		if(event.keyCode == this.enter){
			this.doSubmit();
		}
	},

	__toggleLoginButton : "for disabled and enabled login button",
	toggleLoginButton : function() {

//		var self = this; /* remove unused variable for MYWU-1752 */
		var username = $("#wu-username-textbox").val();
		var password = $("#wu-password-textbox").val();
        var captcha = $("#wu_register_captcha_text").val();
		if(!Clazz.WUNavigator.isInMobilePage()){
			/* MYWU-1752 starts */
//			var validUserName = self.isEmail(username); /* remove unused variable for MYWU-1752 */
//            var validPassword = self.isPassword(password); /* remove unused variable for MYWU-1752 */
			  /* MYWU-1752 ends here */
            if($('#radioButton1').is(':checked')) {
				if(username !== "" && captcha !== ""){
					$(this.loginButton).removeClass("disabled");
				}else{
					$(this.loginButton).addClass("disabled");
				}
            } else if($('#radioButton2').is(':checked')) {
				if(username !== "" && password !== ""){
					$(this.loginButton).removeClass("disabled");
				}else{
					$(this.loginButton).addClass("disabled");
				}
            }
			/* MYWU-1752 ends here */
		}
	},

	__doSubmit : "this method shows the app what to do when user clicks on submit button",
	doSubmit : function(){
		var self = this;
		var username = $(this.username).val();
		//RTHREE-4854
		//username = $.trim(username);

		// MYWU-1648 begin
		// remove trailing whitespace
		username = username.replace(/\s+$/g, "");
		// MYWU-1648 end

		var password = $(this.password).val();
		password = $.trim(password);

		var isValid = this.validateForm(username, password);
		var countryPath = this.getCountryCode();

        if($('#radioButton1').is(':checked')){   //Added by HCL for Register Infosec PCF Start     

            $('#wu-password-textbox').removeClass("wu-login-input-error");

                Clazz.WUCookies.setCookieEmail(username);
				Clazz.WULocalStorage.setEmail(username);
                var requestBody = this.getRequestBody(username, password,countryPath);
                this.onLoginClicked.dispatch(requestBody, this.defaultContainer, this.captchaWidget, this.captchaContainer, function(response){
                    if(Clazz.WUNavigator.isInMobilePage() && self.data.isMobileIntl == false){
                        if(response.error){
                            $('.wum-eye-button').removeClass('show-eye');
                            self.isClickEye = true;
                    }
                 } 
			});

        }
        else{  //Added by HCL for Register Infosec PCF End

            if(isValid){
                Clazz.WUCookies.setCookieEmail(username);
                var requestBody = this.getRequestBody(username, password,countryPath);
                this.onLoginClicked.dispatch(requestBody, this.defaultContainer, this.captchaWidget, this.captchaContainer, function(response){
                    if(Clazz.WUNavigator.isInMobilePage() && self.data.isMobileIntl == false){
                        if(response.error){
                            $('.wum-eye-button').removeClass('show-eye');
                            self.isClickEye = true;
                        }
                    } 
                });
            }else{
                this.siteBehavior.addError("LoginPageErrors", "fieldLevelErrors");
                if(!Clazz.WUNavigator.isInMobilePage()){
                    $(this.loginButton).addClass("disabled");
                    $('#register-now').removeClass("grey");
                }
            }
        }
	},

	__getCountryCode : "Get country code.",
	getCountryCode : function(){
		var first = parseInt(location.hostname.charAt(0));
		var path = window.location.pathname;
		var pathArray = path.split("/");
		var country = null;
		if(isNaN(first) && location.hostname!=="localhost"){ 
			country = pathArray[1];
		}else{
			if(path.indexOf("content") !== -1){
				country = pathArray[4];
			}else{
				country = pathArray[1];
			}
			if(country.indexOf("_")!= -1){
				var temp = country.split("_");
				country = temp[1];
			}
		}
		return country;
	},

	/*
	 * request body for loginAPI
	 */	
	__getRequestBody : "Get request body.",
	getRequestBody : function(username,password,countryPath){
		var getAnalyticsLogin=this.getSiteBehavior();
		var requestBody = {};
		requestBody['analytics']=getAnalyticsLogin;//sitebehavior
		requestBody["gateway_customer"] = this.getGatewayCustomer(username,password);
		requestBody["security"] = this.getSecurityLogin();
		requestBody["channel"] = this.getChannel();
		requestBody["external_reference_no"] = "0e185dba-4720-43e5-83e3-9469dbe16e64";
		//requestBody["country_iso_code"] = countryPath; // Commented For Main Code Merge Issue from MYWU.
		return requestBody;
	},

	__getGatewayCustomer : "Get gateway customer.",
	getGatewayCustomer : function(username,password){
		var gatewayCustomer = {};
		if(this.isEmailInput){
			gatewayCustomer["email"] = username;
		}
		gatewayCustomer["identities"] = this.getIdentitiesLogin(password,username);
		return gatewayCustomer;
	},

	__getIdentitiesLogin : "Get identities login.",
	getIdentitiesLogin : function(password,username){
		var identities = {};
		var identityArray = [];
		var identityPassword = this.getIdentityLogin(password,"PASSWORD");
		identityArray.push(identityPassword);
		if(!this.isEmailInput){
			var identityUsername = this.getIdentityLogin(username,"USERNAME");
			identityArray.push(identityUsername);
		}
		identities["identity"] = identityArray;
		return identities;
	},

	__getIdentityLogin : "Get identity login.",
	getIdentityLogin : function(data,type){
		var identityLogin = {};
		identityLogin["data"] = data;
		identityLogin["type"] = type;
		return identityLogin;
	},

	__getSiteBehavior : "Get site behavior.",
	getSiteBehavior:function(){
		var siteBehavior={};
		siteBehavior["state"]=null;
		siteBehavior["analytic_event"]={};
		siteBehavior["analytic_event"]["fields"]={};
		siteBehavior["analytic_event"]["fields"]["field"]=[];
		siteBehavior["analytic_event"]["fields"]["field"]=this.getLocalArray();
		return siteBehavior; 

	},
	//sitebehavior
	__getLocalArray : "Get local array.",
	getLocalArray: function(){

		var newLocalArray=[];
		newLocalArray[0]={"name": "forgotPasswordFlag", "value": ((sessionStorage.getItem("forgotPasswordFlag")!=null)?sessionStorage.getItem("forgotPasswordFlag"):"N")}
		newLocalArray[1]= {"name":"loginErrorCount","value":(((this.siteBehavior.makeErrorArray(JSON.parse(sessionStorage.getItem("LoginPageErrors"))))!=null)?this.siteBehavior.makeErrorArray(JSON.parse(sessionStorage.getItem("LoginPageErrors"))):"")};
		newLocalArray[2]={"name":"siteInfoLoginUser", "value":(($(this.username).val()!=null)?$(this.username).val():"N")};
		newLocalArray[3]={"name":"queryString", "value":((sessionStorage.getItem("queryString")!=null)?sessionStorage.getItem("queryString"):"")};
		newLocalArray[4]={"name":"wuRevision", "value":((sessionStorage.getItem("wuRevision")!=null)?sessionStorage.getItem("wuRevision"):"")};
		newLocalArray[5]={"name":"codebase", "value":((sessionStorage.getItem("codebase")!=null)?sessionStorage.getItem("codebase"):"")};
		newLocalArray[6]={"name":"lightboxFlag", "value":((sessionStorage.getItem("lightboxFlag")!=null)?sessionStorage.getItem("lightboxFlag"):"N")};
		newLocalArray[7]={"name":"siteCatalystVersion", "value":((sessionStorage.getItem("siteCatalystVersion")!=null)?sessionStorage.getItem("siteCatalystVersion"):"")};
		newLocalArray[8]={"name":"forgotUsernameFlag", "value":((sessionStorage.getItem("forgotUsernameFlag")!=null)?sessionStorage.getItem("forgotUsernameFlag"):"N")};
		return newLocalArray;
	},

	__getAnalytics : "Get analytics.",
	getAnalytics : function(){
		var analytics = {};
		analytics["state"]= this.getState();
		return analytics;
	},

	__getState : "Get state.",
	getState : function() {
		var state = {};
		state["context"] = this.propertiesData && this.propertiesData.state_context_Text ? this.propertiesData.state_context_Text : "Welcome";
		state["subContext"] = this.propertiesData && this.propertiesData.state_subContext_Text ? this.propertiesData.state_subContext_Text : "Login";
		return state;
	},

	__getSecurityLogin : "Get security login.",
	getSecurityLogin : function() {
		var security = {};
		security["session"] = this.getSession();
		if (Clazz.WULocalStorage.getCaptchaImage()) {
			security["captcha"] = this.getCaptcha();
		}
		return security;
	},

	__getSession : "Get session.",
	getSession : function(){
		var session = {};
		session["id"] = Clazz.WUCookies.getCookieSessionId();
		return session;
	},

	__getCaptcha : "Get captcha.",
	getCaptcha : function() {
		var captcha = {};
		if(this.captchaWidget && this.captchaWidget.imageBinary){	
			captcha["image"] = this.captchaWidget.imageBinary;
			captcha["answer"] = this.captchaWidget.getAnswer();
			captcha["clear_screen"] = "true";
			return captcha;
		}
		return null;
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

	__validateForm : "Validate form.",
	validateForm : function(username,password){
		this.recoverAll();
		var isValid = false;
		var statusArray = [];
		statusArray.push(this.validateUsername(username));
		//Added by HCL for Register Infosec PCF Start
        if($('#radioButton2').is(':checked')){
            statusArray.push(this.validatePassword(password));
        }
    		//statusArray.push(this.validatePassword(password));
		//Added by HCL for Register Infosec PCF End
		/*fixing for IE8 "mthod not support"*/
		if(jQuery.inArray(false, statusArray) ==-1){
			isValid = true;
		}

		return isValid;
	},
	__validateUsername : "Validate username.",
	validateUsername : function(username){
		var isNotValid = false;
		this.isEmailInput = this.isEmail(username);
		if(this.isEmailInput === false){
			isNotValid = true;
			if(username.length > Clazz.com.wu.constants.LOGIN_EMAIL_MAX_RANGE || username == ""){
				isNotValid = true;
			}else{

				isNotValid = false;
			}
		}

		if(!Clazz.WUNavigator.isInMobilePage()){
			this.isEmailInput = this.isEmail(username);
			if(this.isEmailInput === false){
				isNotValid = true;
				if(username.length > Clazz.com.wu.constants.LOGIN_EMAIL_MAX_RANGE || username == ""){
					isNotValid = true;
				}else{

				isNotValid = false;
			   }
			}
			
			this.toggleErrorInput({
				isNotValid : isNotValid,
				label : ($(this.usernameLabel)),
				field : ($(this.username)),
				errorMessageField : ($(this.usernameErrorMessage))
			});
		}else{
			isNotValid = username == "" ? true : false;
		}

		return !isNotValid;
	},


	__validatePassword : "Validate password.",
	validatePassword : function(password){
		var isNotValid = false;

		if(password === "" || password.length === 0){
			isNotValid = true;
		}

		if(!Clazz.WUNavigator.isInMobilePage()){
			isNotValid = this.isPassword(password);
			if(password.length > Clazz.com.wu.constants.LOGIN_PWD_MAX_RANGE){
				isNotValid = true;
			}

			if(Clazz.WUNavigator.isInThisWebPage("session-expired.html")){
				$(this.passwordErrorMessage).text(this.propertiesData && this.propertiesData.sessionexpired_pwd_error_message ? this.propertiesData.sessionexpired_pwd_error_message : Clazz.com.wu.constants.SESSIONEXPIRED_PWD_ERROR_MESSAGE);
			}else{
				$(this.passwordErrorMessage).text(this.propertiesData && this.propertiesData.login_pwd_error_message ? this.propertiesData.login_pwd_error_message : Clazz.com.wu.constants.LOGIN_PWD_ERROR_MESSAGE);
			}
			this.toggleErrorInput({
				isNotValid : isNotValid,
				label : ($(this.passwordLabel)),
				field : ($(this.password)),
				errorMessageField : ($(this.passwordErrorMessage))
			});
		}

		// RTHREE-1729 Login | If user enters invalid password 3 times then account should get locked and user should be navigated to reset password flow
		if(isNotValid){
			this.passTryCount++;
			if(this.passTryCount > 3) {
				this.passTryCount = 0; 
				if (Clazz.WUNavigator.isInMobilePage()) {
				}else{
					Clazz.WUNavigator.goToResetPasswordPage();
				}
			}
		}

		return !isNotValid;
	},

	__mobileErrorInput : "Toggle error input for mobile.",
	mobileErrorInput : function(element, isValid){
		if(isValid){
			$(element.field).removeClass("wu-login-input-error");
		}else{
			if($("#main-alert:hidden")){
				var data = {};
				data["message"] = element.message;
				this.onShowPopUp(data, null, null);
			}

			$(element.field).addClass("wu-login-input-error");
		}
	},

	__toggleErrorInput : "Toggle error input.",
	toggleErrorInput : function(element){
		if(element.isNotValid){
		    element.label.removeClass("display-none");
			element.errorMessageField.removeClass("display-none");
           	element.errorMessageField.addClass("error");
			this.setError(element.label, element.field, element.errorMessageField);
		}
		else{
		   	this.recover(element.label, element.field, element.errorMessageField);
		}
	},

	__isEmailOLD : "Validate email.",
	isEmailOLD : function(value){

		var dotRegex = /\./g;
		var maxDotEmail = 4;
		var maxSingleCharDomain = 4;
	    var maxDomain = 4;
	    //RINTL-20166-OLD
		var email_regex = new RegExp(Clazz.WURegex.email);
		var isValid = email_regex.test(value);
		var lastChar = value[value.length - 1];
		//RINTL-652
		if(isValid){
			var emailFormat = value.substr(value.indexOf("@") + 1);
			var domainArray = emailFormat.split(".");
			//RINTL-4272
			var isSingleDomain = (domainArray[1].length < maxSingleCharDomain) ? false : (domainArray[1].length > maxSingleCharDomain) ? false : true;
			var domainFormater = isSingleDomain? (lastChar !=".") : ((domainArray.length < maxDomain) && (domainArray[2]? (domainArray[2] != domainArray[1] && domainArray[2] != "" && domainArray[2].length < maxSingleCharDomain + 1) : (domainArray[2] != "")));
			emailFormat = emailFormat.match(dotRegex);

			isValid = (emailFormat.length > maxDotEmail) ? false : domainFormater;
		}

		return (value.length > Clazz.com.wu.constants.REGISTRATIONACCOUNTSETUP_EMAIL_MAX_RANGE)? false : isValid;
	},
	__isEmail : "Validate email.",
	isEmail : function(value){
	   //RINTL-20166
		var email_regex = new RegExp(Clazz.WURegex.email);
		var isValid = email_regex.test(value);
		return isValid;
	},
	__isPassword : "Validate password.",
	isPassword : function(value){

		var errorsPasswordArray = new Array();
		var specialCharacters = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
		var lowercase = false;
		var uppercase = false;
		var nonAlpha = false;
        if (!value) {
			errorsPasswordArray.push('not-enough-characters');
            return errorsPasswordArray.length;
		}

		if (value && value.length < 8) {
			errorsPasswordArray.push('not-enough-characters');
		}
		for (var i=0; i<value.length; i++) {
			if(value.charCodeAt(i)>= 65 && value.charCodeAt(i)<= 90){
				uppercase=true;
			}
			if(value.charCodeAt(i)>= 97 && value.charCodeAt(i)<= 122){
				lowercase=true;
			}
			if((value.charCodeAt(i)>=48 && value.charCodeAt(i)<=57)||(specialCharacters.indexOf(value.charAt(i)) != -1)){
				nonAlpha=true;
			}
		}

		if (!uppercase) { errorsPasswordArray.push('no-uppercase'); }
		if (!lowercase) { errorsPasswordArray.push('no-lowercase'); }
		if (!nonAlpha) { errorsPasswordArray.push('no-non-alpha'); }

		return errorsPasswordArray.length;
	},

	__recoverAll : "Recover username and password.",
	recoverAll : function(){
		this.recoverUsername();
		this.recoverPassword();
	},

	__recoverUsername : "Recover username.",
	recoverUsername : function(){
		var label = $(this.usernameLabel);
		var field = $(this.username);
		var errorMessageField = $(this.usernameErrorMessage);

		this.recover(label, field, errorMessageField);
	},

	__recoverPassword : "Recover password.",
	recoverPassword : function(){
		var label = $(this.passwordLabel);
		var field = $(this.password);
		var errorMessageField = $(this.passwordErrorMessage);

		this.recover(label, field, errorMessageField);
	},

	__setErrorUsername : "Show error message for username.",
	setErrorUsername : function(){
		var label = $(this.usernameLabel);
		var field = $(this.username);
		var errorMessageField = $(this.usernameErrorMessage);

		this.setError(label, field, errorMessageField);
	},

	__setErrorPassword : "Show error message for password.",
	setErrorPassword : function(){
		var label = $(this.passwordLabel);
		var field = $(this.password);
		var errorMessageField = $(this.passwordErrorMessage);

		this.setError(label, field, errorMessageField);
	},

	__clearPassword : "Clear password.",
	clearPassword : function(){
		$(this.password).val("");
	},

	__clearUsername : "Clear username.",
	clearUsername : function(){
		$(this.username).val("");
	},

	__setError : "Show error message.",
	setError : function(label, field, errorMessageField){
		if(!Clazz.WUNavigator.isInThisMobilePage("login.html")){
			label.addClass("wu-error-login-label");
		}
		field.addClass("wu-error-login-box");
		errorMessageField.addClass("wu-error-login-label");
	},

	__recover : "Remove error message.",
	recover : function(label, field, messageField){
		if(!Clazz.WUNavigator.isInThisMobilePage("login.html")){
			label.removeClass("wu-error-login-label");
		}

		field.removeClass("wu-error-login-box");
		messageField.removeClass("wu-error-login-label");

		if(Clazz.WUNavigator.isInMobilePage()){
			$(field).removeClass("wu-login-input-error");
			$(messageField).hide();
		}
	}
});

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

Clazz.com.wu.widget.module.WUHeaderTxIntlContainer = Clazz.extend(Clazz.com.wu.widget.module.WUHeaderWidgetContainer, {

	__getHeaderWidget : "Get an instance of WUHeaderTxIntl",
	getHeaderWidget : function(){
		var headerWidget = new Clazz.com.wu.widget.module.WUHeaderTxIntl();
		return headerWidget;
	}
});

Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

//As part of Medallia requirement script including into pages

Clazz.com.wu.constants.URL_MEDALIA = "https://amch.questionmarket.com/adsc/d871029/5/884239/randm.js?";

Clazz.com.wu.constants.URL_MEDALIA_PAGES = []; //Specify the pages those don't need medallia script loading
Clazz.com.wu.constants.URL_FIND_LOCATION = "agent-locator.html";

Clazz.com.wu.widget.module.WUHeaderBase = Clazz.extend(Clazz.WidgetWithTemplate, {
	defaultContainer : "#header",

	__headerLogo : "Selector of header logo.",
	headerLogo : ".wu-header-logo",

	bindUI : function() {
		var self = this;

		$(this.headerLogo).click(function(){
			var accountNbr = Clazz.WULocalStorage.getAccountNumber();
            var gatewayCustomer=JSON.parse(Clazz.WULocalStorage.getGatewayCustomer());

			if (Clazz.WUNavigator.isInCurrentPage("login/interstitialPage.html")) {
				Clazz.WUNavigator.goToHomePage();
				Clazz.WULocalStorage.clearAll();
			}
            if(accountNbr == null || accountNbr == undefined){
           		Clazz.WULocalStorage.clearSessionId();
				Clazz.WULocalStorage.clearImgCaptcha();
     			Clazz.WULocalStorage.clearCaptchaImage();
				Clazz.WULocalStorage.clearResponse();
				Clazz.WULocalStorage.clearAmount();
				Clazz.WULocalStorage.clearZipCode();
			}
			if (Clazz.WUNavigator.isInCurrentPage("login/interstitialPage.html")) {
				Clazz.WUNavigator.goToHomePage();
				Clazz.WULocalStorage.clearAll();
			}
			//PBL-879 Start
		var currentcountry= Clazz.WUNavigator.getSenderCountryFromURL();
        if(currentcountry=='AU'){
            if(gatewayCustomer && gatewayCustomer.identityVerificationStatus === 'N'){
                  Clazz.WULocalStorage.setIdVerificationCount("0");
                var idVerificationCount=Clazz.WULocalStorage.getIdVerificationCount();
                if(idVerificationCount != null && Number(idVerificationCount)<3){
			Clazz.WULocalStorage.clearAccountNumber();
                    Clazz.WULocalStorage.clearGatewayCustomer();
                    Clazz.WULocalStorage.clearInterstitialResponse();
                    Clazz.WULocalStorage.clearIdVerificationCount();
                    Clazz.WULocalStorage.clearResponse();
                    Clazz.WULocalStorage.clearAll();
                }else if(idVerificationCount != null && Number(idVerificationCount)>=3 && Clazz.WUNavigator.isInThisWebPage("send-money/start.html")){
					Clazz.WUNavigator.goToProfilePage();

                }

            }
        }
		//PBL-879 End 
			Clazz.WUNavigator.goToHomePage();
		});
	},
	
	postRender : function(){
		this.getLoginDetails();
	},

	//As part of medallia requirement
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
	},
    __getCustomerSignOffRequest : "Get customer sign off request.",
	getCustomerSignOffRequest : function(){
        var customerSignOffBodyRequest = new Object();
		customerSignOffBodyRequest["security"] = this.getSecurity();
		return customerSignOffBodyRequest;
	},
    __getSecurity : "Get security.",
	getSecurity : function(){
        var security = {};
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		security['session'] = this.getSession();
		return security;
	},
	__getSession : "Get session.",
	getSession : function() {
		var session = new Object();
		session['id'] = Clazz.WUCookies.getCookieSessionId();
		return session;
	}
});

Clazz.createPackage("com.wu.widget.module");
Clazz.createPackage('com.wu.constants');

Clazz.com.wu.widget.module.WUHeaderTxIntl = Clazz.extend(Clazz.com.wu.widget.module.WUHeaderBase, {
	defaultContainer : "#header",

	__goToHomeLink : "Selector",
	goToHomeLink : ".step-flow-home",
	__goToProfileLink : "Selector",
	goToProfileLink : ".step-flow-profile",
	__goToLogOutLink : "Selector",
	goToLogOutLink : ".step-flow-logout",

	// CLFE-3010 Canada specific Logo
	initialize : function () { 
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
    
	bindUI : function(){
		var self = this;
		var superBindUI = $.proxy(this.superClass.bindUI, this);
		superBindUI();

		$(this.goToHomeLink).click(function(){
			Clazz.WUNavigator.goToHomePage();
		});

		$(this.goToProfileLink).click(function(){
			Clazz.WUNavigator.goToProfilePage();
		});

		$(this.goToLogOutLink).click(function(){
			self.doLogout();
		});
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
		security['client_ip'] = Clazz.WULocalStorage.getClientIp() ? Clazz.WULocalStorage.getClientIp() : "245024209201";
		security['session'] = this.getSession();
		return security;
	},

	__getSession : "Get session.",
	getSession : function() {
		var session = new Object();
		session['id'] = Clazz.WUCookies.getCookieSessionId();
		return session;
	},
	/** end post body sign off */

	__setHeaderSendMoneyFlow : "Set header send money flow.",
	setHeaderSendMoneyFlow : function(){
		if (Clazz.WUNavigator.isInThisWebPage("send-money/receiverInformation.html") || 
			Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReceiverInformation.html") ||
			Clazz.WUNavigator.isInThisWebPage("bill-pay/requiredBillerInformation.html")){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-receiver').addClass("header-send-money-active");
		} else if (Clazz.WUNavigator.isInThisWebPage("send-money/paymentInformation.html")||
				Clazz.WUNavigator.isInThisWebPage("send-money/confirmIdentity.html")||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/paymentInformation.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/inmatePaymentInformation.html")){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-payment').addClass("header-send-money-active");
		} else if (Clazz.WUNavigator.isInThisWebPage("send-money/review.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/review.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReview.html")){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-place').addClass("header-send-money-active");
		} else if (Clazz.WUNavigator.isInThisWebPage("send-money/kycConfirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-money/kycVerificationOptions.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/kycConfirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/kycConfirmIdentity.html") ||
				Clazz.WUNavigator.isInThisWebPage("bill-pay/kycVerificationOptions.html") ||
				Clazz.WUNavigator.isInThisWebPage("send-inmate/kycVerificationOptions.html")){
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-place').addClass("header-send-money-active");
		} else {
			$('.current').removeClass("header-send-money-active");
			$('.step-flow-login').addClass("header-send-money-active");
		}
	},

	postRender : function(){
		this.getLoginDetails();
		
		var hasAccountNumber = (Clazz.WULocalStorage.getAccountNumber())? true:false;
		if(hasAccountNumber){
			if(Clazz.WUNavigator.isInThisWebPage("send-money/receiverInformation.html") || 
					Clazz.WUNavigator.isInThisWebPage("send-money/paymentInformation.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/review.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycConfirmIdentity.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycVerificationOptions.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycAdditionalInfoOptions.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/confirmIdentity.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/verification.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReceiverInformation.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/inmatePaymentInformation.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReview.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/kycConfirmIdentity.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/kycVerificationOptions.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/requiredBillerInformation.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/paymentInformation.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/review.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/kycConfirmIdentity.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/kycVerificationOptions.html")
					
			){
				$(".wu-header-sendmoney-flow-end").hide();
				this.setHeaderSendMoneyFlow();
			}else if(Clazz.WUNavigator.isInThisWebPage("send-money/receipt.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/declineOptions.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycWUTransactionNumber.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycUploadIdScreen.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycUploadDocuments.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycSoftDescriptor.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/kycSuccessDocUpload.html")||
					Clazz.WUNavigator.isInThisWebPage("send-money/sendMoneyCashReceipt.html")||
					Clazz.WUNavigator.isInThisWebPage("send-money/sendMoneyWUPayReceipt.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/confirmationScreen.html") ||
					Clazz.WUNavigator.isInThisWebPage("verification.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/inmateReceipt.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/declineOptions.html") ||
					Clazz.WUNavigator.isInThisWebPage("send-money/docTransfer.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/receipt.html")
			){
				$('.wu-header-send-money-flow-container').hide();
				$('.wu-header-sendmoney-flow-end').show();
			}else{
				$('.wu-header-send-money-flow-container').hide();
				$('.wu-header-sendmoney-flow-end').hide();
			}
		} else {
			if(Clazz.WUNavigator.isInThisWebPage("send-money/sendMoneyLogin.html")||
					Clazz.WUNavigator.isInThisWebPage("send-money/register.html")||
					Clazz.WUNavigator.isInThisWebPage("send-inmate/login.html") ||
					Clazz.WUNavigator.isInThisWebPage("bill-pay/payBillsLogin.html")){
				$('.wu-header-send-money-flow-container').hide();
				$('.wu-header-sendmoney-flow-end').hide();
				this.setHeaderSendMoneyFlow();
			} else{
				$('.wu-header-send-money-flow-container').hide();
				$('.wu-header-sendmoney-flow-end').hide();
			}
		}
	},
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

Clazz.com.wu.api.LogoutAPI = Clazz.extend(Clazz.com.wu.abs.API,{
	__modul : "Module for request sign off.",
	modul : "/CustomerSignOff",

	__doLogout :"Do CustomerSignOff PS call.",
	doLogout : function(postBody, requestSuccessHandler, errorHandler) {
		this.ajaxPostRequest(this.modul, postBody, requestSuccessHandler, errorHandler);
	}
});

Clazz.createPackage('com.listener');

Clazz.com.listener.HeaderListener = Clazz.extend(Clazz.Base, {
	__loginOverlay : "An instance of WULoginOverlay.",
	loginOverlay: null,
	__wuMaskMain : "An instance of WuMaskMain.",
	wuMaskMain : null,

	initialize : function(config){
		if(config){
			this.loginOverlay = config.loginOverlay;
			this.wuMaskMain = config.wuMaskMain;
		}	
	},

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
