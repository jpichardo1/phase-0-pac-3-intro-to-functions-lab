function shout(string) {
    return string.toUpperCase();  
}

console.log(shout("Hello!")); // Output: HELLO!

function whisper(string) {
    return string.toLowerCase();  
}

console.log(whisper("Hello!")); // Output: hello!

function logShout(string) {
    let uppercaseString = string.toUpperCase();
    console.log(uppercaseString);
    return uppercaseString;
  }
  
  logWhisper("Hello!");

  function logWhisper(string) {
    let lowercaseString = string.toLowerCase();
    console.log(lowercaseString);
    return lowercaseString;
  }
  
  logWhisper("Hello!");

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  