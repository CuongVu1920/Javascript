// innerHTML

const content = `
  <p>Xin chào <strong>bạn</strong>, đây là một đoạn văn bản để <em>test DOMPurify</em>.</p>
  <img src="x" onerror="alert('XSS image')" />
  `;

const clean = DOMPurify.sanitize(content);


const article = document.querySelector("#article");

article.innerHTML = clean; // k thành các blog cho người dùng nhìn thấy

