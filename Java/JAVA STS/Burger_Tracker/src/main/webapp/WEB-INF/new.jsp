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
<h1>Burger Tracker </h1>
<table  class="table table-bordered">
    <thead>
        <tr>
            <th>Burger Name</th>
            <th>Restaurant Name</th>
            <th>Rating(out of 5)</th>
        </tr>
    </thead>
    <tbody>
            <c:forEach var="Burger" items="${burgers}">
         	<tr>
         		<td><c:out value="${Burger.burger_name}"/></td>
         		<td> <c:out value="${Burger.restaurant_name}"/></td>
         		<td><c:out value="${Burger.rating}"/></td>
         	</tr>
         </c:forEach>
    </tbody>
</table>
<h1>Add a Burger</h1>
<form:form action="/NewBurger" method="post" modelAttribute="burger">
    <p>
        <form:label  class="form-label" path="burger_name">Burger Name</form:label>
        <form:input class="form-control" path="burger_name"/>
        <br>
        <form:errors class="text-danger" path="burger_name"/>
    </p>
    <p>
        <form:label  class="form-label" path="restaurant_name">Restaurant Name</form:label>
         <form:textarea class="form-control" path="restaurant_name"/>
          <br>
        <form:errors class="text-danger" path="restaurant_name"/>
       
    </p>
    <p>
        <form:label  class="form-label"  path="rating">Rating</form:label>
        <form:input type="number" path="rating"/>
        <br>
         <form:errors class="text-danger" path="rating"/>   
        
    </p>  
     <p>
        <form:label  class="form-label" path="note">Note</form:label>
        <form:textarea class="form-control" path="note"/>
        <br>
        <form:errors class="text-danger" path="note"/>
        
    </p>  
    <input class="btn btn-outline-primary" type="submit" value="Submit"/>
</form:form>
</body>
</html>