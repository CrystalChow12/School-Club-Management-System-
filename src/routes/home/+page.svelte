<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	let isDropDownOpen = false;

</script>

{#each data.clubs as club}
	<p>{club.class_level}</p>
{/each}







<!-- <pre>{(JSON.stringify(data,null,2))}</pre> -->
