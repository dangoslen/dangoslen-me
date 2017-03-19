var application = angular.module('dangoslen-me', []);

application.controller('EmailMeController', ['$scope', '$http', function($scope, $http) {
      $scope.$email_response = {success: false, sent: false, text: "Haven't sent yet"};

      $scope.sendEmail = function() {
          $http({
            method: "POST",
            url: "https://formspree.io/dan@dangoslen.me",
            data: { email: emailMeForm.email.value, name: emailMeForm.name.value, message: emailMeForm.message.value }
          }).then(function($response) {
              if($response.status == 200) {
                $scope.$email_response = {success: true, sent: true, text: "Thanks for sending me an email! I'll get back to you soon."};
              }
          }, function($error) {
              $scope.$email_response = {success: false, sent: true, text: "Ruh-roh! Something went wrong. Try again!"};
          });
        };
    }]);
