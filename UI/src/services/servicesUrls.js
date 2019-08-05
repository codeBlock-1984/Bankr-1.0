export const baseUrl = 'https://bankr-server.herokuapp.com/api/v1';

export const loginUrl = `${baseUrl}/auth/signin`;
export const signupUrl = `${baseUrl}/auth/signup`;
export const authUrl = `${baseUrl}/auth/validate/token`;
export const getUserTransactionsUrl = accountParam => `${baseUrl}/accounts/${accountParam}/transactions`;
export const getUserAccountsUrl = emailParam => `${baseUrl}/users/${emailParam}/accounts`;
