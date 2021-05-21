package com.bitpace.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SupportPage extends BasePage{

    @FindBy(xpath = "//span[contains(text(),'Support')]")
    public WebElement support;

    @FindBy(css = "[aria-label='Message']")
    public WebElement messageSection;

    @FindBy(xpath = "(//*[@type='button'])[5]")
    public WebElement submitButton;

    @FindBy(css = "[class='page-title']")
    public WebElement successTitle;






}
