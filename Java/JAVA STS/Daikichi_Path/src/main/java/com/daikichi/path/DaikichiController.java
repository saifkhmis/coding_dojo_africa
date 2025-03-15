package com.daikichi.path;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
	
	@RequestMapping("/")
	public String welcom() {
		return "welcom";	
	}
	@RequestMapping("/today")
	public String today() {
		return "Today you will find luck in all your endeavors!";
	}
	@RequestMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	@RequestMapping("travel/{location}")
	public String travel(@PathVariable("location")String location) {
		return "Congratulations! You will soon travel to " + location + " ! " ;
		
	}
	@RequestMapping("lotto/{number}")
	public String lotto (@PathVariable("number")Integer number) {
		if(number%2==0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}
		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
		
		
	}
	
	
	
	



}
