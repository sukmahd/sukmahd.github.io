//Quiz interaktif v1

var nama;
nama = prompt('Masukan nama: ');

if(nama == ' ')
  {
    nama = 'rahasia';
    console.log('hallo ' + nama);
  }
else
  {
    console.log('hallo ' + nama);
  }

var soal1 = {
  soal: 'Apa Kepanjangan dari HTML ? ',
  jawaban: 'b'
}

var soal2 = {
  soal: 'Apa Kepanjangan dari CSS ? ',
  jawaban: 'c'
}

var soal3 = {
  soal: 'Apa Kepanjangan dari JS ? ',
  jawaban: 'a'
}

var soal4 = {
  soal: 'siapa nama instruktur di phase-0 ? ',
  jawaban: 'b'
}

var arrSoal = [soal1, soal2, soal3, soal4];

function panggilSoal(nama, soal)
{
  var count = 0;
  console.log('Hallo selamat datang di quiz interaktif ini :) ');
  console.log('Silahkan jawab 4 soal berikut');
  for(var i = 0; i < soal.length; i++)
    {
      var a = prompt(soal[i].soal);
      if(a == soal[i].jawaban)
        {
          count += 1;
        }
    }
}

panggilSoal(nama,arrSoal);
