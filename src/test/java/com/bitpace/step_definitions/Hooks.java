package com.bitpace.step_definitions;

import com.bitpace.utilities.DBUtils;
import com.bitpace.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;


public class Hooks {

	@Before("@db")
	public void dbHook() {
		System.out.println("creating database connection");
		DBUtils.createConnection();

	}
	
	@After("@db")
	public void afterDbHook() {
		System.out.println("closing database connection");
		DBUtils.destroyConnection();

	}

	@Before
	public void setUp() {
		// we put a logic that should apply to every scenario
    Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Driver.get().manage().window().maximize();

	}

	@After
	public void tearDown(Scenario scenario){
		if(scenario.isFailed()){
			final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
			scenario.attach(screenshot,"image/png","screenshot");
		}

		Driver.closeDriver();

	}


	
	
	
	
	
}
