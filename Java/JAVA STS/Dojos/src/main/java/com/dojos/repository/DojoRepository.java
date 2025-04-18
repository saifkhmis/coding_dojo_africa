package com.dojos.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojos.model.Dojo;




public interface DojoRepository extends  CrudRepository<Dojo, Long> {
	List<Dojo> findAll();

}
