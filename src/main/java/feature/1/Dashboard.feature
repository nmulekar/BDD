Feature: AdminLTE Dashboard feature 

Scenario: AdminLTE DashboardTest 

	Given Dashboard User is already on Login Page 
	Then Dashboard User enters "kiran@gmail.com" and "123456" 
	And Dashboard Click on Sign In Button 
	When Dashboard Page Title is AdminLTE Dashboard 
	Then Dashboard Click on Users Link 
