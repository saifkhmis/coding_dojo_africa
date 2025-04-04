package com.mysql.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.mysql.services.BookServices;



@Controller
public class Book {
@Autowired
BookServices bookService;

@GetMapping("/")
public String home() {
return "redirect:/books";
}
@GetMapping("/books/{bookId}")
public String onebook (Model model, @PathVariable("bookId")Long bookId) {
	model.addAttribute("book",bookService.findBook(bookId));
	return "Books.jsp";
}
}
