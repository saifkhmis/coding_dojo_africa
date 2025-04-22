package com.book.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.book.models.User;

public interface UserRepository  extends CrudRepository<User, Long>{
	Optional<User> findByEmail(String email);
	List<User> findAll();
}
