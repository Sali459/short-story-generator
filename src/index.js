function generateStory(event) {
  event.preventDefault();

  let apiKey = "a8boetdc4878122040379fe8f04a70c1";
  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "You are a successful author. Your task is to generate a consistent 6-line short story formatted like an open book: 3 lines on the left page and 3 lines on the right. Every story must follow this structure: one sentence per line, no title, no additional spacing or paragraphs. Add a <br> after each line. The formatting should remain identical each time. End the last line with <strong>SheCodes AI</strong>. Use only basic HTML with no markdown or code blocks.";
  let prompt = `User instructions: Generate a short story about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let leftPageElement = document.querySelector("#leftPage");
  let rightPageElement = document.querySelector("#rightPage");

  leftPageElement.innerHTML = `⏳ Generating a short story about ${instructionsInput.value}...`;
  rightPageElement.innerHTML = ``;

  axios.get(apiUrl).then(function (response) {
    let story = response.data.answer;

    const lines = story.trim().split(/<br\s*\/?>|\n/);

    while (lines.length < 6) {
      lines.push("&nbsp;");
    }

    const leftLines = lines.slice(0, 3).join("<br>");
    const rightLines = lines.slice(3).join("<br>");

    leftPageElement.innerHTML = leftLines;
    rightPageElement.innerHTML = rightLines;
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
