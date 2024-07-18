<script lang="ts">
	export let columns: string[] = [];
</script>

<thead class="uppercase bg-grey-50">
	<tr>
		{#each columns as column}
			<th scope="col" class="px-6 py-3"> 
                {column}
            </th>
		{/each}
	</tr>
</thead>
