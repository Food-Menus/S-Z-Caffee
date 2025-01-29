fetch('./../../Data-base/Frappuccino.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Frappuccino_type_1').textContent = data.Frappuccino_type_1;
    document.getElementById('Frappuccino_prise_1').textContent = data.Frappuccino_prise_1;
    document.getElementById('Frappuccino_type_2').textContent = data.Frappuccino_type_2;
    document.getElementById('Frappuccino_prise_2').textContent = data.Frappuccino_prise_2;
    document.getElementById('Frappuccino_type_3').textContent = data.Frappuccino_type_3;
    document.getElementById('Frappuccino_prise_3').textContent = data.Frappuccino_prise_3;
    document.getElementById('Frappuccino_type_4').textContent = data.Frappuccino_type_4;
    document.getElementById('Frappuccino_prise_4').textContent = data.Frappuccino_prise_4;
    document.getElementById('Frappuccino_type_5').textContent = data.Frappuccino_type_5;
    document.getElementById('Frappuccino_prise_5').textContent = data.Frappuccino_prise_5;
    document.getElementById('Frappuccino_type_6').textContent = data.Frappuccino_type_6;
    document.getElementById('Frappuccino_prise_6').textContent = data.Frappuccino_prise_6;
    document.getElementById('Frappuccino_type_7').textContent = data.Frappuccino_type_7;
    document.getElementById('Frappuccino_prise_7').textContent = data.Frappuccino_prise_7;
    document.getElementById('Frappuccino_type_8').textContent = data.Frappuccino_type_8;
    document.getElementById('Frappuccino_prise_8').textContent = data.Frappuccino_prise_8;
    document.getElementById('Frappuccino_type_9').textContent = data.Frappuccino_type_9;
    document.getElementById('Frappuccino_prise_9').textContent = data.Frappuccino_prise_9;
    document.getElementById('Frappuccino_type_10').textContent = data.Frappuccino_type_10;
    document.getElementById('Frappuccino_prise_10').textContent = data.Frappuccino_prise_10;

  });