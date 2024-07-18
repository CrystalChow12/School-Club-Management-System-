import { connectionStart } from '$lib/db/mysql';
import type { PageServerLoad } from './$types';
import type { ClubRow,Club } from '$lib/types';

export const load: PageServerLoad = async () => {
	let conn = await connectionStart();

	try {
		//telling the query function that its of type club
		const [data] = await conn.query<ClubRow[]>('SELECT * FROM `CLUB`;');

    	const clubs: Club[] = data.map((row) => ({
			
			name: row.name,
			ADVIS_ID: row.ADVIS_ID,
			availability: row.availability,
			level: row.level,
			type: row.type,
			description: row.description,
			time: row.time,
			day: row.day,
			location: row.location,
			fee: row.fee,
			fee_type: row.fee_type,
			size: row.size,
			class_level: row.class_level
		}));
    
		return {
			clubs
		}; 

		//console.log(rows); // results contains rows returned by server
		//console.log(fields); // fields contains extra meta data about results, if available
	} catch (err) {
		console.log(err);
		return err;
	}
  
};
