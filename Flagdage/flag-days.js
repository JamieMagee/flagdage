'use strict';

const moment = require('moment');
require('moment-recur-ts');

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
  new FlagDay('2018-01-01', 'Nytårsdag'),
  new FlagDay('2018-02-05', 'Kronprinsesse Marys fødselsdag'),
  new FlagDay('2018-02-06', 'Prinsesse Maries fødselsdag'),
  new FlagDay('2018-03-23', 'Nordens dag'),
  new FlagDay('2018-04-09', 'Danmarks besættelse 1940'),
  new FlagDay('2018-04-16', 'Dronning Margrethes fødselsdag'),
  new FlagDay('2018-04-29', 'Prinsesse Benediktes fødselsdag'),
  new FlagDay('2018-05-01', 'Arbejdernes kampdag'),
  new FlagDay('2018-05-04', 'Danmarks Befrielsesdag'),
  new FlagDay('2018-05-05', 'Danmarks befrielse 1945'),
  new FlagDay('2018-05-06', 'Børnehjælpsdagen'),
  new FlagDay('2018-05-09', 'Europadag', true, '🇪🇺'),
  new FlagDay('2018-05-26', 'Kronprins Frederiks fødselsdag'),
  new FlagDay('2018-06-05', 'Grundlovsdag'),
  new FlagDay('2018-06-07', 'Prins Joachims fødselsdag'),
  new FlagDay('2018-06-15', 'Valdemarsdag og Genforeningsdag'),
  new FlagDay('2018-09-05', 'Danmarks Udsendte'),
  new FlagDay('2018-10-24', 'FN-dag', true, '🇺🇳'),
  new FlagDay('2018-12-25', 'Juledag'),
  // 2018
  new FlagDay('2018-03-30', 'Langfredag', false),
  new FlagDay('2018-04-01', 'Påskedag', false),
  new FlagDay('2018-08-13', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-14', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-15', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-16', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-17', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-18', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-19', 'Copenhagen Pride', false, '🏳️‍🌈'),
  new FlagDay('2018-08-28', 'Fransk statsbesøg', false, '🇫🇷'),
  new FlagDay('2018-08-29', 'Fransk statsbesøg', false, '🇫🇷')
];

module.exports = flagDays;
