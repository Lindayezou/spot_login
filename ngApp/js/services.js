var SpotApp;
(function (SpotApp) {
    var Services;
    (function (Services) {
        var GeolocationService = (function () {
            function GeolocationService($resource) {
                this.$resource = $resource;
                this.GeolocationResource = $resource('/api/route/addLocation');
            }
            GeolocationService.prototype.create = function (coords) {
                return this.GeolocationResource.save(coords).$promise;
            };
            GeolocationService.prototype.getAll = function () {
                return this.GeolocationResource.query();
            };
            return GeolocationService;
        }());
        Services.GeolocationService = GeolocationService;
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.RegisterResource = $resource('/api/users/register');
                this.LoginResource = $resource('api/users/login');
            }
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.login = function (user) {
                return this.LoginResource.save(user).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('SpotApp').service('geolocationService', GeolocationService);
        angular.module('SpotApp').service('userService', UserService);
    })(Services = SpotApp.Services || (SpotApp.Services = {}));
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0E4Q2hCO0FBOUNELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQThDekI7SUE5Q2lCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFHMUI7WUFHRSw0QkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQy9DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUNoRSxDQUFDO1lBRU0sbUNBQU0sR0FBYixVQUFjLE1BQU07Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxDQUFDO1lBRU0sbUNBQU0sR0FBYjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pDLENBQUM7WUFDSCx5QkFBQztRQUFELENBQUMsQUFmRCxJQWVDO1FBZlksMkJBQWtCLHFCQWU5QixDQUFBO1FBSUQ7WUFJRSxxQkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQTtnQkFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUNuRCxDQUFDO1lBRU0sOEJBQVEsR0FBZixVQUFnQixJQUFJO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUVNLDJCQUFLLEdBQVosVUFBYSxJQUFJO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDaEQsQ0FBQztZQUVILGtCQUFDO1FBQUQsQ0FBQyxBQWxCRCxJQWtCQztRQWxCWSxvQkFBVyxjQWtCdkIsQ0FBQTtRQUdELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWhFLENBQUMsRUE5Q2lCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBOEN6QjtBQUFELENBQUMsRUE5Q1MsT0FBTyxLQUFQLE9BQU8sUUE4Q2hCIn0=