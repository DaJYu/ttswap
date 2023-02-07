<!-- 投资表格模板 -->
<template>
	<el-table :data="dateList" stripe style="width: 100%">
		<el-table-column prop="pair" label="交易对"></el-table-column>
		<el-table-column prop="last_price" label="最新价" width="180"></el-table-column>
		<el-table-column prop="cgabge" label="涨幅"></el-table-column>
		<el-table-column prop="high" label="最高价"></el-table-column>
		<el-table-column prop="low" label="最低价"></el-table-column>
		<el-table-column prop="day_vol" label="24H量"></el-table-column>
		<el-table-column prop="day_turnover" label="24H成交额"></el-table-column>
		<el-table-column prop="action" label="操作">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">{{name}}</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: 'invest-table',
		props: {
			dateList: Array
		},
		data() {
			return{
				name:"投资"
			}
		},
		created() {
			let geturl = window.location.href
			let getqyinfo = geturl.split('/')[3]
		},
		methods: {
			handleClick(e){
				
			}
		}
	}
</script>

<style>
</style>
