//This is the base javascript filefunction billme()

function billme()
{
        var v1= document.order.W.value;
        var v2= document.order.LATNH.value;
        var v3= document.order.LAWAH.value;
        var v4= document.order.WL.value;
        var v5= document.order.LAWL.value;
        var v6= document.order.LAES.value;


        //These lines define the variables.
        
         var   W= parseFloat(v1);
         var   LATNH= parseFloat(v2);
         var   LAWAH= parseFloat(v3);
         var   WL= parseFloat(v4);
         var   LAWL= parseFloat(v5);
         var   LAES= parseFloat(v6);

        //These lines make sure that variables 1, 2, and 3 are numbers.
            order.WTNH.value= W*0.545
			order.WAH.value= W*0.106
            order.subtotalBox.value= (W*0.545*LATNH+W*0.106*LAWAH+WL*LAWL)/LAES

			document.order.WTNH.value=document.order.WTNH.value
			document.order.WAH.value=document.order.WAH.value
			//document.order.subtotalBox.value=document.order.subtotalBox.value
	              document.order.subtotalBox.value=document.order.subtotalBox.value.toFixed(2);
        
            if (document.order.discountRB[0].checked) {
                document.order.subtotalBox.value= (order.subtotalBox.value)*0.9
                }
            else if (document.order.discountRB[1].checked) {
                document.order.subtotalBox.value= (order.subtotalBox.value)*0.95
                }
       
        
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
