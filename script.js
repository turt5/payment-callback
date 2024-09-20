window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");

  if (status === "failure") {
    window.location.href = "failure.html";
  } else if (status === "success") {
    window.location.href = "success.html";
  } else if (status === "cancel") {
    window.location.href = "cancelled.html";
  }
};
