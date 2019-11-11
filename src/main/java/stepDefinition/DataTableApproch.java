package stepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTableApproch {

	static WebDriver driver;

	@Given("^DataTable User is on Log in Page$")
	public void datatable_User_is_on_Log_in_Page() {

		System.setProperty("webdriver.chrome.driver", "E:\\Maven\\AdminLTE_BDD\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.get("file:///C:/Users/hp/Desktop/Offline%20Website/index.html");
	}

	@When("^DataTable User Enters usename and password$")
	public void datatable_User_Enters_usename_and_password(DataTable table) {

		List<List<String>> list = table.raw();

		WebElement username = driver.findElement(By.id("email"));

		username.sendKeys(list.get(0).get(0));

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(list.get(0).get(1));

	}

	@Then("^DataTable Click on Signin$")
	public void datatable_Click_on_Signin() {

		WebElement SignIn = driver.findElement(By.xpath("//button[text()='Sign In']"));

		SignIn.click();

	}

	@When("^DataTable Dashboard Title is AdminLTE Dashboard$")
	public void datatable_Dashboard_Title_is_AdminLTE_Dashboard() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Dashboard";

		System.out.println("Dashboard Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^DataTable Click on Users$")
	public void datatable_Click_on_Users() {

		WebElement Users = driver.findElement(By.linkText("Users"));

		Users.click();
	}

	@When("^DataTable Users Title is AdminLTE User$")
	public void datatable_Users_Title_is_AdminLTE_User() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | User";

		System.out.println("User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^DataTable Click On Add User Button$")
	public void datatable_Click_On_Add_User_Button() {

		WebElement addUsers = driver
				.findElement(By.xpath("//button[@class=\"btn btn-block btn-primary btn-sm pull-right\"]"));

		addUsers.click();

	}

	@When("^DataTable Users Title is AdminLTE Add User$")
	public void datatable_Users_Title_is_AdminLTE_Add_User() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Add User";

		System.out.println("Add User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^DataTable User Details Username and Mobile and Email and Gender and State and Password$")
	public void datatable_User_Details_Username_and_Mobile_and_Email_and_Gender_and_State_and_Password(
			DataTable table) {
		
		List<List<String>> list = table.raw();

		WebElement username = driver.findElement(By.id("username"));

		username.sendKeys(list.get(0).get(0));

		WebElement mobile = driver.findElement(By.id("mobile"));

		mobile.sendKeys(list.get(0).get(1));

		WebElement email = driver.findElement(By.id("email"));

		email.sendKeys(list.get(0).get(2));

		if (list.get(0).get(3).equalsIgnoreCase("Male")) {

			WebElement Male = driver.findElement(By.id("Male"));

			Male.click();

		} else if (list.get(0).get(3).equalsIgnoreCase("Female")) {

			WebElement Female = driver.findElement(By.id("Female"));

			Female.click();
		}

		WebElement state = driver.findElement(By.xpath("//select"));

		Select select = new Select(state);

		select.selectByVisibleText(list.get(0).get(4));

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(list.get(0).get(5));

	}

	@Then("^DataTable Click on Submit$")
	public void datatable_Click_on_Submit() {

		WebElement submit = driver.findElement(By.id("submit"));

		submit.click();

	}

}
