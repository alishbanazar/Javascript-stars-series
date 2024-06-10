            //------------------STARS METHOD----------------------

            // with arrays

// var stars = [["*","*","*","*","*"],["*","*","*","*","*"],["*","*","*","*","*"],["*","*","*","*","*"]]
// for (var i=0; i<stars.length; i++){
//     for ( var j=0; j<stars[i].length; j++){
//         document.write(stars[i][j]+ " ")
//     }
//     document.write( " <br/>" + "<br/>")
// }

        //  without arrays
// for (var i=1; i<=4; i++){
//     for( var j=1; j<=5; j++){
//         document.write("*" + " ")
//     }
//     document.write( " <br/>")
// }        


      //---------------STARS SERIES --------------------
   //1.----------------------- FORWARD STARS ------------------

// for (var i=1; i<=10; i++){
//     for (var j=1; j<=i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

    //2.----------------------- BACKWORD STARS ------------------
 
// for (var i=5; i>=1; i--){
//     for (var j=1; j<=i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }       


for (var i=1; i<=20; i++){
        for (var j=1; j<=i; j++){
            document.write("*")
        }
        document.write("<br>")
    }