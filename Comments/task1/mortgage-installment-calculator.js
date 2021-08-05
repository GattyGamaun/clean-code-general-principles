const InvalidInputException = require('./thirdparty/invalid-input-exception');

const NUMBER_OF_MONTHS = 12;
const PERCENTAGE = 100;
const SHIFT = 1;

function getExceptionWhenNegativeValuesUsed(principleAmount, yearMortgage, rate) {
    if (principleAmount < 0 || yearMortgage <= 0 || rate < 0) {
        throw new InvalidInputException('Negative values are not allowed');
    }
}

function convertInterestRateIntoDecimal(rate) {
    return rate / PERCENTAGE;
}

function convertYearMortgageToMonthlyMortgage(yearMortgage) {
    return yearMortgage * NUMBER_OF_MONTHS;
}

function getMonthlyPaymentWhenPrincipleIsZero(principle, monthlyMortgage) {
    return principle / monthlyMortgage;
}

function getMonthlyPayment(principleAmount, monthlyRate, monthlyMortgage) {
    return (principleAmount * monthlyRate) / (SHIFT - Math.pow(SHIFT + monthlyRate, -monthlyMortgage))
}

function getMonthlyRate(rate) {
    return rate / NUMBER_OF_MONTHS;
}

function getCalculatedPayment(principleAmount, yearMortgage, interestRate) {
    const decimalRate = convertInterestRateIntoDecimal(interestRate);
    const monthlyMortgage = convertYearMortgageToMonthlyMortgage(yearMortgage);

    if (decimalRate === 0) {
        return getMonthlyPaymentWhenPrincipleIsZero(principleAmount, monthlyMortgage);
    }

    return getMonthlyPayment(principleAmount, getMonthlyRate(decimalRate), monthlyMortgage);
}

exports.calculateMonthlyPayment = function (principleAmount, yearMortgage, interestRate) {
    getExceptionWhenNegativeValuesUsed(principleAmount, yearMortgage, interestRate);

    return getCalculatedPayment(principleAmount, yearMortgage, interestRate);
}
