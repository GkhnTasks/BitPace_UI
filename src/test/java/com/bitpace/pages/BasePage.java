package com.bitpace.pages;

import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.Driver;
import org.junit.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;

public abstract class BasePage {

     public BasePage() {
         PageFactory.initElements(Driver.get(),this);
     }
     @FindBy(css="[width='42']")
     public WebElement profile;


     @FindBy(xpath = "//button[contains(text(),'Logout')]")
     public WebElement logout;




     public void logout(){
         profile.click();
         logout.click();
         BrowserUtils.waitFor(5);


     }
}
