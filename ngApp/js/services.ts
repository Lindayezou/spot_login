namespace SpotApp.Services {

  //GeolocationService
  export class GeolocationService {
    public GeolocationResource;

    constructor(
      private $resource: ng.resource.IResourceService) {
      this.GeolocationResource = $resource('/api/route/addLocation')
    }

    public create(coords) {
      return this.GeolocationResource.save(coords).$promise;
    }

    public getAll(){
      return this.GeolocationResource.query()
    }
  }


  //UserService
  export class UserService {
    private RegisterResource;
    private LoginResource;

    constructor(
      private $resource: ng.resource.IResourceService) {
      this.RegisterResource = $resource('/api/users/register')
      this.LoginResource = $resource('api/users/login')
    }

    public register(user){
      return this.RegisterResource.save(user).$promise;
    }

    public login(user){
      return this.LoginResource.save(user).$promise;
    }

  }


  angular.module('SpotApp').service('geolocationService', GeolocationService);
  angular.module('SpotApp').service('userService', UserService);

}
