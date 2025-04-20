package com.login.repositroy;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.login.models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	Optional<User> findByEmail(String email);

}
