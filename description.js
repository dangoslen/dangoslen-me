angular.module('dangoslen-me', [])
    .directive('DescriptionDirective', ['$interval'], 
        return function($interval) {
            var index = 0;
            var desecriptions = ['Practicing Software Engineer.', 'Coffee Nerd.', 'Outdoor enthusiast.', 'Music lover and maker.'];
            
            $interval(updateDescription, 2000);
            
            function updateDescritpion() {
                if(index == descriptions.length) {
                    index = 0;
                }
                
                description = descriptions[index];
                
                index++;
            }
        
        });