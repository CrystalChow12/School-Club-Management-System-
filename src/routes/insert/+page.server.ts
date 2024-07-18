import { connectionStart } from "$lib/db/mysql";
import type { PageServerLoad } from "./$types";
import type { ClubRow, Club } from "$lib/types";

export const load: PageServerLoad = async () => {
	let conn = await connectionStart();

}