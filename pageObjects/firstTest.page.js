const { assert } = require("chai");

class FirstTest_Page {

	get userNameInput() { return $("input[id='companyName']"); }
	get passwordInput() { return $("input[id='password']"); }

	get sighInButton() { return $("input[name='login']"); }
	get closeButton() { return $("i[class='popbox-close fa fa-times fs17 floating-close']"); }
	get viewPlanButton() { return $("a[class='btn blue']"); }

	get leadList() { return $("ul[id='leadsResultsList']"); }
	get selectedCatigoriesList() { return $("div[class='selected-categories-list']"); }

	login(userName, password) {
		this.userNameInput.setValue(userName);
		this.passwordInput.setValue(password);
		this.sighInButton.click();
		this.sighInButton.waitForDisplayed({ reverse: true });
		this.leadList.waitForDisplayed(3000);

		if (this.closeButton.isExisting()) {
			this.closeButton.click()
		}


	}


	clickOnTab(tabName) {
		var tab = $(`//*[normalize-space() = '${tabName}']`);
		tab.click();

	}

	clickViewPlanByID(id) {
		var plan = $(`li[data-href='/pbl/edit_info.php?id=${id}']`);
		plan.$("a[class='btn blue']").click()
	}

	validatePlanDetails(planName,status,address,wrench,price) {
		var plan = $(`//*[normalize-space() = '${planName}']`);
        plan=plan.nextElement();

		var currentStatus=plan.$("i[class='fa fa-pause-circle']").parentElement()
		assert.equal(currentStatus.getText(),status);

		var currentAddress=plan.$("i[class='fa fa-map-marker']").parentElement()
		assert.equal(currentAddress.getText(),address);

		var currentWrench=plan.$("i[class='fa fa-wrench']").parentElement()
		assert.equal(currentWrench.getText(),wrench);

		var currentPrice=plan.$("i[class='fa fa-dollar']").parentElement()
		assert.equal(currentPrice.getText(),price);
	}

	validateAmountCheckedCatigories(planName,amountOfCatigories) {
		var plan = $(`//*[normalize-space() = '${planName}']`);
        plan=plan.click();
        var currentCheckedAcount=0;
		var catigories=this.selectedCatigoriesList. $$('input[class="selenium-add-category"]');
		var filter = catigories.filter(function(catigory) {
            if(catigory.isSelected())
            currentCheckedAcount++;
               
         });
		 assert.equal(amountOfCatigories,currentCheckedAcount);
	}
}

module.exports = new FirstTest_Page();