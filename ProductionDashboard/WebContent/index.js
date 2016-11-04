$(document).ready(function () {
       
    $('#tabs').tabs();
    $('#div_password').hide();
    $('#settings').hide();
    
    $('#div_ortolani54').append("<img id='image_ortolani54' src='layout/LayoutAttimisOrtolani.svg'/>");
    $('#div_malignani14').append("<img id='image_malignani14' src='layout/LayoutAttimisMalignani.svg'/>");
        
    $('#image_ortolani54').css('zIndex','0'); 
    $('#image_malignani14').css('zIndex','0'); 
    
    $('#div_ortolani54').show();
    $('#div_malignani14').hide();
                    
    $('#tabs').tabs({
        activate: function (event, ui) {
            var $activeTab = $('#tabs').tabs('option', 'active');
            if ($activeTab === 0) {
                $('#div_ortolani54').show();
                $('#div_malignani14').hide();
                $('#button_1').show();
                $('#button_2').hide();
            }
            if ($activeTab === 1) {
                $('#div_ortolani54').hide();
                $('#div_malignani14').show();
                $('#button_1').hide();
                $('#button_2').show();
            }
            if ($activeTab === 2) {
                $('#div_ortolani54').hide();
                $('#div_malignani14').hide();
                $('#button_1').hide();
                $('#button_2').hide();
            }
            if ($activeTab === 3) {
                $('#div_ortolani54').hide();
                $('#div_malignani14').hide();
                $('#button_1').hide();
                $('#button_2').hide();
            }
            if ($activeTab === 4) {
                $('#div_ortolani54').hide();
                $('#div_malignani14').hide();
                $('#button_1').hide();
                $('#button_2').hide(); 
                $('#div_password').show();
                $('#password').focus();
            }else{
                $('#settings').hide();
                $('#div_password').show();
            }
            $('#image_ortolani54').css('width', $('#div_ortolani54').css('width'));
            $('#image_ortolani54').css('height', $('#div_ortolani54').css('height'));
            $('#image_malignani14').css('width', $('#div_malignani14').css('width'));
            $('#image_malignani14').css('height', $('#div_malignani14').css('height'));
        }
    });

    $("#password").keypress(function(e) {
        if (e.keyCode === 13) {
            if($('#password').val() === '0432796511'){
                $('#settings').show();
                $('#div_password').hide();
                $('#password').val('');
            }else{
                alert('La password è errata.');
                $('#password').val('');
                $('#password').focus();
            }
        }
    });

    $('#button-password').click(function() {
        if($('#password').val() === '0432796511'){
            $('#settings').show();
            $('#div_password').hide();
            $('#password').val('');
        }else{
            alert('La password è errata.');
            $('#password').val('');
            $('#password').focus();
        }
    });
    
    if(localStorage.getItem('enablepostracking') === null) {
        $('#enablepostracking').prop('checked', false);
    }else{
        if(localStorage.getItem('enablepostracking') === '1'){
            $('#enablepostracking').prop('checked', true);
        } else {
            $('#enablepostracking').prop('checked', false);
        }
    }
    
    $('#enablepostracking').click(function() {
        if($('#enablepostracking').is(':checked')){
            localStorage.setItem('enablepostracking', '1');
        }else{
            localStorage.setItem('enablepostracking', '0');
        }
    });
    
    if(localStorage.getItem('enablesizetracking') === null) {
        $('#enablesizetracking').prop('checked', false);
    }else{
        if(localStorage.getItem('enablesizetracking') === '1'){
            $('#enablesizetracking').prop('checked', true);
        } else {
            $('#enablesizetracking').prop('checked', false);
        }
    }
    
    $('#enablesizetracking').click(function() {
        if($('#enablesizetracking').is(':checked')){
            localStorage.setItem('enablesizetracking', '1');
        }else{
            localStorage.setItem('enablesizetracking', '0');
        }
    });
    
    if(localStorage.getItem('hidelayoutbuttons1') === null) {
        $('#hidelayoutbuttons1').prop('checked', false);
        $('#button_1').show(); 
    }else{
        if(localStorage.getItem('hidelayoutbuttons1') === '1'){
            $('#hidelayoutbuttons1').prop('checked', true);
            $('#button_1').hide();
        } else {
            $('#hidelayoutbuttons1').prop('checked', false);
            $('#button_1').show();
        }
    }
    
    $('#hidelayoutbuttons1').click(function() {
        if($('#hidelayoutbuttons1').is(':checked')){
            $('#button_1').hide();
            localStorage.setItem('hidelayoutbuttons1', '1');
        }else{
            localStorage.setItem('hidelayoutbuttons1', '0');
            $('#button_1').show();
        }
    });

    if(localStorage.getItem('hidelayoutbuttons2') === null) {
        $('#hidelayoutbuttons2').prop('checked', false);
        $('#button_2').show(); 
    }else{
        if(localStorage.getItem('hidelayoutbuttons2') === '1'){
            $('#hidelayoutbuttons2').prop('checked', true);
            $('#button_2').hide();
        } else {
            $('#hidelayoutbuttons2').prop('checked', false);
            $('#button_2').show();
        }
    }
    
    $('#hidelayoutbuttons2').click(function() {
        if($('#hidelayoutbuttons2').is(':checked')){
            $('#button_2').hide();
            localStorage.setItem('hidelayoutbuttons2', '1');
        }else{
            localStorage.setItem('hidelayoutbuttons2', '0');
            $('#button_2').show();
        }
    });

    if(localStorage.getItem('hidelayoutbuttons3') === null) {
        $('#hidelayoutbuttons3').prop('checked', false);
        $('#button_3').show(); 
    }else{
        if(localStorage.getItem('hidelayoutbuttons3') === '1'){
            $('#hidelayoutbuttons3').prop('checked', true);
            $('#button_3').hide();
        } else {
            $('#hidelayoutbuttons3').prop('checked', false);
            $('#button_3').show();
        }
    }
    
    $('#hidelayoutbuttons3').click(function() {
        if($('#hidelayoutbuttons3').is(':checked')){
            $('#button_3').hide();
            localStorage.setItem('hidelayoutbuttons3', '1');
        }else{
            localStorage.setItem('hidelayoutbuttons3', '0');
            $('#button_3').show();
        }
    });

    if(localStorage.getItem('hidelayoutbuttons4') === null) {
        $('#hidelayoutbuttons4').prop('checked', false);
        $('#button_4').show(); 
    }else{
        if(localStorage.getItem('hidelayoutbuttons4') === '1'){
            $('#hidelayoutbuttons4').prop('checked', true);
            $('#button_4').hide();
        } else {
            $('#hidelayoutbuttons4').prop('checked', false);
            $('#button_4').show();
        }
    }
    
    $('#hidelayoutbuttons4').click(function() {
        if($('#hidelayoutbuttons4').is(':checked')){
            $('#button_4').hide();
            localStorage.setItem('hidelayoutbuttons4', '1');
        }else{
            localStorage.setItem('hidelayoutbuttons4', '0');
            $('#button_4').show();
        }
    });

    if(localStorage.getItem('hidetab1') === null) {
        $('#hidetab1').prop('checked', false);
        $('[href="#tab1"]').closest('li').show();
        $('#tab1').show();
    }else{
        if(localStorage.getItem('hidetab1') === '1'){
            $('#hidetab1').prop('checked', true);
            $('[href="#tab1"]').closest('li').hide();
            $('#tab1').hide();
        } else {
            $('#hidetab1').prop('checked', false);
            $('[href="#tab1"]').closest('li').show();
            $('#tab1').show();
        }
    }
    
    if(localStorage.getItem('hidetab2') === null) {
        $('#hidetab2').prop('checked', false);
        $('[href="#tab2"]').closest('li').show();
        $('#tab2').show();
    }else{
        if(localStorage.getItem('hidetab2') === '1'){
            $('#hidetab2').prop('checked', true);
            $('[href="#tab2"]').closest('li').hide();
            $('#tab2').hide();
        } else {
            $('#hidetab2').prop('checked', false);
            $('[href="#tab2"]').closest('li').show();
            $('#tab2').show();
        }
    }
    
    if(localStorage.getItem('hidetab3') === null) {
        $('#hidetab3').prop('checked', false);
        $('[href="#tab3"]').closest('li').show();
        $('#tab3').show();
    }else{
        if(localStorage.getItem('hidetab3') === '1'){
            $('#hidetab3').prop('checked', true);
            $('[href="#tab3"]').closest('li').hide();
            $('#tab3').hide();
        } else {
            $('#hidetab3').prop('checked', false);
            $('[href="#tab3"]').closest('li').show();
            $('#tab3').show();
        }
    }
    
    if(localStorage.getItem('hidetab4') === null) {
        $('#hidetab4').prop('checked', false);
        $('[href="#tab4"]').closest('li').show();
        $('#tab4').show();
    }else{
        if(localStorage.getItem('hidetab4') === '1'){
            $('#hidetab4').prop('checked', true);
            $('[href="#tab4"]').closest('li').hide();
            $('#tab4').hide();
        } else {
            $('#hidetab4').prop('checked', false);
            $('[href="#tab4"]').closest('li').show();
            $('#tab4').show();
        }
    }
    
    $('#hidetab1').click(function() {
        if($('#hidetab1').is(':checked')){
            $('[href="#tab1"]').closest('li').hide();
            $('#tab1').hide();
            localStorage.setItem('hidetab1', '1');
        }else{
            $('[href="#tab1"]').closest('li').show();
            localStorage.setItem('hidetab1', '0');
            $('#tab1').show();
        }
    });
    
    $('#hidetab2').click(function() {
        if($('#hidetab2').is(':checked')){
            $('[href="#tab2"]').closest('li').hide();
            $('#tab2').hide();
            localStorage.setItem('hidetab2', '1');
        }else{
            $('[href="#tab2"]').closest('li').show();
            localStorage.setItem('hidetab2', '0');
            $('#tab2').show();
        }
    });
    
    $('#hidetab3').click(function() {
        if($('#hidetab3').is(':checked')){
            $('[href="#tab3"]').closest('li').hide();
            $('#tab3').hide();
            localStorage.setItem('hidetab3', '1');
        }else{
            $('[href="#tab3"]').closest('li').show();
            localStorage.setItem('hidetab3', '0');
            $('#tab3').show();
        }
    });
    
    $('#hidetab4').click(function() {
        if($('#hidetab4').is(':checked')){
            $('[href="#tab4"]').closest('li').hide();
            $('#tab4').hide();
           localStorage.setItem('hidetab4', '1');
        }else{
            $('[href="#tab4"]').closest('li').show();
            localStorage.setItem('hidetab4', '0');
            $('#tab4').show();
        }
    });

    if (localStorage.getItem('button_1_label') === null) {
        $('#button_1').val('Modifica Layout');
        $('#div_ortolani54').draggable({ disabled: true });
        $('#div_ortolani54').resizable({ disabled: true });
        $('#div_ortolani54').css({'border':'3px solid black'}); 
    } else {
        $('#button_1').val(localStorage.getItem('button_1_label'));
        if(localStorage.getItem('button_1_label') === 'Modifica Layout'){
            $('#div_ortolani54').draggable({ disabled: true });
            $('#div_ortolani54').resizable({ disabled: true });
            $('#div_ortolani54').css({'border':'3px solid black'}); 
        }else{
            $('#div_ortolani54').draggable({ disabled: false });
            $('#div_ortolani54').resizable({ disabled: false });
            $('#div_ortolani54').css({'border':'3px solid red'});
        }
    }
           
    $('#button_1').click(function(e) {
        var button = $(this);
        button.val(button.val() === 'Salva Modifiche' ? 'Modifica Layout' : 'Salva Modifiche');
        if(button.val() === 'Modifica Layout'){
            $('#div_ortolani54').draggable('disable');
            $('#div_ortolani54').resizable('disable');
            $('#div_ortolani54').css({'border':'3px solid black'});
            localStorage.setItem('button_1_label', button.val());
        } else{
            $('#div_ortolani54').draggable('enable');
            $('#div_ortolani54').resizable('enable');
            $('#div_ortolani54').css({'border':'3px solid red'});
            localStorage.setItem('button_1_label', button.val());
        }
    });

    if (localStorage.getItem('div_ortolani54_left') === null) {
        $('#div_ortolani54').css('left' ,'10px');  
    } else {
        $('#div_ortolani54').css('left', localStorage.getItem('div_ortolani54_left'));
    }
    
    if (localStorage.getItem('div_ortolani54_top') === null) {
        $('#div_ortolani54').css('top' ,'90px');
    } else {
        $('#div_ortolani54').css('top', localStorage.getItem('div_ortolani54_top'));
    }
    
    if (localStorage.getItem('image_ortolani54_width') === null) {
        $('#image_ortolani54').css('width' ,'1280px');
    } else {
        $('#image_ortolani54').css('width', localStorage.getItem('image_ortolani54_width'));
    }

    if (localStorage.getItem('image_ortolani54_height') === null) {
        $('#image_ortolani54').css('height' ,'768px');
    } else {
        $('#image_ortolani54').css('height', localStorage.getItem('image_ortolani54_height'));
    }

    $('#div_ortolani54').css('width', $('#image_ortolani54').css('width'));
    $('#div_ortolani54').css('height', $('#image_ortolani54').css('height'));
    
    $('#div_ortolani54').draggable({
        stop : function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem("div_ortolani54_left", $(this).css('left'));
            localStorage.setItem("div_ortolani54_top", $(this).css('top'));
        }
    });

    $('#div_ortolani54').resizable({
        alsoResize: $(this).find('img'),
        //aspectRatio: true,
        stop: function (event, ui) {
            if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem("image_ortolani54_width", $(this).css('width'));
            localStorage.setItem("image_ortolani54_height", $(this).css('height'));
            localStorage.setItem("div_ortolani54_width", $(this).css('width'));
            localStorage.setItem("div_ortolani54_height", $(this).css('height'));
        }
    });

    if (localStorage.getItem('button_2_label') === null) {
        $('#button_2').val('Modifica Layout');
        $('#div_malignani14').draggable({ disabled: true });
        $('#div_malignani14').resizable({ disabled: true });
        $('#div_malignani14').css({'border':'3px solid black'}); 
    } else {
        $('#button_2').val(localStorage.getItem('button_2_label'));
        if(localStorage.getItem('button_2_label') === 'Modifica Layout'){
            $('#div_malignani14').draggable({ disabled: true });
            $('#div_malignani14').resizable({ disabled: true });
            $('#div_malignani14').css({'border':'3px solid black'}); 
        }else{
            $('#div_malignani14').draggable({ disabled: false });
            $('#div_malignani14').resizable({ disabled: false });
            $('#div_malignani14').css({'border':'3px solid red'});
        }
    }
           
    $('#button_2').click(function(e) {
        var button = $(this);
        button.val(button.val() === 'Salva Modifiche' ? 'Modifica Layout' : 'Salva Modifiche');
        if(button.val() === 'Modifica Layout'){
            $('#div_malignani14').draggable('disable');
            $('#div_malignani14').resizable('disable');
            $('#div_malignani14').css({'border':'3px solid black'});
            localStorage.setItem('button_2_label', button.val());
        } else{
            $('#div_malignani14').draggable('enable');
            $('#div_malignani14').resizable('enable');
            $('#div_malignani14').css({'border':'3px solid red'});
            localStorage.setItem('button_2_label', button.val());
        }
    });

    if (localStorage.getItem('div_malignani14_left') === null) {
        $('#div_malignani14').css('left' ,'10px');  
    } else {
        $('#div_malignani14').css('left', localStorage.getItem('div_malignani14_left'));
    }
    
    if (localStorage.getItem('div_malignani14_top') === null) {
        $('#div_malignani14').css('top' ,'90px');
    } else {
        $('#div_malignani14').css('top', localStorage.getItem('div_malignani14_top'));
    }
    
    if (localStorage.getItem('image_malignani14_width') === null) {
        $('#image_malignani14').css('width' ,'1280px');
    } else {
        $('#image_malignani14').css('width', localStorage.getItem('image_malignani14_width'));
    }

    if (localStorage.getItem('image_malignani14_height') === null) {
        $('#image_malignani14').css('height' ,'768px');
    } else {
        $('#image_malignani14').css('height', localStorage.getItem('image_malignani14_height'));
    }

    $('#div_malignani14').css('width', $('#image_malignani14').css('width'));
    $('#div_malignani14').css('height', $('#image_malignani14').css('height'));
    
    $('#div_malignani14').draggable({
        stop : function (event, ui) { 
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem("div_malignani14_left", $(this).css('left'));
            localStorage.setItem("div_malignani14_top", $(this).css('top'));
        }
    });

    $('#div_malignani14').resizable({
        alsoResize: $(this).find('img'),
        //aspectRatio: true,
        stop: function (event, ui) {
            if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('image_malignani14_width', $(this).css('width'));
            localStorage.setItem('image_malignani14_height', $(this).css('height'));
            localStorage.setItem('div_malignani14_width', $(this).css('width'));
            localStorage.setItem('div_malignani14_height', $(this).css('height'));
        }
    });

    $('#button-defaults').click(function(){
        localStorage.clear();
        $('#enablepostracking').prop('checked', false);
        $('#enablesizetracking').prop('checked', false);
        $('#hidetab1').prop('checked', false);
        $('#hidetab2').prop('checked', false);
        $('#hidetab3').prop('checked', false);
        $('#hidetab4').prop('checked', false);
        $('#hidelayoutbuttons1').prop('checked', false);
        $('#hidelayoutbuttons2').prop('checked', false);
        $('#hidelayoutbuttons3').prop('checked', false);
        $('#hidelayoutbuttons4').prop('checked', false);
        alert('Impostazioni di default ripristinate.');
        window.location.reload();
    });
    
// ***** EXPORT CONFIGURATION FILE *********************************************

    $('#button-export').click(function(e){
        var configuration = JSON.stringify(localStorage);
        var file = '';
        var filename = '';
        $.ajax({
            url: "WriteSettings",
            dataType: "json",
            async: false,
            data:{
                  configuration: configuration
                 },
            success: function(data){
                file = data.file; 
                filename = data.filename;
                alert('File di configurazione generato con successo in: [ ' + file + ' ]');
            },
            error:function(error){
                alert('Errore nella generazione del file di configurazione: ' + error.responseText);
            }
        });
        
        e.preventDefault();  
        window.location.href = 'configurationfiles/' + filename;
        
    });
    
// ***** IMPORT CONFIGURATION FILE *********************************************
    $('#file').on('change', readFile);
    
    function readFile(e){
        var files = e.target.files;
        var file = files[0];    
        var reader = new FileReader();
        reader.onload = function() {
            var data = JSON.parse(this.result);
            for (var key in data) {
                localStorage[key] = data[key];
            }
            alert('Configurazione importata con successo.');
            $('#file').val('');
            window.location.reload();
        };
        reader.readAsText(file);
     }
    
});