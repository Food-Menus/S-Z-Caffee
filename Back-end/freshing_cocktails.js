fetch('./../../Data-base/freshing_cocktails.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('freshing_cocktails_type_1').textContent = data.freshing_cocktails_type_1;
    document.getElementById('freshing_cocktails_prise_1').textContent = data.freshing_cocktails_prise_1;
    document.getElementById('freshing_cocktails_type_2').textContent = data.freshing_cocktails_type_2;
    document.getElementById('freshing_cocktails_prise_2').textContent = data.freshing_cocktails_prise_2;
    document.getElementById('freshing_cocktails_type_3').textContent = data.freshing_cocktails_type_3;
    document.getElementById('freshing_cocktails_prise_3').textContent = data.freshing_cocktails_prise_3;
    document.getElementById('freshing_cocktails_type_4').textContent = data.freshing_cocktails_type_4;
    document.getElementById('freshing_cocktails_prise_4').textContent = data.freshing_cocktails_prise_4;
    document.getElementById('freshing_cocktails_type_5').textContent = data.freshing_cocktails_type_5;
    document.getElementById('freshing_cocktails_prise_5').textContent = data.freshing_cocktails_prise_5;
    document.getElementById('freshing_cocktails_type_6').textContent = data.freshing_cocktails_type_6;
    document.getElementById('freshing_cocktails_prise_6').textContent = data.freshing_cocktails_prise_6;
    document.getElementById('freshing_cocktails_type_7').textContent = data.freshing_cocktails_type_7;
    document.getElementById('freshing_cocktails_prise_7').textContent = data.freshing_cocktails_prise_7;
    document.getElementById('freshing_cocktails_type_8').textContent = data.freshing_cocktails_type_8;
    document.getElementById('freshing_cocktails_prise_8').textContent = data.freshing_cocktails_prise_8;
    document.getElementById('freshing_cocktails_type_9').textContent = data.freshing_cocktails_type_9;
    document.getElementById('freshing_cocktails_prise_9').textContent = data.freshing_cocktails_prise_9;
    document.getElementById('freshing_cocktails_type_10').textContent = data.freshing_cocktails_type_10;
    document.getElementById('freshing_cocktails_prise_10').textContent = data.freshing_cocktails_prise_10;
    document.getElementById('freshing_cocktails_type_11').textContent = data.freshing_cocktails_type_11;
    document.getElementById('freshing_cocktails_prise_11').textContent = data.freshing_cocktails_prise_11;
    document.getElementById('freshing_cocktails_type_12').textContent = data.freshing_cocktails_type_12;
    document.getElementById('freshing_cocktails_prise_12').textContent = data.freshing_cocktails_prise_12;
    document.getElementById('freshing_cocktails_type_13').textContent = data.freshing_cocktails_type_13;
    document.getElementById('freshing_cocktails_prise_13').textContent = data.freshing_cocktails_prise_13;

  });