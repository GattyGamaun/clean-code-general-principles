module.exports = class AccountDetails {
    constructor(birthDate, startDate, balance) {
        this.birthDate = birthDate;
        this.startDate = startDate;
        this.balance = balance;
        this.age = new Date().getFullYear() - new Date(birthDate).getFullYear();
    }

    getProps(props) {
        return this[props];
    }

    getAllProps() {
        return Object.keys(this);
    }

    setProps(props, value) {
        if (this.getAllProps().includes(props)) {
            this[props] = value;
        }
    }
};

