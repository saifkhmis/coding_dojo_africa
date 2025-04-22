package com.book.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="books")
public class Book {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    @NotEmpty(message="Title is required!")
	    @Size(min=3, max=30, message="Title must be between 3 and 30 characters")
	    private String title;
	    @NotEmpty(message="Author is required!")
	    @Size(min=3, max=30, message="Author must be between 3 and 30 characters")
	    private String author;
	    @NotEmpty(message="thoughts is required!")
	    @Size(min=8, max=128, message="thoughts must be between 8 and 128 characters")
	    private String thoughts;
		@ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name="user_id")
		private User user;
	    public Long getId() {
			return id;
		}
		public String getAuthor() {
			return author;
		}
		public void setAuthor(String author) {
			this.author = author;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		
		public String getThoughts() {
			return thoughts;
		}
		public void setThoughts(String thoughts) {
			this.thoughts = thoughts;
		}
		public User getUser() {
			return user;
		}
		public void setUser(User user) {
			this.user = user;
		}
		public Date getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}
		public Date getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}
		@Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;	@DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;
	    @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
	    
}
