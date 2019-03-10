package com.slawomirciecierski.seleniumtest.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class SiteSteps {


  private ChromeDriver driver;

  //-----------------------------------Before, Given, When, Then, After
  @Before
  public void setUp() {
    System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
    driver = new ChromeDriver();
  }


  @Given("Użytkownik otworzy stronę {string}")
  public void userOpensSiteB(final String websiteUrl) {
    driver.get(websiteUrl);
  }

  @When("Użytkownik kliknie menu {string}")
  public void użytkownikKliknieMenu(final String menuName) {
    final String cssSelector = String.format("ul#menu > li:not(.lang) > a[title=\"%s\"]", menuName);
    final WebElement menuElement = driver.findElement(By.cssSelector(cssSelector));
    menuElement.click();
  }

  @Then("Tytuł strony kończy się na {string}")
  public void tytułStronyKończySieNaMenu(final String menuName) {
    assertTrue("Tytuł strony " + driver.getTitle() + " nie kończy się: " + menuName,
            driver.getTitle().endsWith(menuName));
  }


//  @After
//  public void finish() {
//    driver.close();
//  }
  //------------------------------------------------------
  //------------------------------------------------------


  @When("Użytkownik wyszuka słowo {string}")
  public void użytkownikWyszukaSlowo(String word) {
    final WebElement searchBoxElement = driver.findElement(By.id("searchQuery"));
    //użytkownik klika w okienko tekstowe
    searchBoxElement.click();
    //czyszczenie okienka
    searchBoxElement.clear();
    //wpisanie tekstu
    searchBoxElement.sendKeys(word);
    //wcisniecie ENTERA
    searchBoxElement.sendKeys(Keys.ENTER);

  }

  @Then("Użytkownik zobaczy {string} wyników")
  public void użytkownikZobaczyLiczbaWyników(String ilosc) {
    List<WebElement> elements = driver.findElements(By.cssSelector("div.tx-indexedsearch-res > div.tx-indexedsearch-res.res"));
    assertEquals(Integer.parseInt(ilosc), elements.size());

  }

//  @After
//  public void finish() {
//    driver.close();
//  }

  //----------------------------------------------------
  @Given("Użytkownik otworzy stronę Portalu Kujawskiego {string}")
  public void userOpensSitePK(final String websiteUrlPK) {
    driver.get(websiteUrlPK);
  }

  @When("Użytkownik wyszuka słowo w Portalu Kujawskim {string}")
  public void użytkownikWyszukaSlowoPK(String slowoPK) {
    final WebElement searchBoxElement = driver.findElement(By.id("mod-search-searchword"));
    //użytkownik klika w okienko tekstowe

    searchBoxElement.click();

    //czyszczenie okienka tu nie działa!!
    searchBoxElement.clear();
    //wpisanie tekstu
    searchBoxElement.sendKeys(slowoPK);
    //wcisniecie ENTERA

    searchBoxElement.sendKeys(Keys.ENTER);

  }

  @Then("Użytkownik zobaczy ilość powtórzeń w Portalu Kujawskim {string}")
  public void użytkownikZobaczyLiczbaWynikówYT(String liczbaPK) {
    List<WebElement> elements = driver.findElements(By.cssSelector("dd.result-text"));
    assertEquals(Integer.parseInt(liczbaPK), elements.size());

  }
  @After
  public void finish() {
    driver.close();
  }
}

