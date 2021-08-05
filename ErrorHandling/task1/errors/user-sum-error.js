module.exports = class UserSumError extends Error {
    constructor() {
        super();
        this.name = 'UserSumError';
        this.message = 'ERROR: Wrong order amount.';
        this.stack = (new Error()).stack;
    }
}
