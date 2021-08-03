$(document).ready(function()
{
		
  $("input[type='button'],input[type='reset'],input[type='submit']").addClass("idleButton"); 

 $("input[type='text'],input[type='password'],textarea").addClass("idleField");  
     $("input[type='text'],input[type='password'],textarea").focus(function() {  
         $(this).removeClass("idleField").addClass("focusField");  
     
     });  

    $("input[type='text'],input[type='password'],textarea").blur(function() {  
         $(this).removeClass("focusField").addClass("idleField");  
         if ($.trim(this.value == '')){  
             this.value = (this.defaultValue ? this.defaultValue : '');  
         }  
     });  

	getcart();
	var options =
            {
                zoomWidth: 350,
                zoomHeight: 350
            }
            $(".jqzoom").jqzoom(options);
			
	// new tricker start here
	var first = 0;
	var speed = 700;
	var pause = 3500;
	
		function removeFirst(){
			first = $('ul#listticker li:first').html();
			$('ul#listticker li:first')
			.animate({opacity: 0}, speed)
			.fadeOut('slow', function() {$(this).remove();});
			addLast(first);
		}
		
		function addLast(first){
			last = '<li style="display:none">'+first+'</li>';
			$('ul#listticker').append(last)
			$('ul#listticker li:last')
			.animate({opacity: 1}, speed)
			.fadeIn('slow')
		}
	
	interval = setInterval(removeFirst, pause);
	
	// news ticker end here
	
	$("#menustyle expandables").next().hide();
	$("#menustyle expandables:first").next().show();
	
	$("#menustyle expandables").click(function()
	{
		if($(this).next().is(':hidden'))
		{
			$("#menustyle expandables").next().slideUp();
			$(this).next().slideDown();
		}
	});


	$(".bundleh").next().hide();
	$(".bundleh:first").next().show();
	
	$(".bundleh").click(function()
	{
		if($(this).next().is(':hidden'))
		{
			$(".bundleh").next().slideUp();
			$(this).next().slideDown();
		}
	});

});


function changecss(t)
{
	//alert($(t).val());
	$(t).val("");
	$(t).removeClass("txtmsg");
	
}

function validate_contact(theForm)
{	
    //alert("validate contact");
var val=false;

 							 if($('#name').val()=="" || $('#name').val().length==0 )
							{
								//alert("empty");
								$('#name').val("");
								$('#name').attr("placeholder","Enter a valid Name").addClass("your-class");
								val=true;
							}
							
							if($.trim($('#email').val())=="")
							{
								$('#email').val("");
								$('#email').attr("placeholder","Enter a valid Email").addClass("your-class");
								val=true;
							}
					
						    if(!isEmailAddr($('#email').val()))
							{
								$('#email').val("");
								$('#email').attr("placeholder","Enter a valid Email").addClass("your-class");
								
								val=true;
							} 
							
							if($.trim($('#mobile').val())=="")
							{
								    $('#mobile').val("");
									$('#mobile').attr("placeholder","Enter a valid Number").addClass("your-class");
									val=true;
							}
							if(isNaN($('#mobile').val()) || $('#mobile').val().length<10 || $('#mobile').val().length>10)
							{
								 $('#mobile').val("");
									$('#mobile').attr("placeholder","Enter a valid Number").addClass("your-class");
									val=true;
							}	
							
							
							
		if(val==true)
		{
			return false;
		}
		else
		{
			
			$.post("enquiry_post.php", {
				    name: $('#name').val(),
				    email: $('#email').val(),
					mobile:$('#mobile').val(),
				    foo:$.trim($('#foo').val()),
					msg: $('#msg').val()
					}, function(data,status)
					{
                   
					
                       $("#result").html(data);
					   $('#name').val(""),
					   $('#email').val(""),
					   $('#mobile').val(""),
					   $('#foo').val(""),  
					   $('#msg').text("")
                   
                     
            });
			
			return true;
		}
	}
	
	

//Blank field checking
function chk_blank(ctl,msg)
	{
		if(msg=="")
		 {
		  msg="This field cannot be blank";
		 }
		if (ctl.value=="")
		 {
			alert(msg);
			ctl.focus();
			return (false);
		 }
		else
		 return (true);
	}

/*-----------------------------------------------------*/
//Valid Email Checking
function isEmailAddr(email)
  {
   var result = false
   var theStr = new String(email)
   var index = theStr.indexOf("@");
   if (index > 0)
    {
     var pindex = theStr.indexOf(".",index);
     if ((pindex > index+1) && (theStr.length > pindex+1))
     result = true;
    }
   return result;
  }
// Calling function
function chk_email(ctl)
 {

	if (!isEmailAddr(ctl.value))
	 {
		return (false);
	 }
	else
	 return (true);
 }
/*-----------------------------------------------------*/

// Numeric checking
function chk_numeric(ctl,msg)
 {
 	if(msg=="")
	 {
	  msg="Please enter valid numeric data";
	 }

	if (isNaN(ctl.value))
	 {
		alert(msg);
		ctl.value="";
		ctl.focus();
		return (false);
	 }
	else
	 return (true);
 }
/*-----------------------------------------------------*/

// Maxlength checking
function chk_maxlength(ctl,max,msg)
 {
 	if(msg=="")
	 {
	  msg="Please enter atmost"+ max +"characters";
	 }

	if (ctl.value.length > max)
	 {
		alert(msg);
		ctl.focus();
		return (false);
	 }
	return (true);
 }
/*-----------------------------------------------------*/



// Minimum Length checking
function chk_minlength(ctl,min,msg)
 {
 	if(msg=="")
	 {
	  msg="Please enter more than"+ max +"characters";
	 }

	if (ctl.value.length < min)
	 {
		alert(msg);
		ctl.focus();
		return (false);
	 }
	return (true);
 }
/*-----------------------------------------------------*/


// String checking
function chk_string(ctl,msg)
 {
  	if(msg=="")
	 {
	  msg="This field can never have numbers";
	 }

 	if (ctl.value!="")
	 {
		for(var i=0;i<9;i++)
		 {
			var pos=ctl.value.indexOf(i);
			if (pos!=-1)
			 {
				alert(msg);
				ctl.value="";
				ctl.focus();
				return (false);
			 }
		 }
	 }
	
	return (true);
}
/*-----------------------------------------------------*/
// Numeric checking
function chk_numeric(ctl,msg)
 {
 	if(msg=="")
	 {
	  msg="Please enter valid numeric data";
	 }

	if (isNaN(ctl.value))
	 {
		alert(msg);
		ctl.value="";
		ctl.focus();
		return (false);
	 }
	else
	 return (true);
 }
/*-----------------------------------------------------*/


//Equal Checking
function chk_equal(ctl1,ctl2,msg)
 {
   	if(msg=="")
	 {
	  msg="Value of these fields should be same";
	 }
	if(ctl1.value!=ctl2.value)
	 {
		alert(msg);
		ctl2.value="";
		ctl2.focus();
		return (false);
	 }
	 return (true);
 }
/*-----------------------------------------------------*/

//Option button & checkbox validation
function check(ctl,n,msg)      
	{
   	if(msg=="")
	 {
	  msg="Please select a value";
	 }

	var ctr=0;

		for(i=0;i<n;i++)
		 {
			if(ctl(i).checked==false)
			 {
				ctr=ctr+1;
			 }
		 }
			if (ctr==n)
			 {
				alert(msg);
				ctl(0).focus();
				return false;
			 }
		return true;
	}
/*-----------------------------------------------------*/
//Option button & checkbox value checking
function checkval(ctl,n,msg)      
	{
   	if(msg=="")
	 {
	  msg="Please select a value";
	 }

	var ctr=0;
    var strv=""
		for(i=0;i<n;i++)
		 {
           for(i=0;i<2;i++)
		     {		 
			    if(ctl(i).checked==true)
			     {
				  strv=i
				  ctr=ctr+1;
			     }
		     }	 
		 }
			if (strv != "")
			 {
				alert(msg);
				ctl(0).focus();
				return false;
			 }
			strv="" 
		return true;
	}
/*-----------------------------------------------------*/


//Popup window
function popup(theURL,winName,features) 
	{
		window.open(theURL,winName,features);
	}
/*-----------------------------------------------------*/

//Credit card validation script
	function cardval(s) 
	 {
		// remove non-numerics
		var v = "0123456789";
		var w = "";
		for (i=0; i < s.length; i++) {
		x = s.charAt(i);
		if (v.indexOf(x,0) != -1)
		w += x;
		}
		// validate number
		j = w.length / 2;
		if (j < 6.5 || j > 8 || j == 7) return false;
		k = Math.floor(j);
		m = Math.ceil(j) - k;
		c = 0;
		for (i=0; i<k; i++) {
		a = w.charAt(i*2+m) * 2;
		c += a > 9 ? Math.floor(a/10 + a%10) : a;
		}
		for (i=0; i<k+m; i++) c += w.charAt(i*2+1-m) * 1;
		return (c%10 == 0);
	 }
/*-----------------------------------------------------*/

function checkemail(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		  // alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		   // alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    //alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		   // alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		   // alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
	}




// Character counter
// fieldname, warningname, remainingname, maxchars
function CheckFieldLength(fn,wn,rn,mc) {
  var len = fn.value.length;
  if (len > mc) {
    fn.value = fn.value.substring(0,mc);
    len = mc;
  }
  document.getElementById(wn).innerHTML = len;
  document.getElementById(rn).innerHTML = mc - len;
}

	

function validateFormOnSubmit(theForm) {	
 
 var counter = 0;
 
 $("input,textarea").each(function(){
 
 	if($(this).attr('id') == "must")
	{
		if ($(this).attr("value").length == 0)
		{
			$(this).css("border", "2px solid #FFD2D2");
			counter++;
		}
		else
		{
			$(this).css("border", "1px solid #c8c8c8");
		}	
	}
 });
 
 if (counter > 0) {
	$("#msgdis").html('<div class="errormsg">Please fill the all required fields!</div>');
   return false;
 }
 return true;
}


function validateregformOnSubmit(theForm)
{

$("#msgdis").show();
 var counter = 0;
 
 $("input,textarea").each(function(){
 
 	if($(this).attr('id') == "must")
	{
		if ($(this).attr("value").length == 0)
		{
			$(this).css("border", "2px solid #FFD2D2");
			counter++;
		}
		else
		{
			$(this).css("border", "1px solid #c8c8c8");
		}	
	}
 });
 
 if (counter > 0) {
	$("#msgdis").html('<div class="errormsg">Please fill the all required fields!</div>');
   return false;
 }

	var name = $("input[name='name']").val();
	var username = $("input[name='username']").val();
	var pass = $("input[name='password']").val();
	var repass = $("input[name='repassword']").val();
	var email	= $("input[name='email']").val();
	var contact  = $("input[name='phno']").val();
	var code =  $("input[name='captcha']").val();
	var city =  $("input[name='city']").val();
	var state =  $("input[name='state']").val();
	var address =  $("textarea[name='address']").val();

	
	if(pass != repass)
	{
		$("#msgdis").html('<div class="errormsg">Passwords does n\'t match!</div>');
	return false;
	}

	if(!isValidEmail(email))
	{
			$("#msgdis").html('<div class="errormsg">Check with your email address</div>');
		return false;	
	}

		
		if(isNaN(contact))
		{
			$("#msgdis").html('<div class="errormsg">Invalid Contact Number (ex:9010090454)</div>');
			return false;
		}

$("#msgdis").val('');	

$.ajax({
			   type:"POST",
			   url:"ajax.php",
			   data:"action=register&name="+name+"&username="+username+"&password="+pass+"&email="+email+"&phno="+contact+"&city="+city+"&state="+state+"&address="+address+"&code="+code,
			   complete:function(data)
			   {	
			   		if(data.responseText == 1)
					{
						$("#msgdis").html('<div class="successmsg">Registration is success. Please Login.</div>');
						 document.forms["registerform"].reset();
					}else
					{
			   		$("#msgdis").html(data.responseText);
					}
			   }
			   
	   });
	

return false;
}


function isValidEmail(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}


function checkusername(username)
{
			$.ajax({
			   type:"POST",
			   url:"ajax.php",
			   data:"action=val_username&username="+username,
			   complete:function(data)
			   {				  
					$("#uidmsg").html(data.responseText);
			   }
		 });
}

function checkemail(email)
{
			$.ajax({
			   type:"POST",
			   url:"ajax.php",
			   data:"action=val_email&email="+email,
			   complete:function(data)
			   {				  
					$("#emsg").html(data.responseText);
			   }
		 });
}


