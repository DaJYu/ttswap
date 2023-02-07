<!-- 面包屑组件 -->
<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item v-for="mbx in mbx" :to="{ path: mbx.url }">{{mbx.name}}<span v-if="mbx.url==''">({{cion}})</span></span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default {
		name: "breadcrumb",
		props: {
			mbx: {
				type: Array,
				required: true
			},
			cion:String
		},
		data() {
			return {
				// cion: "ETH/BTC",
			}
		}
	}
</script>

<style>
	.el-breadcrumb {
		padding: 20px;
	}
</style>
