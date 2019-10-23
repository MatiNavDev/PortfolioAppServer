const { getNow } = require('../../helpers/date');
const { classes, CollectionsFactory } = require('../CollectionsFactory');

/**
 * Inserts All Topics
 */
const insertTopics = function() {
  const aboutMe = {
    topic: 'About me',
    text:
      'I am Matias Navarro. I am a System Information Engineer who codes. I have worked being a pure programmer, or talking with users to get requirements and design the product, or being responsible for a project. I care deeply about creating solid software which can help to users to find a solution to their problems. I like to be involved in different stages of its creation, like the initial steps of talking with users and get the real problems or designing a product on front-end or back-end side. As an Engineer this means that i can jump in at any stage of a project, from design to build',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  };

  const experience = {
    topic: 'Experience',
    text:
      'I have been doing this for 6 years and professionally for almost 4 years. I started at university where i have my first interaction with algorithms, object oriented programming, databases, requirements, among other things. When i started professionally in HUENEI, i was a mobile front-end developer using IONIC. Some months after, i started with web development using ANGULAR. When i gained some experience, i move to another company (PLAYTOWN) where initially i was responsible for the front-end side of a football application, and some time after i started working on the back-end side of an internal web application where i have to get requirements from the users, and i have to be responsible for the front-end side of it too . There i obtained a lot of experience on the differents side of a project. While i was here, i was taking a subject called “Final Project” where i was part of a 5 people team. There we make a web application for ANAC where i was in charge on the front-end side and adviser on the back-end side. All this allow me to take a great experience which make me to be able to take another step up, so i move to CONTAGRAM where i was incorporated to work in an public web application, CHEQUESGRAM. There i was responsible not only on it’s front-end side, but also on the back-end. I enjoyed and learned a lot working on this projects and with this companies, and i am excited to continue growing professionally in my future.',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    createdAt: getNow(),
    updatedAt: getNow()
  };

  const othersAndMe = {
    topic: 'Others and me',
    text:
      'Professionally and academically, i have the pleasure to work with a lot of people, in teams of 5 or 6 people or where i was responsible for one side of a project or for all of its development. In my university, i have my first interactions with teams where i learned a lot about how to interact with people, how to communicate when i agree with someone as much as when i disagree. Professionally, i have my first interaction combining theory and practice. In HUENEI i participate on a SCRUM methodology learning how it’s works in practice. But it was a estructural company, PLAYTOWN on the other side was a more informal company with more informal meetings, so i learned how to take my learnings to a less technical word. i have to admit, that i enjoyed a lot doing that and being on that warm ambient. And because of that when i give my next step, i decided to keep growing on another startup (CONTAGRAM), where combines the informal with a growing ambient. There, i work for both sides of CHEQUESGRAM, front-end and back-end. I can communicate with some remote developers with those who i can talk and discuss some decisions,  although i am the only responsible for the project. It is a great experience, where i grow day by day and i admit that i enjoy a lot facing diary challenges and learning from them.',
    image:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    createdAt: getNow(),
    updatedAt: getNow()
  };
  const Topic = new CollectionsFactory(classes.TOPIC);
  Topic.addDocument([aboutMe, experience, othersAndMe]);
};

module.exports = {
  insertTopics
};
