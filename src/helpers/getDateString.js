class GetDateString {
  static getShortDateString(rawTimeStamp) {
    return new Date(rawTimeStamp).toString().slice(0, 24);
  }

  static getLongDateString(rawTimeStamp) {
    return new Date(rawTimeStamp).toString().slice(-61, -36);
  }
}

export default GetDateString;
