export const MONTH_NAMES = [
  'tammikuu',
  'helmikuu',
  'maaliskuu',
  'huhtikuu',
  'toukokuu',
  'kesäkuu',
  'heinäkuu',
  'elokuu',
  'syyskuu',
  'lokakuu',
  'marraskuu',
  'joulukuu'
];

export const DAY_NAMES = [
  'ma',
  'ti',
  'ke',
  'to',
  'pe',
  'la',
  'su'
];

export class Time {

  static fromIso8601(isoString) {
    return new Date( Date.parse(isoString ));
  }

  static parseTimes(times) {
    let parsedTimes = times.map((timeObject) => {
      let parsed = {};
      if (timeObject.start_datetime) {
        parsed.start_datetime = this.fromIso8601(timeObject.start_datetime);
      }
      if (timeObject.end_datetime){
        parsed.end_datetime = this.fromIso8601(timeObject.end_datetime);
      }

      return parsed;
    });

    return parsedTimes.sort((a,b) => {
      return a.start_datetime - b.start_datetime;
    });
  }

  /**
   * convert minutes to milliseconds
   * @param  {[type]} minutes [description]
   * @return {[type]}         [description]
   */
  static minutesToMs(minutes) {
    return minutes*60*1000;
  }

  /**
   * return minutes formatted to hours:minutes
   * @param  {[type]} model [description]
   * @return {[type]}       [description]
   */
  static formatMinutes(model) {
    let hours = ('0'+ Math.floor(model / 60)).slice(-2);
    let minutes = ('0' + (model % 60)).slice(-2);
    return `${hours}:${minutes}`;
  }

  static pad(model) {
    return ('0'+model).slice(-2);
  }

  static formatDateTime(model){
    return `${model.getDate()}.${model.getMonth()+1}.${model.getFullYear()} ${model.getHours()}:${model.getMinutes()}`;
  }

  static formatTimespan(model){
    let start = new Date(Date.parse(model.start_datetime));
    let end = new Date(Date.parse(model.end_datetime));
    return `${this.pad(start.getDate())}.${this.pad(start.getMonth()+1)}.${start.getFullYear()} ${this.pad(start.getHours())}:${this.pad(start.getMinutes())} - ${end.getHours()}:${this.pad(end.getMinutes())}`;
  }

  /**
   * format date as dd.mm.yyyy
   * @param  {[type]} model [description]
   * @return {[type]}       [description]
   */
  static formatDate(model) {
    let day = ('0' + model.getDate()).slice(-2);
    let month = ('0' + (model.getMonth() +1)).slice(-2);
    let year = model.getFullYear();
    return `${day}.${month}.${year}`;
  }

  /**
   * get number of days in month
   * @param  {[type]} model [description]
   * @return {[type]}       [description]
   */
  static getDaysInMonth(model) {
    let day = new Date(model.getTime());
    day.setDate(0);
    return day.getDate();
  }

  /**
   * get array of dates in
   * @param  {[type]} model [description]
   * @return {[type]}       [description]
   */
  static getMonthDays(model) {
    let trackModel = new Date(model.getTime());
    trackModel.setDate(1);

    let days = [];
    while (trackModel.getMonth() === model.getMonth()) {
      days.push(trackModel.getDate());
      trackModel.setDate(trackModel.getDate()+1);
    }

    return days;
  }

  static getCalendar(model) {
    let currentMonth = model.getMonth();
    let trackDate = new Date();

    trackDate.setTime(model.getTime());
    trackDate.setDate(1);

    let calendar = [];
    let weekOrder = [1,2,3,4,5,6,0];
    let week = Array(7).fill(false);

    while (trackDate.getMonth() === currentMonth) {
        let currentDay = trackDate.getDay();
        let currentWeekDay = weekOrder.indexOf(currentDay);

        week[currentWeekDay] = new Date(trackDate.getTime());

        if (currentWeekDay === 6) {
          calendar.push(week);
          week = Array(7).fill(false);
        }

        trackDate.setDate(trackDate.getDate() + 1);
    }

    if (calendar.indexOf(week) === -1){
      calendar.push(week);
    }

    return calendar;
  }
}
