function generateStory(event) {
  event.preventDefault();

  let apiKey = "a8boetdc4878122040379fe8f04a70c1";
  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "You are a successful author who writes novels and loves to write interesting and unique short stories. Your mission is to generate an 8 line story in basic HTML but do not show the '```html'. Make sure you follow the user instructions. Sign the poem with 'SheCodes AI' inside <strong> element";
  let prompt = `User instructions: Generate a short story about ${instructionsInput.value}`;
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
