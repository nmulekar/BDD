Feature: AdminLTE AddUsers Features 

Scenario: 
	Given DataTable User is on Log in Page
	When DataTable User Enters usename and password
	| kiran@gmail.com | 123456 |
	Then DataTable Click on Signin
	When DataTable Dashboard Title is AdminLTE Dashboard
	Then DataTable Click on Users
	When DataTable Users Title is AdminLTE User
	Then DataTable Click On Add User Button
	When DataTable Users Title is AdminLTE Add User
	Then DataTable User Details Username and Mobile and Email and Gender and State and Password
	| Nilesh   | 8805712512 | nilesh@123   | Male     |      HP     |   10101  |
	Then DataTable Click on Submit