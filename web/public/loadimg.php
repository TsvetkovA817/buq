<?php
  print_r($_FILES);
  if ($_FILES && $_FILES["somename"]["error"]== UPLOAD_ERR_OK)
  {

  $blacklist = array(".php", ".phtml", ".php3", ".php4", ".html", ".htm", ".sql", ".js", ".cmd", ".exe");
  foreach ($blacklist as $item)
    if(preg_match("/$item\$/i", $_FILES['somename']['name'])) exit;

  $type = $_FILES['somename']['type'];
  $size = $_FILES['somename']['size'];

  if (($type != "image/jpg") && ($type != "image/jpeg")) exit;

  if ($size > 1002400) exit;  


  if (isset($_POST["submit"])){
    if (empty($_POST['lk_folder'])){
    echo "Нет данных!";
    }
    echo " ".$_POST['lk_folder'];
   }
  $p= trim($_POST['lk_folder']);
  $dest_path="img/catalog/k" .$p."/";
  
  	if (!is_dir($dest_path)) {
		mkdir($dest_path, 0777, true);
	}
  $uploadfile = $dest_path .$_FILES['somename']['name'];
  $namefile=$_FILES['somename']['name'];

if (move_uploaded_file($_FILES['somename']['tmp_name'], $uploadfile)) {
    $success = 'Файл «' . $namefile . '» успешно загружен.';
} else {
    $error = 'Не удалось загрузить файл.';
}

if (!empty($success)) {
    echo '<p>' . $success . '</p>';		
} else {
    echo '<p>' . $error . '</p>';
}

}

?>