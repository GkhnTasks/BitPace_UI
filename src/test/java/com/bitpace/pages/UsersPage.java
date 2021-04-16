package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class UsersPage extends BasePage {

    @FindBy(xpath = "//span[contains(text(),'Users')]")
    public WebElement userstList;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement usersTitle;

    @FindBy(xpath = "//table//tbody//td")
    public List<WebElement> usersTable;

    @FindBy(xpath = "//*[contains(text(),'User Logs')]")
    public WebElement userLogs;

    @FindBy(xpath = "//*[contains(text(),'Add User')]")
    public WebElement addUser;

    @FindBy(xpath = "//tbody/tr[1]/td[6]/button[1]")
    public WebElement userEdit;

    @FindBy(xpath = "//tbody/tr[1]/td[6]/button[2]")
    public WebElement userDelete;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement userLogTitle;

    @FindBy(css = "[aria-label='First Name']")
    public WebElement userFirstName;

    @FindBy(css = "[class='btn btn-primary btn-lg']")
    public WebElement createUserButton;

    @FindBy(xpath = "//button[@class='btn success btn-secondary btn-sm']")
    public WebElement editButton;

    @FindBy(xpath = "//button[@class='btn danger btn-secondary btn-sm']")
    public WebElement deleteButton;

    @FindBy(css = "[class='custom-control-label']")
    public List<WebElement> privilagesOptions;

    @FindBy(xpath = "//span[contains(text(),'Update User')]")
    public WebElement updateUser;

    @FindBy(css = "[class*='card-header-title']")
    public List<WebElement> editUserTitles;

    @FindBy(css = "[class='dg-content']")
    public WebElement cancelTitle;

    @FindBy(css = "[class*='ok']")
    public WebElement yesButton;

    @FindBy(css = "[class='swal-text']")
    public WebElement confirmationMessage;












}
