/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as contacts from "../contacts";
import type * as createNewProf from "../createNewProf";
import type * as findProfile from "../findProfile";
import type * as listMessages from "../listMessages";
import type * as sendMessage from "../sendMessage";
import type * as update_contacts from "../update_contacts";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  contacts: typeof contacts;
  createNewProf: typeof createNewProf;
  findProfile: typeof findProfile;
  listMessages: typeof listMessages;
  sendMessage: typeof sendMessage;
  update_contacts: typeof update_contacts;
}>;