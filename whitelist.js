function whitelistCheck() {
  document.getElementById('launchButton').innerHTML = "Checking WL";
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5802512617c24fe3bbc981519341f7d6') >= 1) {
      checkBranch2()
    } else if(data.indexOf('12e0d63d9e5049a9b5fe4229fba667f2') >= 1) {
      checkBranch2()
    } else if(data.indexOf('285c25e374f647e081a64e74ceb54ed3') >= 1) {
      checkBranch2()
    } else if(data.indexOf('007f6d3eb5dc405d9dd7d00d4b4105a6') >= 1) {
      checkBranch2()
    } else if(data.indexOf('4e579cb79d8d449181602e4a4f8c84f1') >= 1) {
      checkBranch2()
    } else if(data.indexOf('5656c55ed9544b4daacdf188d01720a2') >= 1) {
      checkBranch2()
    } else if(data.indexOf('c229f618447a4b8792086a90116302ee') >= 1) {
      checkBranch2()
    } else if(data.indexOf('ca624816b6a6403e9c48455077baa272') >= 1) {
      checkBranch2()
    } else if(data.indexOf('ab897c5ebefa4ec18ae7a0eae87f3d62') >= 1) {
      checkBranch2()
    } else if(data.indexOf('48b28f483f474b8aae650e522b456842') >= 1) {
      checkBranch2()
    } else if(data.indexOf('3d825cdb9f3c4460970d526331e0e95d') >= 1) {
      checkBranch2()
    } else if(data.indexOf('0224d56f630c4b7da4b96294079fb411') >= 1) {
      checkBranch2()
    } else if(data.indexOf('3c1369fbc8b445ffb59178ee977ea992') >= 1) {
      checkBranch2()
    } else if(data.indexOf('7d525425e2674baa999472949d361739') >= 1) {
      checkBranch2()
    } else if(data.indexOf('48b105e5fc9647298813dd7649b0fbfe') >= 1) {
      checkBranch2()
    } else if(data.indexOf('1f3411180b1f47539fb60d04ba46256d') >= 1) {
      checkBranch2()
    } else if(data.indexOf('b58d2633c86e4579826511116304b3c9') >= 1) {
      checkBranch2()
    } else if(data.indexOf('83183f3711d648019fc45e97581aed4a') >= 1) {
      checkBranch2()
    } else if(data.indexOf('5ec8299ef8a048488629f1faaa885f65') >= 1) {
      checkBranch2()
    } else if(data.indexOf('5222e7e4657d4698ae3e6d70054b868f') >= 1) {
      checkBranch2()
    } else if(data.indexOf('4a9b7c8ed3824d888695dad00b101243') >= 1) {
      checkBranch2()
    } else if(data.indexOf('58ab512473da43a49d231e1fb63be804') >= 1) {
      checkBranch2()
    } else if(data.indexOf('9591a43374874bd0adf1206a97cfaaa4') >= 1) {
      checkBranch2()
    } else if(data.indexOf('b1bea4c0399d4b3a9db4bc49e91db648') >= 1) {
      checkBranch2()
    } else if(data.indexOf('2b67d2a6699843fca5c832fe9d9a6e65') >= 1) {
      checkBranch2()
    } else if(data.indexOf('716be911c3794e57a369a5c97e973d6f') >= 1) {
      checkBranch2()
    } else if(data.indexOf('2b012bf230ed4d8c91f9bf173a781579') >= 1) {
      checkBranch2()
    } else if(data.indexOf('25cf6271e78b4d908167153cee78d341') >= 1) {
      checkBranch2()
    } else if(data.indexOf('dfd1934c0a824e9f967dce8f81a5515e') >= 1) {
      checkBranch2()
    } else if(data.indexOf('d268f133ba0247739acea47e608d4c8f') >= 1) {
      checkBranch2()
    } else if(data.indexOf('7e2d4eae2f2e46e787b8e44acdca37d3') >= 1) {
      checkBranch2()
    } else if(data.indexOf('c6fe267f964a432fafb8c3639042d889') >= 1) {
      checkBranch2()
    } else if(data.indexOf('bc40297df0eb441f916895cb38869f13') >= 1) {
      checkBranch2()
    } else if(data.indexOf('0b58ada7a588441e92719e6fbe88a772') >= 1) {
      checkBranch2()
    } else if(data.indexOf('11b01f2b6853478bbfb3d83fbe727a97') >= 1) {
      checkBranch2()
    } else if(data.indexOf('d8f1c415d7164bd589cc0d676fc025f4') >= 1) {
      checkBranch2()
    } else if(data.indexOf('48e97601590d48b985afd1382f340bde') >= 1) {
      checkBranch2()
    } else if(data.indexOf('b44000a4172c40dc9a2d789db6142417') >= 1) {
      checkBranch2()
    } else if(data.indexOf('d226974388434e2bbbec5303f889674d') >= 1) {
      checkBranch2()
    } else if(data.indexOf('d106b5ba46c541249269b59b53a32a65') >= 1) {
      checkBranch2()
    } else if(data.indexOf('a9e6c7255fae4e83bd7590059c8d9feb') >= 1) {
      checkBranch2()
    } else if(data.indexOf('d8f72541823d4ded9f7fb67fdb34f43c') >= 1) {
      checkBranch2()
    } else if(data.indexOf('3937affa6b954e58a3d250a38d6caffe') >= 1) {
      checkBranch2()
    } else if(data.indexOf('48b4f4ef63f54b4fa6404b43ef17fdbc') >= 1) {
      checkBranch2()
    } else if(data.indexOf('eb4618228dc7424691892bfcb15c8d76') >= 1) {
      checkBranch2()
    } else {
      notWhitelisted()
    }
  });
}
