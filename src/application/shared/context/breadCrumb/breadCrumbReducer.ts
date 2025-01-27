import { BreadCrumbState } from "./BreadCrumbProvider";


type BreadCrumbAction =
    | { type: "SET_BREADCRUMB"; payload: string[] }
    | { type: "CLEAR_BREADCRUMB" };

export const breadCrumbReducer = (
    state: BreadCrumbState,
    action: BreadCrumbAction
): BreadCrumbState => {

    switch (action.type) {
        case "SET_BREADCRUMB":
            return {
                categories: action.payload
            };
        case "CLEAR_BREADCRUMB":
            return {
                categories: []
            };
        default:
            return state;
    }
};