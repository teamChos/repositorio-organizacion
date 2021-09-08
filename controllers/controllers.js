const { response, request } = require('express');

const homeGet = (req = request, res = response) => {
    res.json({
        msg: 'Servidor Express funcionando',
    });
};

module.exports = {
    homeGet
};