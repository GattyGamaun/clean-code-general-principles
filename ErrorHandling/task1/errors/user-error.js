module.exports = class UserError extends Error {
    constructor() {
        super();
        this.name = 'UserError';
        this.message = 'WARNING: User ID doesn\'t exist.';
        this.stack = (new Error()).stack;
    }
}
