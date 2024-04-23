# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class User:
    DB = "users_schema"
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.password=data['password']
    
    # Now we use class methods to query our database
    # And perform input validations

    @staticmethod
    def validate_register(user):
        is_valid = True
        query = "SELECT * FROM users WHERE email = %(email)s"
        results = connectToMySQL("users_schema").query_db(query,user)
        if len(results) >= 1:
            flash("Email already taken","register")   
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid email format","register")
            is_valid = False
        if len(user['first_name']) < 3:
            flash("Invalid first name, must be at least 3 characters","register")
            is_valid = False
        if len(user['last_name']) < 3:
            flash("Invalid last name, must be at least 3 characters","register")
            is_valid = False
        if len(user['password']) < 8:
            flash("Invalid password, must be at least 8 characters","register")
            is_valid = False
        if user['password'] != user['confirm_password']:
            flash("Passwords don't match", "register")
        return is_valid
    @classmethod
    def login(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("users_schema").query_db(query,data)
                # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])
    

        # # SENSEI way using a for loop (Good for if there are many fields)
        # # Loop over the dictionary with the user data
        # for field in user:
        #     # Test if any of the entered values are empty strings
        #     if len(user[field]) <= 0:
        #         is_valid = False
        #         message = f"{field} is required.".capitalize()

        #         # Take the _ out of the field names
        #         make_pretty = message.maketrans("_", " ")
        #         flash(message.translate(make_pretty))


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(cls.DB).query_db(query)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def save(cls, data):
        query = """
        INSERT into users (first_name, last_name, email,password) VALUES 
        (%(first_name)s, %(last_name)s, %(email)s ,%(password)s );
        """
        return connectToMySQL(cls.DB).query_db(query, data)