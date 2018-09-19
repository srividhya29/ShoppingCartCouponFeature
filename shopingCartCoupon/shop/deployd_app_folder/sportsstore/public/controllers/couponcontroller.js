
angular.module("sportsStore")

    .controller("couponcontroller", function ($scope, cart) {
        console.log("jaskjk")

        $scope.makeid = function () {
            console.log("hi")
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            addCouponToFactory(text);
            return text;

        } 
       
        addCouponToFactory = function (coupon) {

            cart.getCoupon(coupon);
        }




    })
   

   





    