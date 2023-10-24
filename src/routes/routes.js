import { HomePage } from "../pages/home/home";
import { PageLogin } from "../pages/auth/login";
import { Marketplace } from "../pages/marketplace/marketplace";
import { RedirectLogin } from "../pages/redirect/redirect-login";
import { WatchVideo } from "../pages/watch/watch-video";

class RouteClass {
  constructor(
    path,
    element,
    needLogin = false,
    guestOnly = false,
    required = false
  ) {
    this.path = path;
    this.element = element;
  }
}

export const routes = [
  new RouteClass("login", <PageLogin />, false, true),
  new RouteClass("home", <HomePage />, true, false),
  new RouteClass("marketplace", <Marketplace />, true, false),
  new RouteClass("watchvideo", <WatchVideo />),

  new RouteClass("*", <RedirectLogin />),
];
