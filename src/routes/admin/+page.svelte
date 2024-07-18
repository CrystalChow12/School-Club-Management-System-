<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import { Table, TableBody, TableBodyCell, TableHead, TableRow } from '$lib/components/table';

	const columns = ['Advisor ID', 'First Name', 'Last Name', 'Email'];
</script>

<Table>
	<TableHead {columns} />
	<TableBody>
		{#each data.advisors as Advisor}
			<TableRow>
				<TableBodyCell>{Advisor.advis_id}</TableBodyCell>
				<TableBodyCell>{Advisor.advis_fname}</TableBodyCell>
				<TableBodyCell>{Advisor.advis_lname}</TableBodyCell>
				<TableBodyCell>{Advisor.advis_email}</TableBodyCell>
			</TableRow>
		{/each}
	</TableBody>
</Table>
