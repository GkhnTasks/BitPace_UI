package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ReceivePaymentPage extends BasePage{


    @FindBy(xpath = "//span[contains(text(),'Receive Payment')]")
    public WebElement receivePayment;

    @FindBy(xpath = "(//*[contains(@class,'card-header-title')])[1]")
    public WebElement receivePaymentTitle;

    @FindBy(css = "[name='amount']")
    public WebElement currencyAmount;

    @FindBy(css = "[class='btn btn-success btn-secondary']")
    public WebElement createPaymentUrl;

    @FindBy(css = "[class*='btn-warning']")
    public WebElement createNewButton;

    @FindBy(xpath = "//legend[contains(text(),'Payment URL')]")
    public WebElement paymentURLText;

    @FindBy(css = "[alt='Copy URL']")
    public WebElement copyURLbutton;

    @FindBy(css = "[class='d-block text-success']")
    public WebElement URLCopiedText;



}
