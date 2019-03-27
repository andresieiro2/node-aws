import config from 'config';

export const get = async req => {
  try {
    return 'OI SAMPLE';
  } catch (e) {
    console.log(e);

    return e;
  }
};
