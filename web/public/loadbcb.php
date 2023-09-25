<?php

if (!(isset($_POST["id"]) && isset($_POST["categ"]))){
  echo "3-Нет данных (номер каталога или id книги)!";
 exit;
}

$p= trim($_POST['categ']);
$id=trim($_POST['id']);
echo "Загружаем бланк: id=$id, categ=$p";

if (empty(trim($p)) || empty(trim($id))){
  echo "Нет данных (номер каталога или id книги)!";
  exit;
}

$dest_path="img/catalog/k" .$p."/";
$blfile1='img/catalog/k00/cb1_0.jpg';
$blfile2='img/catalog/k00/cb2_0.jpg';

if (!is_dir($dest_path)) {
  mkdir($dest_path, 0777, true);
}
  
for ($k=1; $k < 3; $k++) { 
    
    $namekfile='cb'.$k.'_'. $id .'.jpg';
    $destfile= $dest_path .$namekfile;
    $blfile='img/catalog/k00/cb'.$k .'_0.jpg';

    if(file_exists($blfile))
    {
      $r1=copy($blfile, $destfile);
      if($r1){
        $msg1='Бланк ' . $blfile . ' успешно загружен в ' .$destfile;
      }
      else{
        $msg1='Не удалось загрузить файл '. $blfile;
      }
    }  
    else {
       echo "The $blfile файл не существует.";
    }

}  

?>