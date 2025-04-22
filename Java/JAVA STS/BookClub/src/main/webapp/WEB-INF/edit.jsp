<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<title>Insert title here</title>
</head>
<body>
<h1>Change your Entry </h1>
<a href="/books" class="btn btn-secondary">Back to the shelves</a>
<form:form method="post" modelAttribute="book" action="/books/${book.id}">
    <input type="hidden" name="_method" value="put" />
  <p>
        <form:label  class="form-label" path="title">title</form:label>
        <form:input class="form-control" path="title"/>
        <br>
        <form:errors class="text-danger" path="title"/>
    </p>
    <p>
        <form:label class="form-label" path="author">Author</form:label>
            <form:input class="form-control" path="author"/>
            <form:errors class="text-danger" path="author"/>
    </p> 
     <p>
        <form:label  class="form-label" path="thoughts">My thoughts</form:label>
        <form:textarea class="form-control" path="thoughts"/>
        <br>
        <form:errors class="text-danger" path="thoughts"/>
    </p>  
    <input type="submit" value="Submit" class="btn btn-primary"/>
</form:form>
</body>
</html>