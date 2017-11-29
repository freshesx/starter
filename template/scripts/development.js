const DevelopmentRunner = require('../../src/Runners/DevelopmentRunner')

new DevelopmentRunner()
  .setOptions(require('./configs/options'))
  .setProxy(require('./configs/proxy'))
  .setAppEnvs(require('./configs/appEnvs'))
  .run()
