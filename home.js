const saveButton = document.getElementById("saveEntry");
const categoryField = document.getElementById("category");
const entryField = document.getElementById("entryText");
const entryList = document.getElementById("entryList");

saveButton.addEventListener("click", async () => {
  const category = categoryField.value;
  const diary_entry = entryField.value;

  if (!category || !diary_entry) {
    alert("Please fill in both fields before saving.");
    return;
  }

  const entryData = { category, diary_entry };

  try {
    const response = await fetch("http://localhost:3005/diary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entryData),
    });

    if (response.ok) {
      categoryField.value = "";
      entryField.value = "";
      loadEntries();
    } else {
      alert("Failed to save diary entry.");
    }
  } catch (error) {
    console.error("Error saving entry:", error);
    alert("An error occurred while saving the diary entry.");
  }
});

async function loadEntries() {
  if (!entryList) return;
  entryList.innerHTML = "";

  try {
    const response = await fetch("http://localhost:3005/diary");
    const entries = await response.json();

    entries.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = `[${entry.category}] ${entry.diary_entry}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "deleteButton";
      deleteButton.dataset.id = entry.id;

      listItem.appendChild(deleteButton);
      entryList.appendChild(listItem);
    });

    document.querySelectorAll(".deleteButton").forEach((button) => {
      button.addEventListener("click", async (event) => {
        const entryId = event.target.dataset.id;
        try {
          await fetch(`http://localhost:3005/diary/${entryId}`, {
            method: "DELETE",
          });
          loadEntries(); // Refresh list after deletion
        } catch (err) {
          console.error("Error deleting entry:", err);
        }
      });
    });
  } catch (error) {
    console.error("Error loading entries:", error);
  }
}

window.onload = loadEntries;