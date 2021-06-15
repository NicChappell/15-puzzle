import { EventEmitter } from "events";

class Game extends EventEmitter {
  //   constructor(token, client_id, client_secret, redirect_uri, code) {
  //     super();
  //     this.token = token;
  //     this.client_id = client_id;
  //     this.client_secret = client_secret;
  //     this.redirect_uri = redirect_uri;
  //     this.code = code;
  //   }
  eventTest() {
    this.emit("event");
  }
}

export default Game;
