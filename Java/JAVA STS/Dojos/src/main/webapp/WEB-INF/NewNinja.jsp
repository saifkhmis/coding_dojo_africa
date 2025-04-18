<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>
<body>

<h1>New Ninja</h1>
<form:form action="/ninjas" method="post" modelAttribute="ninja">

    <p>
        <form:label path="first_name">First Name:</form:label>
        <form:input path="first_name"/>
    </p>
    
    <p>
        <form:label path="last_name">Last Name:</form:label>
        <form:input path="last_name"/>
    </p>
    <p>
        <form:label path="age">Age:</form:label>
        <form:input path="age"/>
    </p>
    
    <p>
        <form:label path="dojo">Dojo:</form:label>
        
        <form:select path="dojo">
        
        	<c:forEach var="eachDojo" items="${dojos}">
	        
	        	<option value="${eachDojo.id}"><c:out value="${eachDojo.name}"/></option>
	        
        	</c:forEach>
        	
        </form:select>
    </p>
    
    
    <input type="submit" value="Submit"/>
    
</form:form>  
	
</body>
</html>