class Topic {
  constructor(db) {
    return db.collection('topics');
  }
}

module.exports = Topic;
