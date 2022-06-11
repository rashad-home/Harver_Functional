Feature: _herokuApp

  @webdriverIOScenario1
  Scenario: As a user, I can select dropdown list value

    Given I am on the login page _herokuApp
    When I click dropdown text _herokuApp
    When I can click option1 _herokuApp
    Then I should be able to see option1 is selected _herokuApp

  @webdriverIOScenario2
  Scenario: As a user, I can select checkbox value 1

    Given I am on the login page _herokuApp
    When I click checkbox text _herokuApp
    When I can click checkbox1 _herokuApp
    Then I should be able to see checkBox1 is checked _herokuApp

  @webdriverIOScenario3
  Scenario: As a user, I can select floating menu

    Given I am on the login page _herokuApp
    When I click floating menu text _herokuApp
    When I can click news _herokuApp
    Then I should be able to see changed url _herokuApp

  @webdriverIOScenario4
  Scenario: As a user, I can select notification message
    Given I am on the login page _herokuApp
    When I click notification message text _herokuApp
    When I can click Click here _herokuApp
    Then I should be able to see notification message _herokuApp

  @webdriverIOScenario5
  Scenario: As a user, I can add remove elements
    Given I am on the login page _herokuApp
    When I click add remove elements text _herokuApp
    When I can click add element _herokuApp
    Then I should be able to see delete button _herokuApp
    When I can click delete _herokuApp
    Then I should not be able to see delete button _herokuApp