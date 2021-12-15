package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import org.testng.asserts.SoftAssert;
import uk.co.library.utility.Utility;

import java.util.List;


public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    SoftAssert softAssert=new SoftAssert();
    @CacheLookup
    @FindBy(className = "search-header__title")
    List<WebElement> resultTxt;
    public void verifyTheResults(String expected) {

        for(WebElement message: resultTxt)
        {
            softAssert.assertEquals(message.getText(),expected);
            System.out.println(message.getText());
        }
        softAssert.assertAll();
        log.info("Result message: "+resultTxt.toString());
        Reporter.log("Verify your text : " + resultTxt.toString() + "<br>");
    }

}
