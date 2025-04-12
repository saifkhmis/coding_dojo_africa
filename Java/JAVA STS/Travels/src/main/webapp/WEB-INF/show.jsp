<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>
<div  class="text-center">
<h1 class="col-3">Expense Details</h1> <a href="/" class="col-3 offset-6">Go back</a>
</div>
<div class="modal-content">
<h1 class="text-center">Expense Name : <c:out value="${travel.name}"/></h1>
<h1 class="text-center">Expense Description : <c:out value="${travel.description}"/></h1>
<h1 class="text-center">Vendor : <c:out value="${travel.vendor}"/></h1>
<h1 class="text-center">Amount Spent : <c:out value="${travel.amount}"/></h1>
</div>
</body>
</html>