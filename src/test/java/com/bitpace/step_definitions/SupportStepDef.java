package com.bitpace.step_definitions;

import com.bitpace.pages.SupportPage;
import com.bitpace.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class SupportStepDef {
    @Given("user click Support menu title")
    public void user_click_Support_menu_title() {
        new SupportPage().support.click();
        BrowserUtils.waitFor(2);

    }

    @When("user fill in the blank on support page")
    public void user_fill_in_the_blank_on_support_page() {
        new SupportPage().messageSection.sendKeys("QA Test.Gokhan.Can you help me?");

    }
    @When("user click Submit button")
    public void user_click_Submit_button() {
        new SupportPage().submitButton.click();
        BrowserUtils.waitFor(2);

    }
    @Then("user see confirm message")
    public void user_see_confirm_message() {
        String expectedTtile="Our representatives will contact you shortly. For urgent inquiries please contact us at support@bitpace.com";

        Assert.assertEquals(expectedTtile,new SupportPage().successTitle.getText());

    }
}
