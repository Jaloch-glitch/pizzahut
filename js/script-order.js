// Bussiness Logic

function order(){

    //GETTING INPUT FROM THE FORM
    
        const name=$("input#name").val();
        const flavor=$("#pizza-flavor").val();
        const crust=$("#pizza-crust").val();
        const size=$("#pizza-size").val();
        const toppings=[];
        $.each($('input[name="toppings"]:checked'),
            function(){
                toppings.push($(this).val());
            }
        );
        let number=$("#quantity").val();

         //SETTING DIFFERENT PRICES FOR THE PIZZA FLAVORS
    
         let sizeCost;
         if(flavor === "Bbq Beef" || flavor === "Chicken Tikka" || flavor === "Hawaiian" ) {
             if(size === "Small"){
                 sizeCost = 400;
             }
             else if(size==="Medium"){
                 sizeCost = 650;
             }
             else if(size === "Large"){
                 sizeCost = 900;
             }
         }
         else if(flavor === "Grilled Pork" || flavor === "Margharita" || flavor === "Marinara" || flavor === "Pulled Pork" ){
             if(size === "Small"){
                 sizeCost = 450;
             }
             else if(size==="Medium"){
                 sizeCost = 700;
             }
             else if(size === "Large"){
                 sizeCost = 950;
             }
         }
         else if(flavor === "Mushroom" || flavor === "Original Veggie" || flavor === "Oyster" || flavor === "Pepperoni"){
             if(size === "Small"){
                 sizeCost = 500;
             }
             else if(size==="Medium"){
                 sizeCost = 800;
             }
             else if(size === "Large"){
                 sizeCost = 1100;
             }
         }
     //SETTING PRICES FOR DIFFERENT CRUST TYPES
    
     let crustCost;
     if (crust === "Gluten Free"){
         crustCost = 400;
     }
     else if( crust === "Hand Tossed"){ 
         crustCost = 220;
     }
     else if( crust === "Original"){ 
         crustCost = 150;
     }
     else if( crust === "Pan"){ 
         crustCost = 150;
     }  
     else if( crust === "Stuffed"){ 
         crustCost = 100;
     }  
     else if( crust === "Thin"){ 
         crustCost = 200;
     }
 