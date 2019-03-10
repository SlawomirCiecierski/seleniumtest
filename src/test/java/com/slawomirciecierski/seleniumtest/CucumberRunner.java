package com.slawomirciecierski.seleniumtest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty", "html:cucumber"})
public class CucumberRunner {

}
