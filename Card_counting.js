let count = 0;

function cc(card) {
  // Only change code below this line
if (card >= 2 && card <= 6) {
  count++;
  } else if (card ===10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  } //else if (card === 7 || card === 8 || card === 9) {
    //count += 0;
  //}
if (count <= 0) {
  return count + ' Hold'} else {return count + ' Bet'};
  // Only change code above this line
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));