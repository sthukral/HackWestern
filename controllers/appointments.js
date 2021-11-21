/**
 * GET /
 * Appointments page.
 */
 exports.index = (req, res) => {
    res.render('appointments', {
      title: 'Available Appointments'
    });
  };