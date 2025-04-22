<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="container">
		<h1><c:out value="${book.title}"/></h1>
		<h3> <c:out value="${book.user.username}"/> read <c:out value="${book.title}"/> by <c:out value="${book.author}"/> </h3>
		<a href="/books" class="btn btn-secondary">Back to the shelve</a>
		<div class="container">
			<h4>Here are <c:out value="${book.user.username}"/>'s thoughts:</h4>
			<hr />
			<p><c:out value="${book.thoughts}"/></p>
			<hr />
		
		</div>
                <a href="/books/${book.id}/edit" class="btn btn-warning btn-sm">Edit</a>
                <form action="/books/${book.id}" method="post" style="display:inline;">
                    <input type="hidden" name="_method" value="delete" />
                    <input type="submit" value="Delete" class="btn btn-danger btn-sm" />
                </form>
	</div>
</body>
</html>