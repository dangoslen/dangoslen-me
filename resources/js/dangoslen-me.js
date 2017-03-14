var application = angular.module('dangoslen-me', []);

application.directive('myDescription', ['$interval', function($interval) {
    return {
        template: '<span class="description">{<code>{{description}}</code>}</span>',
        link: function update(scope) {
            var index = 1;
            var descriptions = ['Software Engineer', 'Coffee Nerd', 'Outdoor Enthusiast', 'Musician', 'Ultimate Frisbee Player', 'Fan of Animated Movies', 'Follower of Jesus'];

            scope.description = descriptions[0];

            function updateDescription(update) {
                if(index == descriptions.length) {
                    index = 0;
                 }

                scope.description = descriptions[index];

                index++;
            }

            update = $interval(function() {
                updateDescription();
            }, 2000, descriptions.length);
          }
        };
    }]);

application.controller('EmailMeController', ['$scope', '$http', function($scope, $http) {
      $scope.sendEmail = function() {
          $http({
            method: "POST",
            url: "https://formspree.io/dan@dangoslen.me",
            data: { email: emailMeForm.email.value, name: emailMeForm.name.value, message: emailMeForm.message.value }
          });
        };
    }]);
