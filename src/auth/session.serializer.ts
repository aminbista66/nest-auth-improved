// import { PassportSerializer } from "@nestjs/passport";
// import { UserService } from "src/user/user.service";
// import { User } from "./types";

// export class SessionSerializer extends PassportSerializer {
//     constructor(private readonly userService: UserService) {
//         super();
//     }

//     serializeUser(user: any, done: (err, user: any) => void) {
//         console.log('serializeUser', user)
//         done(null, user)
//     }

//     deserializeUser(user: any, done: (err, user: any) => void ) {
//         const userfromDB = this.userService.getUser(user.username);

//         return userfromDB ? done(null, userfromDB) : done(null, null)
//     }
// }