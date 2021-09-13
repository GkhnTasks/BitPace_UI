package com.bitpace.step_definitions;

import com.bitpace.pages.MakePaymentPage;
import com.bitpace.utilities.ApiUtils;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import com.bitpace.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.assertj.core.api.SoftAssertions;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class MakePaymentStepDef {
    Response response;


    @When("user click Make Payment section")
    public void user_click_Make_Payment_section() {
        new MakePaymentPage().makePaymentList.click();
        BrowserUtils.waitFor(1);


    }
    @When("user click Close on the 2FA message")
    public void user_click_Close_on_the_2FA_message() {
        new MakePaymentPage().closeButton.click();
        BrowserUtils.waitFor(2);
    }


    @Then("user see Make Payment page")
    public void user_see_Make_Payment_page() {
        Assert.assertEquals("Make Payment",new MakePaymentPage().makePaymentTitle.getText());
        BrowserUtils.waitFor(2);
    }
    @When("the user click currency dropdown")
    public void the_user_click_currency_dropdown() {

        new MakePaymentPage().currencyDropDown.click();
        BrowserUtils.waitFor(2);

    }

    @Then("user see all currnecy")
    public void user_see_all_currnecy(List<String> currency) {
        List<String > allCurrency=BrowserUtils.getElementsText(new MakePaymentPage().currencyList);
        Assert.assertEquals(currency,allCurrency);
    }

    @When("user select currency {string}")
    public void user_select_currency(String currency) {
        new MakePaymentPage().selectCurrency(currency).click();
        BrowserUtils.waitFor(2);
    }

    @Then("user see currency title")
    public void user_see_currency_title() {

        String actualTitle=new MakePaymentPage().currencyTitle.getText();
        String expectedTitle= ConfigurationReader.get("currency")+" "+"Amount";
        Assert.assertTrue(actualTitle.contains(expectedTitle));

    }

    @Given("enter value in  EUR Amount box")
    public void enter_value_in_EUR_Amount_box() {
        Actions actions = new Actions(Driver.get());
        actions.click(new MakePaymentPage().walletBox).perform();

        BrowserUtils.waitFor(1);
        new MakePaymentPage().currencyAmountBox.sendKeys(ConfigurationReader.get("currency_amount"));
       // new MakePaymentPage().coinAmountBox.click();
        BrowserUtils.waitFor(2);

    }
    @When("user select cryptocurrency {string}")
    public void user_select_cryptocurrency(String coins) {

      new MakePaymentPage().selectCoin(coins).click();
      BrowserUtils.waitFor(2);
    }


    @Then("user match UI-API information make payment page {string} and {string}")
    public void match_UI_API_information_make_payment_page(String coin,String currency) {
        //API INFORMATION

        //create a map to keep request json body information
        Map<String,Object> requestMap = new HashMap<>();
        //adding value that we want to post
        requestMap.put("cryptocurrency",coin);
        requestMap.put("cryptocurrency_amount","null");
        requestMap.put("currency_amount",ConfigurationReader.get("currency_amount"));
        requestMap.put("order_type","WITHDRAW");
        requestMap.put("currency",currency);
        requestMap.put("exclude_withdraw_fee",true);


        Response response=given().accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .header("Authorization", ApiUtils.generateToken())
                .body(requestMap)
                .when().post(ConfigurationReader.get("apiUrl")+"/api/v1/orders/prices");
        response.prettyPrint();

        float API_cryptocurrency_amount=response.path("data.cryptocurrency_amount");
        float API_withdraw_fee=response.path("data.withdraw_fee");
        float API_withdraw_fee_value=response.path("data.withdraw_fee_value");

    //UI INFORMATION

        MakePaymentPage makePaymentPage=new MakePaymentPage();
        List<String> allInformationItem=BrowserUtils.getElementsText(makePaymentPage.makePaymentbottomInformation);
    //COMMISSION RATE
        String UI_ommisionRate=allInformationItem.get(0);
        float UI_commisionRate=Float.parseFloat(BrowserUtils.findNumberCharacter(UI_ommisionRate));
        System.out.println("UI_commisionRate = " + UI_commisionRate);
    //WITHDRAW FEE
        String UI_ithdraw_fee=allInformationItem.get(1);
        BigDecimal UI_withdraw_fee=BigDecimal.valueOf(BrowserUtils.findNumberBigDecimal(UI_ithdraw_fee));
        System.out.println("UI_withdraw_fee = " + UI_withdraw_fee);
    //FIAT AMOUNT
        String UI_IAT_amount=allInformationItem.get(2);
        double UI_FIAT_amount=Double.parseDouble(BrowserUtils.findNumber(UI_IAT_amount));
        System.out.println("UI_FIAT_amount = " + UI_FIAT_amount);
    //BTC AMOUNT
        String UI_cryptocurrency=allInformationItem.get(3);
        double UI_cryptocurrency_amount=Double.parseDouble(UI_cryptocurrency);
        System.out.println("UI_cryptocurrency_amount = " + UI_cryptocurrency_amount);

    //CALCULATE BTC TO RECEIVE
        float currencyAmount=Float.parseFloat(ConfigurationReader.get("currency_amount"));
        float totalAmount=API_withdraw_fee_value+(UI_commisionRate*currencyAmount/100)+currencyAmount;
        DecimalFormat df = new DecimalFormat("#.##");
        df.setRoundingMode(RoundingMode.FLOOR);
        System.out.println("totalAmount = " + df.format(totalAmount));

    //MATCH UI-API

        Assert.assertEquals(API_cryptocurrency_amount,UI_cryptocurrency_amount,1);
        String FıatAmount=String.valueOf(UI_FIAT_amount);
        SoftAssertions softAssertions = new SoftAssertions();
        softAssertions.assertThat(FıatAmount.equals(df.format(totalAmount)));
        Assert.assertEquals(FıatAmount,df.format(totalAmount));
        softAssertions.assertAll();
    }
    @Then("user see all title")
    public void user_see_all_title(List<String> allTitle) {
       // BrowserUtils.clickWithJS(new MakePaymentPage().walletBox);

        List<String> actualTitle=BrowserUtils.getElementsText(new MakePaymentPage().historyTitle);
        int i=0;
        for (String s : actualTitle) {
            Assert.assertTrue(s.contains(allTitle.get(i)));
            i++;
        }

    }
    @When("user enter wallet address")
    public void user_enter_wallet_address() {
        new MakePaymentPage().walletBox.sendKeys(ConfigurationReader.get("wallet_address"));
    }

    @When("user click Send button")
    public void user_click_Send_button() {
        new MakePaymentPage().sendButton.click();
        BrowserUtils.waitFor(1);
    }
    @Then("user see {string} title")
    public void user_see_title(String string) {
        Assert.assertEquals(string,new MakePaymentPage().paymentConfirmTitle.getText());
    }
    @Then("user click Close button")
    public void user_click_Close_button() {
        new MakePaymentPage().confirmCloseButton.click();
    }



}
