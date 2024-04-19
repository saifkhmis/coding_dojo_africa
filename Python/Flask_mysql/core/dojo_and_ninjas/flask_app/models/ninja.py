from flask_app.config.mysqlconnection import connectToMySQL


class Ninjas:
    def __init__(self,data):
        self.id=data['id']
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.age=data['age']
        self.updated_at=data['updated_at']
        self.created_at=data['created_at']
    


    @classmethod
    def ninja(cls):
        query=""" Select * from ninjas ;"""
        results=connectToMySQL('dojo_ninj').query_db(query)
        users=[]
        for u in results:
            users.append(cls(u))
        return users
    @classmethod
    def user (cls,data):
        query=" insert into ninjas (first_name,last_name,age,updated_at,created_at,id ,dojo_id) values (%(first_name)s , %(last_name)s , %(age)s , %(updated_at)s , %(created_at)s,%(dojo_id)s)" 
        result=connectToMySQL('dojo_ninj').query_db(query,data)
        return result
