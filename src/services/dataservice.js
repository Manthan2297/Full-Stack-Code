import NotificationService, { NOTIF_WISHLIST_CHANGED } from "./notification";

let ns = new NotificationService();
let instance = null;
var wishlist = [];
class Dataservice {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  addWishlistItem = (item) => {
    wishlist.push(item);
    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
  };

  itemOnWishlist = (item) => {
    for (var x = 0; x < wishlist.length; x++) {
      if (wishlist[x]._id === item._id) {
        return true;
      }
    }
    return false;
  };

  removeWishlistItem = (item) => {
    for (var x = 0; x < wishlist.length; x++) {
      if (wishlist[x]._id === item._id) {
        wishlist.splice(x, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
        break;
      }
    }
  };
}

export default Dataservice;
