package framework;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import stepdefinition.DriverFactory;
import java.util.List;

/**
 * Md Ziaur Rahman
 *     Spring_2018
 */

public class BasePage {

    // This Base page is created to serve all the Selenium methods for the project


	// Click on any webElement
	public void clickOn(By locator) {
		try {
			DriverFactory.getDriver().findElement(locator).click();
		} catch (NoSuchElementException e) {
			Assert.fail("Element is not found with this locator: " + locator.toString());
			e.printStackTrace();
		}
	}



    // Send text to Textbox
	public void sendText(By locator, String text) {
		try {
			DriverFactory.getDriver().findElement(locator).sendKeys(text);
		} catch (NoSuchElementException e) {
			Assert.fail("Element is not found with this locator: " + locator.toString());
			e.printStackTrace();
		}
	}



    // Get Text from Element
    public String getTextFromElement(By locator) {
		String text = null;
		try {
			text = DriverFactory.getDriver().findElement(locator).getText();
		} catch (NoSuchElementException e) {
			Assert.fail("Element is not found with this locator: " + locator.toString());
			e.printStackTrace();
		}

		return text;
	}



	// find Element(s)
    public WebElement findElement(By locator){
        WebElement element=DriverFactory.getDriver().findElement(locator);
        return element;
    }
    // Find Element & return as a Webelement
    public List<WebElement> findElementAsList(By locator){
        List <WebElement> element= DriverFactory.getDriver().findElements(locator);
        return element;
    }



	// If element is Visible
	public boolean isDisplayed(By locator){
		Boolean isVisible=DriverFactory.getDriver().findElement(locator).isDisplayed();
		return isVisible;
	}

    //highLight Field
    public void highLightElement(By locator){
        WebElement element =DriverFactory.getDriver().findElement(locator);
        ((JavascriptExecutor)DriverFactory.getDriver()).executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;');", element);
    }

    // getText
    public void getText(By locator){
    DriverFactory.getDriver().findElement(locator).getText();
    }//


    // Browser Navigation
    public void clickOnBrowserBackArrow() {
		DriverFactory.getDriver().navigate().back();
	}

	public void clickOnBrowserForwardArrow() {
		DriverFactory.getDriver().navigate().forward();
	}

	public void refreshBrowser() {
		DriverFactory.getDriver().navigate().refresh();
	}
}
