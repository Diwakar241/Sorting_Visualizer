const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 10) {

//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;

	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;

	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;

	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}




// asynchronous function to perform "Selection Sort"
async function selectionSort(delay = 300) {

	// For selecting section having id "ele"
	    var barval=document.getElementById("ele")
	    // For dynamically Updating the selected element
	      barval.innerHTML=
	      "selection Sort";


let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";

	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
  }, 300)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;

	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}
// To pause the execution of code for 200 milliseconds
await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
}, 200)
);
barval.innerHTML="Sorting Visualizer";

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Bubble Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#6f459e";


// To enable the button "Insertion Sort" after final(sorted)
document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#6f459e";
}





// asynchronous function to perform "Bubble Sort"
async function BubbleSort(delay = 300) {

	// For selecting section having id "ele"
			var barval=document.getElementById("ele")
			// For dynamically Updating the selected element
				barval.innerHTML=
				"Bubble Sort";

let bars = document.querySelectorAll(".bar");
for(var i=0;i<bars.length-1;i++){
  for(var j=0;j<bars.length-1-i;j++){
    // Provide darkblue color to the jth bar
    bars[j].style.backgroundColor = "darkblue";
    // To pause the execution of code for 200 milliseconds
    await new Promise((resolve) =>
  		setTimeout(() => {
  		resolve();
    },200)
  	);
    // Provide red color to the (j+1)th bar
    bars[j+1].style.backgroundColor = "red";
    // To pause the execution of code for 200 milliseconds
    await new Promise((resolve) =>
  		setTimeout(() => {
  		resolve();
    },200)
  	);
    // To store the integer value of jth bar to var1
    var val1 = parseInt(bars[j].childNodes[0].innerHTML);
    // To store the integer value of (j+1)th bar to var1
    var val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
    // Compare val1 & val2
    if(val1>val2){
      // To swap jth and (j+1)th bar
      var temp1 = bars[j].style.height;
    	var temp2 = bars[j].childNodes[0].innerText;
    	bars[j].style.height = bars[j+1].style.height;
    	bars[j+1].style.height = temp1;
    	bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
    	bars[j+1].childNodes[0].innerText = temp2;
    }
    // To pause the execution of code for 200 milliseconds
    await new Promise((resolve) =>
  		setTimeout(() => {
  		resolve();
    }, 200)
  	);
    // Provide skyblue color to the (j)th bar
    bars[j].style.backgroundColor = " rgb(24, 190, 255)";
    // Provide skyblue color to the (j+1)th bar
    bars[j+1].style.backgroundColor = " rgb(24, 190, 255)";
  }
  	// Provide lightgreen color to the nth bar
  bars[bars.length-1-i].style.backgroundColor = " rgb(49, 226, 13)";
}
	// Provide lightgreen color to the 1st bar
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
// To pause the execution of code for 200 milliseconds
await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
}, 200)
);
barval.innerHTML="Sorting Visualizer";

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Bubble Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#6f459e";


// To enable the button "Insertion Sort" after final(sorted)
document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#6f459e";
}





// asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 300) {
	// For selecting section having id "ele"
	    var barval=document.getElementById("ele")
	    // For dynamically Updating the selected element
	      barval.innerHTML=
	      "	Insertion Sort";



	let bars = document.querySelectorAll(".bar");

	  // Provide lightgreen colour to 0th bar
	  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
	  for (var i = 1; i < bars.length; i += 1) {

	    // Assign i-1 to j
	    var j = i - 1;

	    // To store the integer value of ith bar to key
	    var key =
	    parseInt(bars[i].childNodes[0].innerHTML);

	    // To store the ith bar height to height
	    var height = bars[i].style.height;

	    //Provide darkblue color to the ith bar
	    bars[i].style.backgroundColor = "darkblue";

	    // To pause the execution of code for 600 milliseconds
	    await new Promise((resolve) =>
	    setTimeout(() => {
	      resolve();
	    }, 600)
	  );

	    // For placing selected element at its correct position
	    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

	      // Provide darkblue color to the jth bar
	      bars[j].style.backgroundColor = "darkblue";

	      // For placing jth element over (j+1)th element
	      bars[j + 1].style.height = bars[j].style.height;
	      bars[j + 1].childNodes[0].innerText =
	      bars[j].childNodes[0].innerText;

	      // Assign j-1 to j
	      j = j - 1;

	      // To pause the execution of code for 600 milliseconds
	      await new Promise((resolve) =>
	        setTimeout(() => {
	          resolve();
	        }, 600)
	      );

	      // Provide lightgreen color to the sorted part
	      for(var k=i;k>=0;k--){
	        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
	      }
	    }

	    // Placing the selected element to its correct position
	    bars[j + 1].style.height = height;
	    bars[j + 1].childNodes[0].innerHTML = key;

	    // To pause the execution of code for 600 milliseconds
	    await new Promise((resolve) =>
	      setTimeout(() => {
	        resolve();
	      }, 600)
	    );

	    // Provide light green color to the ith bar
	    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	  }
		// To pause the execution of code for 200 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
		}, 200)
		);
barval.innerHTML="Sorting Visualizer";
// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Bubble Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#6f459e";


// To enable the button "Insertion Sort" after final(sorted)
document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#6f459e";
}










// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}

// function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Bubble Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

  // To disable the button "Selection Sort"
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  document.getElementById("Button4").disabled = true;
  document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}
