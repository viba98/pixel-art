$('#sub').on('click', function makeGrid(){

    while($('tr')>0){
      $('#pixel_canvas tr').empty();
    }

    let w=$('#input_width').val();
    let h=$('#input_height').val();
    console.log(w+' '+h)
    for(let x=0; x<h; x++)
    {
      $('table').append('<tr></tr>');
      for ( let y=0; y<w; y++)
      {
        $('tr').append('<td></td>');
        console.log(y);
      }

      console.log(x);
    }


  $('td').on('click', function(){

    var color= $('#colorPicker').val();
    $(this).css('background-color', color);

  });
});
