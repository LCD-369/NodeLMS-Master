var routes = require('express').Router()
var authorDao = require('../dao/authorDao')
// Get all authors
routes.get('/api/author', function (req, res) {
  authorDao.getAllAuthors(function (error, result) {
    if (error) throw error
    res.setHeader('Content-Type', 'application/json')
    res.send(result)
  })
})
// Add Author
routes.post('/api/author', function (req, res) {
  var author = req.body
  authorDao.addAuthor(author, function (error, result) {
    if (error) {
      res.status(400)
      res.send('Add author Failed!')
    } else {
      res.status(201)
      res.json({'SUCCESS': author})
    }
  })
})
// Delete author
routes.delete('/api/author/:authorId', function (req, res) {
  authorDao.removeAuthor(req.params.authorId, function (error, result) {
    if (error) {
      res.status(400)
      res.send('Delete author Failed!')
    } else {
    res.status(201);
    res.json({'REMOVED': req.params.authorId})
    }
  })
})
// Update author
routes.put('/api/author/:authorId', function (req, res) {
  var author = req.body;
  author.authorId = req.params.authorId;
  authorDao.updateAuthor(author, function (error, result) {
    if(err){
      res.status(400)
      res.send('Update Author Failed!')
    }
    else {
      res.status(201);
      res.json({'UPDATED': author});
    }
  });
});

module.exports = routes
