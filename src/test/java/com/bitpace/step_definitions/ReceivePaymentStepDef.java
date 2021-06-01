package com.bitpace.step_definitions;

import com.bitpace.pages.ReceivePaymentPage;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.security.Key;

public class ReceivePaymentStepDef {

    @Given("user click Receive Payment menu icon")
    public void user_click_Receive_Payment_menu_icon() {
        new ReceivePaymentPage().receivePayment.click();
        BrowserUtils.waitFor(1);
    }

    @Then("user should be see {string} title")
    public void user_should_be_see_title(String str) {
        Assert.assertEquals(str,new ReceivePaymentPage().receivePaymentTitle.getText());

    }
    @When("user should be able to fill in the blank")
    public void user_should_be_able_to_fill_in_the_blank() {
        ReceivePaymentPage receivePaymentPage=new ReceivePaymentPage();

        Actions act=new Actions(Driver.get());
        act.click(receivePaymentPage.currencyAmount)
                .sendKeys("250",Keys.TAB)
                .sendKeys("Test",Keys.TAB)
                .sendKeys("",Keys.TAB)
                .sendKeys("test",Keys.TAB)
                .sendKeys("qa@test.com",Keys.TAB).build().perform();



    }

    @When("user click Create Payment URL button")
    public void user_click_Create_Payment_URL_button() {
        BrowserUtils.waitFor(1);
        new ReceivePaymentPage().createPaymentUrl.click();
        BrowserUtils.waitFor(2);

    }
    @Then("user see {string} text and {string} button")
    public void user_see_text_and_button(String urlText, String createButton) {
        Assert.assertEquals(urlText,new ReceivePaymentPage().paymentURLText.getText());
        Assert.assertEquals(createButton,new ReceivePaymentPage().createNewButton.getText());

    }
    @When("user click copy icon")
    public void user_click_copy_icon() {
      new ReceivePaymentPage().copyURLbutton.click();
      BrowserUtils.waitFor(1);
    }

    @Then("user see {string} txt")
    public void user_see_txt(String text) {
        Assert.assertEquals(text,new ReceivePaymentPage().URLCopiedText.getText());

    }

}
