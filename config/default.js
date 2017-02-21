if (process.env.DEV_TRACE) {
  Error.stackTraceLimit = Infinity;
  require('trace');
  require('clarify');
}

module.exports = {
  mongoose: {
    uri: 'mongodb://sa:1q2w@ds052629.mlab.com:52629/js',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize: 5
      }
    }
  },
  rest: {
    limit: 100,
    totalLimit: 100000
  },
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  secret: 'mysecret',
  root: process.cwd()
};
