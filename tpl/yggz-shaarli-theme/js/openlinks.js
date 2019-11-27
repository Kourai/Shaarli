var links= document.getElementsByTagName('a');
for (var i=0; i<links.length; i++){

 var reg = new RegExp('/' + window.location.host + '/');

 if (!reg.test(links[i].href)) {
   links[i].setAttribute('target', '_blank');
 }
}
