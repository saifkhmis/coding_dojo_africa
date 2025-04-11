package com.burger.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.burger.model.Burger;
import com.burger.services.BurgerService;

import jakarta.validation.Valid;
@Controller
public class BurgerController {
	private final BurgerService BurgerService;
	public BurgerController(BurgerService burgerService) {
		this.BurgerService = burgerService;
	}
	 @GetMapping("/")
	    public String newBurger(@ModelAttribute("burger") Burger burger , Model model)
	 {
		 List<Burger> burgers=BurgerService.allBurger();
		 model.addAttribute("burgers",burgers);
	        return "new.jsp";
	    }
	  @PostMapping("/burger")
	    public String createBurger(@Valid @ModelAttribute("burger") Burger burger, BindingResult result,Model model) {
	        if (result.hasErrors()) {
	        	 List<Burger> burgers=BurgerService.allBurger();
	    		 model.addAttribute("burgers",burgers);
	            return "new.jsp";
	        } else {
	            BurgerService.createBurger(burger);
	            return "redirect:/";
	        }
	    }
	   @GetMapping("/edit/{id}")
	    public String edit(@PathVariable("id") Long id, Model model) {
	        Burger burger = BurgerService.findBurger(id);
	        model.addAttribute("burger", burger);
	        return "edit.jsp";
	    }
	   @PutMapping(value="/edit/{id}")
	    public String update(@Valid @ModelAttribute("burger") Burger burger, BindingResult result, Model model) {
	        if (result.hasErrors()) {
	            model.addAttribute("burger", burger);
	            return "edit.jsp";
	        } else {
	            BurgerService.updateBurger(burger);
	            return "redirect:/";
	        }
	    }
	   
	   
}
