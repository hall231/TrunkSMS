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
if(strlen($_SESSION['phoneNo']) > 0){
require_once "../includes/trunk_config.php";
include "misc_function.php";
require_once "getprocesedshedmesg.php";

$phoneNo = $_SESSION['phoneNo']; //session variable
	$conn =@mysql_connect(HOST,USER,PASS) or die("Skywalkers Nig: Cannot Connect To the Database Server");
	mysql_select_db(DB,$conn) or die ("Skywalkers Nig: Cannot Select Database Please Try Again later");
	//$phoneNo make sure session exist
	if(1){
	$num = 0;
	$num2 = 0;
	
	$sql = "SELECT * FROM TRUNKsheduleMultiple WHERE phoneNo = '$phoneNo' AND sent = 0";
	$sql2 = "SELECT * FROM TRUNKsheduleSingle WHERE phoneNo = '$phoneNo' AND sent = 0";
	$result = @mysql_query($sql);
	$result2 = @mysql_query($sql2);
	$num = @mysql_num_rows($result);
	$num2 = @mysql_num_rows($result2);

		
		if($num != 0 || $num2 != 0 ){
		
		echo "<div class=\"ui-widget\">";
				echo "<div class=\"ui-state-highlight ui-corner-all\" style=\"margin-top: 20px; padding: 0 .7em;\">"; 
				echo "<p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span>";
				echo "<div style = \"margin-top:10px; padding-top: 5px; color: blue; font-size: 12px;\">Please <strong>note</strong> that scheduled SMS that are sent are automatically deleted after notifications and that your account is not debited until scheduled SMS are sent.</div>";
				
				echo "</p>";
				echo "</div></div>";
				
		/*echo "<div style = \"margin-top:10px; padding-top: 5px; color: blue; font-size: 12px;\">Please note that sheduled SMS that are sent are automatically deleted after notifications and that your account is not debited until sheduled SMS are sent.</div>";*/
		echo "<div class=\"ui-widget\">";
				echo "<div class=\"ui-widget-content ui-corner-all\" style=\"margin-top: 20px; padding: 0 .7em; font-size: 11px;\">"; 
				echo "<p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span>";
				echo "<h3><strong>Message Queues</strong></h3>"; 
				echo "<table width = \"100%\"><tr><td><u>S/N</u></td><td><u>Name</u></td><td><u>To</u></td><td><u>Times</u></td><td><u>Body</u></td><td><u>delete</u></td></tr>";
					while($row = mysql_fetch_array($result)){
					echo "<tr>";
					$mesg = $row['mesg'];
					$mesgid = $row['id'];
					$smsName =  $row['smsName'];
					$to = $row['category'];
					$time = parseTime($row['times']); //this should convert it to days
					
					echo "<td>" . ++$count . "</td><td>$smsName</td><td>$to</td><td>$time</td><td>";
					print substr($mesg,0,15) . "..</td>";
					
					echo "<td><a href = \"#\" onClick = \"delQueuedmesg('sheduleMultiple',$mesgid); return false;\">del</a></td></tr>";
					}
		
					while($row2 = mysql_fetch_array($result2)){
					echo "<tr>";
					$mesgid = $row2['id'];
					$mesg = $row2['mesg'];
					$smsName =  $row2['smsName'];
					$to = $row2['tophone'];
					$time = parseTime($row2['times']); //this should convert epoch to real date and times
					
					echo "<td>" . ++$count . "</td><td>$smsName</td><td>$to</td><td>$time</td><td>";
					print substr($mesg,0,15) . "..</td>";
					echo "<td><a href = \"#\" onClick = \"delQueuedmesg('sheduleSingle',$mesgid); return false;\">del</a></td></tr>";
					}
					
				echo "</table>";
				echo "</p>";
				echo "</div></div>";
				/*
				echo "<div id = \"success\">";
				echo "Entry was Successfuly deleted";
				echo "</div> <!-- end success -->";
				echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\"  onClick = \"getphoneBook(); return false;\">Refresh PhoneBook</a> | <a style = \"text-decoration: none;\" href = \"./\" onClick = \"getSMSForm(); return false;\">back</a></div>";	*/
		}else{
				echo "<div class=\"ui-widget\">";
				echo "<div class=\"ui-widget-content ui-corner-all\" style=\"margin-top: 20px; padding: 0 .7em;\">"; 
				echo "<p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span>";
				echo "<h4><strong>Queue</strong></h4> Your Message queue is empty</p>";
				echo "</div></div>";
		
		}
	
	
	}else{
	echo "<div class=\"ui-widget\">";
echo "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;  margin-top: 20px; \">";
				echo "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>"; 
				echo "<strong>Alert:</strong> Oops! is either your session has espired or you did not click the delete link.</p>";
				echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\"  onClick = \"getSMSForm(); return false;\">back</a></div>";
echo "</div></div>";
/*
	echo "<div id = \"failure\">";
	echo "Oops! is either your session has espired or you did not click the delete link";
	echo "</div> <!-- end failure -->";
	echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\"   onClick = \"getSMSForm(); return false;\">back</a></div>";	*/
	
	}
}else{
echo "<div class=\"ui-widget\">";
echo "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;  margin-top: 20px; \">";
				echo "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>"; 
				echo "<strong>Alert:</strong> Your session has expired. click <a href = \"./\">here</a></p>";
					echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\"   onClick = \"getSMSForm(); return false;\">back</a></div>";

echo "</div></div>";
/*
echo "<div id = \"failure\">";
	echo "Another user with the username {$_SESSION['name']} is in already. click <a href = \"./\">here</a> ";
	echo "</div> <!-- end failure -->";
	echo "<div  class = \"back\"><a style = \"text-decoration: none;\" href = \"./\"   onClick = \"getSMSForm(); return false;\">back</a></div>";*/
}


	?>
