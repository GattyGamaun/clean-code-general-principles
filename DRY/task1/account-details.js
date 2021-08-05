module.exports = class AccountDetails {
    constructor(birth, startDate, balance, age) {
        this.birth = birth;
        this.startDate = startDate;
        this.balance = balance;
        this.age = age;
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

