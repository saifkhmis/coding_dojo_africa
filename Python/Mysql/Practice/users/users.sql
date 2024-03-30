insert into users (first_name,last_name,email)
value('saif','khmis','saifkhmis@gmail.com'),('ahmed','khmis','ahmedkhmis@gmail.com'),('hala','khmis','halakhmis@gmail.com');
select * from users;
select * from users
where email ='saifkhmis@gmail.com' ;
select * from users 
where id=3;
update users set last_name="pancakes"
where users.id=3 ;
delete from users 
where users.id=2;
select * from users
order by first_name desc;