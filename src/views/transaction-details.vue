<!-- 交易详情 -->
<template>
	<div>
		<Breadcrumb :mbx="mbx" :cion="cion"></Breadcrumb>
		<div class="site-content">
			<div class="topData flex grayColor">
				<div class="flex">
					<p>
						最高
						<span class="redColor">{{$jq(t8)}}</span>
					</p>
					<p>
						最低
						<span class="greenColor">{{$jq(t9)}}</span>
					</p>
					<p>
						成交量
						<span class="blackColor">{{t3}}万</span>
					</p>
					<p>
						成交额
						<span class="blackColor">{{t4}}亿</span>
					</p>
				</div>
			</div>
			<div class="time-select">
				<div>{{cion}}</div>
				<div>
					<template>
						<el-radio-group v-model="radio">
							<el-radio :label="1" @change="cr(1)">24H</el-radio>
							<el-radio :label="2" @change="cr(2)">7D</el-radio>
							<el-radio :label="3" @change="cr(3)">1M</el-radio>
						</el-radio-group>
					</template>
				</div>
			</div>
			<div class="kline_top flex">
				<div :class="{'ct':ct==0}" @click="cr(0)">分时</div>
				<!-- <div :class="{'ct':ct==1}" @click="cr(1)">日K</div>
				<div :class="{'ct':ct==2}" @click="cr(2)">周K</div>
				<div :class="{'ct':ct==3}" @click="cr(3)">月K</div> -->
			</div>
			<div class="kline_box">
				<Zline v-if="ct==0"></Zline>
				<div v-if="ct!=0">
					<div class="flex kData">
						<p>
							开:
							<span
								:class="open == market.yesterday_price? 'gaColor':open >market.yesterday_price?'oColor':'gColor'">{{open}}</span>
						</p>
						<p>
							收:
							<span
								:class="close == market.yesterday_price? 'gaColor':close >market.yesterday_price?'oColor':'gColor'">{{close}}</span>
						</p>
						<p>
							高:
							<span
								:class="high == market.yesterday_price? 'gaColor':high >market.yesterday_price?'oColor':'gColor'">{{high}}</span>
						</p>
						<p>
							低:
							<span
								:class="low == market.yesterday_price? 'gaColor':low >market.yesterday_price?'oColor':'gColor'">{{low}}</span>
						</p>
						<p v-if="fu!='Infinity'">
							幅:
							<span :class="fu >0? 'oColor':'gColor'">{{$jq(fu) ||pla}}%</span>
						</p>
						<p v-else>
							幅:
							<span class="oColor">--</span>
						</p>
						<p :class="ed >0? 'oColor':'gColor'">
							额:
							<span>{{ed}}</span>
						</p>
					</div>
					<div class="flex kData">
						<p v-if="m5">
							<span class="pColor">MA5：</span>
							{{m5}}
						</p>
						<p v-else>
							<span class="pColor">MA5：</span>--
						</p>
						<p v-if="m10">
							<span class="yColor">MA10：</span>
							{{m10}}
						</p>
						<p v-else>
							<span class="yColor">MA10：</span>--
						</p>
						<p v-if="m20">
							<span class="bColor">MA20：</span>
							{{m20}}
						</p>
						<p v-else>
							<span class="bColor">MA20：</span>--
						</p>
						<p v-if="m30">
							<span class="cColor">MA30：</span>
							{{m30}}
						</p>
						<p v-else>
							<span class="cColor">MA30：</span>--
						</p>
					</div>
					<div id="myChart" key="myChart"></div>
				</div>
			</div>
			<div>
				<div style="display: flow-root;">
					<div style="float: right;padding: 20px;">
						<el-button @click="qjyjm">投资</el-button>
						<!-- <el-button>交易</el-button> -->
					</div>
				</div>
				<div class="tzjyqy" style="margin: 0 25px; background:#ffffff;padding: 20px;">
					<el-row class="" :gutter="50">
						<el-col :span="10" :xs="24" class="pd-ys">
							<div class="cion-title jymrys">{{nowRate}}</div>
							<div style="font-size: 14px;">
								<div class="flex-between pd-jylj">
									<div>价格 ({{cionName1}})</div>
									<div>数量 ({{cionName}})</div>
									<div>累计 ({{cionName}})</div>
								</div>
								<div class="jymcys">
									<div class="flex-between pd-jylj" v-for="mcl in mcl">
										<div>{{mcl.jg}}</div>
										<div>{{mcl.sl}}</div>
										<div>{{mcl.lj}}</div>
									</div>
								</div>
								<div class="jymrys">
									<div class="flex-between pd-jylj" v-for="mrl in mrl">
										<div>{{mrl.jg}}</div>
										<div>{{mrl.sl}}</div>
										<div>{{mrl.lj}}</div>
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="13" :xs="24" class="pd-ys">
							<div class="cion-inp">
								<div class="flex">
									<div style="width: 80px;font-size: 14px;">买入量</div>
									<el-input v-model="cionNum" placeholder="0.0" type=""></el-input>
									<div class="cion-ys">{{cionName}}</div>
								</div>
								<div class="" style="padding:20px 0; font-size: 14px;"><span>交易额</span><span
										style="margin: 0 20px;">{{0}}</span>{{cionName1}}</div>

								<div class="pd-ys">
									<el-button size="small" style="width: 100%;" @click="mrjy()">买入</el-button>
								</div>
							</div>
							<div class="cion-inp" style="margin-top: 20px;background-color: #FDE9E9;">
								<div class="flex">
									<div style="width: 80px;font-size: 14px;">卖出量</div>
									<el-input v-model="cionNum" placeholder="0.0" type=""></el-input>
									<div class="cion-ys">{{cionName}}</div>
								</div>
								<div class="" style="padding:20px 0; font-size: 14px;"><span>交易额</span><span
										style="margin: 0 20px;">{{0}}</span>{{cionName1}}</div>

								<div class="pd-ys">
									<el-button size="small" style="width: 100%;" @click="mrjy()">卖出</el-button>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
				<div class="tzjyqy" style="display: none;margin: 0 25px; background:#ffffff">
					<div class="cion-cont">
						<div class="cion-title">选择币对及充值数额</div>
						<el-row justify="space-between">
							<el-col :span="10" :xs="24">
								<div class="flex cion-inp">
									<el-input v-model="cionNum" placeholder="0.0" type=""></el-input>
									<el-select v-model="cionName" filterable>
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
								<div class="cion-ts">
									<span>${{money}}</span>
								</div>
							</el-col>
							<el-col :span="4" :xs="24">
								<div class="" style="text-align: center;padding: 7px;">
									<div>兑换</div>
									<div class="el-icon-right" style="font-size: 30px;color: #0d5959;"></div>
								</div>
							</el-col>
							<el-col :span="10" :xs="24">
								<div class="flex cion-inp">
									<el-input v-model="cionNum1" placeholder="0.0"></el-input>
									<el-select v-model="cionName1" filterable>
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
								<div class="cion-ts"><span>${{money1}}</span></div>
							</el-col>
						</el-row>
						</el-row>
						<div class="cion-title"></div>

						<el-row justify="space-between">
							<el-col :span="6" :xs="12">
								<div class="cion-rate">
									<div>预期获得</div>
									<div>1591.1 USDC</div>
								</div>
							</el-col>
							<el-col :span="6" :xs="12">
								<div class="cion-rate">
									<div>兑换率影响</div>
									<div class="color-r">0.12%</div>
								</div>
							</el-col>
							<el-col :span="8" :xs="14">
								<div class="cion-rate">
									<div>收到的最低数额 滑点后 (0.50%)</div>
									<div>1582.68 USDC</div>
								</div>
							</el-col>
							<el-col :span="4" :xs="10">
								<div class="cion-rate">
									<div>网络费用</div>
									<div class="color-r">~$1.86</div>
								</div>
							</el-col>
						</el-row>
						<div class="cion-title"></div>

						<el-row justify="space-between" class="bColor">
							<div class="cion-title" style="padding-left: 10px;">Auto Router</div>
							<el-col :span="4" :xs="8">
								<div class="cion-rate flex">
									<img class="cion-logo" alt="ETH logo"
										src="data:image/png;base64,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">
									<div style="margin-left: 10px;"><span style="color: #bbb;">TTS</span> 100%</div>
								</div>
							</el-col>
							<el-col :span="4" :xs="8">
								<div class="cion-rate flex">
									<div class="">
										<div style="position: relative;">
											<img class="cion-logo" alt="USDC logo"
												src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png">
											<img style="position: absolute;left: -10px !important;" sizeraw="20"
												class="cion-logo" alt="WETH logo"
												src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png">
										</div>
									</div>
									<div style="margin-left: 10px;">0.05%</div>
								</div>
							</el-col>
							<el-col :span="4" :xs="8">
								<div class="cion-rate">
									<img class="cion-logo" alt="USDC logo"
										src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png">

								</div>
							</el-col>
							<el-col :span="12" :xs="24">
								<div class="cion-rate" style="color: #bbb;">
									最佳价格路由消耗的gas约为 $1.86 此路线通过考虑拆分路线、多跳和每一步的 gas 成本来优化您的总输出额。
								</div>
							</el-col>
						</el-row>
					</div>
					<div style="padding: 20px; height: 80px;">
						<div class="right cion-pay">
							<el-button class="el-buttons" v-if="true">连接钱包</el-button>
							<el-button class="el-buttons" v-if="false">钱包支付</el-button>
						</div>
					</div>
				</div>
			</div>
			<div style="padding-top: 20px;">

				<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
			</div>
			<template>
				<div class="pag-block">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-size="10" layout="total, prev, pager, next, jumper"
						:total="totalData" :pager-count="5">
					</el-pagination>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import {
		getMarket,getDay_k,getWeek_k,getMonth_k
	} from "../api/index";
	import Zline from "@/components/kline"; //折线
	import echarts from "@/utils/echarts";
	import Breadcrumb from '@/components/breadcrumb';
	import BasicsTable from '@/components/table/basics-table'
	export default {
		name: "transaction-details",
		data() {
			return {
				mrl: [],
				mcl: [],
				klw: '',
				totalData: 400,
				currentPage: 1,
				rate: '',
				nowRate: 1512.95,
				rate1: '',
				money: 0,
				balance: 0,
				money1: 0,
				balance1: 0,
				radio: 0,
				t3: "--", //成交量
				t4: "--", //成交额
				t8: "--", //最高
				t9: "--", //最低
				t13: "--", //总市值
				flag: true, //自选状态
				sendFlag: false,
				ct: 0, //选项卡
				market: {}, //默认数据
				timer: null, //定时请求
				myChart: null, //k线容器
				dataArr: [],
				open: "--",
				close: "--",
				low: "--",
				high: "--",
				ed: "--",
				fu: "--",
				m5: "--",
				m10: "--",
				m20: "--",
				m30: "--",
				url: "/kline/day_k", //日周k
				pla: 0,
				cion: "ETH/BTC",
				mbx: [{
					name: '交易',
					url: '/transaction'
				}, {
					name: '交易详情',
					url: ''
				}],
				options: [{
					value: 'ETH',
					label: 'ETH'
				}, {
					value: 'BTC',
					label: 'BTC'
				}, {
					value: 'USDT',
					label: 'USDT'
				}, {
					value: 'DAI',
					label: 'DAI'
				}, {
					value: 'USDC',
					label: 'USDC'
				}],
				cionName: 'ETH',
				cionNum: '',
				cionName1: 'USDC',
				cionNum1: '',
				dateList: [],
				headerList: []
			};
		},
		components: {
			Zline,
			Breadcrumb,
			BasicsTable
		},
		mounted() {
			// this.myChart = echarts.init(document.getElementById("myChart"));

			// this.initChart();
			// window.addEventListener('resize', this.resizeHandler);
		},
		beforeDestroy() {
			if (!this.myChart) {
				return;
			}
			window.removeEventListener("resize", this.resizeHandler);
			// this.myChart.dispose();
			// this.myChart = null;
		},
		methods: {
			mrjy() {},

			qjyjm() {
				this.$router.push('/investment/investment-details#' + this.cion);
			},
			getUrl() {
				let geturl = window.location.href
				let getqyinfo = geturl.split('#')[1]
				if (getqyinfo === '' || getqyinfo === undefined) {} else {
					this.cion = getqyinfo
					let getcion = getqyinfo.split('/')
					this.cionName = getcion[0]
					this.cionName1 = getcion[1]
					console.log(getcion)
				}
			},
			swapmrmc() {
				this.$http({
					url: this.$http.adornUrl("/transaction/transaction-volume"),
					method: "get",
				}).then(({
					data
				}) => {
					this.mrl = data.data[0].mr;
					this.mcl = data.data[0].mc;
					console.log(this.mrl)

				});
			},
			getData() {
				//默认数据
				getMarket().then(res => {
					// console.log(res.data);
					this.market = res.data;
					this.t3 = Math.round(Math.round(res.data.volume) / 100) / 100;
					this.t4 = Math.round(Math.round(res.data.turnover) / 100) / 100;
					this.t8 = res.data.highest;
					this.t9 = res.data.lowest;
					this.t13 = res.data.total_market_value;
					this.$store.dispatch("priceAction", Number(res.data.yesterday_price));
				});
			},
			cr(e) {
				if (e == 0) {
					this.radio = 0
				}
				//选项卡
				if (this.ct != e) {
					this.ct = e;
					if (e == 1) {
						getDay_k().then(res => {
							this.dataArr = [];
							res.data.map(i => {
								i.time =
									"20" +
									i.time.slice(0, 2) +
									"/" +
									i.time.slice(2, 4) +
									"/" +
									i.time.slice(4, 6);
								var arr = [];
								arr[0] = i.time;
								arr[1] = Number(i.open);
								arr[2] = Number(i.close);
								arr[3] = Number(i.low);
								arr[4] = Number(i.high);
								arr[5] = Number(i.volume);
								arr[6] =
									((Number(i.open) - Number(i.yesterday_close)) /
										Number(i.yesterday_close)) *
									100;
								arr[7] = Number(i.ma5);
								arr[8] = Number(i.ma10);
								arr[9] = Number(i.ma20);
								arr[10] = Number(i.ma30);
								this.dataArr.push(arr);
							});
							this.open = this.dataArr[0][1];
							this.close = this.dataArr[0][2];
							this.low = this.dataArr[0][3];
							this.high = this.dataArr[0][4];
							this.ed = this.dataArr[0][5];
							this.fu = this.dataArr[0][6];
							this.m5 = this.dataArr[0][7];
							this.m10 = this.dataArr[0][8];
							this.m20 = this.dataArr[0][9];
							this.m30 = this.dataArr[0][10];

							this.setEchartOption();
						});
					} else if (e == 2) {
						getWeek_k().then(res => {
							this.dataArr = [];
							res.data.map(i => {
								i.time =
									"20" +
									i.time.slice(0, 2) +
									"/" +
									i.time.slice(2, 4) +
									"/" +
									i.time.slice(4, 6);
								var arr = [];
								arr[0] = i.time;
								arr[1] = Number(i.open);
								arr[2] = Number(i.close);
								arr[3] = Number(i.low);
								arr[4] = Number(i.high);
								arr[5] = Number(i.volume);
								arr[6] =
									((Number(i.open) - Number(i.yesterday_close)) /
										Number(i.yesterday_close)) *
									100;
								arr[7] = Number(i.ma5);
								arr[8] = Number(i.ma10);
								arr[9] = Number(i.ma20);
								arr[10] = Number(i.ma30);
								this.dataArr.push(arr);
							});
							this.setEchartOption();
						});
					} else if (e == 3) {
						getMonth_k().then(res => {
							this.dataArr = [];
							res.data.map(i => {
								i.time =
									"20" +
									i.time.slice(0, 2) +
									"/" +
									i.time.slice(2, 4) +
									"/" +
									i.time.slice(4, 6);
								var arr = [];
								arr[0] = i.time;
								arr[1] = Number(i.open);
								arr[2] = Number(i.close);
								arr[3] = Number(i.low);
								arr[4] = Number(i.high);
								arr[5] = Number(i.volume);
								arr[6] =
									((Number(i.open) - Number(i.yesterday_close)) /
										Number(i.yesterday_close)) *
									100;
								arr[7] = Number(i.ma5);
								arr[8] = Number(i.ma10);
								arr[9] = Number(i.ma20);
								arr[10] = Number(i.ma30);
								this.dataArr.push(arr);
							});
							this.setEchartOption();
						});
					}
				}
			},
			setEchartOption() {
				var categoryData = []; //把数组中的日期和数据分离，返回数组中的日期和数据
				var values = [];
				var volumes = [];
				var result = [];
				var upColor = "#E36A84";
				var downColor = "#0D5959";
				var option = null;
				this.initChart();
				// this.mrwd();
				function splitData(rawData) {
					var categoryData = [];
					var values = [];
					var volumes = [];
					for (var i = 0; i < rawData.length; i++) {
						categoryData.push(rawData[i].splice(0, 1)[0]);
						values.push(rawData[i]);
						volumes.push([
							i,
							rawData[i][4],
							rawData[i][0] > rawData[i][1] ? 1 : -1
						]);
					}

					return {
						categoryData: categoryData,
						values: values,
						volumes: volumes
					};
				}

				function calculateMA(dayCount, data) {
					var result = [];
					for (var i = 0, len = data.values.length; i < len; i++) {
						if (i < dayCount) {
							result.push("-");
							continue;
						}
						var sum = 0;
						for (var j = 0; j < dayCount; j++) {
							sum += data.values[i - j][1];
						}
						result.push(+(sum / dayCount).toFixed(3));
					}
					return result;
				}
				var data = splitData(this.dataArr);
				let that = this;
				this.myChart.setOption(
					(option = {
						animation: false,
						backgroundColor: "#fff",
						tooltip: {
							//+字准心
							trigger: "axis",
							axisPointer: {
								type: "cross"
							},
							formatter: function(params, v) {
								// console.log(params)
								that.open = params[0].value[1];
								that.close = params[0].value[2];
								that.low = params[0].value[3];
								that.high = params[0].value[4];
								that.ed = params[0].value[5];
								that.fu = params[0].value[6];
								that.m5 = params[0].value[7];
								that.m10 = params[0].value[8];
								that.m20 = params[0].value[9];
								that.m30 = params[0].value[10];
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
						visualMap: {
							show: false,
							seriesIndex: 5,
							dimension: 2,
							pieces: [{
									value: 1,
									color: downColor
								},
								{
									value: -1,
									color: upColor
								}
							]
						},
						grid: [{
								//位置
								left: "3",
								right: "3",
								top: "6%",
								height: "60%"
							},
							{
								left: "3",
								right: "3",
								top: "70%",
								height: "20%"
							}
						],
						xAxis: [{
								show: false,
								type: "category",
								data: data.categoryData,
								scale: true,
								boundaryGap: false,
								splitLine: {
									show: false
								},
								min: "dataMin",
								max: "dataMax",
								axisPointer: {
									label: {
										show: false
									},
									triggerTooltip: true,
									handle: {
										show: false,
										margin: 30,
										color: "#D6D6D6"
									}
								}
							},
							{
								type: "category",
								gridIndex: 1,
								data: data.categoryData,
								axisLine: {
									lineStyle: {
										color: "#D6D6D6"
									}
								}
							}
						],
						yAxis: [{
								min: function(value) {
									return Math.round(value.min);
								},
								max: function(value) {
									return Math.round(value.max);
								},
								splitArea: {
									show: false //是否显示分割 灰白背景
								},
								axisLabel: {
									inside: true
								},
								axisTick: {
									show: true,
									inside: true
								},
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
								name: "Dow-Jones index",
								type: "candlestick",
								data: data.values,
								itemStyle: {
									normal: {
										color: upColor,
										color0: downColor,
										borderColor: null,
										borderColor0: null
									}
								}
							},
							{
								name: "MA5",
								type: "line",
								data: calculateMA(5, data),
								smooth: true,
								lineStyle: {
									color: "#ff3e8b",
									width: 1
								}
							},
							{
								name: "MA10",
								type: "line",
								data: calculateMA(10, data),
								smooth: true,
								lineStyle: {
									color: "#ffac00",
									width: 1
								}
							},
							{
								name: "MA20",
								type: "line",
								data: calculateMA(20, data),
								smooth: true,
								lineStyle: {
									color: "#27e0ef",
									width: 1
								}
							},
							{
								name: "MA30",
								type: "line",
								data: calculateMA(30, data),
								smooth: true,
								width: 1,
								lineStyle: {
									color: "#ccc",
									width: 1
								}
							},
							{
								name: "Volume",
								type: "bar",
								xAxisIndex: 1,
								yAxisIndex: 1,
								data: data.volumes
							}
						]
					}),
					true
				);
				window.addEventListener('resize', this.resizeHandler);
			},

			swapCion() {
				this.$http({
					url: this.$http.adornUrl("/table/business"),
					method: "get",
				}).then(({
					data
				}) => {
					// console.log(data.data[1].cont)
					this.dateList = data.data[1].cont;
					this.headerList = data.data[0].header;

				});
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			// 初始化实例
			initChart() {
				let char = document.getElementById("myChart");
				this.myChart = echarts.init(char);
				// 当前配置项 优先级大于 默认配置项
				// console.log("当前视图的配置项", this.chartOption);
				// this.chart.setOption(this.chartOption);
				// this.$emit("getChart", this.chart);
			},
			mrwd() {
				let char = document.getElementById("myChart");

				let w = document.body.clientWidth;
				if (w < 1200) {
					w = (w - 40) + 'px';
				} else {
					w = '1160px';
				}
				char.style.width = w;
				console.log(w);
			},
			// 自适应
			resizeHandler() {
				this.myChart.resize();
			},
		},
		created() {
			this.getUrl()
			this.getData();
			this.swapCion();
			this.swapmrmc()
		}
	};
</script>

<style scoped lang="less">
	.pd-jylj {
		padding: 3px;
	}

	.jymrys {
		color: #0d5959;
	}

	.jymcys {
		color: #e36a84;
	}

	.qcbfb {
		margin: 0 10px;
	}

	.pd-ys {
		padding: 10px;
	}

	.cion-ys {
		height: 40px;
		background: #fff;
		line-height: 40px;
		padding: 0 20px;
		border-radius: 4px;
	}

	#myChart {
		margin-top: 0.5rem;
		width: 100%;
		height: 25rem;
	}

	.cion-logo {
		width: 20px;
		height: 20px;
	}

	.cion-rate {
		font-size: 14px;
		font-weight: 600;

		>div {
			padding: 5px 0;
		}
	}

	.pag-block {
		text-align: center;
		padding: 20px;
	}

	.el-icon-refresh {
		padding: 15px;
		font-size: 30px;
	}

	.el-input {
		padding-right: 40px;
	}

	.el-select {
		width: 150px;
	}

	.color-r {
		color: #df2020;
	}

	// @media (max-width: 1024px){
	//   #myChart {
	//   	width: 61.5rem;
	//   }
	// }
	// @media (max-width: 1024px){
	//   #myChart {
	//   	width: 61.5rem;
	//   }
	// }
</style>
