package uk.co.library.cucumber;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.library.propertyreader.PropertyReader;
import uk.co.library.utility.Utility;

import java.io.IOException;

/**
 * By Bhoomi
 **/
public class Hooks extends Utility {

    @Before
    public  void setUp(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
//        Reporter.assignAuthor("Bhoomika");
    }
    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
      String screenShortpath =  Utility.getScreenshot(driver,scenario.getName().replace(" ","_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShortpath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        closeBrowser();
    }
}
