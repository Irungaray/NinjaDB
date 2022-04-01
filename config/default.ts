let {
    PORT,
    dbUser,
    dbPassword,
    dbName,
    dbClUri,
} = process.env

export default {
    PORT,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@${dbClUri}/${dbName}?retryWrites=true&w=majority`,
}
