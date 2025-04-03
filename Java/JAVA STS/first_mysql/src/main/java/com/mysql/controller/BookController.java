package com.mysql.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mysql.models.BookModel;
import com.mysql.services.BookServices;


@RestController
public class BookController {

private final BookServices bookService;
	
	public BookController(BookServices bookService) {
		this.bookService = bookService;
	}
	
	@RequestMapping("/api/books")
	public List<BookModel> index() {
		return bookService.allBooks();
	}
	
	@RequestMapping(value="/api/books", method=RequestMethod.POST)
	public BookModel create(
			@RequestParam(value="title") String title, 
			@RequestParam(value="description") String desc, 
			@RequestParam(value="language") String lang, 
			@RequestParam(value="pages") Integer numOfPages){
		BookModel book = new BookModel(title, desc, lang, numOfPages);
		return bookService.createBook(book);
	}
	
	@RequestMapping("/api/books/{id}")
	public BookModel show(@PathVariable("id") Long id) {
		BookModel bookModel = bookService.findBook(id);
		return bookModel;
	}
	
	@RequestMapping(value="/api/books/update/{id}", method=RequestMethod.PUT)
    public BookModel update(@PathVariable("id") Long id, @RequestParam(value="title") String title, @RequestParam(value="description") String desc, @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numOfPages) {
        BookModel book = new BookModel(title, desc, lang, numOfPages);
        book.setId(id);
        return bookService.updateBook(book);
    }
    
    @RequestMapping(value="/api/books/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }

}
