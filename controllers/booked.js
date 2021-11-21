/**
 * GET /
 * Confirmation page.
 */
exports.index = (req, res) => {
    res.render('booked', {
      title: 'Booked Appointments'
    });
  };