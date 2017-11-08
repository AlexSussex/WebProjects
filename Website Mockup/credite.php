<?php 
if (isset($_POST['titlu'])){     
      $rezultat;
      $titlu=$_POST['titlu'];
      $cantitate=$_POST['aur_gramaj'];
      $rezultat=$_POST['aur_gramaj_rezultat'];
      $rezultat=0;
      $pret;
            if ($titlu=="12") {
                 $pret=85;
            }
            elseif ($titlu=="14") {
                  $pret=96;
            }
            elseif ($titlu=="18") {
                  $pret=123;
            }
            elseif($titlu=="21"){
                  $pret=150;
            }


      $rezultat=$pret*$cantitate;
      }
else
      {
            $rezultat=0;
      }
if (isset($_POST['titlu_argint'])){  

      $rezultatArgint;
      $titluArgint=$_POST['titlu_argint'];
      $cantitate=$_POST['argint_gramaj'];
      $rezultatArgint=$_POST['argint_gramaj_rezultat'];
      $rezultatArgint=0;
      $pret;
            if ($titluArgint=="925") {
                 $pret=2.4;
            }
            else  {
                  $pret=2.5;
            }
            
      $rezultatArgint=$pret*$cantitate;
      }
else
      {
            $rezultatArgint=0;
      }

 ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
	<title>Amanet Aladeen </title>
	<link rel="stylesheet" type="text/css" href="stylesheet/style.css">

<!-- NIVO SLIDER-->
<link rel="stylesheet" href="stylesheet/nivo-slider.css" type="text/css" media="screen" />
<link rel="stylesheet" href="stylesheet/default/default.css" type="text/css" media="screen" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery.nivo.slider.pack.js" type="text/javascript"></script>

</head>
<body>
      <div id="general">
            <div id="color-overlay">
      	<div id="header">
      		<div id="header_logo">
      			<img src="img/logo.png" alt="logo Amanet Aladeen" />
      		</div>	<!-- ENDS header_logo -->
      		<div id="header_search">
      			<form method="post" action="search.php">
      			<input type="submit" id="search_button" value="" />
      			<input type="text" placeholder="cauta produs" size="20" />
      			</form>
      		</div><!-- ENDS header_search -->
      		<div id="header_menu">
      				<ul id="header_nav">
      					<li><A HREF="index.php">Acasa</A></li>
      					<li><A HREF="#">Ce cumparam?</A></li>
      					<li><A HREF="credite.php">Credite</A></li>
      					<li><A HREF="#">Ce vindem?</A></li>
      					<li><A HREF="contact.php">Contact</A></li>
      				</ul>
      		</div><!-- ENDS header_menu -->		
      	</div><!-- ENDS HEADER -->
      	<div class="slider-wrapper theme-default">
                <div id="slider" class="nivoSlider">
                    <img src="img/slider_pic1.png" alt="" />
                   <!-- <a href="http://dev7studios.com"><img src="images/slide2.jpg" alt="" title="#htmlcaption" /></a> -->
                    <img src="img/slider_pic2.png" alt="" />
                    <img src="img/slider_pic3.png" alt="" />
                </div>
            </div>
            <div id="htmlcaption" class="nivo-html-caption">
                <strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>.
            </div>
            </div>
            <script type="text/javascript">
            $(window).load(function() {
                $('#slider').nivoSlider({effect:'boxRainGrow'});
            });
            </script>
            <!-- ENDS slider -->

      	<div id="main">
      		<div id="content">
      			<div class="content_credite"> 
      				<div class="tip_credit">
      					<h3 class="titlu-credit">Credit pe termen scurt (de la 5 la 30 de zile)</h3>
                                    <label class="conditii">Conditii de creditare:</label>
                                    <ul class="lista-conditii">
                                          <li>contractul de imprumut pe termen scurt se poate incheia pe o perioada minima de 5 zile si o perioada maxima de 30 de zile;</li>
                                          <li>contractul de imprumut pe termen scurt se poate prelungi pentru o perioada cuprinsa intre 5 si 30 de zile, ori de cate ori doreste clientul;</li>
                                          <li>cuantumul comisionului aferent perioadei de asteptare este cel stabilit la incheierea contractului de imprumut;</li>
                                          <li>perioada de asteptare dupa termenul scadent este de 15 zile calendaristice;</li>
                                          <li>comisionul este recalculabil in functie de perioada efectiva a imprumutului, dar nu mai putin de 5 zile.</li>
                                    </ul>
                                     <label class="conditii">Garantii acceptate:</label>
                                     <ul class="lista-conditii">
                                          <li>bijuterii sau fragmente din aur si argint de 12k, 14k, 18k si 21k;</li>
                                          <li>telefoane mobile;</li>
                                          <li>aparatura audio-video;</li>
                                          <li>ceasuri.</li>
      				</div><!-- ENDS Credit_scurt_TEXT -->		
      			</div><!-- ENDS content_articol 1 -->
                     
                              <div class="content_credite"> 
                              <div class="tip_credit">
                                    <h3 class="titlu-credit">Credit pe termen lung (de la 60 la 180 de zile)</h3>
                                    <label class="conditii">Conditii de creditare:</label>
                                    <ul class="lista-conditii">
                                          <li>contractul de imprumut pe termen lung se poate incheia pe o perioada minima de 60 de zile si o perioada maxima de 180 de zile;</li>
                                          <li>contractul de imprumut pe termen scurt se poate prelungi pentru o perioada cuprinsa intre 5 si 60 de zile, cu conditia achitarii integrale a comisionului initial;</li>
                                          <li>cuantumul comisionului aferent perioadei de asteptare este cel stabilit la incheierea contractului de imprumut;</li>
                                          <li>perioada de asteptare dupa termenul scadent este de 5 zile calendaristice.</li>
                                    </ul>
                                     <label class="conditii">Garantii acceptate:</label>
                                     <ul class="lista-conditii">
                                          <li>bijuterii sau fragmente din aur si argint de 12k, 14k, 18k si 21k.</li>
                              </div><!-- ENDS Credit_lung_TEXT -->           
                        </div><!-- ENDS content_articol 1 -->
      			

      		</div><!-- ENDS content -->
      		<div id="main_sidebar">
      			<div id="sidebar_aur">
      				<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
      					<label class="titlu">
      						Calculator credit aur
      					</label>
      					<span class="aur-radio"><input type="radio" id="testdetest" name="titlu" value="12"/>12K<br /></span>
      					<span class="aur-radio"><input type="radio" name="titlu" value="14"/>14K<br /></span>
      					<span class="aur-radio"><input type="radio" name="titlu" value="18"/>18K<br /></span>
      					<span class="aur-radio"><input type="radio" name="titlu" value="21"/>21K<br /></span>
      					<span class="text-gramaj"><label class="gramaj">
      						Gramaj
      					</label></span>
      					<span class="aur-gramaj"><input type="text" name="aur_gramaj" /><br/></span>
      					<div class="aur-gramaj-textarea">
                                          <label class="aur-pret">
                                          1g aur 12K = 85.00 RON
                                          </label>
                                          <label class="aur-pret">
                                                1g aur 14K = 96.00 RON
                                          </label>
                                          <label class="aur-pret">
                                                 1g aur 18K = 123.00 RON
                                          </label>
                                          <label class="aur-pret">
                                                1g aur 21K = 150.00 RON
                                          </label>
                                          
      		                  </div>
						<input type="image" id="aur_buton" name="calculeaza_aur" src="img/btn_Calculeaza1.png" /><br/>
						<label class="aur_valoare">
							Valoare
						</label>
                                    <input type="text" name="aur_gramaj_rezultat" value="<?php echo '  '. $rezultat.' RON'; ?>">
						<label id="aur_rezultat" visibility="hidden" value="">
							
						</label>
						<label class="informativ">
							Rezultatul este pur informativ!
						</label>
      				</form><!-- ENDS FORM AUR -->
      			</div><!-- ENDS sidebar_aur -->
      			<div id="sidebar_argint">
      				<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
      					<label class="titlu">
      						Calculator credit argint
      					</label>
      					<span class="argint-pret"><input type="radio" name="titlu_argint" value="925"/>925K</span>
      					<span class="argint-pret"><input type="radio" name="titlu_argint" value="950"/>950K<br /></span>
      					<span class="text-gramaj"><label class="gramaj">
      						Gramaj
      					</label></span>
      					<span class="aur-gramaj"><input type="text" name="argint_gramaj" /><br/></span>
      				
                                    <div class="aur-gramaj-textarea">
                                          <label class="aur-pret">
                                          1g argint 925K = 2.40 RON
                                          </label>
                                          <label class="aur-pret">
                                          1g argint 950K = 2.50 RON   
                                          </label>
                                    </div>
						<input type="image" id="argint_buton" src="img/btn_Calculeaza1.png"/><br/>
						<label class="aur_valoare">
							Valoare:
						</label>
                                    <input type="text" name="argint_gramaj_rezultat" value="<?php echo '  '. $rezultatArgint.' RON'; ?>">
						<label id="argint_rezultat" visibility="hidden" value="">
							
						</label>
						<label class="informativ">
							Rezultatul este pur informativ!
						</label>
      				</form><!-- ENDS form_argint -->
      			</div><!-- ENDS sidebar_argint -->
      			
      		</div>	<!-- ENDS sidebar -->
      	</div><!-- ENDS main -->
            <div id="footer-overlay">
      	<div id="footer">
      		<div id="footer_menu">
      			<ul id="footer_nav">
      				<li><a href="#">Acasa</a></li>
      				<li><a href="#">Ce cumparam?</a></li>
      				<li><a href="#">Credite</a></li>
      				<li><a href="#">Ce vindem?</a></li>
      				<li><a href="#">Contact</a></li>
      			</ul>
      		</div>
      		<div id="footer_about">
      			<p id="descriere-footer">Firma a fost infiintata in anul 2012. Ne reprezinta seriozitatea, rapiditatea transferurilor, preturile bune si comisioanele mici.</p>
      		</div>
      		<div id="footer_contact">
      			<form method="post" id="contact" action="contact.php">
      				<label>
      					Nume:
      				</label>
      				<input type="text" id="text_nume" name="nume" size="5" maxlength="25" placeholder="ex. Alex Patriche" /><br/>
      				<label>
      					Email:
      				</label>
      				<input type="text" id="text_email"name="email" size="5" maxlength="20" placeholder="alex.patriche@email.com"><br/>
      				<span id="mesaj"><label>
      					Mesaj:
      				</label></span>
      				<textarea  rows="10" cols="26" placeholder="Mesajul dumneavoastra aici." id="text_mesaj" name="mesaj">
      				</textarea>
      				<input class="footer_buton" type="image" src="img/btn_trimite2.png" width="100px" height="30px">
      			</form>
      		</div>
      	</div><!-- ENDS footer-->	
            </div>		
      </div><!-- ENDS GENERAL-->
</body>
</html>
