package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\Maven\\AdminLTE_BDD\\src\\main\\java\\feature",   //path of Freature Files
		glue = {"stepDefinition"},										//path of Step Definition Files
		format = {"pretty","html:test-output"},						//to generate diff type of reports
		monochrome = true,	    //Display o/p in proper readable format
		strict = true,			//it will check if any Step is not defined in the step defn file
		dryRun = false			//checks one to one mapping betn feature file scenario & stepDefn
		//tags = {"@SmokeTest , @RegressionTest"}   //OR condition >> {"@ABC , @XYZ"}
													//AND condition >> {"@ABC" , "@XYZ"}
													//~ this sign is to skip the test 
 		)

public class Runner {
			

}
