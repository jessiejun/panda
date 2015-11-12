var catimagelib = {
    nameitems : [],
    "images" : [
        {
            "name" : "bg0",
            "link" : "../img/card0.png",
            "x":"300px",
            "y":"150px",
        },
        {
            "name" : "bg1",
            "link" : "../img/card1.png",
            "x":"250px",
            "y":"230px",
        },
        {
            "name" : "bg2",
            "link" : "../img/card2.png",
            "x":"250px",
            "y":"250px",
        },
        {
            "name" : "bg3",
            "link" : "../img/card3.png",
            "x":"250px",
            "y":"200px",
        },
        {
            "name" : "bg4",
            "link" : "../img/card4.png",
            "x":"110px",
            "y":"110px",
        },
        {
            "name" : "bg5",
            "link" : "../img/card5.png",
            "x":"270px",
            "y":"270px",
        },
        {
            "name" : "bg6",
            "link" : "../img/card6.png",
            "x":"280px",
            "y":"240px",
        }
        
    ]
};

var textlib = {
    textstyles : [],
    "styles" : [
        {
            "name" : "style0",
            "link" : "../img/style0.png",
            "color": "#bf567d",
            "size" : "23px",
            "family":"Noteworthy",
            
           
        },
        {
            "name" : "style1",
            "link" : "../img/style1.png",
            "color": "#3e4754",
            "size" : "28px",
            "family":"Tekton Pro",
            
        },
        {
            "name" : "style2",
            "link" : "../img/style2.png",
            "color": "#ffffff",
            "size" : "35px",
            "family":"optima",
            
           
        },
        {
            "name" : "style3",
            "link" : "../img/style3.png",
            "color": "#ffffff",
            "size" : "28px",
            "family":"Nueva Std",
            
           
        },
        {
            "name" : "style4",
            "link" : "../img/style4.png",
            "color": "#542306",
            "size" : "28px",
            "family":"Trajan Pro",
            "x":"0px",
            "y":"0px",
           
        },
        {
            "name" : "style5",
            "link" : "../img/style5.png",
            "color": "#5f3912",
            "size" : "28px",
            "family":"Times New Roman",
            "x":"250px",
            "y":"50px",
           
        },
        {
            "name" : "style6",
            "link" : "../img/style6.png",
            "color": "#000000",
            "size" : "24px",
            "family":"Snell Roundhand",
            "x":"250px",
            "y":"110px",
           
        }
        
    ]
};


var plib = {
    pitems : [],
    "p" : [
        {
            "name" : "pendant0",
            "link" : "../img/00.png",
           
        },
        {
            "name" : "pendant1",
            "link" : "../img/1.png",
           
        },
        {
            "name" : "pendant2",
            "link" : "../img/2.png",
           
        },
        {
            "name" : "pendant3",
            "link" : "../img/03.png",
           
        },
                {
            "name" : "pendant4",
            "link" : "../img/4.png",
           
        },
                {
            "name" : "pendant5",
            "link" : "../img/5.png",
           
        }
        
    ]
};

var catlistitemPH = '<img src="%data%" id = "%number%" style = "width: 92%" class="backgroundindex thumbimg">';
var textstyleitemPH = '<img src="%data%" id = "%number%" class="textindex thumbimg">';
var pendantitemPH = '<img src="%data%" id = "%number%" style = "width: 100px; height: 100px" class="pendantindex thumbimg">';


$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");

        /*add border and edit button to text editor*/
        $(".text").css("border", "1px s")
    });

    catimagelib.namelist = function() {
      for (cat in catimagelib.images) {
        var catlistitem = catlistitemPH.replace("%data%" , catimagelib.images[cat].link).replace("%number%" , cat);
        catimagelib.nameitems[cat] = catimagelib.images[cat].name;
        $('.background').append(catlistitem);
      }
    };
    textlib.stylelist = function() {
      for (ts in textlib.styles) {
        var styleitem = textstyleitemPH.replace("%data%" , textlib.styles[ts].link).replace("%number%" , ts);
        textlib.textstyles[ts] = textlib.styles[ts].name;
        $('.greetingtext').append(styleitem);
      }
    };

    plib.plist = function() {
      for (ps in plib.p) {
        var pitem = pendantitemPH .replace("%data%" , plib.p[ps].link).replace("%number%" , ps);
        plib.pitems[ps] = plib.p[ps].name;
        $('.pendants').append(pitem);
      }
    };

    catimagelib.namelist();
    textlib.stylelist();
    plib.plist();
    //$(".background").children().first().addClass("active");

    $(".backgroundindex").click(
    function () {
        var idnumber = $(this).attr('id');
        var catimagelink = catimagelib.images[idnumber].link;
        var Dleft = catimagelib.images[idnumber].x;
        var Dtop = catimagelib.images[idnumber].y;
        //$(".ecard").children().attr("src" , catimagelink).attr({id: idnumber, class: "img-responsive"});
        $("#blesscontent").css({'margin-left': Dleft, 'margin-top':Dtop});
    });

    $(".textindex").click(
    function () {
        var idnumber = $(this).attr('id');
        var textcolor = textlib.styles[idnumber].color;
        var Fsize = textlib.styles[idnumber].size;
        var FFamiy = textlib.styles[idnumber].family;
        $(".text").css({'font-size':Fsize, 'color':textcolor, 'font-family':FFamiy});
    });

    $(".wrappers").on('mouseover',".pendant-clone" , function() {
        $(this).draggable ({
            containment: ".wrappers",
            scroll: false
        });
    });
    $(".pendantindex").draggable({
        helper: "clone",
        snapMode: "inner",
        stack: "img",
        stop: function (event, ui) {
            var coords = $('.wrappers').position();
            var offset = $('.pendants').width();
            coords.bottom = coords.top + $('.wrappers').height();
            coords.bottomRight = coords.left + $('.wrappers').width();
            var leftcalcu = ui.position.left - offset;
            if(ui.position.top >= coords.top && ui.position.top <= coords.bottom && leftcalcu >= coords.left && ui.position.left <= coords.bottomRight){
                console.info("inside");
                var uiposition = $(ui.helper).position();
                var cloneposi = uiposition.left - offset;
                console.log(cloneposi);
                $(ui.helper).css("left",cloneposi);
                var clonependant = $(ui.helper).clone(true).removeClass("pendantindex").addClass("pendant-clone").appendTo(".wrappers");
                clonependant.css({
                    "border": "0px solid white"
                })
            }else{
                console.info("outside");
            }
        }
    });

});

