<script lang="ts">
	import "the-new-css-reset/css/reset.css";
    import "$lib/styles/layout.css";
	const { children } = $props();
</script>

{@render children()}
