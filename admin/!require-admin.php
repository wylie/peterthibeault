<?php




// *************************************************
// break apart the image, and path, stored in the DB
// *************************************************
function getPath($str) {
	$ext = substr($str, 0, 13);
	return $ext;
}
function getName($str) {
	$ext = substr($str, 13, -8);
	return $ext;
}
function getNumber($str) {
	$i = strrpos($str,".");
	if (!$i) { return ""; }
	$l = strlen($str) - $i;
	$ext = substr($str,$i-5,$l-1);
	return $ext;
}
function getSize($str) {
	$i = strrpos($str,".");
	if (!$i) { return ""; }
	$l = strlen($str) - $i;
	$ext = substr($str,$i-2,$l-2);
	return $ext;
}
function getExt($str) {
	$i = strrpos($str,".");
	if (!$i) { return ""; }
	$l = strlen($str) - $i;
	$ext = substr($str,$i,$l);
	return $ext;
}




// ********************
// get & reformat date
// ********************
function formatDate($works_date_entered) {
	$phpdate = strtotime( $works_date_entered );
	$mysqldate = date( 'n/j/Y', $phpdate );
	echo '<div class="display-date">' . $mysqldate . '</div>';
}




// *************************
// submit new news to the DB
// *************************
function addNews() {
	if(isset($_POST['submitted'])) {
		require('!dbconnect.php');
		if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
		} else {
			// get the new news item
			$content = $_POST['content'];
			$news_date_entered = date('Y-m-d');
			if(!$content) {
				echo '<p class="error">I believe you forgot to enter some news!</p>';
			} else {
				// gather together the new news and add them to the table
				$query_submit = mysql_query("INSERT INTO news (news_entry_id, content, news_date_entered) VALUES (0, '$content', '$news_date_entered')");
				// close the DB connection
				mysql_close($dbc);		
				echo '<p class="success">Your news has been posted and saved!</p>';
			} // end if(!$content)
		} // end if(!$dbc)
	} // end submitted
} // end submitnews()




// ****************************
// get the old news from the DB
// ****************************
function getNews() {
	require('!dbconnect.php');
	if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {
		// get the old news items
		$query_get = "SELECT * FROM news ORDER BY news_entry_id DESC LIMIT 10";
		if($r = mysql_query($query_get)) {
			while($row = mysql_fetch_array($r)) {
				include('!dbvariables.php');
				// make the date perty for the feed
				$content = $row['content'];
				$news_date_entered = $row['news_date_entered'];
				// write the entries
				echo '
				<form action="news/news-delete.php" method="post">	
					<p class="news-item"><span class="news-item-date">' . $news_date_entered . '</span>' . $content . '
						<button class="button">Delete</button>
						<input type="hidden" name="id" value="' . $news_entry_id . '" />
					</p>
				</form>
				';
			}
		}
		// close the DB connection
		mysql_close($dbc);		
	} // end if(!$dbc)
} // end oldnews()




?>