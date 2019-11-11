package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UsersStepDefinition {

	static WebDriver driver;

	@Given("^User is on LoginPage$")
	public void user_is_on_LoginPage() {

		System.setProperty("webdriver.chrome.driver", "E:\\Maven\\AdminLTE_BDD\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.get("file:///C:/Users/hp/Desktop/Offline%20Website/index.html");

	}

	@When("^Users User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void Users_user_enters_username_and_password(String user, String pass) {

		WebElement username = driver.findElement(By.id("email"));

		username.sendKeys(user);

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(pass);

	}

	@Then("^Click on SignIn Button$")
	public void click_on_SignIn_Button() {

		WebElement SignIn = driver.findElement(By.xpath("//button[text()='Sign In']"));

		SignIn.click();

	}

	@When("^Dashboard title is AdminLTE Dashboard$")
	public void dashboard_title_is_AdminLTE_Dashboard() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Dashboard";

		System.out.println("Dashboard Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Click on Users Link$")
	public void click_on_Users_Link() {

		WebElement Users = driver.findElement(By.linkText("Users"));

		Users.click();

	}

	@When("^Users title is AdminLTE Users$")
	public void users_title_is_AdminLTE_Users() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | User";

		System.out.println("User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Click on Add Users Button$")
	public void click_on_Add_Users_Button() {

		WebElement addUsers = driver.findElement(By.xpath("//button[@class=\"btn btn-block btn-primary btn-sm pull-right\"]"));

		addUsers.click();

	}

}
