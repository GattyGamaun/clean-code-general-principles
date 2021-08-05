module.exports = class UserReportController {
    constructor() {
        this.userReportBuilder = null;
    }

    getUserTotalOrderAmountView(userId, model) {
        try {
            model.addAttribute('userTotalMessage', this.getUserTotalMessage(userId));

            return 'userTotal';
        } catch (e) {
            return e.message;
        }
    }

    getUserTotalMessage(userId) {
        try {
            return `User Total: ${this.userReportBuilder.getUserTotalOrderAmount(userId)}$`;
        } catch (e) {
            if (e.message === 'ERROR: DB is not connected')
                throw new Error('technicalError')

            return e.message;
        }

    }

    getUserReportBuilder() {
        return this.userReportBuilder;
    }

    setUserReportBuilder(userReportBuilder) {
        this.userReportBuilder = userReportBuilder;
    }
}
