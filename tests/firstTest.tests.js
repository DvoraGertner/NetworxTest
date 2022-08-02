const { default: AllureReporter } = require("@wdio/allure-reporter");
var FirstTest_Page = require("../pageObjects/firstTest.page");
var data = require('../testData/firstTestData')


before(function () {

	AllureReporter.addStep('Lofin into Networx system')
	browser.url('/login');
	browser.maximizeWindow();
	FirstTest_Page.login(data.userProp.userName, data.userProp.password)
})


describe('First Tests', function () {


	it('click on View Plan by ID: ' + data.planByID.ID, function () {
		AllureReporter.addStep('Go to Plans tab')
		FirstTest_Page.clickOnTab('Plans');
		FirstTest_Page.viewPlanButton.waitForDisplayed(3000);

		FirstTest_Page.clickViewPlanByID(data.planByID.ID);

	});


	it('validate details of plan: ' + data.planDetails.name, function () {

		AllureReporter.addStep('Go to Plans tab')
		FirstTest_Page.clickOnTab('Plans');
		FirstTest_Page.viewPlanButton.waitForDisplayed(3000);

		FirstTest_Page.validatePlanDetails(data.planDetails.name, data.planDetails.status, data.planDetails.address, data.planDetails.wrench, data.planDetails.price)
	});

	it('Check that there is two categories selected in .selected-categories-list', function () {

		FirstTest_Page.validateAmountCheckedCatigories(data.planDetails.name, 2);
	});


});