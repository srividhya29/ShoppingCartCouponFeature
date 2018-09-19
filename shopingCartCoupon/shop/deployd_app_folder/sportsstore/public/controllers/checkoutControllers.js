angular.module("sportsStore")
.controller("cartSummaryController", function ($scope, cart) {

    $scope.cartData = cart.getProducts();
    $scope.applyButtonClicked = false;
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += ($scope.cartData[i].price * $scope.cartData[i].count);
        }
        return total;
    }

    $scope.remove = function (id) {
        cart.removeProduct(id);
    }


    $scope.applyCouponClicked = function () {
        $scope.applyButtonClicked = true;
       
    }
    $scope.applycoupon = function () {
        
            console.log("applied")
            grandTotal = $scope.total() - (0.1 * $scope.total());
            return grandTotal;
    }
});
