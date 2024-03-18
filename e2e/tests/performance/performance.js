const { config } = require('../../pages/performance/config');
const scenarios = require('../../pages/performance/scenario');
const { Runner } = require('artillery');

const testScript = {
  config,
  scenarios
};

Runner(testScript, (err, report) => {
  if (err) {
    console.error(err);
  }
  console.log(report);
});
