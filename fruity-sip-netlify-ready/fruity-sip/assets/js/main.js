function submitForm(){
  const inputs=document.querySelectorAll('#orderForm input,#orderForm select,#orderForm textarea');
  let filled=true;inputs.forEach(i=>{if(!i.value.trim())filled=false});
  if(!filled){alert('Please fill in all fields before sending your order.');return}
  document.getElementById('formSuccess').style.display='block';
  document.querySelector('.submit-btn').style.display='none';
  inputs.forEach(i=>{i.disabled=true});
}