package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class TradeBuyPage extends BasePage {


    @FindBy(css = "[href*='buy']")
    public WebElement buyMenu;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement buyTitle;

    @FindBy(css = "[name='currency-amount']")
    public WebElement currencyAmountBoxTrade;

    @FindBy(css = "[class='btn btnSendWallet']")
    public WebElement buyButton;

    @FindBy(xpath = "//span[contains(text(),'Confirm')]")
    public WebElement confirmButton;

    @FindBy(css = "[class*='page-title']")
    public List<WebElement> successPageTitle;


}
