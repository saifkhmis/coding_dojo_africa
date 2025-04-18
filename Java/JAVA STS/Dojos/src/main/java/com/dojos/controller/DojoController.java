package com.dojos.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.dojos.model.Dojo;
import com.dojos.services.DojoService;


@Controller
public class DojoController {
	private final DojoService dojos;
	public DojoController(DojoService dojos) {
		this.dojos = dojos;
	}
	@GetMapping("/dojos/new")
	public String newDojoForm(@ModelAttribute("dojo") Dojo dojo) {
		return "NewDojo.jsp";
	}
	@GetMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		System.out.printf("dojo id from url: %s",id);
		Dojo dojo = dojos.find(id);
		model.addAttribute("dojo", dojo);
		
		return "show.jsp";
	}
	
	// All processing POST / Redirect routes
	
	@PostMapping("/dojos")
	public String createDojo(@ModelAttribute("dojo") Dojo dojo) {
		Dojo newDojo = dojos.create(dojo);
		System.out.printf("new id: %s", dojo.getId());
		return String.format("redirect:/dojos/%s",newDojo.getId());
	}	
}
