

      angular.module('angularjsSimpleWebsiteApp', ['ngRoute']).config(function(
          $routeProvider) {
          $routeProvider.when('/', {
              templateUrl: './views/main.html'
          });
          $routeProvider.when('/settings', {
              templateUrl: './views/settings.html'
          });
          $routeProvider.when('/teamstats', {
              templateUrl: './views/teamstats.html'
          });
          $routeProvider.when('/dashboard', {
              templateUrl: './views/dashboard.html',
              controller: 'aboutCtrl',
          });
          $routeProvider.otherwise({
              redirectTo: '/'
          });
      });
      angular.module('angularjsSimpleWebsiteApp').controller('NavCtrl', [
          '$scope', '$location', NavCtrl
      ])

      function NavCtrl($scope, $location) {
          var nc = this
          var foo = '' // by declaring this variable in an outer controller, I can guarantee that any inner controllers can access it too.
              // $routeChangeSuccess is an event that is fired,
              // when the app has switched from one route to another.
          $scope.$on('$routeChangeSuccess', function() {
              nc.locationPath = $location.path();
              console.log('locationPath: ' + nc.locationPath);
          });
      }
      angular.module('angularjsSimpleWebsiteApp').controller('aboutCtrl',
          function($scope) {
              $scope.aboutText =
                  'Every page on this site is embedded inside the index.html';
          });
          
          
          
          
          
          
          
          
          
          
          
       //// dashboard controller
      angular.module('angularjsSimpleWebsiteApp').controller('dashCtrl', dashCtrl)

      function dashCtrl() {
          console.log('dash is workin')
          
          var dash = this;
          
          dash.currentRep = {}
          dash.newRep = {}
          
          dash.Employees = [{
              name: "Jack",
              quota: 5000,
              actual: 2000,
              rotate : "transform: rotate("+ (2/5)*360    +"deg)",
            
              fifthTick: Math.max(5000, 3200) * 1.25,
              fourthTick: Math.max(5000, 3200) * 1,
              thirdTick: Math.max(5000, 3200) * .75,
              secondTick: Math.max(5000, 3200) * .5,
              firstTick: Math.max(5000, 3200) * .25,
              height: (2000 / 5000) * 240
          }, {
              name: "Jill",
              quota: 2000,
              actual: 900,
              rotate : "transform: rotate("+ (.9/2)*360  +"deg)",

             
              fifthTick: Math.max(2000, 1200) * 1.25,
              fourthTick: Math.max(2000, 1200) * 1,
              thirdTick: Math.max(2000, 1200) * .75,
              secondTick: Math.max(2000, 1200) * .5,
              firstTick: Math.max(2000, 1200) * .25,
              height: (800 / 2000) * 240
          }]

          function Salesrep(attributes) {
              this.name = attributes.name;
              this.quota = attributes.quota;
              this.actual = attributes.actual;
              
              this.fifthTick = Math.max(attributes.quota, attributes.actual) * 1.25;
              this.fourthTick = Math.max(attributes.quota, attributes.actual) * 1;
              this.thirdTick = Math.max(attributes.quota, attributes.actual) * .75;
              this.secondTick = Math.max(attributes.quota, attributes.actual) * .5;
              this.firstTick = Math.max(attributes.quota, attributes.actual) * .25;
              
              this.height = (attributes.actual / attributes.quota) * 240;
              this.rotate = "transform: rotate("+ (attributes.actual / attributes.quota) * 360 +"deg)";
          }
          
          
          
          
          dash.addRep = function() {
              dash.Employees.push(new Salesrep(dash.newRep))
              dash.newRep = {} // clears out the form
          }
          
          dash.showRep = function(rep, $index) {
              dash.currentRep = rep;
        
          }
          
          
          dash.editRep = function() {
          }
          
          dash.removeRep = function () {
              
              
              
          }
        
        
      }
