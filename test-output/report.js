$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1/AddUsers.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE AddUsers Features",
  "description": "",
  "id": "adminlte-addusers-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"\u003cUsername\u003e\" and \"\u003cMobile\u003e\" and \"\u003cEmail\u003e\" and \"\u003cGender\u003e\" and \"\u003cState\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Mobile",
        "Email",
        "Gender",
        "State",
        "Password"
      ],
      "line": 16,
      "id": "adminlte-addusers-features;user-data-scenario;;1"
    },
    {
      "cells": [
        "Nilesh",
        "8805712512",
        "nilesh@123",
        "Male",
        "HP",
        "10101"
      ],
      "line": 17,
      "id": "adminlte-addusers-features;user-data-scenario;;2"
    },
    {
      "cells": [
        "Kishor",
        "5555555555",
        "kishor@123",
        "Male",
        "Maharashtra",
        "20202"
      ],
      "line": 18,
      "id": "adminlte-addusers-features;user-data-scenario;;3"
    },
    {
      "cells": [
        "Priyanka",
        "8888888888",
        "priyanka@123",
        "Female",
        "HP",
        "30303"
      ],
      "line": 19,
      "id": "adminlte-addusers-features;user-data-scenario;;4"
    },
    {
      "cells": [
        "Sachin",
        "9999999999",
        "nilesh@123",
        "Male",
        "Delhi",
        "40404"
      ],
      "line": 20,
      "id": "adminlte-addusers-features;user-data-scenario;;5"
    },
    {
      "cells": [
        "Anuja",
        "3333333333",
        "nilesh@123",
        "Female",
        "Punjab",
        "50505"
      ],
      "line": 21,
      "id": "adminlte-addusers-features;user-data-scenario;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 282900,
  "status": "passed"
});
formatter.before({
  "duration": 18758006600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Nilesh\" and \"8805712512\" and \"nilesh@123\" and \"Male\" and \"HP\" and \"10101\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 15235894100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 453752600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 387640400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 12781400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "duration": 248060400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 7376200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 168165100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 9631700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nilesh",
      "offset": 18
    },
    {
      "val": "8805712512",
      "offset": 31
    },
    {
      "val": "nilesh@123",
      "offset": 48
    },
    {
      "val": "Male",
      "offset": 65
    },
    {
      "val": "HP",
      "offset": 76
    },
    {
      "val": "10101",
      "offset": 85
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2180093000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "duration": 2344643600,
  "status": "passed"
});
formatter.after({
  "duration": 284800,
  "status": "passed"
});
formatter.after({
  "duration": 4173667300,
  "status": "passed"
});
formatter.before({
  "duration": 251500,
  "status": "passed"
});
formatter.before({
  "duration": 10445884300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Kishor\" and \"5555555555\" and \"kishor@123\" and \"Male\" and \"Maharashtra\" and \"20202\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 11352765400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 333448800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 360729900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 7175800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "duration": 204307400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 10131200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 213318200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 10291000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kishor",
      "offset": 18
    },
    {
      "val": "5555555555",
      "offset": 31
    },
    {
      "val": "kishor@123",
      "offset": 48
    },
    {
      "val": "Male",
      "offset": 65
    },
    {
      "val": "Maharashtra",
      "offset": 76
    },
    {
      "val": "20202",
      "offset": 94
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 957156400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "duration": 2113161500,
  "status": "passed"
});
formatter.after({
  "duration": 222900,
  "status": "passed"
});
formatter.after({
  "duration": 4130379300,
  "status": "passed"
});
formatter.before({
  "duration": 178000,
  "status": "passed"
});
formatter.before({
  "duration": 10372347000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Priyanka\" and \"8888888888\" and \"priyanka@123\" and \"Female\" and \"HP\" and \"30303\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 12077446600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 323635900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 365199100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 8376500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "duration": 199204900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 12710700,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 197882400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 7676100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priyanka",
      "offset": 18
    },
    {
      "val": "8888888888",
      "offset": 33
    },
    {
      "val": "priyanka@123",
      "offset": 50
    },
    {
      "val": "Female",
      "offset": 69
    },
    {
      "val": "HP",
      "offset": 82
    },
    {
      "val": "30303",
      "offset": 91
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 840177200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "duration": 2088305200,
  "status": "passed"
});
formatter.after({
  "duration": 196900,
  "status": "passed"
});
formatter.after({
  "duration": 4108629300,
  "status": "passed"
});
formatter.before({
  "duration": 155100,
  "status": "passed"
});
formatter.before({
  "duration": 11783026100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Sachin\" and \"9999999999\" and \"nilesh@123\" and \"Male\" and \"Delhi\" and \"40404\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 10249548600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 306146100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 544005600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 21191400,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "duration": 377643500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 9684100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 221359000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 7079300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin",
      "offset": 18
    },
    {
      "val": "9999999999",
      "offset": 31
    },
    {
      "val": "nilesh@123",
      "offset": 48
    },
    {
      "val": "Male",
      "offset": 65
    },
    {
      "val": "Delhi",
      "offset": 76
    },
    {
      "val": "40404",
      "offset": 88
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 862181300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "duration": 2174380100,
  "status": "passed"
});
formatter.after({
  "duration": 253600,
  "status": "passed"
});
formatter.after({
  "duration": 4132535800,
  "status": "passed"
});
formatter.before({
  "duration": 163200,
  "status": "passed"
});
formatter.before({
  "duration": 11671684400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Data Scenario",
  "description": "",
  "id": "adminlte-addusers-features;user-data-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add User Enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Add Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Add Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Add User Details \"Anuja\" and \"3333333333\" and \"nilesh@123\" and \"Female\" and \"Punjab\" and \"50505\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Add Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.add_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 10020887100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 39
    }
  ],
  "location": "AddUserStepDefinition.add_User_Enters_and(String,String)"
});
formatter.result({
  "duration": 217995100,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Signin()"
});
formatter.result({
  "duration": 175383800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 9007800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Users()"
});
formatter.result({
  "duration": 230994300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 6872900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 163993200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 7828700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anuja",
      "offset": 18
    },
    {
      "val": "3333333333",
      "offset": 30
    },
    {
      "val": "nilesh@123",
      "offset": 47
    },
    {
      "val": "Female",
      "offset": 64
    },
    {
      "val": "Punjab",
      "offset": 77
    },
    {
      "val": "50505",
      "offset": 90
    }
  ],
  "location": "AddUserStepDefinition.add_User_Details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 462889300,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.add_Click_on_Submit()"
});
formatter.result({
  "duration": 2074876700,
  "status": "passed"
});
formatter.after({
  "duration": 135300,
  "status": "passed"
});
formatter.after({
  "duration": 148102900,
  "status": "passed"
});
formatter.uri("1/Dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Dashboard feature",
  "description": "",
  "id": "adminlte-dashboard-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 113000,
  "status": "passed"
});
formatter.before({
  "duration": 11828401500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "AdminLTE DashboardTest",
  "description": "",
  "id": "adminlte-dashboard-feature;adminlte-dashboardtest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Dashboard User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Dashboard User enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Dashboard Click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Dashboard Page Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Dashboard Click on Users Link",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardStepDefinition.dashboard_User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10097580000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 23
    },
    {
      "val": "123456",
      "offset": 45
    }
  ],
  "location": "DashboardStepDefinition.dashboard_User_enters_and(String,String)"
});
formatter.result({
  "duration": 256866400,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.dashboard_Click_on_Sign_In_Button()"
});
formatter.result({
  "duration": 245362000,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.dashboard_Page_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 9277500,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.dashboard_Click_on_Users_Link()"
});
formatter.result({
  "duration": 1097299700,
  "status": "passed"
});
formatter.after({
  "duration": 35100,
  "status": "passed"
});
formatter.after({
  "duration": 60157500,
  "status": "passed"
});
formatter.uri("2/DataTableApproch.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE AddUsers Features",
  "description": "",
  "id": "adminlte-addusers-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 72300,
  "status": "passed"
});
formatter.before({
  "duration": 11443259200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "adminlte-addusers-features;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "DataTable User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "DataTable User Enters usename and password",
  "rows": [
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "DataTable Click on Signin",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "DataTable Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "DataTable Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "DataTable Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "DataTable Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "DataTable Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "DataTable User Details Username and Mobile and Email and Gender and State and Password",
  "rows": [
    {
      "cells": [
        "Nilesh",
        "8805712512",
        "nilesh@123",
        "Male",
        "HP",
        "10101"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "DataTable Click on Submit",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTableApproch.datatable_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 10420016700,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_User_Enters_usename_and_password(DataTable)"
});
formatter.result({
  "duration": 231059900,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Click_on_Signin()"
});
formatter.result({
  "duration": 182439500,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 8260200,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Click_on_Users()"
});
formatter.result({
  "duration": 243798600,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 6238000,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 155855100,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 8808400,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_User_Details_Username_and_Mobile_and_Email_and_Gender_and_State_and_Password(DataTable)"
});
formatter.result({
  "duration": 519398500,
  "status": "passed"
});
formatter.match({
  "location": "DataTableApproch.datatable_Click_on_Submit()"
});
formatter.result({
  "duration": 66273500,
  "status": "passed"
});
formatter.after({
  "duration": 67900,
  "status": "passed"
});
formatter.after({
  "duration": 93337000,
  "status": "passed"
});
formatter.uri("2/DataTablesWithMaps.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE AddUsers Features",
  "description": "",
  "id": "adminlte-addusers-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 103700,
  "status": "passed"
});
formatter.before({
  "duration": 12186291600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "adminlte-addusers-features;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Map User is on Log in Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Map User Enters usename and password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 6
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Map Dashboard Title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Map Click on Users",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Map Users Title is AdminLTE User",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Map Click On Add User Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Map Users Title is AdminLTE Add User",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Map User Details Username and Mobile and Email and Gender and State and Password",
  "rows": [
    {
      "cells": [
        "Username",
        "Mobile",
        "Email",
        "Gender",
        "State",
        "Password"
      ],
      "line": 14
    },
    {
      "cells": [
        "Nilesh",
        "8805712512",
        "nilesh@123",
        "Male",
        "HP",
        "10101"
      ],
      "line": 15
    },
    {
      "cells": [
        "Kishor",
        "5555555555",
        "kishor@123",
        "Male",
        "Maharashtra",
        "20202"
      ],
      "line": 16
    },
    {
      "cells": [
        "Priyanka",
        "8888888888",
        "priyanka@123",
        "Female",
        "HP",
        "30303"
      ],
      "line": 17
    },
    {
      "cells": [
        "Sachin",
        "9999999999",
        "nilesh@123",
        "Male",
        "Delhi",
        "40404"
      ],
      "line": 18
    },
    {
      "cells": [
        "Anuja",
        "3333333333",
        "nilesh@123",
        "Female",
        "Punjab",
        "50505"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsingMapStepDefinition.map_User_is_on_Log_in_Page()"
});
formatter.result({
  "duration": 11000249200,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_User_Enters_usename_and_password(DataTable)"
});
formatter.result({
  "duration": 711410500,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_Dashboard_Title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 14594200,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_Click_on_Users()"
});
formatter.result({
  "duration": 1485224400,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_Users_Title_is_AdminLTE_User()"
});
formatter.result({
  "duration": 6782800,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_Click_On_Add_User_Button()"
});
formatter.result({
  "duration": 265065500,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_Users_Title_is_AdminLTE_Add_User()"
});
formatter.result({
  "duration": 7882400,
  "status": "passed"
});
formatter.match({
  "location": "UsingMapStepDefinition.map_User_Details_Username_and_Mobile_and_Email_and_Gender_and_State_and_Password(DataTable)"
});
formatter.result({
  "duration": 4899950100,
  "status": "passed"
});
formatter.after({
  "duration": 154000,
  "status": "passed"
});
formatter.after({
  "duration": 144317000,
  "status": "passed"
});
formatter.uri("3/Groups.feature");
formatter.feature({
  "line": 1,
  "name": "Groups Features",
  "description": "",
  "id": "groups-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 87600,
  "status": "passed"
});
formatter.before({
  "duration": 10485276700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "run1",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 1291500,
  "status": "passed"
});
formatter.after({
  "duration": 49500,
  "status": "passed"
});
formatter.after({
  "duration": 85090300,
  "status": "passed"
});
formatter.before({
  "duration": 78600,
  "status": "passed"
});
formatter.before({
  "duration": 12377266400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "run2",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 230600,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
  "status": "passed"
});
formatter.after({
  "duration": 72323400,
  "status": "passed"
});
formatter.before({
  "duration": 68200,
  "status": "passed"
});
formatter.before({
  "duration": 11620422700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "run3",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 138300,
  "status": "passed"
});
formatter.after({
  "duration": 34600,
  "status": "passed"
});
formatter.after({
  "duration": 98427500,
  "status": "passed"
});
formatter.before({
  "duration": 168600,
  "status": "passed"
});
formatter.before({
  "duration": 10668089300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    },
    {
      "line": 15,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "run4",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 371100,
  "status": "passed"
});
formatter.after({
  "duration": 104300,
  "status": "passed"
});
formatter.after({
  "duration": 230076400,
  "status": "passed"
});
formatter.before({
  "duration": 78900,
  "status": "passed"
});
formatter.before({
  "duration": 12238674400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "run5",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 169300,
  "status": "passed"
});
formatter.after({
  "duration": 39800,
  "status": "passed"
});
formatter.after({
  "duration": 82682400,
  "status": "passed"
});
formatter.before({
  "duration": 77000,
  "status": "passed"
});
formatter.before({
  "duration": 10393843300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "run6",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 203900,
  "status": "passed"
});
formatter.after({
  "duration": 81400,
  "status": "passed"
});
formatter.after({
  "duration": 72207000,
  "status": "passed"
});
formatter.before({
  "duration": 490100,
  "status": "passed"
});
formatter.before({
  "duration": 11461455600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@SmokeTest"
    },
    {
      "line": 27,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "run7",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 248900,
  "status": "passed"
});
formatter.after({
  "duration": 76700,
  "status": "passed"
});
formatter.after({
  "duration": 83122200,
  "status": "passed"
});
formatter.before({
  "duration": 1097000,
  "status": "passed"
});
formatter.before({
  "duration": 10579631000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    },
    {
      "line": 31,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "run8",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 172900,
  "status": "passed"
});
formatter.after({
  "duration": 887500,
  "status": "passed"
});
formatter.after({
  "duration": 212855200,
  "status": "passed"
});
formatter.before({
  "duration": 274500,
  "status": "passed"
});
formatter.before({
  "duration": 11406920100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "run9",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 95400,
  "status": "passed"
});
formatter.after({
  "duration": 38400,
  "status": "passed"
});
formatter.after({
  "duration": 144390000,
  "status": "passed"
});
formatter.before({
  "duration": 69200,
  "status": "passed"
});
formatter.before({
  "duration": 11198683400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "",
  "id": "groups-features;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "run10",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 3
    }
  ],
  "location": "GroupsStepDefinition.run(int)"
});
formatter.result({
  "duration": 155400,
  "status": "passed"
});
formatter.after({
  "duration": 26700,
  "status": "passed"
});
formatter.after({
  "duration": 98958300,
  "status": "passed"
});
formatter.uri("3/Login.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Login Feature",
  "description": "",
  "id": "adminlte-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "# Scenario: AdminLTE LoginTest"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#\tGiven User is already on Login Page"
    },
    {
      "line": 7,
      "value": "#\tWhen Page Title is AdminLTE"
    },
    {
      "line": 8,
      "value": "#\tThen User enters \"kiran@gmail.com\" and \"123456\""
    },
    {
      "line": 9,
      "value": "#\tAnd Click on Sign In Button"
    },
    {
      "line": 10,
      "value": "#\tAnd User is on DashBoard"
    },
    {
      "line": 13,
      "value": "# With Examples Keyword"
    }
  ],
  "line": 14,
  "name": "AdminLTE LoginTest",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Page Title is AdminLTE",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In Button",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "adminlte-login-feature;adminlte-logintest;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 23,
      "id": "adminlte-login-feature;adminlte-logintest;;2"
    },
    {
      "cells": [
        "nilesh@123",
        "123486"
      ],
      "line": 24,
      "id": "adminlte-login-feature;adminlte-logintest;;3"
    },
    {
      "cells": [
        "sachin@123",
        "99999"
      ],
      "line": 25,
      "id": "adminlte-login-feature;adminlte-logintest;;4"
    },
    {
      "cells": [
        "kishor@123",
        "33333333"
      ],
      "line": 26,
      "id": "adminlte-login-feature;adminlte-logintest;;5"
    },
    {
      "cells": [
        "Akash@123",
        "1111111"
      ],
      "line": 27,
      "id": "adminlte-login-feature;adminlte-logintest;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 87700,
  "status": "passed"
});
formatter.before({
  "duration": 11042399700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "AdminLTE LoginTest",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Page Title is AdminLTE",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 12675591700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_AdminLTE()"
});
formatter.result({
  "duration": 11490200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 305680000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Sign_In_Button()"
});
formatter.result({
  "duration": 979062400,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.after({
  "duration": 51366000,
  "status": "passed"
});
formatter.before({
  "duration": 62900,
  "status": "passed"
});
formatter.before({
  "duration": 11382322400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "AdminLTE LoginTest",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Page Title is AdminLTE",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"nilesh@123\" and \"123486\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10814769600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_AdminLTE()"
});
formatter.result({
  "duration": 7888200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nilesh@123",
      "offset": 13
    },
    {
      "val": "123486",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 212444100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Sign_In_Button()"
});
formatter.result({
  "duration": 102936100,
  "status": "passed"
});
formatter.after({
  "duration": 49600,
  "status": "passed"
});
formatter.after({
  "duration": 80931100,
  "status": "passed"
});
formatter.before({
  "duration": 85800,
  "status": "passed"
});
formatter.before({
  "duration": 12301247800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "AdminLTE LoginTest",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Page Title is AdminLTE",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"sachin@123\" and \"99999\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 12089261100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_AdminLTE()"
});
formatter.result({
  "duration": 9083100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachin@123",
      "offset": 13
    },
    {
      "val": "99999",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 186332100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Sign_In_Button()"
});
formatter.result({
  "duration": 85734200,
  "status": "passed"
});
formatter.after({
  "duration": 21900,
  "status": "passed"
});
formatter.after({
  "duration": 53640300,
  "status": "passed"
});
formatter.before({
  "duration": 69500,
  "status": "passed"
});
formatter.before({
  "duration": 10025487800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "AdminLTE LoginTest",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Page Title is AdminLTE",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"kishor@123\" and \"33333333\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11491514100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_AdminLTE()"
});
formatter.result({
  "duration": 11313500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kishor@123",
      "offset": 13
    },
    {
      "val": "33333333",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 313304600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Sign_In_Button()"
});
formatter.result({
  "duration": 163364000,
  "status": "passed"
});
formatter.after({
  "duration": 74900,
  "status": "passed"
});
formatter.after({
  "duration": 152496600,
  "status": "passed"
});
formatter.before({
  "duration": 79300,
  "status": "passed"
});
formatter.before({
  "duration": 11991715700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "AdminLTE LoginTest",
  "description": "",
  "id": "adminlte-login-feature;adminlte-logintest;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Page Title is AdminLTE",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Akash@123\" and \"1111111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 12810062600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_AdminLTE()"
});
formatter.result({
  "duration": 11062200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Akash@123",
      "offset": 13
    },
    {
      "val": "1111111",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 269165600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Sign_In_Button()"
});
formatter.result({
  "duration": 76199300,
  "status": "passed"
});
formatter.after({
  "duration": 25300,
  "status": "passed"
});
formatter.after({
  "duration": 92055200,
  "status": "passed"
});
formatter.uri("4/TaggedHooks.feature");
formatter.feature({
  "line": 1,
  "name": "Tagged Hooks Features",
  "description": "",
  "id": "tagged-hooks-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 86800,
  "status": "passed"
});
formatter.before({
  "duration": 29800,
  "status": "passed"
});
formatter.before({
  "duration": 12488051200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario1",
  "description": "",
  "id": "tagged-hooks-features;scenario1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login Page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.user_is_on_login_Page()"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.login_Page_title()"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.click_on_submit()"
});
formatter.result({
  "duration": 56700,
  "status": "passed"
});
formatter.after({
  "duration": 35200,
  "status": "passed"
});
formatter.after({
  "duration": 51500,
  "status": "passed"
});
formatter.after({
  "duration": 86990400,
  "status": "passed"
});
formatter.before({
  "duration": 145100,
  "status": "passed"
});
formatter.before({
  "duration": 37300,
  "status": "passed"
});
formatter.before({
  "duration": 10397472900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Scenario2",
  "description": "",
  "id": "tagged-hooks-features;scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Home page title",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on login",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.home_page_title()"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.click_on_login()"
});
formatter.result({
  "duration": 77100,
  "status": "passed"
});
formatter.after({
  "duration": 74600,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
formatter.after({
  "duration": 87143500,
  "status": "passed"
});
formatter.before({
  "duration": 55600,
  "status": "passed"
});
formatter.before({
  "duration": 11326277400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Scenario3",
  "description": "",
  "id": "tagged-hooks-features;scenario3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Dashboard Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Dashboard page title",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on ON",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.user_is_on_Dashboard_Page()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.dashboard_page_title()"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinitions.click_on_ON()"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.after({
  "duration": 87587400,
  "status": "passed"
});
formatter.uri("4/Users.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Users feature",
  "description": "",
  "id": "adminlte-users-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 92400,
  "status": "passed"
});
formatter.before({
  "duration": 11376458100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "AdminLTE UsersTest Scenario",
  "description": "",
  "id": "adminlte-users-feature;adminlte-userstest-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Users User enters \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Dashboard title is AdminLTE Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Users Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Users title is AdminLTE Users",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Add Users Button",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersStepDefinition.user_is_on_LoginPage()"
});
formatter.result({
  "duration": 11111470300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 19
    },
    {
      "val": "123456",
      "offset": 41
    }
  ],
  "location": "UsersStepDefinition.Users_user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 229545200,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinition.click_on_SignIn_Button()"
});
formatter.result({
  "duration": 164419200,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinition.dashboard_title_is_AdminLTE_Dashboard()"
});
formatter.result({
  "duration": 8663600,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinition.click_on_Users_Link()"
});
formatter.result({
  "duration": 316734300,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinition.users_title_is_AdminLTE_Users()"
});
formatter.result({
  "duration": 7195000,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinition.click_on_Add_Users_Button()"
});
formatter.result({
  "duration": 153081200,
  "status": "passed"
});
formatter.after({
  "duration": 26700,
  "status": "passed"
});
formatter.after({
  "duration": 59478300,
  "status": "passed"
});
});