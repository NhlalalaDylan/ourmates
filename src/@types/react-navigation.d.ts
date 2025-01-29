import type { User } from "~src/@types/Users";
import type { SceneName } from "~src/@types/SceneName";

export type RootStackParamList = {
    [SceneName.Swipe]: undefined;
    [SceneName.Messages]: undefined;
    [SceneName.Authentication]: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}