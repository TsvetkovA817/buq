<?php
  if ($_FILES && $_FILES["lk_usrs_inp_cb1"]["error"]== UPLOAD_ERR_OK)
  {

  $blacklist = array(".php", ".phtml", ".php3", ".php4", ".html", ".htm", ".sql", ".js", ".cmd", ".exe");
  foreach ($blacklist as $item)
    if(preg_match("/$item\$/i", $_FILES['lk_usrs_inp_cb1']['name'])) exit;

  $type = $_FILES['lk_usrs_inp_cb1']['type'];
  $size = $_FILES['lk_usrs_inp_cb1']['size'];

  if (($type != "image/jpg") && ($type != "image/jpeg")) exit;

  if ($size > 1002400) exit;  


  if (!(isset($_POST["lk_usrs_folder_img"]) && isset($_POST["lk_usrs_id_img"]))){
    echo "2-Нет данных (номер каталога или id книги)!";
   exit;
   }
  $p= trim($_POST['lk_usrs_folder_img']);
  $id=trim($_POST['lk_usrs_id_img']);

  if (empty(trim($p)) || empty(trim($id))){
    echo "Нет данных (номер каталога или id книги)!";
    exit;
    }

  $dest_path="img/catalog/k" .$p."/";
  	if (!is_dir($dest_path)) {
		mkdir($dest_path, 0777, true);
	}
  $namefile1=$_FILES['lk_usrs_inp_cb1']['name'];
  $namefile1=trim($namefile1);

  $namefile2=$_FILES['lk_usrs_inp_cb2']['name'];
  $namefile2=trim($namefile2);

  $r1=false;
  $msg1='';
  if(!empty($namefile1)){
    $namekfile='cb1_'. $id .'.jpg';
    $uploadfile = $dest_path .$namekfile;
    $r1=move_uploaded_file($_FILES['lk_usrs_inp_cb1']['tmp_name'], $uploadfile);
    if($r1){
      $msg1='Файл ' . $namefile1 . ' успешно загружен в ' .$uploadfile;
    }
    else{
      $msg1='Не удалось загрузить файл '. $namefile1;
    }
  }


  $r1=false;
  $msg2='';
  if(!empty($namefile2)){
    $namekfile='cb2_'. $id .'.jpg';
    $uploadfile = $dest_path .$namekfile;
    $r1=move_uploaded_file($_FILES['lk_usrs_inp_cb2']['tmp_name'], $uploadfile);
    if($r1){
      $msg2='Файл ' . $namefile2 . ' успешно загружен в ' .$uploadfile;
    }
    else{
      $msg2='Не удалось загрузить файл '. $namefile2;
    }
  }
 
if (!empty($msg1) || !empty($msg2) ) {
    echo '<p>' . $msg1 . '</p>';		
    echo '<p>' . $msg2 . '</p>';		
} 

}

?>