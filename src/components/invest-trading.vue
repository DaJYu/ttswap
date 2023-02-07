<!--当前投资组件  -->
<template>
	<div>
		<!-- 当前投资列表 -->
		<div class="tzjyqy" style="margin: 25px; background:#ffffff;padding: 10px 0;" v-show="mobilityList">
			<div>
				<div class="cion-title" style="padding: 20px;">当前投资数（2）</div>
				<div style="padding: 10px;">
					<div class="tznum" @click="mobilityDetailss(2154)">
						<div class="tznum-cion flex">
							<div class="flex">
								<!-- <div class="tznum-img">
									<img
										src="https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_DAI.svg" />
									<img style="position: absolute;left: 9px;"
										src="data:image/png;base64,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" />
								</div> -->
								<div style="font-weight: 600;">ETH/BTC</div>
								<div class="tznum-sxf">1%</div>
							</div>
							<div>
								<el-tooltip v-if="true" class="item" effect="light" placement="left">
									<div slot="content">此投资的兑换率在您选定的范围内。因此您的流动资金目前正在赚取手续费。</div>
									<div class="tznum-sxf flex">
										<div class="tznum-fwl"></div>
										<div>在范围内</div>
									</div>
								</el-tooltip>
								<el-tooltip v-else class="item" effect="light" placement="left">
									<div slot="content">目前市场兑换率超出您指定的投资范围。您将不会赚取手续费。</div>
									<div class="tznum-sxf flex">
										<div class="tznum-fww"></div>
										<div>超出范围</div>
									</div>
								</el-tooltip>
							</div>
						</div>
						<div>
							<div class="tznum-syfw">
								<span class="tznum-syz">
									<span class="tznum-syzys">最小值：</span>9.973
									<span class="">DAI</span> 每
									<span class="">ETH</span>
								</span>
								<span class="tznum-syzys">
									<span class="">⟷</span>
								</span>
								<span class="tznum-syz">
									<span class="tznum-syzys">最大值：</span>99.461
									<span class="">DAI</span> 每
									<span class="">ETH</span>
								</span>
							</div>
						</div>
					</div>
					<div class="tznum" @click="mobilityDetailss(2356)">
						<div class="tznum-cion flex">
							<div class="flex">
								<!-- <div class="tznum-img">
									<img
										src="https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_DAI.svg" />
									<img style="position: absolute;left: 9px;"
										src="data:image/png;base64,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" />
								</div> -->
								<div style="font-weight: 600;">ETH/BTC</div>
								<div class="tznum-sxf">1%</div>
							</div>
							<div>
								<el-tooltip v-if="false" class="item" effect="light" placement="left">
									<div slot="content">此投资的兑换率在您选定的范围内。因此您的流动资金目前正在赚取手续费。</div>
									<div class="tznum-sxf flex">
										<div class="tznum-fwl"></div>
										<div>在范围内</div>
									</div>
								</el-tooltip>
								<el-tooltip v-else class="item" effect="light" placement="left">
									<div slot="content">目前市场兑换率超出您指定的投资范围。您将不会赚取手续费。</div>
									<div class="tznum-sxf flex">
										<div class="tznum-fww"></div>
										<div>超出范围</div>
									</div>
								</el-tooltip>
							</div>
						</div>
						<div>
							<div class="tznum-syfw">
								<span class="tznum-syz">
									<span class="tznum-syzys">最小值：</span>20.973
									<span class="">DAI</span> 每
									<span class="">ETH</span>
								</span>
								<span class="tznum-syzys">
									<span class="">⟷</span>
								</span>
								<span class="tznum-syz">
									<span class="tznum-syzys">最大值：</span>50.461
									<span class="">DAI</span> 每
									<span class="">ETH</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--流动性  -->
		<div class="tzjyqy" style="margin: 25px; background:#ffffff; padding: 20px" v-show="mobilityDetails">
			<div @click="mobilityLists()">
				<span class="el-icon-back pointer">返回投资列表</span>
			</div>
			<el-row class="pd-ys">
				<el-col :span="12" :xs="24" style="padding-top: 5px;">
					<div class="tznum-cion flex">
						<div class="flex">
							<div style="font-weight: 600;">DAI/ETH</div>
							<div class="tznum-sxf">1%</div>
						</div>
						<div>
							<el-tooltip v-if="true" class="item" effect="light" placement="left">
								<div slot="content">此投资的兑换率在您选定的范围内。因此您的流动资金目前正在赚取手续费。</div>
								<div class="tznum-sxf flex">
									<div class="tznum-fwl"></div>
									<div>在范围内</div>
								</div>
							</el-tooltip>
							<el-tooltip v-else class="item" effect="light" placement="left">
								<div slot="content">目前市场兑换率超出您指定的投资范围。您将不会赚取手续费。</div>
								<div class="tznum-sxf flex">
									<div class="tznum-fww"></div>
									<div>超出范围</div>
								</div>
							</el-tooltip>
						</div>
					</div>
				</el-col>
				<el-col :span="12" :xs="24">
					<div class="">
						<el-button size="medium" @click="mobilityAddFou()">增加流动资金</el-button>
						<el-button size="medium" @click="mobilityremoveFou()">去除流动资金</el-button>
					</div>
				</el-col>
			</el-row>
			<el-row :gutter="10">
				<el-col :span="12" :xs="24">
					<div class="pd-ys bg-purple">
						<div class="cion-title">流动资金</div>
						<div class="cion-title">$-</div>
						<div class="bord-box">
							<div class="flex-between pd-ys">
								<div>DAI</div>
								<div><span>57.98</span><span class="tznum-sxf">42%</span></div>
							</div>
							<div class="flex-between pd-ys">
								<div>ETH</div>
								<div><span>3.16</span><span class="tznum-sxf">58%</span></div>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="12" :xs="24">
					<div class="pd-ys bg-purple">
						<div class="flex flex-between">
							<div class="cion-title">未领取的手续费</div>
							<el-button size="mini" @click="lqsxfVisible = true">收取手续费</el-button>
							<el-dialog title="领取已累积的手续费" :visible.sync="lqsxfVisible" :lock-scroll="true" width="400px">
								<div class="bord-box">
									<div class="flex-between pd-ys">
										<div><span>0.01212</span></div>
										<div>DAI</div>
									</div>
									<div class="flex-between pd-ys">
										<div><span>0.001291</span></div>
										<div>ETH</div>
									</div>
								</div>
								<div class="pd-ys">收取手续费的操作将为您提取您当前已累积的手续费。</div>
								<span slot="footer" class="dialog-footer">
									<el-button style="width: 100%;" @click="sqsxfhs">收取</el-button>
								</span>
							</el-dialog>
						</div>
						<div class="cion-title">$-</div>
						<div class="bord-box">
							<div class="flex-between pd-ys">
								<div>DAI</div>
								<div><span>0.01212</span></div>
							</div>
							<div class="flex-between pd-ys">
								<div>ETH</div>
								<div><span>0.001291</span></div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<div>
				<div class="cion-title">兑换率范围</div>
				<div class="flex-between" style="text-align: center;align-items: center;margin: 10px 0;">
					<div class="pd-ys bg-purple dis-grid">
						<div class="dhlfw">最低兑换率</div>
						<div class="dhlz">9.973</div>
						<div class="dhlfw">DAI 每 ETH</div>
						<div class="dhlsm">在达到此兑换率时，您的仓位流动资金将 100% 由 ETH 代币所组成。</div>
					</div>
					<span style="color: #6E727D; margin: 0 1rem;">⟷</span>
					<div class="pd-ys bg-purple dis-grid">
						<div class="dhlfw">最高兑换率</div>
						<div class="dhlz">99.461</div>
						<div class="dhlfw">DAI 每 ETH</div>
						<div class="dhlsm">在达到此兑换率时，您的仓位流动资金将 100% 由 DAI 代币所组成。</div>
					</div>
				</div>
				<div class="pd-ys bg-purple dis-grid" style="text-align: center;">
					<div class="dhlfw">当前兑换率</div>
					<div class="dhlz">24.9282</div>
					<div class="dhlfw">DAI 每 ETH</div>
				</div>
			</div>
		</div>
		<!-- 添加流动性 -->
		<div style="background:#ffffff; padding: 20px;max-width: 800px;margin: 0 auto;" v-show="mobilityAdd">
			<div class="flex">
				<div @click="fhtzxq()" class="el-icon-back pointer cion-title"></div>
				<div class="cion-title" style="width: 70%;text-align: center;font-size: 16px;">添加流动性</div>
			</div>
			<div class="tznum-cion flex-between">
				<div class="flex">
					<div style="font-weight: 600;">DAI/ETH</div>
				</div>
				<div>
					<el-tooltip v-if="true" class="item" effect="light" placement="left">
						<div slot="content">此投资的兑换率在您选定的范围内。因此您的流动资金目前正在赚取手续费。</div>
						<div class="tznum-sxf flex">
							<div class="tznum-fwl"></div>
							<div>在范围内</div>
						</div>
					</el-tooltip>
					<el-tooltip v-else class="item" effect="light" placement="left">
						<div slot="content">目前市场兑换率超出您指定的投资范围。您将不会赚取手续费。</div>
						<div class="tznum-sxf flex">
							<div class="tznum-fww"></div>
							<div>超出范围</div>
						</div>
					</el-tooltip>
				</div>
			</div>
			<div class="bord-box" style="margin: 10px 0;">
				<div class="flex-between pd-ys">
					<div>DAI</div>
					<div><span>57.98</span></div>
				</div>
				<div class="flex-between pd-ys">
					<div>ETH</div>
					<div><span>3.16</span></div>
				</div>
				<div class="flex-between pd-ys">
					<div>手续费级别</div>
					<div><span>1%</span></div>
				</div>
			</div>
			<div>
				<div class="cion-title">选定范围</div>
				<div class="flex-between" style="text-align: center;align-items: center;margin: 10px 0;">
					<div class="pd-ys bg-purple dis-grid">
						<div class="dhlfw">最低兑换率</div>
						<div class="dhlz">9.973</div>
						<div class="dhlfw">DAI 每 ETH</div>
						<div class="dhlsm">在达到此兑换率时，您的仓位流动资金将 100% 由 ETH 代币所组成。</div>
					</div>
					<span style="color: #6E727D; margin: 0 1rem;">⟷</span>
					<div class="pd-ys bg-purple dis-grid">
						<div class="dhlfw">最高兑换率</div>
						<div class="dhlz">99.461</div>
						<div class="dhlfw">DAI 每 ETH</div>
						<div class="dhlsm">在达到此兑换率时，您的仓位流动资金将 100% 由 DAI 代币所组成。</div>
					</div>
				</div>
				<div class="pd-ys bg-purple dis-grid" style="text-align: center;">
					<div class="dhlfw">当前兑换率</div>
					<div class="dhlz">24.9282</div>
					<div class="dhlfw">DAI 每 ETH</div>
				</div>
			</div>
			<div class="" style="margin: 10px 0;">
				<div class="cion-inp">
					<div class="flex">
						<el-input v-model="cionNum" placeholder="0.0" type=""></el-input>
						<div class="cion-ys">{{cionName}}</div>
					</div>
					<div class="cion-ts">
						<!-- <span>${{money}}</span> -->
						<span class="cion-ed right">余额{{balance}}</span>
					</div>
				</div>
				<div class="cion-inp" style="margin-top: 10px;">
					<div class="flex">
						<el-input v-model="cionNum1" placeholder="0.0" type=""></el-input>
						<div class="cion-ys">{{cionName1}}</div>
					</div>
					<div class="cion-ts">
						<!-- <span>${{money}}</span> -->
						<span class="cion-ed right">余额{{balance1}}</span>
					</div>
				</div>
				<div class="pd-ys">
					<el-button style="width: 100%;" @click="tjldxhs()">添加</el-button>
				</div>
			</div>
		</div>
		<!--去除流动资金  -->
		<div style="background:#ffffff; padding: 20px;max-width: 800px;margin: 0 auto;" v-show="mobilityremove">

			<div class="flex">
				<div @click="fhtzxq()" class="el-icon-back pointer cion-title"></div>
				<div class="cion-title" style="width: 70%;text-align: center;font-size: 16px;">去除流动值</div>
			</div>
			<div class="tznum-cion flex-between">
				<div class="flex">
					<div style="font-weight: 600;">DAI/ETH</div>
				</div>
				<div>
					<el-tooltip v-if="true" class="item" effect="light" placement="left">
						<div slot="content">此投资的兑换率在您选定的范围内。因此您的流动资金目前正在赚取手续费。</div>
						<div class="tznum-sxf flex">
							<div class="tznum-fwl"></div>
							<div>在范围内</div>
						</div>
					</el-tooltip>
					<el-tooltip v-else class="item" effect="light" placement="left">
						<div slot="content">目前市场兑换率超出您指定的投资范围。您将不会赚取手续费。</div>
						<div class="tznum-sxf flex">
							<div class="tznum-fww"></div>
							<div>超出范围</div>
						</div>
					</el-tooltip>
				</div>
			</div>
			<div class="" style="margin: 10px 0;">
				
				<el-row>
					<el-col :span="8" :xs="24" class="flex">
						<div class="cion-title">数额<span style="margin-left: 40px;">{{ldqcbfb}}%</span></div>
					</el-col>
					<el-col :span="16" :xs="24" style="align-items: center;text-align: center;">
						<el-tag class="pointer qcbfb" type="danger" @click="ldqcbfb=10">10%</el-tag>
						<el-tag class="pointer qcbfb" type="danger" @click="ldqcbfb=25">25%</el-tag>
						<el-tag class="pointer qcbfb" type="danger" @click="ldqcbfb=50">50%</el-tag>
						<el-tag class="pointer qcbfb" type="danger" @click="ldqcbfb=100">100%</el-tag>
					</el-col>
				</el-row>
				<div class="block">
				    <el-slider v-model="ldqcbfb"></el-slider>
				  </div>
			</div>
			<div class="" style="margin: 10px 0;">
				<div class="cion-title">去除额度</div>
				<div class="bord-box" style="margin: 10px 0;">
					<div class="flex-between pd-ys">
						<div>流动池汇集 DAI:</div>
						<div><span>{{57.98*ldqcbfb/100}}</span></div>
					</div>
					<div class="flex-between pd-ys">
						<div>流动池汇集 ETH:</div>
						<div><span>{{3.16*ldqcbfb/100}}</span></div>
					</div>
				</div>
				<div class="pd-ys">
					<el-button style="width: 100%;" @click="qcldxhs()">去除</el-button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "invest-trading",
		data() {
			return {
				qcldsez:0,
				ldqcbfb:0,
				mobilityAdd: false,
				mobilityremove: false,
				lqsxfVisible: false,
				mobilityList: true,
				mobilityDetails: false,
				money: 0,
				balance: 0,
				money1: 0,
				balance1: 0,
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
			}
		},
		methods: {
			tccsh() {
				this.mobilityAdd= false,
				this.mobilityremove= false,
				this.lqsxfVisible= false,
				this.mobilityList= false,
				this.mobilityDetails= false
			},
			tjldxhs() {
				this.tccsh()
				this.mobilityDetails = true
			},
			qcldxhs() {
				this.tccsh()
				this.mobilityDetails = true
			},
			fhtzxq() {
				this.tccsh()
				this.mobilityDetails = true
			},
			mobilityAddFou() {
				this.tccsh()
				this.mobilityAdd = true
			},
			mobilityremoveFou() {
				this.tccsh()
				this.mobilityremove = true
			},
			sqsxfhs() {
				this.lqsxfVisible = false
			},
			mobilityDetailss() {
				this.tccsh()
				this.mobilityDetails = true
			},
			mobilityLists() {
				this.tccsh()
				this.mobilityList = true

			},
		},
	}
</script>

<style scoped lang="less">
	.qcbfb{
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
