package com.burger.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.burger.model.Burger;
import com.burger.repositories.BurgerRepository;
@Service
public class BurgerService {
	 private final BurgerRepository burgerRepository ;
	 public BurgerService(BurgerRepository burgerRepository) {
	        this.burgerRepository = burgerRepository;
	    }
	 public List<Burger> allBurger() {
	        return burgerRepository.findAll();
	    }
	  public Burger createBurger(Burger b) {
	        return burgerRepository.save(b);
	    }
	  public Burger findBurger(Long id) {
	        Optional<Burger> optionalBurger = burgerRepository.findById(id);
	        if(optionalBurger.isPresent()) {
	            return optionalBurger.get();
	        } else {
	            return null;
	        }
	    }
	  public Burger updateBurger(Burger b) {
	        return burgerRepository.save(b);
	    }
}
