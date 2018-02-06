'use strict';

const moment = require('moment');
const flagDays = require('./flag-days');

module.exports = function run(context) {
  moment.locale('da-dk');
  const today = moment();

  flagDays.forEach(flagDay => {
    if (flagDay.matches(today)) {
      context.log(
        `I dag den ${today.format('D. MMMM')} flager busserne fordi det er 
        ${flagDay.name} ${flagDay.emoji}`
      );
    }
  });

  context.done();
};
