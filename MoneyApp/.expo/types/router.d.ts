/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/login` | `/(auth)/signup` | `/(tabs)` | `/(tabs)/add` | `/(tabs)/budget` | `/(tabs)/dashboard` | `/(tabs)/overview` | `/(tabs)/saving` | `/_sitemap` | `/add` | `/budget` | `/dashboard` | `/login` | `/overview` | `/saving` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
