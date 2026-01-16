const parent = document.querySelector("#parent");

// #Element Node
// const h1 = document.createElement("h1");

// h1.textContent = "Hello Cuong";
// parent.appendChild(h1)


// #Text node
// const text = document.createTextNode("Text node");

// console.log(text);

// parent.appendChild(text)
// parent.removeChild(text)

// #Comment Node 

// const comment = document.createComment("Something");

// console.log(comment);
// parent.appendChild(comment)
// parent.removeChild(comment)


// #Attribute node
const title = document.createAttribute("title");

title.value = "Cuong vu";

parent.setAttributeNode(title) // <div id="parent" title="Cuong vu"></div>

// appendChild(), removeChild()
// append(), insertBefore(), replaceChild(), cloneNode()

const h1 = document.createElement("h1");
h1.textContent = "Hello Cuong vu";
const text = document.createTextNode("Text node");
const comment = document.createComment("Something");

// #append()

// parent.append(h1, text, comment, "okela"); // append có thể nhận nhiều node còn appendChild thì chỉ nhận 1 node
                                          // appendChild() nhận tham số đầu vào là chuỗi thì lỗi

   
// #insertBefore()

// parent.append(h1);
// parent.insertBefore(text, h1)


// #replaceChild

parent.append(h1);
parent.replaceChild(comment, h1);


// #cloneNode()

const newH1 = h1.cloneNode(true);

/**
 * Khi sử dụng cloneNode(), khi truyền tham số trong cloneNode() là true thì nó sẽ clone lại toàn bộ các phần tử con của element mà nó
 * sao chép, tuy nhiên nếu element đó có sử dụng DOM Event thì nó sẽ không kế thừa lại.
 */

newH1.onclick = function() {
  console.log("New event!");
  
}

parent.append(h1, newH1)

