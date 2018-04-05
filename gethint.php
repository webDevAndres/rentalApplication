<?php
// Array with names
$a[] = "Alfa Romeo";
$a[] = "Aston Martin";
$a[] = "Audi";
$a[] = "Bentley";
$a[] = "Benz";
$a[] = "BMW";
$a[] = "Bugatti";
$a[] = "Cadillac";
$a[] = "Chevrolet";
$a[] = "Chrysler";
$a[] = "Citreon";
$a[] = "Corvette";
$a[] = "DAF";
$a[] = "Dacia";
$a[] = "Daewoo";
$a[] = "Daihatsu";
$a[] = "Datsun";
$a[] = "De Lorean";
$a[] = "Dino";
$a[] = "Dodge";
$a[] = "Farboud";
$a[] = "Ferrari";
$a[] = "Fiat";
$a[] = "Ford";
$a[] = "Honda";
$a[] = "Hummer";
$a[] = "Hyundai";
$a[] = "Jaguar";
$a[] = "Jeep";
$a[] = "KIA";
$a[] = "Koenigsegg";
$a[] = "Lada";
$a[] = "Lamborghini";
$a[] = "Lancia";
$a[] = "Land Rover";
$a[] = "Lexus";
$a[] = "Ligier";
$a[] = "Lincoln";
$a[] = "Lotus";
$a[] = "Martini";
$a[] = "Maserati";
$a[] = "Maybach";
$a[] = "Mazda";
$a[] = "McLaren";
$a[] = "Mercedes";
$a[] = "Mercedes-Benz";
$a[] = "Mini";
$a[] = "Mitsubishi";
$a[] = "Nissan";
$a[] = "Noble";
$a[] = "Opel";
$a[] = "Peugeot";
$a[] = "Pontiac";
$a[] = "Porsche";
$a[] = "Renault";
$a[] = "Rolls-Royce";
$a[] = "Rover";
$a[] = "Saab";
$a[] = "Seat";
$a[] = "Skoda";
$a[] = "Smart";
$a[] = "Spyker";
$a[] = "Subaru";
$a[] = "Suzuki";
$a[] = "Toyota";
$a[] = "Vauxhall";
$a[] = "Volkswagen";
$a[] = "Volvo";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup up all hints from array if $q is different from "" 
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>