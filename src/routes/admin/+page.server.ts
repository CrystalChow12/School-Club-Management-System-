import { connectionStart } from '$lib/db/mysql';
import type { PageServerLoad } from '../advisors/$types';
import type {AdvisRow, Advisor} from '$lib/types'; 

export const load: PageServerLoad = async() => {
    let conn = await connectionStart(); 

    try {
        const [data] = await conn.query<AdvisRow[]>('SELECT * FROM `staff_advisor`;'); 

        const advisors: Advisor[] = data.map((row) => ({
            advis_id: row.advis_id,
            advis_fname: row.advis_fname,
            advis_lname: row.advis_lname,
            advis_email: row.advis_email
        }));

        //console.log(advisors); //getting this but still undefined somehow?
    
        return {
            advisors
        }; 
    } catch (err) {
        console.log(err); 
        return err; 
    }
}