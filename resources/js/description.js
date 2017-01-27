angular.module('dangoslen-me', [])
    .directive('myDescription', ['$interval', function($interval) {
        return {
            template: '<span class="description">{<code>{{description}}</code>}</span>',
            link: function update(scope) {
                var index = 1;
                var descriptions = ['Practicing Software Engineer', 'Coffee Nerd', 'Outdoor Enthusiast', 'Musician', 'Ultimate Frisbee Player', 'Fan of Animated Movies', 'Follower of Jesus'];
                
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
    }])
    .directive('modal', [function() {
        return {
            scope: {
            	open: '=',
                title: '@'
            },
            template: 
                '<div class="modal-overlay"><div class="container modal-container"><div class="modal-content"><div class="pull-right clear"><a id="close-button" ng-click="open=false"><i class="fa fa-times" aria-hidden="true"></i></a></div><h2>{{title}}</h2><ng-transclude></ng-transclude></div></div></div>',
            transclude: true
        };
    }]);
    
