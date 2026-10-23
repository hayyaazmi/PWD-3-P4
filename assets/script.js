//== A. SEGITIGA ==
var a_segitiga = 6; //anggap sebagai sisi 1 untuk perhitungan luas
var t_segitiga = 8; //anggap sebagai sisi 2 untuk perhitungan luas
var hasil_luasSGTG = 0.5 * a_segitiga * t_segitiga; //hasi luas

var sm_segitiga = 10; //ini sisi miring, anggap sebagai sisi 3
var hasil_kelilingSGTG = a_segitiga + t_segitiga + sm_segitiga; //hasil keliling

console.log("1. SEGITIGA");
console.log("a. Luas     : " + hasil_luasSGTG);
console.log("b. Keliling : " + hasil_kelilingSGTG);
console.log("");

//== B. PERSEGI PANJANG ==
var p_persegipj = 12;
var l_persegipj = 5;

var hasil_luasPP = p_persegipj * l_persegipj;
var hasil_kelilingPP = 2 * (p_persegipj + l_persegipj);

console.log("2. PERSEGI PANJANG");
console.log("a. Luas     : " + hasil_luasPP);
console.log("a. Keliling : " + hasil_kelilingPP);
console.log("");

//== C. PRISMA SEGITGA ==
var luas_alas_prisma = hasil_luasSGTG; //luas alas prisma = hasil luas segitiga 
var keliling_alas_prisma = hasil_kelilingSGTG; //keliling alas prisma = hasil keliling segitiga
var t_prisma = p_persegipj; //tinggi prisma = tinggi persegi panjang

var hasil_luasPermukaanPrisma = 2 * luas_alas_prisma + keliling_alas_prisma * t_prisma;
var hasil_volumePrisma = luas_alas_prisma * t_prisma;

console.log("PRISMA SEGITIGA");
console.log("Luas Alas          :  " + luas_alas_prisma);
console.log("Keliling Alas      : " + keliling_alas_prisma)
console.log("a. Luas Permukaan  : " + hasil_luasPermukaanPrisma);
console.log("b. Volume          : " + hasil_volumePrisma);
console.log("");

//== D. LIMAS SEGITIGA ==
var sisiA_limas = 12;
var sisiB_limas = 12;
var sisiC_limas = 12;
var t_alasSGTG = 10.4;

var jarakSudut = sisiA_limas / Math.sqrt(3);
var t_limas = Math.sqrt((sisiA_limas * sisiA_limas) - (jarakSudut * jarakSudut)); //tinggi limas

var hasil_luasAlas = 0.5 * sisiC_limas * t_alasSGTG; 
var hasil_kelilingAlas = sisiA_limas + sisiB_limas + sisiC_limas; //alas

var jarak = hasil_luasAlas / (hasil_kelilingAlas / 2);
var hasil_tSisiTegak = Math.sqrt((t_limas * t_limas) + (jarak * jarak)); //tinggi sisi tegak

var hasil_luasSisiTegak = 0.5 * hasil_kelilingAlas * hasil_tSisiTegak; //luas sisi tegak

var hasil_luasPermukaan = hasil_luasAlas + hasil_luasSisiTegak; //luas permukaan
var hasil_volume = (1 / 3) * hasil_luasAlas * t_limas; //volume

console.log("LIMAS SEGITIGA")
console.log("Luas Alas Limas      : " + hasil_luasAlas);
console.log("Keliling Alas Limas  : " + hasil_kelilingAlas);
console.log("Tinggi Limas         : " + t_limas);
console.log("Tinggi Sisi Tegak    : " + hasil_tSisiTegak);
console.log("Luas Sisi Tegak      : " + hasil_luasSisiTegak);
console.log("a. Luas Permukaan Limas : " + hasil_luasPermukaan);
console.log("b. Volume Limas         : " + hasil_volume);
console.log("");

//== E. SEGITIGA SEMBARANG ==
var sisiA_sembarang = 7;
var sisiB_sembarang = 8;
var sisiC_sembarang = 9;

var hasil_kelilingSembarang = sisiA_sembarang + sisiB_sembarang + sisiC_sembarang; //hasil keliling
var s_sembarang = hasil_kelilingSembarang / 2; //setengah keliling
var hasil_luasSembarang = Math.sqrt(s_sembarang * (s_sembarang - sisiA_sembarang) * (s_sembarang - sisiB_sembarang) * (s_sembarang - sisiC_sembarang)); //hasil luas

console.log("SEGITIGA SEMBARANG");
console.log("a. Luas     : " + hasil_luasSembarang);
console.log("b. Keliling : " + hasil_kelilingSembarang);

