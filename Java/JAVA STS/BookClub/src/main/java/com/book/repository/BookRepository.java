package com.book.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.book.models.Book;

public interface BookRepository extends  CrudRepository<Book, Long> {
	List<Book> findAll();

}
