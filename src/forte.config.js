// ......................................................................................................
//
//  configuration, v0.0
//
//  by xiangchen@acm.org, 06/2017
//
// ......................................................................................................

var FORTE = FORTE || {};

//
// topology optimization related
//
FORTE.P = 3;
FORTE.MAXITERATIONS = 50; // fix this
FORTE.INITMATERIALRATIO = 0.2;
FORTE.MINMATERIALRATIO = 0.05;
FORTE.MAXMATERIALRATIO = 0.4;
FORTE.MINSIMILARITYRATIO = 0;
FORTE.MAXSIMILARITYRATIO = 10;
FORTE.MINEDITWEIGHTRATIO = 0;
FORTE.MAXEDITWEIGHTRATIO = 8;
FORTE.INITLENGTHPERPIXEL = 1; // mm
FORTE.MAXLENGTHPERPIXEL = 10;
FORTE.MINLENGTHPERPIXEL = 1;

FORTE.ADDSTRUCTS = 0;
FORTE.GETVARIATION = 1;
FORTE.OPTIMIZEWITHIN = 2;

FORTE.DRAW = 0;
FORTE.ERASE = 1;

FORTE.THRESDENSITY = 0.01;

//
// control ui related
//
FORTE.WIDTHDEFAULT = 400;
FORTE.HEIGHTDEFAULT = 280;

FORTE.DIRDESIGNDATA = 'design_data';
FORTE.ICONNEW = 'assets/new.svg';
FORTE.ICONDESIGN = 'assets/design.svg';
FORTE.ICONVOID = 'assets/void.svg';
FORTE.ICONLOAD = 'assets/load2.svg';
FORTE.ICONBOUNDARY = 'assets/boundary2.svg';
FORTE.ICONDRAW = 'assets/draw.svg';
FORTE.ICONERASER = 'assets/eraser.svg';
FORTE.ICONSAVE = 'assets/save.svg';
FORTE.ICONEYE = 'assets/eye.svg';
FORTE.ICONRUN = 'assets/run.svg';
FORTE.ICONSTOP = 'assets/stop.svg';

FORTE.MINSLIDER = 0;
FORTE.MAXSLIDER = 100;
FORTE.WIDTHMATERIALSLIDER = '100px';
FORTE.WIDTHSIMILARITYSLIDER = '100px';
FORTE.WIDTHEDITWEIGHTSLIDER = '100px';
FORTE.WIDTHMEASUREMENTSLIDER = '100px';

FORTE.HTMLCODENEWDESIGN = '&#128459;';
FORTE.HTMLCODETRIANGLEDOWN = '&#9660;';
FORTE.HTMLCODETRIANGLEUP = '&#9650;';

FORTE.COLORBLACK = '#333745'; //'#000000';
FORTE.COLORRED = '#EA2E49'; //'#cc0000';
FORTE.COLORYELLOW = '#F6F792'; //'#fffa90';
FORTE.COLORBLUE = '#77C4D3'; //'#00afff';
FORTE.COLOROPTLAYER = '#666666';
FORTE.BGCOLORCANVAS = '#f0f0f0';
FORTE.COLORERASER = 'rgba(255,255,255,0.5)';

FORTE.MAINTABLETEMPLATE = 'assets/main_table.html';
FORTE.MINALPHAFORANIMATION = 0.33;
FORTE.PSEUDOMAXALPHA = 0.5;

FORTE.FETCHINTERVAL = 200;
FORTE.RENDERINTERVAL = 100;

FORTE.GIVEUPTHRESHOLD = 3;
FORTE.DELAYEDSTART = 1;

FORTE.WIDTHOPTIMIZEDPANEL = 96;

FORTE.LABELGETVARIATION = 'get variation';
FORTE.LABELADDSTRUCTS = 'add structs';

FORTE.MAXZINDEX = 100;