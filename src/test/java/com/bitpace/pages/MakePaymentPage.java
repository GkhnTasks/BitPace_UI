package com.bitpace.pages;

import com.bitpace.utilities.BrowserUtils;
import com.bitpace.utilities.ConfigurationReader;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class MakePaymentPage extends  BasePage{


    @FindBy(xpath = "//span[contains(text(),'Make Payment')]")
    public WebElement makePaymentList;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement makePaymentTitle;

    @FindBy(xpath = "(//*[@class='select-wrapper'])[1]")
    public  WebElement currencyDropDown;

    @FindBy(xpath = "//*[@class='dropdown-item']")
    public List<WebElement> currencyList;

    @FindBy(xpath = "(//*[@class='select-wrapper'])[2]")
    public WebElement coinDropDown;

    @FindBy(xpath = "//*[@class='dropdown-item']")
    public List<WebElement> coinList;

    @FindBy(css = "[name='currency-amount']")
    public WebElement currencyAmountBox;

    @FindBy(css = "[name='cryptocurrency-amount']")
    public WebElement coinAmountBox;

    @FindBy(css = "[name='walletAddress']")
    public WebElement walletBox;

    @FindBy(css = "[class='text-left']")
    public List<WebElement> amountDescriptionField;

    @FindBy(xpath = "(//*[@class='flex col xs12 sm6 md3'])[1]")
    public WebElement currencyTitle;

    @FindBy(css = "[class='text-right']")
    public List<WebElement> makePaymentbottomInformation;







    public WebElement selectCurrency(String currency){
        currencyDropDown.click();
        BrowserUtils.waitFor(1);
        WebElement item = null;
        for (WebElement element : currencyList) {
            if (element.getText().equals(currency)){
                item=element;
                BrowserUtils.waitFor(1);
            }
        }
        return  item;
    }

    public WebElement selectCoin(String coin){
        coinDropDown.click();
        BrowserUtils.waitFor(1);
        WebElement item = null;
        for (WebElement element : coinList) {
            if (element.getText().equals(coin)){
                item=element;
                BrowserUtils.waitFor(1);
            }
        }
        return item;
    }



}
