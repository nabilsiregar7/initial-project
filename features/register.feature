Feature: Cermati register scenario

  Scenario Outline: As a user, I can register into Cermati platform

    Given I am on the register page
      When I input email <email>
        And I input phone number<phoneNumber>
        And I input password <password>
        And I reinput password <password>
        And I input first name <firstName>
        And I input last name <lastName>
        And I input kabupaten <kabupaten>
    Then I click button daftar

    Examples:
      | email           | phoneNumber     | password        | firstName | lastName  | kabupaten   | 
      | dummy@gmail.com | 081234567890    | password1       | Nabil     | Siregar   | KOTA DEPOK  |
      | admin@gmail.com | 089876543210    | dummypassword2  | Siregar   | Nabil     | KOTA BOGOR  |
