insert into dojos(name)
value('saif'),('ahmed'),('hala');
delete from dojos 
where id = 1 ;
delete  from dojos ;
insert into dojos (name)
value ('nasri'), ('mousa'),('aziz');
insert into ninjas(first_name,last_name,age,dojo_id)
value('ahmed','khmis',20, 4),('saif','khmis',21,4),('hala','khmis',31,4),
('naziha','khmis',20, 5),('taher','khmis',21,5),('hajer','khmis',31,5),
('salem','khmis',20, 6),('islem','khmis',21,6),('howaida','khmis',31,6);
select * from dojos
join ninjas on dojo.id=ninjas.dojo_id
where dojo_id=4 ;
select * from dojos
join ninjas on dojo.id=ninjas.dojo_id
where dojo_id=6;
select * from dojos 
join ninjas on dojo.id=ninjas.dojo_id
where dojo_id=5;