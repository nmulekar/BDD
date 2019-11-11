Feature: AdminLTE AddUsers Features 

Scenario: 
	Given Map User is on Log in Page 
	When Map User Enters usename and password 
		|     Username      |  Password |
		| kiran@gmail.com   |   123456  |
	When Map Dashboard Title is AdminLTE Dashboard 
	Then Map Click on Users 
	When Map Users Title is AdminLTE User 
	Then Map Click On Add User Button 
	When Map Users Title is AdminLTE Add User 
	Then Map User Details Username and Mobile and Email and Gender and State and Password 
		| Username |   Mobile   |   Email      | Gender   |     State   | Password |
		| Nilesh   | 8805712512 | nilesh@123   | Male     |      HP     |   10101  |
		| Kishor   | 5555555555 | kishor@123   | Male     | Maharashtra |   20202  |
		| Priyanka | 8888888888 | priyanka@123 | Female   |      HP     |   30303  |
		| Sachin   | 9999999999 | nilesh@123   | Male     |     Delhi   |   40404  |
		| Anuja    | 3333333333 | nilesh@123   | Female   |    Punjab   |   50505  |
	