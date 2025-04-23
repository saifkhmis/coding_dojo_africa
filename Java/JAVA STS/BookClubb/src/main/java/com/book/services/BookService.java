package com.book.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.models.Book;
import com.book.repository.BookRepository;



@Service
public class BookService {
	@Autowired
    private BookRepository userRepo;
    public List<Book> all() {
        return userRepo.findAll();
    }
    public Book create(Book book) {
    	System.out.println(book.getId());
        return userRepo.save(book);
    }
    public Book find(Long id) {
        Optional<Book> result = userRepo.findById(id);
        if(result.isPresent()) {
            return result.get();
        } else {
            return null;
        }
    }
    public Book update(Book b) {
        return userRepo.save(b);
    }
  public void delete(Book book) {
	  userRepo.delete(book);
	}
	   
}
