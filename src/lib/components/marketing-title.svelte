<script lang="ts">
	export let title: string;
</script>

<h2>{title}</h2>

<style lang="scss">
	@import '../../../node_modules/@openc-bv/design-system/styles/vars';

	h2 {
		font-family: $font-sans;
		font-size: 2.3rem;
		font-weight: 100;
		color: $blue;
		border: none;
	}
</style>
