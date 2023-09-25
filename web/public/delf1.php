<?php

if (!(isset($_POST["id"]) && isset($_POST["categ"]))){
    echo "2-Нет данных (номер каталога или id книги)!";
   exit;
}

$p= trim($_POST['categ']);
$id=trim($_POST['id']);

if (empty(trim($p)) || empty(trim($id))){
  echo "Нет данных (номер каталога или id книги)!";
  exit;
}

$dest_path="img/catalog/k" .$p."/";

for ($k=1; $k < 3; $k++) { 
    
    $namekfile='cb'.$k.'_'. $id .'.jpg';
    $delfile= $dest_path .$namekfile;

$filename = $delfile;
if(file_exists($filename))
{
if (!unlink($filename)) {
 echo ("<br />Во время удаления $filename file произошла ошибка");
 }
else {
 echo ("</br>The <b>$filename</b> файл был удален.");
 }
}
else
 echo "<br />The <b>$filename</b> файл не существует.";
}

?>