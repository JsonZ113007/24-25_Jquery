
    function addProduct(){
      sessionStorage.setItem("price", "89.99")
      UpdateTotal();
    }
   function updateTotal(){
        $("inpt#total").val(sessionStorage.getItem("price"));
    }
