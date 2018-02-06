'use strict';

const moment = require('moment');
require('moment-recur');

class FlagDay {
  constructor(date, name, recurring = true, emoji = '🇩🇰') {
    if (recurring) {
      this.date = moment(date)
        .recur()
        .every(1)
        .year();
    } else {
      this.date = moment(date);
    }
    this.name = name;
    this.emoji = emoji;
  }

  matches(date) {
    if (typeof this.date.matches === 'function') {
      return this.date.matches(date);
    }
    return this.date.isSame(date, 'day');
  }
}

const flagDays = [
  new FlagDay('2018-02-05', 'Kronprinsesse Marys fødselsdag'),
  new FlagDay('2018-02-06', 'Prinsesse Maries fødselsdag')
];

module.exports = flagDays;
