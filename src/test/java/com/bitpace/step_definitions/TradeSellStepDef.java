package com.bitpace.step_definitions;

import com.bitpace.pages.MakePaymentPage;
import com.bitpace.pages.TradeBuyPage;
import com.bitpace.pages.TradeSellPage;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TradeSellStepDef {
    @When("click Sell menu item")
    public void click_Sell_menu_item() {
        new TradeSellPage().sellMenu.click();
        BrowserUtils.waitFor(2);

    }

    @Then("user see Trade sell title")
    public void user_see_Trade_sell_title() {
        Assert.assertEquals("Trade Cryptocurrency (Sell Coin)",new TradeSellPage().sellTitle.getText());

    }
    @Then("enter value in  Coin Amount box for Trade Sell")
    public void enter_value_in_Coin_Amount_box_for_Trade_Sell() {
        new TradeSellPage().coinAmountBoxTrade.sendKeys("0.01");
        BrowserUtils.waitFor(3);

    }
    @Then("user select cryptocurrency {string} for Trade Sell")
    public void user_select_cryptocurrency_for_Trade_Sell(String coin) {
        new MakePaymentPage().selectCurrency(coin).click();
        BrowserUtils.waitFor(3);

    }
    @Then("Click Sell button")
    public void click_Sell_button() {
        new TradeSellPage().sellButton.click();

    }
}
