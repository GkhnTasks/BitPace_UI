package com.bitpace.step_definitions;

import com.bitpace.pages.LoginPage;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import com.bitpace.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;

public class LoginStepDef {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("the user click Mercant Login button")
    public void the_user_click_Mercant_Login_button() {
      //new LoginPage().merchantLogin.click();
       // BrowserUtils.waitFor(5);

    }

    @When("the user enters the {string} information")
    public void the_user_enters_the_information(String userType)  {
    // new LoginPage().switchBrowser();
     new LoginPage().loginOptional(userType);
     BrowserUtils.waitFor(3);

    }

    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {

    // String expectedUrl="https://merchant-dev.bitpace.com/";
    // String actualUrl=Driver.get().getCurrentUrl();
     //   Assert.assertEquals(expectedUrl,actualUrl);
    }

    @When("the user enters the {string} credentials")
    public void the_user_enters_the_credentials(String userInvalid) {
      //  new LoginPage().switchBrowser();
        new LoginPage().loginOptional(userInvalid);
        BrowserUtils.waitFor(2);

    }



    @Then("user should be see {string} message")
    public void user_should_be_see_message(String message) {

        String actualMessage=new LoginPage().warningMessage.getText();
        Assert.assertTrue(actualMessage.contains(message));

    }


}
