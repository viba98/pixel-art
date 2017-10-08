
let color= $('color').val();
//console.log(width+' '+height+' '+color);
const table= $('#pixel_canvas');


// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sub').on('click',makeGrid());


function makeGrid() {
  table.innerHTML='';

  const height=$('#input_height').val();
  const width = $('#input_width').val();

  for(let x=1; x<=height; x++){
    const rows = $('<tr></tr>');
    table.append(rows);
    console.log(x);
  let y=0;
  while (y < width){
    //  row.insertAfter(cell);
      const cells = $('<td></td>');
      rows.append(cells);
      console.log(y);
      y++;
    }
    //table.insertAfter(row);

    linkCells();
  }
}

function linkCells(){
  for (let i=0; i < table.rows.length ; i++){
    for( let j=0; j < rows[i].cells.length ; j++){
      table.rows[i].cells[j].onClick = function(){
        changeColor(this);
      };
    }
  };
    $('color').click(function changeColor(x){
      cell.css('background-color',color);
    });
}

const validateForm = () => {
  return false;
};
