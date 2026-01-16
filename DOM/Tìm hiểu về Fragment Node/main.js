// Fragment

const box = document.querySelector("#box");
const heading = document.querySelector("#heading");

// Nodes
const text = document.createTextNode("Text....");
const comment = document.createComment("someThing...");
const p = document.createElement("p");
p.textContent = "Some thing text...";


// Cách 1: cho hết các Nodes vào trước phần heading của thẻ chứa (box)

// const list = [text, comment, p];

// for(let i = 0; i <= list.length; i++) {
//   box.insertBefore(list[i], heading);
// }


// Cách 2: cho hết các Nodes vào trước phần heading của thẻ chứa (box)

// const container = document.createElement("div");

// container.append(text, comment, p);

// box.insertBefore(container, heading);

// ==> cách này vẫn được nhưng trong khối (box) thì thửa 1 thẻ div

// Cách 3: cho hết các Nodes vào trước phần heading của thẻ chứa (box)

// dùng Fragment Node

const container = document.createDocumentFragment();

container.append(text, comment, p);

box.insertBefore(container, heading);

// cách này tương tự như tạo thẻ div rồi append các Nodes vào nhưng mà trong box thì sẽ k chứa div


