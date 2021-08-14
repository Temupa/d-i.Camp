# Explain what each variable does:

# result - this line creats a number of cars, var type: int
cars = 100
# result - number of how many passengers can fit in the car, var type: int
space_in_a_car = 4.0
# result - number of drivers, var type: int
drivers = 30
# result - number of passengers var type: int
passengers = 90
# result - number of car that not drive 
cars_not_driven = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven


print("There are", cars, "cars available.")
print("There are only", drivers, "drivers available.")
print("There will be", cars_not_driven, "empty cars today.")
print("We can transport", carpool_capacity, "people today.")
print("We have", passengers, "to carpool today.")
print("We need to put about", average_passengers_per_car,"in each car.")