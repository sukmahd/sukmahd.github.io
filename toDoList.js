//membuat close button dan di append di stiap list items
var myNodelist = document.getElementsByTagName('li');
for(var i = 0; i < myNodelist.length; i++)
{
  var span = document.createElement('span');
  var spanText = document.createTextNode('x');
  span.className = 'close';
  span.appendChild(spanText);
  myNodelist[i].appendChild(span);
}

//untuk hide list saat click x button/ close button
var close = document.getElementsByClassName('close');
for(var i = 0; i < close.length; i++)
{
  close[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = 'none';
  }
}

//add checked symbol saat diclick
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//create new list item saat click "add" button
function newElement()
{
  var li = document.createElement('li');
  var inputValue = document.getElementById('listInput').value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if(inputValue === '')
  {
    alert('List harus diisi!');
  }
  else
  {
    document.getElementById('listUL').appendChild(li);
  }
  document.getElementById('listInput').value = '';


  var span = document.createElement('span');
  var spanText = document.createTextNode('x');
  span.className = 'close';
  span.appendChild(spanText);
  li.appendChild(span);

  for(var i = 0; i < close.length; i++)
  {
    close[i].onclick = function()
    {
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}
