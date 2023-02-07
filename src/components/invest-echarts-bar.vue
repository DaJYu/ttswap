<!-- 投资表格模板 -->
<template>
	<div>
		<div class="flex kData">
			<p>
				时间：
				<span>{{time}}</span>
			</p>
			<p>
				价格：
				<span :class="{'oColor':price>yPrice,'gColor':price<yPrice}">{{price}}</span>
			</p>
			<!-- <p>
				涨跌：
				<span :class="{'oColor':zd>0,'gColor':zd<0}">{{zd}}%</span>
			</p>
			<p>
				成交：
				<span>{{cj}}手</span>
			</p> -->
		</div>
		<div :ref="refName" :style="{ height: '24rem'}"></div>
	</div>
	<!-- <div :ref="refName" class="chart" /> -->
</template>

<script>
	import {
		getMinute_k
	} from "../api/index";
	import {
		getDay_k
	} from "../api/index";
	import {
		getWeek_k
	} from "../api/index";
	import {
		getMonth_k
	} from "../api/index";
	// 引入 配置完成的 echarts
	import echarts from "@/utils/echarts";
	// 引入默认配置项，

	export default {
		name: "invest-echarts-bar",
		props: {
			refName: {
				// 图例绑定的dom  一个页面中存在多个图例时不要重复
				type: String,
				required: true,
			},
			timeSel: {
				type: Number,
				required: true
			}
			// option: {
			// 	// echarts 配置项  直接从官网复制粘贴即可
			// 	required: true,
			// },
		},
		data() {
			return {
				chart: null, // echarts 实例
				time: "",
				price: "--",
				zd: "--",
				cj: "",
				yPrice: this.$store.state.yPrice,
				timer: null,
				dataArr: []
			};
		},
		watch: {
			code() {
				this.getMinute();
			},
			timeSel: {
				handler() {
					let id = this.timeSel;
					console.log(this.timeSel)
					if (id == 0) {
						this.getMinute()
					}
					if (id == 1) {
						this.getDay()
					}
					if (id == 2) {
						this.getWeek()
					}
					if (id == 3) {
						this.getMonth()
					}
				}
			},
			// 监听 echarts 变化 自动更新
			option: {
				deep: true,
				handler() {
					console.log("数据变化了，视图更新了");
					this.chart.setOption(this.chartOption);
					this.$emit("getChart", this.chart);
				},
			},
		},
		computed: {
			defaultOption() {
				//默认配置项   这里的默认配置项 只能兼容 option 第一层级的属性
				return {
					tooltip: {
						trigger: "axis",
						axisPointer: {
							type: "cross",
							label: {
								backgroundColor: "#6a7985",
							},
						},
					},
				};
			},
			chartOption() {
				// 最终配置项
				return {
					...this.defaultOption,
					...this.option
				};
			},
		},
		methods: {
			// 初始化实例
			initChart() {
				this.chart = echarts.init(this.$refs[this.refName]);
				// 当前配置项 优先级大于 默认配置项
				// console.log("当前视图的配置项", this.chartOption);
				// this.chart.setOption(this.chartOption);
				// this.$emit("getChart", this.chart);
			},
			// 自适应
			resizeHandler() {
				this.chart.resize();
			},
			getMinute() {
				getMinute_k().then(res => {
					this.dataArr = [];
					res.data.map(i => {
						i.time = i.time.slice(0, 2) + ":" + i.time.slice(2);
						var arr = [];
						arr[0] = i.time;
						arr[1] = i.price;
						arr[2] = i.price_equal;
						arr[3] = i.volume;
						this.dataArr.push(arr);
					});
					this.time = (this.dataArr[0][0]);
					this.price = this.dataArr[0][1];
					this.setEchartOption();
				});
			},
			getDay() {
				getDay_k().then(res => {
					this.dataArr = [];
					res.data.map(i => {
						i.time = i.time.slice(0, 2) + ":" + i.time.slice(2);
						var arr = [];
						arr[0] = i.time;
						arr[1] = i.price;
						arr[2] = i.price_equal;
						arr[3] = i.volume;
						this.dataArr.push(arr);
					});
					console.log(this.dataArr)
					this.time = (this.dataArr[0][0]);
					this.price = this.dataArr[0][1];
					this.setEchartOption();
				});
			},
			getWeek() {
				getWeek_k().then(res => {
					this.dataArr = [];
					res.data.map(i => {
						i.time = i.time.slice(0, 2) + ":" + i.time.slice(2);
						var arr = [];
						arr[0] = i.time;
						arr[1] = i.price;
						arr[2] = i.price_equal;
						arr[3] = i.volume;
						this.dataArr.push(arr);
					});
					this.time = (this.dataArr[0][0]);
					this.price = this.dataArr[0][1];
					this.setEchartOption();
				});
			},
			getMonth() {
				getMonth_k().then(res => {
					this.dataArr = [];
					res.data.map(i => {
						i.time = i.time.slice(0, 2) + ":" + i.time.slice(2);
						var arr = [];
						arr[0] = i.time;
						arr[1] = i.price;
						arr[2] = i.price_equal;
						arr[3] = i.volume;
						this.dataArr.push(arr);
					});
					this.time = (this.dataArr[0][0]);
					this.price = this.dataArr[0][1];
					this.setEchartOption();
				});
			},
			setEchartOption() {
				// console.log(this.dataArr.length)
				let categoryData = [];
				let valueData = [];
				for (let i = 0; i < this.dataArr.length; i++) {
					categoryData.push(this.dataArr[i][0])
					valueData.push(this.dataArr[i][1])
				}
				let that = this;
				var option = null;
				that.chart.setOption(
					(option = {
						animation: false,
						tooltip: {
							trigger: 'axis',
							position: function(pt) {
								return [pt[0], "10%"];
							},
							formatter: function(params) {
								// console.log(params)
								that.time = params[0].axisValue;
								that.price = params[0].data;
								// that.zd =
								// 	Math.round(
								// 		(Number(params[0].value[1] - that.yPrice) /
								// 			Number(params[0].value[1])) *
								// 		10000
								// 	) / 100;
								// that.cj = params[0].value[3];
							}
						},

						grid: {
							top: "30",
							left: '3',
							right: '3',
						},
						dataZoom: [{
							type: 'inside'
						}],
						xAxis: {
							data: categoryData,
							silent: false,
							splitLine: {
								show: false
							},
							splitArea: {
								show: false
							}
						},
						yAxis: {
							splitArea: {
								show: false
							},
							axisLabel: {
								fontSize: 12,
								fontFamily: "Arial",
								margin: 10,
								inside: true,
								formatter: function(params) {
									return params;
								}
							}
						},
						series: [{
							type: 'bar',
							data: valueData,
							// Set `large` for large data amount
							large: true,
							itemStyle: {
								color: '#1E67A9'
							}
						}]
					}),
					true
				);
				
				window.addEventListener("resize", this.resizeHandler);
			}

		},
		mounted() {
			this.chart = echarts.init(this.$refs[this.refName]);
			// 如果传入的 option 为空则不进行初始化
			if (!this.option || this.option === "{}") {
				return;
			}
			this.initChart();
		},
		beforeDestroy() {
			if (!this.chart) {
				return;
			}
			window.removeEventListener("resize", this.resizeHandler);
			this.chart.dispose();
			this.chart = null;
		},
		created() {
			this.getMinute();
		}
	};
</script>

<style scoped>
	.chart {
		width: 100%;
		height: 400px;
	}
</style>
