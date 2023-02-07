<!-- 投资详情 -->
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
			<div style="display: flex;background-color: #ffffff;">
				<div class="kline_top flex" style="width: 50%;">
					<div :class="{'ct':ct==0}" @click="cr(0)">分时</div>
					<!-- <div :class="{'ct':ct==1}" @click="cr(1)">日K</div>
				<div :class="{'ct':ct==2}" @click="cr(2)">周K</div>
				<div :class="{'ct':ct==3}" @click="cr(3)">月K</div> -->
				</div>
				<div style="width: 50%;">
					<div class="kline_top flex right">
						<div :class="{'ct':ct1==10}" @click="cr(10)">Volume</div>
						<div :class="{'ct':ct1==11}" @click="cr(11)">TVL</div>
						<div :class="{'ct':ct1==12}" @click="cr(12)">Liquidity</div>
						<div :class="{'ct':ct1==13}" @click="cr(13)">Fees</div>
					</div>
				</div>
			</div>
			<div class="kline_box">
				<InvestEchartsBar refName="baseBar" :timeSel="timeSel"></InvestEchartsBar>
			</div>
			<div>
				<div style="display: flow-root;">
					<div style="float: right;padding: 20px;">
						<!-- <el-button>投资</el-button> -->
						<el-button @click="qjyjm">交易</el-button>
					</div>
				</div>
				
				<!-- 创建投资 -->
				<div class="tzjyqy" style="margin: 25px; background:#ffffff">
					<div class="cion-title" style="padding: 20px;">创建投资</div>
					<div class="cion-cont">
						<div class="cion-title">选择币对及充值数额</div>
						<el-row justify="space-between">
							<el-col :span="10" :xs="24">
								<div class="flex cion-inp">
									<el-input v-model="cionNum" placeholder="0.0" type=""></el-input>
									<div class="cion-ys">{{cionName}}</div>
								</div>
								<div class="cion-ts">
									<span>${{money}}</span>
									<span class="cion-ed right">余额{{balance}}</span>
								</div>
							</el-col>
							<el-col :span="4" :xs="24">
								<div class="" style="text-align: center;">
									<div class="el-icon-refresh"></div>
								</div>
							</el-col>
							<el-col :span="10" :xs="24">
								<div class="flex cion-inp">
									<el-input v-model="cionNum1" placeholder="0.0"></el-input>
									<div class="cion-ys">{{cionName1}}</div>
								</div>
								<div class="cion-ts"><span>${{money1}}</span><span
										class="cion-ed right">余额{{balance1}}</span></div>
							</el-col>
						</el-row>
						</el-row>
						<div class="cion-title">设置兑换率范围</div>
						<div>
							<div style="text-align: center;font-size: 13px;padding-bottom: 10px;">
								当前兑换率：<span>{{nowRate}}</span> {{cionName1}} 每 {{cionName}}</div>
						</div>
						<el-row justify="space-between">
							<el-col :span="10" :xs="24" style="margin-right: 40px;">
								<div class="cion-rate" style="">
									<div style="text-align: center;font-size: 13px;padding-bottom: 10px;">
										<span class="left" style="padding-bottom: 10px;">最低兑换率：</span> <span
											class="right">{{cionName1}} 每 {{cionName}}</span>
									</div>
									<template>
										<el-input-number v-model="rate" :precision="4" :step="1.13" :max="99999"
											placeholder="0.00"></el-input-number>
									</template>
								</div>
							</el-col>
							<el-col :span="10" :xs="24">
								<div class="cion-rate">
									<div style="text-align: center;font-size: 13px;padding-bottom: 10px;">
										<span class="left" style="padding-bottom: 10px;">最高兑换率：</span> <span
											class="right">{{cionName1}} 每 {{cionName}}</span>
									</div>
									<template>
										<el-input-number v-model="rate" :precision="4" :step="1.13" :max="99999"
											placeholder="0.00"></el-input-number>
									</template>
								</div>
							</el-col>
							<el-col :span="3" :xs="24">
								<div class="" style="text-align: center;">
									<el-button class="el-buttons">全范围</el-button>
								</div>
							</el-col>
						</el-row>
						<div style="padding: 10px;"></div>
						<el-row justify="space-between">
							<el-col :span="12" :xs="24" style="">
								<div class="cion-rate" style="">
									<div class="cion-sy" style="text-align: center;">
										<span class="cion-jb">收益级别 0.3%</span>
										<!-- <span class="cion-xzl">选择27%</span> -->
										<!-- <div class="right cion-but">
											<span v-if="true">修改</span>
											<span v-if="false">隐藏</span>
										</div> -->
									</div>
								</div>
							</el-col>
							<!-- <el-col :span="4" :xs="6">
								<div class="cion-rate">
									<div class="cion-sy" style="font-size: 13px;padding: 0;">
										<span class="cion-jb">0.01% 非常稳定</span>
									</div>
									<div class="cion-xzls"><span class="cion-xzl">选择10%</span>
										<div class="cion-xzys"></div>
									</div>
								</div>
							</el-col>
							<el-col :span="4" :xs="6">
								<div class="cion-rate">
									<div class="cion-sy" style="font-size: 13px;padding: 0;">
										<span class="cion-jb">0.05% 稳定</span>
									</div>
									<div class="cion-xzls"><span class="cion-xzl">选择27%</span>
										<div class="cion-xzys"></div>
									</div>
								</div>
							</el-col>
							<el-col :span="4" :xs="6">
								<div class="cion-rate">
									<div class="cion-sy" style="font-size: 13px;padding: 0;">
										<span class="cion-jb">0.3% 大多数</span>
									</div>
									<div class="cion-xzls"><span class="cion-xzl">选择60%</span>
										<div class="cion-xzys cion-qdxzys"></div>
									</div>
								</div>
							</el-col>
							<el-col :span="4" :xs="6">
								<div class="cion-rate">
									<div class="cion-sy" style="font-size: 13px;padding: 0;">
										<span class="cion-jb">1% 低交易量</span>
									</div>
									<div class="cion-xzls"><span class="cion-xzl">选择1%</span>
										<div class="cion-xzys"></div>
									</div>

								</div>
							</el-col> -->
						</el-row>
					</div>
					<div style="padding: 20px; height: 80px;">
						<div class="right cion-pay">
							<el-button class="el-buttons" v-if="false" @click="dkqb">连接钱包</el-button>
							<el-button class="el-buttons" v-if="true" @click="dkqb">钱包支付</el-button>
						</div>
					</div>
				</div>
			</div>
			<!--当前投资组件  -->
			<InvestTrading></InvestTrading>
			<!-- 链接钱包组件 -->
			<Wallet ref="kg"></Wallet>
			

			<!--交易记录  -->
			<div style="padding-top: 20px;">

				<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
				<template>
					<div class="pag-block">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
							:current-page="currentPage" :page-size="10" layout=" prev, pager, next, jumper" :total="400"
							:pager-count="5">
						</el-pagination>
					</div>
				</template>
			</div>
		</div>
	</div>

</template>

<script>
	import {
		getMarket
	} from "../api/index";
	// import InvestTabsEcharts from '@/components/invest-tabs-echarts'
	import Breadcrumb from '@/components/breadcrumb'
	import InvestEchartsBar from '@/components/invest-echarts-bar'
	import BasicsTable from '@/components/table/basics-table'
	import InvestTrading from '@/components/invest-trading'
	import Wallet from '@/components/wallet/wallet'

	export default {
		name: 'investment-details',
		props: ['cate', 'words'],
		data() {
			return {
				qcldsez: 0,
				ldqcbfb: 0,
				mobilityAdd: false,
				mobilityremove: false,
				lqsxfVisible: false,
				mobilityList: true,
				mobilityDetails: false,
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
				ct: 0, //选项卡
				ct1: 10, //选项卡
				timeSel: 0,
				cion: "ETH/USDC",
				mbx: [{
					name: '投资',
					url: '/investment'
				}, {
					name: '投资详情',
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
				headerList: [],
				currentPage: 1,
			}
		},
		components: {
			InvestEchartsBar,
			Breadcrumb,
			BasicsTable,
			InvestTrading,
			Wallet
		},
		computed: {

		},
		methods: {
			qjyjm(){
				this.$router.push('/transaction/transaction-details#'+this.cion);
			},
			dkqb(){
				this.$refs.kg.open();
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

			getData() {
				//默认数据
				getMarket().then(res => {
					console.log(res.data);
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
				this.timeSel = e;
				if (e == 0) {
					this.radio = 0
				}
				//选项卡
				if (this.ct != e && e < 10) {
					this.ct = e;
				}
				if (this.ct1 != e && e >= 10) {
					this.ct1 = e;
				}
			},
			swapCion() {
				this.$http({
					url: this.$http.adornUrl("/table/swapCion"),
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
			}
		},
		created() {
			this.getUrl()
			this.getData();
			this.swapCion();
		}
	}
</script>

<style scoped lang="less">
	.qcbfb {
		margin: 0 10px;
	}

	.el-dialog {
		max-width: 450px;
	}

	.dhlfw {
		color: #565A69;
		font-size: 14px;
		text-align: center;
		margin-right: 4px;
		font-weight: 500;
	}

	.dhlz {
		box-sizing: border-box;
		margin: 0;
		min-width: 0;
		font-weight: 500;
		font-size: 20px;
		text-align: center;
	}

	.dhlsm {
		box-sizing: border-box;
		margin: 0;
		min-width: 0;
		font-weight: 500;
		font-size: 11px;
		color: #6E727D;
	}

	.dis-grid {
		text-align: center;
		display: grid;
		grid-auto-rows: auto;
		grid-row-gap: 8px;
		justify-items: center;
	}

	.bg-purple {
		background: #f7f8fa !important;
	}

	.bord-box {
		background: #e9fcfc;
		border-radius: 10px;
		border: 1px solid #EDEEF2;
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

	.box {
		width: 400px;

		.top {
			text-align: center;
		}

		.left {
			float: left;
			width: 60px;
		}

		.right {
			float: right;
			width: 60px;
		}

		.bottom {
			clear: both;
			text-align: center;
		}

		.item {
			margin: 4px;
		}

		.left .el-tooltip__popper,
		.right .el-tooltip__popper {
			padding: 8px 10px;
		}
	}

	.tznum {
		border-radius: 10px;
		cursor: pointer;
		user-select: none;
		display: flex;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
		color: #000000;
		margin: 8px 0;
		padding: 16px;
		text-decoration: none;
		font-weight: 500;
		background-color: #F7F8FA;

		.tznum-cion {
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
			width: 100%;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
	}

	.tznum-img {
		position: relative;
		width: 36px;

		img {
			width: 18px;
			height: 18px;
			background: radial-gradient(white 50%, #ffffff00 calc(75% + 1px), #ffffff00 100%);
			border-radius: 50%;
			-mox-box-shadow: 0 0 1px black;
			-webkit-box-shadow: 0 0 1px black;
			box-shadow: 0 0 1px black;
			border: 0px solid rgba(255, 255, 255, 0);
		}

	}

	.tznum-sxf {
		font-size: 14px;
		margin-left: 15px;
		background: #aaaaaa;
		padding: 5px;
		border-radius: 5px;
	}

	.tznum-fwl {
		background-color: #007D35;
		border-radius: 50%;
		height: 8px;
		width: 8px;
		margin-right: 4px;
	}

	.tznum-fww {
		background-color: #df2020;
		border-radius: 50%;
		height: 8px;
		width: 8px;
		margin-right: 4px;
	}

	.tznum-syfw {
		font-size: 14px;
		padding-top: 10px;

		.tznum-syz {
			padding: 0.25rem 0.5rem;
			border-radius: 8px;
		}

		.tznum-syzys {
			margin: 0 2px;
			color: #6E727D;
		}
	}

	.flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.cion-sy {
		font-size: 13px;
		padding: 10px;

		.cion-jb {
			font-weight: 600;
		}
	}

	.cion-xzl {
		margin: 0 5px;
		padding: 3px;
		background: #fff;
		border-radius: 5px;
		font-size: 12px;
	}

	.cion-xzls {
		padding-top: 3px;
	}

	.cion-but {
		>span {
			padding: 5px;
			background: #fff;
			border-radius: 5px;
		}
	}

	.cion-xzys {
		width: 15px;
		height: 15px;
		border-radius: 50px;
		border: 2px solid #df2020;
		float: right;
	}

	.cion-qdxzys {
		background-color: #df2020;
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


	.pag-block {
		text-align: center;
		padding: 20px;
	}

	.el-row {
		margin: 0 !important;
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		/* border-radius: 4px; */
		/* background-color: #f9fafc; */
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #ffffff;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		/* border-radius: 4px; */
		min-height: 106px;
		position: relative;
		align-items: center;
		text-align: center;
	}

	.row-bg {
		padding: 10px 0;
		/* background-color: #f9fafc; */
	}

	.grid-data {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		font-size: 12px;
		color: #757575;
		line-height: 25px;
	}

	.grid-title {
		font-size: 16px;
		color: #333333;
		font-weight: 700;
	}
</style>
