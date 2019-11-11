package stepDefinition;

import cucumber.api.java.en.Given;

public class GroupsStepDefinition {

	@Given("^run(\\d+)$")
	public void run(int arg) {

		System.out.println("Run >> " + arg);

	}
}
