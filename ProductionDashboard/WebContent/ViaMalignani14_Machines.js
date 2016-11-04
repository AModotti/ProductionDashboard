$(document).ready(function () {
    
    var datarefresh = '5000';
    var blinktime = '500';
    
    var machineswidth = '75px';
    var machinesheight = '18px';
    
    var modifybordercolor = '2px solid red';
        
//***** INITIAL POSITIONING *****************************************************************************************************************************************************    
    
    var top_20MNTG_2 = '436px';
    var left_20MNTG_2 = '308px';
    var width_20MNTG_2 = '207px';
    var height_20MNTG_2 = '93px';
        
    var top_1000014 = '551px';
    var left_1000014 = '308px';    
    
    var top_1000018 = '436px';
    var left_1000018 = '199px';   
    
    var top_1000021 = '192px';
    var left_1000021 = '522px';
    
    var top_1000024 = '91px';
    var left_1000024 = '332px';
    
    var top_1000025 = '91px';
    var left_1000025 = '233px';   
    
    var top_1000026 = '91px';
    var left_1000026 = '132px'; 
    
    var top_1000027 = '91px';
    var left_1000027 = '30px';
    
    var top_1000051 = '91px';
    var left_1000051 = '432px';
    
    var top_1000095 = '192px';
    var left_1000095 = '628px';
        
    $('#button_2').click(function(e) {
        if($('#button_2').val() === 'Modifica Layout'){
            getData();
        }
    }); 
    
//***** 20MNTG_1 ******************************************************************************************************************************************************************    

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_20MNTG_2').draggable({ disabled: true });
        $('#div_20MNTG_2').resizable({ disabled: true });
        $('#div_20MNTG_2').css({'border':'2px solid black'}); 
        $('#div_20MNTG_2').css({'cursor':'default'});
    }else{
        $('#div_20MNTG_2').draggable({ disabled: false });
        $('#div_20MNTG_2').resizable({ disabled: false });
        $('#div_20MNTG_2').css({'border':modifybordercolor});
        $('#div_20MNTG_2').css({'cursor':'pointer'});
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_20MNTG_2').draggable('disable');
            $('#div_20MNTG_2').resizable('disable');
            $('#div_20MNTG_2').css({'border':'2px solid black'});  
        }else{
            $('#div_20MNTG_2').draggable('enable');
            $('#div_20MNTG_2').resizable('enable');
            $('#div_20MNTG_2').css({'border':modifybordercolor});
        }
    });  
    
    if (localStorage.getItem('div_20MNTG_2_left') === null) {
        $('#div_20MNTG_2').css('left', left_20MNTG_2);
    } else {
        $('#div_20MNTG_2').css('left', localStorage.getItem('div_20MNTG_2_left'));
    }

    if (localStorage.getItem('div_20MNTG_2_top') === null) {
        $('#div_20MNTG_2').css('top', top_20MNTG_2);
    } else {
        $('#div_20MNTG_2').css('top', localStorage.getItem('div_20MNTG_2_top'));
    }

    if (localStorage.getItem('div_20MNTG_2_width') === null) {
        $('#div_20MNTG_2').css('width', width_20MNTG_2);
    } else {
        $('#div_20MNTG_2').css('width', localStorage.getItem('div_20MNTG_2_width'));
    }
    
    if (localStorage.getItem('div_20MNTG_2_height') === null) {
        $('#div_20MNTG_2').css('height', height_20MNTG_2);
    } else {
        $('#div_20MNTG_2').css('height', localStorage.getItem('div_20MNTG_2_height'));
    }
      
    $('#div_20MNTG_2').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_20MNTG_2_left', $(this).css('left'));
            localStorage.setItem('div_20MNTG_2_top', $(this).css('top'));
        }
    });
    
    $('#div_20MNTG_2').resizable({
        minWidth: 100,
        minHeight: 90,
        stop: function (event, ui) {
            if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_20MNTG_2_width', $(this).css('width'));
            localStorage.setItem('div_20MNTG_2_height', $(this).css('height'));
        }
    });    
    
//***** M1000014 ****************************************************************************************************************************************************************    
    
    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000014').draggable({ disabled: true });
        $('#div_1000014').resizable({ disabled: true });
        $('#div_1000014').css({'border':'2px solid black'}); 
        $('#div_1000014').css({'cursor':'default'}); 
    }else{
        $('#div_1000014').draggable({ disabled: false });
        $('#div_1000014').resizable({ disabled: false });
        $('#div_1000014').css({'border':modifybordercolor});
        $('#div_1000014').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000014').draggable('disable');
            $('#div_1000014').resizable('disable');
            $('#div_1000014').css({'border':'2px solid black'});
        }else{
            $('#div_1000014').draggable('enable');
            $('#div_1000014').resizable('enable');
            $('#div_1000014').css({'border':modifybordercolor});
        }
    });  
    
    if (localStorage.getItem('div_1000014_left') === null) {
        $('#div_1000014').css('left', left_1000014);
    } else {
        $('#div_1000014').css('left', localStorage.getItem('div_1000014_left'));
    }

    if (localStorage.getItem('div_1000014_top') === null) {
        $('#div_1000014').css('top', top_1000014);
    } else {
        $('#div_1000014').css('top', localStorage.getItem('div_1000014_top'));
    }

    if (localStorage.getItem('div_1000014_width') === null) {
        $('#div_1000014').css('width', machineswidth);
    } else {
        $('#div_1000014').css('width', localStorage.getItem('div_1000014_width'));
    }
    
    if (localStorage.getItem('div_1000014_height') === null) {
        $('#div_1000014').css('height', machinesheight);
    } else {
        $('#div_1000014').css('height', localStorage.getItem('div_1000014_height'));
    } 
    
    $('#div_1000014').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000014_left', $(this).css('left'));
            localStorage.setItem('div_1000014_top', $(this).css('top'));
        }
    });
    
    $('#div_1000014').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000014_width', $(this).css('width'));
            localStorage.setItem('div_1000014_height', $(this).css('height'));
        }
    });

//***** M1000018 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000018').draggable({ disabled: true });
        $('#div_1000018').resizable({ disabled: true });
        $('#div_1000018').css({'border':'2px solid black'}); 
        $('#div_1000018').css({'cursor':'default'}); 
    }else{
        $('#div_1000018').draggable({ disabled: false });
        $('#div_1000018').resizable({ disabled: false });
        $('#div_1000018').css({'border':modifybordercolor});
        $('#div_1000018').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000018').draggable('disable');
            $('#div_1000018').resizable('disable');
            $('#div_1000018').css({'border':'2px solid black'});
        }else{
            $('#div_1000018').draggable('enable');
            $('#div_1000018').resizable('enable');
            $('#div_1000018').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000018_left') === null) {
        $('#div_1000018').css('left', left_1000018);
    } else {
        $('#div_1000018').css('left', localStorage.getItem('div_1000018_left'));
    }

    if (localStorage.getItem('div_1000018_top') === null) {
        $('#div_1000018').css('top', top_1000018);
    } else {
        $('#div_1000018').css('top', localStorage.getItem('div_1000018_top'));
    }

    if (localStorage.getItem('div_1000018_width') === null) {
        $('#div_1000018').css('width', machineswidth);
    } else {
        $('#div_1000018').css('width', localStorage.getItem('div_1000018_width'));
    }
    
    if (localStorage.getItem('div_1000018_height') === null) {
        $('#div_1000018').css('height', machinesheight);
    } else {
        $('#div_1000018').css('height', localStorage.getItem('div_1000018_height'));
    }

    $('#div_1000018').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000018_left', $(this).css('left'));
            localStorage.setItem('div_1000018_top', $(this).css('top'));
        }
    });
    
    $('#div_1000018').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000018_width', $(this).css('width'));
            localStorage.setItem('div_1000018_height', $(this).css('height'));
        }
    });
   
//***** M1000021 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000021').draggable({ disabled: true });
        $('#div_1000021').resizable({ disabled: true });
        $('#div_1000021').css({'border':'2px solid black'}); 
        $('#div_1000021').css({'cursor':'default'}); 
    }else{
        $('#div_1000021').draggable({ disabled: false });
        $('#div_1000021').resizable({ disabled: false });
        $('#div_1000021').css({'border':modifybordercolor});
        $('#div_1000021').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000021').draggable('disable');
            $('#div_1000021').resizable('disable');
            $('#div_1000021').css({'border':'2px solid black'});
        }else{
            $('#div_1000021').draggable('enable');
            $('#div_1000021').resizable('enable');
            $('#div_1000021').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000021_left') === null) {
        $('#div_1000021').css('left', left_1000021);
    } else {
        $('#div_1000021').css('left', localStorage.getItem('div_1000021_left'));
    }

    if (localStorage.getItem('div_1000021_top') === null) {
        $('#div_1000021').css('top', top_1000021);
    } else {
        $('#div_1000021').css('top', localStorage.getItem('div_1000021_top'));
    }

    if (localStorage.getItem('div_1000021_width') === null) {
        $('#div_1000021').css('width', machineswidth);
    } else {
        $('#div_1000021').css('width', localStorage.getItem('div_1000021_width'));
    }
    
    if (localStorage.getItem('div_1000021_height') === null) {
        $('#div_1000021').css('height', machinesheight);
    } else {
        $('#div_1000021').css('height', localStorage.getItem('div_1000021_height'));
    }

    $('#div_1000021').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000021_left', $(this).css('left'));
            localStorage.setItem('div_1000021_top', $(this).css('top'));
        }
    });
    
    $('#div_1000021').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000021_width', $(this).css('width'));
            localStorage.setItem('div_1000021_height', $(this).css('height'));
        }
    });
    
//***** M1000024 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000024').draggable({ disabled: true });
        $('#div_1000024').resizable({ disabled: true });
        $('#div_1000024').css({'border':'2px solid black'}); 
        $('#div_1000024').css({'cursor':'default'}); 
    }else{
        $('#div_1000024').draggable({ disabled: false });
        $('#div_1000024').resizable({ disabled: false });
        $('#div_1000024').css({'border':modifybordercolor});
        $('#div_1000024').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000024').draggable('disable');
            $('#div_1000024').resizable('disable');
            $('#div_1000024').css({'border':'2px solid black'});
        }else{
            $('#div_1000024').draggable('enable');
            $('#div_1000024').resizable('enable');
            $('#div_1000024').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000024_left') === null) {
        $('#div_1000024').css('left', left_1000024);
    } else {
        $('#div_1000024').css('left', localStorage.getItem('div_1000024_left'));
    }

    if (localStorage.getItem('div_1000024_top') === null) {
        $('#div_1000024').css('top', top_1000024);
    } else {
        $('#div_1000024').css('top', localStorage.getItem('div_1000024_top'));
    }

    if (localStorage.getItem('div_1000024_width') === null) {
        $('#div_1000024').css('width', machineswidth);
    } else {
        $('#div_1000024').css('width', localStorage.getItem('div_1000024_width'));
    }
    
    if (localStorage.getItem('div_1000024_height') === null) {
        $('#div_1000024').css('height', machinesheight);
    } else {
        $('#div_1000024').css('height', localStorage.getItem('div_1000024_height'));
    }

    $('#div_1000024').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000024_left', $(this).css('left'));
            localStorage.setItem('div_1000024_top', $(this).css('top'));
        }
    });
    
    $('#div_1000024').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000024_width', $(this).css('width'));
            localStorage.setItem('div_1000024_height', $(this).css('height'));
        }
    });
    
//***** M1000025 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000025').draggable({ disabled: true });
        $('#div_1000025').resizable({ disabled: true });
        $('#div_1000025').css({'border':'2px solid black'}); 
        $('#div_1000025').css({'cursor':'default'}); 
    }else{
        $('#div_1000025').draggable({ disabled: false });
        $('#div_1000025').resizable({ disabled: false });
        $('#div_1000025').css({'border':modifybordercolor});
        $('#div_1000025').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000025').draggable('disable');
            $('#div_1000025').resizable('disable');
            $('#div_1000025').css({'border':'2px solid black'});
        }else{
            $('#div_1000025').draggable('enable');
            $('#div_1000025').resizable('enable');
            $('#div_1000025').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000025_left') === null) {
        $('#div_1000025').css('left', left_1000025);
    } else {
        $('#div_1000025').css('left', localStorage.getItem('div_1000025_left'));
    }

    if (localStorage.getItem('div_1000025_top') === null) {
        $('#div_1000025').css('top', top_1000025);
    } else {
        $('#div_1000025').css('top', localStorage.getItem('div_1000025_top'));
    }

    if (localStorage.getItem('div_1000025_width') === null) {
        $('#div_1000025').css('width', machineswidth);
    } else {
        $('#div_1000025').css('width', localStorage.getItem('div_1000025_width'));
    }
    
    if (localStorage.getItem('div_1000025_height') === null) {
        $('#div_1000025').css('height', machinesheight);
    } else {
        $('#div_1000025').css('height', localStorage.getItem('div_1000025_height'));
    }

    $('#div_1000025').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000025_left', $(this).css('left'));
            localStorage.setItem('div_1000025_top', $(this).css('top'));
        }
    });
    
    $('#div_1000025').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000025_width', $(this).css('width'));
            localStorage.setItem('div_1000025_height', $(this).css('height'));
        }
    });

//***** M1000026 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000026').draggable({ disabled: true });
        $('#div_1000026').resizable({ disabled: true });
        $('#div_1000026').css({'border':'2px solid black'}); 
        $('#div_1000026').css({'cursor':'default'}); 
    }else{
        $('#div_1000026').draggable({ disabled: false });
        $('#div_1000026').resizable({ disabled: false });
        $('#div_1000026').css({'border':modifybordercolor});
        $('#div_1000026').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000026').draggable('disable');
            $('#div_1000026').resizable('disable');
            $('#div_1000026').css({'border':'2px solid black'});
        }else{
            $('#div_1000026').draggable('enable');
            $('#div_1000026').resizable('enable');
            $('#div_1000026').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000026_left') === null) {
        $('#div_1000026').css('left', left_1000026);
    } else {
        $('#div_1000026').css('left', localStorage.getItem('div_1000026_left'));
    }

    if (localStorage.getItem('div_1000026_top') === null) {
        $('#div_1000026').css('top', top_1000026);
    } else {
        $('#div_1000026').css('top', localStorage.getItem('div_1000026_top'));
    }

    if (localStorage.getItem('div_1000026_width') === null) {
        $('#div_1000026').css('width', machineswidth);
    } else {
        $('#div_1000026').css('width', localStorage.getItem('div_1000026_width'));
    }
    
    if (localStorage.getItem('div_1000026_height') === null) {
        $('#div_1000026').css('height', machinesheight);
    } else {
        $('#div_1000026').css('height', localStorage.getItem('div_1000026_height'));
    }

    $('#div_1000026').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000026_left', $(this).css('left'));
            localStorage.setItem('div_1000026_top', $(this).css('top'));
        }
    });
    
    $('#div_1000026').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000026_width', $(this).css('width'));
            localStorage.setItem('div_1000026_height', $(this).css('height'));
        }
    });

//***** M1000027 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000027').draggable({ disabled: true });
        $('#div_1000027').resizable({ disabled: true });
        $('#div_1000027').css({'border':'2px solid black'}); 
        $('#div_1000027').css({'cursor':'default'}); 
    }else{
        $('#div_1000027').draggable({ disabled: false });
        $('#div_1000027').resizable({ disabled: false });
        $('#div_1000027').css({'border':modifybordercolor});
        $('#div_1000027').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000027').draggable('disable');
            $('#div_1000027').resizable('disable');
            $('#div_1000027').css({'border':'2px solid black'});
        }else{
            $('#div_1000027').draggable('enable');
            $('#div_1000027').resizable('enable');
            $('#div_1000027').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000027_left') === null) {
        $('#div_1000027').css('left', left_1000027);
    } else {
        $('#div_1000027').css('left', localStorage.getItem('div_1000027_left'));
    }

    if (localStorage.getItem('div_1000027_top') === null) {
        $('#div_1000027').css('top', top_1000027);
    } else {
        $('#div_1000027').css('top', localStorage.getItem('div_1000027_top'));
    }

    if (localStorage.getItem('div_1000027_width') === null) {
        $('#div_1000027').css('width', machineswidth);
    } else {
        $('#div_1000027').css('width', localStorage.getItem('div_1000027_width'));
    }
    
    if (localStorage.getItem('div_1000027_height') === null) {
        $('#div_1000027').css('height', machinesheight);
    } else {
        $('#div_1000027').css('height', localStorage.getItem('div_1000027_height'));
    }

    $('#div_1000027').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000027_left', $(this).css('left'));
            localStorage.setItem('div_1000027_top', $(this).css('top'));
        }
    });
    
    $('#div_1000027').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000027_width', $(this).css('width'));
            localStorage.setItem('div_1000027_height', $(this).css('height'));
        }
    });

//***** M1000051 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000051').draggable({ disabled: true });
        $('#div_1000051').resizable({ disabled: true });
        $('#div_1000051').css({'border':'2px solid black'}); 
        $('#div_1000051').css({'cursor':'default'}); 
    }else{
        $('#div_1000051').draggable({ disabled: false });
        $('#div_1000051').resizable({ disabled: false });
        $('#div_1000051').css({'border':modifybordercolor});
        $('#div_1000051').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000051').draggable('disable');
            $('#div_1000051').resizable('disable');
            $('#div_1000051').css({'border':'2px solid black'});
        }else{
            $('#div_1000051').draggable('enable');
            $('#div_1000051').resizable('enable');
            $('#div_1000051').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000051_left') === null) {
        $('#div_1000051').css('left', left_1000051);
    } else {
        $('#div_1000051').css('left', localStorage.getItem('div_1000051_left'));
    }

    if (localStorage.getItem('div_1000051_top') === null) {
        $('#div_1000051').css('top', top_1000051);
    } else {
        $('#div_1000051').css('top', localStorage.getItem('div_1000051_top'));
    }

    if (localStorage.getItem('div_1000051_width') === null) {
        $('#div_1000051').css('width', machineswidth);
    } else {
        $('#div_1000051').css('width', localStorage.getItem('div_1000051_width'));
    }
    
    if (localStorage.getItem('div_1000051_height') === null) {
        $('#div_1000051').css('height', machinesheight);
    } else {
        $('#div_1000051').css('height', localStorage.getItem('div_1000051_height'));
    }

    $('#div_1000051').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000051_left', $(this).css('left'));
            localStorage.setItem('div_1000051_top', $(this).css('top'));
        }
    });
    
    $('#div_1000051').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000051_width', $(this).css('width'));
            localStorage.setItem('div_1000051_height', $(this).css('height'));
        }
    });

//***** M1000095 ****************************************************************************************************************************************************************

    if($('#button_2').val() === 'Modifica Layout'){
        $('#div_1000095').draggable({ disabled: true });
        $('#div_1000095').resizable({ disabled: true });
        $('#div_1000095').css({'border':'2px solid black'}); 
        $('#div_1000095').css({'cursor':'default'}); 
    }else{
        $('#div_1000095').draggable({ disabled: false });
        $('#div_1000095').resizable({ disabled: false });
        $('#div_1000095').css({'border':modifybordercolor});
        $('#div_1000095').css({'cursor':'pointer'}); 
    }

    $('#button_2').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000095').draggable('disable');
            $('#div_1000095').resizable('disable');
            $('#div_1000095').css({'border':'2px solid black'});
        }else{
            $('#div_1000095').draggable('enable');
            $('#div_1000095').resizable('enable');
            $('#div_1000095').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000095_left') === null) {
        $('#div_1000095').css('left', left_1000095);
    } else {
        $('#div_1000095').css('left', localStorage.getItem('div_1000095_left'));
    }

    if (localStorage.getItem('div_1000095_top') === null) {
        $('#div_1000095').css('top', top_1000095);
    } else {
        $('#div_1000095').css('top', localStorage.getItem('div_1000095_top'));
    }

    if (localStorage.getItem('div_1000095_width') === null) {
        $('#div_1000095').css('width', machineswidth);
    } else {
        $('#div_1000095').css('width', localStorage.getItem('div_1000095_width'));
    }
    
    if (localStorage.getItem('div_1000095_height') === null) {
        $('#div_1000095').css('height', machinesheight);
    } else {
        $('#div_1000095').css('height', localStorage.getItem('div_1000095_height'));
    }

    $('#div_1000095').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000095_left', $(this).css('left'));
            localStorage.setItem('div_1000095_top', $(this).css('top'));
        }
    });
    
    $('#div_1000095').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000095_width', $(this).css('width'));
            localStorage.setItem('div_1000095_height', $(this).css('height'));
        }
    });

//***** FOR ALL DIVS ************************************************************************************************************************************************************

    function getData() {
        $.ajax({
            async: false,
            url: "GetMachineData",
            dataType: "json",
            success: function (data) {
                var internal_div_20MNTG_2_top = 20;
                var internal_div_20MNTG_2_left = 5;
                $.each(data, function (key1, value1) {
                    $.each(value1, function (key2, value2) {
                        if((value2.centro === '20MNTG')&&(value2.reparto === '002')){
                            $('#div_' + value2.macchina).remove();
                            var div = '<div id="div_' + value2.macchina + '" class="machine">' 
                                    + '<a id="a_' + value2.macchina + '"></a>' 
                                    + '<input type="hidden" id="h_' + value2.macchina + '"/>' 
                                    + '</div>';
                            $('#div_20MNTG_2').append(div);  
                            $('#a_' + value2.macchina).text(value2.testo);
                            $('#a_' + value2.macchina).css('color', value2.colore);
                            $('#div_' + value2.macchina).attr('title', value2.info);
                            $('#div_' + value2.macchina).css('background-color', value2.sfondo);
                            $('#h_' + value2.macchina).val(value2.stato);
                            $('#div_' + value2.macchina).css('top', internal_div_20MNTG_2_top);
                            $('#div_' + value2.macchina).css('left', internal_div_20MNTG_2_left);
                            internal_div_20MNTG_2_top = internal_div_20MNTG_2_top + 22;
                        }else{
                            $('#a_' + value2.macchina).text(value2.testo);
                            $('#a_' + value2.macchina).css('color', value2.colore);
                            $('#div_' + value2.macchina).attr('title', value2.info);
                            $('#div_' + value2.macchina).css('background-color', value2.sfondo);
                            $('#h_' + value2.macchina).val(value2.stato);
                        }
                    });
                });
                $('#li1').removeClass('connectionerror');
                $('#li2').removeClass('connectionerror');
                $('#li3').removeClass('connectionerror');
                $('#li4').removeClass('connectionerror');   
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#li1').addClass('connectionerror');
                $('#li2').addClass('connectionerror');
                $('#li3').addClass('connectionerror');
                $('#li4').addClass('connectionerror'); 
            }
        });
    };    
 
    getData();  

    setInterval(function () {
        var $activeTab = $('#tabs').tabs('option', 'active');
        if ($activeTab === 1) {
            if(($('#button_1').val() === 'Modifica Layout')&&($('#button_2').val() === 'Modifica Layout')){
                getData();
            }
        }
    }, datarefresh);
    
    setInterval(function () { 
        if($('#button_2').val() === 'Modifica Layout'){
            if($('#div_20MNTG_2').find('.machine').length === 0){
                $('#a_20MNTG_2').css('color','black');
                $('#div_20MNTG_2').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000014').val() === '2'){
                $('#a_1000014').css('color','black');
                $('#div_1000014').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000018').val() === '2'){
                $('#a_1000018').css('color','black');
                $('#div_1000018').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000021').val() === '2'){
                $('#a_1000021').css('color','black');
                $('#div_1000021').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000024').val() === '2'){
                $('#a_1000024').css('color','black');
                $('#div_1000024').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000025').val() === '2'){
                $('#a_1000025').css('color','black');
                $('#div_1000025').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000026').val() === '2'){
                $('#a_1000026').css('color','black');
                $('#div_1000026').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000027').val() === '2'){
                $('#a_1000027').css('color','black');
                $('#div_1000027').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000051').val() === '2'){
                $('#a_1000051').css('color','black');
                $('#div_1000051').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000095').val() === '2'){
                $('#a_1000095').css('color','black');
                $('#div_1000095').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
        }else{
            $('#div_20MNTG_2').css('background-color' ,'white');
            $('#a_20MNTG_2').css('color' ,'black');
            $('#div_20MNTG_2').css({'border':modifybordercolor});
            $('#div_20MNTG_2').find('.machine').css('background-color','white');
            $('#div_20MNTG_2').find('.machine').css({'border':modifybordercolor});
            $('#div_20MNTG_2').find('.machine').html('MONTAGGIO');

            $('#div_1000014').css('background-color' ,'white');
            $('#a_1000014').text('1000014');
            $('#a_1000014').css('color' ,'black');
            $('#div_1000014').css({'border':modifybordercolor});

            $('#div_1000018').css('background-color' ,'white');
            $('#a_1000018').text('1000018');
            $('#a_1000018').css('color' ,'black');
            $('#div_1000018').css({'border':modifybordercolor});

            $('#div_1000021').css('background-color' ,'white');
            $('#a_1000021').text('1000021');
            $('#a_1000021').css('color' ,'black');
            $('#div_1000021').css({'border':modifybordercolor});

            $('#div_1000024').css('background-color' ,'white');
            $('#a_1000024').text('1000024');
            $('#a_1000024').css('color' ,'black');
            $('#div_1000024').css({'border':modifybordercolor});

            $('#div_1000025').css('background-color' ,'white');
            $('#a_1000025').text('1000025');
            $('#a_1000025').css('color' ,'black');
            $('#div_1000025').css({'border':modifybordercolor});

            $('#div_1000026').css('background-color' ,'white');
            $('#a_1000026').text('1000026');
            $('#a_1000026').css('color' ,'black');
            $('#div_1000026').css({'border':modifybordercolor});

            $('#div_1000027').css('background-color' ,'white');
            $('#a_1000027').text('1000027');
            $('#a_1000027').css('color' ,'black');
            $('#div_1000027').css({'border':modifybordercolor});

            $('#div_1000051').css('background-color' ,'white');
            $('#a_1000051').text('1000051');
            $('#a_1000051').css('color' ,'black');
            $('#div_1000051').css({'border':modifybordercolor});

            $('#div_1000095').css('background-color' ,'white');
            $('#a_1000095').text('1000095');
            $('#a_1000095').css('color' ,'black');
            $('#div_1000095').css({'border':modifybordercolor});
        }
    }, blinktime);
                
});