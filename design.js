$('#sub').on('click', function makeGrid(){


    $('#pixel_canvas').empty();


    let width =$('#input_width').val();
    let height =$('#input_height').val();
    //console.log(w+' '+h)
    for(let x=0; x<height; x++)
    {
      $('table').append('<tr></tr>');
      for ( let y=0; y<width ; y++)
      {
        $('tr').last().append('<td></td>');
        //console.log(y);
      }

      //console.log(x);
    }


  $('td').on('click', function(){

    var color= $('#colorPicker').val();
    $(this).css('background-color', color);

  });
});
