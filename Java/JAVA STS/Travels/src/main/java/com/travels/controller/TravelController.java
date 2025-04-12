package com.travels.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.travels.model.Travel;
import com.travels.service.TravelService;

import jakarta.validation.Valid;

@Controller
public class TravelController {
	private final TravelService travelservice;
	public TravelController(TravelService travelservice) {
		this.travelservice = travelservice;
	}
	@GetMapping("/")
    public String newTravel(@ModelAttribute("travel") Travel travel , Model model)
 {
	 List<Travel> expense=travelservice.allTravel();
	 model.addAttribute("Expense",expense);
        return "new.jsp";
    }
  @PostMapping("/AddTravel")
    public String createTravel(@Valid @ModelAttribute("travel") Travel travel, BindingResult result,Model model) {
        if (result.hasErrors()) {
        	 List<Travel> Expense=travelservice.allTravel();
    		 model.addAttribute("Expense",Expense);
            return "new.jsp";
        } else {
        	travelservice.createTravel(travel);
            return "redirect:/";
        }
    }
  @GetMapping("/edit/{id}")
  public String edit(@PathVariable("id") Long id, Model model) {
      Travel Expense = travelservice.findTravel(id);
      model.addAttribute("Expense", Expense);
      return "edit.jsp";
  }
 @PutMapping(value="/edit/{id}")
  public String updateTravel(@Valid @ModelAttribute("travel") Travel travel, BindingResult result, Model model) {
      if (result.hasErrors()) {
          model.addAttribute("travel", travel);
          return "edit.jsp";
      } else {
    	  travelservice.updateTravel(travel);
          return "redirect:/";
      }
  }
 @GetMapping("show/{id}")
	public String showTravel(@PathVariable("id") Long id, Model model) {
		model.addAttribute("travel", travelservice.findTravel(id));
		return "show.jsp";
	}
 @DeleteMapping("/{id}")
 public String destroy(@PathVariable("id") Travel id) {
	 travelservice.deleteTravel(id);
     return "redirect:/";
 }
}
