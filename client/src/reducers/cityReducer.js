import { GET_CITY } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case GET_CITY:
			return action.payload || false;

		default:
			return state;
	}
}
