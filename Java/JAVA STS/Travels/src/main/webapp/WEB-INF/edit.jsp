<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<title>Insert title here</title>
</head>
<body>
<div  class="text-center">
<h1 class="col-3">Edit Expense</h1> <a href="/" class="col-3 offset-6">Go back</a>
</div>
<form:form action="/edit/${Expense.id}" method="post" modelAttribute="Expense">
<input type="hidden" name="_method" value="put">
    <p>
        <form:label  class="form-label" path="name">Expense</form:label>
        <form:input class="form-control" path="name"/>
        <br>
        <form:errors class="text-danger" path="name"/>
    </p>
    <p>
        <form:label  class="form-label" path="vendor">Vendor</form:label>
         <form:textarea class="form-control" path="vendor"/>
          <br>
        <form:errors class="text-danger" path="vendor"/>
       
    </p>
    <p>
        <form:label  class="form-label"  path="amount">Amount</form:label>
        <form:input type="number" path="amount"/>
        <br>
         <form:errors class="text-danger" path="amount"/>   
        
    </p>  
     <p>
        <form:label  class="form-label" path="description">description</form:label>
        <form:textarea class="form-control" path="description"/>
        <br>
        <form:errors class="text-danger" path="description"/>
        
    </p>  
    <input class="btn btn-outline-primary" type="submit" value="Submit"/>
</form:form>
</body>
</html>