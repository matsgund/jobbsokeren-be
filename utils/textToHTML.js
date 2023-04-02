const textToHtml  = async (text) => {
    const lines = text.split('\n');
    let html = "";
    let isList = false;
  
    for (const line of lines) {
      if (line.trim() === '') {
        if (isList) {
          html += '</ul>';
          isList = false;
        }
        continue;
      }
  
      if (line.startsWith('- ')) {
        if (!isList) {
          html += '<ul>';
          isList = true;
        }
        html += `<li>${line.slice(2)}</li>`;
        continue;
      }
  
      if (isList) {
        html += '</ul>';
        isList = false;
      }
  
      html += `<p>${line}</p>`;
    }
  
    if (isList) {
      html += '</ul>';
    }
  
    html += '</div>';
    return html;
  }

    module.exports = {textToHtml};
  