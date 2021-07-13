package com.bitpace.step_definitions;

import com.bitpace.pages.TradePage;
import com.bitpace.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TradeStepDef {
    @When("user click Trade title")
    public void user_click_Trade_title() {
        new TradePage().trade.click();
        BrowserUtils.waitFor(2);

    }

    @Then("user see Trade page and history title")
    public void user_see_Trade_page_and_history_title() {

        Assert.assertEquals("Trade Cryptocurrency",new TradePage().tradeTitles.get(0).getText());
        Assert.assertEquals("Trade History",new TradePage().tradeTitles.get(1).getText());

    }


}
