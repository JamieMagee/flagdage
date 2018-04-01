'use strict';

const moment = require('moment');
const flagDays = require('./flag-days');
const Twitter = require('twitter');

module.exports = function run(context) {
  moment.locale('da-dk');
  const today = moment();

  context.log.info(`Current date is ${today.format('D. MMMM')}`);

  flagDays.forEach(flagDay => {
    if (flagDay.matches(today)) {
      tweet(today, flagDay, context);
    }
  });

  context.done();
};

function tweet(today, flagDay, context) {
  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

  const status =
    `I dag den ${today.format('D. MMMM')} ` +
    `flager busserne fordi det er ${flagDay.name} ${flagDay.emoji}`;

  client
    .post('statuses/update', { status: status })
    .then(function success(tweet) {
      context.log.info(tweet);
    })
    .catch(function error(error) {
      context.log.info(error);
    });
}
