package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DashboardStepDefinition {

	static WebDriver driver;

	@Given("^Dashboard User is already on Login Page$")
	public void dashboard_User_is_already_on_Login_Page() {

		System.setProperty("webdriver.chrome.driver", "E:\\Maven\\AdminLTE_BDD\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.get("file:///C:/Users/hp/Desktop/Offline%20Website/index.html");

	}

	@Then("^Dashboard User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void dashboard_User_enters_and(String user, String pass) {

		WebElement username = driver.findElement(By.id("email"));

		username.sendKeys(user);

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(pass);

	}

	@Then("^Dashboard Click on Sign In Button$")
	public void dashboard_Click_on_Sign_In_Button() {

		WebElement SignIn = driver.findElement(By.xpath("//button[text()='Sign In']"));

		SignIn.click();

	}

	@When("^Dashboard Page Title is AdminLTE Dashboard$")
	public void dashboard_Page_Title_is_AdminLTE_Dashboard() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Dashboard";

		System.out.println("Dashboard Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Dashboard Click on Users Link$")
	public void dashboard_Click_on_Users_Link() {

		WebElement Users = driver.findElement(By.linkText("Users"));

		Users.click();

	}

}
