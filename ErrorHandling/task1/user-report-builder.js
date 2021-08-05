module.exports = class UserReportBuilder {
    constructor() {
        this.userDao = null;
    }

    getUserTotalOrderAmount(userId) {
        if (this.userDao === null)
            throw new Error('ERROR: DB is not connected');

        const user = this.userDao.getUser(userId);
        if (user === null)
            throw new Error('WARNING: User ID doesn\'t exist.');

        const orders = user.getAllOrders();

        if (!orders.length)
            throw new Error('WARNING: User have no submitted orders.');

        let sum = 0;
        for (let order of orders) {
            if (order.isSubmitted()) {
                const total = order.total();
                if (total < 0)
                    throw new Error('ERROR: Wrong order amount.');
                sum += total;
            }
        }

        return sum;
    }

    getUserDao() {
        return this.userDao;
    }

    setUserDao(userDao) {
        this.userDao = userDao;
    }
}
