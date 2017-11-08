<?php

// Set email variables
$email_to = 'adresa_email@adresa.com';
$email_subject = 'Form submission';

// Set required fields
$required_fields = array('nume','email','mesaj');

// set error messages
$error_messages = array(
	'nume' => 'Introduceti un nume pentru a continua.',
	'email' => 'Introduceti o adresa de email valida pentru a continua.',
	'mesaj' => 'Va rugam introduceti un mesaj pentru a continua.'
);

// Set form status
$form_complete = FALSE;

// configure validation array
$validation = array();

// check form submittal
if(!empty($_POST)) {
	// Sanitise POST array
	foreach($_POST as $key => $value) $_POST[$key] = remove_email_injection(trim($value));
	
	// Loop into required fields and make sure they match our needs
	foreach($required_fields as $field) {		
		// the field has been submitted?
		if(!array_key_exists($field, $_POST)) array_push($validation, $field);
		
		// check there is information in the field?
		if($_POST[$field] == '') array_push($validation, $field);
		
		// validate the email address supplied
		if($field == 'email') if(!validate_email_address($_POST[$field])) array_push($validation, $field);
	}
	
	// basic validation result
	if(count($validation) == 0) {
		// Prepare our content string
		$email_content = 'New Website Comment: ' . "\n\n";
		
		// simple email content
		foreach($_POST as $key => $value) {
			if($key != 'submit') $email_content .= $key . ': ' . $value . "\n";
		}
		
		// if validation passed ok then send the email
		mail($email_to, $email_subject, $email_content);
		
		// Update form switch
		$form_complete = TRUE;
	}
}

function validate_email_address($email = FALSE) {
	return (preg_match('/^[^@\s]+@([-a-z0-9]+\.)+[a-z]{2,}$/i', $email))? TRUE : FALSE;
}

function remove_email_injection($field = FALSE) {
   return (str_ireplace(array("\r", "\n", "%0a", "%0d", "Content-Type:", "bcc:","to:","cc:"), '', $field));
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>

<!-- Contact Form Designed by James Brand @ dreamweavertutorial.co.uk -->
<!-- Covered under creative commons license - http://dreamweavertutorial.co.uk/permissions/contact-form-permissions.htm -->

	<title>Contact Form</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link href="contact/css/contactform.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/mootools/1.3.0/mootools-yui-compressed.js"></script>
	<script type="text/javascript" src="contact/validation/validation.js"></script>
    
	<script type="text/javascript">
var numeError = '<?php echo $error_messages['nume']; ?>';
		var emailError = '<?php echo $error_messages['email']; ?>';
		var mesajError = '<?php echo $error_messages['mesaj']; ?>';
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
    </script>

</head>

<body onload="MM_preloadImages('contact/images/x.png')">



<div id="formWrap"> 
<div id="form">
<?php if($form_complete === FALSE): ?>
	<form action="contact.php" method="post" id="mesaje_form">

		<div class="row">

			<div class="label">Numele dumnveavoastra</div><!--end .label-->
			<div class="input">
            <input type="text" id="nume" class="detalii" name="nume" value="<?php echo isset($_POST['nume'])? $_POST['nume'] : ''; ?>"/><?php if(in_array('nume', $validation)): ?><span class="error"><?php echo $error_messages['nume']; ?></span><?php endif; ?>
            </div><!--end .input-->
            <div class="continut">ex.:Patriche Alexandru sau Jbanca Ioan</div><!--end .continut-->
		</div><!--end .row-->
        
        <div class="row">

			<div class="label">E-mail</div><!--end .label-->
			<div class="input">
            <input type="text" id="email" class="detalii" name="email" value="<?php echo isset($_POST['email'])? $_POST['email'] : ''; ?>"/><?php if(in_array('email', $validation)): ?><span class="error"><?php echo $error_messages['email']; ?></span><?php endif; ?>
            </div><!--end .input-->
            <div class="continut">Adresa de email este confidentiala</div><!--end .continut-->
		</div><!--end .row-->
        
         <div class="row">

			<div class="label">Mesajul dumneavoastra</div><!--end .label-->
			<div class="input">
            <textarea id="mesaj" name="mesaj" class="mess"><?php echo isset($_POST['mesaj'])? $_POST['mesaj'] : ''; ?></textarea><?php if(in_array('mesaj', $validation)): ?><span class="error"><?php echo $error_messages['mesaj']; ?></span><?php endif; ?>
            </div><!--end .input-->
		</div><!--end .row-->
        
        <div class="submit">
        <input type="submit" id="submit" name="submit" value="Trimite mesaj"/>
        
        </div><!--end .submit-->
        </form>	
        <?php else: ?>
<p>Multumim pentru mesajul acordat!</p>
<?php endif; ?>

</div><!--end formWrap-->
</div><!--end #form-->

</body>
</html>
