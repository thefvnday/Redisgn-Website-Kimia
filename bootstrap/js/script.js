//memanggil  link event
$(document).ready(function(){
	//logo click
	$('#click').click(function(){
		alert('Selamat Datang di akun Website milik prodi S1 Kimia Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Sebelas Maret Surakarta');
	});

	//jam
	$('#home').click(function(){
		setInterval(function(){
			var date = new Date();
			$('#tampilanjam').html(" "+date.toLocaleTimeString());
		}, 1000 );
	});
	
	//toggle hide&in


	$('#toggle').click(function(){
		$('#paragraf').fadeToggle('slow');
	
	});

	$('#toggle2').click(function(){
		$('#paragraf2').fadeToggle('slow');
	
	});

	$('#toggle3').click(function(){
		$('#paragraf3').fadeToggle('slow');
	
	});

	$('#toggle4').click(function(){
		$('#paragraf4').fadeToggle('slow');
	
	});

	$('#toggle5').click(function(){
		$('#paragraf5').fadeToggle('slow');
	
	});

	$('#toggle6').click(function(){
		$('#paragraf6').fadeToggle('slow');
	
	});

	
	//sejarah click
	$('#togglesej').click(function(){
		$('#paragrafsej').fadeToggle('slow');
	
	});

	//accordion
	//$(function(){
		//$('#accordion').accordion();
	//});

	//autocomplate
	$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


/*	//toggle effect
	$( function() {
    var state = true;
    $( "#button-toggle" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#000084;",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
	*/

});