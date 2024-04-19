from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja import Ninjas

class Dojo :
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.updated_at=data['updated_at']
        self.ninjas=[]

    @classmethod
    def dojo(cls):
        query=""" Select * from dojos ;"""
        results=connectToMySQL('dojo_ninj').query_db(query)
        dojos=[]
        for d in results:
            dojos.append(cls(d))
        return dojos
    @classmethod
    def save (cls,data):
        query=""" insert into dojos (name)
        values (%(name)s)"""
        result= connectToMySQL('dojo_ninj').query_db(query,data)
        return result
    @classmethod
    def get_one_with_ninjas(cls,data):
        query="select * from dojos left join ninjas on dojos.id=ninjas.dojo_id where dojos.id=%(id)s"
        result=connectToMySQL('dojo_ninj').query_db(query,data)
        print(result)
        dojo=cls(result[0])
        for row in result:
            n={
                'id':row['ninjas.id'],
                'first_name' :row['first_name'],
                'last_name':row['last_name'],
                'age':row['age'],
                'created_at':row['created_at'],
                'updated_at':row['created_at'],
            }
        dojo.ninjas.append(Ninjas(n))
