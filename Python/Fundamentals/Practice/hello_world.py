# 1. TASK: print "Hello World"
print( "Hello World" )
# 2. print "Hello saif islem!" with the name in a variable
name = "Saif islem ! "
print( "Hello " , name )	# with a comma
print( "Hello " + name )	# with a +
# 3. print "Hello 90!" with the number in a variable
name = 90
print( "Hello" , name )	# with a comma
print( "Hello "+ str (name) )	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print( "i love to eat {} and {} ".format(fave_food1 , fave_food2) ) # with .format()
print(f"i love to eat {fave_food1} and {fave_food2}" ) # with an f string

