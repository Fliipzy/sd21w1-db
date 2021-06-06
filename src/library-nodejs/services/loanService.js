const Loan = require("../models/Loan.js");

/**
 * Inserts a new loan & related data into the database
 * @param {*} userId the user id
 * @param {*} dueDate the date where the loan must be returned
 * @param {*} materialsIds array of material id objects ([{id: 1}, {id: 2}]) 
 * @returns 
 */
async function createLoan(userId, dueDate, materialsIds) {
	try {
		const trxResult = await Loan.transaction(async trx => {
			try {
				// insert with insertGraph to handle loan & material__loan inserts in one call
				const result = await Loan.query(trx)
					.insertGraph({ userId, dueDate, materials: materialsIds }, { relate: true });
				
				return result;
			}
			catch (error) {
				trx.rollback();
				return null;
			}
		});
		return trxResult;
	} catch (exception) {
		console.log(exception);
		return null;
	}
}

async function getAllLoans() {
	return await Loan.query();
}

async function getLoansByUser(userId, ...relations) {
	const loanQuery = Loan.query()
		.where("user_id", userId);
	
	relations.forEach(relation => {
		loanQuery.withGraphJoined(relation);
	});

	return await loanQuery;
}

module.exports = {
	createLoan: createLoan,
	getAllLoans: getAllLoans,
	getLoansByUser: getLoansByUser
};