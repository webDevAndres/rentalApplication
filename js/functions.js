function responsiveNav(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

//Add description of what this does... . . . . . .. . . . 
function showHint(str) {
  if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
  } else {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("txtHint").innerHTML = this.responseText;
          }
      };
      xmlhttp.open("GET", "gethint.php?q=" + str, true);
      xmlhttp.send();
  }
}

function showHint2(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint2").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint2").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
    }
  }

//   adds the NewClass to element #MoreOccupants
$( function() {
    $( "#showMoreOccupants" ).on( "click", function() {
      $( "#MoreOccupants" ).toggleClass( "show", 100 );
    });
  } );


  //allows for the element with #sortable to be sortable
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  $( function() {
    $( "input[type='checkbox']" ).checkboxradio();
  } );

  
  