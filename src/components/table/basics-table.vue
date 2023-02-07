<!-- 基础表格模板 -->
<template>
	<el-table :data="dateList" stripe style="width: 100%">
		<!-- {{dateList}} -->
		<el-table-column v-for="item in headerList" :prop="item.id" :label="item.name">
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: 'basics-table',
		props: {
			dateList: Array,
			headerList: Array
		}
	}
</script>

<style>
</style>
