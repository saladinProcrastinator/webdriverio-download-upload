const allure = require('allure-commandline');

module.exports = function createAllureReport(){
    const reportError = new Error('Could not generate Allure report');
    var generation = allure(['generate', 'allure-results', '--clean']);
    generation = allure(['serve', 'allure-results']);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000);
  
      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout);
  
        if (exitCode !== 0) {
          return reject(reportError);
        }
  
        console.log('Allure report successfully generated');
        resolve();
      });
    });
 }