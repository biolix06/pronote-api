const wayf = require('./generics/kdecole-wayf');

module.exports = (url, account, username, password) => wayf({
    url,
    username,
    password,

    casUrl: 'cas.arsene76.fr',
    idp: 'ATS_parent_eleve'
});
