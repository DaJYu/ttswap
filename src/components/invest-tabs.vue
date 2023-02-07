<!-- 投资首页tabs组件 -->
<template>
	<el-tabs class="tab-top" v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="自选" name="optional">
		<template>
			<ul class="currency" @click="currencyClick" v-if="currencyList.length">
				<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
					{{item.name}}</li>
			</ul>
		</template>
			<InvestTable :dateList="dateList"></InvestTable>
		</el-tab-pane>
		<el-tab-pane label="推荐" name="recommend">
		<template>
			<ul class="currency" @click="currencyClick" v-if="currencyList.length">
				<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
					{{item.name}}</li>
			</ul>
		</template>
			<InvestTable :dateList="dateList"></InvestTable>
		</el-tab-pane>
		<el-tab-pane label="明星" name="star">
		<template>
			<ul class="currency" @click="currencyClick" v-if="currencyList.length">
				<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
					{{item.name}}</li>
			</ul>
		</template>
			<InvestTable :dateList="dateList"></InvestTable>
		</el-tab-pane>
		<el-tab-pane label="主流" name="mainStream">
		<template>
			<ul class="currency" @click="currencyClick" v-if="currencyList.length">
				<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
					{{item.name}}</li>
			</ul>
		</template>
			<InvestTable :dateList="dateList"></InvestTable>
		</el-tab-pane>
		<el-tab-pane label="创新" name="innovate">
		<template>
			<ul class="currency" @click="currencyClick" v-if="currencyList.length">
				<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
					{{item.name}}</li>
			</ul>
		</template>
			<InvestTable :dateList="dateList"></InvestTable>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
	import InvestTable from '@/components/table/invest-table'
	export default {
		name: "invest-tabs",
		data() {
			return {
				activeName: 'recommend',
				dateList: [],
				currencyList: [],
				styles: 'USDT'

			};
		},
		components: {
			InvestTable
		},
		mounted() {
			this.currency()
		},
		created() {
			this.hotCoin()
		},
		methods: {
			handleClick(tab, event) {
				if (tab.name == "hotCoin") {
					this.hotCoin()
				}
				if (tab.name == "newCoin") {
					this.$http({
						url: this.$http.adornUrl("/table/newCoin"),
						method: "get",
					}).then(({
						data
					}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;

					});
				}
				if (tab.name == "turnover") {
					this.$http({
						url: this.$http.adornUrl("/table/turnover"),
						method: "get",
					}).then(({
						data
					}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;

					});
				}
				if (tab.name == "contracts") {
					this.$http({
						url: this.$http.adornUrl("/table/contracts"),
						method: "get",
					}).then(({
						data
					}) => {
						console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;

					});
				}
				if (tab.name == "cgabge") {
					this.$http({
						url: this.$http.adornUrl("/table/cgabge"),
						method: "get",
					}).then(({
						data
					}) => {
						// console.log(data.data[1].cont)
						this.dateList = data.data[1].cont;
						this.headerList = data.data[0].header;

					});
				}
			},
			hotCoin() {
				this.$http({
					url: this.$http.adornUrl("/table/hotCoin"),
					method: "get",
				}).then(({
					data
				}) => {
					this.dateList = data.data;

				});
			},
			currencyClick(e) {
				this.styles=e.srcElement.id
				// console.log(e.srcElement.id)
			},
			currency() {
				this.$http({
					url: this.$http.adornUrl("/currency"),
					method: "get",
				}).then(({
					data
				}) => {
					this.currencyList = data.data;


				});
			}
		}
	};
</script>

<style scoped lang="less">
	.tab-top {
		background: #fff;
		margin-top: 20px;
		padding: 20px;
	}

	.currency {
		padding-bottom: 20px;

		li {
			margin: 0 20px;
			height: 40px;
			box-sizing: border-box;
			line-height: 40px;
			display: inline-block;
			list-style: none;
			font-size: 14px;
			font-weight: 500;
			color: #303133;
			cursor: pointer;
			position: relative;

			&:hover {
				color: #409EFF;
				border-bottom: 2px solid #409EFF;
			}
		}

		.currency-active {
			color: #409EFF;
			border-bottom: 2px solid #409EFF;
		}

	}
</style>
