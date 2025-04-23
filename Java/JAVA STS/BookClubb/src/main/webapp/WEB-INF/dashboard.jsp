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
<h1>Welcome, <c:out value="${user.username}"/>!</h1>
<p>Books from evreryoen's shelves </p>
<p><a href="/logout">logout</a></p>
<p><a href="/books/new">+ Add a to my shelf</a></p>
<table  class="table table-bordered">
    <thead>
        <tr>
        <th>ID</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Posted by</th>
        </tr>
    </thead>
    <tbody>
            <c:forEach var="book" items="${Books}">
    <tr>
        <td><c:out value="${book.id}"/></td>
        <td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
        <td><c:out value="${book.author}"/></td>
        <td><c:out value="${book.user.username}"/></td>
    </tr>
</c:forEach>
    </tbody>
</table>
</body>
</html>