const { credentials } = require ('../models');
class CredentialsDAO {
    static async createUserCredentials (userCredentials){
        return await credentials.create(userCredentials);
    }
    static async findCredentialsByUsernamePassword(username, password){
        return await credentials.findOne({ where: {username, password} });
    }
}
module.exports = CredentialsDAO;