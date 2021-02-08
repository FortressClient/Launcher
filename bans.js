function bannedCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5ca59f07ff7542ddbf7c0e92309d8dc2') >= 1) {
     banUser()
    } else if(data.indexOf('4fb9e313df1a41c6929ca3c066869e01') >= 1) {
     banUser()
    } else if(data.indexOf('81703177e5cb4256b6729098541407f8') >= 1) {
     banUser()
    } else if(data.indexOf('95edbc1ac887438cbbfb9c1a67e66383') >= 1) {
     banUser()
    } else if(data.indexOf('48e97601590d48b985afd1382f340bde') >= 1) {
     banUser()
    } else if(data.indexOf('28ce1b86c04a40b082f4640c919889b7') >= 1) {
     banUser()
    } else if(data.indexOf('27c2b55fbd23449c9329fa8e2b0cc81c') >= 1) {
     banUser()
    } else if(data.indexOf('d7ee5ef9113c4205bbec1a930d95476b') >= 1) {
     banUser()
    } else if(data.indexOf('c926189309c846d3afe4e3cdf49f0bfc') >= 1) {
     banUser()
    } else if(data.indexOf('25b65f924f6a4450977c92f9bee74cf1') >= 1) {
     banUser()
    } else if(data.indexOf('55ecbcded47f49b7afbbb6108da8bfed') >= 1) {
     banUser()
    } else if(data.indexOf('f35f3536c11940faaf4bc07d6c76bee2') >= 1) {
     banUser()
    } else if(data.indexOf('b6886daf8a47491393aab343d49f1a2e') >= 1) {
     banUser()
    } else if(data.indexOf('5fc3218150de46829e18316aa8fc9e79') >= 1) {
     banUser()
    } else if(data.indexOf('a05dc3fc262b4dac8c379b52f04f1d8c') >= 1) {
     banUser()
    } else if(data.indexOf('1c97c17f2eb24029938a9ec5911e318b') >= 1) {
     banUser()
    } else if(data.indexOf('305ff37a2c5c41f18a89baa7a897583e') >= 1) {
     banUser()
    } else if(data.indexOf('29d5bd5f4bef426ebc9705af1e914b32') >= 1) {
     banUser()
    } else if(data.indexOf('5ca59f07ff7542ddbf7c0e92309d8dc2') >= 1) {
     banUser()
    } else if(data.indexOf('81703177e5cb4256b6729098541407f8') >= 1) {
     banUser()
    } else if(data.indexOf('27c2b55fbd23449c9329fa8e2b0cc81c') >= 1) {
     banUser()
    } else if(data.indexOf('3daf19bdc08541489961baf032094707') >= 1) {
     banUser()
    } else if(data.indexOf('6a460c08c8dc45d899ee0501e22f5a0c') >= 1) {
     banUser()
    } else if(data.indexOf('71016cd21a764aafb185d3b366aa2d7a') >= 1) {
     banUser()
    } else if(data.indexOf('58555bcafc29454ea0b4d09dc66f0edf') >= 1) {
     banUser()
    } else if(data.indexOf('d24f90965c914425a12ee91974e007e6') >= 1) {
     banUser()
    } else if(data.indexOf('f11fd8783ec9472986b2902257d554e3') >= 1) {
     banUser()
    } else if(data.indexOf('95f52fea4176478c924f8efc305ee1a7') >= 1) {
     banUser()
    } else if(data.indexOf('7c4fe3450dfc46329cc4385773990e7e') >= 1) {
     banUser()
    } else if(data.indexOf('e5918c6629564949a282956024aa4640') >= 1) {
     banUser()
    } else if(data.indexOf('a0d3861c874d42e1a53228dfafcd451a') >= 1) {
     banUser()
    } else if(data.indexOf('90f1c21957104814ba0714abd2aee400') >= 1) {
     banUser()
    } else if(data.indexOf('4fb9e313df1a41c6929ca3c066869e01') >= 1) {
     banUser()
    } else if(data.indexOf('e9205da762f04b7a8a68c10614f9f69c') >= 1) {
     banUser()
    } else if(data.indexOf('3d825cdb9f3c4460970d526331e0e95d') >= 1) {
     banUser()
    } else if(data.indexOf('0b652f649a8b45f2b36789df23b381f2') >= 1) {
     banUser()
    } else if(data.indexOf('9a9ddfce9c6f490eba71927bafadda47') >= 1) {
     banUser()
    } else if(data.indexOf('fec40f7e25df453087027f516e119efa') >= 1) {
     banUser()
    } else {
      checkPatchMain()
    }
  });
}
