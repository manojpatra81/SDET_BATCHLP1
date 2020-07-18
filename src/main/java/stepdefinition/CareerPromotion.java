package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CareerPromotion {
	static  WebDriver driver;
	String url = "http://elearningm1.upskills.in";
	@Given("^I have launch the application$")
	public void I_have_launch_the_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
	     driver = new ChromeDriver();
	     driver.get(url);
	     
	}
	@When("^I entered username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void I_entered_username_and_pasword(String username, String password) throws Throwable {
		driver.findElement(By.cssSelector("input[placeholder='Username']")).sendKeys(username);
		driver.findElement(By.cssSelector("input[placeholder='Pass']")).sendKeys(password);
	   
	}
	@Then("^I click on login button$")
	public void I_click_on_login_button() throws Throwable {
		driver.findElement(By.name("submitAuth")).click();
		driver.manage().window().maximize();
	}
	@When("^I click the Registration tab$")
	public void I_click_the_Registration_tab() throws Throwable {
	  driver.findElement(By.xpath("//a[contains(text(),'Administration')]")).click();
	  
	}
	
	//Create career	
	 @When("^I click career and promotions link$") 
	  public void I_click_career_and_promotions_link() throws Throwable {
	  driver.findElement(By.xpath("//a[contains(text(),'Careers and promotions')]")).click(); 
	  Thread.sleep(1000);
	  
	  }
	  
	  @When("^I click the career link$") 
	  public void I_click_the_career_link() throws Throwable {
	  driver.findElement(By.xpath("//*[@id=\"toolbar-career\"]/div/div/a[2]/img")).click(); }
	 
	  @When("^I click add icon$") 
	  public void I_click_add_icon() throws Throwable { 
	  driver.findElement(By.xpath("//img[@title='Add']")).click();
	  Thread.sleep(2000);
	  }
	 
	  @Then("^I enter valid credentials in Name textbox as \"([^\"]*)\"$") 
	  public void i_enter_valid_credentials_in_Name_textbox_as(String name) throws Throwable { 
	 driver.findElement(By.id("career_name")).sendKeys(name); 
		  }
	  
	  @When("^I click add button$") 
	  public void i_click_add_button() throws Throwable {
	  driver.findElement(By.id("career_submit")).click();
	  }
	  
	  @Then("^Item is added$") 
	  public void item_added_() throws Throwable {
	  WebElement element=driver.findElement(By.xpath("//div[contains(text(),'Item added')]"));
	  String text=element.getText(); System.out.println(text); Thread.sleep(5000);
	 
	  }
	 
	 
	 //Create promotions
	@Then("^I click on career and promotions link$")
	public void i_click_on_career_and_promotions_link() throws Throwable  {
		 driver.findElement(By.xpath("//a[contains(text(),'Careers and promotions')]")).click();
		 Thread.sleep(4000);
		 
	 }
	@When("^I click on Promotions icon$")
	public void i_click_on_Promotions_icon() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"toolbar-career\"]/div/div/a[3]/img")).click();
		////a[3]//img[1]
	}

	 @When("^I click on Add icon$")
	 public void i_click_on_Add_icon() throws Throwable {
		 driver.findElement(By.xpath("//img[@title='Add']")).click(); 
		 Thread.sleep(5000);
	 }

	 @Then("^I enter credentials in nametextbox as \"([^\"]*)\"$")
	 public void i_enter_credentials_in_nametextbox_as(String nametextbox) throws Throwable {
		 driver.findElement(By.xpath("//input[@id='name']")).sendKeys(nametextbox);
	     
	 }

	 @When("^I Click on Add button$")
	 public void i_Click_on_Add_button() throws Throwable {
		 driver.findElement(By.id("promotion_submit")).click();
	    
	 }
	 @Then("^Item added message displayed$")
	 public void item_added_message_displayed() throws Throwable {
		 WebElement element=driver.findElement(By.xpath("//div[contains(text(),'Item added')]"));
		 String text=element.getText();
		 System.out.println(text);
		 Thread.sleep(5000);
	 }
	 // Create Subscription
	 @When("^I click on subscribe sessions to promotion icon$")
	 public void i_click_on_subscribe_sessions_to_promotion_icon() throws Throwable {
		 driver.findElement(By.xpath("//img[@title='Subscribe sessions to promotions']")).click();
		 //driver.findElement(By.xpath("//tr[@id='7']//a[1]//img[1]")).click();
		
	 }
  
	 @Then("^select session in Sessions not subscribed : window$")
	 public void select_session_in_Sessions_not_subscribed_window() throws Throwable {
		 WebElement DropdownButton = driver.findElement(By.name("session_not_in_promotion_name"));
		    //DropdownButton.click();
		    Select se = new Select(DropdownButton);
		    se.selectByVisibleText("API training session0.054814791271499685");
		    Thread.sleep(3000);

		    // select a drop down option
		     //WebElement DropdownOption= driver.findElement(By.xpath("//ul/li/a/span[text()="+origin+"]"));
		    // DropdownOption.click(); 
	 }

	 @When("^I click on -> arrow$")
	 public void i_click_on_arrow() throws Throwable {
		 driver.findElement(By.xpath("//button[@class='btn btn-default']")).click();
	    
	 }

	 @When("^I click on subscribe sessions in promotion window button$")
	 public void i_click_on_subscribe_sessions_in_promotion_window_button() throws Throwable {
		 driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
	    
	 }

	 @Then("^session should get added into promotion$")
	 public void session_should_get_added_into_promotion() throws Throwable {
	    
	 }


}