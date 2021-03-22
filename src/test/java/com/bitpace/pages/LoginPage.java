package com.bitpace.pages;

import com.bitpace.utilities.ConfigurationReader;
import com.bitpace.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.Set;

public class LoginPage extends BasePage{


    @FindBy(linkText = "Merchant Login")
    public WebElement merchantLogin;

    @FindBy(css = "[aria-label='E-mail']")
    public WebElement emailBox;

    @FindBy(css = "[aria-label='Password']")
    public WebElement passwordBox;

    @FindBy(css = "[class*='loginBtn']")
    public WebElement loginButton;

    @FindBy(css = "[aria-live='polite']")
    public WebElement warningMessage;





   public void switchBrowser(){

       String currentHandle= Driver.get().getWindowHandle();
       Set<String> handles=Driver.get().getWindowHandles();
       for(String actual: handles)
       {

           if(!actual.equalsIgnoreCase(currentHandle))
           {
               //switching to the opened tab
               Driver.get().switchTo().window(actual);

           }
       }
   }

    public void loginOptional(String userType){
        String username;
        String password;
        switch (userType) {
            case "admin":
                username= ConfigurationReader.get("merchant_username");
                password= ConfigurationReader.get("merchant_password");
                break;
            case "invalid":
                username= "mike@gmail.com";
                password= "Ankara06";
                break;
            case "any":
                username= ConfigurationReader.get("username");
                password= ConfigurationReader.get("password");
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + userType);
        }
        emailBox.sendKeys(username);
        passwordBox.sendKeys(password);
        loginButton.click();
    }
}
