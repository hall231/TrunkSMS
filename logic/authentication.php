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
session_start();
if(strlen($_SESSION['phoneNo']) == 0){
require_once "../includes/trunk_config.php";
include "misc_function.php";
$conn =mysql_connect(HOST,USER,PASS) or die("Skywalkers Nig: Cannot Connect To the Database Server");
	mysql_select_db(DB,$conn) or die ("Skywalkers Nig: Cannot Select Database Please Try Again later");
//if(isset($_POST['submit'],$_POST['phoneNo'],$_POST['password']) && strlen($_POST['phoneNo']) < 255 && strlen($_POST['password'] < 255) ){
if(1){
  	$phoneNo = addslashes(trim($_POST['phoneNo']));
  	$password = addslashes(trim($_POST['password']));
  $query = "SELECT * FROM TRUNKregistration WHERE phoneNo = '$phoneNo' AND password = '$password' AND activated = 0";
  	
  $result = @mysql_query($query);
  $num = 0;
  $num = @mysql_num_rows($result);
  if($num == 1){
  echo "<div class=\"ui-widget\">";
echo "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em; margin-top: 20px; \">";
				echo "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>"; 
				echo "<strong>Alert:</strong> Sorry! Your account has not been activated. <br/>Activate!!</p>";	
				echo "</div></div>";
				/*
  echo "<div id = \"failure\">";
	echo "Sorry! Your account has not been activated. <br/>Activate!";
	echo "</div> <!-- end failure -->";*/
	getActivationForm($phoneNo, $password);
  }else{
	$sql = "SELECT * FROM TRUNKregistration WHERE phoneNo = '$phoneNo' AND password = '$password' AND activated = 1";
	$result = @mysql_query($sql) or die("Error on Line: " . __LINE__ . mysql_error());
	$num = 0;
	$num = @mysql_num_rows($result);
	if($num == 1){
		while($row = @mysql_fetch_array($result)){
		$name = ucwords(strtolower($row['org']));
		$phone = $row['phoneNo'];
		$balance = $row['SMSunits'];
		$AccountNo = $row['AccountNo'];
		$countryCode = $row['countryCode'];
		$email = $row['countryCode'];
		}
		$_SESSION['name'] = $name;
		$_SESSION['phoneNo']   = $phone;
		$_SESSION['balance']   = $balance;
		$_SESSION['acctNo']   =  $AccountNo;
		$_SESSION['countryCode']     = $countryCode;
		$_SESSION['email']     = $email;
		@mysql_free_result($result);
		$result = @mysql_query("SELECT * FROM TRUNKsuported WHERE code = '$countryCode' ");
		$row = @mysql_fetch_array($result);
		$_SESSION['country'] = $row ['country'];
		//start session with $phoneNo and $password and $name
		
		echo "<div class=\"ui-widget\">";
				echo "<div class=\"ui-state-highlight ui-corner-all\" style=\"margin-top: 20px; padding: 0 .7em;\">"; 
				echo "<p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span>";
				echo "Welcome {$name}! your session has started. <p>Click <a href = \"./\">here to Continue.</a></p></p>";
				echo "</div></div>";

/*
		echo "<div id = \"success\">";
		echo "Welcome {$name}! your session has started <a style = \"text-decoration: none;\" href = \"./\">Continue..</a>";
		echo "</div> <!-- end success -->";*/
	}else{
	echo "<div class=\"ui-widget\">";
echo "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;  margin-top: 20px; \">";
				echo "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>"; 
				echo "<strong>Alert:</strong> The provided login Credential does not exist.</p>";
				
echo "</div></div>";
/*
	echo "<div id = \"failure\">";
	echo "The provided login Credential does not exist";
	echo "</div> <!-- end failure -->";
	echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\">back</a></div>";
	*/
	
	}
    }
}else{
echo "<div class=\"ui-widget\">";
echo "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em; margin-top: 20px; \">";
				echo "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>"; 
				echo "<strong>Alert:</strong> You are not authorize to view this page.</p>";
				echo "</div></div>";
	/*			
echo "<div id = \"failure\">";
	echo "You are not authorize to view this page";
	echo "</div> <!-- end failure -->";
	echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\">back</a></div>";*/
}

}else{
echo "<div class=\"ui-widget\">";
echo "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;  margin-top: 20px; \">";
				echo "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>"; 
				echo "<strong>Alert:</strong> Please click <a href = \"./\">here</a> to continue</p>";
echo "</div></div>";
/*
echo "<div id = \"failure\">";
	echo "Another user with the username {$_SESSION['name']} is in already. click <a href = \"./\">here</a> ";
	echo "</div> <!-- end failure -->";
	echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\">back</a></div>";*/
}
?>
