import * as Sample from './../models/sample';

const sampleController = {
  get: async (req, res) => await Sample.get(req),
};

export default sampleController;
