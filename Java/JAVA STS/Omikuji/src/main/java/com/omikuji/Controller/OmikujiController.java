package com.omikuji.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class OmikujiController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	@RequestMapping("/show")
public String home (
		@RequestParam(value="number") int number,
		@RequestParam(value="name") String name,
		@RequestParam(value="city") String city,
		@RequestParam(value="hobby") String hobby,
		@RequestParam(value="cars") String cars,
		@RequestParam(value="comment") String comment,
		HttpSession session
		)
	{
		session.setAttribute("name", name);
		session.setAttribute("city", city);
		session.setAttribute("number", number);
		session.setAttribute("hobby", hobby);
		session.setAttribute("cars", cars);
		session.setAttribute("comment", comment);
	return "show.jsp";
}


}
