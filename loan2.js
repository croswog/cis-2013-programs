var $ = function (id)
{
	return document.getElementById(id);
}

/*
start
  declare floatMonthlyPayment, intLoanTerm, floatInterestRate, floatTotalCostWithoutInterest, floatTotalCostWithInterest
  get floatMonthlyPayment
  get intLoanTerm with loan term in months
  get floatInterestRate with interest rate in decimal format
  calculate floatTotalCostWithoutInterest = floatMonthlyPayment * intLoanTerm
  calculate floatTotalCostWithInterest * (1 + floatInterestRate)
  output floatTotalCostWithoutInterest
  output floatTotalCostWithInterest
end
*/

var calculate = function ()
{
	var floatMonthlyPayment, intLoanTerm, floatInterestRate, floatTotalCostWithoutInterest, floatTotalCostWithInterest;
	floatMonthlyPayment = parseFloat($("monthly_payment").value);
	intLoanTerm = parseInt($("loan_length").value);
	floatInterestRate = parseFloat($("interest_rate").value);
	floatTotalCostWithoutInterest = parseFloat(floatMonthlyPayment * intLoanTerm);
	floatTotalCostWithInterest = parseFloat(floatTotalCostWithoutInterest * (1 + floatInterestRate));
	$("total_cost_without_interest").value = floatTotalCostWithoutInterest;
	$("total_cost_with_interest").value = floatTotalCostWithInterest;
}

window.onload = function ()
{
	$("monthly_payment").value = "";
	$("loan_length").value = "";
	$("interest_rate").value = "";
	$("total_cost_without_interest").value = "";
	$("total_cost_with_interest").value = "";
	$("calc").onclick = calculate;
	$("monthly_payment").focus();
}