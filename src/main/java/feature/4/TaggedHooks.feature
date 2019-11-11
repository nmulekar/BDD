Feature: Tagged Hooks Features 

@First
Scenario: Scenario1 

	Given User is on login Page 
	When Login Page title 
	Then click on submit 
	
@Second	
Scenario: Scenario2

	Given User is on Home Page 
	When Home page title
	Then click on login
	
@Third	
Scenario: Scenario3

	Given User is on Dashboard Page 
	When Dashboard page title
	Then click on ON  