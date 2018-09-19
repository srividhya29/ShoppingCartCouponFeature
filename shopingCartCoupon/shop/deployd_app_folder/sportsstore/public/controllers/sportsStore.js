angular.module("sportsStore")
 //.constant("dataUrl", "http://localhost:2403/products")
 //.constant("orderUrl", "http://localhost:2403/orders")

     .constant("dataUrl", "http://localhost:4200/products")
     .constant("orderUrl", "http://localhost:4200/orders")
    .controller("sportsStoreCtrl", function ($scope, $http, $location,
        dataUrl, orderUrl, cart) {

        $scope.data = {
        };
       

       

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });

        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails); //user details - form details
            order.products = cart.getProducts();//get the products purchased (here product is a parameter in order table to store productd)
            order.coupon = cart.setCoupon();
            $http.post(orderUrl, order)
                .success(function (data) {
                    $scope.data.orderId = data.id; // the watch for this is in thankyou page,the id is a id created by server,it is not the product id,it is aunique random id generated for a post message by the server to track our order
                    //orderId is a local pointer it can be replaced by x also,if its changed as x here then change as x in thankyoupage also
                    
                    console.log("coupon sent");
                    cart.getProducts().length = 0;
                })
                .error(function (error) {
                    $scope.data.orderError = error;
                }).finally(function () {
                    $location.path("/complete");//$location - is a service to change path
                });
        }
        
    });
