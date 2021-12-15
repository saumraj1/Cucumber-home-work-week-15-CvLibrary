
Feature:Job Search
  As a user I want to search the Job in cv Library

  Scenario Outline:User should be able to verify Job Search Results using different dataset
    Given I am on homepage
    When I click on search more options
    And I accept cookies
    And I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I enter distance "<distance>"
    And I enter salary minimum "<salaryMin>"
    And I enter salary maximum "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<jobType>"
    And I click on find jobs button
    Then I should be able to verify the result message "<result>"

    Examples:
      | jobTitle               | location                | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                                |
      | Tester                 | Harrow                  | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill           |
      | Software Test Engineer | West Midlands           | up to 15 miles | 35000     | 75000     | Per annum  | Contract  | Contract Software Test Engineer jobs in West Midlands |
      | Software Engineer      | Stevenage Hertfordshire | up to 10 miles | 30000     | 45000     | Per annum  | Permanent | Permanent Software Engineer jobs in Stevenage         |
      | Software Engineer      | Glasgow City            | up to 10 miles | 30000     | 60000     | Per annum  | Contract  | Contract Software Engineer jobs in Glasgow            |
      | Software Test Engineer | Derbyshire              | up to 25 miles | 4500      | 6000      | Per month  |Permanent  | Permanent Software Engineer jobs in Derbyshire        |
      | Tester                 | Coventry                | up to 10 miles | 50000     | 75000     | Per annum  |Permanent  | Permanent Tester jobs in Coventry                     |
      | Tester                 | Central London          | up to 15 miles | 60000     | 90000     | Per annum  |Permanent  | Permanent Tester jobs in Central London               |








