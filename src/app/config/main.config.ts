class cons {
  static secure = '';
  static domain = '127.0.0.1:8000';
  static default_part = 'api';
}

export const Config = {
  SERVICEURL: `http${cons.secure}://${cons.domain}/${cons.default_part}`,
  URL: `http${cons.secure}://${cons.domain}/`,
};
