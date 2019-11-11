Feature: AdminLTE Users feature

Scenario: AdminLTE UsersTest Scenario

  Given User is on LoginPage
  When Users User enters "kiran@gmail.com" and "123456"
  Then Click on SignIn Button
  When Dashboard title is AdminLTE Dashboard
  Then Click on Users Link
  When Users title is AdminLTE Users
  Then Click on Add Users Button
   