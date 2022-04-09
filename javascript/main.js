let container = document.getElementById("size_list");

const url = "../javascript/size.json";

const request = new XMLHttpRequest();

console.log("Attempting to retrieve JSON");
request.open('GET', url, true);

request.onload = function() {
    if (request.status === 200) {
        console.log("Fetched data...");
        const data = JSON.parse(request.responseText);
        let radio;
        let label;
        for (let i = 0; i < data.length; i++) {
            label = document.createElement('label');
            label.for = data[i].code;
            radio = document.createElement('input');
            radio.value = data[i].code;
            radio.name = `${data[i].name}\[${data[i].code}]`;
            radio.type = 'radio';
            label.appendChild(radio);
            let span = document.createElement('span');
            span.innerHTML = data[i].description;
            label.appendChild(span);
            container.appendChild(label);
        }
    } else {
        console.log("Error ocurred loading data");
    }
};

request.onerror = function() {
    console.error("Could not fetch the JSON data");
};

request.send();

