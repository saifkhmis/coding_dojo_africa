<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>  
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<title>Insert title here</title>
</head>
<body>
<h1>Save Travels</h1> 
<table  class="table table-bordered">
    <thead>
        <tr>
            <th>Expense</th>
            <th>Vender</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
            <c:forEach var="travel" items="${Expense}">
         	<tr>
         		<td><a href="/show/${travel.id}"><c:out value="${travel.name}"/></a></td>
         		<td> <c:out value="${travel.vendor}"/></td>
         		<td><c:out value="${travel.amount}"/></td>
         		<td><a href="/edit/${travel.id}">Edit</a></td>
         		<td>	<form action="/${travel.id}" method="post">
   				 <input type="hidden" name="_method" value="delete">
		    		<input class="btn btn-danger" type="submit" value="Delete">
               </form></td>
         	</tr>
         </c:forEach>
    </tbody>
</table>
<h1>Add an Expense</h1>
<form:form action="/AddTravel" method="post" modelAttribute="travel">
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