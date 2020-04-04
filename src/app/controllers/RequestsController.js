const { Request } = require('../models');

module.exports = {
  async index(req, res, next) {
    const { method, url, params, query, body, rawHeaders, headers } = req;
    console.log(process.env.FLAG);
    const flag = process.env.FLAG ? process.env.FLAG : '';
    const { remoteAddress } = req.connection;

    const requestIns = await Request.create({
      flag,
      method,
      url,
      remote_address: remoteAddress,
      params,
      query,
      body,
      raw_headers: rawHeaders,
      headers,
    });

    return res.status(201).json(requestIns);
  },
};
