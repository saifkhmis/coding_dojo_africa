<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/style.css">
	<script type="text/javascript" src="/js/app.js"></script>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />	
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1 style="red">test</h1>
<div>
<table class="table">
<tr>
<th>Name<th/>
<th>Price<th/>
<tr/>

<c:forEach var="fruit" items="${fruits}">
	<tr>				
	<td ><c:out value="${fruit.name}"></c:out></td>
	<td><c:out value="$ ${fruit.price}"></c:out></td>
	</tr>
	</c:forEach>
</table>
</div>
</body>
</html>