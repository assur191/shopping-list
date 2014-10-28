$('document').ready(function() {

    var button = function(value){
        return  '<li class="item">' +
                '<div class="button btn-todo">' + value + '</div>' +
                '<img src="images/delete_16.png" class="remove">' +
                '</li>';
    };

    $(document).on('click', '.plus', function(){
        addButton($('.item-input').val());
    });

    $(document).on('keypress', '.item-input',function(){
        if (event.which == 13) {
            addButton($('.item-input').val());
        }
    });

    $(document).on('click', '.remove', function(){
        $(this).parent().remove()
    });

    $(document).on('click', '.button',function(){
        $(this).toggleClass('btn-todo');
        $(this).toggleClass('btn-done');
    });

    function addButton(value){
        if(value !== ''){
            $('.list').append(button(value));
            $('.item-input').val('');
        }
    }
});