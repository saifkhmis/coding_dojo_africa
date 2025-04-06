package com.mysql.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mysql.models.BookModel;
import com.mysql.services.BookServices;



@Controller
public class Book {
@Autowired
private final BookServices bookServices;
@GetMapping("/")
public String home() {
return "redirect:/books";
}
@GetMapping("/books/{bookId}")
public String onebook (Model model, @PathVariable("bookId")Long bookId) {
	model.addAttribute("book",bookServices.findBook(bookId));
	return "Books.jsp";
}

public Book(BookServices bookServices) {
    this.bookServices = bookServices;
}

@RequestMapping("/books")
public String index(Model model) {
    List<BookModel> books = bookServices.allBooks();
    model.addAttribute("books", books);
    return "index.jsp";
}
}


