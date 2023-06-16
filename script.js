// Add your OpenAI API key here
const apiKey = "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";

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the form and input elements
  const caseForm = document.getElementById("caseForm");
  const caseInput = document.getElementById("caseInput");
  const summaryResult = document.getElementById("summaryResult");

  // Add submit event listener to the form
  caseForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const caseText = caseInput.value;

    // Make the API request to OpenAI using fetch()
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: caseText,
        max_tokens: 100
      })
    });

    // Handle the API response
    const data = await response.json();
    const summary = data.choices[0].text;

    // Display the summary result
    summaryResult.innerText = summary;
  });
});
