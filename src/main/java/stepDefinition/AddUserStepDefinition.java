package stepDefinition;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddUserStepDefinition {

	static WebDriver driver;

	@Before
	@Given("^Add User is on Log in Page$")
	public void add_User_is_on_Log_in_Page() {

		System.setProperty("webdriver.chrome.driver", "E:\\Maven\\AdminLTE_BDD\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.get("file:///C:/Users/hp/Desktop/Offline%20Website/index.html");

	}

	@When("^Add User Enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void add_User_Enters_and(String user, String pass) {

		WebElement username = driver.findElement(By.id("email"));

		username.sendKeys(user);

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(pass);

	}

	@Then("^Add Click on Signin$")
	public void add_Click_on_Signin() {

		WebElement SignIn = driver.findElement(By.xpath("//button[text()='Sign In']"));

		SignIn.click();

	}

	@When("^Add Dashboard Title is AdminLTE Dashboard$")
	public void add_Dashboard_Title_is_AdminLTE_Dashboard() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Dashboard";

		System.out.println("Dashboard Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Add Click on Users$")
	public void add_Click_on_Users() {

		WebElement Users = driver.findElement(By.linkText("Users"));

		Users.click();

	}

	@When("^Add Users Title is AdminLTE User$")
	public void add_Users_Title_is_AdminLTE_User() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | User";

		System.out.println("User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Add Click On Add User Button$")
	public void add_Click_On_Add_User_Button() {

		WebElement addUsers = driver
				.findElement(By.xpath("//button[@class=\"btn btn-block btn-primary btn-sm pull-right\"]"));

		addUsers.click();

	}

	@When("^Add Users Title is AdminLTE Add User$")
	public void add_Users_Title_is_AdminLTE_Add_User() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Add User";

		System.out.println("Add User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Add User Details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void add_User_Details_and_and_and_and_and(String user, String mob, String emailId, String gen, String st,
			String pass) {

		WebElement username = driver.findElement(By.id("username"));

		username.sendKeys(user);

		WebElement mobile = driver.findElement(By.id("mobile"));

		mobile.sendKeys(mob);

		WebElement email = driver.findElement(By.id("email"));

		email.sendKeys(emailId);

		if (gen.equalsIgnoreCase("Male")) {

			WebElement Male = driver.findElement(By.id("Male"));

			Male.click();

		} else if (gen.equalsIgnoreCase("Female")) {

			WebElement Female = driver.findElement(By.id("Female"));

			Female.click();
		}

		WebElement state = driver.findElement(By.xpath("//select"));

		Select select = new Select(state);

		select.selectByVisibleText(st);

		WebElement password = driver.findElement(By.id("password"));

		password.sendKeys(pass);

	}

	@Then("^Add Click on Submit$")
	public void add_Click_on_Submit() throws Exception {

		WebElement submit = driver.findElement(By.id("submit"));

		submit.click();

		Thread.sleep(2000);

		Alert alert = driver.switchTo().alert();

		alert.accept();

	}

	@After
	public void tearDown(Scenario scenario) {

		if (scenario.isFailed()) {

			try {
				TakesScreenshot ts = (TakesScreenshot) driver;

				File source = ts.getScreenshotAs(OutputType.FILE);

				FileUtils.copyFile(source, new File("E:\\Maven\\AdminLTE_BDD\\target\\" + scenario.getName() + ".png"));
				
		
			}

			catch (IOException e) {

				e.printStackTrace();
			}

		}

		driver.close();
	}

}
