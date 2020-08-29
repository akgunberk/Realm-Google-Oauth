import * as Realm from "realm-web";

enum mongodb {
    collection = "",
    service = "",
    database = ""
}

export const Application = new Realm.App({ id: "" });

export const Mongo = Application.services.mongodb(mongodb.service);

export const collection = Mongo.db(mongodb.database).collection(
    mongodb.collection
);

export async function LoginWithGoogle(setAuthState: any) {
    // Redirect Uri : <AppDomain>/redirect
    const RedirectUri = "http://localhost:3000/redirect"
    const credentials = Realm.Credentials.google(RedirectUri);

    Application.logIn(credentials).then((user) => {
        setAuthState({
            isLoggedIn: true,
            currentUser: user,
        });
        console.log("signed in successfully with id:" + user.id);
    });
}
