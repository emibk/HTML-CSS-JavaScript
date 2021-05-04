var image;
var imageG;
var imageR;
var imageB;
var imageRa;
var imageWin
function upload()
{
 var imgcanvas = document.getElementById("can");
 var fileinput = document.getElementById("finput");
 image = new SimpleImage(fileinput);
 imageG = new SimpleImage(fileinput);
 imageR = new SimpleImage(fileinput);
 imageB = new SimpleImage(fileinput);
 imageRa = new SimpleImage(fileinput);
 imageWin = new SimpleImage(fileinput);
 image.drawTo(imgcanvas);
}

function reset()
{
  var imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeRed()
{
  for(var pixel of imageR.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
  var imgcanvas = document.getElementById("can");
  imageR.drawTo(imgcanvas);
}

function makeGrey()
{
  for(var pixel of imageG.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("can");
  imageG.drawTo(imgcanvas);
}

//MAKE RAINBOW
function makeRainbow()
{
  
  var h = image.getHeight();
  var seg = parseInt(h)/7;
  var y;
  var R;
  var G;
  var B;
  
  for(var pixel of imageRa.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    y=pixel.getY();
    if (avg<128)
      {
        
        ///RED
       if(y >= 6*parseInt(seg))
         {
           R=2*avg;
           G=0;
           B=0;
        }
        ///ORANGE
       else if(y >= 5*parseInt(seg))
        {
           R=2*avg;
           G=0.8*avg;
           B=0;
        }
        ///YELLOW
       else if(y >= (4*parseInt(seg))){
           R=2*avg;
           G=2*avg;
           B=0;
       }
        ///GREEN
       else if(y >= (3*parseInt(seg))){
           R=0;
           G=2*avg;
           B=0;
       }
        ///BLUE
       else if (y >= (2 * parseInt(seg))) {
           R=0;
           G=0;
           B=2*avg;
       }
        ///INDIGO
       else if (y >= parseInt(seg)) {
           R=0.8*avg;
           G=0;
           B=2*avg;
       }
        ///VIOLET
       else {
           R=1.6*avg;
           G=0;
           B=1.6*avg;
        }
        
      
  }
    else{
      ///RED
      if(y >= 6*parseInt(seg))
         {
           R=255;
           G=(2*avg)-255;
           B=(2*avg)-255;
        }
       ///ORANGE
       else if(y >= 5*parseInt(seg))
        {
           R=255;
           G=(1.2*avg)-51;;
           B=(2*avg)-255;
        }
      ///YELLOW
       else if(y >= (4*parseInt(seg))){
           R=255;
           G=255;
           B=(2*avg)-255;
       }
      ///GREEN
       else if(y >= (3*parseInt(seg))){
           R=(2*avg)-255;
           G=255;
           B=(2*avg)-255;
       }
      ///BLUE
       else if (y >= (2 * parseInt(seg))) {
           R=(2*avg)-255;
           G=(2*avg)-255;
           B=255;
       } 
      ///INDIGO
       else if (y >= parseInt(seg)) {
           R=(1.2*avg)-51;
           G=(2*avg)-255;
           B=255;
       }
      ///VIOLET
       else {
           R=(0.4*avg)+153;
           G=(2*avg)-255;
           B=(0.4*avg)+153;;
        }
    }
    pixel.setRed(R);
    pixel.setGreen(G);
    pixel.setBlue(B);
  }
  var imgcanvas = document.getElementById("can");
  imageRa.drawTo(imgcanvas);
}

//MAKE WINDOWS

function makeWindows()
{
  var h = image.getHeight();
  var w = image.getWidth();
  var seg = parseInt(h)/7;
  var seg2 = parseInt(w)/3;
  var y;
  var R;
  var G;
  var B;
  for(var pixel of imageWin.values()){
    y=pixel.getY();
    x=pixel.getX();
   
    if(y>=6*parseInt(seg))
     {
        R=255;
        G=0;
        B=255;
      }
    else if((y>=4*parseInt(seg)) && (y<=5*parseInt(seg)))
      {
        R=255;
        G=0;
        B=2255;
      }
     else if((y>=2*parseInt(seg)) && (y<=3*parseInt(seg)))
      {
        R=255;
        G=0;
        B=255;
      }
    else if((y>=0*parseInt(seg)) && (y<=1*parseInt(seg)))
      {
        R=255;
        G=0;
        B=255;
      }
    else{
      R=pixel.getRed();
      G=pixel.getGreen();
      B=pixel.getBlue();
    }
    
    
    if( (x>=parseInt(seg2)) && (x<=2*parseInt(seg2)))
    {
       R=255;
       G=0;
       B=255;
       }
    pixel.setRed(R);
    pixel.setGreen(G);
    pixel.setBlue(B);
  }
  var imgcanvas = document.getElementById("can");
  imageWin.drawTo(imgcanvas);
}