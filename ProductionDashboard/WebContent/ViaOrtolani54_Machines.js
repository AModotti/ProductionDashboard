$(document).ready(function () {
    
    var datarefresh = '5000';
    var blinktime = '500';
    
    var machineswidth = '75px';
    var machinesheight = '18px';
    
    var modifybordercolor = '2px solid red';
        
//***** INITIAL POSITIONING *****************************************************************************************************************************************************    
    
    var top_20MNTG_1 = '433px';
    var left_20MNTG_1 = '407px';
    var width_20MNTG_1 = '182px';
    var height_20MNTG_1 = '126px';
    
    var top_20IMBL_1 = '606px';
    var left_20IMBL_1 = '408px';
    var width_20IMBL_1 = '181px';
    var height_20IMBL_1 = '127px';
    
    var top_20CLLD_1 = '607px';
    var left_20CLLD_1 = '67px';
    var width_20CLLD_1 = '108px';
    var height_20CLLD_1 = '127px';
    
    var top_1000000 = '466px';
    var left_1000000 = '144px';    
    
    var top_1000001 = '466px';
    var left_1000001 = '44px';    
    
    var top_1000004 = '59px';
    var left_1000004 = '950px';
    
    var top_1000005 = '416px';
    var left_1000005 = '990px';   
    
    var top_1000006 = '416px';
    var left_1000006 = '1084px'; 
    
    var top_1000007 = '506px';
    var left_1000007 = '1085px';
    
    var top_1000008 = '416px';
    var left_1000008 = '1180px';
    
    var top_1000111 = '269px';
    var left_1000111 = '355px';
    
    var top_1000010 = '267px';
    var left_1000010 = '690px';
    
    var top_1000015 = '416px';
    var left_1000015 = '704px';
    
    var top_1000016 = '506px';
    var left_1000016 = '990px';
    
    var top_1000017 = '506px';
    var left_1000017 = '1180px'; 
    
    var top_1000019 = '150px';
    var left_1000019 = '48px';
    
    var top_1000020 = '109px';
    var left_1000020 = '258px';
    
    var top_1000022 = '308px';
    var left_1000022 = '255px';
    
    var top_1000028 = '269px';
    var left_1000028 = '454px';
    
    var top_1000031 = '59px';
    var left_1000031 = '1050px';
    
    var top_1000032 = '268px';
    var left_1000032 = '44px';
    
    var top_1000033 = '268px';
    var left_1000033 = '144px';
    
    var top_1000034 = '343px';
    var left_1000034 = '144px';
    
    var top_1000035 = '268px';
    var left_1000035 = '555px';
    
    var top_1000037 = '150px';
    var left_1000037 = '359px';  
    
    var top_1000038 = '57px';
    var left_1000038 = '359px';
    
    var top_1000039 = '150px';
    var left_1000039 = '690px'; 
    
    var top_1000041 = '57px';
    var left_1000041 = '690px';
    
    var top_1000045 = '150px';
    var left_1000045 = '148px';
    
    var top_1000047 = '506px';
    var left_1000047 = '895px';
    
    var top_1000053 = '57px';
    var left_1000053 = '48px'; 
    
    var top_1000054 = '57px';
    var left_1000054 = '148px';
    
    var top_1000057 = '149px';
    var left_1000057 = '790px';
    
    var top_1000059 = '57px';
    var left_1000059 = '790px';
    
    var top_1000060 = '57px';
    var left_1000060 = '459px';
    
    var top_1000061 = '150px';
    var left_1000061 = '459px';
    
    var top_1000062 = '59px';
    var left_1000062 = '1150px';
    
    var top_1000063 = '267px';
    var left_1000063 = '790px';
    
    var top_1000089 = '417px';
    var left_1000089 = '800px';
    
    var top_1000091 = '417px';
    var left_1000091 = '895px';
    
    $('#button_1').click(function(e) {
        if($('#button_1').val() === 'Modifica Layout'){
            getData();
        }
    }); 
    
//***** 20MNTG_1 ******************************************************************************************************************************************************************    

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_20MNTG_1').draggable({ disabled: true });
        $('#div_20MNTG_1').resizable({ disabled: true });
        $('#div_20MNTG_1').css({'border':'2px solid black'}); 
        $('#div_20MNTG_1').css({'cursor':'default'});
    }else{
        $('#div_20MNTG_1').draggable({ disabled: false });
        $('#div_20MNTG_1').resizable({ disabled: false });
        $('#div_20MNTG_1').css({'border':modifybordercolor});
        $('#div_20MNTG_1').css({'cursor':'pointer'});
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_20MNTG_1').draggable('disable');
            $('#div_20MNTG_1').resizable('disable');
            $('#div_20MNTG_1').css({'border':'2px solid black'});  
        }else{
            $('#div_20MNTG_1').draggable('enable');
            $('#div_20MNTG_1').resizable('enable');
            $('#div_20MNTG_1').css({'border':modifybordercolor});
        }
    });  
    
    if (localStorage.getItem('div_20MNTG_1_left') === null) {
        $('#div_20MNTG_1').css('left', left_20MNTG_1);
    } else {
        $('#div_20MNTG_1').css('left', localStorage.getItem('div_20MNTG_1_left'));
    }

    if (localStorage.getItem('div_20MNTG_1_top') === null) {
        $('#div_20MNTG_1').css('top', top_20MNTG_1);
    } else {
        $('#div_20MNTG_1').css('top', localStorage.getItem('div_20MNTG_1_top'));
    }

    if (localStorage.getItem('div_20MNTG_1_width') === null) {
        $('#div_20MNTG_1').css('width', width_20MNTG_1);
    } else {
        $('#div_20MNTG_1').css('width', localStorage.getItem('div_20MNTG_1_width'));
    }
    
    if (localStorage.getItem('div_20MNTG_1_height') === null) {
        $('#div_20MNTG_1').css('height', height_20MNTG_1);
    } else {
        $('#div_20MNTG_1').css('height', localStorage.getItem('div_20MNTG_1_height'));
    }
      
    $('#div_20MNTG_1').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_20MNTG_1_left', $(this).css('left'));
            localStorage.setItem('div_20MNTG_1_top', $(this).css('top'));
        }
    });
    
    $('#div_20MNTG_1').resizable({
        minWidth: 100,
        minHeight: 100,
        stop: function (event, ui) {
            if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_20MNTG_1_width', $(this).css('width'));
            localStorage.setItem('div_20MNTG_1_height', $(this).css('height'));
        }
    });    
    
//***** 20IMBL_1 ******************************************************************************************************************************************************************    
    
    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_20IMBL_1').draggable({ disabled: true });
        $('#div_20IMBL_1').resizable({ disabled: true });
        $('#div_20IMBL_1').css({'border':'2px solid black'}); 
        $('#div_20IMBL_1').css({'cursor':'default'}); 
    }else{
        $('#div_20IMBL_1').draggable({ disabled: false });
        $('#div_20IMBL_1').resizable({ disabled: false });
        $('#div_20IMBL_1').css({'border':modifybordercolor});
        $('#div_20IMBL_1').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_20IMBL_1').draggable('disable');
            $('#div_20IMBL_1').resizable('disable');
            $('#div_20IMBL_1').css({'border':'2px solid black'});
        }else{
            $('#div_20IMBL_1').draggable('enable');
            $('#div_20IMBL_1').resizable('enable');
            $('#div_20IMBL_1').css({'border':modifybordercolor});
        }
    });  
    
    if (localStorage.getItem('div_20IMBL_1_left') === null) {
        $('#div_20IMBL_1').css('left', left_20IMBL_1);
    } else {
        $('#div_20IMBL_1').css('left', localStorage.getItem('div_20IMBL_1_left'));
    }

    if (localStorage.getItem('div_20IMBL_1_top') === null) {
        $('#div_20IMBL_1').css('top', top_20IMBL_1);
    } else {
        $('#div_20IMBL_1').css('top', localStorage.getItem('div_20IMBL_1_top'));
    }

    if (localStorage.getItem('div_20IMBL_1_width') === null) {
        $('#div_20IMBL_1').css('width', width_20IMBL_1);
    } else {
        $('#div_20IMBL_1').css('width', localStorage.getItem('div_20IMBL_1_width'));
    }
    
    if (localStorage.getItem('div_20IMBL_1_height') === null) {
        $('#div_20IMBL_1').css('height', height_20IMBL_1);
    } else {
        $('#div_20IMBL_1').css('height', localStorage.getItem('div_20IMBL_1_height'));
    }
    
    $('#div_20IMBL_1').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_20IMBL_1_left', $(this).css('left'));
            localStorage.setItem('div_20IMBL_1_top', $(this).css('top'));
        }
    });
    
    $('#div_20IMBL_1').resizable({
        minWidth: 100,
        minHeight: 100,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_20IMBL_1_width', $(this).css('width'));
            localStorage.setItem('div_20IMBL_1_height', $(this).css('height'));
        }
    });

//***** 20CLLD_1 ******************************************************************************************************************************************************************    
    
    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_20CLLD_1').draggable({ disabled: true });
        $('#div_20CLLD_1').resizable({ disabled: true });
        $('#div_20CLLD_1').css({'border':'2px solid black'}); 
        $('#div_20CLLD_1').css({'cursor':'default'}); 
    }else{
        $('#div_20CLLD_1').draggable({ disabled: false });
        $('#div_20CLLD_1').resizable({ disabled: false });
        $('#div_20CLLD_1').css({'border':modifybordercolor});
        $('#div_20CLLD_1').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_20CLLD_1').draggable('disable');
            $('#div_20CLLD_1').resizable('disable');
            $('#div_20CLLD_1').css({'border':'2px solid black'});
        }else{
            $('#div_20CLLD_1').draggable('enable');
            $('#div_20CLLD_1').resizable('enable');
            $('#div_20CLLD_1').css({'border':modifybordercolor});
        }
    });  
    
    if (localStorage.getItem('div_20CLLD_1_left') === null) {
        $('#div_20CLLD_1').css('left', left_20CLLD_1);
    } else {
        $('#div_20CLLD_1').css('left', localStorage.getItem('div_20CLLD_1_left'));
    }

    if (localStorage.getItem('div_20CLLD_1_top') === null) {
        $('#div_20CLLD_1').css('top', top_20CLLD_1);
    } else {
        $('#div_20CLLD_1').css('top', localStorage.getItem('div_20CLLD_1_top'));
    }

    if (localStorage.getItem('div_20CLLD_1_width') === null) {
        $('#div_20CLLD_1').css('width', width_20CLLD_1);
    } else {
        $('#div_20CLLD_1').css('width', localStorage.getItem('div_20CLLD_1_width'));
    }
    
    if (localStorage.getItem('div_20CLLD_1_height') === null) {
        $('#div_20CLLD_1').css('height', height_20CLLD_1);
    } else {
        $('#div_20CLLD_1').css('height', localStorage.getItem('div_20CLLD_1_height'));
    } 
    
    $('#div_20CLLD_1').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_20CLLD_1_left', $(this).css('left'));
            localStorage.setItem('div_20CLLD_1_top', $(this).css('top'));
        }
    });
    
    $('#div_20CLLD_1').resizable({
        minWidth: 100,
        minHeight: 100,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_20CLLD_1_width', $(this).css('width'));
            localStorage.setItem('div_20CLLD_1_height', $(this).css('height'));
        }
    });
    
//***** M1000000 ****************************************************************************************************************************************************************    
    
    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000000').draggable({ disabled: true });
        $('#div_1000000').resizable({ disabled: true });
        $('#div_1000000').css({'border':'2px solid black'}); 
        $('#div_1000000').css({'cursor':'default'}); 
    }else{
        $('#div_1000000').draggable({ disabled: false });
        $('#div_1000000').resizable({ disabled: false });
        $('#div_1000000').css({'border':modifybordercolor});
        $('#div_1000000').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000000').draggable('disable');
            $('#div_1000000').resizable('disable');
            $('#div_1000000').css({'border':'2px solid black'});
        }else{
            $('#div_1000000').draggable('enable');
            $('#div_1000000').resizable('enable');
            $('#div_1000000').css({'border':modifybordercolor});
        }
    });  
    
    if (localStorage.getItem('div_1000000_left') === null) {
        $('#div_1000000').css('left', left_1000000);
    } else {
        $('#div_1000000').css('left', localStorage.getItem('div_1000000_left'));
    }

    if (localStorage.getItem('div_1000000_top') === null) {
        $('#div_1000000').css('top', top_1000000);
    } else {
        $('#div_1000000').css('top', localStorage.getItem('div_1000000_top'));
    }

    if (localStorage.getItem('div_1000000_width') === null) {
        $('#div_1000000').css('width', machineswidth);
    } else {
        $('#div_1000000').css('width', localStorage.getItem('div_1000000_width'));
    }
    
    if (localStorage.getItem('div_1000000_height') === null) {
        $('#div_1000000').css('height', machinesheight);
    } else {
        $('#div_1000000').css('height', localStorage.getItem('div_1000000_height'));
    } 
    
    $('#div_1000000').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000000_left', $(this).css('left'));
            localStorage.setItem('div_1000000_top', $(this).css('top'));
        }
    });
    
    $('#div_1000000').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000000_width', $(this).css('width'));
            localStorage.setItem('div_1000000_height', $(this).css('height'));
        }
    });

//***** M1000001 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000001').draggable({ disabled: true });
        $('#div_1000001').resizable({ disabled: true });
        $('#div_1000001').css({'border':'2px solid black'}); 
        $('#div_1000001').css({'cursor':'default'}); 
    }else{
        $('#div_1000001').draggable({ disabled: false });
        $('#div_1000001').resizable({ disabled: false });
        $('#div_1000001').css({'border':modifybordercolor});
        $('#div_1000001').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000001').draggable('disable');
            $('#div_1000001').resizable('disable');
            $('#div_1000001').css({'border':'2px solid black'});
        }else{
            $('#div_1000001').draggable('enable');
            $('#div_1000001').resizable('enable');
            $('#div_1000001').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000001_left') === null) {
        $('#div_1000001').css('left', left_1000001);
    } else {
        $('#div_1000001').css('left', localStorage.getItem('div_1000001_left'));
    }

    if (localStorage.getItem('div_1000001_top') === null) {
        $('#div_1000001').css('top', top_1000001);
    } else {
        $('#div_1000001').css('top', localStorage.getItem('div_1000001_top'));
    }

    if (localStorage.getItem('div_1000001_width') === null) {
        $('#div_1000001').css('width', machineswidth);
    } else {
        $('#div_1000001').css('width', localStorage.getItem('div_1000001_width'));
    }
    
    if (localStorage.getItem('div_1000001_height') === null) {
        $('#div_1000001').css('height', machinesheight);
    } else {
        $('#div_1000001').css('height', localStorage.getItem('div_1000001_height'));
    }

    $('#div_1000001').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000001_left', $(this).css('left'));
            localStorage.setItem('div_1000001_top', $(this).css('top'));
        }
    });
    
    $('#div_1000001').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000001_width', $(this).css('width'));
            localStorage.setItem('div_1000001_height', $(this).css('height'));
        }
    });
   
//***** M1000004 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000004').draggable({ disabled: true });
        $('#div_1000004').resizable({ disabled: true });
        $('#div_1000004').css({'border':'2px solid black'}); 
        $('#div_1000004').css({'cursor':'default'}); 
    }else{
        $('#div_1000004').draggable({ disabled: false });
        $('#div_1000004').resizable({ disabled: false });
        $('#div_1000004').css({'border':modifybordercolor});
        $('#div_1000004').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000004').draggable('disable');
            $('#div_1000004').resizable('disable');
            $('#div_1000004').css({'border':'2px solid black'});
        }else{
            $('#div_1000004').draggable('enable');
            $('#div_1000004').resizable('enable');
            $('#div_1000004').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000004_left') === null) {
        $('#div_1000004').css('left', left_1000004);
    } else {
        $('#div_1000004').css('left', localStorage.getItem('div_1000004_left'));
    }

    if (localStorage.getItem('div_1000004_top') === null) {
        $('#div_1000004').css('top', top_1000004);
    } else {
        $('#div_1000004').css('top', localStorage.getItem('div_1000004_top'));
    }

    if (localStorage.getItem('div_1000004_width') === null) {
        $('#div_1000004').css('width', machineswidth);
    } else {
        $('#div_1000004').css('width', localStorage.getItem('div_1000004_width'));
    }
    
    if (localStorage.getItem('div_1000004_height') === null) {
        $('#div_1000004').css('height', machinesheight);
    } else {
        $('#div_1000004').css('height', localStorage.getItem('div_1000004_height'));
    }

    $('#div_1000004').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000004_left', $(this).css('left'));
            localStorage.setItem('div_1000004_top', $(this).css('top'));
        }
    });
    
    $('#div_1000004').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000004_width', $(this).css('width'));
            localStorage.setItem('div_1000004_height', $(this).css('height'));
        }
    });
    
//***** M1000005 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000005').draggable({ disabled: true });
        $('#div_1000005').resizable({ disabled: true });
        $('#div_1000005').css({'border':'2px solid black'}); 
        $('#div_1000005').css({'cursor':'default'}); 
    }else{
        $('#div_1000005').draggable({ disabled: false });
        $('#div_1000005').resizable({ disabled: false });
        $('#div_1000005').css({'border':modifybordercolor});
        $('#div_1000005').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000005').draggable('disable');
            $('#div_1000005').resizable('disable');
            $('#div_1000005').css({'border':'2px solid black'});
        }else{
            $('#div_1000005').draggable('enable');
            $('#div_1000005').resizable('enable');
            $('#div_1000005').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000005_left') === null) {
        $('#div_1000005').css('left', left_1000005);
    } else {
        $('#div_1000005').css('left', localStorage.getItem('div_1000005_left'));
    }

    if (localStorage.getItem('div_1000005_top') === null) {
        $('#div_1000005').css('top', top_1000005);
    } else {
        $('#div_1000005').css('top', localStorage.getItem('div_1000005_top'));
    }

    if (localStorage.getItem('div_1000005_width') === null) {
        $('#div_1000005').css('width', machineswidth);
    } else {
        $('#div_1000005').css('width', localStorage.getItem('div_1000005_width'));
    }
    
    if (localStorage.getItem('div_1000005_height') === null) {
        $('#div_1000005').css('height', machinesheight);
    } else {
        $('#div_1000005').css('height', localStorage.getItem('div_1000005_height'));
    }

    $('#div_1000005').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000005_left', $(this).css('left'));
            localStorage.setItem('div_1000005_top', $(this).css('top'));
        }
    });
    
    $('#div_1000005').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000005_width', $(this).css('width'));
            localStorage.setItem('div_1000005_height', $(this).css('height'));
        }
    });
    
//***** M1000006 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000006').draggable({ disabled: true });
        $('#div_1000006').resizable({ disabled: true });
        $('#div_1000006').css({'border':'2px solid black'}); 
        $('#div_1000006').css({'cursor':'default'}); 
    }else{
        $('#div_1000006').draggable({ disabled: false });
        $('#div_1000006').resizable({ disabled: false });
        $('#div_1000006').css({'border':modifybordercolor});
        $('#div_1000006').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000006').draggable('disable');
            $('#div_1000006').resizable('disable');
            $('#div_1000006').css({'border':'2px solid black'});
        }else{
            $('#div_1000006').draggable('enable');
            $('#div_1000006').resizable('enable');
            $('#div_1000006').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000006_left') === null) {
        $('#div_1000006').css('left', left_1000006);
    } else {
        $('#div_1000006').css('left', localStorage.getItem('div_1000006_left'));
    }

    if (localStorage.getItem('div_1000006_top') === null) {
        $('#div_1000006').css('top', top_1000006);
    } else {
        $('#div_1000006').css('top', localStorage.getItem('div_1000006_top'));
    }

    if (localStorage.getItem('div_1000006_width') === null) {
        $('#div_1000006').css('width', machineswidth);
    } else {
        $('#div_1000006').css('width', localStorage.getItem('div_1000006_width'));
    }
    
    if (localStorage.getItem('div_1000006_height') === null) {
        $('#div_1000006').css('height', machinesheight);
    } else {
        $('#div_1000006').css('height', localStorage.getItem('div_1000006_height'));
    }

    $('#div_1000006').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000006_left', $(this).css('left'));
            localStorage.setItem('div_1000006_top', $(this).css('top'));
        }
    });
    
    $('#div_1000006').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000006_width', $(this).css('width'));
            localStorage.setItem('div_1000006_height', $(this).css('height'));
        }
    });

//***** M1000007 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000007').draggable({ disabled: true });
        $('#div_1000007').resizable({ disabled: true });
        $('#div_1000007').css({'border':'2px solid black'}); 
        $('#div_1000007').css({'cursor':'default'}); 
    }else{
        $('#div_1000007').draggable({ disabled: false });
        $('#div_1000007').resizable({ disabled: false });
        $('#div_1000007').css({'border':modifybordercolor});
        $('#div_1000007').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000007').draggable('disable');
            $('#div_1000007').resizable('disable');
            $('#div_1000007').css({'border':'2px solid black'});
        }else{
            $('#div_1000007').draggable('enable');
            $('#div_1000007').resizable('enable');
            $('#div_1000007').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000007_left') === null) {
        $('#div_1000007').css('left', left_1000007);
    } else {
        $('#div_1000007').css('left', localStorage.getItem('div_1000007_left'));
    }

    if (localStorage.getItem('div_1000007_top') === null) {
        $('#div_1000007').css('top', top_1000007);
    } else {
        $('#div_1000007').css('top', localStorage.getItem('div_1000007_top'));
    }

    if (localStorage.getItem('div_1000007_width') === null) {
        $('#div_1000007').css('width', machineswidth);
    } else {
        $('#div_1000007').css('width', localStorage.getItem('div_1000007_width'));
    }
    
    if (localStorage.getItem('div_1000007_height') === null) {
        $('#div_1000007').css('height', machinesheight);
    } else {
        $('#div_1000007').css('height', localStorage.getItem('div_1000007_height'));
    }

    $('#div_1000007').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000007_left', $(this).css('left'));
            localStorage.setItem('div_1000007_top', $(this).css('top'));
        }
    });
    
    $('#div_1000007').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000007_width', $(this).css('width'));
            localStorage.setItem('div_1000007_height', $(this).css('height'));
        }
    });

//***** M1000008 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000008').draggable({ disabled: true });
        $('#div_1000008').resizable({ disabled: true });
        $('#div_1000008').css({'border':'2px solid black'}); 
        $('#div_1000008').css({'cursor':'default'}); 
    }else{
        $('#div_1000008').draggable({ disabled: false });
        $('#div_1000008').resizable({ disabled: false });
        $('#div_1000008').css({'border':modifybordercolor});
        $('#div_1000008').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000008').draggable('disable');
            $('#div_1000008').resizable('disable');
            $('#div_1000008').css({'border':'2px solid black'});
        }else{
            $('#div_1000008').draggable('enable');
            $('#div_1000008').resizable('enable');
            $('#div_1000008').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000008_left') === null) {
        $('#div_1000008').css('left', left_1000008);
    } else {
        $('#div_1000008').css('left', localStorage.getItem('div_1000008_left'));
    }

    if (localStorage.getItem('div_1000008_top') === null) {
        $('#div_1000008').css('top', top_1000008);
    } else {
        $('#div_1000008').css('top', localStorage.getItem('div_1000008_top'));
    }

    if (localStorage.getItem('div_1000008_width') === null) {
        $('#div_1000008').css('width', machineswidth);
    } else {
        $('#div_1000008').css('width', localStorage.getItem('div_1000008_width'));
    }
    
    if (localStorage.getItem('div_1000008_height') === null) {
        $('#div_1000008').css('height', machinesheight);
    } else {
        $('#div_1000008').css('height', localStorage.getItem('div_1000008_height'));
    }

    $('#div_1000008').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000008_left', $(this).css('left'));
            localStorage.setItem('div_1000008_top', $(this).css('top'));
        }
    });
    
    $('#div_1000008').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000008_width', $(this).css('width'));
            localStorage.setItem('div_1000008_height', $(this).css('height'));
        }
    });

//***** M1000111 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000111').draggable({ disabled: true });
        $('#div_1000111').resizable({ disabled: true });
        $('#div_1000111').css({'border':'2px solid black'}); 
        $('#div_1000111').css({'cursor':'default'}); 
    }else{
        $('#div_1000111').draggable({ disabled: false });
        $('#div_1000111').resizable({ disabled: false });
        $('#div_1000111').css({'border':modifybordercolor});
        $('#div_1000111').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000111').draggable('disable');
            $('#div_1000111').resizable('disable');
            $('#div_1000111').css({'border':'2px solid black'});
        }else{
            $('#div_1000111').draggable('enable');
            $('#div_1000111').resizable('enable');
            $('#div_1000111').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000111_left') === null) {
        $('#div_1000111').css('left', left_1000111);
    } else {
        $('#div_1000111').css('left', localStorage.getItem('div_1000111_left'));
    }

    if (localStorage.getItem('div_1000111_top') === null) {
        $('#div_1000111').css('top', top_1000111);
    } else {
        $('#div_1000111').css('top', localStorage.getItem('div_1000111_top'));
    }

    if (localStorage.getItem('div_1000111_width') === null) {
        $('#div_1000111').css('width', machineswidth);
    } else {
        $('#div_1000111').css('width', localStorage.getItem('div_1000111_width'));
    }
    
    if (localStorage.getItem('div_1000111_height') === null) {
        $('#div_1000111').css('height', machinesheight);
    } else {
        $('#div_1000111').css('height', localStorage.getItem('div_1000111_height'));
    }

    $('#div_1000111').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000111_left', $(this).css('left'));
            localStorage.setItem('div_1000111_top', $(this).css('top'));
        }
    });
    
    $('#div_1000111').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000111_width', $(this).css('width'));
            localStorage.setItem('div_1000111_height', $(this).css('height'));
        }
    });

//***** M1000010 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000010').draggable({ disabled: true });
        $('#div_1000010').resizable({ disabled: true });
        $('#div_1000010').css({'border':'2px solid black'}); 
        $('#div_1000010').css({'cursor':'default'}); 
    }else{
        $('#div_1000010').draggable({ disabled: false });
        $('#div_1000010').resizable({ disabled: false });
        $('#div_1000010').css({'border':modifybordercolor});
        $('#div_1000010').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000010').draggable('disable');
            $('#div_1000010').resizable('disable');
            $('#div_1000010').css({'border':'2px solid black'});
        }else{
            $('#div_1000010').draggable('enable');
            $('#div_1000010').resizable('enable');
            $('#div_1000010').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000010_left') === null) {
        $('#div_1000010').css('left', left_1000010);
    } else {
        $('#div_1000010').css('left', localStorage.getItem('div_1000010_left'));
    }

    if (localStorage.getItem('div_1000010_top') === null) {
        $('#div_1000010').css('top', top_1000010);
    } else {
        $('#div_1000010').css('top', localStorage.getItem('div_1000010_top'));
    }

    if (localStorage.getItem('div_1000010_width') === null) {
        $('#div_1000010').css('width', machineswidth);
    } else {
        $('#div_1000010').css('width', localStorage.getItem('div_1000010_width'));
    }
    
    if (localStorage.getItem('div_1000010_height') === null) {
        $('#div_1000010').css('height', machinesheight);
    } else {
        $('#div_1000010').css('height', localStorage.getItem('div_1000010_height'));
    }

    $('#div_1000010').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000010_left', $(this).css('left'));
            localStorage.setItem('div_1000010_top', $(this).css('top'));
        }
    });
    
    $('#div_1000010').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000010_width', $(this).css('width'));
            localStorage.setItem('div_1000010_height', $(this).css('height'));
        }
    });

//***** M1000015 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000015').draggable({ disabled: true });
        $('#div_1000015').resizable({ disabled: true });
        $('#div_1000015').css({'border':'2px solid black'}); 
        $('#div_1000015').css({'cursor':'default'}); 
    }else{
        $('#div_1000015').draggable({ disabled: false });
        $('#div_1000015').resizable({ disabled: false });
        $('#div_1000015').css({'border':modifybordercolor});
        $('#div_1000015').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000015').draggable('disable');
            $('#div_1000015').resizable('disable');
            $('#div_1000015').css({'border':'2px solid black'});
        }else{
            $('#div_1000015').draggable('enable');
            $('#div_1000015').resizable('enable');
            $('#div_1000015').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000015_left') === null) {
        $('#div_1000015').css('left', left_1000015);
    } else {
        $('#div_1000015').css('left', localStorage.getItem('div_1000015_left'));
    }

    if (localStorage.getItem('div_1000015_top') === null) {
        $('#div_1000015').css('top', top_1000015);
    } else {
        $('#div_1000015').css('top', localStorage.getItem('div_1000015_top'));
    }

    if (localStorage.getItem('div_1000015_width') === null) {
        $('#div_1000015').css('width', machineswidth);
    } else {
        $('#div_1000015').css('width', localStorage.getItem('div_1000015_width'));
    }
    
    if (localStorage.getItem('div_1000015_height') === null) {
        $('#div_1000015').css('height', machinesheight);
    } else {
        $('#div_1000015').css('height', localStorage.getItem('div_1000015_height'));
    }

    $('#div_1000015').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000015_left', $(this).css('left'));
            localStorage.setItem('div_1000015_top', $(this).css('top'));
        }
    });
    
    $('#div_1000015').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000015_width', $(this).css('width'));
            localStorage.setItem('div_1000015_height', $(this).css('height'));
        }
    });
    
//***** M1000016 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000016').draggable({ disabled: true });
        $('#div_1000016').resizable({ disabled: true });
        $('#div_1000016').css({'border':'2px solid black'}); 
        $('#div_1000016').css({'cursor':'default'}); 
    }else{
        $('#div_1000016').draggable({ disabled: false });
        $('#div_1000016').resizable({ disabled: false });
        $('#div_1000016').css({'border':modifybordercolor});
        $('#div_1000016').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000016').draggable('disable');
            $('#div_1000016').resizable('disable');
            $('#div_1000016').css({'border':'2px solid black'});
        }else{
            $('#div_1000016').draggable('enable');
            $('#div_1000016').resizable('enable');
            $('#div_1000016').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000016_left') === null) {
        $('#div_1000016').css('left', left_1000016);
    } else {
        $('#div_1000016').css('left', localStorage.getItem('div_1000016_left'));
    }

    if (localStorage.getItem('div_1000016_top') === null) {
        $('#div_1000016').css('top', top_1000016);
    } else {
        $('#div_1000016').css('top', localStorage.getItem('div_1000016_top'));
    }

    if (localStorage.getItem('div_1000016_width') === null) {
        $('#div_1000016').css('width', machineswidth);
    } else {
        $('#div_1000016').css('width', localStorage.getItem('div_1000016_width'));
    }
    
    if (localStorage.getItem('div_1000016_height') === null) {
        $('#div_1000016').css('height', machinesheight);
    } else {
        $('#div_1000016').css('height', localStorage.getItem('div_1000016_height'));
    }

    $('#div_1000016').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000016_left', $(this).css('left'));
            localStorage.setItem('div_1000016_top', $(this).css('top'));
        }
    });
    
    $('#div_1000016').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000016_width', $(this).css('width'));
            localStorage.setItem('div_1000016_height', $(this).css('height'));
        }
    });
    
//***** M1000017 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000017').draggable({ disabled: true });
        $('#div_1000017').resizable({ disabled: true });
        $('#div_1000017').css({'border':'2px solid black'}); 
        $('#div_1000017').css({'cursor':'default'}); 
    }else{
        $('#div_1000017').draggable({ disabled: false });
        $('#div_1000017').resizable({ disabled: false });
        $('#div_1000017').css({'border':modifybordercolor});
        $('#div_1000017').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000017').draggable('disable');
            $('#div_1000017').resizable('disable');
            $('#div_1000017').css({'border':'2px solid black'});
        }else{
            $('#div_1000017').draggable('enable');
            $('#div_1000017').resizable('enable');
            $('#div_1000017').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000017_left') === null) {
        $('#div_1000017').css('left', left_1000017);
    } else {
        $('#div_1000017').css('left', localStorage.getItem('div_1000017_left'));
    }

    if (localStorage.getItem('div_1000017_top') === null) {
        $('#div_1000017').css('top', top_1000017);
    } else {
        $('#div_1000017').css('top', localStorage.getItem('div_1000017_top'));
    }

    if (localStorage.getItem('div_1000017_width') === null) {
        $('#div_1000017').css('width', machineswidth);
    } else {
        $('#div_1000017').css('width', localStorage.getItem('div_1000017_width'));
    }
    
    if (localStorage.getItem('div_1000017_height') === null) {
        $('#div_1000017').css('height', machinesheight);
    } else {
        $('#div_1000017').css('height', localStorage.getItem('div_1000017_height'));
    }

    $('#div_1000017').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000017_left', $(this).css('left'));
            localStorage.setItem('div_1000017_top', $(this).css('top'));
        }
    });
    
    $('#div_1000017').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000017_width', $(this).css('width'));
            localStorage.setItem('div_1000017_height', $(this).css('height'));
        }
    });
    
//***** M1000019 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000019').draggable({ disabled: true });
        $('#div_1000019').resizable({ disabled: true });
        $('#div_1000019').css({'border':'2px solid black'}); 
        $('#div_1000019').css({'cursor':'default'}); 
    }else{
        $('#div_1000019').draggable({ disabled: false });
        $('#div_1000019').resizable({ disabled: false });
        $('#div_1000019').css({'border':modifybordercolor});
        $('#div_1000019').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000019').draggable('disable');
            $('#div_1000019').resizable('disable');
            $('#div_1000019').css({'border':'2px solid black'});
        }else{
            $('#div_1000019').draggable('enable');
            $('#div_1000019').resizable('enable');
            $('#div_1000019').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000019_left') === null) {
        $('#div_1000019').css('left', left_1000019);
    } else {
        $('#div_1000019').css('left', localStorage.getItem('div_1000019_left'));
    }

    if (localStorage.getItem('div_1000019_top') === null) {
        $('#div_1000019').css('top', top_1000019);
    } else {
        $('#div_1000019').css('top', localStorage.getItem('div_1000019_top'));
    }

    if (localStorage.getItem('div_1000019_width') === null) {
        $('#div_1000019').css('width', machineswidth);
    } else {
        $('#div_1000019').css('width', localStorage.getItem('div_1000019_width'));
    }
    
    if (localStorage.getItem('div_1000019_height') === null) {
        $('#div_1000019').css('height', machinesheight);
    } else {
        $('#div_1000019').css('height', localStorage.getItem('div_1000019_height'));
    }

    $('#div_1000019').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000019_left', $(this).css('left'));
            localStorage.setItem('div_1000019_top', $(this).css('top'));
        }
    });
    
    $('#div_1000019').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000019_width', $(this).css('width'));
            localStorage.setItem('div_1000019_height', $(this).css('height'));
        }
    });

//***** M1000020 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000020').draggable({ disabled: true });
        $('#div_1000020').resizable({ disabled: true });
        $('#div_1000020').css({'border':'2px solid black'}); 
        $('#div_1000020').css({'cursor':'default'}); 
    }else{
        $('#div_1000020').draggable({ disabled: false });
        $('#div_1000020').resizable({ disabled: false });
        $('#div_1000020').css({'border':modifybordercolor});
        $('#div_1000020').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000020').draggable('disable');
            $('#div_1000020').resizable('disable');
            $('#div_1000020').css({'border':'2px solid black'});
        }else{
            $('#div_1000020').draggable('enable');
            $('#div_1000020').resizable('enable');
            $('#div_1000020').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000020_left') === null) {
        $('#div_1000020').css('left', left_1000020);
    } else {
        $('#div_1000020').css('left', localStorage.getItem('div_1000020_left'));
    }

    if (localStorage.getItem('div_1000020_top') === null) {
        $('#div_1000020').css('top', top_1000020);
    } else {
        $('#div_1000020').css('top', localStorage.getItem('div_1000020_top'));
    }

    if (localStorage.getItem('div_1000020_width') === null) {
        $('#div_1000020').css('width', machineswidth);
    } else {
        $('#div_1000020').css('width', localStorage.getItem('div_1000020_width'));
    }
    
    if (localStorage.getItem('div_1000020_height') === null) {
        $('#div_1000020').css('height', machinesheight);
    } else {
        $('#div_1000020').css('height', localStorage.getItem('div_1000020_height'));
    }

    $('#div_1000020').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000020_left', $(this).css('left'));
            localStorage.setItem('div_1000020_top', $(this).css('top'));
        }
    });
    
    $('#div_1000020').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000020_width', $(this).css('width'));
            localStorage.setItem('div_1000020_height', $(this).css('height'));
        }
    });
    
//***** M1000022 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000022').draggable({ disabled: true });
        $('#div_1000022').resizable({ disabled: true });
        $('#div_1000022').css({'border':'2px solid black'}); 
        $('#div_1000022').css({'cursor':'default'}); 
    }else{
        $('#div_1000022').draggable({ disabled: false });
        $('#div_1000022').resizable({ disabled: false });
        $('#div_1000022').css({'border':modifybordercolor});
        $('#div_1000022').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000022').draggable('disable');
            $('#div_1000022').resizable('disable');
            $('#div_1000022').css({'border':'2px solid black'});
        }else{
            $('#div_1000022').draggable('enable');
            $('#div_1000022').resizable('enable');
            $('#div_1000022').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000022_left') === null) {
        $('#div_1000022').css('left', left_1000022);
    } else {
        $('#div_1000022').css('left', localStorage.getItem('div_1000022_left'));
    }

    if (localStorage.getItem('div_1000022_top') === null) {
        $('#div_1000022').css('top', top_1000022);
    } else {
        $('#div_1000022').css('top', localStorage.getItem('div_1000022_top'));
    }

    if (localStorage.getItem('div_1000022_width') === null) {
        $('#div_1000022').css('width', machineswidth);
    } else {
        $('#div_1000022').css('width', localStorage.getItem('div_1000022_width'));
    }
    
    if (localStorage.getItem('div_1000022_height') === null) {
        $('#div_1000022').css('height', machinesheight);
    } else {
        $('#div_1000022').css('height', localStorage.getItem('div_1000022_height'));
    }

    $('#div_1000022').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000022_left', $(this).css('left'));
            localStorage.setItem('div_1000022_top', $(this).css('top'));
        }
    });
    
    $('#div_1000022').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000022_width', $(this).css('width'));
            localStorage.setItem('div_1000022_height', $(this).css('height'));
        }
    });

//***** M1000028 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000028').draggable({ disabled: true });
        $('#div_1000028').resizable({ disabled: true });
        $('#div_1000028').css({'border':'2px solid black'}); 
        $('#div_1000028').css({'cursor':'default'}); 
    }else{
        $('#div_1000028').draggable({ disabled: false });
        $('#div_1000028').resizable({ disabled: false });
        $('#div_1000028').css({'border':modifybordercolor});
        $('#div_1000028').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000028').draggable('disable');
            $('#div_1000028').resizable('disable');
            $('#div_1000028').css({'border':'2px solid black'});
        }else{
            $('#div_1000028').draggable('enable');
            $('#div_1000028').resizable('enable');
            $('#div_1000028').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000028_left') === null) {
        $('#div_1000028').css('left', left_1000028);
    } else {
        $('#div_1000028').css('left', localStorage.getItem('div_1000028_left'));
    }

    if (localStorage.getItem('div_1000028_top') === null) {
        $('#div_1000028').css('top', top_1000028);
    } else {
        $('#div_1000028').css('top', localStorage.getItem('div_1000028_top'));
    }

    if (localStorage.getItem('div_1000028_width') === null) {
        $('#div_1000028').css('width', machineswidth);
    } else {
        $('#div_1000028').css('width', localStorage.getItem('div_1000028_width'));
    }
    
    if (localStorage.getItem('div_1000028_height') === null) {
        $('#div_1000028').css('height', machinesheight);
    } else {
        $('#div_1000028').css('height', localStorage.getItem('div_1000028_height'));
    }

    $('#div_1000028').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000028_left', $(this).css('left'));
            localStorage.setItem('div_1000028_top', $(this).css('top'));
        }
    });
    
    $('#div_1000028').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000028_width', $(this).css('width'));
            localStorage.setItem('div_1000028_height', $(this).css('height'));
        }
    });

//***** M1000031 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000031').draggable({ disabled: true });
        $('#div_1000031').resizable({ disabled: true });
        $('#div_1000031').css({'border':'2px solid black'}); 
        $('#div_1000031').css({'cursor':'default'}); 
    }else{
        $('#div_1000031').draggable({ disabled: false });
        $('#div_1000031').resizable({ disabled: false });
        $('#div_1000031').css({'border':modifybordercolor});
        $('#div_1000031').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000031').draggable('disable');
            $('#div_1000031').resizable('disable');
            $('#div_1000031').css({'border':'2px solid black'});
        }else{
            $('#div_1000031').draggable('enable');
            $('#div_1000031').resizable('enable');
            $('#div_1000031').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000031_left') === null) {
        $('#div_1000031').css('left', left_1000031);
    } else {
        $('#div_1000031').css('left', localStorage.getItem('div_1000031_left'));
    }

    if (localStorage.getItem('div_1000031_top') === null) {
        $('#div_1000031').css('top', top_1000031);
    } else {
        $('#div_1000031').css('top', localStorage.getItem('div_1000031_top'));
    }

    if (localStorage.getItem('div_1000031_width') === null) {
        $('#div_1000031').css('width', machineswidth);
    } else {
        $('#div_1000031').css('width', localStorage.getItem('div_1000031_width'));
    }
    
    if (localStorage.getItem('div_1000031_height') === null) {
        $('#div_1000031').css('height', machinesheight);
    } else {
        $('#div_1000031').css('height', localStorage.getItem('div_1000031_height'));
    }

    $('#div_1000031').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000031_left', $(this).css('left'));
            localStorage.setItem('div_1000031_top', $(this).css('top'));
        }
    });
    
    $('#div_1000031').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000031_width', $(this).css('width'));
            localStorage.setItem('div_1000031_height', $(this).css('height'));
        }
    });
    
//***** M1000032 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000032').draggable({ disabled: true });
        $('#div_1000032').resizable({ disabled: true });
        $('#div_1000032').css({'border':'2px solid black'}); 
        $('#div_1000032').css({'cursor':'default'}); 
    }else{
        $('#div_1000032').draggable({ disabled: false });
        $('#div_1000032').resizable({ disabled: false });
        $('#div_1000032').css({'border':modifybordercolor});
        $('#div_1000032').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000032').draggable('disable');
            $('#div_1000032').resizable('disable');
            $('#div_1000032').css({'border':'2px solid black'});
        }else{
            $('#div_1000032').draggable('enable');
            $('#div_1000032').resizable('enable');
            $('#div_1000032').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000032_left') === null) {
        $('#div_1000032').css('left', left_1000032);
    } else {
        $('#div_1000032').css('left', localStorage.getItem('div_1000032_left'));
    }

    if (localStorage.getItem('div_1000032_top') === null) {
        $('#div_1000032').css('top', top_1000032);
    } else {
        $('#div_1000032').css('top', localStorage.getItem('div_1000032_top'));
    }

    if (localStorage.getItem('div_1000032_width') === null) {
        $('#div_1000032').css('width', machineswidth);
    } else {
        $('#div_1000032').css('width', localStorage.getItem('div_1000032_width'));
    }
    
    if (localStorage.getItem('div_1000032_height') === null) {
        $('#div_1000032').css('height', machinesheight);
    } else {
        $('#div_1000032').css('height', localStorage.getItem('div_1000032_height'));
    }

    $('#div_1000032').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000032_left', $(this).css('left'));
            localStorage.setItem('div_1000032_top', $(this).css('top'));
        }
    });
    
    $('#div_1000032').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000032_width', $(this).css('width'));
            localStorage.setItem('div_1000032_height', $(this).css('height'));
        }
    });

//***** M1000033 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000033').draggable({ disabled: true });
        $('#div_1000033').resizable({ disabled: true });
        $('#div_1000033').css({'border':'2px solid black'}); 
        $('#div_1000033').css({'cursor':'default'}); 
    }else{
        $('#div_1000033').draggable({ disabled: false });
        $('#div_1000033').resizable({ disabled: false });
        $('#div_1000033').css({'border':modifybordercolor});
        $('#div_1000033').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000033').draggable('disable');
            $('#div_1000033').resizable('disable');
            $('#div_1000033').css({'border':'2px solid black'});
        }else{
            $('#div_1000033').draggable('enable');
            $('#div_1000033').resizable('enable');
            $('#div_1000033').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000033_left') === null) {
        $('#div_1000033').css('left', left_1000033);
    } else {
        $('#div_1000033').css('left', localStorage.getItem('div_1000033_left'));
    }

    if (localStorage.getItem('div_1000033_top') === null) {
        $('#div_1000033').css('top', top_1000033);
    } else {
        $('#div_1000033').css('top', localStorage.getItem('div_1000033_top'));
    }

    if (localStorage.getItem('div_1000033_width') === null) {
        $('#div_1000033').css('width', machineswidth);
    } else {
        $('#div_1000033').css('width', localStorage.getItem('div_1000033_width'));
    }
    
    if (localStorage.getItem('div_1000033_height') === null) {
        $('#div_1000033').css('height', machinesheight);
    } else {
        $('#div_1000033').css('height', localStorage.getItem('div_1000033_height'));
    }

    $('#div_1000033').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000033_left', $(this).css('left'));
            localStorage.setItem('div_1000033_top', $(this).css('top'));
        }
    });
    
    $('#div_1000033').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000033_width', $(this).css('width'));
            localStorage.setItem('div_1000033_height', $(this).css('height'));
        }
    });

//***** M1000034 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000034').draggable({ disabled: true });
        $('#div_1000034').resizable({ disabled: true });
        $('#div_1000034').css({'border':'2px solid black'}); 
        $('#div_1000034').css({'cursor':'default'}); 
    }else{
        $('#div_1000034').draggable({ disabled: false });
        $('#div_1000034').resizable({ disabled: false });
        $('#div_1000034').css({'border':modifybordercolor});
        $('#div_1000034').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000034').draggable('disable');
            $('#div_1000034').resizable('disable');
            $('#div_1000034').css({'border':'2px solid black'});
        }else{
            $('#div_1000034').draggable('enable');
            $('#div_1000034').resizable('enable');
            $('#div_1000034').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000034_left') === null) {
        $('#div_1000034').css('left', left_1000034);
    } else {
        $('#div_1000034').css('left', localStorage.getItem('div_1000034_left'));
    }

    if (localStorage.getItem('div_1000034_top') === null) {
        $('#div_1000034').css('top', top_1000034);
    } else {
        $('#div_1000034').css('top', localStorage.getItem('div_1000034_top'));
    }

    if (localStorage.getItem('div_1000034_width') === null) {
        $('#div_1000034').css('width', machineswidth);
    } else {
        $('#div_1000034').css('width', localStorage.getItem('div_1000034_width'));
    }
    
    if (localStorage.getItem('div_1000034_height') === null) {
        $('#div_1000034').css('height', machinesheight);
    } else {
        $('#div_1000034').css('height', localStorage.getItem('div_1000034_height'));
    }

    $('#div_1000034').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000034_left', $(this).css('left'));
            localStorage.setItem('div_1000034_top', $(this).css('top'));
        }
    });
    
    $('#div_1000034').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000034_width', $(this).css('width'));
            localStorage.setItem('div_1000034_height', $(this).css('height'));
        }
    });

//***** M1000035 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000035').draggable({ disabled: true });
        $('#div_1000035').resizable({ disabled: true });
        $('#div_1000035').css({'border':'2px solid black'}); 
        $('#div_1000035').css({'cursor':'default'}); 
    }else{
        $('#div_1000035').draggable({ disabled: false });
        $('#div_1000035').resizable({ disabled: false });
        $('#div_1000035').css({'border':modifybordercolor});
        $('#div_1000035').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000035').draggable('disable');
            $('#div_1000035').resizable('disable');
            $('#div_1000035').css({'border':'2px solid black'});
        }else{
            $('#div_1000035').draggable('enable');
            $('#div_1000035').resizable('enable');
            $('#div_1000035').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000035_left') === null) {
        $('#div_1000035').css('left', left_1000035);
    } else {
        $('#div_1000035').css('left', localStorage.getItem('div_1000035_left'));
    }

    if (localStorage.getItem('div_1000035_top') === null) {
        $('#div_1000035').css('top', top_1000035);
    } else {
        $('#div_1000035').css('top', localStorage.getItem('div_1000035_top'));
    }

    if (localStorage.getItem('div_1000035_width') === null) {
        $('#div_1000035').css('width', machineswidth);
    } else {
        $('#div_1000035').css('width', localStorage.getItem('div_1000035_width'));
    }
    
    if (localStorage.getItem('div_1000035_height') === null) {
        $('#div_1000035').css('height', machinesheight);
    } else {
        $('#div_1000035').css('height', localStorage.getItem('div_1000035_height'));
    }

    $('#div_1000035').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000035_left', $(this).css('left'));
            localStorage.setItem('div_1000035_top', $(this).css('top'));
        }
    });
    
    $('#div_1000035').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000035_width', $(this).css('width'));
            localStorage.setItem('div_1000035_height', $(this).css('height'));
        }
    });

//***** M1000037 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000037').draggable({ disabled: true });
        $('#div_1000037').resizable({ disabled: true });
        $('#div_1000037').css({'border':'2px solid black'}); 
        $('#div_1000037').css({'cursor':'default'}); 
    }else{
        $('#div_1000037').draggable({ disabled: false });
        $('#div_1000037').resizable({ disabled: false });
        $('#div_1000037').css({'border':modifybordercolor});
        $('#div_1000037').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000037').draggable('disable');
            $('#div_1000037').resizable('disable');
            $('#div_1000037').css({'border':'2px solid black'});
        }else{
            $('#div_1000037').draggable('enable');
            $('#div_1000037').resizable('enable');
            $('#div_1000037').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000037_left') === null) {
        $('#div_1000037').css('left', left_1000037);
    } else {
        $('#div_1000037').css('left', localStorage.getItem('div_1000037_left'));
    }

    if (localStorage.getItem('div_1000037_top') === null) {
        $('#div_1000037').css('top', top_1000037);
    } else {
        $('#div_1000037').css('top', localStorage.getItem('div_1000037_top'));
    }

    if (localStorage.getItem('div_1000037_width') === null) {
        $('#div_1000037').css('width', machineswidth);
    } else {
        $('#div_1000037').css('width', localStorage.getItem('div_1000037_width'));
    }
    
    if (localStorage.getItem('div_1000037_height') === null) {
        $('#div_1000037').css('height', machinesheight);
    } else {
        $('#div_1000037').css('height', localStorage.getItem('div_1000037_height'));
    }

    $('#div_1000037').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000037_left', $(this).css('left'));
            localStorage.setItem('div_1000037_top', $(this).css('top'));
        }
    });
    
    $('#div_1000037').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000037_width', $(this).css('width'));
            localStorage.setItem('div_1000037_height', $(this).css('height'));
        }
    });

//***** M1000038 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000038').draggable({ disabled: true });
        $('#div_1000038').resizable({ disabled: true });
        $('#div_1000038').css({'border':'2px solid black'}); 
        $('#div_1000038').css({'cursor':'default'}); 
    }else{
        $('#div_1000038').draggable({ disabled: false });
        $('#div_1000038').resizable({ disabled: false });
        $('#div_1000038').css({'border':modifybordercolor});
        $('#div_1000038').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000038').draggable('disable');
            $('#div_1000038').resizable('disable');
            $('#div_1000038').css({'border':'2px solid black'});
        }else{
            $('#div_1000038').draggable('enable');
            $('#div_1000038').resizable('enable');
            $('#div_1000038').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000038_left') === null) {
        $('#div_1000038').css('left', left_1000038);
    } else {
        $('#div_1000038').css('left', localStorage.getItem('div_1000038_left'));
    }

    if (localStorage.getItem('div_1000038_top') === null) {
        $('#div_1000038').css('top', top_1000038);
    } else {
        $('#div_1000038').css('top', localStorage.getItem('div_1000038_top'));
    }

    if (localStorage.getItem('div_1000038_width') === null) {
        $('#div_1000038').css('width', machineswidth);
    } else {
        $('#div_1000038').css('width', localStorage.getItem('div_1000038_width'));
    }
    
    if (localStorage.getItem('div_1000038_height') === null) {
        $('#div_1000038').css('height', machinesheight);
    } else {
        $('#div_1000038').css('height', localStorage.getItem('div_1000038_height'));
    }

    $('#div_1000038').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000038_left', $(this).css('left'));
            localStorage.setItem('div_1000038_top', $(this).css('top'));
        }
    });
    
    $('#div_1000038').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000038_width', $(this).css('width'));
            localStorage.setItem('div_1000038_height', $(this).css('height'));
        }
    });

//***** M1000039 *****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000039').draggable({ disabled: true });
        $('#div_1000039').resizable({ disabled: true });
        $('#div_1000039').css({'border':'2px solid black'}); 
        $('#div_1000039').css({'cursor':'default'}); 
    }else{
        $('#div_1000039').draggable({ disabled: false });
        $('#div_1000039').resizable({ disabled: false });
        $('#div_1000039').css({'border':modifybordercolor});
        $('#div_1000039').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000039').draggable('disable');
            $('#div_1000039').resizable('disable');
            $('#div_1000039').css({'border':'2px solid black'});
        }else{
            $('#div_1000039').draggable('enable');
            $('#div_1000039').resizable('enable');
            $('#div_1000039').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000039_left') === null) {
        $('#div_1000039').css('left', left_1000039);
    } else {
        $('#div_1000039').css('left', localStorage.getItem('div_1000039_left'));
    }

    if (localStorage.getItem('div_1000039_top') === null) {
        $('#div_1000039').css('top', top_1000039);
    } else {
        $('#div_1000039').css('top', localStorage.getItem('div_1000039_top'));
    }

    if (localStorage.getItem('div_1000039_width') === null) {
        $('#div_1000039').css('width', machineswidth);
    } else {
        $('#div_1000039').css('width', localStorage.getItem('div_1000039_width'));
    }
    
    if (localStorage.getItem('div_1000039_height') === null) {
        $('#div_1000039').css('height', machinesheight);
    } else {
        $('#div_1000039').css('height', localStorage.getItem('div_1000039_height'));
    }

    $('#div_1000039').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000039_left', $(this).css('left'));
            localStorage.setItem('div_1000039_top', $(this).css('top'));
        }
    });
    
    $('#div_1000039').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000039_width', $(this).css('width'));
            localStorage.setItem('div_1000039_height', $(this).css('height'));
        }
    });

//***** M1000041 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000041').draggable({ disabled: true });
        $('#div_1000041').resizable({ disabled: true });
        $('#div_1000041').css({'border':'2px solid black'}); 
        $('#div_1000041').css({'cursor':'default'}); 
    }else{
        $('#div_1000041').draggable({ disabled: false });
        $('#div_1000041').resizable({ disabled: false });
        $('#div_1000041').css({'border':modifybordercolor});
        $('#div_1000041').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000041').draggable('disable');
            $('#div_1000041').resizable('disable');
            $('#div_1000041').css({'border':'2px solid black'});
        }else{
            $('#div_1000041').draggable('enable');
            $('#div_1000041').resizable('enable');
            $('#div_1000041').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000041_left') === null) {
        $('#div_1000041').css('left', left_1000041);
    } else {
        $('#div_1000041').css('left', localStorage.getItem('div_1000041_left'));
    }

    if (localStorage.getItem('div_1000041_top') === null) {
        $('#div_1000041').css('top', top_1000041);
    } else {
        $('#div_1000041').css('top', localStorage.getItem('div_1000041_top'));
    }

    if (localStorage.getItem('div_1000041_width') === null) {
        $('#div_1000041').css('width', machineswidth);
    } else {
        $('#div_1000041').css('width', localStorage.getItem('div_1000041_width'));
    }
    
    if (localStorage.getItem('div_1000041_height') === null) {
        $('#div_1000041').css('height', machinesheight);
    } else {
        $('#div_1000041').css('height', localStorage.getItem('div_1000041_height'));
    }

    $('#div_1000041').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000041_left', $(this).css('left'));
            localStorage.setItem('div_1000041_top', $(this).css('top'));
        }
    });
    
    $('#div_1000041').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000041_width', $(this).css('width'));
            localStorage.setItem('div_1000041_height', $(this).css('height'));
        }
    });

//***** M1000045 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000045').draggable({ disabled: true });
        $('#div_1000045').resizable({ disabled: true });
        $('#div_1000045').css({'border':'2px solid black'}); 
        $('#div_1000045').css({'cursor':'default'}); 
    }else{
        $('#div_1000045').draggable({ disabled: false });
        $('#div_1000045').resizable({ disabled: false });
        $('#div_1000045').css({'border':modifybordercolor});
        $('#div_1000045').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000045').draggable('disable');
            $('#div_1000045').resizable('disable');
            $('#div_1000045').css({'border':'2px solid black'});
        }else{
            $('#div_1000045').draggable('enable');
            $('#div_1000045').resizable('enable');
            $('#div_1000045').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000045_left') === null) {
        $('#div_1000045').css('left', left_1000045);
    } else {
        $('#div_1000045').css('left', localStorage.getItem('div_1000045_left'));
    }

    if (localStorage.getItem('div_1000045_top') === null) {
        $('#div_1000045').css('top', top_1000045);
    } else {
        $('#div_1000045').css('top', localStorage.getItem('div_1000045_top'));
    }

    if (localStorage.getItem('div_1000045_width') === null) {
        $('#div_1000045').css('width', machineswidth);
    } else {
        $('#div_1000045').css('width', localStorage.getItem('div_1000045_width'));
    }
    
    if (localStorage.getItem('div_1000045_height') === null) {
        $('#div_1000045').css('height', machinesheight);
    } else {
        $('#div_1000045').css('height', localStorage.getItem('div_1000045_height'));
    }

    $('#div_1000045').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000045_left', $(this).css('left'));
            localStorage.setItem('div_1000045_top', $(this).css('top'));
        }
    });
    
    $('#div_1000045').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000045_width', $(this).css('width'));
            localStorage.setItem('div_1000045_height', $(this).css('height'));
        }
    });

//***** M1000047 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000047').draggable({ disabled: true });
        $('#div_1000047').resizable({ disabled: true });
        $('#div_1000047').css({'border':'2px solid black'}); 
        $('#div_1000047').css({'cursor':'default'}); 
    }else{
        $('#div_1000047').draggable({ disabled: false });
        $('#div_1000047').resizable({ disabled: false });
        $('#div_1000047').css({'border':modifybordercolor});
        $('#div_1000047').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000047').draggable('disable');
            $('#div_1000047').resizable('disable');
            $('#div_1000047').css({'border':'2px solid black'});
        }else{
            $('#div_1000047').draggable('enable');
            $('#div_1000047').resizable('enable');
            $('#div_1000047').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000047_left') === null) {
        $('#div_1000047').css('left', left_1000047);
    } else {
        $('#div_1000047').css('left', localStorage.getItem('div_1000047_left'));
    }

    if (localStorage.getItem('div_1000047_top') === null) {
        $('#div_1000047').css('top', top_1000047);
    } else {
        $('#div_1000047').css('top', localStorage.getItem('div_1000047_top'));
    }

    if (localStorage.getItem('div_1000047_width') === null) {
        $('#div_1000047').css('width', machineswidth);
    } else {
        $('#div_1000047').css('width', localStorage.getItem('div_1000047_width'));
    }
    
    if (localStorage.getItem('div_1000047_height') === null) {
        $('#div_1000047').css('height', machinesheight);
    } else {
        $('#div_1000047').css('height', localStorage.getItem('div_1000047_height'));
    }

    $('#div_1000047').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000047_left', $(this).css('left'));
            localStorage.setItem('div_1000047_top', $(this).css('top'));
        }
    });
    
    $('#div_1000047').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000047_width', $(this).css('width'));
            localStorage.setItem('div_1000047_height', $(this).css('height'));
        }
    });

//***** M1000053 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000053').draggable({ disabled: true });
        $('#div_1000053').resizable({ disabled: true });
        $('#div_1000053').css({'border':'2px solid black'}); 
        $('#div_1000053').css({'cursor':'default'}); 
    }else{
        $('#div_1000053').draggable({ disabled: false });
        $('#div_1000053').resizable({ disabled: false });
        $('#div_1000053').css({'border':modifybordercolor});
        $('#div_1000053').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000053').draggable('disable');
            $('#div_1000053').resizable('disable');
            $('#div_1000053').css({'border':'2px solid black'});
        }else{
            $('#div_1000053').draggable('enable');
            $('#div_1000053').resizable('enable');
            $('#div_1000053').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000053_left') === null) {
        $('#div_1000053').css('left', left_1000053);
    } else {
        $('#div_1000053').css('left', localStorage.getItem('div_1000053_left'));
    }

    if (localStorage.getItem('div_1000053_top') === null) {
        $('#div_1000053').css('top', top_1000053);
    } else {
        $('#div_1000053').css('top', localStorage.getItem('div_1000053_top'));
    }

    if (localStorage.getItem('div_1000053_width') === null) {
        $('#div_1000053').css('width', machineswidth);
    } else {
        $('#div_1000053').css('width', localStorage.getItem('div_1000053_width'));
    }
    
    if (localStorage.getItem('div_1000053_height') === null) {
        $('#div_1000053').css('height', machinesheight);
    } else {
        $('#div_1000053').css('height', localStorage.getItem('div_1000053_height'));
    }

    $('#div_1000053').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000053_left', $(this).css('left'));
            localStorage.setItem('div_1000053_top', $(this).css('top'));
        }
    });
    
    $('#div_1000053').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000053_width', $(this).css('width'));
            localStorage.setItem('div_1000053_height', $(this).css('height'));
        }
    });

//***** M1000054 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000054').draggable({ disabled: true });
        $('#div_1000054').resizable({ disabled: true });
        $('#div_1000054').css({'border':'2px solid black'}); 
        $('#div_1000054').css({'cursor':'default'}); 
    }else{
        $('#div_1000054').draggable({ disabled: false });
        $('#div_1000054').resizable({ disabled: false });
        $('#div_1000054').css({'border':modifybordercolor});
        $('#div_1000054').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000054').draggable('disable');
            $('#div_1000054').resizable('disable');
            $('#div_1000054').css({'border':'2px solid black'});
        }else{
            $('#div_1000054').draggable('enable');
            $('#div_1000054').resizable('enable');
            $('#div_1000054').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000054_left') === null) {
        $('#div_1000054').css('left', left_1000054);
    } else {
        $('#div_1000054').css('left', localStorage.getItem('div_1000054_left'));
    }

    if (localStorage.getItem('div_1000054_top') === null) {
        $('#div_1000054').css('top', top_1000054);
    } else {
        $('#div_1000054').css('top', localStorage.getItem('div_1000054_top'));
    }

    if (localStorage.getItem('div_1000054_width') === null) {
        $('#div_1000054').css('width', machineswidth);
    } else {
        $('#div_1000054').css('width', localStorage.getItem('div_1000054_width'));
    }
    
    if (localStorage.getItem('div_1000054_height') === null) {
        $('#div_1000054').css('height', machinesheight);
    } else {
        $('#div_1000054').css('height', localStorage.getItem('div_1000054_height'));
    }

    $('#div_1000054').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000054_left', $(this).css('left'));
            localStorage.setItem('div_1000054_top', $(this).css('top'));
        }
    });
    
    $('#div_1000054').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000054_width', $(this).css('width'));
            localStorage.setItem('div_1000054_height', $(this).css('height'));
        }
    });
    
//***** M1000057 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000057').draggable({ disabled: true });
        $('#div_1000057').resizable({ disabled: true });
        $('#div_1000057').css({'border':'2px solid black'}); 
        $('#div_1000057').css({'cursor':'default'}); 
    }else{
        $('#div_1000057').draggable({ disabled: false });
        $('#div_1000057').resizable({ disabled: false });
        $('#div_1000057').css({'border':modifybordercolor});
        $('#div_1000057').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000057').draggable('disable');
            $('#div_1000057').resizable('disable');
            $('#div_1000057').css({'border':'2px solid black'});
        }else{
            $('#div_1000057').draggable('enable');
            $('#div_1000057').resizable('enable');
            $('#div_1000057').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000057_left') === null) {
        $('#div_1000057').css('left', left_1000057);
    } else {
        $('#div_1000057').css('left', localStorage.getItem('div_1000057_left'));
    }

    if (localStorage.getItem('div_1000057_top') === null) {
        $('#div_1000057').css('top', top_1000057);
    } else {
        $('#div_1000057').css('top', localStorage.getItem('div_1000057_top'));
    }

    if (localStorage.getItem('div_1000057_width') === null) {
        $('#div_1000057').css('width', machineswidth);
    } else {
        $('#div_1000057').css('width', localStorage.getItem('div_1000057_width'));
    }
    
    if (localStorage.getItem('div_1000057_height') === null) {
        $('#div_1000057').css('height', machinesheight);
    } else {
        $('#div_1000057').css('height', localStorage.getItem('div_1000057_height'));
    }

    $('#div_1000057').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000057_left', $(this).css('left'));
            localStorage.setItem('div_1000057_top', $(this).css('top'));
        }
    });
    
    $('#div_1000057').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000057_width', $(this).css('width'));
            localStorage.setItem('div_1000057_height', $(this).css('height'));
        }
    });
    
//***** M1000059 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000059').draggable({ disabled: true });
        $('#div_1000059').resizable({ disabled: true });
        $('#div_1000059').css({'border':'2px solid black'}); 
        $('#div_1000059').css({'cursor':'default'}); 
    }else{
        $('#div_1000059').draggable({ disabled: false });
        $('#div_1000059').resizable({ disabled: false });
        $('#div_1000059').css({'border':modifybordercolor});
        $('#div_1000059').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000059').draggable('disable');
            $('#div_1000059').resizable('disable');
            $('#div_1000059').css({'border':'2px solid black'});
        }else{
            $('#div_1000059').draggable('enable');
            $('#div_1000059').resizable('enable');
            $('#div_1000059').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000059_left') === null) {
        $('#div_1000059').css('left', left_1000059);
    } else {
        $('#div_1000059').css('left', localStorage.getItem('div_1000059_left'));
    }

    if (localStorage.getItem('div_1000059_top') === null) {
        $('#div_1000059').css('top', top_1000059);
    } else {
        $('#div_1000059').css('top', localStorage.getItem('div_1000059_top'));
    }

    if (localStorage.getItem('div_1000059_width') === null) {
        $('#div_1000059').css('width', machineswidth);
    } else {
        $('#div_1000059').css('width', localStorage.getItem('div_1000059_width'));
    }
    
    if (localStorage.getItem('div_1000059_height') === null) {
        $('#div_1000059').css('height', machinesheight);
    } else {
        $('#div_1000059').css('height', localStorage.getItem('div_1000059_height'));
    }

    $('#div_1000059').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000059_left', $(this).css('left'));
            localStorage.setItem('div_1000059_top', $(this).css('top'));
        }
    });
    
    $('#div_1000059').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000059_width', $(this).css('width'));
            localStorage.setItem('div_1000059_height', $(this).css('height'));
        }
    });

//***** M1000060 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000060').draggable({ disabled: true });
        $('#div_1000060').resizable({ disabled: true });
        $('#div_1000060').css({'border':'2px solid black'}); 
        $('#div_1000060').css({'cursor':'default'}); 
    }else{
        $('#div_1000060').draggable({ disabled: false });
        $('#div_1000060').resizable({ disabled: false });
        $('#div_1000060').css({'border':modifybordercolor});
        $('#div_1000060').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000060').draggable('disable');
            $('#div_1000060').resizable('disable');
            $('#div_1000060').css({'border':'2px solid black'});
        }else{
            $('#div_1000060').draggable('enable');
            $('#div_1000060').resizable('enable');
            $('#div_1000060').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000060_left') === null) {
        $('#div_1000060').css('left', left_1000060);
    } else {
        $('#div_1000060').css('left', localStorage.getItem('div_1000060_left'));
    }

    if (localStorage.getItem('div_1000060_top') === null) {
        $('#div_1000060').css('top', top_1000060);
    } else {
        $('#div_1000060').css('top', localStorage.getItem('div_1000060_top'));
    }

    if (localStorage.getItem('div_1000060_width') === null) {
        $('#div_1000060').css('width', machineswidth);
    } else {
        $('#div_1000060').css('width', localStorage.getItem('div_1000060_width'));
    }
    
    if (localStorage.getItem('div_1000060_height') === null) {
        $('#div_1000060').css('height', machinesheight);
    } else {
        $('#div_1000060').css('height', localStorage.getItem('div_1000060_height'));
    }

    $('#div_1000060').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000060_left', $(this).css('left'));
            localStorage.setItem('div_1000060_top', $(this).css('top'));
        }
    });
    
    $('#div_1000060').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000060_width', $(this).css('width'));
            localStorage.setItem('div_1000060_height', $(this).css('height'));
        }
    });

//***** M1000061 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000061').draggable({ disabled: true });
        $('#div_1000061').resizable({ disabled: true });
        $('#div_1000061').css({'border':'2px solid black'}); 
        $('#div_1000061').css({'cursor':'default'}); 
    }else{
        $('#div_1000061').draggable({ disabled: false });
        $('#div_1000061').resizable({ disabled: false });
        $('#div_1000061').css({'border':modifybordercolor});
        $('#div_1000061').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000061').draggable('disable');
            $('#div_1000061').resizable('disable');
            $('#div_1000061').css({'border':'2px solid black'});
        }else{
            $('#div_1000061').draggable('enable');
            $('#div_1000061').resizable('enable');
            $('#div_1000061').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000061_left') === null) {
        $('#div_1000061').css('left', left_1000061);
    } else {
        $('#div_1000061').css('left', localStorage.getItem('div_1000061_left'));
    }

    if (localStorage.getItem('div_1000061_top') === null) {
        $('#div_1000061').css('top', top_1000061);
    } else {
        $('#div_1000061').css('top', localStorage.getItem('div_1000061_top'));
    }

    if (localStorage.getItem('div_1000061_width') === null) {
        $('#div_1000061').css('width', machineswidth);
    } else {
        $('#div_1000061').css('width', localStorage.getItem('div_1000061_width'));
    }
    
    if (localStorage.getItem('div_1000061_height') === null) {
        $('#div_1000061').css('height', machinesheight);
    } else {
        $('#div_1000061').css('height', localStorage.getItem('div_1000061_height'));
    }

    $('#div_1000061').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000061_left', $(this).css('left'));
            localStorage.setItem('div_1000061_top', $(this).css('top'));
        }
    });
    
    $('#div_1000061').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000061_width', $(this).css('width'));
            localStorage.setItem('div_1000061_height', $(this).css('height'));
        }
    });

//***** M1000062 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000062').draggable({ disabled: true });
        $('#div_1000062').resizable({ disabled: true });
        $('#div_1000062').css({'border':'2px solid black'}); 
        $('#div_1000062').css({'cursor':'default'}); 
    }else{
        $('#div_1000062').draggable({ disabled: false });
        $('#div_1000062').resizable({ disabled: false });
        $('#div_1000062').css({'border':modifybordercolor});
        $('#div_1000062').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000062').draggable('disable');
            $('#div_1000062').resizable('disable');
            $('#div_1000062').css({'border':'2px solid black'});
        }else{
            $('#div_1000062').draggable('enable');
            $('#div_1000062').resizable('enable');
            $('#div_1000062').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000062_left') === null) {
        $('#div_1000062').css('left', left_1000062);
    } else {
        $('#div_1000062').css('left', localStorage.getItem('div_1000062_left'));
    }

    if (localStorage.getItem('div_1000062_top') === null) {
        $('#div_1000062').css('top', top_1000062);
    } else {
        $('#div_1000062').css('top', localStorage.getItem('div_1000062_top'));
    }

    if (localStorage.getItem('div_1000062_width') === null) {
        $('#div_1000062').css('width', machineswidth);
    } else {
        $('#div_1000062').css('width', localStorage.getItem('div_1000062_width'));
    }
    
    if (localStorage.getItem('div_1000062_height') === null) {
        $('#div_1000062').css('height', machinesheight);
    } else {
        $('#div_1000062').css('height', localStorage.getItem('div_1000062_height'));
    }

    $('#div_1000062').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000062_left', $(this).css('left'));
            localStorage.setItem('div_1000062_top', $(this).css('top'));
        }
    });
    
    $('#div_1000062').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000062_width', $(this).css('width'));
            localStorage.setItem('div_1000062_height', $(this).css('height'));
        }
    });

//***** M1000063 ****************************************************************************************************************************************************************     

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000063').draggable({ disabled: true });
        $('#div_1000063').resizable({ disabled: true });
        $('#div_1000063').css({'border':'2px solid black'}); 
        $('#div_1000063').css({'cursor':'default'}); 
    }else{
        $('#div_1000063').draggable({ disabled: false });
        $('#div_1000063').resizable({ disabled: false });
        $('#div_1000063').css({'border':modifybordercolor});
        $('#div_1000063').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000063').draggable('disable');
            $('#div_1000063').resizable('disable');
            $('#div_1000063').css({'border':'2px solid black'});
        }else{
            $('#div_1000063').draggable('enable');
            $('#div_1000063').resizable('enable');
            $('#div_1000063').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000063_left') === null) {
        $('#div_1000063').css('left', left_1000063);
    } else {
        $('#div_1000063').css('left', localStorage.getItem('div_1000063_left'));
    }

    if (localStorage.getItem('div_1000063_top') === null) {
        $('#div_1000063').css('top', top_1000063);
    } else {
        $('#div_1000063').css('top', localStorage.getItem('div_1000063_top'));
    }

    if (localStorage.getItem('div_1000063_width') === null) {
        $('#div_1000063').css('width', machineswidth);
    } else {
        $('#div_1000063').css('width', localStorage.getItem('div_1000063_width'));
    }
    
    if (localStorage.getItem('div_1000063_height') === null) {
        $('#div_1000063').css('height', machinesheight);
    } else {
        $('#div_1000063').css('height', localStorage.getItem('div_1000063_height'));
    }

    $('#div_1000063').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000063_left', $(this).css('left'));
            localStorage.setItem('div_1000063_top', $(this).css('top'));
        }
    });
    
    $('#div_1000063').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000063_width', $(this).css('width'));
            localStorage.setItem('div_1000063_height', $(this).css('height'));
        }
    });

//***** M1000089 ************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000089').draggable({ disabled: true });
        $('#div_1000089').resizable({ disabled: true });
        $('#div_1000089').css({'border':'2px solid black'}); 
        $('#div_1000089').css({'cursor':'default'}); 
    }else{
        $('#div_1000089').draggable({ disabled: false });
        $('#div_1000089').resizable({ disabled: false });
        $('#div_1000089').css({'border':modifybordercolor});
        $('#div_1000089').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000089').draggable('disable');
            $('#div_1000089').resizable('disable');
            $('#div_1000089').css({'border':'2px solid black'});
        }else{
            $('#div_1000089').draggable('enable');
            $('#div_1000089').resizable('enable');
            $('#div_1000089').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000089_left') === null) {
        $('#div_1000089').css('left', left_1000089);
    } else {
        $('#div_1000089').css('left', localStorage.getItem('div_1000089_left'));
    }

    if (localStorage.getItem('div_1000089_top') === null) {
        $('#div_1000089').css('top', top_1000089);
    } else {
        $('#div_1000089').css('top', localStorage.getItem('div_1000089_top'));
    }

    if (localStorage.getItem('div_1000089_width') === null) {
        $('#div_1000089').css('width', machineswidth);
    } else {
        $('#div_1000089').css('width', localStorage.getItem('div_1000089_width'));
    }
    
    if (localStorage.getItem('div_1000089_height') === null) {
        $('#div_1000089').css('height', machinesheight);
    } else {
        $('#div_1000089').css('height', localStorage.getItem('div_1000089_height'));
    }

    $('#div_1000089').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000089_left', $(this).css('left'));
            localStorage.setItem('div_1000089_top', $(this).css('top'));
        }
    });
    
    $('#div_1000089').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000089_width', $(this).css('width'));
            localStorage.setItem('div_1000089_height', $(this).css('height'));
        }
    });

//***** M1000091 ****************************************************************************************************************************************************************

    if($('#button_1').val() === 'Modifica Layout'){
        $('#div_1000091').draggable({ disabled: true });
        $('#div_1000091').resizable({ disabled: true });
        $('#div_1000091').css({'border':'2px solid black'}); 
        $('#div_1000091').css({'cursor':'default'}); 
    }else{
        $('#div_1000091').draggable({ disabled: false });
        $('#div_1000091').resizable({ disabled: false });
        $('#div_1000091').css({'border':modifybordercolor});
        $('#div_1000091').css({'cursor':'pointer'}); 
    }

    $('#button_1').click(function(e) {
        var button = $(this);
        if(button.val() === 'Modifica Layout'){
            $('#div_1000091').draggable('disable');
            $('#div_1000091').resizable('disable');
            $('#div_1000091').css({'border':'2px solid black'});
        }else{
            $('#div_1000091').draggable('enable');
            $('#div_1000091').resizable('enable');
            $('#div_1000091').css({'border':modifybordercolor});
        }
    });  

    if (localStorage.getItem('div_1000091_left') === null) {
        $('#div_1000091').css('left', left_1000091);
    } else {
        $('#div_1000091').css('left', localStorage.getItem('div_1000091_left'));
    }

    if (localStorage.getItem('div_1000091_top') === null) {
        $('#div_1000091').css('top', top_1000091);
    } else {
        $('#div_1000091').css('top', localStorage.getItem('div_1000091_top'));
    }

    if (localStorage.getItem('div_1000091_width') === null) {
        $('#div_1000091').css('width', machineswidth);
    } else {
        $('#div_1000091').css('width', localStorage.getItem('div_1000091_width'));
    }
    
    if (localStorage.getItem('div_1000091_height') === null) {
        $('#div_1000091').css('height', machinesheight);
    } else {
        $('#div_1000091').css('height', localStorage.getItem('div_1000091_height'));
    }

    $('#div_1000091').draggable({
        stop: function (event, ui) {
            if((localStorage.getItem('enablepostracking')) === '1'){
                alert('Posizione: ' + $(this).css('top') + '  X  ' + $(this).css('left'));
            }
            localStorage.setItem('div_1000091_left', $(this).css('left'));
            localStorage.setItem('div_1000091_top', $(this).css('top'));;
        }
    });
    
    $('#div_1000091').resizable({
        minWidth: 75,
        minHeight: 18,
        stop: function (event, ui) {
             if((localStorage.getItem('enablesizetracking')) === '1'){
                alert('Dimensione: ' + $(this).css('width') + '  X  ' + $(this).css('height'));
            }
            localStorage.setItem('div_1000091_width', $(this).css('width'));
            localStorage.setItem('div_1000091_height', $(this).css('height'));
        }
    });

//***** FOR ALL DIVS ************************************************************************************************************************************************************

    function getData() {
        $.ajax({
            async: false,
            url: "GetMachineData",
            dataType: "json",
            success: function (data) {
                var internal_div_20MNTG_1_top = 20;
                var internal_div_20MNTG_1_left = 5;
                var internal_div_20IMBL_1_top = 20;
                var internal_div_20IMBL_1_left = 5;
                var internal_div_20CLLD_1_top = 20;
                var internal_div_20CLLD_1_left = 5;
                $.each(data, function (key1, value1) {
                    $.each(value1, function (key2, value2) {
                         if((value2.centro === '20MNTG')&&(value2.reparto === '001')){
                            $('#div_' + value2.macchina).remove();
                            var div = '<div id="div_' + value2.macchina + '" class="machine">' 
                                    + '<a id="a_' + value2.macchina + '"></a>' 
                                    + '<input type="hidden" id="h_' + value2.macchina + '"/>' 
                                    + '</div>';
                            $('#div_20MNTG_1').append(div);  
                            $('#a_' + value2.macchina).text(value2.testo);
                            $('#a_' + value2.macchina).css('color', value2.colore);
                            $('#div_' + value2.macchina).attr('title', value2.info);
                            $('#div_' + value2.macchina).css('background-color', value2.sfondo);
                            $('#h_' + value2.macchina).val(value2.stato);
                            $('#div_' + value2.macchina).css('top', internal_div_20MNTG_1_top);
                            $('#div_' + value2.macchina).css('left', internal_div_20MNTG_1_left);
                            internal_div_20MNTG_1_top = internal_div_20MNTG_1_top + 22;
                        }else if((value2.centro === '20IMBL')&&(value2.reparto === '001')){
                            $('#div_' + value2.macchina).remove();
                            var div = '<div id="div_' + value2.macchina + '" class="machine">' 
                                    + '<a id="a_' + value2.macchina + '"></a>' 
                                    + '<input type="hidden" id="h_' + value2.macchina + '"/>' 
                                    + '</div>';
                            $('#div_20IMBL_1').append(div);  
                            $('#a_' + value2.macchina).text(value2.testo);
                            $('#a_' + value2.macchina).css('color', value2.colore);
                            $('#div_' + value2.macchina).attr('title', value2.info);
                            $('#div_' + value2.macchina).css('background-color', value2.sfondo);
                            $('#h_' + value2.macchina).val(value2.stato);
                            $('#div_' + value2.macchina).css('top', internal_div_20IMBL_1_top);
                            $('#div_' + value2.macchina).css('left', internal_div_20IMBL_1_left);
                            internal_div_20IMBL_1_top = internal_div_20IMBL_1_top + 22;
                        }else if((value2.centro === '20CLLD')&&(value2.reparto === '001')){
                            $('#div_' + value2.macchina).remove();
                            var div = '<div id="div_' + value2.macchina + '" class="machine">' 
                                    + '<a id="a_' + value2.macchina + '"></a>' 
                                    + '<input type="hidden" id="h_' + value2.macchina + '"/>' 
                                    + '</div>';
                            $('#div_20CLLD_1').append(div);  
                            $('#a_' + value2.macchina).text(value2.testo);
                            $('#a_' + value2.macchina).css('color', value2.colore);
                            $('#div_' + value2.macchina).attr('title', value2.info);
                            $('#div_' + value2.macchina).css('background-color', value2.sfondo);
                            $('#h_' + value2.macchina).val(value2.stato);
                            $('#div_' + value2.macchina).css('top', internal_div_20CLLD_1_top);
                            $('#div_' + value2.macchina).css('left', internal_div_20CLLD_1_left);
                            internal_div_20CLLD_1_top = internal_div_20CLLD_1_top + 22;
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
        if ($activeTab === 0) {
            if(($('#button_1').val() === 'Modifica Layout')&&($('#button_2').val() === 'Modifica Layout')){
                getData();
            }
        }
    }, datarefresh);
    
    setInterval(function () {
        if($('#button_1').val() === 'Modifica Layout'){
            if($('#div_20MNTG_1').find('.machine').length === 0){
                $('#a_20MNTG_1').css('color','black');
                $('#div_20MNTG_1').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#div_20IMBL_1').find('.machine').length === 0){
                $('#a_20IMBL_1').css('color','black');
                $('#div_20IMBL_1').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#div_20CLLD_1').find('.machine').length === 0){
                $('#a_20CLLD_1').css('color','black');
                $('#div_20CLLD_1').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }     
            if($('#h_1000000').val() === '2'){
                $('#a_1000000').css('color','black');
                $('#div_1000000').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000053').val() === '2'){
                $('#a_1000053').css('color','black');
                $('#div_1000053').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000054').val() === '2'){
                $('#a_1000054').css('color','black');
                $('#div_1000054').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000038').val() === '2'){
                $('#a_1000038').css('color','black');
                $('#div_1000038').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000060').val() === '2'){
                $('#a_1000060').css('color','black');
                $('#div_1000060').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000019').val() === '2'){
                $('#a_1000019').css('color','black');
                $('#div_1000019').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000045').val() === '2'){
                $('#a_1000045').css('color','black');
                $('#div_1000045').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000020').val() === '2'){
                $('#a_1000020').css('color','black');
                $('#div_1000020').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000037').val() === '2'){
                $('#a_1000037').css('color','black');
                $('#div_1000037').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }if($('#h_1000061').val() === '2'){
                $('#a_1000061').css('color','black');
                $('#div_1000061').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000032').val() === '2'){
                $('#a_1000032').css('color','black');
                $('#div_1000032').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }if($('#h_1000033').val() === '2'){
                $('#a_1000033').css('color','black');
                $('#div_1000033').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000034').val() === '2'){
                $('#a_1000034').css('color','black');
                $('#div_1000034').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000022').val() === '2'){
                $('#a_1000022').css('color','black');
                $('#div_1000022').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000001').val() === '2'){
                $('#a_1000001').css('color','black');
                $('#div_1000001').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000111').val() === '2'){
                $('#a_1000111').css('color','black');
                $('#div_1000111').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000028').val() === '2'){
                $('#a_1000028').css('color','black');
                $('#div_1000028').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000035').val() === '2'){
                $('#a_1000035').css('color','black');
                $('#div_1000035').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000041').val() === '2'){
                $('#a_1000041').css('color','black');
                $('#div_1000041').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000059').val() === '2'){
                $('#a_1000059').css('color','black');
                $('#div_1000059').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000039').val() === '2'){
                $('#a_1000039').css('color','black');
                $('#div_1000039').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000057').val() === '2'){
                $('#a_1000057').css('color','black');
                $('#div_1000057').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000004').val() === '2'){
                $('#a_1000004').css('color','black');
                $('#div_1000004').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000031').val() === '2'){
                $('#a_1000031').css('color','black');
                $('#div_1000031').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000062').val() === '2'){
                $('#a_1000062').css('color','black');
                $('#div_1000062').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000010').val() === '2'){
                $('#a_1000010').css('color','black');
                $('#div_1000010').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000063').val() === '2'){
                $('#a_1000063').css('color','black');
                $('#div_1000063').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000015').val() === '2'){
                $('#a_1000015').css('color','black');
                $('#div_1000015').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000089').val() === '2'){
                $('#a_1000089').css('color','black');
                $('#div_1000089').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000091').val() === '2'){
                $('#a_1000091').css('color','black');
                $('#div_1000091').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000005').val() === '2'){
                $('#a_1000005').css('color','black');
                $('#div_1000005').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000006').val() === '2'){
                $('#a_1000006').css('color','black');
                $('#div_1000006').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000008').val() === '2'){
                $('#a_1000008').css('color','black');
                $('#div_1000008').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000047').val() === '2'){
                $('#a_1000047').css('color','black');
                $('#div_1000047').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000016').val() === '2'){
                $('#a_1000016').css('color','black');
                $('#div_1000016').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000007').val() === '2'){
                $('#a_1000007').css('color','black');
                $('#div_1000007').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
            if($('#h_1000017').val() === '2'){
                $('#a_1000017').css('color','black');
                $('#div_1000017').css('background-color', function () {
                    this.switch = !this.switch;
                    return this.switch ? 'red' : '';
                });
            }
        }else{
            $('#div_20MNTG_1').css('background-color' ,'white');
            $('#a_20MNTG_1').css('color' ,'black');
            $('#div_20MNTG_1').css({'border':modifybordercolor});
            $('#div_20MNTG_1').find('.machine').css('background-color','white');
            $('#div_20MNTG_1').find('.machine').css({'border':modifybordercolor});
            $('#div_20MNTG_1').find('.machine').html('MONTAGGIO');

            $('#div_20IMBL_1').css('background-color' ,'white');
            $('#a_20IMBL_1').css('color' ,'black');
            $('#div_20IMBL_1').css({'border':modifybordercolor});
            $('#div_20IMBL_1').find('.machine').css('background-color','white');
            $('#div_20IMBL_1').find('.machine').css({'border':modifybordercolor});
            $('#div_20IMBL_1').find('.machine').html('IMBALLAGGIO');

            $('#div_20CLLD_1').css('background-color' ,'white');
            $('#a_20CLLD_1').css('color' ,'black');
            $('#div_20CLLD_1').css({'border':modifybordercolor});
            $('#div_20CLLD_1').find('.machine').css('background-color','white');
            $('#div_20CLLD_1').find('.machine').css({'border':modifybordercolor});
            $('#div_20CLLD_1').find('.machine').html('COLLAUDO');

            $('#div_1000000').css('background-color' ,'white');
            $('#a_1000000').text('1000000');
            $('#a_1000000').css('color' ,'black');
            $('#div_1000000').css({'border':modifybordercolor});

            $('#div_1000001').css('background-color' ,'white');
            $('#a_1000001').text('1000001');
            $('#a_1000001').css('color' ,'black');
            $('#div_1000001').css({'border':modifybordercolor});

            $('#div_1000004').css('background-color' ,'white');
            $('#a_1000004').text('1000004');
            $('#a_1000004').css('color' ,'black');
            $('#div_1000004').css({'border':modifybordercolor});

            $('#div_1000005').css('background-color' ,'white');
            $('#a_1000005').text('1000005');
            $('#a_1000005').css('color' ,'black');
            $('#div_1000005').css({'border':modifybordercolor});

            $('#div_1000006').css('background-color' ,'white');
            $('#a_1000006').text('1000006');
            $('#a_1000006').css('color' ,'black');
            $('#div_1000006').css({'border':modifybordercolor});

            $('#div_1000007').css('background-color' ,'white');
            $('#a_1000007').text('1000007');
            $('#a_1000007').css('color' ,'black');
            $('#div_1000007').css({'border':modifybordercolor});

            $('#div_1000008').css('background-color' ,'white');
            $('#a_1000008').text('1000008');
            $('#a_1000008').css('color' ,'black');
            $('#div_1000008').css({'border':modifybordercolor});

            $('#div_1000111').css('background-color' ,'white');
            $('#a_1000111').text('1000111');
            $('#a_1000111').css('color' ,'black');
            $('#div_1000111').css({'border':modifybordercolor});

            $('#div_1000010').css('background-color' ,'white');
            $('#a_1000010').text('1000010');
            $('#a_1000010').css('color' ,'black');
            $('#div_1000010').css({'border':modifybordercolor});

            $('#div_1000015').css('background-color' ,'white');
            $('#a_1000015').text('1000015');
            $('#a_1000015').css('color' ,'black');
            $('#div_1000015').css({'border':modifybordercolor});

            $('#div_1000016').css('background-color' ,'white');
            $('#a_1000016').text('1000016');
            $('#a_1000016').css('color' ,'black');
            $('#div_1000016').css({'border':modifybordercolor});

            $('#div_1000017').css('background-color' ,'white');
            $('#a_1000017').text('1000017');
            $('#a_1000017').css('color' ,'black');
            $('#div_1000017').css({'border':modifybordercolor});

            $('#div_1000019').css('background-color' ,'white');
            $('#a_1000019').text('1000019');
            $('#a_1000019').css('color' ,'black');
            $('#div_1000019').css({'border':modifybordercolor});

            $('#div_1000020').css('background-color' ,'white');
            $('#a_1000020').text('1000020');
            $('#a_1000020').css('color' ,'black');
            $('#div_1000020').css({'border':modifybordercolor});

            $('#div_1000022').css('background-color' ,'white');
            $('#a_1000022').text('1000022');
            $('#a_1000022').css('color' ,'black');
            $('#div_1000022').css({'border':modifybordercolor});

            $('#div_1000028').css('background-color' ,'white');
            $('#a_1000028').text('1000028');
            $('#a_1000028').css('color' ,'black');
            $('#div_1000028').css({'border':modifybordercolor});

            $('#div_1000031').css('background-color' ,'white');
            $('#a_1000031').text('1000031');
            $('#a_1000031').css('color' ,'black');
            $('#div_1000031').css({'border':modifybordercolor});

            $('#div_1000032').css('background-color' ,'white');
            $('#a_1000032').text('1000032');
            $('#a_1000032').css('color' ,'black');
            $('#div_1000032').css({'border':modifybordercolor});

            $('#div_1000033').css('background-color' ,'white');
            $('#a_1000033').text('1000033');
            $('#a_1000033').css('color' ,'black');
            $('#div_1000033').css({'border':modifybordercolor});

            $('#div_1000034').css('background-color' ,'white');
            $('#a_1000034').text('1000034');
            $('#a_1000034').css('color' ,'black');
            $('#div_1000034').css({'border':modifybordercolor});

            $('#div_1000035').css('background-color' ,'white');
            $('#a_1000035').text('1000035');
            $('#a_1000035').css('color' ,'black');
            $('#div_1000035').css({'border':modifybordercolor});

            $('#div_1000037').css('background-color' ,'white');
            $('#a_1000037').text('1000037');
            $('#a_1000037').css('color' ,'black');
            $('#div_1000037').css({'border':modifybordercolor});

            $('#div_1000038').css('background-color' ,'white');
            $('#a_1000038').text('1000038');
            $('#a_1000038').css('color' ,'black');
            $('#div_1000038').css({'border':modifybordercolor});

            $('#div_1000039').css('background-color' ,'white');
            $('#a_1000039').text('1000039');
            $('#a_1000039').css('color' ,'black');
            $('#div_1000039').css({'border':modifybordercolor});

            $('#div_1000041').css('background-color' ,'white');
            $('#a_1000041').text('1000041');
            $('#a_1000041').css('color' ,'black');
            $('#div_1000041').css({'border':modifybordercolor});

            $('#div_1000045').css('background-color' ,'white');
            $('#a_1000045').text('1000045');
            $('#a_1000045').css('color' ,'black');
            $('#div_1000045').css({'border':modifybordercolor});

            $('#div_1000047').css('background-color' ,'white');
            $('#a_1000047').text('1000047');
            $('#a_1000047').css('color' ,'black');
            $('#div_1000047').css({'border':modifybordercolor});

            $('#div_1000053').css('background-color' ,'white');
            $('#a_1000053').text('1000053');
            $('#a_1000053').css('color' ,'black');
            $('#div_1000053').css({'border':modifybordercolor});

            $('#div_1000054').css('background-color' ,'white');
            $('#a_1000054').text('1000054');
            $('#a_1000054').css('color' ,'black');
            $('#div_1000054').css({'border':modifybordercolor});

            $('#div_1000057').css('background-color' ,'white');
            $('#a_1000057').text('1000057');
            $('#a_1000057').css('color' ,'black');
            $('#div_1000057').css({'border':modifybordercolor});

            $('#div_1000059').css('background-color' ,'white');
            $('#a_1000059').text('1000059');
            $('#a_1000059').css('color' ,'black');
            $('#div_1000059').css({'border':modifybordercolor});

            $('#div_1000060').css('background-color' ,'white');
            $('#a_1000060').text('1000060');
            $('#a_1000060').css('color' ,'black');
            $('#div_1000060').css({'border':modifybordercolor});

            $('#div_1000061').css('background-color' ,'white');
            $('#a_1000061').text('1000061');
            $('#a_1000061').css('color' ,'black');
            $('#div_1000061').css({'border':modifybordercolor});

            $('#div_1000062').css('background-color' ,'white');
            $('#a_1000062').text('1000062');
            $('#a_1000062').css('color' ,'black');
            $('#div_1000062').css({'border':modifybordercolor});

            $('#div_1000063').css('background-color' ,'white');
            $('#a_1000063').text('1000063');
            $('#a_1000063').css('color' ,'black');
            $('#div_1000063').css({'border':modifybordercolor});

            $('#div_1000089').css('background-color' ,'white');
            $('#a_1000089').text('1000089');
            $('#a_1000089').css('color' ,'black');
            $('#div_1000089').css({'border':modifybordercolor});

            $('#div_1000091').css('background-color' ,'white');
            $('#a_1000091').text('1000091');
            $('#a_1000091').css('color' ,'black');
            $('#div_1000091').css({'border':modifybordercolor});
        }
    }, blinktime);
                
});