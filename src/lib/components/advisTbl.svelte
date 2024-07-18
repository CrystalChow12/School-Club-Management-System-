<script lang="ts">
    import { Advisor } from '$lib/types';
    export let advisors: Advisor[];
</script>

<Table>
    <thead>
        <tr>
        <th>Advisors</th>
        <th>Role</th>
        <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {#each advisors as advisor}
        <tr>
            <td>{advisor.name}</td>
            <td>{advisor.role}</td>
            <td>{advisor.email}</td>
        </tr>
        {/each}
    </tbody>
    
</Table>