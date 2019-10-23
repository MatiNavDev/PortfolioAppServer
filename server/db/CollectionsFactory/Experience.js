class Experience {
  constructor(db) {
    return db.collection('experiences');
  }
}

module.exports = Experience;
