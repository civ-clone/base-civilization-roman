"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roman_1 = require("./Roman");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'Roma',
    'Ariminum',
    'Belum',
    'Placentia',
    'Tarraco',
    'Italica',
    'Mod',
    'Salernum',
    'Bononia',
    'Forum Livii',
    'Regium Lepidi',
    'Aquileia',
    'Ascrivium',
    'Valentia Edetanorum',
    'Scalabis',
    'Villa Euracini',
    'Palma',
    'Colonia Narbo Martius',
    'Massa',
    'Pistoria',
    'Segovia',
    'Gerunda',
    'Pompaelo',
    'Naissus',
    'Brigantium',
    'Florentia',
    'Vesontio',
    'Lutetia Parisiorum',
    'Atuatuca Tungrorum',
    'Iulia Romula Hispalis',
    'Augusta Raurica',
    'Noviodunum',
    'Lugdunum',
    'Siscia',
    'Marsonia',
    'Augusta Treverorum',
    'Castra Legionis',
    'Augusta Taurinorum',
    'Augusta Praetoria Salassorum',
    'Emerita Augusta',
    'Norba Caesarina',
    'Lucus Augusta',
    'Caesarea',
    'Bracara Augusta',
    'Novaesium',
    'Castra Vetera',
    'Pons Drusi',
    'Ovilava',
    'Iuvavum',
    'Augusta Vindelicorum',
    'Turicum',
    'Asturica Augusta',
    'Borbetomagus',
    'Caesaraugusta',
    'Sirmium',
    'Sorviodurum',
    'Mogontiacum',
    'Argentoratum',
    'Bonna',
    'Noviomagus',
    'Castellum apud Confluentes',
    'Divodurum',
    'Caesaromagus',
    'Ambianum',
    'Faventia Paterna Barcino',
    'Abila',
    'Lousonna',
    'Ulpia Noviomagus Batavorum',
    'Rigomagus',
    'Aquae Mattiacorum',
    'Mursa',
    'Emona',
    'Vindonissa',
    'Aventicum',
    'Praetorium Agrippinae',
    'Lugdunum Batavorum',
    'Aequum',
    'Londinium',
    'Albanianis',
    'Lauri',
    'Durovernum Cantiacorum',
    'Regulbium',
    'Rutupiae',
    'Viminacium',
    'Camulodunum',
    'Traiectum',
    'Matilo',
    'Forum Hadriani',
    'Nigrum Pullum',
    'Lindum Colonia',
    'Ratae Corieltauvorum',
    'Durocobrivis',
    'Colonia Agrippina',
    'Durocornovium',
    'Verulamium',
    'Letocetum',
    'Dubris',
    'Danum',
    'Mediolanum',
    'Isca Dumnoniorum',
    'Blestium',
    'Viroconium Cornoviorum',
    'Aquae Sulis',
    'Durnovaria',
    'Lindinis',
    'Ad Flexum',
    'Clausentum',
    'Venta Belgarum',
    'Calleva Atrebatum',
    'Duroliponte',
    'Concangis',
    'Condate',
    'Corinium Dobunnorum',
    'Eboracum',
    'Luguvalium',
    'Arae Flaviae',
    'Isca Augusta',
    'Lagentium',
    'Lopodunum',
    'Moridunum',
    'Venta Silurum',
    'Deva Victrix',
    'Mamucium',
    'Olicana',
    'Vinovia',
    'Bonames',
    'Coria',
    'Gerulata',
    'Vindobona',
    'Biriciana',
    'Cannstatt Castrum',
    'Colonia Nervia Glevensium',
    'Sumelocenna',
    'Lopodunum',
    'Traiectum ad Nicrem',
    'Castra Batavar',
    'Nida',
    'Lactodurum',
    'Bovium',
    'Burgodunum',
    'Lentia',
    'Aquae Granni',
    'Complutum',
    'Aeminium',
    'Traiectum ad Mosam',
    'Coriovallum',
    'Portus Lemanis',
    'Andautonia',
    'Salona',
    'Cibalae',
    'Aquae Helveticae',
    'Aquincum',
    'Apulum',
    'Pons Aelius',
    'Durovigutum',
    'Aelia Capitolina',
    'Ala',
    'Castra Regina',
    'Theranda',
    'Pomaria',
    'Partiscum',
    'Gesoriacum',
    'Aurelia Aquensis',
    'Urbs Aurelianorum',
    'Venetiae',
    'Ragusium',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Roman_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map