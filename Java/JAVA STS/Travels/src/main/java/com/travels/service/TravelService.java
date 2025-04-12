package com.travels.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


import com.travels.model.Travel;
import com.travels.repository.TravelRepository;

@Service
public class TravelService {
	private final TravelRepository travelrepository;
	 public TravelService(TravelRepository travelrepository) {
	        this.travelrepository = travelrepository ;
	    }
	 public List<Travel	> allTravel() {
	        return travelrepository.findAll();
	    }
	  public Travel createTravel(Travel b) {
	        return travelrepository.save(b);
	    }
	  public Travel findTravel(Long id) {
	        Optional<Travel> optionalTravel = travelrepository.findById(id);
	        if(optionalTravel.isPresent()) {
	            return optionalTravel.get();
	        } else {
	            return null;
	        }
	    }
	  public Travel updateTravel(Travel b) {
	        return travelrepository.save(b);
	    }
	  public void deleteTravel(Travel travel) {
		  travelrepository.delete(travel);
		}
	 
}
