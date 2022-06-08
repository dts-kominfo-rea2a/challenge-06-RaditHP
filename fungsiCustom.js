// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = function (fnCallback) {
  let dataHasil = [];
  fs.readFile(file1, { encoding: "utf8" }, (err, file1) => {
    if (err) {
      return console.log(err);
    }

    const f1 = JSON.parse(file1);
    dataHasil.push(f1.message.split(" ")[1]);

    fs.readFile(file2, { encoding: "utf8" }, (err, file2) => {
      if (err) {
        return console.log(err);
      }
      const f2 = JSON.parse(file2);
      dataHasil.push(f2[0].message.split(" ")[1]);

      fs.readFile(file3, { encoding: "utf8" }, (err, file3) => {
        if (err) {
          return console.log(err);
        }
        const f3 = JSON.parse(file3);
        dataHasil.push(f3[0].data.message.split(" ")[1]);
        fnCallback(null, dataHasil);
        console.log(dataHasil);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
