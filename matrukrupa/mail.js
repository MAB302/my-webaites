function sendMessageToGmail() {
  // Replace with your actual Gmail address
  const to = "mab234665@gmail.ci"; 
  const subject = "My Subject";
  const body = "This is the message body.";

  // Construct the mailto link
  const mailtoLink = mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)};

  // Open the email client
  window.location.href = mailtoLink;
