package com.bitpace.step_definitions;

import com.bitpace.pages.DepositMoneyPage;
import com.bitpace.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class DepositMoneyStepDef {
    @When("user click Deposit Money menu")
    public void user_click_Deposit_Money_menu() {
        new DepositMoneyPage().depositMoney.click();
        BrowserUtils.waitFor(1);

    }
    @When("user check pop up message and click Agree")
    public void user_check_pop_up_message_and_click_Agree() {
        new DepositMoneyPage().checkBox1.click();
        new DepositMoneyPage().checkBox2.click();
        new DepositMoneyPage().agreeButton.click();
        BrowserUtils.waitFor(1);

    }
    @Then("user should see {string} title")
    public void user_should_see_title(String title) {
        Assert.assertEquals(title,new DepositMoneyPage().depositMoneyTitle.getText());

    }
}
