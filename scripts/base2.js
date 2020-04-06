//This is the base javascript filefunction billme()

function billme()
{
        var v1= document.order.W.value;
       // var v2= document.order.LATNH.value;
        //var v3= document.order.LAWAH.value;
        var v4= document.order.WL.value;
        //var v5= document.order.LAWL.value;
        //var v6= document.order.LAES.value;

		var v7= document.order.H.value;
		var v8=document.order.THETATNH.value;
		var v9=document.order.THETAAH.value;

		

        //These lines define the variables.
        
         var   W= parseInt(v1);
         //var   LATNH= parseInt(v2);
         //var   LAWAH= parseInt(v3);
         var   WL= parseInt(v4);
        // var   LAWL= parseInt(v5);
        // var   LAES= parseInt(v6);

		 var  H=parseFloat(v7);
		 var  THETATNH=parseInt(v8)*Math.PI/180;
		 var  THETAAH=parseInt(v9)*Math.PI/180;

		 var KG=0.5*H;
		 var KJ=0.7*0.5*H;
		 var KF=0.85*KG;
		 var GP=0.4*H;
         var GH=0.4*GP;
         
         

		var   LATNH=KJ* Math.sin(THETATNH);
		//var   LATNH=  H;
		
        var   LAWAH= KG*Math.sin(THETATNH)+GP*Math.sin(THETAAH);
        //var   LAWAH= GP;
         //var   WL= parseInt(v4);
        var LAWL = KG * Math.sin(THETATNH) + GH * Math.sin(THETAAH);
        var es = 0.087266
        var LAES = KF * Math.sin(es);
        

        

        //These lines make sure that variables 1, 2, and 3 are numbers.
            order.WTNH.value= W*0.545
			order.WAH.value= W*0.106
			order.THETAES.value = 5;
    //order.THETAES.value = 0.5 * THETATNH;
            order.subtotalBox.value= (W*0.545*LATNH+W*0.106*LAWAH+WL*LAWL)/LAES

            var JRFH=order.subtotalBox.value*Math.sin(THETATNH+es);
            var JRFV=order.subtotalBox.value*Math.cos(THETATNH+es)+W*0.545+W*0.106+WL;


            order.LATNH.value = 50;
    //order.LATNH.value=LATNH;
			order.LAWAH.value=LAWAH;
			order.LAWL.value=LAWL;
            order.LAES.value=LAES;
            order.JRF.value=Math.sqrt(JRFH*JRFH+JRFV*JRFV);
            //order.JRF.value=Math.sqrt(160.07095516597434109.0000000000000121.220);
            //order.JRF.value=order.WTNH.value+order.WAH.value+WL;

			document.order.WTNH.value=document.order.WTNH.value
			document.order.WAH.value=document.order.WAH.value
			document.order.subtotalBox.value=document.order.subtotalBox.value
            document.order.THETAES.value=document.order.THETAES.value
            //document.order.JRF.value = 50
                document.order.JRF.value=document.order.JRF.value
        

       
        
        //These lines assign function to the checkbox.
        
        
            if (document.order.discountRB[0].checked) {
                document.order.savingsBox.value= ((v1*5)+(v2*5.25)+(v3*5.00)+(v4*5.10)+(v5*5.95)+(v6*4.50)+(v7*3.50))*0.1
            }
            else if (document.order.discountRB[1].checked) {
                document.order.savingsBox.value= ((v1*5)+(v2*5.25)+(v3*5.00)+(v4*5.10)+(v5*5.95)+(v6*4.50)+(v7*3.50))*0.05
                } 
            else if (document.order.discountRB[2].checked) {
                document.order.savingsBox.value= 0
                }
        //These lines define what should be displayed in the discount box.
        
        }
        
        
        function porkImage() {
            document.getElementById("mainpic").src="images/sweetsourpork.jpg"
        }
        
        function chickenImage(){
            document.getElementById("mainpic").src="images/kpchicken.jpg"
        }
       
        function fishImage() {
            document.getElementById("mainpic").src="images/fish.jpg"
        }

        function beefImage() {
            document.getElementById("mainpic").src="images/beef.jpg"
        }
        function shrimpImage() {
            document.getElementById("mainpic").src="images/shrimp.jpg"
        }
        function vegetableImage() {
            document.getElementById("mainpic").src="images/vegetable.jpg"
        }
        
        function soupImage(){
            document.getElementById("mainpic").src="images/soup.jpg"
        }
        function restoreImage() {
            document.getElementById("mainpic").src="images/restaurant.jpg"
        }