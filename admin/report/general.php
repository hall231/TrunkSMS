<?php
/* Have you got Christ?
 * TrunkSMS GPL project www.trunksms.com.
 * 
 * @author  Daser Solomon Sunday songofsongs2k5@gmail.com,  daser@trunksms.com
 * @version 0.1
 * @License
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Library General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor Boston, MA 02110-1301,  USA
 */
if (!isset ($_SESSION)) session_start();

if(isset($_SESSION['root']) && $_SESSION['root'] == "admin"){
  	
}else{
header("location: ../");
}

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title>TrunkSMS root Panel</title>

<script src="./src/min.rico.js" type="text/javascript"></script>
<link href="./src/css/min.rico.css" type="text/css" rel="stylesheet" />
<link href="./src/css/greenHdg.css" type="text/css" rel="stylesheet" />
<link href="./client/css/demo.css" type="text/css" rel="stylesheet" />
<?php
require "applib.php";

OpenDB();
$sqltext="select phoneNo,email, SMSunits, org, activated, emailCode, phoneCode, address, how, AccountNo from TRUNKregistration";
CloseApp();
$_SESSION['ex3']=$sqltext;
require "chklang2.php";
?>
<script type='text/javascript'>
var ex3,buffer;

Rico.onLoad( function() {
  // filterUI='t' --> text box
  // filterUI='s' --> select list
  var grid_options = {
    frozenColumns:    3,
    canFilterDefault: false,  // turn off filter menu items
    FilterLocation:   -1,     // put filter on a new header row
    saveColumnInfo: {width:true, filter:true, sort:true},
    columnSpecs:  [{filterUI:'t',width:150},{filterUI:'t',width:150},,
                   {filterUI:'t',width:100}, {filterUI:'s',width:100},
                   ,,]
  };
  buffer=new Rico.Buffer.AjaxSQL('ricoXMLquery.php', {TimeOut:<?php print array_shift(session_get_cookie_params())/60 ?>});
  ex3=new Rico.LiveGrid ('ex3', buffer, grid_options);
  ex3.menu=new Rico.GridMenu();
});
</script>

<style type="text/css">
input, select { font-weight:normal;font-size:8pt;}
tr.ex3_hdg2 div.ricoLG_cell { 
  height:     1.4em;   /* the text boxes require a little more height than normal */
  text-align: left;
  background-color: #deeecd;
}
.ricoLG_cell {
  white-space: nowrap;
}

body{
font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif;
margin:0;
background: #f6f6f6;
padding:0;
}

#topsection{
height: 50px;
background: url(../../images/header_back.jpg) left repeat-x;
font-size: 30px;
}

#topsection h1{
margin: 0;
padding-top: 15px;
}

#header{
font-size:12px;
padding-right: 10px;
border-right: none;
border-top: none;
border-left: none;	
text-align: right;
margin-bottom: 3px;
margin-top: 3px;
}

#footer{
clear: left;
margin-top: 5px;
text-align: center;
font-size: 11px;
color: #9d9f13;
text-align: center;
}

</style>
</head>


<body>
<div id = "header">Welcome <?php echo $_SESSION['username'] ?>!</div>
<div id="topsection">
<div class="innertube">
<img src = "../../images/logo2.gif";
<img src = "../../images/yourworld.gif">
</div>

</div><!-- end of topsection -->
<h1> Customer Registration Details</h1>
<p class="ricoBookmark">
<a id='ex3_filterLink' href="#"></a>
<span id="ex3_bookmark">&nbsp;</span></p>
<table id="ex3" class="ricoLiveGrid" cellspacing="0" cellpadding="0">
<thead>
  <tr id='ex3_main'>
	  <th class='ricoFrozen'>Phone Number</th>
	  <th>Email</th>
	  <th>SMS units</th>
	  <th>Organization/Name</th>
	  
	  <th>Activated</th>
	  <th>Email Code</th>
	  <th>Phone Code</th>
	  <th>Address</th>
	  <th>How</th>
	  <th>Account No</th>
	  
  </tr>
</thead>
</table>
<div id="footer"><?php include("../../includes/footer.php") ?></div>
</body>
</html>

