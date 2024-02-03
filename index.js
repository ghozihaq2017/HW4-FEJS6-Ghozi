// Inisiasi Variable
let randomNumbers = [];
let oddIndexNumbers = [];
let evenIndexNumbers = [];

let minOddIndexNumbers;
let maxOddIndexNumbers;
let totalOddIndexNumbers;
let averageOddIndexNumbers;

let minEvenIndexNumbers;
let maxEvenIndexNumbers;
let totalEvenIndexNumbers;
let averageEvenIndexNumbers;

// Fungsi untuk membuat 100 nomor random 1-50
const createRandomNumbers = () => {
  for (let i = 0; i < 100; i++) {
    let getNumber = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(getNumber);
  }
  return randomNumbers;
};

// Fungsi untuk memisahkan nomor indeks ganjil
const separateOddIndex = (arr) => {
  for (let i = 1; i < arr.length; i += 2) {
    oddIndexNumbers.push(arr[i]);
  }
  return oddIndexNumbers;
};

// Fungsi untuk memisahkan nomor indeks genap
const separateEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    evenIndexNumbers.push(arr[i]);
  }
  return evenIndexNumbers;
};

// Fungsi untuk mendapatkan nilai terkecil pada array
const getMin = (arr) => {
  let minNumber = 99999999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  return minNumber;
};

// Fungsi untuk mendapatkan nilai terbesar pada array
const getMax = (arr) => {
  let maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
};

// Fungsi mendapatkan nilai total keseluruhan number pada array
const getTotal = (arr) => {
  let totalNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    totalNumber += arr[i];
  }
  return totalNumber;
};

// Fungsi mendapatkan nilai rata-rata keseluruhan number pada array
const getAverage = (arr) => {
  let totalNumber = getTotal(arr);
  let averageNumber = totalNumber / arr.length;
  return averageNumber;
};
console.log('\n----------HOMEWORK 4 - JAVASRIPT & VERSION CONTROL----------');
console.log('\nArray dengan jumlah index 100 :');
console.log(createRandomNumbers());

console.log('\nArray index ganjil :');
console.log(separateOddIndex(randomNumbers));

console.log('\nArray index genap :');
console.log(separateEvenIndex(randomNumbers));

minOddIndexNumbers = getMin(oddIndexNumbers);
maxOddIndexNumbers = getMax(oddIndexNumbers);
totalOddIndexNumbers = getTotal(oddIndexNumbers);
averageOddIndexNumbers = getAverage(oddIndexNumbers);

minEvenIndexNumbers = getMin(evenIndexNumbers);
maxEvenIndexNumbers = getMax(evenIndexNumbers);
totalEvenIndexNumbers = getTotal(evenIndexNumbers);
averageEvenIndexNumbers = getAverage(evenIndexNumbers);

console.log('\nNilai-nilai pada array ganjil =>');
console.log(`Nilai terkecil array index ganjil : ${minOddIndexNumbers}`);
console.log(`Nilai terbesar array index ganjil : ${maxOddIndexNumbers}`);
console.log(`Total nilai pada array index ganjil adalah : ${totalOddIndexNumbers}`);
console.log(`Rata-rata nilai pada array index ganjil adalah : ${averageOddIndexNumbers}`);

console.log('\nNilai-nilai pada array genap =>');
console.log(`Nilai terkecil array index genap : ${minEvenIndexNumbers}`);
console.log(`Nilai terbesar array index genap : ${maxEvenIndexNumbers}`);
console.log(`Total nilai pada array index genap adalah : ${totalEvenIndexNumbers}`);
console.log(`Rata-rata nilai pada array index genap adalah : ${averageEvenIndexNumbers}`);

console.log('\nPerbandingan nilai antara array indeks genap dan array indeks ganjil =>');
if (minOddIndexNumbers > minEvenIndexNumbers) {
  console.log('Nilai Min lebih besar array index ganjil');
} else if (minOddIndexNumbers < minEvenIndexNumbers) {
  console.log('Nilai Min lebih besar array index genap');
} else {
  console.log('Nilai Min kedua array sama besar');
}

if (maxOddIndexNumbers > maxEvenIndexNumbers) {
  console.log('Nilai Max lebih besar array index ganjil');
} else if (maxOddIndexNumbers < maxEvenIndexNumbers) {
  console.log('Nilai Max lebih besar array index genap');
} else {
  console.log('Nilai Max kedua array sama besar');
}

if (totalOddIndexNumbers > totalEvenIndexNumbers) {
  console.log('Nilai Total lebih besar array index ganjil');
} else if (totalOddIndexNumbers < totalEvenIndexNumbers) {
  console.log('Nilai Total lebih besar array index genap');
} else {
  console.log('Nilai Total kedua array sama besar');
}

if (averageOddIndexNumbers > averageEvenIndexNumbers) {
  console.log('Nilai Rata-Rata lebih besar array index ganjil');
} else if (averageOddIndexNumbers < averageEvenIndexNumbers) {
  console.log('Nilai Rata-Rata lebih besar array index genap');
} else {
  console.log('Nilai Rata-Rata kedua array sama besar');
}
