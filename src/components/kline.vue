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
			<p>
				涨跌：
				<span :class="{'oColor':zd>0,'gColor':zd<0}">{{zd}}%</span>
			</p>
			<p>
				成交：
				<span>{{cj}}手</span>
			</p>
		</div>
		<div id="Zline" key="Zline"></div>
	</div>
</template>

<script>
	import {
		getMinute_k
	} from "../api/index";
	import echarts from "@/utils/echarts";
	export default {
		name: 'kline',
		data() {
			return {
				myChart: null, //折线容器
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
			}
		},
		computed: {},
		mounted() {
			this.myChart = echarts.init(document.getElementById("Zline"));
		},
		beforeDestroy() {
			if (!this.myChart) {
				return;
			}
			window.removeEventListener("resize", this.resizeHandler);
			// this.myChart.dispose();
			// this.myChart = null;
		},
		created() {
			//10秒
			this.getMinute();
			this.timer = setInterval(() => {
				this.getMinute();
			}, 10000);
		},
		destroyed() {
			clearInterval(this.timer);
		},
		methods: {
			// 自适应
			resizeHandler() {
				this.myChart.resize();
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
					this.zd =
						Math.round(
							((Number(this.price) - this.yPrice) / Number(this.price)) * 10000
						) / 100;
					this.cj = this.dataArr[0][3];
					this.setEchartOption();
				});
			},
			setEchartOption() {
				let that = this;
				var option = null;
				that.myChart.setOption(
					(option = {
						animation: false,
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'cross'
							},
							position: function(pt) {
								return [pt[0], "10%"];
							},
							formatter: function(params) {
								that.time = params[0].value[0];
								that.price = params[0].value[1];
								that.zd =
									Math.round(
										(Number(params[0].value[1] - that.yPrice) /
											Number(params[0].value[1])) *
										10000
									) / 100;
								that.cj = params[0].value[3];
							}
						},
						axisPointer: {
							//k线柱状相连
							link: {
								xAxisIndex: "all"
							},
							label: {
								backgroundColor: "#ccc"
							}
						},
						grid: [{
								left: "3",
								right: "3",
								top: "6%",
								height: "70%"
							},
							{
								left: "3",
								right: "3",
								top: "84%",
								height: "18%"
							}
						],
						xAxis: [{
								type: "category",
								boundaryGap: false,
								splitLine: {
									show: true,
									lineStyle: {
										color: "#eee"
									}
								},
								axisLine: {
									lineStyle: {
										color: "#D6D6D6"
									}
								}
							},
							{
								type: "category",
								gridIndex: 1,
								scale: true,
								boundaryGap: false,
								axisLine: {
									lineStyle: {
										color: "#777"
									}
								},
								splitNumber: 20,
								axisPointer: {
									type: "shadow",
									label: {
										show: false
									},
									triggerTooltip: true,
									handle: {
										show: true,
										margin: 30,
										color: "#D6D6D6"
									}
								}
							}
						],
						yAxis: [{
								min: function(value) {
									return Math.round(value.min * 100) / 100;
								},
								max: function(value) {
									return Math.round(value.max * 1.02 * 100) / 100;
								},
								type: "value",
								position: "left",
								zlevel: 1,
								axisLabel: {
									fontSize: 12,
									fontFamily: "Arial",
									margin: 10,
									inside: true,
									formatter: function(params) {
										return params;
									}
								},
								axisLine: {
									show: true,
									lineStyle: {
										width: 1,
										color: function(v) {
											if (v == that.yPrice) {
												return "#A5A5A8";
											} else if (v < that.yPrice) {
												return "#12E313";
											} else {
												return "#FF3B52";
											}
										}
									}
								},
								axisTick: {
									show: false
								},
								margin: 1,
								splitLine: {
									lineStyle: {
										color: "#eee"
									},
									show: true
								},
								axisPointer: {
									show: true,
									type: "line",
									snap: true,
									label: {
										precision: 2
									}
								}
							},
							{
								scale: true,
								gridIndex: 1,
								splitNumber: 2,
								axisLabel: {
									show: false
								},
								axisLine: {
									show: false
								},
								axisTick: {
									show: false
								},
								splitLine: {
									show: false
								}
							}
						],
						dataZoom: [{
							type: "inside",
							xAxisIndex: [0, 1],
							start: 0,
							end: 100
						}],
						series: [{
								name: "Volume", //柱状
								type: "bar",
								// barWidth:1,
								xAxisIndex: 1,
								yAxisIndex: 1,
								itemStyle: {
									color: function(v) {
										// console.log(v)
										if (v.value[1] == v.value[2]) {
											return "#A5A5A8";
										} else if (v.value[1] < v.value[2]) {
											return "#63F763";
										} else {
											return "#FF576A";
										}
									}
								},
								emphasis: {
									itemStyle: {
										color: "#140"
									}
								},
								data: this.dataArr
							},
							{
								name: "",
								type: "line",
								smooth: true,
								symbol: "none",
								sampling: "average",
								itemStyle: {
									normal: {
										color: "#FDE7E1",
										lineStyle: {
											color: "#FAA296",
											width: 1
										}
									}
								},
								areaStyle: {},
								data: this.dataArr
							}
						]
					}),
					true
				);
				window.addEventListener('resize', this.resizeHandler);
			}
		}
	};
</script>

<style scoped lang="less">
	#Zline{
		width: 100%;
		height: 25rem;
	}
	.flex {
		display: flex;
		align-items: center;
	}

	/* #Zline{
	width: 100%;
	height: 25rem;
} */
	.kData {
		padding: 0 2rem 0.4rem;

		p {
			margin-right: 0.266666rem;
		}

		color: rgb(142, 142, 147);

		.oColor {
			color: rgb(255, 69, 0);
		}

		.gColor {
			color: rgb(5, 170, 59);
		}

		.pColor {
			color: rgb(255, 62, 139);
		}

		.yColor {
			color: rgb(255, 172, 0);
		}

		.bColor {
			color: rgb(39, 224, 239);
		}
	}
</style>
