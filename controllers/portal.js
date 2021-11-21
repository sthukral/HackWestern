/**
 * GET /
 * Home page.
 */
 exports.index = (req, res) => {
    res.render('portal', {
      title: 'Employee Portal'
    });
  };