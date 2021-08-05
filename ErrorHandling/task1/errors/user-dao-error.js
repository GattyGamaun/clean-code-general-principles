module.exports = class UserDaoError extends Error {
    constructor() {
        super();
        this.name = 'UserDaoError';
        this.message = 'ERROR: DB is not connected';
        this.stack = (new Error()).stack;
    }
}
