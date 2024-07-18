import type { RowDataPacket } from 'mysql2';


//type club
export interface Club {
	name: string;
	ADVIS_ID: number;
	availability: string | null;
	level?: string; //also means | null
	type?: string;
	description?: string;
	time?: string;
	day?: string;
	location?: string;
	fee?: number;
	fee_type?: string;
	size?: number;
	class_level: string;
}

export interface Advisor {
	advis_id: number;
	advis_fname?: string;
	advis_lname?: string;
	advis_email?: string;
}

export interface Student {}

export interface Advisor {}

//**************************EXPORTS ********************* */
export interface ClubRow extends RowDataPacket, Club {} //take everything from rowdatapacket and club type. club row returns mysql stuff

export interface AdvisRow extends RowDataPacket, Advisor{}
