// Function to add values to your list
document.getElementById("add").onclick = function() {
    var Text = document.getElementById("item"); // Get the input element
    var list = document.getElementById("list"); // Get the list element
    var NewValue = Text.value.trim().split(" "); // Split the input text into an array of words
    NewValue.forEach(function(value) { // Iterate over each word
        var li = document.createElement("li"); // Create a new list item element
        li.textContent = value; // Set the text content of the list item to the word
        list.appendChild(li); // Append the list item to the list
    });
    Text.value = ''; // Clear the input field
};

var count = 0; // Initialize a counter for the number of items removed

document.getElementById("remove").onclick = function() {
    var text = document.getElementById("item"); // Get the input element
    var list = document.getElementById("list"); // Get the list element
    var newValue = text.value.trim().toLowerCase(); // Get the input text, trim whitespace, and convert to lowercase
    var listItems = list.getElementsByTagName("li"); // Get all list items in the list
    for (var i = 0; i < listItems.length; i++) { // Iterate over each list item
        if (listItems[i].textContent.toLowerCase() === newValue) { // Check if the list item's text matches the input text
            list.removeChild(listItems[i]); // Remove the matching list item from the list
            count++; // Increment the count of items removed
            // Update the count display based on the number of items removed
            if (count > 1) {
                document.getElementById("count").textContent = "(" + count + ")" + " items removed";
            } else {
                document.getElementById("count").textContent = "(" + count + ")" + " item removed";
            }
            break; // Exit the loop after removing the first matching item
        }
    }
    document.getElementById("itemRemoved").textContent = newValue; // Display the text of the removed item
    text.value = ''; // Clear the input field
};
