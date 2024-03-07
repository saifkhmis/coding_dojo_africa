def numbers(num):
    output=[]
    for i in range(num,-1,-1):
        output.append(i)
    return(output)
print(numbers(5))
def number(list):
    print(list[0])
    return(list[1])
print(number([1,2]))
def list(list):
    return list[0] + len(list)
print(list([1,2,3,4,5,]))
def values_greater_than_second(list):
    if len(list) < 2:
        return False
    output = []
    for i in range(0,len(list)):
        if list[i] > list[1]:
            output.append(list[i])
    print(len(output))
    return output


print(values_greater_than_second([5,2,3,2,1,4]))
print(values_greater_than_second([3]))
def length_and_value(size,value):
    output = []
    for i in range(0, size):
        output.append(value)
    return output

print(length_and_value(4,7))
print(length_and_value(6,2))