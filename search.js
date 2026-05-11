function displayRoommates(list) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  list.forEach(r => {
    container.innerHTML += `
      <div class="card">
        <h3>${r.name}</h3>
        <p>${r.bio}</p>
        <p>Cleanliness: ${"⭐".repeat(r.cleanliness)}</p>
        <p>Sleep: ${r.sleep}</p>
        <p>Study Style: ${r.study}</p>
      </div>
    `;
  });
}

function filterRoommates() {
  const value = document.getElementById("filter").value;

  let filtered = roommates;

  if (value === "clean") {
    filtered = roommates.filter(r => r.cleanliness >= 4);
  } 
  else if (value === "quiet") {
    filtered = roommates.filter(r => r.study === "Very quiet");
  } 
  else if (value === "social") {
    filtered = roommates.filter(r => r.study === "Social");
  }

  displayRoommates(filtered);
}

window.onload = () => {
  displayRoommates(roommates);
};
