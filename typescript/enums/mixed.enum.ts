enum UserRole {
  Admin = 1, // 0
  User = 'user',
}



enum Role {
  UserRole = 'user',
  AdminRole, // Error
}



enum Roles {
  User = 'user',
  OfficeManager = 0, // 0
  Manager
}


enum Cars {
  Nisan,
  Ferrari,
  RedBull = 'RedBull',
}

function isCarInStore(car: Cars): boolean {
  return true;
}

isCarInStore(Cars.Nisan); // ок
isCarInStore(11231); // Error
isCarInStore('RedBull'); // Error