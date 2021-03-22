package com.bitpace.step_definitions;

import com.bitpace.pages.BasePage;
import com.bitpace.pages.OrderListPage;
import com.bitpace.utilities.ApiUtils;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import com.bitpace.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import static io.restassured.RestAssured.given;
import io.restassured.response.Response;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

public class OrderListStepDef {
    Response response;

    @Given("user hover side menu")
    public void user_hover_side_menu() {
        BrowserUtils.hover(new OrderListPage().sideMenu);

    }
    @When("user click Order List button")
    public void user_click_Order_List_button() {
        new OrderListPage().orderList.click();
        BrowserUtils.waitFor(3);
    }
    @Then("user see Order List page")
    public void user_see_Order_List_page() {

        String expectedUrl="https://merchant-dev.bitpace.com/orders";
        String actualUrl= Driver.get().getCurrentUrl();
        Assert.assertEquals(actualUrl,expectedUrl);
    }
    @When("user enter order ıd")
    public void user_enter_order_ıd() {

     new OrderListPage().orderId.sendKeys(ConfigurationReader.get("orderId"));
    }

    @When("user click search button")
    public void user_click_search_button() {

     new OrderListPage().searchButton.click();
     BrowserUtils.waitFor(2);
    }
    @Then("user match UI-API information")
    public void user_connect_Api() {
       Response response=given().accept(ContentType.JSON)
               .contentType(ContentType.JSON)
               .header("Authorization", ApiUtils.generateToken())
               .when().get(ConfigurationReader.get("apiUrl")+"/api/v1/orders/"+ConfigurationReader.get("orderId"));
            response.prettyPrint();


        //API Information

        //String typeAPI=response.path("data.type");
        String  statusAPI=response.path("data.status");
        Float coinAmountAPI1=response.path("data.cryptocurrency_amount");
        String coinAmountAPI=String.valueOf(coinAmountAPI1);
        Float amountAPI1=response.path("data.order_amount");
        String amountAPI=String.valueOf(amountAPI1);
        String currencyAPI=response.path("data.currency");
        String cryptocurrencyAPI=response.path("data.cryptocurrency");


        //UI Information
       OrderListPage orderPage=new OrderListPage();
       String statusUI=orderPage.statusUI.getText();
       String coinAmountUI=orderPage.coinAmountUI.getText();
       String amountUI=orderPage.amountUI.getText();

       //API and UI match

        Assert.assertEquals(statusAPI,statusUI);
        Assert.assertTrue(coinAmountUI.contains(coinAmountAPI));
        Assert.assertTrue(amountUI.contains(amountAPI));
        Assert.assertTrue(coinAmountUI.contains(cryptocurrencyAPI));
        Assert.assertTrue(amountUI.contains(currencyAPI));



    }

    @When("user type customer name")
    public void user_type_min_max_Coin_box() {
        BrowserUtils.waitFor(2);
    new OrderListPage().customerName.sendKeys("Ahmet");
    BrowserUtils.waitFor(2);

    }

    @When("click Clear button")
    public void click_Clear_button() {
        new OrderListPage().clearButton.click();

    }
    @Then("user should be see all search box empty")
    public void user_should_be_see_all_search_box_empty() {

       Assert.assertTrue(new OrderListPage().customerName.getText().isEmpty());

    }
    @When("user click detail icon")
    public void user_click_detail_icon() {
        new OrderListPage().orderDetailIcon.click();
        BrowserUtils.waitFor(2);
        System.out.println(new OrderListPage().test.getText());
        System.out.println("hello");


    }

    @Then("user see order detail")
    public void user_see_order_detail(List<String> allTitle) {
       // List<String> title=BrowserUtils.getElementsText(new OrderListPage().orderDetailTitle);
       // System.out.println("title.get(0) = " + title.get(1));

//        Assert.assertEquals(title.get(0),allTitle.get(0));
//        Assert.assertEquals(title.get(1),allTitle.get(1));
//        Assert.assertEquals(title.get(2),allTitle.get(2));
//        Assert.assertEquals(title.get(3),allTitle.get(3));




    }



}
