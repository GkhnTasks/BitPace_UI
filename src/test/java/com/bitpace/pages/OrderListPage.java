package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class OrderListPage extends BasePage {


    @FindBy(xpath = "//span[contains(text(),'Order List')]")
    public WebElement orderList;

    @FindBy(css = "[class*='sidebar-menu']")
    public WebElement sideMenu;

    @FindBy(css = "[placeholder='Order Id']")
    public WebElement orderId;

    @FindBy(xpath = "//button[contains(text(),'Search')]")
    public WebElement searchButton;

    @FindBy(xpath = "(//table)[3]/tbody//td[3]")
    public WebElement statusUI;

    @FindBy(xpath = "(//table)[3]/tbody//td[5]")
    public WebElement coinAmountUI;

    @FindBy(xpath = "(//table)[3]/tbody//td[7]")
    public WebElement amountUI;

    @FindBy(css = "[placeholder='Customer Name']")
    public WebElement customerName;

    @FindBy(xpath = "//button[contains(text(),'Clear')]")
    public WebElement clearButton;

    @FindBy(xpath = "(//*[@class='pe-7s-search'])[1]")
    public WebElement orderDetailIcon;

    @FindBy(xpath = "//*[@class='col']")
    public List<WebElement> orderDetailTitle;

    @FindBy(xpath = "(//*[text()='Order Detail'])[1]")
    public WebElement test;










}
