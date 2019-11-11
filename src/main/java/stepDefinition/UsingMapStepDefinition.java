package stepDefinition;

import java.util.Map;

import org.openqa.selenium.Alert;
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

public class UsingMapStepDefinition {

	static WebDriver driver;

	@Given("^Map User is on Log in Page$")
	public void map_User_is_on_Log_in_Page() {

		System.setProperty("webdriver.chrome.driver", "E:\\Maven\\AdminLTE_BDD\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.get("file:///C:/Users/hp/Desktop/Offline%20Website/index.html");
	}

	@When("^Map User Enters usename and password$")
	public void map_User_Enters_usename_and_password(DataTable table) {

		for (Map<String, String> map : table.asMaps(String.class, String.class)) {

			driver.findElement(By.id("email")).sendKeys(map.get("Username"));

			driver.findElement(By.id("password")).sendKeys(map.get("Password"));

			driver.findElement(By.xpath("//button[text()='Sign In']")).click();

		}

	}

	@When("^Map Dashboard Title is AdminLTE Dashboard$")
	public void map_Dashboard_Title_is_AdminLTE_Dashboard() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Dashboard";

		System.out.println("Dashboard Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Map Click on Users$")
	public void map_Click_on_Users() {

		WebElement Users = driver.findElement(By.linkText("Users"));

		Users.click();

	}

	@When("^Map Users Title is AdminLTE User$")
	public void map_Users_Title_is_AdminLTE_User() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | User";

		System.out.println("User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Map Click On Add User Button$")
	public void map_Click_On_Add_User_Button() {

		WebElement addUsers = driver
				.findElement(By.xpath("//button[@class=\"btn btn-block btn-primary btn-sm pull-right\"]"));

		addUsers.click();
	}

	@When("^Map Users Title is AdminLTE Add User$")
	public void map_Users_Title_is_AdminLTE_Add_User() {

		String actualTitle = driver.getTitle();

		String expectedTitle = "AdminLTE 2 | Add User";

		System.out.println("Add User Title >> " + actualTitle);

		Assert.assertEquals(actualTitle, expectedTitle);

	}

	@Then("^Map User Details Username and Mobile and Email and Gender and State and Password$")
	public void map_User_Details_Username_and_Mobile_and_Email_and_Gender_and_State_and_Password(DataTable tableData) {

		for (Map<String, String> mapData : tableData.asMaps(String.class, String.class)) {

			driver.findElement(By.id("username")).sendKeys(mapData.get("Username"));

			driver.findElement(By.id("mobile")).sendKeys(mapData.get("Mobile"));

			driver.findElement(By.id("email")).sendKeys(mapData.get("Email"));

			if (mapData.get("Gender").equalsIgnoreCase("Male")) {

				driver.findElement(By.id("Male")).click();

			} else if (mapData.get("Gender").equalsIgnoreCase("Female")) {

				driver.findElement(By.id("Female")).click();

			}

			WebElement state = driver.findElement(By.xpath("//select"));

			Select select = new Select(state);

			select.selectByVisibleText(mapData.get("State"));

			driver.findElement(By.id("password")).sendKeys(mapData.get("Password"));

			driver.findElement(By.id("submit")).click();

			Alert alert = driver.switchTo().alert();

			alert.accept();

		}

	}

}
