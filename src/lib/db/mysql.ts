//not .server file so we cant use static, must use dynamic

import mysql from 'mysql2/promise';

import { env } from '$env/dynamic/private';

let mysqlconn: mysql.Connection; //should return undefined or connection object

export async function connectionStart() {
	if (!mysqlconn) {
		mysqlconn = await mysql
			.createConnection({
				host: env.DATABASE_HOST,
				user: env.DATABASE_USER,
				password: env.DATABASE_PASSWORD,
				database: env.DATABASE_NAME,
				port: Number(env.DATABASE_PORT)
			})
			.then();
	}
	return mysqlconn;
}
