module.exports = class AccountDetails {
    constructor(birthDate, startDate, balance) {
        this.birthDate = birthDate;
        this.startDate = startDate;
        this.balance = balance;
    }

    getBirthDate() {
        return this.birthDate;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }

    getStartDate() {
        return this.startDate;
    }

    setStartDate(startDate) {
        this.startDate = startDate;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance) {
        this.balance = balance;
    }
};

