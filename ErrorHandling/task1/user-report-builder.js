const UserDaoError = require('./errors/user-dao-error');
const UserError = require('./errors/user-error');
const UserOrderError = require('./errors/user-order-error');
const UserSumError = require('./errors/user-sum-error');

function validateUserSum(total) {
    if (total < 0)
        throw new UserSumError();
}

function validateDaoUser(userDao) {
    if (userDao === null)
        throw new UserDaoError();
}

function validateUser(user) {
    if (user === null)
        throw new UserError();
}

function validateUserOrders(orders) {
    if (!orders.length)
        throw new UserOrderError;
}

module.exports = class UserReportBuilder {
    constructor() {
        this.userDao = null;
    }

    getSum(orders) {
        let sum = 0;
        for (let order of orders) {
            if (order.isSubmitted()) {
                const total = order.total();
                validateUserSum(total)
                sum += total;
            }
        }

        return sum;
    }

    getUserTotalOrderAmount(userId) {
        validateDaoUser(this.userDao);

        const user = this.userDao.getUser(userId);
        validateUser(user);

        const orders = user.getAllOrders();
        validateUserOrders(orders);

        return this.getSum(orders);
    }

    getUserDao() {
        return this.userDao;
    }

    setUserDao(userDao) {
        this.userDao = userDao;
    }
}
