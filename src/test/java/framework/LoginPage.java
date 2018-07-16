package framework;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import stepdefinition.DriverFactory;

/**
 * Md Ziaur Rahman
 *     Spring_2018
 */

public class LoginPage extends BasePage {

    private By emailTextField= By.xpath("//input[@id='email']");
    private By Password      = By.xpath("//input[@id='password']");
    private By submitButton  = By.xpath("//button[@type='submit']");


    public void enterEmailAddress(String email){
        sendText(emailTextField, email);
    }

    public void enterPassword(String password){
        sendText(Password, password);
    }

    public void clickSubmitButton(){
        clickOn(submitButton);
    }




}
