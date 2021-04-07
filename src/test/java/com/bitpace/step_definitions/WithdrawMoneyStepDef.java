package com.bitpace.step_definitions;

import com.bitpace.pages.DashboardPage;
import com.bitpace.pages.WithdrawMoneyPage;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class WithdrawMoneyStepDef {

    @When("user click Withdraw Money menu")
    public void user_click_Withdraw_Money_menu() {
        new WithdrawMoneyPage().withdrawtList.click();
        BrowserUtils.waitFor(1);

    }

    @Then("user should see {string} titles")
    public void user_should_see_titles(String title) {

        Assert.assertEquals(title,new WithdrawMoneyPage().withdrawTitle.getText());

    }

    @When("user click Create Withdrawal button")
    public void user_click_Create_Withdrawal_button() {
        new WithdrawMoneyPage().createWithdrawal.click();
        BrowserUtils.waitFor(1);
    }


    @When("user enter Withdrawal Amount")
    public void user_enter_Withdrawal_Amount() {
        new WithdrawMoneyPage().withdrawalAMount.sendKeys(ConfigurationReader.get("currency_amount"));
    }
    @When("user select Currency {string}")
    public void user_select_Currency(String item) {
       WithdrawMoneyPage wd=new WithdrawMoneyPage();
       wd.currencyList.click();
       wd.selectCurrencyItem(item).click();
    }
    @When("user select Bank Account")
    public void user_select_Bank_Account() {
        WithdrawMoneyPage wd=new WithdrawMoneyPage();
        wd.bankAccountList.click();
        BrowserUtils.waitFor(2);
        wd.bankAccountItem.click();
        BrowserUtils.waitFor(1);
    }
    @When("user click Create Withdraw button")
    public void user_click_Create_Withdraw_button() {
        new WithdrawMoneyPage().createWithdrawButton.click();
        BrowserUtils.waitFor(2);
    }
    @Then("user see Withdrawal information")
    public void user_see_Withdrawal_information() {
        List<String > table=BrowserUtils.getElementsText(new WithdrawMoneyPage().withdrawTable);
        Assert.assertEquals("WITHDRAW",table.get(0));
        Assert.assertEquals(table.get(1),(ConfigurationReader.get("currency_amount"))+".00"+" EUR");
        Assert.assertEquals("Waiting Confirmation",table.get(3));
        Assert.assertTrue(new DashboardPage().userName.getText().contains(table.get(4)));
        Assert.assertEquals(ConfigurationReader.get("merchant_username"),table.get(5));
        Assert.assertEquals("Cancel",table.get(7));
    }
    @When("click search icon")
    public void click_search_icon() {
        new WithdrawMoneyPage().withdrawTable.get(6).click();
    }

    @Then("user see {string} header")
    public void user_see_header(String title) {
        Assert.assertEquals(title,new WithdrawMoneyPage().detailHeader.getText());

    }
    @Then("user see withdraw detail")
    public void user_see_withdraw_detail(List<String> detail) {
        List<String > detailItem=BrowserUtils.getElementsText(new WithdrawMoneyPage().detailItems);
        Assert.assertEquals(detail,detailItem);

    }
    @When("user click Cancel button")
    public void user_click_Cancel_button() {
        new WithdrawMoneyPage().withdrawTable.get(7).click();
    }

    @Then("user see {string}")
    public void user_see(String message) {
        Assert.assertEquals(message,new WithdrawMoneyPage().cancelTitle.getText());
    }
    @Then("user click Yes button")
    public void user_click_Yes_button() {
        new WithdrawMoneyPage().yesButton.click();
    }
    @Then("user see {string} message")
    public void user_see_message(String confMessage) {
        BrowserUtils.waitFor(1);
        Assert.assertEquals(confMessage,new WithdrawMoneyPage().confirmationMessage.getText());

    }

}
