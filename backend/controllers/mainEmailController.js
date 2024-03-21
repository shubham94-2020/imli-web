const Email = require('./../models/emailSchema')

exports.sendmail = async (req, res) => {
    try {
      const emails = await Email.find({}, 'email');
      res.json(emails.map(email => email.email));
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };