const AGE = 60;
const INTEREST_PERCENT = 4.5;
const SENIOR_PERCENT = 5.5;
const BONUS_AGE = 13;

function getDiffYear(end, start) {
    return end.getFullYear() - start.getFullYear();
}

function correctDiffYear(end, start) {
    return getDiffYear(end, start) - 1;
}

function isCorrectDateChecked(end, start) {
    return end.getMonth() < start.getMonth()
        || end.getMonth() === start.getMonth() && end.getDate() < start.getDate();
}

function getDurationOfDates(from, to = Date.now()) {
    const start = new Date(from);
    const end = new Date(to);
    if (isCorrectDateChecked(from, to)) {
        return correctDiffYear(start, end);
    }

    return getDiffYear(from, to);
}

function durationBetweenDatesInYears(from, to) {
    return getDurationOfDates(from, to);
}

function isAccountStartedAfterBonusAge(accountDetails) {
    return durationBetweenDatesInYears(accountDetails.getBirth(), accountDetails.getStartDate()) > BONUS_AGE;
}

function durationSinceStartDateInYears(startDate) {
    return getDurationOfDates(startDate);
}

function calculateSeniorInterest(accountDetails) {
    return accountDetails.getBalance()
        * durationSinceStartDateInYears(accountDetails.getStartDate()) * SENIOR_PERCENT / 100;
}

function calculateCommonInterest(accountDetails) {
    return accountDetails.getBalance().doubleValue()
        * durationSinceStartDateInYears(accountDetails.getStartDate()) * INTEREST_PERCENT / 100;
}

function calculateInterest(accountDetails) {
    if (isNotAccountStartedAfterBonusAge(accountDetails)) {
        return 0;
    }

    if (AGE <= accountDetails.getAge()) {
        return calculateSeniorInterest(accountDetails);
    } else {
        return calculateCommonInterest(accountDetails);
    }
}

function isNotAccountStartedAfterBonusAge(accountDetails) {
    return !isAccountStartedAfterBonusAge(accountDetails);
}

module.exports = {
    calculateInterest,
};
