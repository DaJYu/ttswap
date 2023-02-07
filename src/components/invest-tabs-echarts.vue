<!-- 投资详情tabs组件 -->
<template>
	<el-tabs class="tab-top" v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="投资额" name="optional">
			<template>
				<ul class="currency" @click="currencyClick" v-if="currencyList.length">
					<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
						{{item.name}}
					</li>
				</ul>
			</template>
			<InvestEchartsChart v-if="'optional'===activeName" refName="baseBar" :option="option" @getChart="getChart"></InvestEchartsChart>
		</el-tab-pane>
		<el-tab-pane label="成交额" name="recommend">
			<template>
				<ul class="currency" @click="currencyClick" v-if="currencyList.length">
					<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
						{{item.name}}
					</li>
				</ul>
			</template>
			<InvestEchartsChart v-if="'recommend'===activeName" refName="baseBar1" :option="option"></InvestEchartsChart>
		</el-tab-pane>
		<el-tab-pane label="收益" name="star">
			<template>
				<ul class="currency" @click="currencyClick" v-if="currencyList.length">
					<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
						{{item.name}}
					</li>
				</ul>
			</template>
			<InvestEchartsChart v-if="'star'===activeName" refName="baseBar2" :option="option"></InvestEchartsChart>
		</el-tab-pane>
		<el-tab-pane label="收益率" name="mainStream">
			<template>
				<ul class="currency" @click="currencyClick" v-if="currencyList.length">
					<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}" :id="item.name">
						{{item.name}}
					</li>
				</ul>
			</template>
			<InvestEchartsChart v-if="'mainStream'===activeName" refName="baseBar3" :option="lineOption"></InvestEchartsChart>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
	import InvestEchartsChart from '@/components/invest-echarts-bar'
	export default {
		name: "invest-tabs-echarts",
		data() {
			return {
				activeName: 'optional',
				dateList: [],
				currencyList: [],
				styles: 'USDT',
				xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				seriesData: [120, 200, 150, 80, 70, 110, 130],
				chart: null

			};
		},
		components: {
			InvestEchartsChart
		},
		computed: {
			option() {
				let barData = {
				  title: {
				    text: 'ETH/BTC'
				  },
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: this.xAxisData,
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: 'Direct',
						type: 'bar',
						barWidth: '60%',
						data: this.seriesData,
					}],
				}
				return barData;
			},
			lineOption(){
				let option = {
				  title: {
				    text: 'ETH/BTC'
				  },
				  tooltip: {
				    trigger: 'axis'
				  },
				  grid: {
				    left: '3%',
				    right: '4%',
				    bottom: '3%',
				    containLabel: true
				  },
				  xAxis: {
				    type: 'category',
				    boundaryGap: false,
				    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				  },
				  yAxis: {
				    type: 'value'
				  },
				  series: [
				    {
				      name: 'Email',
				      type: 'line',
				      stack: 'Total',
				      data: [120, 132, 101, 134, 90, 230, 210]
				    }
				  ]
				};
				return option;
			}
		},
		mounted() {
			this.currency()
		},
		created() {
			this.hotCoin()
		},
		methods: {
			handleClick(tab, event) {
				this.xAxisData.push("test");
				this.seriesData.push(100);
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
				this.styles = e.srcElement.id
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
			},

			// 获取子组件 echarts 的实例
			getChart(chart) {
				console.log("获取子组件 echarts 的实例", chart);
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
