export class CommonConstants {
    public static Routes = {
      Login: 'login',
      ProfileDetails: 'profile-details',
      Listing: 'loan-listing',
      AddtionalDetails: 'additional-details',
      ThankYou: 'thank-you'
    };
    public static APIURL = {
        login: 'http://localhost:8080/application',
        profileGet: 'http://localhost:8080/personal-info/{applicationid}',
        profilePost: 'http://localhost:8080/personal-info',
        listingGet: 'http://localhost:8080/api/offerservice/loan-offers?applicationKey={applicationid}'
    }
}