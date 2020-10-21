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