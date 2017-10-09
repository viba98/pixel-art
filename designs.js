let color= $('.color').val();

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sub').on('click', makeGrid());

function makeGrid() {
  let height=$('#input_height').val();
  let width = $('#input_width').val();
  console.log(width+' '+height+' '+color);
  const table= $('#pixel_canvas');
  const cells = document.createElement("td");

   const rows = document.createElement("tr");
  for(let x=1; x<=height; x++){

    console.log(x);
  let y=0
  while (y<width){
    //  row.insertAfter(cell);
      rows.append(cells);
      console.log(y);
      y++
    }
    //table.insertAfter(row);
    table.append(rows);
  }

// Your code goes here!

}
