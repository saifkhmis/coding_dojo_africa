package com.dojos.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojos.model.Dojo;
import com.dojos.model.Ninja;

public interface NinjaRepository extends  CrudRepository<Ninja, Long>{
	List<Ninja> findAll();
	List<Ninja> findAllByDojo(Dojo dojo);
}
