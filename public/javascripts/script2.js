var dtmFlag = true;
DtmStandard();

function DtmStandard() {
    var country, language, dataCenter, releaseVersion, platform, sessionid, loginState, siteSections, sectionsLen, section, sub_section;

    setCountryAndLanguage();
    var path = window.location.pathname;
    var pathArray = path.split("/");
    if(path.indexOf("content") !== -1){
    	country = pathArray[4];
    	language = pathArray[5];
    }else{
    	country = pathArray[1];
        language = pathArray[2];
    }
    if(country.indexOf("_") != -1){
		var temp = country.split("_");
		country = temp[1];
        language = temp[0];
	}
    country = country.toUpperCase();
    language = language.toLowerCase();

   // country = dtmGetCookie('WUCountryCookie_');
   // language = dtmGetCookie('WULanguageCookie_');

    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //     platform = "mobile";
    // }else{
    platform = "website";
    // }

   //temp fix, till Jubin find a better solution
    //window.sessionStorage.setItem("sc_data_center", "Charlotte");
    window.sessionStorage.setItem("sc_release", "QA29002");
    //end of temp fix

    /*dataCenter = window.sessionStorage.getItem("DataCenter");
    window.sessionStorage.setItem("sc_data_center", dataCenter); */
    releaseVersion = window.sessionStorage.getItem("sc_release");

    siteSections = getSiteSections();
    sectionsLen = getSiteSectionsLen();

    analyticsObject = {
        sc_country: country,
        sc_language: language,
        sc_platform: platform,
        sc_release: releaseVersion,
        sc_data_center: dataCenter
    };
	//updated for PBL-1135
    if(window.sessionStorage.getItem("DataCenter") != undefined && window.sessionStorage.getItem("DataCenter") != null && window.sessionStorage.getItem("DataCenter") != ''){
		dataCenter = window.sessionStorage.getItem("DataCenter");
    	analyticsObject.sc_data_center = dataCenter;
		window.sessionStorage.setItem("sc_data_center", dataCenter);
		localStorage.setItem("sc_data_center", dataCenter);
    }else{
		dataCenter = 'N';
		analyticsObject.sc_data_center = dataCenter;
		window.sessionStorage.setItem("sc_data_center", dataCenter);
		localStorage.setItem("sc_data_center", dataCenter);
	}
    //updated for PBL-1135
	
    //RINTL-15168 START

    var urlparam = window.location.search;
    var url_param_replaced = urlparam.replace('?' , '');
    if(url_param_replaced.indexOf("src") != -1){
        var src_code = url_param_replaced.replace('src=' , '');
        analyticsObject.sc_src_code = src_code;
        sessionStorage.setItem("src_code", src_code);
    }
    /** HQW-4237 starts here*/
    if(url_param_replaced.indexOf("mc_id") != -1){
        var mc_id_param = url_param_replaced.replace('mc_id=' , '');
        var mc_id = mc_id_param.replace('&src=paid_gg_brand&' , '');
        sessionStorage.setItem("mc_id", mc_id);
    }
    /** HQW-4237 ends here*/

    if (sessionStorage.getItem("src_code") != undefined){
       analyticsObject.sc_src_code = sessionStorage.getItem("src_code");

        //RINTL-15168 END

    } if (sessionStorage.getItem("AccountNumber") == null && dtmGetCookie('AccountNumber') == undefined) {

        loginState = "NotLoggedIn";
    } else {
        loginState = "LoggedIn";
        if (dtmGetCookie('AccountNumber') != undefined) {
            analyticsObject.sc_user_id = dtmGetCookie('AccountNumber');
        } else {
            analyticsObject.sc_user_id = sessionStorage.getItem("AccountNumber");
        }
    }

    dtmSetSessionId();

    analyticsObject.sc_login_state = loginState;

    for (var i = 0; i < sectionsLen; i++) {
        switch (i) {
            case 0:
                section = siteSections.split('/')[i];
                analyticsObject.sc_section = section;
				 var passwordHrefLink = window.location.href;
                //MYWU-1080
                expressNav = window.sessionStorage.getItem("ExpressNav");
                if (expressNav == "true" && section == 'register') {
                    analyticsObject.sc_section = 'expressregister';
                    analyticsObject.sc_sub_section = 'editprofile';
                    analyticsObject.sc_flow_type = 'ExpressRegistration';
                    analyticsObject.sc_registersuccess = true;
                }
                if (expressNav == "true" && section == 'profile') {
                    analyticsObject.sc_registersuccess = true;
                }
                if (expressNav == "true") {
                    analyticsObject.sc_section = 'expressregister';
                    analyticsObject.sc_flow_type = 'ExpressRegistration';
                }
                //PBL-293
                 if(section =='password-recovery' && (passwordHrefLink.indexOf("password-recovery.html?param=changePassword") > -1 || passwordHrefLink.indexOf("password-recovery.html#CreateNewPassword") > -1)){
					analyticsObject.sc_sub_section = 'resetpassword';
                }
                //PBL-293
                if (section == 'expressregister') {
                    var url = window.location.search;
                    if (url == '') {
                        analyticsObject.sc_campaign_id = 'SMS';
                    } else if (url.match("hashCode").length > 0) {
                        analyticsObject.sc_campaign_id = 'Email';
                    }
                }

                //HQW-2369 : new reset password analytics start
                var newResetPasswordStatus = window.sessionStorage.getItem('NewResetPasswordStatus');
    			if(newResetPasswordStatus && newResetPasswordStatus === 'success' && section == 'profile') {
            		analyticsObject.sc_fp_complete = 'true';
            		window.sessionStorage.removeItem('NewResetPasswordStatus');
    			}
                //HQW-2369 : end

                //HQW-524 analytic start here
               var apptype = window.sessionStorage.getItem("appoverlay");
                if (apptype =='appoverlay-ios' || apptype =='appoverlay-android' ) 
                    analyticsObject.sc_section = apptype;
              //HQW-524 analytic end here
                break;
            case 1:
                sub_section = siteSections.split('/')[i].toLowerCase();
                if (sub_section == 'sendmoneyregister') sub_section = 'register'; //temp fix to correct page name 4/1/2014
                analyticsObject.sc_sub_section = sub_section;
                break;
            case 2:
                analyticsObject.sc_sub_sub_section = siteSections.split('/')[i];
                break;
        }
    }

    if (section == 'send-money' || section == 'bill-pay' || section == 'send-inmate') {
        //work wround for wrong url in confirmIdentity, kyc, receipt page
        var summaryObj = getLocalStoreageVal('SummaryObjects', true);
        if (summaryObj && summaryObj.type != undefined) {
            var serviceName = summaryObj.type;
            switch (serviceName) {
                case 'sending_money':
					analyticsObject.sc_section = 'send-money';
                    break;
                case 'pay_bills':
                    analyticsObject.sc_section = 'bill-pay';
                    break;
                case 'inmate':
                    analyticsObject.sc_section = 'send-inmate';
                    break;
            }
        }
    }

    // home page lightbox analytics start
$(window).load(function() {
     if ($(location).attr('pathname') == Clazz.WUNavigator.basePath+"home.html") {
lightbox_info();
analyticsObject.sc_send_country = "US";
         analyticsObject.sc_payout_country = $("#country_list").val();
   if ($('#boxes').css('display') == 'block') {
    analyticsObject.sc_sub_section = "startoptionslightbox";
    }

     }
    else if ($(location).attr('pathname') == Clazz.WUNavigator.basePath+"inmatehome.html")
	 {
		 if ($('#logoutPopup').css('display') == 'block') {
    	analyticsObject.sc_sub_section = "info";
    }
	 }

});

 $(document).on("click", '.back', function() {
     if ($('#boxes').css('display') == 'block') {
    analyticsObject.sc_sub_section = "startoptionslightbox";
    }

  });

    $(document).on("click", '.return', function() {
      if ($('#boxes').css('display') == 'block') {
    analyticsObject.sc_sub_section = "startoptionslightbox";
    }
        });

$(document).on("click", ('.send-money-country'), function() {

     analyticsObject.sc_payout_country = $("#country_list").val();
    // if ($('#dialog1-home').css('display') == 'block') {
    analyticsObject.sc_sub_section = "transferoptionslightbox";
   // }

    });


if (analyticsObject.sc_sub_section == "continue"){
            var destination_radioSelected = window.sessionStorage.sendMoneyOptions;
        if (destination_radioSelected == "0"){
        analyticsObject.sc_sub_sub_section = "online";
        }
        if (destination_radioSelected == "1"){
        analyticsObject.sc_sub_sub_section = "person";
        }
        if (destination_radioSelected == "3"){
        analyticsObject.sc_sub_sub_section = "phone";
        }
        }

    function lightbox_info(){

        analyticsObject.sc_payout_country = $("#wu-ep-country-list").val();

        analyticsObject.sc_send_country = "US"; 

    }
    // home page lightbox analytics end


 	/* Analytics HQW-1897 */
    $(document).on("change", "#input-amount-fea", function() {
			//add_corridor_info(); commented for PBL-1111
            analyticsObject.sc_amount_type = "send";
	});

    $(document).on("change", "#input-convertion-fea", function() {
            //add_corridor_info(); commented for PBL-1111
            analyticsObject.sc_amount_type = "receive";
	});

    function add_corridor_info() {
        if( $("#input-amount-fea").data("isCurrency") == true) {
            analyticsObject.sc_send_country = "US";
            analyticsObject.sc_send_currency = "USD";
        }
		analyticsObject.sc_principal = $("#input-amount-fea").val();
        analyticsObject.sc_payout_country = $("#wu-country-list").val();
        analyticsObject.sc_payout_currency = $("#wu-currency-dropdown").val();
        analyticsObject.sc_payout_amount = $("#input-convertion-fea").val(); 
    }
    /* Analytics HQW-1897 End */

    var fileName = window.location.pathname.split('/').pop();
    if (fileName != 'send-money.html' && fileName != 'bill-pay.html' && fileName != 'send-inmate.html') { //for those static pages that nameing similar as send money, bill pay and inmate flow
        DtmCustom();
    }

    // Analytics for send again and quick send
    var txnOrigin = window.sessionStorage.getItem("TransactionOrigin");
    if (txnOrigin) {
        if (txnOrigin === "quick_send_widget") {
            switch (fileName){
                case 'receiverInformation.html':
                    analyticsObject.sc_quicksend_id = 'quick_send_receiver';
                    break;
                case 'paymentInformation.html':
                    analyticsObject.sc_quicksend_id = 'quick_send_payment';
                    break;
                case 'confirmIdentity.html': 
                    analyticsObject.sc_quicksend_id = 'quick_send_compliance';
                    break;
                case 'review.html': 
                    analyticsObject.sc_quicksend_id = 'quick_send_review';
                    break;
            }            
        } else if (txnOrigin === "send_again_link") {
            switch (fileName){
                case 'receiverInformation.html':
                    analyticsObject.sc_quicksend_id = 'send_again_receiver';
                    break;
                case 'paymentInformation.html':
                    analyticsObject.sc_quicksend_id = 'send_again_payment';
                    break;
                case 'confirmIdentity.html': 
                    analyticsObject.sc_quicksend_id = 'send_again_compliance';
                    break;
                case 'review.html': 
                    analyticsObject.sc_quicksend_id = 'send_again_review';
                    break;
            }            
        }
        window.sessionStorage.removeItem('TransactionOrigin');
    }
}

/**Overridden method for loggedout pages section, subsection analytics capture**/

function DtmStandardLoggedOut(section, subSection, subSubSection) {

    var country, language, dataCenter, releaseVersion, platform, sessionid, loginState, siteSections, sectionsLen, section, sub_section;

    setCountryAndLanguage();

    country = dtmGetCookie('WUCountryCookie_');
    language = dtmGetCookie('WULanguageCookie_');

    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //     platform = "mobile";
    // }else{
    platform = "website";
    // }

    //dataCenter = window.sessionStorage.getItem("sc_data_center");
    releaseVersion = window.sessionStorage.getItem("sc_release");

    analyticsObject = {
        sc_country: country,
        sc_language: language,
        sc_platform: platform,
        sc_release: releaseVersion,
        sc_data_center: dataCenter
    };

    if (sessionStorage.getItem("AccountNumber") == null && dtmGetCookie('AccountNumber') == undefined) {
        loginState = "NotLoggedIn";
    } else {
        loginState = "LoggedIn";
        dtmSetSessionId();
        if (dtmGetCookie('AccountNumber') != undefined) {
            analyticsObject.sc_user_id = dtmGetCookie('AccountNumber');
        } else {
            analyticsObject.sc_user_id = sessionStorage.getItem("AccountNumber");
        }


    }

    analyticsObject.sc_login_state = loginState;

    siteSections = getSiteSections();
    sectionsLen = getSiteSectionsLen();

    for (var i = 0; i < sectionsLen; i++) {
        switch (i) {
            case 0:
                section = siteSections.split('/')[i];
                analyticsObject.sc_section = section;
                break;
            case 1:
                sub_section = siteSections.split('/')[i].toLowerCase();
                analyticsObject.sc_sub_section = sub_section;
                break;
            case 2:
                analyticsObject.sc_sub_sub_section = siteSections.split('/')[i];
                break;
        }
    }
}

function DtmCustom() {
    var fileName = window.location.pathname.split('/').pop();
    //HQW 3868 start here
    var searchName = window.location.search.substring(1);
    //HQW 3868 end here
    var section = analyticsObject.sc_section;
    var sub_section = '';
    var pageName = fileName.split('.')[0];
    var loginState = analyticsObject.sc_login_state;
    var registerValidateSuccess = sessionStorage.getItem("dtm_register_activate_success");
    var challengerregisterValidateSuccess = sessionStorage.getItem("dtm_challenger_register_activate_success");
    var expressregisterValidateSuccess = sessionStorage.getItem("dtm_express_register_activate_success");
    var loginValidateSuccess = sessionStorage.getItem("dtm_login_activate_success");
    //var registerSuccess = sessionStorage.getItem("dtm_register_success");
    var loginSuccess = sessionStorage.getItem("dtm_login_success");
    var customerInfo = getLocalStoreageVal('GatewayCustomer', true);
    var summaryObj = getLocalStoreageVal('SummaryObjects', true);
    var validationResponseObj = getLocalStoreageVal('ValidationResponse', true);
    var sendCurrency = null;
    var sendCountry = analyticsObject.sc_country;
    var payoutCurrency 	= window.sessionStorage.getItem("payout_currency");
    var payoutAmount 	= window.sessionStorage.getItem("payout_amount");
	//PBL-1203
    var inmateObject = JSON.parse(window.sessionStorage.getItem("SendMoneyInmate"));
    var billerObject = JSON.parse(window.sessionStorage.getItem("BillerInformation"));
	//End - PBL-1203

    var senderData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[sendCountry]? Clazz.langConfig.senderInfoMap[sendCountry] : null;
    sendCurrency = senderData && senderData.currency? senderData.currency : sendCurrency;

    if (analyticsObject.sc_sub_section != undefined) sub_section = analyticsObject.sc_sub_section;

    if (loginSuccess == 'true' || loginSuccess == true) {
        analyticsObject.sc_loginsuccess = 'true';
        sessionStorage.setItem("dtm_login_success", 'false');
    }

      if (registerValidateSuccess == 'true' || registerValidateSuccess == true) { //email 4 digitals code activation success
        analyticsObject.sc_accnt_active = 'true';
         delete analyticsObject.sc_loginsuccess;
        sessionStorage.setItem("dtm_register_activate_success", 'false');
    }

    if (challengerregisterValidateSuccess == 'true' || challengerregisterValidateSuccess == true) { //email 4 digitals code activation success
        analyticsObject.sc_accnt_active = 'true';
        delete analyticsObject.sc_challenger_register_success;
         delete analyticsObject.sc_loginsuccess;
        sessionStorage.setItem("dtm_challenger_register_activate_success", 'false');
    }

    if (expressregisterValidateSuccess == 'true' || expressregisterValidateSuccess == true) { //email 4 digitals code activation success
        analyticsObject.sc_accnt_active = 'true';
        delete analyticsObject.sc_express_register_success;
         //RTPROD-540
         analyticsObject.sc_register_success= 'true';
         delete analyticsObject.sc_loginsuccess;
        sessionStorage.setItem("dtm_express_register_activate_success", 'false');
    }
    
    if (loginValidateSuccess == 'true' || loginValidateSuccess == true) {
        analyticsObject.sc_loginsuccess = 'true';
        sessionStorage.setItem("dtm_login_activate_success", 'false');
    }

    if (fileName.indexOf('estimatePriceSendmoneyResult') != -1) {
        section = 'estimatePriceSendmoney';
    } else if (fileName.indexOf('estimatePricePaybillsResult') != -1) {
        section = 'estimatePricePaybillsResult';
    }

    if(loginState == 'LoggedIn'){
        if(dtmGetCookie('AccountNumber')!=undefined){
            analyticsObject.sc_user_id = dtmGetCookie('AccountNumber');
        }else{
            analyticsObject.sc_user_id = sessionStorage.getItem("AccountNumber");
        }
        if(customerInfo && customerInfo.email!=undefined){
            analyticsObject.sc_email_address = customerInfo.email;
        }

        //adding gold card number and points
        var getLoyaltyCardsResponse = getLocalStoreageVal('GetLoyaltyCardsResponse', true);

        if (getLoyaltyCardsResponse !== undefined && getLoyaltyCardsResponse.gatewayCustomer !== undefined && getLoyaltyCardsResponse.gatewayCustomer.additionalPreferredCustomers !== undefined) {
            var goldCardDetails = getLoyaltyCardsResponse.gatewayCustomer.additionalPreferredCustomers;

            if (goldCardDetails.preferredCustomer != undefined && goldCardDetails.preferredCustomer.accountNbr != undefined) {
                analyticsObject.sc_gc_number = goldCardDetails.preferredCustomer.accountNbr;
            }
            if (goldCardDetails.preferredCustomer != undefined && goldCardDetails.preferredCustomer.totalPointsEarned != undefined) {

                analyticsObject.sc_point_balance = goldCardDetails.preferredCustomer.totalPointsEarned;
            }
        }
    }

    switch (section) {
        case 'send-money':
            analyticsObject.sc_service_name = 'moneytransfer';
            analyticsObject.sc_txn_type = 'moneytransfer';
            if (pageName != 'start') {
                if (customerInfo) {
                    setUserInfo(section, loginState, customerInfo);
                } else {
                    analyticsObject.sc_send_country = sendCountry;
                    analyticsObject.sc_send_currency = sendCurrency;
                    var dataInputObj = getLocalStoreageVal('DataInputField', true);
                    if (dataInputObj && dataInputObj.inputZipCodeValue != undefined) {
                        analyticsObject.sc_send_zip = dataInputObj.inputZipCodeValue;
                    }
                    if(analyticsObject.sc_sub_section === "register"){
                        analyticsObject.sc_flow_type="DefaultRegistration";
                    }
                }
                if (summaryObj) {
                    getSummaryInfo(section, summaryObj, validationResponseObj);
                } else { //when kyc email-me-profile-verify
                    var sendMoneyObj = getLocalStoreageVal('SendMoneyObjects', true);
                    getSendMoneyInfo(section, sendMoneyObj, validationResponseObj);
                }
                getTxnInfo(); //mtcn,transation id, txn_status
            } else { //start.html, when send money from homepage widget
                analyticsObject.sc_send_country = sendCountry;
                analyticsObject.sc_send_currency = sendCurrency;
                analyticsObject.sc_payout_currency 	= payoutCurrency;
        		analyticsObject.sc_payout_amount 	= payoutAmount;
                if (customerInfo && customerInfo.address != undefined) {
                    analyticsObject.sc_send_state = customerInfo.address.state;
                    analyticsObject.sc_send_zip = customerInfo.address.postalCode;
                }

                var dtmAmount = getLocalStoreageVal('DTMAmount', false);
                if (dtmAmount) {
                    analyticsObject.sc_principal = dtmAmount;
                    window.sessionStorage.removeItem('DTMAmount');
                }

                var dtmZipcode = getLocalStoreageVal('DTMZipcode', false);
                if (dtmZipcode && dtmZipcode !== "null") {
                    analyticsObject.sc_send_zip = dtmZipcode;
                    window.sessionStorage.removeItem('DTMZipcode');
                }
				//HQW 3868 start here
                if(window.location.search.substring(1) == 'hidezipcode=true'){
                    sessionStorage.setItem('hideZipCode', true);
                //fetch user's location and state
                    navigator.geolocation.getCurrentPosition(function (pos) {
                    var crd = pos.coords;
                    var latlng = {lat: parseFloat(crd.latitude), lng: parseFloat(crd.longitude)};
                    var geocoder = new google.maps.Geocoder;
                        geocoder.geocode({'location': latlng}, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                console.log(results[0]);
                                var state = null;
                                for(var i = 0 ; i < results[0].address_components.length ; i++){
                                    if(results[0].address_components[i].types[0] == 'administrative_area_level_1'){
                                        state = results[0].address_components[i].short_name;
                                        console.log(state);
                                        break;
                                    }
                                }
                                var states = ['WA','MA','NV','NJ'];
                                if(states.indexOf(state) > -1){
                                    sessionStorage.setItem('hideZipCode', false);
                                }
                            }   
                            else {
                                window.alert('No results found');
                            }
                        } 
                        else {
                            window.alert('Geocoder failed due to: ' + status);
                        }
                    });
                    console.log('Your current position is:');
                    console.log('Latitude : ' + crd.latitude);
                    console.log('Longitude: ' + crd.longitude);
                    console.log('More or less ' + crd.accuracy + ' meters.');
                    }, function (err) {
                        console.warn('ERROR(' + err.code + '): ' + err.message);
                    }, {
                        enableHighAccuracy: false,
                        timeout: 5000,
                        maximumAge: 0
                    });
                //end of fetching
                }
                else{
                    sessionStorage.setItem('hideZipCode', false);

                }              
                if(sessionStorage.getItem('hideZipCode')){
                    if(customerInfo && customerInfo.address.postalCode !== undefined){
                        dtmSetCookie('cookieZip', analyticsObject.sc_send_zip, '/', null, '365');
                    }
                    else if (!customerInfo && !dtmZipcode && dtmGetCookie('cookieZip')) {
                        analyticsObject.sc_send_zip = dtmGetCookie('cookieZip');
                    }                      
                }
                else if (!customerInfo && !dtmZipcode && dtmGetCookie('LZIP')) {//pbl-308 start here
                    analyticsObject.sc_send_zip = dtmGetCookie('LZIP');
                }
                //pbl-308 end here
                //HQW 3868 end here
                if (summaryObj && summaryObj.flag_position != undefined) {
                    analyticsObject.sc_payout_country = summaryObj.flag_position;
                } else {
                    var dtmCountry = getLocalStoreageVal('DTMcountry', true);
                    if (dtmCountry && dtmCountry.countryCode != undefined && dtmCountry.countryCode != "0") {
                        var dtmCountry = dtmCountry.countryCode;
                        analyticsObject.sc_payout_country = dtmCountry;
                        window.sessionStorage.removeItem('DTMcountry');
                    }
                }
            }
            break;
        case 'price-estimator':
            var dataInputObj = getLocalStoreageVal('DataInputField', true);
			//PBL-1203
            if(billerObject && billerObject.companyName){
				analyticsObject.sc_biller_inmate = billerObject.companyName;
			}
            //End - PBL-1203
            if (sub_section == 'continue') {
                analyticsObject.sc_service_name = 'moneytransfer';
                analyticsObject.sc_payout_country = dataInputObj.destinationCodeCountry;
                if (dataInputObj) {
                    if (dataInputObj.currentCurrencyResponse != undefined) analyticsObject.sc_payout_currency = dataInputObj.currentCurrencyResponse.currencyIsoCode;
                    if (dataInputObj.getTextDeliveryMethod != undefined) analyticsObject.sc_delivery_method = dataInputObj.getTextDeliveryMethod;
                    if (dataInputObj.inputZipCodeValue != undefined) analyticsObject.sc_send_zip = dataInputObj.inputZipCodeValue;
                }
                analyticsObject.sc_send_currency = sendCurrency;
                analyticsObject.sc_send_country = sendCountry;
                setUserInfo(section, loginState, customerInfo);
            } else if (sub_section != 'start') { //performEstimatedFeeInquiry
                analyticsObject.sc_service_name = 'billpay';
                analyticsObject.sc_payout_country = 'US';
                analyticsObject.sc_send_country = 'US';
                analyticsObject.sc_send_currency = 'USD';
                analyticsObject.sc_payout_currency = 'USD';
                var GatewayCustomerObj = getLocalStoreageVal('GatewayCustomer', true);
                if (GatewayCustomerObj) analyticsObject.sc_send_zip = GatewayCustomerObj.address.postalCode;
            }
            if (dataInputObj.inputAmountValue != undefined) {
                analyticsObject.sc_principal = dataInputObj.inputAmountValue;
            } else if (dataInputObj.amount != undefined) {
                analyticsObject.sc_principal = dataInputObj.amount;
            }
            break;
        case 'bill-pay':
            analyticsObject.sc_service_name = 'billpay';
            analyticsObject.sc_txn_type = 'billpay';
            analyticsObject.sc_payout_country = 'US';
            analyticsObject.sc_send_country = 'US';
            analyticsObject.sc_send_currency = 'USD';
            analyticsObject.sc_payout_currency = 'USD';
			 //PBL-1347 starts
            if(billerObject && billerObject.companyName){
				analyticsObject.sc_biller_inmate = billerObject.companyName;
			}
            //PBL-1347 ends
            if (customerInfo) setUserInfo(section, loginState, customerInfo);
            if (pageName != 'start') {
                if (customerInfo) setUserInfo(section, loginState, customerInfo);
                if (summaryObj) {
                    getSummaryInfo(section, summaryObj, validationResponseObj);
                    //temp fix for Confirm Your Identity (has wrong url when send money: payBills/confirmIdentity.html)
                    if (summaryObj.flag_position != undefined) analyticsObject.sc_payout_country = summaryObj.flag_position;
                }
                getTxnInfo(); //mtcn,transation id, txn_status
            }
            break;
        case 'send-inmate':
            analyticsObject.sc_service_name = 'inmate';
            analyticsObject.sc_txn_type = 'inmate';
            analyticsObject.sc_payout_country = 'US';
            analyticsObject.sc_send_country = 'US';
            analyticsObject.sc_send_currency = 'USD';
            analyticsObject.sc_payout_currency = 'USD';
			//PBL-1203
            if(inmateObject && inmateObject.facility_name.companyName){
				analyticsObject.sc_biller_inmate = inmateObject.facility_name.companyName;
			}
            //End - PBL-1203
            if (customerInfo) setUserInfo(section, loginState, customerInfo);
            if (pageName != 'start') { //when not inmate start page which has no trasction data exist yet
                var sendMoneyInmateObj = getLocalStoreageVal('SendMoneyInmate', true);
                if (pageName == 'performEstimatedInmateFeeInquiry' && sendMoneyInmateObj) { //when inmateFees page there is no summaryObj yet
                    analyticsObject.sc_principal = sendMoneyInmateObj.value_amount;
                    analyticsObject.sc_payout_currency = sendMoneyInmateObj.facility_name.currencyIsoCode;
                } else if (summaryObj) {
                    getSummaryInfo(section, summaryObj, validationResponseObj);
                }
                if(analyticsObject.sc_sub_section === "register"){
                        analyticsObject.sc_flow_type="DefaultRegistration";
                    }
                getTxnInfo(); //mtcn,transation id, txn_status

            }
            break;
		case 'track-transfer':
            if (analyticsObject.sc_sub_section == undefined) {
                //analyticsObject.sc_sub_section = 'moneyTransfer-tab'; //when page load default sub_section
				//updated for PBL-1713
                if(summaryObj){
                	analyticsObject.sc_mtcn = summaryObj.moneyTransferControl.mtcn;
                }
                //End-updated for PBL-1713
            }
            break;
        case 'profile':
            if (analyticsObject.sc_sub_section == undefined) {
                analyticsObject.sc_sub_section = 'overview-tab'; //when page load default sub_section
            }
            if (customerInfo && customerInfo.additionalPreferredCustomers != undefined) {
                if (customerInfo.additionalPreferredCustomers.preferredCustomer != undefined) {
                    analyticsObject.sc_gc_number = customerInfo.additionalPreferredCustomers.preferredCustomer.accountNbr;
                }
            }
            break;
        case 'login':
            var responseObj = getLocalStoreageVal('Response', true);
            if (responseObj && responseObj.gatewayCustomer != undefined) {
                if (responseObj.gatewayCustomer.preferredCustomer != undefined) {
                    if (responseObj.gatewayCustomer.preferredCustomer.accountNbr != undefined) {
                        analyticsObject.sc_user_id = responseObj.gatewayCustomer.preferredCustomer.accountNbr;
                    }
                }
                if (responseObj.gatewayCustomer.email != undefined) {
                    analyticsObject.sc_email_address = responseObj.gatewayCustomer.email;
                }
            }
            break;
        case 'mywuregister': // Analytical Call Code Added for Challenger Register
            analyticsObject.sc_flow_type = 'ChallengerRegistration';
            break;
        case 'expressregister': // Analytical Call Code Added for Express Register
            analyticsObject.sc_flow_type = 'ExpressRegistration';
            break;
        case 'register': // Analytical Call Code Added for Express Register Page 2
            if (window.sessionStorage.GetPrevPage == 'expressregister') {
                analyticsObject.sc_flow_type = 'ExpressRegistration-Step2';
            } else {
                analyticsObject.sc_flow_type = 'DefaultRegistration';
            }
			if(Clazz.WULocalStorage.getFbop() == 'fbop'){
				analyticsObject.section = 'send-inmate';
			}
            break;
        case 'termsandcondition': // Analytical Call Code Added for TC Page
            if (sessionStorage.getItem("extraValue")) {
                analyticsObject.sc_flow_type = 'termsandcondition';
            }
            break;
            //case 'register':
            //if (analyticsObject.sc_error != undefined && analyticsObject.sc_error=='C6006') appendDtmSubSection('verifycode'); //validate code page
            //break;
			//Start PBL-713
		case 'session-expired': 
			analyticsObject.sc_section = 'login';
            break;	
			//End PBL-713
        default:
            break;

    }

    //fixing for RTPROD-541
    if(analyticsObject.sc_section ==="register" || analyticsObject.sc_sub_section === "register"){
    	if (window.sessionStorage.GetPrevPage == 'expressregister') {
    		analyticsObject.sc_flow_type = 'ExpressRegistration-Step2';
    	} else {
    		analyticsObject.sc_flow_type = 'DefaultRegistration';
    	}
    }

    //for segmentation requested by Vijaya
    if (analyticsObject.sc_user_id != undefined) dtmSetCookie('LU', analyticsObject.sc_user_id, '/', null, '365');
    if (analyticsObject.sc_send_zip != undefined) dtmSetCookie('LZIP', analyticsObject.sc_send_zip, '/', null, '365');
    if (analyticsObject.sc_principal != undefined) dtmSetCookie('LAMT', analyticsObject.sc_principal, '/', null, '365');
    if (analyticsObject.sc_payment_method != undefined) dtmSetCookie('LPIN', analyticsObject.sc_payment_method, '/', null, '365');
    if (analyticsObject.sc_delivery_method != undefined) dtmSetCookie('LPOU', analyticsObject.sc_delivery_method, '/', null, '365');

    if (sub_section != '') sub_section = sub_section.toLowerCase();
    if (sub_section == 'paymentinformation' || sub_section == 'inmatepaymentinformation') {
        dtmSetCookie('LPAY', 'true', '/', null, '365');
    }
    if (sub_section == 'review' || sub_section == 'inmatereview') {
        dtmSetCookie('LRVW', 'true', '/', null, '365');
    }
    if (sub_section == 'receipt' || sub_section == 'inmatereceipt') {
        dtmSetCookie('LRCT', 'true', '/', null, '365');
    }
    if (sub_section == 'kycconfirmidentity') {
        dtmSetCookie('LKYC', 'true', '/', null, '365');
    }
    //end of segmentation


    function getTxnInfo() {
        var SendMoneyObj = getLocalStoreageVal('SendMoneyObjects', true);
        var MtcnObj = getLocalStoreageVal('MtcObject', true);
        var validationResponseObj = getLocalStoreageVal('ValidationResponse', true);
        var kycObj = getLocalStoreageVal('KycObject', true);
        var errorResponseObj = getLocalStoreageVal('ErrorResponse', true);
        var alternatePaymentTypesObj = getLocalStoreageVal('AlternatePaymentTypes', true);
        var sub_section = '';
        var fileName = '';
        fileName = window.location.pathname.split('/').pop();
        //console.log('filename='+fileName);

        if (analyticsObject.sc_sub_section != undefined) {
            sub_section = analyticsObject.sc_sub_section.toLowerCase();
        }

        if (validationResponseObj && validationResponseObj.temp_transaction_id != undefined) {
            analyticsObject.sc_transaction_id = validationResponseObj.temp_transaction_id;
        }
        if (SendMoneyObj && (fileName == 'receipt.html' || fileName == 'sendMoneyWUPayReceipt.html' || fileName == 'inmateReceipt.html')) { //under receipt page
            if (SendMoneyObj.authorizationStatus != undefined) {
                if (SendMoneyObj.authorizationStatus.code != undefined) analyticsObject.sc_txn_status = SendMoneyObj.authorizationStatus.code; //3000:onhold
            } else {
                analyticsObject.sc_txn_status = 'approved';
            }
        } else if (kycObj && kycObj.type != undefined) {
            analyticsObject.sc_txn_status = kycObj.type;
        } else if (SendMoneyObj && SendMoneyObj.error != undefined) {
            // RPO-1501 START
            if (SendMoneyObj.error.code == "C1974"){
				var alternatePaymentType = Clazz.WULocalStorage.getAlternatePaymentTypes ? JSON.parse(Clazz.WULocalStorage.getAlternatePaymentTypes()) : "";
                if(alternatePaymentType.length > 0){
					 analyticsObject.sc_txn_status = "C1974sd";
			    }
            } else{
            analyticsObject.sc_txn_status = SendMoneyObj.error.code;
            }  
            // RPO-1501 End
        }

        if (SendMoneyObj && SendMoneyObj.sender != undefined) {
            if (SendMoneyObj.sender.additionalPreferredCustomers != undefined) {
                if (SendMoneyObj.sender.additionalPreferredCustomers.preferredCustomer != undefined) {
                    analyticsObject.sc_gc_number = SendMoneyObj.sender.additionalPreferredCustomers.preferredCustomer.accountNbr;
                    if (SendMoneyObj.sender.preferredCustomer != undefined) {
                        if (SendMoneyObj.sender.preferredCustomer.totalPointsEarned != undefined) {
                            analyticsObject.sc_point_balance = SendMoneyObj.sender.preferredCustomer.totalPointsEarned;
                        }
                    }
                }
            }
        }

        if (errorResponseObj) {
            var txn_status = '';

            if (errorResponseObj.code != undefined) {
                txn_status = errorResponseObj.code;
            } else if (errorResponseObj.error != undefined) {
                if (errorResponseObj.error.code != undefined) txn_status = errorResponseObj.error.code;
            }

            if (alternatePaymentTypesObj && txn_status == 'C2002') {
                //console.log('alternatePaymentTypesObj');
                for (var i = 0; i < alternatePaymentTypesObj.length; i++) {
                    txn_status += alternatePaymentTypesObj[i];
                    //console.log('array data='+alternatePaymentTypesObj[i]);
                }
                if (txn_status == 'C2002CashWUPay') txn_status = 'C2002WUPaycash';
				if (txn_status == 'C2002CashCash') txn_status = 'C2002Cash';
            }
            // RPO-1501 START
            if (errorResponseObj.code == "C1974"){
				var alternatePaymentType = Clazz.WULocalStorage.getAlternatePaymentTypes ? JSON.parse(Clazz.WULocalStorage.getAlternatePaymentTypes()) : "";
                if(alternatePaymentType.length > 0){
					 analyticsObject.sc_txn_status = "C1974sd";
			    }
            }else{
                analyticsObject.sc_txn_status = txn_status;
            }
            // // RPO-1501 End
        }

        //when not in receipt page and there is mtcn, this will generated 

        if (SendMoneyObj != undefined && SendMoneyObj.moneyTransferControl != undefined) {


            if (SendMoneyObj.mtcn != undefined) {
                analyticsObject.sc_mtcn = SendMoneyObj.mtcn;
            } else if (SendMoneyObj.moneyTransferControl != undefined) {
                if (SendMoneyObj.moneyTransferControl.mtcn != undefined) {
                    analyticsObject.sc_mtcn = SendMoneyObj.moneyTransferControl.mtcn;
                }
            }
        } else if (MtcnObj && MtcnObj.moneyTransferControl.mtcn != undefined) {
            analyticsObject.sc_mtcn = MtcnObj.moneyTransferControl.mtcn;
        }
    }

    function getSummaryInfo(_section, _summaryObj, _validationResponseObj) {
        var paymentMethod = _summaryObj.paying_method;
        var payoutCountry = '';
        var payoutState = '';
        var txn_fee = 0;
        var txn_discount = 0;
        var validationRequestObj = getLocalStoreageVal('ValidationRequest', true);

/* RINTL-16281*/
        var country, language;
         var path = window.location.pathname;
    var pathArray = path.split("/");
    if(path.indexOf("content") !== -1){
    	country = pathArray[4];
    	language = pathArray[5];
    }else{
    	country = pathArray[1];
        language = pathArray[2];
    }

    country = country.toUpperCase();
    language = language.toLowerCase();

        /*END RINTL-16281*/

        txn_fee = parseFloat(_summaryObj.transfer_fee);

        if (_section == 'send-money') {
            if (_summaryObj.country_receiver != undefined) analyticsObject.sc_payout_state = _summaryObj.country_receiver;
            payoutCountry = _summaryObj.flag_position;
            analyticsObject.sc_delivery_method = _summaryObj.payout_method_code;
            analyticsObject.sc_payout_country = _summaryObj.flag_position;
        }

        if (_summaryObj.currencyIsoCode != undefined) analyticsObject.sc_payout_currency = _summaryObj.currencyIsoCode;

        if (paymentMethod == 'CreditCard' && _validationResponseObj) {
            if (_validationResponseObj.payment_details != undefined) {
                if (_validationResponseObj.payment_details.credit_debit_card != undefined) analyticsObject.sc_payment_type = _validationResponseObj.payment_details.credit_debit_card.card_type;
            }
        } else if (paymentMethod == 'CreditCard' && validationRequestObj) {
            if (validationRequestObj.payment_details != undefined) {
                if (validationRequestObj.payment_details.credit_debit_card != undefined) {
                    analyticsObject.sc_payment_type = validationRequestObj.payment_details.credit_debit_card.card_type;
                }
            }
        } else if (paymentMethod == 'ACH' && _validationResponseObj) {
            if (_validationResponseObj.sender.wallet && _validationResponseObj.sender.wallet.bank_accounts != undefined) {
                analyticsObject.sc_payment_type = _validationResponseObj.sender.wallet.bank_accounts.bank_account[0].account_type;
            }
        }
        analyticsObject.sc_principal = _summaryObj.transfer_amount;
        var ValidationResponse = Clazz.WULocalStorage.getValidationResponse ? JSON.parse(Clazz.WULocalStorage.getValidationResponse()) : "";
        if(ValidationResponse && ValidationResponse.payment_details.payment_type == "Cash"){
			analyticsObject.sc_payment_method = ValidationResponse.payment_details.payment_type;
        }
        else{
        analyticsObject.sc_payment_method = paymentMethod;
        }
        if (_summaryObj.promotional_discount != undefined && _summaryObj.promotional_discount != '') {
            txn_discount = parseFloat(_summaryObj.promotional_discount);
            txn_fee = txn_fee - txn_discount;

            if ((analyticsObject.sc_sub_section.toLowerCase() == 'review')

             ||(analyticsObject.sc_sub_section.toLowerCase() == 'receipt')

            ||( analyticsObject.sc_sub_section.toLowerCase() =='declineoptions')

            ||(analyticsObject.sc_sub_section.toLowerCase() =='kycconfirmidentity')
            
            ||(analyticsObject.sc_sub_section.toLowerCase() =='kycverificationoptions'))
             {

                   txn_fee = parseFloat(_summaryObj.transaction_total) - parseFloat(_summaryObj.transfer_amount);
             }



			if(txn_fee < 1 && country=='US'){ /* RTPROD-892*/
			   txn_fee = parseFloat(_summaryObj.transaction_total) - parseFloat(_summaryObj.transfer_amount);
			} 
        }

        if (sessionStorage.dtmFromSendagain !== undefined) {
            if (_validationResponseObj !== undefined && _validationResponseObj.payment_details !== undefined && _validationResponseObj.payment_details.fees !== undefined && _validationResponseObj.payment_details.fees.charges !== undefined) {

                var feess = _validationResponseObj.payment_details.fees.charges;
                var amount = Number(feess);
                feess = amount / 100;
                analyticsObject.sc_txn_fee = feess.toString();
            } else {
                analyticsObject.sc_txn_fee = txn_fee.toString();
            }
            delete sessionStorage["dtmFromSendagain"];
        } else {
            var ValidationResponse = Clazz.WULocalStorage.getValidationResponse ? JSON.parse(Clazz.WULocalStorage.getValidationResponse()) : "";
            if(ValidationResponse && ValidationResponse.payment_details.payment_type == "Cash"){
            var MtcObject = Clazz.WULocalStorage.getMtcObject ? JSON.parse(Clazz.WULocalStorage.getMtcObject()) : "";
               if (MtcObject){
                var trxn_fees = MtcObject.fees;
                 var amount = Number(trxn_fees);
                 trxn_fees = amount / 100;
                  analyticsObject.sc_txn_fee = trxn_fees.toString();
                }
                else{
                 analyticsObject.sc_txn_fee = trxn_fees.toString();
                }
            }
            else{
            analyticsObject.sc_txn_fee = txn_fee.toString();
            }
        }


        if (_summaryObj.promotional_code_discount != '') {
            analyticsObject.sc_promo_code = _summaryObj.promotional_code_discount;
        }

        if (_summaryObj.temp_zipcode != undefined) {
            var zipcode = _summaryObj.temp_zipcode;
            analyticsObject.sc_send_zip = zipcode.toString();
        }
    }

    function getSendMoneyInfo(_section, _sendMoneyObj, _validationResponseObj) {
        var paymentMethod;
        var payoutCountry = '';
        var payoutState = '';
        var txn_fee;
        var principal;

        if (_sendMoneyObj.paymentDetails != undefined) {
            paymentMethod = _sendMoneyObj.paymentDetails.paymentType;
            analyticsObject.sc_payment_method = paymentMethod;
            if (paymentMethod == 'CreditCard') {
                analyticsObject.sc_payment_type = _sendMoneyObj.paymentDetails.creditDebitCard.cardType;
            } else if (paymentMethod == 'ACH' && _validationResponseObj) {
                if (_validationResponseObj.sender.wallet && _validationResponseObj.sender.wallet.bank_accounts != undefined) {
                    analyticsObject.sc_payment_type = _validationResponseObj.sender.wallet.bank_accounts.bank_account[0].account_type;
                }
            }
            if (_sendMoneyObj.paymentDetails.destination != undefined) {
                analyticsObject.sc_payout_currency = _sendMoneyObj.paymentDetails.destination.currencyIsoCode;
                analyticsObject.sc_payout_country = _sendMoneyObj.paymentDetails.destination.countryIsoCode;
            }
            principal = _sendMoneyObj.paymentDetails.origination.principalAmount;
            txn_fee = _sendMoneyObj.paymentDetails.totalDiscountedCharges;
            if (principal.indexOf('.') == -1) principal = parseInt(principal) / 100;
            if (txn_fee.indexOf('.') == -1) txn_fee = parseInt(txn_fee) / 100;
            analyticsObject.sc_principal = principal.toString();
            analyticsObject.sc_txn_fee = txn_fee.toString();
        }

        if (_section == 'send-money') {
            if (_sendMoneyObj.receiver != undefined) {
                if (_sendMoneyObj.receiver.address.state != undefined) analyticsObject.sc_payout_state = _sendMoneyObj.receiver.address.state;
                payoutCountry = _sendMoneyObj.receiver.address.countryIsoCode;
            }
            if (_sendMoneyObj.wuProduct != undefined) analyticsObject.sc_delivery_method = _sendMoneyObj.wuProduct.code;
        }
    }

    function setUserInfo(_section, _loginState, _customerInfo) {
        if (loginState == 'LoggedIn' && _customerInfo) {
            var sendCountry = _customerInfo.address.countryIsoCode;
            analyticsObject.sc_send_country = sendCountry;
            
            var senderData = Clazz.langConfig.senderInfoMap && Clazz.langConfig.senderInfoMap[sendCountry]? Clazz.langConfig.senderInfoMap[sendCountry] : null;
            analyticsObject.sc_send_currency = senderData && senderData.currency? senderData.currency : analyticsObject.sc_send_currency;
            
            if (_customerInfo.address.postalCode !== undefined) {
                analyticsObject.sc_send_zip = _customerInfo.address.postalCode;
            }
            if (_customerInfo.address.state !== undefined) {
                analyticsObject.sc_send_state = _customerInfo.address.state;
            }
            if (_customerInfo && _customerInfo.additionalPreferredCustomers != undefined) {
                if (_customerInfo.additionalPreferredCustomers.preferredCustomer != undefined) {
                    analyticsObject.sc_gc_number = _customerInfo.additionalPreferredCustomers.preferredCustomer.accountNbr;
                }
            }
        } else {
            var GatewayCustomerObj = getLocalStoreageVal('GatewayCustomer', true);
            if (GatewayCustomerObj && GatewayCustomerObj.address.postalCode != undefined) {
                analyticsObject.sc_send_zip = GatewayCustomerObj.address.postalCode;
            }
        }
    }

}

function getLocalStoreageVal(localStoreageVar, ifJson) {
    //var storageData = $.proxy(window.sessionStorage.getItem(localStoreageVar), window.sessionStorage);//This is making DTM not working. DO Not add this without asking Chi, if need to add code pls contact Chi so she can help on testing 4/22/14
    var storageData = window.sessionStorage.getItem(localStoreageVar); //Do not change this! 4/22/14
    if (storageData != undefined) {
        if (ifJson || ifJson == 'true') {
            return JSON.parse(storageData);
        } else {
            return storageData;
        }
    } else {
        return false;
    }
}

function dtmSetCookie(name, value, path, domain, days, host) {
    var docdomain = document.domain.split('.');
    var dom1 = "";
    if (typeof(docdomain[docdomain.length - 2]) != 'undefined') dom1 = docdomain[docdomain.length - 2] + '.';
    var domainname = dom1 + docdomain[docdomain.length - 1];

    var optionCookie = dtmGetCookie("CookieOptIn");
    
    var timeExpired = days;
    if(optionCookie && optionCookie.indexOf("CKMKTG") === -1){
    	timeExpired = null;
    }

    //console.log(domainname);
    var cookie = name + "=" + value + ";";
    if (timeExpired) {
        var expDate = new Date();
        expDate.setDate(expDate.getDate() + parseInt(timeExpired));
        cookie += "Expires=" + expDate.toGMTString() + ";";
    }

    if (path)
        cookie += "path=" + path + ";";

    // if (domainname==".westernunion.com")
    if(domain){
        cookie += "Domain=" + domain + ";";
    }else if(domainname !== "localhost" && isNaN(parseInt(domainname.charAt(0)))){
        // handle domain is not localhost and ip address
        cookie += "Domain=" + domainname + ";";
    }
       
     // else 
     //  cookie += "Domain=" + domain + ";";

    if(domainname!==".westernunion.com")
    {
        cookie += "host=" + window.location.host + ";";
    }

    document.cookie = cookie;
    return cookie;

}

function dtmGetCookie(cookieName) {
    var i, key, value, cookiesArray = document.cookie.split(";");
    for (i = 0; i < cookiesArray.length; i++) {
        key = cookiesArray[i].substr(0, cookiesArray[i].indexOf("="));
        value = cookiesArray[i].substr(cookiesArray[i].indexOf("=") + 1);
        key = key.replace(/^\s+|\s+$/g, "");
        if (key == cookieName && value!=="") {
            return decodeURIComponent(value);
        }
    }
}

function dtmSetSessionId() {
    var sessionId = '';
    if (dtmGetCookie('SessionId') != undefined && dtmGetCookie('SessionId') != null && dtmGetCookie('SessionId') != '') {
        sessionId = dtmGetCookie('SessionId');
        analyticsObject.sc_session_id = sessionId;
        analyticsObject.sc_channel = sessionId.substring(0, 3);
    }//PBl-1799 Start 
    else{
    	sessionId = window.sessionStorage.getItem("sessionID");
    	analyticsObject.sc_session_id = sessionId;
		window.sessionStorage.setItem("sc_session_id", sessionId);
		localStorage.setItem("sc_session_id", sessionId);
    }
	//PBl-1799 Start
	//PBL-328 - updated code as per PBL-1135
/*	if(localStorage.getItem("DataCenter") != undefined && localStorage.getItem("DataCenter") != null && localStorage.getItem("DataCenter") != ''){
    	analyticsObject.sc_data_center = localStorage.getItem("DataCenter");
    }else{
		analyticsObject.sc_data_center = 'N';
	}*/

	if(window.sessionStorage.getItem("DataCenter") != undefined && window.sessionStorage.getItem("DataCenter") != null && window.sessionStorage.getItem("DataCenter") != ''){
		dataCenter = window.sessionStorage.getItem("DataCenter");
    	analyticsObject.sc_data_center = dataCenter;
		window.sessionStorage.setItem("sc_data_center", dataCenter);
		localStorage.setItem("sc_data_center", dataCenter);
    }else{
		dataCenter = 'N';
		analyticsObject.sc_data_center = dataCenter;
		window.sessionStorage.setItem("sc_data_center", dataCenter);
		localStorage.setItem("sc_data_center", dataCenter);
	}
	//PBL-328
}

function directCall(_action) {
    //console.log('Direct Call:'+_action);

    // #dtm_performance_fix
    // added to ensure that it would still work regardless of order of loading
    // the require configuration is done in footer
    // require(['dtm'], function() {
    _satellite.track(_action);
    //}); 
}

function DTM_Trigger(type, action, extravalue) {
    var sitebehavior = new Clazz.com.wu.util.SiteBehavior(); //sitebehavior
    var errFlag = false;
    if (action == undefined) action = '';
    if (extravalue == undefined) extravalue = '';
    var fileName = window.location.pathname.split('/').pop().toLowerCase();

    if (dtmFlag && analyticsObject !== undefined && type != '' && type != undefined) {
        switch (type) {
            case 'DTM-PROFILE-BANK-ROUTING-ERR': // from PaymentInfoListener.js
                analyticsObject.sc_error = action;
                directCall(type.toLowerCase());
                errFlag = true;
                break;
            case 'DTM-Add-CREDIT-CARD-ERR':
                analyticsObject.sc_error = action;
                directCall(type.toLowerCase());
                errFlag = true;
                break;
            case 'DTM-BANK-DECLINE-LIGHTBOX': // from bank-decline-template.jsp
                updateSubSection('bank-decline-lightbox');
                directCall(type.toLowerCase());
                break;
            case 'DTM-TXN-ERROR-HANDLER': //from WUSendMoneyReviewRequired.js
                if (analyticsObject.sc_section != undefined && analyticsObject.sc_section != 'profile') {
                    analyticsObject.sc_txn_status = action;
                    directCall(type.toLowerCase());
                }
                break;
            case 'DTM-REGISTER-SUCCESS': //from EmailVerificationListener.js for activate success
                sessionStorage.setItem("dtm_register_activate_success", 'true'); //register>verify code>overview
                if (fileName.indexOf('register') == -1) {
                    sessionStorage.setItem("dtm_login_success", 'true'); //login>verify code>overview
                }
                break;
            case 'DTM-REGISTER-SUCCESS-STEP1': //from RegisterListener.js
                //sessionStorage.setItem("dtm_register_success",'true');
                analyticsObject.sc_register_success = 'true';
                expressNav = window.sessionStorage.getItem("ExpressNav");
                //fixing for RTPROD-542
                if (expressNav == "true") {
                    analyticsObject.sc_section = 'expressregister';
                    updateDtmSubSection(2, 'verifycode'); 
                }else{
                    //RINTL-5337
                    //conditional for normal registration flow
                    appendDtmSubSection("verifycode");
                }
                //appendDtmSubSection("verifycode");
                //updateDtmSubSection(2, 'verifycode');  
                directCall("dtm_register_success");
                //alert('registration success');
                break;
            case 'DTM-EXPRESS-REGISTER-SUCCESS': //from EmailVerificationListener.js for activate success
                sessionStorage.setItem("dtm_express_register_activate_success", 'true'); //register>verify code>overview
                if (fileName.indexOf('expressregister') == -1) {
                    sessionStorage.setItem("dtm_login_success", 'true'); //login>verify code>overview
                }
                break;
            case 'DTM-CHALLENGER-REGISTER-SUCCESS': //from EmailVerificationListener.js for activate success
                sessionStorage.setItem("dtm_challenger_register_activate_success", 'true'); //register>verify code>overview
                if (fileName.indexOf('mywuregister') == -1) {
                    sessionStorage.setItem("dtm_login_success", 'true'); //login>verify code>overview
                }
                break;
            case 'DTM-EXPRESS-REGISTER-SUCCESS-STEP1': //from RegisterListener.js
                //sessionStorage.setItem("dtm_register_success",'true');
                analyticsObject.sc_express_register_success = 'true';
                appendDtmSubSection("verifycode");
                directCall("dtm_express_register_success");
                //alert('registration success');
                break;
            case 'DTM-CHALLENGER-REGISTER-SUCCESS-STEP1': //from RegisterListener.js
                //sessionStorage.setItem("dtm_register_success",'true');
                analyticsObject.sc_challenger_register_success = 'true';
                appendDtmSubSection("verifycode");
                directCall("dtm_challenger_register_success");
                //alert('registration success');
                break;
            case 'DTM-CHANGE-EMAIL-UPDATE-SUBSECTION': // from WUUpdateEmail.js
                updateDtmExistSection(action);
                directCall(action);
                break;
            case 'DTM-CHANGE-EMAIL-VERIFY-CODE': // from WUUpdateEmail.js
                appendDtmSubSection(action);
                directCall(action);
            case 'DTM-REGISTER-FAIL': // from RegisterListener.js
                //console.log('register fail error='+action);
                if (action != 'C6006') { //when register go to verify code page
                    analyticsObject.sc_error = action;
                    directCall('register-verification-failed');
                }
                break;
            case 'DTM-EXPRESS-REGISTER-FAIL': // from RegisterListener.js
                //console.log('register fail error='+action);
                if (action != 'C6006') { //when register go to verify code page
                    analyticsObject.sc_error = action;
                    directCall('expressregister-verification-failed');
                }
                break;
            case 'DTM-CHALLENGER-REGISTER-FAIL': // from RegisterListener.js
                //console.log('register fail error='+action);
                if (action != 'C6006') { //when register go to verify code page
                    analyticsObject.sc_error = action;
                    directCall('mywuregister-verification-failed');
                }
                break;
            case 'DTM-LOGIN-SUCCESS': //from LoginListener.js
                sessionStorage.setItem("dtm_login_success", 'true');
                break;
            case 'DTM-LOGIN-FAIL': //from LoginListener.js
                //console.log('login fail error='+action);
                if (action != 'C1124') { //when logged in go to verify code page
                    analyticsObject.sc_error = action;
                    directCall('login-fail');
                }
                break;
            case 'DTM-PWMB': //from WUSecureAuthAndAccuylnk.js
                updateSubSection(action);
                directCall(action.toLowerCase());
                break;
            case 'DTM-PWMBValidate':
                updateSubSection(action);
                directCall(action);
                break;    
            case 'DTM-3D-SECURE': //from WUSecureAuthAndAccuylnk.js
                updateSubSection(action);
                directCall(action.toLowerCase());
                break;
            case 'openTrackTrxStatus': //from TrackTransferListener.js
                appendDtmSubSection(action);
                directCall(type);
                break;
            case 'pwd_recovery_load_sec_que':
                appendDtmSubSection(action);
                directCall(type);
                break;
            case 'pwd_recovery_load_email_sent':
                updateDtmExistSection(action);
                directCall(type);
                break;
            case 'pwd_recovery_load_reset_pwd':
                updateDtmExistSection(action);
                directCall(type);
                break;
            case 'searchcall':
                DtmStandard();
                updateDtmSubSection(1, 'search-result');
                if (action.toLowerCase() != extravalue.toLowerCase()) analyticsObject.sc_internal_keyword = action;
                directCall(type);
                break;
            case 'update-contact-subsection':
                updateDtmSubSection(2, 'all-contacts-tab');
                directCall(type);
                break;
            case 'selectpayoutservice':
                directCall(type);
                break;
            case 'update-sendagain-txnfee':
                var summaryObjUpdate = getLocalStoreageVal('SummaryObjects', true);
                var txn_fee = 0;
                var txn_discount = 0;
                if (summaryObjUpdate) {
                    if (summaryObjUpdate.transfer_fee != undefined && summaryObjUpdate.transfer_fee != '') txn_fee = parseFloat(summaryObjUpdate.transfer_fee);
                    if (summaryObjUpdate.promotional_discount != undefined && summaryObjUpdate.promotional_discount != '') txn_discount = parseFloat(summaryObjUpdate.promotional_discount);
                    txn_fee = txn_fee - txn_discount;
                }
                analyticsObject.sc_txn_fee = txn_fee.toString();
                directCall(type);
                break;
            case 'update-resetpassword-login-status':
                sessionStorage.setItem("dtm_login_success", 'true');
                break;
            case 'dtm-reinitial-sessionid':
                dtmSetSessionId();
                directCall(type);
                break;
            case 'DTM-ERROR-DIRECT-CALL': //from API.js
                //console.log('api error='+action);
                if ((analyticsObject.sc_section == 'login' || analyticsObject.sc_section == 'send-inmate') && action == 'C1124') {
                    appendDtmSubSection('verifycode'); //validate code page
                    delete analyticsObject.sc_error;
                    directCall('update-email-address');
                } else if (analyticsObject.sc_section == 'register' && action == 'C6006') {
                    appendDtmSubSection('verifycode'); //validate code page
                    delete analyticsObject.sc_error;

                } else if (analyticsObject.sc_section == 'login' && action == 'C1144') {
                    var otpLoginError = sessionStorage.getItem("LoginPageErrors");
                    if(otpLoginError != null && otpLoginError.indexOf("C1124")>-1){
                    	sessionStorage.setItem("dtm_register_activate_success", 'true');
                    }
                } else if (analyticsObject.sc_section == 'register' && action == 'C1144') {
                    //RINTL-RINTL-15692 start
                    sessionStorage.setItem("dtm_register_activate_success", 'true');
                    //RINTL-15692 start end
                    appendDtmSubSection('auverification'); //validate code page
                    delete analyticsObject.sc_error;
                  } else if (analyticsObject.sc_section == 'send-money' && action == 'C1144') {
                    //RINTL-RINTL-15692 start
                    sessionStorage.setItem("dtm_register_activate_success", 'true');
                    //RINTL-15692 start end
                    appendDtmSubSection('auverification'); //validate code page
                    delete analyticsObject.sc_error; 
                    //start
                  }else if (analyticsObject.sc_section == 'password-recovery' && action == 'C1144') {                    
                      sessionStorage.setItem("dtm_login_success", 'true');
                      //end
               } else if ((analyticsObject.sc_section == 'login' || analyticsObject.sc_section == 'register') && action == 'C5062' || action == 'C1068') { //when enter verify code error (RTHREE-4114) or when enter invalid email address(RINTL-2706)
                    analyticsObject.sc_error = action;
                    directCall(type.toLowerCase());
                    sitebehavior.addError("txnErrorList", action);
                } else {
                    //sitebehavior starts--added by Jubin 3/18/14
                    sitebehavior.addError("txnErrorList", action); //sitebehavior
                    ///sitebehavior ends
                    if (analyticsObject.sc_section != 'login' && analyticsObject.sc_section != 'register' && analyticsObject.sc_section != 'mywuregister' && analyticsObject.sc_section != 'expressregister' && analyticsObject.sc_section != 'login-t1') { //login & register err direct call will be taken care by DTM-LOGIN-FAIL , DTM-REGISTER-FAIL
                        //console.log('analyticsObject.sc_error='+action);

                         if (analyticsObject.sc_section == 'verification' && action == 'C1145') {

            		        delete analyticsObject.sc_accnt_active;

                         } if (analyticsObject.sc_section == 'send-money' && action == 'C1145') {

            		        delete analyticsObject.sc_accnt_active;
                         }
						 //Start PBL-851
						 if (analyticsObject.sc_sub_section == 'sendmoneylogin' && action == 'C1124') {
							//console.log("==inside=1110000222==sc_sub_sub_section==="+action+analyticsObject.sc_sub_section);
							analyticsObject.sc_sub_sub_section = 'verifycode';
							
                         } if (analyticsObject.sc_sub_section == 'paybillslogin' && action == 'C1124') {
							//console.log("==inside=333333==sc_sub_sub_section==="+action+analyticsObject.sc_sub_section);
							analyticsObject.sc_sub_sub_section = 'verifycode';
                         }
						//End PBL-851
                        analyticsObject.sc_error = action;
                        directCall(type.toLowerCase());
                    }
                }
                break;

            case 'DTM-MYWU-TERMSANDCONDITION': // Analytical Call Code Added for TC Page
                sessionStorage.setItem("extraValue", extravalue);
                directCall(type.toLowerCase());
                break;
            case 'DTM-REWARD': // Analytical Call Code Added for Reward Page
                analyticsObject.sc_section = 'profile';
                analyticsObject.sc_sub_section = 'rewards-tab';
                analyticsObject.sc_sub_sub_section = 'default';
                directCall(type.toLowerCase());
                break;
            case 'DTM-REWARD-PRINT': // Analytical Call Code Added for Reward Print Page
                analyticsObject.sc_page = 'Print loyalty card';
                directCall(type.toLowerCase());
                break;
            case 'DTM-MYWU-MERGEPOINTS': // Analytical Call Code Added for Reward Merge Point Page
                analyticsObject.sc_rewards_merging = 'true';
                updateDtmSubSection(2, 'rewards-merging');
                directCall(type.toLowerCase());
                break;
            case 'DTM-REWARD-CONFIRM-POINTSMERGE': // Analytical Call Code Added for Reward Confirm Merge Points 
                analyticsObject.sc_rewards_merge_confirm = 'true';
                directCall(type.toLowerCase());
                break;
            case 'DTM-REWARD-CANCEL-POINTSMERGE': //  Analytical Call Code Added for Reward Cancel Point Merge Page
                analyticsObject.sc_rewards_merge_cancel = 'true';
                directCall(type.toLowerCase());
                break;
            case 'DTM-REWARD-HISTORY': // Analytical Call Code Added for Reward history Page
                analyticsObject.sc_sub_sub_section = 'Reward History'
                directCall(type.toLowerCase());
                break;
            case 'DTM-REDEEM-REWARD': // Analytical Call Code Added for Redeem Rewards Page
                analyticsObject.sc_sub_sub_section = 'redeem-reward-tab'
                directCall(type.toLowerCase());
                break;
            case 'DTM-MYWU-REDEEMPOINTS': // Analytical Call Code Added for Redeem Rewards Points Page
                analyticsObject.sc_rewards_redeemtion = 'true';
                updateDtmSubSection(2, 'rewards-redeemtion');
                directCall(type.toLowerCase());
                break;
            case 'DTM-MYWU-REDEEM-CONFIRMATION': // Analytical Call Code Added for Redeem Rewards Points Page
                if (extravalue == "PHONE") {
                    extravalue = "Phone Time";
                }
                if (extravalue == "MERCH") {
                    extravalue = "Cash Back";
                }
                if (extravalue == "DISCT") {
                    extravalue = "Cash Discount";
                }
                analyticsObject.sc_reward_type = extravalue;
                updateDtmSubSection(3, 'rewardsredemption-lightbox');
                directCall("rewards_merging");
                break;
            case 'DTM-MYWU-CANCEL-REDEEMPOINTS': // Analytical Call Code Added for Cancel Redeem Rewards Page
                analyticsObject.sc_rewards_redeemtion_cancel = 'true';
                directCall(type.toLowerCase());
                break;
            case 'DTM-MYWU-REWARDS-REDEEMED': // Analytical Call Code Added for Cancel Redeem Rewards Page
                analyticsObject.sc_rewards_redeemed = extravalue;
                directCall(type.toLowerCase());
                break;  
            case 'DTM-REWARD-HOW-POINTS-WORK': // Analytical Call Code Added for Rewards - How Points works Page
                analyticsObject.sc_sub_sub_section = 'How Points Work'
                directCall(type.toLowerCase());
                break;

            case "dtm-trigger-euid":
                updateDtmSubSection(1, action);
                directCall(type);
                break;

            case "dtm-confirm-address":
                updateDtmSubSection(1, action);
                directCall(type);
                break;

            case "dtm-letter-sent":
                updateDtmSubSection(1, action);
                directCall(type);
                break;
            case 'rewards_merging': //Call for MYWU merging points
                updateDtmSubSection(2, 'rewards-merging');
                directCall('rewards_merging');
                break;
            case 'reward_type':
                analyticsObject.sc_reward_type=action;
                directCall('reward_type');
               break;       
           default:
               break;
       }

   }
}

function getSiteSections() {
    var indexPosTwo, siteSections, tempArray;
    var indexPosOne = "";
    var first = parseInt(location.hostname.charAt(0));
    var path = window.location.pathname;
    var pathArray = path.split("/");
        if(path.indexOf("content") !== -1){
            var countryCode = pathArray[4];
            var index;
            if(countryCode.indexOf("_") != -1){
                index = 5;
            }else{
                index = 6;
            }
            tempArray = pathArray.slice(index, pathArray.length);
        }else{
            tempArray = pathArray.slice(3, pathArray.length);
        }

    indexPosTwo = tempArray.pop().replace(".html", "");

    for (var i = 0; i < tempArray.length; i++) {
        indexPosOne += tempArray[i] + "/";
    }

    siteSections = indexPosOne + indexPosTwo;
    return siteSections;
    //dtmSectionLen = siteSections.split('/').length; 
}

function getSiteSectionsLen() {
    var siteSections;
    siteSections = getSiteSections();
    return siteSections.split('/').length;
}

function updateSubSection(sectionName) {
    var sectionLen = getSiteSectionsLen();
    switch (sectionLen) {
        case 1:
            analyticsObject.sc_section = sectionName;
            //console.log('section='+sectionName);
            break;
        case 2:
            analyticsObject.sc_sub_section = sectionName;
            //console.log('sub='+sectionName);
            break;
        case 3:
            analyticsObject.sc_sub_sub_section = sectionName;
            //console.log('sub_sub='+sectionName);
            break;
    }

}

function refreshDtmSubSection(_elementId) { //for profile only
    if (dtmFlag) {
        delete analyticsObject.sc_accnt_active;
        delete analyticsObject.sc_loginsuccess;
        delete analyticsObject.sc_register_success;

        var sectionLen = getSiteSectionsLen();
        switch (sectionLen) {
            case 1: //shouldn't be just one, Photon will correct it 
                if (_elementId == '') {
                    delete analyticsObject.sc_sub_section;
                } else {
                    analyticsObject.sc_sub_section = _elementId;
                }
                break;
            case 2:
                if (_elementId == '') {
                    delete analyticsObject.sc_sub_sub_section;
                } else {
                    analyticsObject.sc_sub_sub_section = _elementId;
                }
                break;
            case 3:
                if (_elementId == '') {
                    delete analyticsObject.sc_sub_sub_sub_section;
                } else {
                    analyticsObject.sc_sub_sub_sub_section = _elementId;
                }
                break;
        }

        switch (_elementId) {
            //RINTL -5407
            case 'overview-tab':
                if(analyticsObject.sc_sub_sub_section!==undefined)
                {
                    delete analyticsObject.sc_sub_sub_section;
                }
                
                break;
            case 'activity-tab':
                updateDtmSubSection(2, 'all-activity-tab'); //default tab
                break;
            case 'rewards-tab':
                updateDtmSubSection(2, 'rewards-tab-accordion'); //default tab
                break;
            case 'contact-tab':
                updateDtmSubSection(2, 'all-contacts-tab'); //default tab
                break;
            case 'profile-tab':
                updateDtmSubSection(2, 'personal-information-tab'); //default tab
                break;
        }
    }
}

function appendDtmSubSection(subSectionName) {
    if (dtmFlag) {
        //alert('append dtm sub section');
        if (analyticsObject.sc_sub_section == '' || analyticsObject.sc_sub_section == undefined || analyticsObject.sc_sub_section == subSectionName) {
            analyticsObject.sc_sub_section = subSectionName;
            //console.log('sub');
        } else if (analyticsObject.sc_sub_sub_section == '' || analyticsObject.sc_sub_sub_section == undefined || analyticsObject.sc_sub_section == subSectionName) {
            analyticsObject.sc_sub_sub_section = subSectionName;
            //console.log('sub_sub');
        } else if (analyticsObject.sc_sub_sub_sub_section == '' || analyticsObject.sc_sub_sub_sub_section == undefined || analyticsObject.sc_sub_section == subSectionName) {
            analyticsObject.sc_sub_sub_sub_section = subSectionName;
            //console.log('sub_sub_sub');
        } else if (analyticsObject.sc_sub_sub_sub_sub_section == '' || analyticsObject.sc_sub_sub_sub_sub_section == undefined || analyticsObject.sc_sub_section == subSectionName) {
            analyticsObject.sc_sub_sub_sub_sub_section = subSectionName;
            //console.log('sub_sub_sub_sub');
        }
    }
}

function updateDtmExistSection(subSectionName) {
    if (dtmFlag) {
        //alert('update existing dtm sub section');
        if (analyticsObject.sc_sub_section != '' || analyticsObject.sc_sub_section != undefined) {
            analyticsObject.sc_sub_section = subSectionName;
        } else if (analyticsObject.sc_sub_sub_section != '' || analyticsObject.sc_sub_sub_section != undefined) {
            analyticsObject.sc_sub_sub_section = subSectionName;
        } else if (analyticsObject.sc_sub_sub_sub_section != '' || analyticsObject.sc_sub_sub_sub_section != undefined) {
            analyticsObject.sc_sub_sub_sub_section = subSectionName;
        } else if (analyticsObject.sc_sub_sub_sub_sub_section != '' || analyticsObject.sc_sub_sub_sub_sub_section != undefined) {
            analyticsObject.sc_sub_sub_sub_sub_section = subSectionName;
        }
    }
}

function updateDtmSubSection(numberSub, elementId) {
    if (dtmFlag) {
        //alert('elementId='+elementId);
        switch (numberSub) {
            case 1:
                analyticsObject.sc_sub_section = elementId;
                delete analyticsObject.sc_sub_sub_section;
                delete analyticsObject.sc_sub_sub_sub_section;
                delete analyticsObject.sc_sub_sub_sub_sub_section;
                break;
            case 2:
                analyticsObject.sc_sub_sub_section = elementId;
                delete analyticsObject.sc_sub_sub_sub_section;
                delete analyticsObject.sc_sub_sub_sub_sub_section;
                break;
            case 3:
                //console.log('3='+elementId);
                analyticsObject.sc_sub_sub_sub_section = elementId;
                delete analyticsObject.sc_sub_sub_sub_sub_section;
                //if(elementId=='create-new-contact') analyticsObject.sc_sub_sub_sub_sub_section='wu-choose-addPerson';
                break;
            case 4:
                //console.log('4='+elementId);
                analyticsObject.sc_sub_sub_sub_sub_section = elementId;
                break;
        }
    }
}

function setCountryAndLanguage() {
    //get path

    // Added for PBL-317 : Start
    var first,path,pathArray;
    var fullPath = window.location.href;

    	// Added for PBL-327 : Start
    	//  if((fullPath.indexOf("www.westernunion.com")!== -1) || (fullPath.indexOf("localhost")))
    if((fullPath.indexOf("www.westernunion.com")!== -1) || (fullPath.indexOf("www2.westernunion.com"))
       || (fullPath.indexOf("locations.westernunion.com")) || (fullPath.indexOf("wudispatcher-prv.westernunion.com"))
       || (fullPath.indexOf("wudispatcher-prvc.westernunion.com")) || (fullPath.indexOf("wudispatcher-prvp.westernunion.com"))
       || (fullPath.indexOf("wudispatcherp.westernunion.com")) || (fullPath.indexOf("wudispatcherc.westernunion.com"))
       || (fullPath.indexOf("wudispatcher.westernunion.com")) || (fullPath.indexOf("www3.westernunion.com")))
      {
    	   // PBL - 327 End
		var first = parseInt(location.hostname.charAt(0));

        var path = window.location.pathname;
        var pathArray = path.split("/");
        if(path.indexOf("content") !== -1){
            country = pathArray[4];
            language = pathArray[5];
        }else{
            country = pathArray[1];
            language = pathArray[2];
        }
        
        //UK is not iso code; changed to GB;
        country = country.toUpperCase() === "UK"? "GB" : country;

        if (dtmGetCookie('WUCountryCookie_') === undefined || dtmGetCookie('WUCountryCookie_') !== language) {
            dtmSetCookie('WUCountryCookie_', country.toUpperCase(), '/', null, '365');
        }
        if (dtmGetCookie('WULanguageCookie_') === undefined || dtmGetCookie('WULanguageCookie_') !== language) {
            dtmSetCookie('WULanguageCookie_', language, '/', null, '365');
        }

    }  
    // Added for PBL-317 : End
}

/** HQW-4237 Starts here */
function markettingCookieSet() {
    var gu = guid();
    if(dtmGetCookie('wu_device_id') === undefined || dtmGetCookie('wu_device_id') === '' || dtmGetCookie('wu_device_id') === null) {
        dtmSetCookie('wu_device_id', gu, '/', null, '365');
    } 
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
}
markettingCookieSet();
/** HQW-4237 Ends here */