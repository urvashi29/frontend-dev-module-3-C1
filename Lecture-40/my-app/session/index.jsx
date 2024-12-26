import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    password: "kfhirjf9ri0fhyrfu9riufrfu9rufior",
    cookieName: "ironsession/cookie",
    cookieOptions: {
      // since we are using http, so we are making false, real time we will make it true
      secure: false,
    },
  });
}
