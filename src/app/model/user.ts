export class User {
  id: string;
  email: string;
  country: string;
  displayName: string;
  followers = { total: 0 };
  images = [{}];
}
