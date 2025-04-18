package com.dojos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojos.model.Dojo;
import com.dojos.model.Ninja;
import com.dojos.repository.DojoRepository;
import com.dojos.repository.NinjaRepository;

@Service
public class NinjaService {
	
	
	private final NinjaRepository ninjaRepository ;
	public NinjaService (NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository ;
    }
	 
	
	 public List<Ninja> allNinja() {
	        return ninjaRepository.findAll();
	    }
	  public Ninja createNinja(Ninja b) {
	        return ninjaRepository.save(b);
	    }
	  public Ninja findNinja(Long id) {
	        Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
	        if(optionalNinja.isPresent()) {
	            return optionalNinja.get();
	        } else {
	            return null;
	        }
	    }
	  public Ninja updateTravel(Ninja b) {
	        return ninjaRepository.save(b);
	    }
	  public void deleteTravel(Ninja ninja) {
		  ninjaRepository.delete(ninja);
		}
	  public List<Ninja> byDojo(Dojo dojo) {
	    	return ninjaRepository.findAllByDojo(dojo);
	    }
}
