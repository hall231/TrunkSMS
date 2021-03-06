var httpObj1;

////////////////////////////////////////////////////////////
function createXmlHttpRequestObject(){
// will store the reference to the XMLHttpRequest object
var xmlHttp;
// this should work for all browsers except IE6 and older
try
{
// try to create XMLHttpRequest object
xmlHttp = new XMLHttpRequest();
}
catch(e)
{
// assume IE6 or older
var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.5.0",
"MSXML2.XMLHTTP.4.0",
"MSXML2.XMLHTTP.3.0",
"MSXML2.XMLHTTP",
"Microsoft.XMLHTTP");
// try every prog id until one works
for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++)
{
try
{
// try to create XMLHttpRequest object
xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
}
catch (e) {}
}
}
// return the created object or display an error message
if (!xmlHttp)
alert("Error creating the XMLHttpRequest object.");
else
return xmlHttp;
} //end http objext
///////////////////////////////////////////////////////////////////

function ajaxSendRegData(submitReg, oname, phone, address, email, password, password2, country, how ){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/processRegistration.php";
var qstring = "submitReg=" + submitReg + "&name=" + escape(oname).replace("+","%2B") + "&phone=" + escape(phone).replace("+","%2B") + "&address=" + escape(address).replace("+","%2B")  + "&email=" + escape(email).replace("+","%2B").replace("/","%2F")  + "&password=" + escape(password).replace("+","%2B")  + "&password2=" + escape(password2).replace("+","%2B")  + "&country=" + escape(country).replace("+", "%2B");
+ "&how=" + escape(how).replace("+","%2B");
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

/////////////////////////////////////////////////////////////////////////////////////////////
//acct activation
function sendActivationFormData(submitAct, phoneCode, EmailCode, phoneNo, password){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/processRegistration.php";
var qstring = "submitAct=" + submitAct + "&phoneCode=" + escape(phoneCode).replace("+","%2B") + "&EmailCode=" + escape(EmailCode).replace("+","%2B") + "&phoneNo=" + escape(phoneNo).replace("+","%2B")  + "&password=" + escape(password).replace("+","%2B");
//document.writeln(qstring);
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

/////////////////////////////////////////////////////////////////////////
//get activation form
function getActivationForm(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getAcctForm.php";
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1


/////////////////////////////////////////////////////////////////////////////////////////////
//send password to email
function sendPasswordToMail(phoneNo, submit){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/sendpasswordTomail.php";
var qstring = "submit=" + submit + "&phoneNo=" + escape(phoneNo).replace("+","%2B");
//document.writeln(qstring);
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

/////////////////////////////////////////////////////////////////////////////////////////////
//authenticate user
function authenticate(phone,password, submit){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/authentication.php";
var qstring = "submit=" + submit + "&phoneNo=" + escape(phone).replace("+","%2B") + "&password=" + escape(password).replace("+","%2B");
//document.writeln(qstring);
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);
 //end if
}else{
alert("Ops! You Cannot Login. Is like your browser is not suported.My sugession, try firefox or opera if that's not what you are using and Please Check your internet connection!");
}
} //end getimage1

////////////////////////////////////////////////////////////////////////////////////
///get contact form
function getContactFormFrmServer(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getaddContactForm.php";
//var qstring = "submit=" + submit + "&phoneNo=" + phone + "&password=" + password;
//document.writeln(qstring);
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1


/////////////////////////////////////////////////////////////////////////////////////////////
//submit category for the user
function submitCategory(catego, submit){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/addCategory.php";
var qstring = "submit=" + submit + "&catego=" + escape(catego).replace("+","%2B");
//document.writeln(qstring);
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

///////////////////////////////////////////////////////////////////////////////
//submit contact
function sendContactToPHP(phoneNo, contactName, category, addContact){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/addContactToClientPhoneBookForm.php";
var qstring = "submit=" + addContact + "&phoneNo=" + escape(phoneNo).replace("+","%2B") + "&contactName=" + escape(contactName).replace("+","%2B") + "&category=" + escape(category).replace("+","%2B");
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

///////////////////////////////////////////////////////////////////////////////
//getMore contact 'cos there may be more
function getphonebook(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getphonebook.php?";
httpObj.onreadystatechange = getResponsefonebook;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

function getResponsefonebook(){ 

if (httpObj.readyState==4){
document.getElementById('phoneBooks').innerHTML =  httpObj.responseText;
//document.getElementById('image').innerHTML = "";
} // end stateChage
}

///////////////////////////////////////////////////////////////////////////////
//getMore contact 'cos there may be more
function getContactswith(offset, limit){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getContactsOffLimit.php?";
var qstring = "offset=" + offset + "&limit=" + limit;
url = url + qstring;
httpObj.onreadystatechange = ServerResponse3;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

////////////////////////////////////////////////////////geteditcontactform
function geteditContactForm(contactID){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getContactsEditForm.php?";
var qstring = "contactID=" + contactID;
url = url + qstring;
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

////////////////////////////////////////////////////////////////////
//editContacts
function editContacts(phoneNo, contactName, category, addContact, id){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/editContactToClientPhoneBookForm.php";
var qstring = "submit=" + addContact + "&phoneNo=" + escape(phoneNo).replace("+","%2B") + "&contactName=" + escape(contactName).replace("+","%2B") + "&category=" + escape(category).replace("+","%2B") + "&id=" + id;
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

///////////////////////////////////////////editingCat
//edit category here
function editingCat(catego, submit, catID){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/editCategory.php";
var qstring = "submit=" + submit + "&catego=" + escape(catego).replace("+","%2B") + "&catID=" + catID;
//document.writeln(qstring);
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

///////////////////////////////////////////delitinContact
//delete contact
function deleteContactFromPB(contactID){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/deleteContactFromPB.php";
var qstring = "contactID=" + contactID;
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

///////////////////////////////////////////delitinContact
//delete category
function deleteCatigory(id){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/deleteCatigory.php";
var qstring = "catid=" + id;
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

//////////////////////////////////////////////////GET HOW MANY PEOPLE TO SEND SMS TO
function getHowManyPeopleToSendSMS(category){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getHowManyPeopleToSendSMS.php?";
var qstring = "category=" + escape(category).replace("+","%2B");
url = url + qstring;
httpObj.onreadystatechange = ServerResponse2;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

////////////////////////////////////////////////////////////signout
//
function signOutUser(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/signOutUser.php?";
httpObj.onreadystatechange = getsignout;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

function getsignout(){ 

if (httpObj.readyState==4){
alert(httpObj.responseText);
window.location.reload();
} // end stateChage
}
//////////////////////////////////////////////////////////////////////getSMSForm
//goGetSMSForm()
function goGetSMSForm(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getSMSForm.php?";
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

//////////////////////////////////////////////////////////////////////getAcctinfo
//goGetSMSForm()
function getAccountInfos(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getAccountInfos.php?";
httpObj.onreadystatechange = getacctinfo;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

function getacctinfo(){ 

if (httpObj.readyState==4){
document.getElementById('acctInformation').innerHTML =  httpObj.responseText;
} // end stateChage
}
//////////////////////////////////////////////////////////////////////getAcctinfo
//goGetuploadform()
function getCSV_formPHP(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/uploadForm.php?";
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

/////////////////////////////////////////delete under category
//
//deleteContactUnderCat(" + catID + ")
function deleteContactUnderCat(categoryID){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/deleteContactUnderCat.php?";
var qstring = "categoryID=" + categoryID;
url = url + qstring;
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1


function ajaxSendSMS_Single(smsname, phone, smsmessage, date, time){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./singleSMS/sendSingleSMS.php";
var qstring = "smsname=" + smsname + "&phone=" + escape(phone).replace("+","%2B") + "&smsmessage=" + escape(smsmessage).replace("+","%2B").replace("/","%2F") + "&time=" + escape(time).replace("+","%2B") + "&date=" + escape(date).replace("+","%2B");
httpObj.onreadystatechange = getResponseSMS;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

function sendCSV_Numbers(smsname, csv, smsMessage, date, time){
//(smsname, phone, smsmessage, date, time)
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./singleCSVSMS/sendCSVSMS.php";
var qstring = "smsname=" + smsname + "&csv=" + escape(csv).replace("+","%2B") + "&smsmessage=" + escape(smsMessage).replace("+","%2B").replace("/","%2F") + "&time=" + escape(time).replace("+","%2B") + "&date=" + escape(date).replace("+","%2B");
httpObj.onreadystatechange = getResponseSMS;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

/////////////////////////////////////send to multiple
function ajaxSendSMS_group(smsname, category, smsmessage, date, time){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./multipleSMS/sendMultipleSMS.php";

var qstring = "smsname=" + smsname + "&category=" + escape(category).replace("+","%2B") + "&smsmessage=" + escape(smsmessage).replace("+","%2B").replace("/","%2F") + "&time=" + escape(time).replace("+","%2B") + "&date=" + escape(date).replace("+","%2B");

httpObj.onreadystatechange = getResponseSMS;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1


function popUpLog(){
var string = "./logic/SMSlog.php";
window.open(string, 'dict_win', 'width=650, height=400, resizable=yes, scrollbars=yes');
}

function getTransferSMSForm2(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/TransferForm.php";
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getimage1

function sendTransferCredData(acctno, units){
httpObj = createXmlHttpRequestObject();
if(httpObj){
var url = "./logic/processTransferCredData.php";
var qstring = "submit=blah" + "&acctno=" + escape(acctno).replace("+","%2B") + "&units=" + escape(units).replace("+","%2B");
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1

function getRechargeForm(){

httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getRechargeForm.php";
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);

} //end if
} //end getRechargeForm();

function RechageSMS2(pin,serial){
httpObj = createXmlHttpRequestObject();
if(httpObj){
var url = "./logic/processRecharging.php";
var qstring = "submit=blah" + "&serialno=" + escape(serial).replace("+","%2B") + "&pincode=" + escape(pin).replace("+","%2B");
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);

} //end if
} //end getimage1



function ServerResponse(){ 
if (httpObj.readyState==1){
updateProgressbar('Loading...', 25, 1);
}else
if (httpObj.readyState==2){
updateProgressbar('Loading...', 50, 1);
}else
if (httpObj.readyState==3){
updateProgressbar('Loading...', 75, 1);
}else
if (httpObj.readyState==4){
updateProgressbar('Completed', 100, 1);

if(document.getElementById("server_status") == null){
document.getElementById("middle_panel").innerHTML =  httpObj.responseText;
}else{
document.getElementById("server_status").innerHTML =  httpObj.responseText;
}
updateProgressbar('Completed', 100, 0);
//document.getElementById('image').innerHTML = "";
}

}
function ServerResponse2(){ 
if (httpObj.readyState==1){
updateProgressbar('Loading...', 25, 1);
}else
if (httpObj.readyState==2){
updateProgressbar('Loading...', 50, 1);
}else
if (httpObj.readyState==3){
updateProgressbar('Loading...', 75, 1);
}else
if (httpObj.readyState==4){
updateProgressbar('Completed', 100, 1);
document.getElementById('single').innerHTML = "<td >Sending to:</td><td><label> <input type=\"text\" name=\"single\" value=\"" + httpObj.responseText + "\" disabled = \"disable\"></label></td>";
updateProgressbar('Completed', 100, 0);
//document.getElementById('image').innerHTML = "";
}

}

function ServerResponse3(){ 
if (httpObj.readyState==1){
updateProgressbar('Loading...', 25, 1);
}else
if (httpObj.readyState==2){
updateProgressbar('Loading...', 50, 1);
}else
if (httpObj.readyState==3){
updateProgressbar('Loading...', 75, 1);
}else
if (httpObj.readyState==4){
updateProgressbar('Completed', 100, 1);
document.getElementById('phoneBooks').innerHTML =  httpObj.responseText;
updateProgressbar('Completed', 100, 0);
//document.getElementById('image').innerHTML = "";
}

}

function getResponseSMS(){ 
if (httpObj.readyState==1){
updateProgressbar('Please Wait...', 25, 1);
}else
if (httpObj.readyState==2){
updateProgressbar('Please Wait...', 50, 1);
}else
if (httpObj.readyState==3){
updateProgressbar('Please Wait', 75, 1);
}else
if (httpObj.readyState==4){

updateProgressbar('Completed', 100, 0);
//call a delay function
dialogPopUp(httpObj.responseText);
//popUpLog();
//document.getElementById('middle_panel').innerHTML =  httpObj.responseText;
//document.getElementById('image').innerHTML = "";
}

}



function getprocesedshedmesg(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getprocesedshedmesg.php";
httpObj.onreadystatechange = sres;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);
} //end if


}

function sres(){
if (httpObj.readyState==4){

document.getElementById("server_status2").innerHTML =  httpObj.responseText;

//document.getElementById('image').innerHTML = "";
}

}

function getqueue(){
httpObj = createXmlHttpRequestObject();
if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/getqueue.php";
httpObj.onreadystatechange = ServerResponse;  //stateChanged is the function handler
httpObj.open("GET",url,true);
//httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(null);
} //end if


}


function delMessageFromQueue(table,messageid){
httpObj = createXmlHttpRequestObject();
//alert(table + " " + messageid);

if(httpObj){
//document.getElementById('image').innerHTML = "<img src = '../images/ajax-loader.gif'>";
var url = "./logic/delMessageFromQueue.php";
var qstring = "mesid=" + messageid + "&tblname=" + table;;
httpObj.onreadystatechange = getResponseSMS;  //stateChanged is the function handler
httpObj.open("POST",url,true);
httpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
httpObj.send(qstring);
} //end if

}
