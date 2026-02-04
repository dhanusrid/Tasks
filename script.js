let contacts = [];

function addContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  if (name === "" || phone === "" || email === "") {
    alert("All fields required");
    return;
  }

  contacts.push({ name, phone, email });
  displayContacts(contacts);

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}

function displayContacts(list) {
  let table = document.getElementById("contactTable");
  table.innerHTML = "";

  list.forEach((contact, index) => {
    table.innerHTML += `
      <tr>
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
        <td>
          <button onclick="deleteContact(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function searchContact() {
  let searchText = document.getElementById("search").value.toLowerCase();
  let filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText)
  );
  displayContacts(filtered);
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayContacts(contacts);
}
