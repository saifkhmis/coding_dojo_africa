<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1><c:out value="${dojo.name}"/> Location Ninjas</h1>
<table  class="table table-bordered">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
            <c:forEach var="ninja" items="${dojo.ninjas}">
         	<tr>
         		<td><c:out value="${ninja.first_name}"/></td>
         		<td> <c:out value="${ninja.last_name}"/></td>
         		<td><c:out value="${ninja.age}"/></td>
         	</tr>
         </c:forEach>
    </tbody>
</table>
</body>
</html>