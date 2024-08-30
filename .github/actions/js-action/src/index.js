const core = require('@actions/core');

try {
  // Obtém o input
  const message = core.getInput('message');
  
  // Exibe a mensagem
  console.log(`Message: ${message}`);
  
  // Define um output
  core.setOutput('result', `Printed message: ${message}`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
