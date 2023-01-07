var phoneNumbers = ["+918056350207", "+0987654321"]; // Replace with the phone numbers you want to check

function checkOnlineStatus() {
  // Get the list of contacts from the web page
  var contacts = document.querySelectorAll("._1wjpf");

  // Check each contact to see if they are online
  for (var i = 0; i < contacts.length; i++) {
    var contact = contacts[i];
    var phoneNumber = contact.querySelector("._3ko75._5h6Y_._3Whw5").title;
    if (phoneNumbers.indexOf(phoneNumber) != -1) {
      var status = contact.querySelector("._3LWZl");
      if (status && status.title == "online") {
        // Send a notification with sound if the contact is online
        var name = contact.querySelector("._1wjpf").title;
        var notification = new Notification(name + " is online!", {
          sound: "notification.mp3"
        });
      }
    }
  }
}

// Check the online status every 10 seconds
setInterval(checkOnlineStatus, 10000);
