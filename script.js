let person = {
    name: "Bojan",
    lastName: "Jovanoski",
    married: false,
    phones: [ "01304729", "1738047290", "1293642" ]
};

let ulTag = document.getElementById("listaTel");

console.log("Name = " + person.name);

for(let i = 0; i < person.phones.length; i++) {
    let phoneItem = document.createElement("li");
    ulTag.appendChild(phoneItem);
    phoneItem.innerHTML = person.phones [i];
}
