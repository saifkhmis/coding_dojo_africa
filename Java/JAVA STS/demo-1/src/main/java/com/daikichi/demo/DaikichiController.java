package com.daikichi.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
	@RequestMapping("")
    public String welcom() {
            return "welcom !";
            }
	@RequestMapping("/today")
	public String today() {
		return"Tody you will fing luck in all your endeavors !";
	}
	@RequestMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportuunity will arise, so be sure to be open to new ideas!";
	} 
}
