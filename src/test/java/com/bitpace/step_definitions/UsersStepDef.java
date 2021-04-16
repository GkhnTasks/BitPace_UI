package com.bitpace.step_definitions;

import com.bitpace.pages.UsersPage;
import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

public class UsersStepDef {

    @When("user click Users menu")
    public void user_click_Users_menu() {
        new UsersPage().userstList.click();
        BrowserUtils.waitFor(2);

    }


    @Then("user see {string} titles")
    public void user_see_titles(String title) {

        Assert.assertEquals(title,new UsersPage().usersTitle.getText());
    }
    @Then("user see user information")
    public void user_see_user_information(List<String> userInfo) {

        Assert.assertEquals(userInfo.get(0),new UsersPage().usersTable.get(0).getText());
        Assert.assertEquals(userInfo.get(1),new UsersPage().usersTable.get(1).getText());
        Assert.assertEquals(userInfo.get(2),new UsersPage().usersTable.get(2).getText());
        Assert.assertEquals(userInfo.get(3),new UsersPage().usersTable.get(3).getText());
        Assert.assertEquals(userInfo.get(4),new UsersPage().usersTable.get(4).getText());

    }

    @When("user click User Logs")
    public void user_click_User_Logs() {
      new UsersPage().userLogs.click();
      BrowserUtils.waitFor(1);
    }

    @Then("user see {string} page")
    public void user_see_page(String title) {
        Assert.assertEquals(title,new UsersPage().userLogTitle.getText());
    }

    @When("click Add User")
    public void click_Add_User() {
       new UsersPage().addUser.click();
       BrowserUtils.waitFor(1);
    }

    @When("user fill in the blank")
    public void user_fill_in_the_blank() {
        Actions act=new Actions(Driver.get());
        act.click(new UsersPage().userFirstName)
             .sendKeys("QA",Keys.TAB)
             .sendKeys("Test",Keys.TAB)
             .sendKeys("Ankara06",Keys.TAB)
             .sendKeys("Ankara06",Keys.TAB,Keys.ENTER,Keys.DOWN,Keys.ENTER,Keys.TAB)
             .sendKeys("qa@mail.com").build().perform();

       BrowserUtils.waitFor(2);

    }

    @When("click Create User button")
    public void click_Create_User_button() {
       new UsersPage().createUserButton.click();
       BrowserUtils.waitFor(1);
    }

    @Then("user should be see new users on the table")
    public void user_should_be_see_new_users_on_the_table() {
       Assert.assertEquals(new UsersPage().usersTable.get(8).getText(),"qa@mail.com");
    }
    @When("user click edit button")
    public void user_click_edit_button() {
        new UsersPage().editButton.click();
        BrowserUtils.waitFor(2);

    }

    @Then("user see {string} and {string} title")
    public void user_see_and_title(String editTitle, String passwordTitle) {
        Assert.assertEquals(editTitle,new UsersPage().editUserTitles.get(0).getText());
        Assert.assertEquals(passwordTitle,new UsersPage().editUserTitles.get(1).getText());

    }
    @Then("user change Task Privilages")
    public void user_change_Task_Privilages() {
        new UsersPage().privilagesOptions.get(1).click();
        BrowserUtils.waitFor(1);
    }
    @Then("user click Update User button")
    public void user_click_Update_User_button() {
        new UsersPage().updateUser.click();
        BrowserUtils.waitFor(3);

    }
    @Then("user see main page")
    public void user_see_main_page() {
      Assert.assertEquals("User List",new UsersPage().usersTitle.getText());

    }
    @When("user click Delete button")
    public void user_click_Delete_button() {
        new UsersPage().deleteButton.click();
        BrowserUtils.waitFor(1);
    }

    @Then("user see {string} text")
    public void user_see_text(String title) {
        Assert.assertEquals(title,new UsersPage().cancelTitle.getText());
    }
    @Then("user click Yes btton")
    public void user_click_Yes_btton() {
       new UsersPage().yesButton.click();
       BrowserUtils.waitFor(1);
    }
    @Then("user see {string} texts")
    public void user_see_texts(String title) {
        Assert.assertEquals(title,new UsersPage().confirmationMessage.getText());
    }

}
