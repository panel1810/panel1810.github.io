document.getElementById("downloadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const url = document.getElementById("url").value;
  const responseMessage = document.getElementById("responseMessage");

  try {
    const response = await fetch("http://127.0.0.1:5000/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    if (response.ok) {
      responseMessage.textContent = data.message;
    } else {
      responseMessage.textContent = data.error;
    }
  } catch (error) {
    responseMessage.textContent = "An error occurred.";
  }
});
