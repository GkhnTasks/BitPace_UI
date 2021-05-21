package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ReceivePaymentPage extends BasePage{


    @FindBy(xpath = "//span[contains(text(),'Receive Payment')]")
    public WebElement receivePayment;

    @FindBy(xpath = "(//*[contains(@class,'card-header-title')])[1]")
    public WebElement receivePaymentTitle;
}
