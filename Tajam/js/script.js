var pic1 = document.querySelector('.p1');
var pic2 = document.querySelector('.p2');
var pic3 = document.querySelector('.p3');
var pic4 = document.querySelector('.p4');
var pic5 = document.querySelector('.p5');

var text1 = document.querySelector('.ptext1');
var text2 = document.querySelector('.ptext2');
var text3 = document.querySelector('.people-text');
var text4 = document.querySelector('.ptext4');
var text5 = document.querySelector('.ptext5');

var name1 = document.querySelector('.pname1');
var name2 = document.querySelector('.pname2');
var name3 = document.querySelector('.people-name');
var name4 = document.querySelector('.pname4');
var name5 = document.querySelector('.pname5');

var job1 = document.querySelector('.pjob1');
var job2 = document.querySelector('.pjob2');
var job3 = document.querySelector('.people-job');
var job4 = document.querySelector('.pjob4');
var job5 = document.querySelector('.pjob5');

pic1.onclick = function () {
  text2.classList.add('hidden');
  name2.classList.add('hidden');
  job2.classList.add('hidden');
  pic2.classList.add('psmall');
  pic2.classList.remove('pbig');

  text3.classList.add('hidden');
  name3.classList.add('hidden');
  job3.classList.add('hidden');
  pic3.classList.add('psmall');
  pic3.classList.remove('pbig');

  text4.classList.add('hidden');
  name4.classList.add('hidden');
  job4.classList.add('hidden');
  pic4.classList.add('psmall');
  pic4.classList.remove('pbig');

  text5.classList.add('hidden');
  name5.classList.add('hidden');
  job5.classList.add('hidden');
  pic5.classList.add('psmall');
  pic5.classList.remove('pbig');

  text1.classList.remove('hidden');
  name1.classList.remove('hidden');
  job1.classList.remove('hidden');
  pic1.classList.add('pbig');
  pic1.classList.remove('psmall');
}

pic2.onclick = function () {
  text1.classList.add('hidden');
  name1.classList.add('hidden');
  job1.classList.add('hidden');
  pic1.classList.add('psmall');
  pic1.classList.remove('pbig');

  text3.classList.add('hidden');
  name3.classList.add('hidden');
  job3.classList.add('hidden');
  pic3.classList.add('psmall');
  pic3.classList.remove('pbig');

  text4.classList.add('hidden');
  name4.classList.add('hidden');
  job4.classList.add('hidden');
  pic4.classList.add('psmall');
  pic4.classList.remove('pbig');

  text5.classList.add('hidden');
  name5.classList.add('hidden');
  job5.classList.add('hidden');
  pic5.classList.add('psmall');
  pic5.classList.remove('pbig');

  text2.classList.remove('hidden');
  name2.classList.remove('hidden');
  job2.classList.remove('hidden');
  pic2.classList.add('pbig');
  pic2.classList.remove('psmall');
}

pic3.onclick = function () {
  text1.classList.add('hidden');
  name1.classList.add('hidden');
  job1.classList.add('hidden');
  pic1.classList.add('psmall');
  pic1.classList.remove('pbig');

  text2.classList.add('hidden');
  name2.classList.add('hidden');
  job2.classList.add('hidden');
  pic2.classList.add('psmall');
  pic2.classList.remove('pbig');

  text4.classList.add('hidden');
  name4.classList.add('hidden');
  job4.classList.add('hidden');
  pic4.classList.add('psmall');
  pic4.classList.remove('pbig');

  text5.classList.add('hidden');
  name5.classList.add('hidden');
  job5.classList.add('hidden');
  pic5.classList.add('psmall');
  pic5.classList.remove('pbig');

  text3.classList.remove('hidden');
  name3.classList.remove('hidden');
  job3.classList.remove('hidden');
  pic3.classList.add('pbig');
  pic3.classList.remove('psmall');
}

pic4.onclick = function () {
  text1.classList.add('hidden');
  name1.classList.add('hidden');
  job1.classList.add('hidden');
  pic1.classList.add('psmall');
  pic1.classList.remove('pbig');

  text2.classList.add('hidden');
  name2.classList.add('hidden');
  job2.classList.add('hidden');
  pic2.classList.add('psmall');
  pic2.classList.remove('pbig');

  text3.classList.add('hidden');
  name3.classList.add('hidden');
  job3.classList.add('hidden');
  pic3.classList.add('psmall');
  pic3.classList.remove('pbig');

  text5.classList.add('hidden');
  name5.classList.add('hidden');
  job5.classList.add('hidden');
  pic5.classList.add('psmall');
  pic5.classList.remove('pbig');

  text4.classList.remove('hidden');
  name4.classList.remove('hidden');
  job4.classList.remove('hidden');
  pic4.classList.add('pbig');
  pic4.classList.remove('psmall');
}

pic5.onclick = function () {
  text1.classList.add('hidden');
  name1.classList.add('hidden');
  job1.classList.add('hidden');
  pic1.classList.add('psmall');
  pic1.classList.remove('pbig');

  text2.classList.add('hidden');
  name2.classList.add('hidden');
  job2.classList.add('hidden');
  pic2.classList.add('psmall');
  pic2.classList.remove('pbig');

  text3.classList.add('hidden');
  name3.classList.add('hidden');
  job3.classList.add('hidden');
  pic3.classList.add('psmall');
  pic3.classList.remove('pbig');

  text4.classList.add('hidden');
  name4.classList.add('hidden');
  job4.classList.add('hidden');
  pic4.classList.add('psmall');
  pic4.classList.remove('pbig');

  text5.classList.remove('hidden');
  name5.classList.remove('hidden');
  job5.classList.remove('hidden');
  pic5.classList.add('pbig');
  pic5.classList.remove('psmall');
}