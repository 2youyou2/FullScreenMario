if(angular) {
    angular.module('captcha-mario', [])
        .directive('captchaMario', [function () {
            return {
                template: '<iframe data-ng-src="{{src}}" style="height: 100%; border: none;"/>',
                scope: {
                    src: '=',
                    onDead: '&',
                    onLevelComplete: '&'
                },
                link: function(scope) {

                    scope.src = scope.src || 'vendor/fullScreenMario/Dist/index.html';

                    addEventListener("message", function (e) {
                        switch(e.data.event) {
                            case 'dead':
                                scope.onDead();
                                break;
                            case 'levelComplete':
                                scope.onLevelComplete();
                                break;
                        }
                        scope.$apply();
                    });
                }
            }
        }]);
}
