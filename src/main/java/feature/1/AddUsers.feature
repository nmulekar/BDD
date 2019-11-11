Feature: AdminLTE AddUsers Features 

Scenario Outline: User Data Scenario
	Given Add User is on Log in Page
	When Add User Enters "kiran@gmail.com" and "123456"
	Then Add Click on Signin
	When Add Dashboard Title is AdminLTE Dashboard
	Then Add Click on Users
	When Add Users Title is AdminLTE User
	Then Add Click On Add User Button
	When Add Users Title is AdminLTE Add User
	Then Add User Details "<Username>" and "<Mobile>" and "<Email>" and "<Gender>" and "<State>" and "<Password>"
	Then Add Click on Submit
	
	Examples:
	| Username | Mobile     | Email        | Gender   |     State   | Password |
	| Nilesh   | 8805712512 | nilesh@123   | Male     |      HP     |   10101  |
	| Kishor   | 5555555555 | kishor@123   | Male     | Maharashtra |   20202  |
	| Priyanka | 8888888888 | priyanka@123 | Female   |      HP     |   30303  |
	| Sachin   | 9999999999 | nilesh@123   | Male     |     Delhi   |   40404  |
	| Anuja    | 3333333333 | nilesh@123   | Female   |    Punjab   |   50505  |