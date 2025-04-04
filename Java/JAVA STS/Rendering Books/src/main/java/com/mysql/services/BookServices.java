package com.mysql.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mysql.models.BookModel;
import com.mysql.repositories.BookRepository;
@Service
public class BookServices {

	 private final BookRepository bookRepository;
	    
	    public BookServices(BookRepository bookRepository) {
	        this.bookRepository = bookRepository;
	    }
	    // returns all the books
	    public List<BookModel> allBooks() {
	        return bookRepository.findAll();
	    }
	    // creates a book
	    public BookModel createBook(BookModel b) {
	        return bookRepository.save(b);
	        
	    }
	    // retrieves a book
	    public BookModel findBook(Long id) {
	        Optional<BookModel> optionalBook = bookRepository.findById(id);
	        if(optionalBook.isPresent()) {
	            return optionalBook.get();
	        } else {
	            return null;
	        }
	    }
	    // update a book
	    public BookModel updateBook(BookModel b) {
	        return bookRepository.save(b);
	    }
	    public void deleteBook(Long id) {
			Optional<BookModel> optionalBook = bookRepository.findById(id);
			if(optionalBook.isPresent()) {
				bookRepository.deleteById(id);
			}
			}

}
