package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DepositMoneyPage extends BasePage {

    @FindBy(xpath = "//span[contains(text(),'Deposit Money')]")
    public WebElement depositMoney;

    @FindBy(css = "[for='checkbox-1']")
    public WebElement checkBox1;

    @FindBy(css = "[for='checkbox-2']")
    public WebElement checkBox2;

    @FindBy(xpath = "//*[contains(text(),'I AGREE')]")
    public WebElement agreeButton;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement depositMoneyTitle;
}
