package uk.co.library.pages;

import com.aventstack.extentreports.Status;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")//send job title
    WebElement jobTitle;
    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")//send job location
    WebElement location;
    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")//select distance
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;
    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;
    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//input[contains(@id,'hp-search-btn')]")
    WebElement findJobsBtn;
    @CacheLookup
    @FindBy(xpath = "//span//div//span[normalize-space()='Accept All']")
    WebElement acceptCookies;
    @CacheLookup
    @FindBy(id = "gdpr-consent-notice")
    WebElement iframe;


//Methods

    public void setAcceptCookies() {
        switchToIframe(iframe);
        clickOnElement(acceptCookies);
        driver.switchTo().defaultContent();

    }


    public void enterJobTitle(String jobtitle) {
        sendTextToElement(jobTitle, jobtitle);
        //  CustomListeners.node.log(Status.PASS, "Enter job Title : " + jobTitle.getText());
        Reporter.log("Enter job Title : " + jobTitle.getText() + "<br>");
        log.info("Enter job title " + jobTitle.toString());
    }

    public void enterLocation(String Location) {
        sendTextToElement(location, Location);
        // CustomListeners.node.log(Status.PASS, "Enter job Location : " + location.getText());
        Reporter.log("Enter job Location : " + location.getText() + "<br>");
        log.info("Enter job Location " + location.toString());
    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
        // CustomListeners.node.log(Status.PASS, "Select Distance: " + distanceDropDown.getText());
        Reporter.log("Select Distance : " + distanceDropDown.getText() + "<br>");
        log.info("select Distance : " + distanceDropDown.toString());


    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);
        //   CustomListeners.node.log(Status.PASS, "Click on Search Option Button : " + moreSearchOptionsLink.getText());
        Reporter.log("Click on Search Option Button : " + moreSearchOptionsLink.getText() + "<br>");
        log.info("Click on Search Option Button : " + moreSearchOptionsLink.toString());
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin, minSalary);
        // CustomListeners.node.log(Status.PASS, "Click on Search Option Button : " + salaryMin.getText());
        Reporter.log("Click on Search Option Button : " + salaryMin.getText() + "<br>");
        log.info("Click on Search Option Button : " + salaryMin.toString());


    }

    public void enterMaxSalary(String maxSalary) {
        //   CustomListeners.node.log(Status.PASS,"Click on Search Option Button : " +salaryMax.getText());

        sendTextToElement(salaryMax, maxSalary);
        Reporter.log("Click on Search Option Button : " + salaryMax.getText() + "<br>");
        log.info("Click on Search Option Button: " + salaryMax.toString());

    }

    public void selectSalaryType(String sType) {
        //  CustomListeners.node.log(Status.PASS, "Select Salary type : " + salaryTypeDropDown.getText());
        selectByVisibleTextFromDropDown(salaryTypeDropDown, sType);
        Reporter.log("Select Salary type : " + salaryTypeDropDown.getText() + "<br>");
        log.info("Select Salary type  : " + salaryTypeDropDown.toString());

    }

    public void selectJobType(String jobType) {
        //  CustomListeners.node.log(Status.PASS, "Select Job type : " + jobTypeDropDown.getText());
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
        Reporter.log("Select Job type : " + jobTypeDropDown.getText() + "<br>");
        log.info("Select Job type : " + jobTypeDropDown.toString());

    }

    public void clickOnFindJobsButton() {
        //CustomListeners.node.log(Status.PASS, "Click on 'ADD TO CART' Button");
        Reporter.log("Click on 'ADD TO CART' Button" + "<br>");
        clickOnElement(findJobsBtn);
        log.info("Click on 'ADD TO CART' Button : " + findJobsBtn.toString());

    }

}
