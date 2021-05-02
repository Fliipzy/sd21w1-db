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
		const trxResult = Loan.transaction(async trx => {
			try {
				// insert with insertGraph to handle loan & material__loan inserts in one call
				const result = Loan.query(trx)
					.insertGraph({userId, dueDate, materials: materialsIds}, { relate: true });
				
				// handle stuff here that needs to happen if loan is created successfully
				if (result) {
					
				}
			}
			catch (error) {
				trx.rollback();
			}
		});
		
	} catch (exception) {
		console.log(exception);
	}
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
	getLoansByUser: getLoansByUser
};