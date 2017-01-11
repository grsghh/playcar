<?php
  $con = mysqli_connect("localhost","root","","playBar");
//if($con){
//  echo "链接成功";
//}else{
//	 echo "链接失败";
//	 exit();
//}
  //设置编码格式
  mysqli_query($con,"set names utf8");
  //编写sql语句
  $sql = "SELECT * FROM users";
  //执行sql语句
  $result = mysqli_query($con, $sql);
  //接口请求标识
   $act = $_GET["act"];
   switch($act){
   	case "login":
   	    $phone = $_GET["phone"];
	    $password = $_GET["password"];
		$sql = "SELECT phone FROM users WHERE phone = '{$phone}'";
		$result = mysqli_query($con, $sql);
		if($result){//如果找到数据
			$sql2 = "SELECT password FROM users WHERE password = '{$password}'";
		    $result2 = mysqli_query($con, $sql);
			if($result2){//如果密码正确
			    $arr = ["err"=>0,"msg"=>"登录成功了"];
		   		 echo json_encode($arr);
				
			}else{
				$arr = ["err"=>1,"msg"=>"登录失败"];
				echo json_encode($arr);		
			}
		}else{
			$arr = ["err"=>1,"msg"=>"没有这个账号"];
			 echo json_encode($arr);
		}
		break;
	case "reg":
		$phone = $_GET["phone"];
		$password = $_GET["password"];
		//判断是否已经有人注册
		$sql_two = "SELECT phone FROM users WHERE phone = '{$phone}'";
		$result = mysqli_query($con, $sql_two);
		if(!$result){
			 $arr = ["err"=>2,"msg"=>"已经有人注册了"];
			 echo json_encode($arr);
		}else{
			$sql = "INSERT INTO users(id,phone,password) VALUES (null,'{$phone}','{$password}')";
		mysqli_query($con, $sql);
		//判断是否插入成功
		$insertId = mysqli_insert_id($con);
		if($insertId>0){//成功
			$arr = ["err"=>0,"msg"=>"注册数据成功了"];
		    echo json_encode($arr);
		}else{//失败
			$arr = ["err"=>1,"msg"=>"注册数据失败了"];
			echo json_encode($arr);
		}
	  }
		
   	   break;
//case 'reg':
//			$phone = $_GET["phone"];
//			$password = $_GET["password"];
//			//先判断要注册的账号是否存在
//			$sql = "select * from users where phone='{$phone}'";
//			$result = mysqli_query($con, $sql);
//			if(mysqli_fetch_object($result) != null){
//				$msg = ["err"=>3,"msg"=>"账号已被注册"];
//				echo json_encode($msg);
//			}else{//如果账号未被注册
//				$sql= "insert into users(id,phone,password) values(null,'{$phone}','{$password}')";
//				mysqli_query($con, $sql);
//				$insertId = mysqli_insert_id($con);
//				echo $insertId;
//				if($insertId >0){//创建成功
//					$msg = ["err"=>0,"msg"=>"注册成功"];
//					echo json_encode($msg);
//				}else{
//					$msg = ["err"=>4,"msg"=>"注册失败"];
//					echo json_encode($msg);
//				}
//			}
//			break;
   }
  //关闭数据库
  mysqli_close($con);
?>