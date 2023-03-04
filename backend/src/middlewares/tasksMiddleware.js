const validateFieldTitle = (resquest, response, next) => {
    const { body } = resquest;
    if (body.title === undefined) {
        return response.status(400).json({
            message: 'The field "title" is required'
        });
    }
    if (body.title === '') {
        return response.status(400).json({
            message: 'title cannot be empty'
        });
    }

    next();
};

const validateFieldStatus = (resquest, response, next) => {
    const { body } = resquest;
    if (body.status === undefined) {
        return response.status(400).json({
            message: 'The field "status" is required'
        });
    }
    if (body.status === '') {
        return response.status(400).json({
            message: 'status cannot be empty'
        });
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus
}