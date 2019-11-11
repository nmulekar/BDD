package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinitions {

	@Before
	public void SetUp() {

		System.out.println("Browser Global Open");
	}

	@After
	public void Close() {

		System.out.println("Browser Global Close");
	}

	@Before("@First")
	public void SetUp1() {

		System.out.println("Browser Open 1");
	}

	@After("@First")
	public void Close1() {

		System.out.println("Browser Close 1");
	}

	@Before("@Second")
	public void SetUp2() {

		System.out.println("Browser Open 2");
	}

	@After("@Second")
	public void Close2() {

		System.out.println("Browser Close 2");
	}

	@Given("^User is on login Page$")
	public void user_is_on_login_Page() {

		System.out.println("Login Page 1");

	}

	@When("^Login Page title$")
	public void login_Page_title() {
		
		System.out.println("Login Page 2");

	}

	@Then("^click on submit$")
	public void click_on_submit() {
		
		System.out.println("Login Page 3");
	}

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() {

		System.out.println("Home Page 1");

	}

	@When("^Home page title$")
	public void home_page_title() {
		
		System.out.println("Home Page 2");
	}

	@Then("^click on login$")
	public void click_on_login() {

		System.out.println("Home Page 3");

	}

	@Given("^User is on Dashboard Page$")
	public void user_is_on_Dashboard_Page() {

		System.out.println("Dashboard Page 1");

	}

	@When("^Dashboard page title$")
	public void dashboard_page_title() {
		
		System.out.println("Dashboard Page 2");
	}

	@Then("^click on ON$")
	public void click_on_ON() {
		
		System.out.println("Dashboard Page 3");
	}

}
