const scheduleBody = document.getElementById("scheduleBody");
const addEventBtn = document.getElementById("addEventBtn");
const modal = document.getElementById("eventModal");
const saveEventBtn = document.getElementById("saveEventBtn");
const closeModal = document.getElementById("closeModal");
const bookingForm = document.getElementById("bookingForm");
const eventSelect = document.getElementById("eventSelect");
const msg = document.getElementById("msg");

let events = JSON.parse(localStorage.getItem("events")) || [
  { name: "Tech Workshop", date: "2025-11-05", time: "10:00", venue: "Auditorium" },
  { name: "Music Concert", date: "2025-11-10", time: "19:00", venue: "Open Grounds" }
];

// Display events
function displayEvents() {
  scheduleBody.innerHTML = "";

  events.forEach((event, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.date}</td>
      <td>${event.time}</td>
      <td>${event.venue}</td>
      <td>
        <button onclick="bookNow('${event.name}')">Book</button>
        <button onclick="deleteEvent(${index})">Delete</button>
      </td>
    `;
    scheduleBody.appendChild(row);

    // Add to dropdown if missing
    if (![...eventSelect.options].some(opt => opt.value === event.name)) {
      const opt = document.createElement("option");
      opt.value = event.name;
      opt.textContent = event.name;
      eventSelect.appendChild(opt);
    }
  });

  localStorage.setItem("events", JSON.stringify(events));
}

// Delete event
function deleteEvent(index) {
  events.splice(index, 1);
  displayEvents();
}

// Scroll to booking
function bookNow(eventName) {
  eventSelect.value = eventName;
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Modal control
addEventBtn.onclick = () => (modal.style.display = "flex");
closeModal.onclick = () => (modal.style.display = "none");

// Add new event manually
saveEventBtn.onclick = () => {
  const name = document.getElementById("eventName").value.trim();
  const date = document.getElementById("eventDate").value;
  const time = document.getElementById("eventTime").value;
  const venue = document.getElementById("eventVenue").value.trim();

  if (!name || !date || !time || !venue) {
    alert("Please fill all event details!");
    return;
  }

  events.push({ name, date, time, venue });
  displayEvents();
  modal.style.display = "none";
};

// Booking form
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const eventName = document.getElementById("eventSelect").value;
  const tickets = document.getElementById("tickets").value;
  const date = document.getElementById("bookDate").value;
  const time = document.getElementById("bookTime").value;
  const venue = document.getElementById("bookVenue").value.trim();

  if (!name || !email || !eventName || !date || !time || !venue || tickets <= 0) {
    msg.textContent = "⚠️ Please fill all details correctly.";
    msg.style.color = "red";
    return;
  }

  // Add booking as new event to schedule
  const newEvent = { name: eventName, date, time, venue };
  events.push(newEvent);
  displayEvents();

  msg.textContent = `✅ Booking confirmed for ${tickets} ticket(s) to ${eventName} on ${date} at ${time}.`;
  msg.style.color = "green";

  bookingForm.reset();
});

displayEvents();
