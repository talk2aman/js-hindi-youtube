const myObject = {
    js : "Javascript",
    py : "Python",
    html: "Hyper Text Markup Language"
}

for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);
}

const programming = ["java", "ruby", "html", "css", "javascript"]
for (const key in programming) {
    console.log(programming[key]);
}