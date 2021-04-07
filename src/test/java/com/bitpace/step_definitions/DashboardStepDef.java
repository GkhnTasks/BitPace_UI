package com.bitpace.step_definitions;

import com.bitpace.pages.DashboardPage;
import com.bitpace.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class DashboardStepDef {
    @Then("user should be see your name {string}")
    public void user_should_be_see_your_name(String userFullName) {
     String actualName=new DashboardPage().userName.getText();
     Assert.assertTrue(actualName.contains(userFullName));

    }

    @When("click filter button")
    public void click_filter_button() {
       new DashboardPage().filterButton.click();
        BrowserUtils.waitFor(2);
    }

    @Then("usershould be see filter list")
    public void usershould_be_see_filter_list(List<String> filterOptions) {

        List<String> actualOptions=BrowserUtils.getElementsText(new DashboardPage().filterList);
        Assert.assertEquals(filterOptions,actualOptions);

    }
    @Then("usershould be see see activities header")
    public void usershould_be_see_see_activities_header(List<String> headerTitle) {

        List<String> actualTitle=BrowserUtils.getElementsText(new DashboardPage().ActivitiesHeader);
        Assert.assertEquals(headerTitle,actualTitle);

    }



}
