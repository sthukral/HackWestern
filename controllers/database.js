const validator = require('validator');

/**
 * GET /database
 * database form page.
 */
exports.initialize = (req, res) => {
  //const unknownUser = !(req.user);
  res.render('database', {
    title: 'Database',
    //sitekey: process.env.RECAPTCHA_SITE_KEY,
    //unknownUser,
  });
};


/**
 * POST /database
 * Add a contact to the database.
 */
exports.postQuery = async (req, res) => {
  const validationErrors =[];
  let name;
  let occupation;
  let dateOfBirth;
  let gender;
  let vaccineName;
  let vaccineNum;
  let vaccineEvent;
  let email;

  // connect to controller
  // controller will talk to database
  // Model View Controller 
}