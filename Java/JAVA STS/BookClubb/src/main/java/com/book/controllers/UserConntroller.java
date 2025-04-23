package com.book.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.book.models.Book;
import com.book.models.LoginUser;
import com.book.models.User;
import com.book.services.LoginAndRegisterService;
import com.book.services.BookService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
@Controller
public class UserConntroller {

	@Autowired
	  private LoginAndRegisterService userServ; 
	@Autowired
	  private BookService books;
	 @GetMapping("/")
	 public String index(Model model) {
	     model.addAttribute("newUser", new User());
	     model.addAttribute("newLogin", new LoginUser());
	     return "index.jsp";
	 }
	 @PostMapping("/register")
	 public String register(@Valid @ModelAttribute("newUser") User newUser, 
	         BindingResult result, Model model, HttpSession session) {
	     userServ.register(newUser, result);
	     if(result.hasErrors()) {
	         model.addAttribute("newLogin", new LoginUser());
	         return "index.jsp";
	     }
	     session.setAttribute("userId", newUser.getId());
	     return "redirect:/books";
	 }
	 @PostMapping("/login")
	 public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
	         BindingResult result, Model model, HttpSession session) {
	     User user = userServ.login(newLogin, result);
	 
	     if(result.hasErrors()) {
	         model.addAttribute("newUser", new User());
	         return "index.jsp";
	     }
	     session.setAttribute("userId", user.getId());
	     return "redirect:/books";
	 }
	 @GetMapping("/logout")
	 public String logout(HttpSession session) {
		 session.setAttribute("userId", null);
		 return "redirect:/";
	 }
	 @GetMapping("/books")
	 public String welcome(Model model, HttpSession session) {
		 Long userId = (Long) session.getAttribute("userId");
		 if(userId==null) {
			 return "redirect:/";
		 }
		 User user = userServ.findById(userId);
		 model.addAttribute("user",user);
		 model.addAttribute("Books", books.all());
		 return "dashboard.jsp";
	 }
	 @GetMapping("/books/new")
	    public String addPage(@ModelAttribute("book") Book book, Model model, HttpSession session) {
	    	User user = userServ.findById((Long)session.getAttribute("userId"));
	    	model.addAttribute("user", user);
	    	return "new.jsp";
	    }
	 @PostMapping("/books/new")
	    public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result,HttpSession session) {
	    	if (result.hasErrors()) {
	    		return "new.jsp";
	    	}
	    	Long userId = (Long) session.getAttribute("userId");
	        User user = userServ.findById(userId);
	        book.setUser(user);
	        books.create(book);	
	    	return "redirect:/books";
	    }
	    @GetMapping("/books/{id}")
	    public String showPage(Model model, @PathVariable("id") Long id, HttpSession session) {
	    	if(session.getAttribute("userId") == null) {
	    		return "redirect:/";
	    	}
	    	Book book = books.find(id);
	    	model.addAttribute("book", book);
	    	model.addAttribute("user", books.find((Long)session.getAttribute("userId")));
	    	return "book.jsp";
	    }
	    
	    @GetMapping("/books/{id}/edit")
	    public String editBook(@PathVariable("id") Long id, Model model, HttpSession session) {
	        Book book = books.find(id);
	        Long userId = (Long) session.getAttribute("userId");
	        if (book == null || !book.getUser().getId().equals(userId)) {
	            return "redirect:/books";
	        }
	        model.addAttribute("book", book);
	        return "edit.jsp";
	    }
	    @PutMapping("/books/{id}")
	    public String updateBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session) {
	        if (result.hasErrors()) {
	            return "edit.jsp"; 
	        }
	        Book existingBook = books.find(book.getId());
	        Long userId = (Long) session.getAttribute("userId");
	        if (existingBook == null || !existingBook.getUser().getId().equals(userId)) {
	            return "redirect:/books"; 
	        }
	        book.setUser(existingBook.getUser());
	        books.update(book);
	        return "redirect:/books/" + book.getId();
	    }
	    @DeleteMapping("/books/{id}")
	    public String deleteBook(@PathVariable("id") Long id, HttpSession session) {
	        Book book = books.find(id);
	        Long userId = (Long) session.getAttribute("userId");

	        if (book != null && book.getUser().getId().equals(userId)) {
	        	books.delete(book);
	        }
	        return "redirect:/books";
	    }
}
