$(function(){

    $('.box').draggable();

    $('#box1').draggable({ scroll: true, revert: "invalid"});

    $('#box2').draggable({ axis: "x"});

    $('#box3').draggable({ axis: "y"});

    
    $('#box4').draggable({ containment: "parent", revert: "invalid"});

    // DROPPABLE STARTS HERE
    $('#droppable').droppable({
        accept: "#box1",
        drop:function(){
            $(this).find('span').html("when a box got attitude, drop it like it's hot!");
        }
    });

    $('#droppable1').droppable({
        accept: "#box4",
        drop:function(){
            $(this).find('span').html("when a box got attitude, drop it like it's hot!")
        }
    })

    // SORTABLE STARTS HERE
    $('#sortable').sortable( { connectWith: "#sortableToo", placeholder: "placeholderBox"});
    $('#sortableToo').sortable( { connectWith: "#sortable", placeholder: "placeholderBox"});

    // ACCORDIoN STARTS HERE
    $('#accordion').accordion( {
        collapsible: true, heightStyle: "content"
    });

    // DATEPICKER STARTS HERE

    $('.date').datepicker( { 
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        minDate: 1,
        maxDate: "5W"
    });

    // TO DO LIST STARTS HERE

    $('#todoList ul').sortable( {
        items: "li:not('.listTitle')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });

    $('input').keydown(function(e){
        if(e.keyCode == 13) {
            var item = $(this).val();

            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val("");
            $(".noOfTasks").html(function(i, val){
                return +val+1
            })
        }
    })

    $('#trash').droppable( {
        drop: function(event, ui) {
            ui.draggable.remove();
            $(".noOfTasks").html(function(i, val){
                return val-1
            })
        }
        
    });

    $('ul').accordion( {
        heightStyle: "content",
        collapsible: true,
    });

    $('#cross').hover(function(){
        $('#cross span').css("display", "block");
    }, function(){
        $('#cross span').css("display", "none")
    })
});