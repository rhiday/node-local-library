const Author = require('../models/author')

//list of all authors
exports.author_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Author list');
};

//detail page for a specific author
exports.author_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Author detail' + req.params.id);
};
//author create form on GET
exports.author_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create GET');
};

//handle author create on POST
exports.author_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create POST');
};
//author delete on GET
exports.author_create_delete = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
};
//handle author delete on POST
exports.author_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete POST');
};
//author update form on GET
exports.author_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update GET');
};
//handle author update on POST
exports.author_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update POST');
}