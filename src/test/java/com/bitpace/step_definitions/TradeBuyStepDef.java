package com.bitpace.step_definitions;

import com.bitpace.pages.MakePaymentPage;
import com.bitpace.pages.TradeBuyPage;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TradeBuyStepDef {
    @When("click Buy menu item")
    public void click_Buy_menu_item() {
        new TradeBuyPage().buyMenu.click();
        BrowserUtils.waitFor(2);

    }

    @Then("user see Trade buy title")
    public void user_see_Trade_buy_title() {
        Assert.assertEquals("Trade Cryptocurrency (Buy Coin)",new TradeBuyPage().buyTitle.getText());

    }
    @Then("enter value in  EUR Amount box for Trade Buy")
    public void enter_value_in_EUR_Amount_box_for_Trade_Buy() {

      new TradeBuyPage().currencyAmountBoxTrade.sendKeys(ConfigurationReader.get("currency_amount"));
      BrowserUtils.waitFor(3);
    }


    @Then("user select cryptocurrency {string} for Trade Buy")
    public void user_select_cryptocurrency_for_Trade_Buy(String coin) {

        new MakePaymentPage().selectCoin(coin).click();
        BrowserUtils.waitFor(3);

    }

    @Then("Click Buy button")
    public void click_Buy_button() {
        new TradeBuyPage().buyButton.click();

    }

    @Then("Click confirm")
    public void click_confirm() {
        new TradeBuyPage().confirmButton.click();
        BrowserUtils.waitFor(1);

    }
    @Then("user see success page")
    public void user_see_success_page() {
        Assert.assertTrue(new TradeBuyPage().successPageTitle.get(0).getText().contains("We are processing your transaction"));
        Assert.assertTrue(new TradeBuyPage().successPageTitle.get(1).getText().contains("will be added to your account shortly.\n" +
                "You can see the progress in trade history as well as the order list."));

    }

}
