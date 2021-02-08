function banUser() {
    document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
    document.getElementById('launchButton').innerHTML = "Banned";
    document.querySelector('.launch-button').className += " banned";
    console.log("[ACP]: ACP_LAUNCH_BANNED");
  }
  
  function startupChecks() {
    document.getElementById('launchButton').innerHTML = "Contacting ACP"; // If frozen at this text just run as admin it should be fine
    document.getElementById('launchButton').style.backgroundColor = " rgba(109, 0, 252, 0.671)";
    fs.truncate(getAppDataPath('aeroclient/client_logs.txt'), 0, function(){console.log('[Launcher] Reset Client Log File')});
    fs.truncate(getAppDataPath('aeroclient/launcher_logs.txt'), 0, function(){console.log('[Launcher] Reset Launcher Log File')});
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
  var version1 = document.querySelector('.version-button1').innerHTML
  var version2 = document.querySelector('.version-button2').innerHTML
  var version3 = document.querySelector('.version-button3').innerHTML

  if (version2 == "✔️1.8.9") {
    alert("Aero Client 1.16 is not released, we will announce when it is though!");
    showLauncher();
    //checkSecondPatch();
  } else if(version3 == "✔️1.16") {
    alert("Aero Client 1.16 is not released, we will announce when it is though!");
    showLauncher();
  } else if (version1 == "✔️1.7.10 (Default)") {
    checkFirstPatch();
  }

}

function checkFirstPatch() {
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
  launchClient1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == "42f6d5df4b3d683d6c46e9569cdf6d6342431635") { // Checks the SHA1 Hash to see if it's outdated or not.
      launchOffline1();
    } else {
      launchClient1(); // If the SHA1 Hash is different then it will download the client.
    }

}

function checkSecondPatch() {

  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch')))) {
    launchClient1();
  }
  
    var hash2 = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch'));
    console.log("Current Client Hash - " + hash2)
    if (hash2 == "Coming Soon") {
      launchOffline2();
    } else {
      launchClient2();
    }
}

async function launchClient2() {
     document.querySelector('.launch-button').className += " clicked";
     document.getElementById('launchButton').innerHTML = "Updating Patch"
   
     console.log("[Aero Client] Launching Stable Branch");
     client.launch({ 
       authorization: Authenticator.getAuth("User"),
       clientPackage: "https://github.com/Aero-Client/StableBranch/releases/download/1.0/AeroClient-1.8.9.zip",
       removePackage: "clientPackage.zip",
       root: getAppDataPath(".minecraft"),
       javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
       version: {
         number: "1.8.9",
         custom: "AeroClient-1.8.9"
       },
       memory: {
           max: document.getElementById("ramslider").value,
           min: "1024"
       },
       overrides: {
         minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch"),
       }
   }).catch(e => {
       console.log(e.message);
       launchError();
   })
}

async function launchOffline2() {
  document.querySelector('.launch-button').className += " clicked"
  document.getElementById('launchButton').innerHTML = "Starting JVM"
  
  console.log("[Aero Client] Launching Stable Branch");
  client.launch({ 
    authorization: Authenticator.getAuth("User"),
    root: getAppDataPath(".minecraft"),
    javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
    version: {
      number: "1.8.9",
      custom: "AeroClient-1.8.9"
    },
    memory: {
        max: document.getElementById("ramslider").value,
        min: "1024"
    },
    overrides: {
      minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch"),
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
      console.log("[Aero Client] Checked Beta Branch");
      launchClient2();
    } else if(branch3 == "✔️Dev") {
      console.log("[Aero Client] Checked Dev Branch");
      launchClient3();
    }
  }
