function banUser() {
    document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
    document.getElementById('launchButton').innerHTML = "Banned";
    document.querySelector('.launch-button').className += " banned";
    console.log("[ACP]: ACP_LAUNCH_BANNED");
  }
  
  function startupChecks() {
    document.getElementById('launchButton').innerHTML = "Contacting ACP"; // If frozen at this text just run as admin it should be fine
    document.getElementById('launchButton').style.backgroundColor = " rgba(109, 0, 252, 0.671)";
    fs.truncate(getAppDataPath('fortressclient/client_logs.txt'), 0, function(){console.log('[Launcher] Reset Client Log File')});
    fs.truncate(getAppDataPath('fortressclient/launcher_logs.txt'), 0, function(){console.log('[Launcher] Reset Launcher Log File')});
    bannedCheck();
  }
  
  function notWhitelisted() {
          document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
          document.getElementById('launchButton').innerHTML = "Unauthorized";
          document.querySelector('.launch-button').className += " banned";
          console.log("[ACP]: Not whitelisted!");
  }
  
  function startupChecksMain() {
    checkPatch();
  }

function checkPatch() { // This Method fixes the client from downloading itself everytime.
    checkFirstPatch();
}

function checkFirstPatch() {
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/FortressClient-1.7.10/FortressClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    launchClient1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/FortressClient-1.7.10/FortressClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == "b33933cb4b817c6869f156d38c438330e51fc2ba") { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
      launchOffline1();
    } else {
      launchClient1(); // If the SHA1 Hash is different then it will download the client.
    }

}

function checkSecondPatch() {
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/FortressClient-1.8.9/FortressClient-1.8.9.patch')))) {
    launchClient2();
  }
  
    var hash2 = clientPatch.sync(getAppDataPath('.minecraft/versions/FortressClient-1.8.9/FortressClient-1.8.9.patch')); // (1.8.9)
    console.log("Current Client Hash - " + hash2)
    if (hash2 == "f9080813325b83f28d240c9faa89d45516d925e8") {
      launchOffline2();
    } else {
      launchClient2();
    }
    
}

async function launchClient2() {
     document.querySelector('.launch-button').className += " clicked";
     document.getElementById('launchButton').innerHTML = "Updating Patch"
   
     console.log("[Fortress Client] Launching Stable Branch");
     client.launch({ 
       authorization: Authenticator.getAuth("User"),
       clientPackage: "https://github.com/FortressClient/StableBranch/releases/download/1.0/FortressClient-1.8.9.zip",
       removePackage: "clientPackage.zip",
       root: getAppDataPath(".minecraft"),
       javaPath: getAppDataPath("fortressclient/jre/bin/java.exe"),
       version: {
         number: "1.8.9",
         custom: "FortressClient-1.8.9"
       },
       memory: {
           max: document.getElementById("ramslider").value,
           min: "1024"
       },
       overrides: {
         minecraftJar: getAppDataPath(".minecraft/versions/FortressClient-1.8.9/FortressClient-1.8.9.patch"),
       }
   }).catch(e => {
       console.log(e.message);
       launchError();
   })
}

async function launchOffline2() {
  document.querySelector('.launch-button').className += " clicked"
  document.getElementById('launchButton').innerHTML = "Starting JVM"
  
  console.log("[Fortress Client] Launching Stable Branch");
  client.launch({ 
    authorization: Authenticator.getAuth("User"),
    root: getAppDataPath(".minecraft"),
    javaPath: getAppDataPath("fortressclient/jre/bin/java.exe"),
    version: {
      number: "1.8.9",
      custom: "FortressClient-1.8.9"
    },
    memory: {
        max: document.getElementById("ramslider").value,
        min: "1024"
    },
    overrides: {
      minecraftJar: getAppDataPath(".minecraft/versions/FortressClient-1.8.9/FortressClient-1.8.9.patch"),
    }
  }).catch(e => {
    console.log(e.message);
    launchError();
  })
}
  
  function checkBranch2() {
    var branch2 = document.querySelector('.branch-button2').innerHTML
    var branch3 = document.querySelector('.branch-button3').innerHTML
  
   if(branch2 == "✔️Beta") {
      console.log("[Fortress Client] Checked Beta Branch");
      launchClient2();
    } else if(branch3 == "✔️Dev") {
      console.log("[Fortress Client] Checked Dev Branch");
      launchClient3();
    }
  }
