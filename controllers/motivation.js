/**
 * GET /
 * Motivation page.
 */
 exports.index = (req, res) => {
    res.render('motivation', {
      title: 'Motivation'
    });
  };