const bPrime = Array(1000000).fill(true);
bPrime[1] = false;

for (let i = 2; i < bPrime.length; i++) {
  if (!bPrime[i]) continue;
  for (let j = i + i; j < bPrime.length; j += i) bPrime[j] = false;
}

for (let i = 1; i < bPrime.length; i++) {
  if (bPrime[i]) console.log(i);
}
