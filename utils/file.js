const path = require('path');
const fs = require('fs');

const AdmZip = require('adm-zip');

function waitForFileExists(filePath, timeout) {
  return new Promise(function (resolve, reject) {

    var timer = setTimeout(function () {
      watcher.close();
      reject(new Error('File did not exists and was not created during the timeout.'));
    }, timeout);

    fs.access(filePath, fs.constants.R_OK, function (err) {
      if (!err) {
        clearTimeout(timer);
        watcher.close();
        resolve();
      }
    });

    var dir = path.dirname(filePath);
    var basename = path.basename(filePath);
    var watcher = fs.watch(dir, function (eventType, filename) {
      if (eventType === 'rename' && filename === basename) {
        clearTimeout(timer);
        watcher.close();
        resolve();
      }
    });
  });
}

export function waitUnzipAndCheckDownload(zipName, timeOut, file1, file2, file3) {
  const filePath = path.join(global.downloadDir, zipName);
  browser.call(function () {
    return waitForFileExists(filePath, timeOut);
  });

  if (browser.config.services == "docker") {
    var millisecondsToWait = 1000; // 1 second of wait for the zip to be fully downloaded - can be improved 
    setTimeout(function () {
      var zip = new AdmZip(filePath);
      var zipEntries = zip.getEntries();

      expect(zipEntries[0].entryName).toEqual(file1);
      expect(zipEntries[1].entryName).toEqual(file2);
      expect(zipEntries[2].entryName).toEqual(file3);
    }, millisecondsToWait);
  }
  else{
    var zip = new AdmZip(filePath);
    var zipEntries = zip.getEntries();

    expect(zipEntries[0].entryName).toEqual(file1);
    expect(zipEntries[1].entryName).toEqual(file2);
    expect(zipEntries[2].entryName).toEqual(file3);
  }
}