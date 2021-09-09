package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class TradeSellPage extends BasePage{

    @FindBy(css = "[href*='sell']")
    public WebElement sellMenu;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement sellTitle;

    @FindBy(css = "[name='cryptocurrency-amount']")
    public WebElement coinAmountBoxTrade;

    @FindBy(css = "[class*='btnSendWallet']")
    public WebElement sellButton;

    @FindBy(xpath = "//span[contains(text(),'Confirm')]")
    public WebElement confirmButton;

    @FindBy(css = "[class*='page-title']")
    public List<WebElement> successPageTitle;
}
