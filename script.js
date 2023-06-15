// Add your OpenAI API key here
const apiKey = "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";

document.getElementById("caseForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const caseInput = document.getElementById("caseInput").value;
  
  // Make the API request to OpenAI using fetch()
  const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: caseInput,
      max_tokens: 100
    })
  });

  // Handle the API response
  const data = await response.json();
  const summary = data.choices[0].text;
  
  // Display the summary result
  document.getElementById("summaryResult").innerText = summary;
});
