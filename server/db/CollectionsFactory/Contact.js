class Contact {
  constructor(db) {
    return db.collection('contacts');
  }
}

module.exports = Contact;
