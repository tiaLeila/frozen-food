const BASE_URL = "http://localhost:5555/graphql";

/**
 * Tasks (action handlers)
 */


/**
 * authenticate/ log in
 */
export async function authenticate (action, dispatchers) {
    try {
        const { email, password } = action.payload.credentials;
        const loginQuery = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        } 
        
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(loginQuery),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const responseData = await response.json();

        if (response.status !== 200 && response.status !== 201) throw new Error(responseData.errors[0].message)        

        const authData = responseData.data.login;

        return dispatchers.successAuth(authData);
    } catch (err) {
        return dispatchers.failureAuth(err)
    }
}


/**
 * sign up
 */
export async function signUp (action, dispatchers) {
    try {
        const { email, password } = action.payload.credentials;
        const createUserMutation = {
            query: `
                mutation {
                    createUser(userInput: {email: "${email}", password: "${password}"}) {
                        _id
                        email
                    }
                }
            `
        }
        
        
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(createUserMutation),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const responseData = await response.json();

        if (response.status !== 200 && response.status !== 201) throw new Error(responseData.errors[0].message)        
        if (responseData.errors) throw new Error(responseData.errors[0].message)

        const signUpData = responseData.data.createUser;

        return dispatchers.successAuth(signUpData);
    } catch (err) {
        return dispatchers.failureAuth(err)
    }
}