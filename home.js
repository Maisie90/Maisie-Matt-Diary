const saveButton = document.getElementById("saveEntry");
const catagoryField = document.getElementById("catagory");
const entryField = document.getElementById("entryText");
const entryList = document.getElementById("entryList");
saveButton.addEventListener("click", async () => {
  const catagory = catagoryField.value;
  const diary_entry = entryField.value;
  if (!catagory || !diary_entry) {
    alert("Please fill in both fields before saving.");
    return;
  }
  const entryData = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    catagory: catagory,
    diary_entry: diary_entry,
  };
  try {
    const response = await fetch("http://localhost:3005/diary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entryData),
    });
    if (response.ok) {
      catagoryField.value = "";
      entryField.value = "";
      loadEntries();
    } else {
      alert("Failed tosave dairy entry.");
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
      listItem.textContent = `${entry.date} ${entry.time} [${entry.catagory}]: ${entry.diary_entry}`;
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
            method: "DELET",
          });
          loadEntries(); // Refresh list after deletion
        } catch (err) {
          console.error("Errr deleting entry:", err);
        }
      });
    });
  } catch (error) {
    console.error("Error loading entres:", error);
  }
}
window.onload = loadEntries;