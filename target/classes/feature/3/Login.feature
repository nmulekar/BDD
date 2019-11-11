Feature: AdminLTE Login Feature 

# Without Examples Keyword
# Scenario: AdminLTE LoginTest  
#
#	Given User is already on Login Page 
#	When Page Title is AdminLTE 
#	Then User enters "kiran@gmail.com" and "123456" 
#	And Click on Sign In Button 
#	And User is on DashBoard 

	
# With Examples Keyword     
Scenario Outline: AdminLTE LoginTest  

	Given User is already on Login Page 
	When Page Title is AdminLTE 
	Then User enters "<username>" and "<password>" 
	And Click on Sign In Button 
	
	Examples:
	| username        | password |
	| kiran@gmail.com |  123456  |
	| nilesh@123 	  |  123486  |
	| sachin@123      |  99999   |
	| kishor@123      | 33333333 |
	| Akash@123       |  1111111 |
