var cheerio = require('cheerio');
var fs = require('fs');



var errors = [];
var path = './test.html'

if (!fs.existsSync(path)) {
    errors.push("Plik test.html nie istnieje")
} 
else {
    var $ = cheerio.load(fs.readFileSync(path));

    var textInsideA = $("header nav a").text().replace(/ /g,'');

    //Czy istnieje element header?
    if ($("header").length <= 0) {
        errors.push("Nie ma elementu header na stronie");
    } 
    //Czy istnieje element nav wew. headera?
    else if ($("header nav").length <= 0) {
        errors.push("W znaczniku header nie ma znacznika nav");
    } 
    //Czy istnieje element a (logo) wew. nav ?
    else if ($("header nav > a").length <= 0) {
        errors.push("W znaczniku header i nav nie ma odnośnika");
    } 
    // Czy element a (logo) posiada atrybut href i przypisana do niego jakas wartosc
    else if ( $("header nav a").attr("href") == undefined || $("header nav a").attr("href") == "") {
		errors.push("Odnośnik nie ma atrybutu href, lub atrybut href nie ma żadnej wartości. Umieść chociaż '#' ")
    } 
    //Czy logo posiada jakis tekst pomiedzy znacznikami?
    else if (textInsideA === "") {
		errors.push("Nie ma tekstu wewnątrz znaczników otwierającego i zamykającego dla odnośnika")
    } 
    // Czy istnieje lista ul wew. nav
    else if( $("header nav > ul").length <= 0) {
		errors.push("Nie ma listy ul wewnątrz znacznika nav")
    }  
    //Czy element ul posiada przynajmniej 3 elementy li?
     else if( $("header nav ul li").length < 3) {
		errors.push("Element ul powinien mieć 3 znaczniki li")
    } 

    //Jeeli istnieje element ul to:
    if( $("header nav > ul").length >= 0) {
        //Element ul powinien mieć tylko elementy li
        $("ul").children().each( (i , elem) => {
            if(elem.name !== "li") {
                errors.push("Element ul powinien mieć zawierać tylko elementy li!")
            }
        })

        //Linki powinny zawierać elementy a
        var numA = $("header nav ul li a").length;
        console.log("liczba linkow", numA)
        if(numA < 3) {
            errors.push("Każdy element li powinien zawierać link")
        }

        $("header nav ul li a").each( (i, elem) => {
            if( elem.attribs.href == undefined || elem.attribs.href == "" ) {
                errors.push("W menu odnośnik numer:" + (i + 1) + " nie posiada atrybutu href lub jest on pusty. Ustaw '#' ")
            }
            if( $(elem).text().replace(/ /g,'') === "" ) {
                errors.push("W menu odnośnik numer:" + (i + 1) + " nie posiada żadnego tekstu do wyświetlenia.")
            }
        })



    }


 
}

if( errors.length <= 0 ) {
   console.log('Dobra robota!')
}
else {
    console.log(errors.join("\n"))
}