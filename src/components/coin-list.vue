<!-- 币榜行情组件 -->
<template>
	<el-tabs class="tab-top" v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="热币榜" name="hotCoin">
			<template>
				<el-table :data="hotData" stripe style="width: 100%">
					<el-table-column prop="pair" label="交易对"></el-table-column>
					<el-table-column prop="last_price" label="最新价" width="180"></el-table-column>
					<el-table-column prop="cgabge" label="涨幅"></el-table-column>
					<el-table-column prop="high" label="最高价"></el-table-column>
					<el-table-column prop="low" label="最低价"></el-table-column>
					<el-table-column prop="day_vol" label="24H量"></el-table-column>
					<el-table-column prop="day_turnover" label="24H成交额"></el-table-column>
					<el-table-column prop="action" label="操作">
						<template slot-scope="scope">
							<el-link :underline="false" href="transaction" type="primary">交易</el-link>
							<!-- <el-button @click="handleClicks(scope.row)" type="text" size="small">交易</el-button> -->
						</template>
					</el-table-column>
				</el-table>
			</template>
		</el-tab-pane>
		<el-tab-pane label="新币榜" name="newCoin">
			<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
		</el-tab-pane>
		<el-tab-pane label="成交额榜" name="turnover">
			<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
		</el-tab-pane>
		<el-tab-pane label="热门合约榜" name="contracts">
			<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
		</el-tab-pane>
		<el-tab-pane label="日涨幅榜" name="cgabge">
			<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
	import BasicsTable from '@/components/table/basics-table'
	export default {
		data() {
			return {
				activeName: 'hotCoin',
				hotData: [],
				dateList: [],
				headerList: []

			};
		},
		components: {
			BasicsTable
		},
		created() {
			this.hotCoin()
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab.name, event.path);
				if (tab.name=="hotCoin") {
					this.hotCoin()
				}
				if (tab.name=="newCoin") {
					this.$http({
						url: this.$http.adornUrl("/table/newCoin"),
						method: "get",
					}).then(({data}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;
						
					});
				}
				if (tab.name=="turnover") {
					this.$http({
						url: this.$http.adornUrl("/table/turnover"),
						method: "get",
					}).then(({data}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;
						
					});
				}
				if (tab.name=="contracts") {
					this.$http({
						url: this.$http.adornUrl("/table/contracts"),
						method: "get",
					}).then(({data}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;
						
					});
				}
				if (tab.name=="cgabge") {
					this.$http({
						url: this.$http.adornUrl("/table/cgabge"),
						method: "get",
					}).then(({data}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;
						
					});
				}
			},
			hotCoin(){
				this.$http({
					url: this.$http.adornUrl("/table/hotCoin"),
					method: "get",
				}).then(({data}) => {
					this.hotData = data.data;
					
				});
			},
			handleClicks(row){
				console.log(row)
			}
		}
	};
</script>

<style>
	.tab-top {
		background: #fff;
		margin-top: 20px;
		padding: 20px;
	}
</style>
