/**
 * GET /
 * Confirmation page.
 */
 exports.index = (req, res) => {
    res.render('confirmation', {
      title: 'Appointment Confirmed'
    });
  };