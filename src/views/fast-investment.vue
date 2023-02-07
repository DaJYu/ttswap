<!-- 快捷投资 -->
<template>
	<div class="site-content">
		<div class="tzjyqy" style="margin: 25px; background:#ffffff">
			<div class="cion-title" style="padding: 20px;">创建投资</div>
			<div class="cion-cont">
				<div class="cion-title">选择币对及充值数额</div>
				<el-row class="flex-between" style="align-items: center; margin: 10px 0px;">
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
							<el-select v-model="cionName" filterable>
								<el-option v-for="item in options" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
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
					<el-button class="el-buttons" v-if="false">连接钱包</el-button>
					<el-button class="el-buttons" v-if="true">钱包支付</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "fast-investment",
		data() {
			return {
				money: 0,
				balance: 0,
				money1: 0,
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
		}
	}
</script>

<style>
</style>