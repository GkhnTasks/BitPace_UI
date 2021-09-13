package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DepositMoneyPage extends BasePage {

    @FindBy(xpath = "//span[contains(text(),'Deposit Money')]")
    public WebElement depositMoney;

    @FindBy(xpath = "(//*[@class='v-input__slot'])[1]")
    public WebElement checkBox1;

    @FindBy(xpath= "(//*[@class='v-input__slot'])[2]")
    public WebElement checkBox2;

    @FindBy(xpath = "//*[contains(text(),'I AGREE')]")
    public WebElement agreeButton;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement depositMoneyTitle;
}
