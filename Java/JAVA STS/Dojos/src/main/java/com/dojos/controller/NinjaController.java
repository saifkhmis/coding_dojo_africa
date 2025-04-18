package com.dojos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.dojos.model.Ninja;
import com.dojos.services.DojoService;
import com.dojos.services.NinjaService;
@Controller
public class NinjaController {
private final NinjaService ninjas;
public NinjaController(NinjaService ninjas) {
	this.ninjas = ninjas;
}	
	@Autowired
	private DojoService dojo;
	@GetMapping("/ninjas/new")
	public String newNinjaForm(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", dojo.all());
		return "NewNinja.jsp";
	}
	@PostMapping("/ninjas")
	public String createNinja(@ModelAttribute("ninja") Ninja ninja) {
		ninja = ninjas.createNinja(ninja);
		return "redirect:/dojos/" + ninja.getDojo().getId();
	}
}
