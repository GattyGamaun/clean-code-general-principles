module.exports = class UserOrderError extends Error {
    constructor() {
        super();
        this.name = 'UserOrderError';
        this.message = 'WARNING: User have no submitted orders.'
        this.stack = (new Error()).stack;
    }
}
