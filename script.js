function preview(event){
  const img = document.getElementById('img');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = 'block';
}
