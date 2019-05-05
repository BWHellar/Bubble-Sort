// This is known as a selection swap. It locates the smallest remaining value and puts it into the correct place in the array.
// This assumes the first is the smallest. It then compares it to the second. It swaps it if it is not.




// For the sake of this I am going to just hard code in the array.
var array ["day", "cat", "ant", "aant", "aaant"];
// We need to declare an empty variable for our swap later down the line.
var empty;
// This is our selection sort function.
function sort(array){
  // This outer loop controls how many passes over the array we perform.  It goes down the array length and checks every word. and continually selects the next smallest in the array.
  for(var i = 0; i<array.length; i++){
    // The inner loop determines at which item to stop the comparisons by using the outer loop count and subtracting it from the total number of items in the array.  We loop over the remaining entries to find the index of the smallest remaining entry
    for(var j = 0; j<array.length; j++){
      // So for each pass through it is saying this.  If the minimum which was previously set for the [i] is still smaller than the next of [j] and it is not equal to [j] aka itself. A letter being the same,  will leave it in its place which will naturally allow for the program to recognize repeat letters that match the index of the set current minimum. If they are different such as the difference between "abc" and "aab". Since the initial pass already recognzied that "a" is the smallest these words are next to eachother. Following passes will find that for the second letter that "b" is larger than our "a" which was already found to be that minimum. so we will need to swap them around.
      if(array[i]<array[j] && i!=j){
        // And put it into the temporary variable we have set up.
        temp = array[j];
        // Then it will swap positions with the other word.
        array[j] = array[i];
        // Then we are
        array[i] = temp;
      }
    }
  }
  // Then we return the new value after all the iterations are done.
  return array
}

//So ultimately this is not the most efficient wya to sort items. After doing a bit of research it counts as a O(n2) notation. Which apparently is described as "The Worst Case Scenario" as it takes the active action on the array.
// O(n2) Usually describes Algorithms that nested iterations over a data set.
// Notations are O(1), O(N), O(N2), and O(2N)
// O(1) = Algorithms that execute inb same space like a simple return.
// O(N) = Algorithms that are directly proportional to the input size.
// O(2N) = Algorithms that have double growth to each addition of the input set.

// This can be tested by adding this line below into JSFiddle below the entire function and outside of the loop.
//
