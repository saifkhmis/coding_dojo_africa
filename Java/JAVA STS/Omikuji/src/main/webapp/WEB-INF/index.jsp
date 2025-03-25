<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Send an Omikuji !</h1>
<div class="w-50 p-3 " >
<form action="show" method="POST">
<label class="form-label">Pick any number from 5 to 25 :</label>
<input type="number" class="form-control" name="number">
<br>
<label class="form-label">Enter the name of any city:</label>
<input type="text" class="form-control" name="city">
<br>
<label class="form-label">Enter the name of any person:</label>
<input type="text" class="form-control" name="name">
<br>
<label class="form-label">Enter professional endeavor or hobby:</label>
<input type="text" class="form-control" name="hobby">
<br>
<label class="form-label">Enter any type of living thing:</label>
<input type="text" class="form-control" name="cars">
<br>
<label class="form-label">say something nice to someone:</label>
<input type="text" class="form-control" name="comment">
<br>
<label class="form-label">Send and show a friend </label>
<input type="submit"  class="btn btn-dark" value="Send">
</form>
</div>
</body>
</html>