import { User } from "../entities/user.entity";

/**
 * Here we have covered I - Interface Segregation Principle (ISP)
 * CreateUserDto extends User entity, which means it inherits all properties of User and thats why it need
 */
export class CreateUserDto extends User {}


/**
 * Suppose a AuthDto is created which only needs a few properties of User entity and stil we extend it with User.
 * This is a violation of Interface Segregation Principle (ISP).
 * AuthDto should only have properties that are relevant to authentication, not all properties of User.
 */
