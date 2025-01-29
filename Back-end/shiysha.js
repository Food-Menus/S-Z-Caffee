fetch('./../../Data-base/shiysha.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('shiysha_type_1').textContent = data.shiysha_type_1;
    document.getElementById('shiysha_prise_1').textContent = data.shiysha_prise_1;
    document.getElementById('shiysha_type_2').textContent = data.shiysha_type_2;
    document.getElementById('shiysha_prise_2').textContent = data.shiysha_prise_2;
    document.getElementById('shiysha_type_3').textContent = data.shiysha_type_3;
    document.getElementById('shiysha_prise_3').textContent = data.shiysha_prise_3;
    document.getElementById('shiysha_type_4').textContent = data.shiysha_type_4;
    document.getElementById('shiysha_prise_4').textContent = data.shiysha_prise_4;
    document.getElementById('shiysha_type_5').textContent = data.shiysha_type_5;
    document.getElementById('shiysha_prise_5').textContent = data.shiysha_prise_5;
    document.getElementById('shiysha_type_6').textContent = data.shiysha_type_6;
    document.getElementById('shiysha_prise_6').textContent = data.shiysha_prise_6;
  

  });