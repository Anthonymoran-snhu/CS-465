/* GET travel view. */
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr getaways' });
};

module.exports = {
  travel
};