package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class TradePage extends BasePage{

    @FindBy(xpath = "//span[contains(text(),'Trade')]")
    public WebElement trade;

    @FindBy(css = "[class*='card-header-title']")
    public List<WebElement> tradeTitles;


}
