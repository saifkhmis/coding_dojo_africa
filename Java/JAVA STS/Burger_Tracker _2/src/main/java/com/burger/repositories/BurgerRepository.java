package com.burger.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.burger.model.Burger;



public interface BurgerRepository extends CrudRepository<Burger, Long> {
	 List<Burger> findAll();
}
