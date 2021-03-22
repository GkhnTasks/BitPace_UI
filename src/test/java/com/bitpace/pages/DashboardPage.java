package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DashboardPage extends BasePage {

    @FindBy(css = "[class='widget-content-left header-user-info']")
    public WebElement userName;

    @FindBy(xpath = "(//*[contains(@class,'dropdown-toggle')])[2]")
    public WebElement filterButton;

    @FindBy(css = "[href='#'][role='menuitem']")
    public List<WebElement> filterList;

    @FindBy(xpath = "(//table)[3]/thead/tr/th/div")
    public List<WebElement> ActivitiesHeader;



}
