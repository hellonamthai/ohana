import { GET_STUDENT } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case GET_STUDENT:
			return action.payload || false;

		default:
			return state;
	}
}
