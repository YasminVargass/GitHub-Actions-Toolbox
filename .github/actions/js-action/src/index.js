const core = require('@actions/core');

console.log('Starting the action...');

try {
  const message = core.getInput('message');
  console.log(`Message: ${message}`);
  core.setOutput('result', `Printed message: ${message}`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
