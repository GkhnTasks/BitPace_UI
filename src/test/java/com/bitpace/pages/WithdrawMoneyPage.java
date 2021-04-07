package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import java.util.List;

public class WithdrawMoneyPage extends BasePage{


    @FindBy(xpath = "//span[contains(text(),'Withdraw Money')]")
    public WebElement withdrawtList;

    @FindBy(css = "[class*='card-header-title']")
    public WebElement withdrawTitle;

    @FindBy(xpath = "//*[contains(text(),'Create Withdrawal')]")
    public WebElement createWithdrawal;

    @FindBy(css = "[aria-label='Withdrawal Amount']")
    public WebElement withdrawalAMount;

    @FindBy(xpath= "(//*[contains(text(),'arrow_drop_down')])[1]")
    public WebElement currencyList;

    @FindBy(css = "[role='listitem']")
    public List<WebElement> currencyItem;

    @FindBy(css = "[placeholder='Please select your bank account']")
    public WebElement bankAccountList;

    @FindBy(css = "[role='listbox']")
    public WebElement bankAccountItem;

    @FindBy(xpath = "//*[contains(text(),'Create Withdraw')]")
    public WebElement createWithdrawButton;

    @FindBy(xpath = "//table//tbody/tr/td")
    public List<WebElement> withdrawTable;

    @FindBy(css = "[class='modal-title']")
    public WebElement detailHeader;

    @FindBy(css = "[class='col']")
    public List<WebElement> detailItems;

    @FindBy(css = "[class='dg-content']")
    public WebElement cancelTitle;

    @FindBy(css = "[class*='ok']")
    public WebElement yesButton;

    @FindBy(css = "[class='swal-text']")
    public WebElement confirmationMessage;






    public WebElement selectCurrencyItem(String item){
        WebElement items=null;
        for (WebElement element : currencyItem) {
            if (element.getText().equals(item))
                items=element;

        }
        return items;
    }

}
