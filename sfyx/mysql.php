<?php
$account 	= $_POST['account'];
$password 	= $_POST['password'];

// 如果账号和密码为空，则不能完成注册
if($account === '' || $password === '') {
	echo '请输入账号或者密码！';
	exit;
}


// 将数据写入到数据库中
$mysqli = new mysqli('localhost', 'root', 'root', 'skylyk');

$sql = 'insert into users(account, password) values("'.$account.'", "'.$password.'")';

// 执行SQL语句
$mysqli->query($sql);


header('location:http://localhost/sfyx/顺丰优选登录界面.html');