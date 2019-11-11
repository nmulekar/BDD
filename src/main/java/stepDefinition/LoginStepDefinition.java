package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	static WebDriver driver;

	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() {

		System.setProperty("webdriver.chrome.driver", "E:\\Maven\\AdminLTE_BDD\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.get("file:///C:/Users/hp/Desktop/Offline%20Website/index.html");

	}

	@When("^Page Title is AdminLTE$")
	public void page_Title_is_AdminLTE() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Log in";

		System.out.println("LoginPage Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$") // Regular Expression for User name & Password
	public void user_enters_username_and_password(String user, String pass) {

		WebElement username = driver.findElement(By.id("email"));

		username.sendKeys(user);

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(pass);

	}

	@Then("^Click on Sign In Button$")
	public void click_on_Sign_In_Button() {

		WebElement SignIn = driver.findElement(By.xpath("//button[text()='Sign In']"));

		SignIn.click();

	}

}
