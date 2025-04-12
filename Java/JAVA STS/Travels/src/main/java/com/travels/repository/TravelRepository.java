package com.travels.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.travels.model.Travel;



public interface TravelRepository extends  CrudRepository<Travel, Long>{
	List<Travel> findAll();

}
