module.exports = function findBinary(n) {
  if(n === 0) return '0';
  let binary = '';
  while(n > 1) {
  const rem = n%2;
  binary += rem;
  n = Math.floor(n/2);
  }
   binary = binary.split('');
   binary.push('1');
  return binary.reverse().join('')
}
